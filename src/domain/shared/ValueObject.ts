export interface ValueObject<T> {
  sameValueAs(arg: T): boolean;
}
