import { injectable } from 'inversify'

import ky from 'ky'
import type { Hooks, KyInstance } from 'ky'

import config from "@/infrastructure/config/constants"

import type { HTTPError } from '@/infrastructure/network/dto/HttpError'
import type { HttpRepository } from '@/infrastructure/network/repository/HttpRepository'

import type Payload from '@/infrastructure/network/dto/Payload'
import type Response from '@/infrastructure/network/dto/Response'

import { NetworkErrorHandlerCode } from '@/application/network/error/enum/NetworkErrorHandlerCode'
import NetworkErrorHandler from '@/application/network/error/NetworkErrorHandler'

@injectable()
export default class HttpServiceRepository implements HttpRepository {
  private readonly http: KyInstance

  constructor() {
    this.http = ky.create({
      timeout: config.TIMEOUT_NETWORK,
    })
  }

  async get<T, U>(url: string, params?: Payload<T>): Promise<Response<U>> {
    try {
      const response = await this.http.get(url, {
        searchParams: params?.data as string,
        prefixUrl: params?.baseUrl,
        headers: params?.headers,
        hooks: params?.hooks as Hooks,
        retry: params?.retry,
      })

      return response.json<Response<U>>()
    } catch (error) {
      const { response } = error as HTTPError

      throw new NetworkErrorHandler(NetworkErrorHandlerCode.NETWORK_ERROR, String(response?.status))
    }
  }

  async post<T, U>(url: string, params?: Payload<T>): Promise<Response<U>> {
    try {
      const response = await this.http.post(url, {
        searchParams: params?.data as string,
        json: params?.data,
        prefixUrl: params?.baseUrl,
        headers: params?.headers,
        hooks: params?.hooks as Hooks,
        retry: params?.retry,
      })

      return response.json<Response<U>>()
    } catch (error) {
      const { response } = error as HTTPError

      throw new NetworkErrorHandler(NetworkErrorHandlerCode.NETWORK_ERROR, String(response?.status))
    }
  }

  async put<T, U>(url: string, params?: Payload<T>): Promise<Response<U>> {
    try {
      const response = await this.http.put(url, {
        searchParams: params?.data as string,
        json: params?.data,
        prefixUrl: params?.baseUrl,
        headers: params?.headers,
        hooks: params?.hooks as Hooks,
        retry: params?.retry,
      })

      return response.json<Response<U>>()
    } catch (error) {
      const { response } = error as HTTPError

      throw new NetworkErrorHandler(NetworkErrorHandlerCode.NETWORK_ERROR, String(response?.status))
    }
  }

  async patch<T, U>(url: string, params?: Payload<T>): Promise<Response<U>> {
    try {
      const response = await this.http.patch(url, {
        searchParams: params?.data as string,
        json: params?.data,
        prefixUrl: params?.baseUrl,
        headers: params?.headers,
        hooks: params?.hooks as Hooks,
        retry: params?.retry,
      })

      return response.json<Response<U>>()
    } catch (error) {
      const { response } = error as HTTPError

      throw new NetworkErrorHandler(NetworkErrorHandlerCode.NETWORK_ERROR, String(response?.status))
    }
  }

  async delete<T, U>(url: string, params?: Payload<T>): Promise<Response<U>> {
    try {
      const response = await this.http.patch(url, {
        searchParams: params?.data as string,
        json: params?.data,
        prefixUrl: params?.baseUrl,
        headers: params?.headers,
        hooks: params?.hooks as Hooks,
        retry: params?.retry,
      })

      return response.json<Response<U>>()
    } catch (error) {
      const { response } = error as HTTPError

      throw new NetworkErrorHandler(NetworkErrorHandlerCode.NETWORK_ERROR, String(response?.status))
    }
  }
}
