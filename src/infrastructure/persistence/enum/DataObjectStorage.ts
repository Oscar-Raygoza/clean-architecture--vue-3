export interface DataObjectStorage<T> {
  get(): T
  set(value: T): void
}
