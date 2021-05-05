export interface DomainEvent<T> {
  sameEventAs(other: T): boolean
}
