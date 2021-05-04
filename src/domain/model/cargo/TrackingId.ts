import { ValueObject } from "../../shared/ValueObject";

/**
 * 追跡ID
 */
export class TrackingId implements ValueObject<TrackingId> {
  constructor(
    private id: string
  ) { }

  public sameIdentityAs(args: TrackingId) {
    return this.id === args.id
  }
}
