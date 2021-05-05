import { ValueObject } from "../../shared/ValueObject";

/**
 * @name 配送仕様
 * @description 貨物がいつまでにどこからどこへ移動するかという貨物の目標を表す
 */
export class RouteSpecification implements ValueObject<RouteSpecification> {
  constructor(
    private origin: Location,
    private destination: Location,
    private arrivalDeadline: Date
  ) { }

  public sameValueAs(other: RouteSpecification) {
    return this.origin === other.origin &&
      this.destination === other.destination &&
      this.arrivalDeadline === other.arrivalDeadline
  }
}
