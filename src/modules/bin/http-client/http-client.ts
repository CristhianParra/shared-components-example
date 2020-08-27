import { HttpClientConfig } from "./interfaces/http-client-config";
import { Body } from "./interfaces/body";
import { Request } from "./interfaces/request";

export class HttpClient {
  constructor(private config: HttpClientConfig = {}) {}

  async get<T>(url: string, params = {}, config = {}) {
    const request = await this._buildBaseRequest(
      {
        url,
        params,
        body: undefined,
        config,
      },
      "GET"
    );
    return this._fetch<T>(request);
  }

  async post<T>(url: string, body = {}, params = {}, config = {}) {
    const request = await this._buildBaseRequest(
      {
        url,
        params,
        body,
        config,
      },
      "POST"
    );
    return this._fetch<T>(request);
  }

  async put<T>(url: string, body = {}, params = {}, config = {}) {
    const request = await this._buildBaseRequest(
      {
        url,
        params,
        body,
        config,
      },
      "PUT"
    );
    return this._fetch<T>(request);
  }

  async patch<T>(url: string, body = {}, params = {}, config = {}) {
    const request = await this._buildBaseRequest(
      {
        url,
        params,
        body,
        config,
      },
      "PATCH"
    );
    return this._fetch<T>(request);
  }

  async delete<T>(url: string, body = {}, params = {}, config = {}) {
    const request = await this._buildBaseRequest(
      {
        url,
        params,
        body,
        config,
      },
      "DELETE"
    );
    return this._fetch<T>(request);
  }

  _fetch<T>(request: Request): Promise<T> {
    if (!request) {
      return new Promise(() => {});
    }

    if (this._requestHasBody(request)) {
      const getBodyMap: Record<string, (body: Body) => string> = {
        "application/json": (body) => JSON.stringify(body),
        "application/x-www-form-urlencoded": (body) =>
          this._buildQueryString(body, true),
      };
      const finalConfig = request.config;
      /*
             We can safely access headers object here, since
             buildBaseRequest it's taking care of always creating one
            */
      const headers = finalConfig.headers as Record<string, string>;
      const contentType = headers["Content-Type"].split(";")[0];
      finalConfig.body = getBodyMap[contentType](request.body);
    }

    const url = this._buildURLFromRequest(request);
    const fetchCall = fetch(url, request.config);
    /*
         Fetch promises only reject with a TypeError when a network error occurs;
         Since 4xx and 5xx responses aren't network errors, there's nothing to catch.
         We're rejecting the Promise here, taking advantage of the ok property in the response.
        */
    return fetchCall.then((response) =>
      response
        .json()
        .then((json) => (response.ok ? json : Promise.reject(json)))
    );
  }

  async _buildBaseRequest(
    { url, params, body, config }: Request,
    method: string
  ) {
    let request: Request = {
      url,
      params,
      body,
      config: {
        ...config,
        method,
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
      },
    };
    request = await this._applyInterceptors(request);
    return request;
  }

  async _applyInterceptors(request: Request) {
    const { interceptors } = this.config;
    if (interceptors) {
      return interceptors.reduce<Request | PromiseLike<Request>>(
        async (req, interceptor) => Promise.resolve(interceptor(await req)),
        request
      );
    }
    return request;
  }

  _buildURLFromRequest(request: Request) {
    const baseURL = this.config.baseURL || "";
    const { url, params } = request;
    const queryString = this._buildQueryString(params);
    return `${baseURL}${url}${queryString ? "?" : ""}${queryString}`;
  }

  _buildQueryString(
    params: Record<string, string> | undefined,
    encoded = false
  ) {
    return !params
      ? ""
      : Object.entries(params)
          .map(([key, value]) => {
            if (value === null) {
              return "";
            }
            return `${key}=${encoded ? encodeURIComponent(value) : value}`;
          })
          .filter((arg) => arg !== "")
          .join("&");
  }

  _requestHasBody(request: Request) {
    return request.body && Object.keys(request.body).length;
  }
}
