export default function isNull(value: unknown): boolean {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }
  return false;
}
