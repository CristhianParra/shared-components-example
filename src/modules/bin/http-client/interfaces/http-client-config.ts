import { Interceptor } from "./interceptor";

export interface HttpClientConfig {
  baseURL?: string;
  interceptors?: Interceptor[];
}
