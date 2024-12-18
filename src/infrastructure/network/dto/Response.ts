import type NetworkMessage from '@/infrastructure/network/dto/NetworkMessage'
import HttpStatusCode from '@/infrastructure/network/enum/HttpStatusCode'

export default interface Response<T> {
  status: HttpStatusCode
  meta?: T
  data: T
  warnings: NetworkMessage[]
  errors: NetworkMessage[]
}
