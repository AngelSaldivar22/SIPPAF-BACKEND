export declare class BaseResponse<T> {
    code: number;
    internalCode: string;
    message: string;
    correlationId: string;
    data: T | null | any;
}
