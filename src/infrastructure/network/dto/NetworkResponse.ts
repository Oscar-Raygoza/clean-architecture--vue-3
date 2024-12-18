export type NetworkResponse<T = unknown> = {
  json: <J = T>() => Promise<J>;
} & Response;
