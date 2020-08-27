import { Body } from "./body";
export interface Request {
    url: string;
    params: Record<string, string>;
    body: Body;
    config: RequestInit;
}
