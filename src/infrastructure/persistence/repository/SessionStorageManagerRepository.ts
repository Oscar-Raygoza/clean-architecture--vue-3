import 'reflect-metadata'

import { injectable } from 'inversify'
import type { PersistenceRepository } from '@/infrastructure/persistence/repository/PersistenceRepository'

@injectable()
export default class SessionStorageManagerStorage implements PersistenceRepository {
  getItem<T>(key: string, defaultValue: T): T {
    const item = sessionStorage.getItem(key)

    return item ? JSON.parse(item) : defaultValue
  }

  getRawString(key: string, defaultValue: string): string {
    return sessionStorage.getItem(key) ? sessionStorage.getItem(key)! : defaultValue
  }

  setItem<T>(key: string, val: T): void {
    sessionStorage.setItem(key, JSON.stringify(val))
  }

  setRawItem(key: string, val: string) {
    sessionStorage.setItem(key, val)
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key)
  }

  clear() {
    sessionStorage.clear()
  }
}
