import { Request } from "./request";

export type Interceptor = (request: Request) => Request | PromiseLike<Request>;
