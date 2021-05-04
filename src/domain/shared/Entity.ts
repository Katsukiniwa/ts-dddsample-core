export interface Entity<T> {
  sameIdentityAs(arg: T): boolean;
}
