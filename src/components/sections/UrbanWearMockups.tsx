export default function UrbanWearMockups() {
  return (
    <div className="relative">
      {/* Desktop browser mockup */}
      <div className="rounded-2xl border border-white/10 bg-surface/60 p-4 backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span
            aria-hidden
            className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-500"
          >
            urbanwear-store-vert.vercel.app
          </span>
        </div>

        {/* Skeleton storefront UI */}
        <div aria-hidden className="mt-4 space-y-4">
          {/* Mini navbar */}
          <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
            <div className="h-3 w-16 rounded-full bg-gradient-to-r from-brand/70 to-sky-400/70" />
            <div className="flex gap-2">
              <div className="h-2.5 w-10 rounded-full bg-white/10" />
              <div className="h-2.5 w-10 rounded-full bg-white/10" />
              <div className="h-2.5 w-10 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Hero banner */}
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-brand/20 to-sky-500/10 px-5 py-6">
            <div className="space-y-2">
              <div className="h-3 w-28 rounded-full bg-white/15" />
              <div className="h-3 w-20 rounded-full bg-white/10" />
            </div>
            <div className="h-10 w-24 rounded-lg bg-brand/30" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/5 bg-white/5 p-3"
              >
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="mt-2 h-2.5 w-3/4 rounded-full bg-white/10" />
                <div className="mt-1.5 h-2.5 w-1/3 rounded-full bg-brand/40" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile preview */}
      <div
        aria-hidden
        className="absolute -bottom-10 -right-4 w-32 rounded-[1.5rem] border border-white/10 bg-surface/90 p-2.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:-right-8 sm:w-36"
      >
        <div className="rounded-[1.2rem] border border-white/5 bg-white/5 p-3">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/15" />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-2 w-8 rounded-full bg-brand/50" />
              <div className="h-2 w-5 rounded-full bg-white/10" />
            </div>
            <div className="h-8 rounded-lg bg-gradient-to-r from-brand/25 to-sky-500/10" />
            <div className="h-12 rounded-lg bg-white/10" />
            <div className="h-12 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
