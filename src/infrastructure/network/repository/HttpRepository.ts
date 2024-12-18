import type Payload from '@/infrastructure/network/dto/Payload'
import type Response from '@/infrastructure/network/dto/Response'

export interface HttpRepository {
  get<T, U>(url: string, payload?: Payload<T>): Promise<Response<U>>
  put<T, U>(url: string, payload?: Payload<T>): Promise<Response<U>>
  post<T, U>(url: string, payload?: Payload<T>): Promise<Response<U>>
  delete<T, U>(url: string, payload?: Payload<T>): Promise<Response<U>>
  patch<T, U>(url: string, payload?: Payload<T>): Promise<Response<U>>
}
