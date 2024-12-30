import 'reflect-metadata'

import { injectable } from 'inversify'
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

@injectable()
export default class LocalStorageManagerStorage implements PersistenceRepository {
  getItem<T>(key: string, defaultValue: T): T {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : defaultValue
  }

  getRawString(key: string, defaultValue: string): string {
    return localStorage.getItem(key) ? localStorage.getItem(key)! : defaultValue
  }

  setItem<T>(key: string, val: T): void {
    localStorage.setItem(key, JSON.stringify(val))
  }

  setRawItem(key: string, val: string) {
    localStorage.setItem(key, val)
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
