// Generate unique string
// Note that this is not for encryption
export function generateUniqueString(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
