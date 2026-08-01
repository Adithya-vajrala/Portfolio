/**
 * Conditionally joins class names together, filtering out falsy values.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ')
}
