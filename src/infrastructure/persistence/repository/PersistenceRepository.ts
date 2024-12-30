export interface PersistenceRepository {
  getItem<T>(key: string, defaultValue: T): T
  getRawString(key: string, defaultValue: string): string
  setItem<T>(key: string, val: T): void
  setRawItem(key: string, val: string): void
  removeItem(key: string): void
  clear(): void
}
