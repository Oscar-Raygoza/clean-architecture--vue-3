export interface PersistentStorageRepository<T> {
  get(): T
  set(value: T): void
}
