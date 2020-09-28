export interface EntityLoadable<TData> {
    data: TData;
    isLoading: boolean;
    error: string;
}