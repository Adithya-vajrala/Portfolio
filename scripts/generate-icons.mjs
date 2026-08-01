/**
 * Generates the static PNG assets (apple-touch-icon, PWA icons, OG image)
 * from the brand's "V" mark — no design tooling required.
 *
 *   node scripts/generate-icons.mjs
 *
 * Assets are written to /public and referenced by index.html + the manifest.
 */
import { deflateSync } from 'node:zlib'
import { writeFileSync } from 'node:fs'

const INK = [15, 23, 42] // #0f172a
const SURFACE = [30, 41, 59] // #1e293b
const BRAND = [56, 189, 248] // #38bdf8

// "V" mark, normalized from the 64x64 favicon viewBox (matches public/favicon.svg)
const V = [
  [0.5, 0.25],
  [0.734375, 0.75],
  [0.6328125, 0.75],
  [0.5, 0.4375],
  [0.3671875, 0.75],
  [0.265625, 0.75],
]

function pointInPolygon(x, y, polygon) {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i]
    const [xj, yj] = polygon[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }
  return inside
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function roundedRectInside(x, y, width, height, radius) {
  if (x < 0 || y < 0 || x >= width || y >= height) return false
  const cx = width / 2
  const cy = height / 2
  const dx = Math.max(Math.abs(x - cx) - (width / 2 - radius), 0)
  const dy = Math.max(Math.abs(y - cy) - (height / 2 - radius), 0)
  return dx * dx + dy * dy <= radius * radius
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    table[n] = c >>> 0
  }
  return table
})()

function crc32(buffer) {
  let crc = 0xffffffff
  for (let i = 0; i < buffer.length; i++) {
    crc = CRC_TABLE[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([length, typeBuf, data, crc])
}

function encodePng(width, height, sample) {
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)

  for (let y = 0; y < height; y++) {
    const rowStart = y * (stride + 1)
    raw[rowStart] = 0 // filter: none
    for (let x = 0; x < width; x++) {
      // 2x supersampling for smooth edges
      const acc = [0, 0, 0, 0]
      for (const [ox, oy] of [
        [0.25, 0.25],
        [0.75, 0.25],
        [0.25, 0.75],
        [0.75, 0.75],
      ]) {
        const [r, g, b, a] = sample(x + ox, y + oy)
        acc[0] += r
        acc[1] += g
        acc[2] += b
        acc[3] += a
      }
      const offset = rowStart + 1 + x * 4
      raw[offset] = Math.round(acc[0] / 4)
      raw[offset + 1] = Math.round(acc[1] / 4)
      raw[offset + 2] = Math.round(acc[2] / 4)
      raw[offset + 3] = Math.round(acc[3] / 4)
    }
  }

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type: RGBA
  ihdr[10] = 0
  ihdr[11] = 0
  ihdr[12] = 0

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/** App icon: ink rounded square with the centered brand V mark. */
function appIconSampler(size) {
  const radius = size * 0.2
  const box = size * 0.62
  const origin = (size - box) / 2

  return (x, y) => {
    if (!roundedRectInside(x, y, size, size, radius)) return [0, 0, 0, 0]
    const nx = (x - origin) / box
    const ny = (y - origin) / box
    if (pointInPolygon(nx, ny, V)) return [...BRAND, 255]
    return [...INK, 255]
  }
}

/** OG image: ink -> surface vertical gradient with a large centered V mark. */
function ogImageSampler(width, height) {
  const box = height * 0.55
  const originX = (width - box) / 2
  const originY = (height - box) / 2

  return (x, y) => {
    const t = y / height
    const background = [
      Math.round(lerp(INK[0], SURFACE[0], t)),
      Math.round(lerp(INK[1], SURFACE[1], t)),
      Math.round(lerp(INK[2], SURFACE[2], t)),
    ]
    const nx = (x - originX) / box
    const ny = (y - originY) / box
    if (pointInPolygon(nx, ny, V)) return [...BRAND, 255]
    return [...background, 255]
  }
}

const OUTPUTS = [
  ['public/apple-touch-icon.png', 180, 180, appIconSampler(180)],
  ['public/icon-192.png', 192, 192, appIconSampler(192)],
  ['public/icon-512.png', 512, 512, appIconSampler(512)],
  ['public/og-image.png', 1200, 630, ogImageSampler(1200, 630)],
]

for (const [file, width, height, sampler] of OUTPUTS) {
  const png = encodePng(width, height, sampler)
  writeFileSync(file, png)
  console.log(`wrote ${file} (${width}x${height}, ${png.length} bytes)`)
}
