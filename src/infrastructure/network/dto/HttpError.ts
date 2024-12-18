import type { NetworkRequest } from "./NetworkRequest";
import type { NetworkResponse } from "./NetworkResponse";

export declare class HTTPError<T = unknown> extends Error {
  response: NetworkResponse<T>;
  request: NetworkRequest;
  constructor(response: Response, request: Request);
}
