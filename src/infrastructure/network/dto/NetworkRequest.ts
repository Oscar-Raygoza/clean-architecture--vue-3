export type NetworkRequest<T = unknown> = {
  json: <J = T>() => Promise<J>;
} & Request;
