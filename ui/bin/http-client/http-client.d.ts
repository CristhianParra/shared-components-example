import { HttpClientConfig } from "./interfaces/http-client-config";
import { Request } from "./interfaces/request";
export declare class HttpClient {
    private config;
    constructor(config?: HttpClientConfig);
    get<T>(url: string, params?: {}, config?: {}): Promise<T>;
    post<T>(url: string, body?: {}, params?: {}, config?: {}): Promise<T>;
    put<T>(url: string, body?: {}, params?: {}, config?: {}): Promise<T>;
    patch<T>(url: string, body?: {}, params?: {}, config?: {}): Promise<T>;
    delete<T>(url: string, body?: {}, params?: {}, config?: {}): Promise<T>;
    _fetch<T>(request: Request): Promise<T>;
    _buildBaseRequest({ url, params, body, config }: Request, method: string): Promise<Request>;
    _applyInterceptors(request: Request): Promise<Request>;
    _buildURLFromRequest(request: Request): string;
    _buildQueryString(params: Record<string, string> | undefined, encoded?: boolean): string;
    _requestHasBody(request: Request): number;
}
