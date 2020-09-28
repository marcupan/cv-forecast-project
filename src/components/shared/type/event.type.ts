export type OnEventFn<T, R = void> = (event: T) => R;
export type RenderFn<T> = (props: T) => React.ReactElement | React.ReactNode | null;
export type EmptyFn = () => void;

export const emptyFn = () => void 0;