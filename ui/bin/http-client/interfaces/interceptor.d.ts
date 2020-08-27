import { Request } from "./request";
export declare type Interceptor = (request: Request) => Request | PromiseLike<Request>;
