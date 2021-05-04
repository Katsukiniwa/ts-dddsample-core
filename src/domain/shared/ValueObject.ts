export interface ValueObject<T> {
  sameIdentityAs(arg: T): boolean;
}
