import { ValueObject } from "../../shared/ValueObject";

/**
 * @name 追跡ID
 * @description 貨物の識別子
 */
export class TrackingId implements ValueObject<TrackingId> {
  constructor(
    private id: string
  ) { }

  public sameValueAs(args: TrackingId) {
    return this.id === args.id
  }
}
