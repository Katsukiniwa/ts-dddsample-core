import { ValueObject } from "../../shared/ValueObject";
import { CarrierMovement } from "./CarrierMovement";

export class Schedule implements ValueObject<Schedule> {
  constructor(
    private readonly carrierMovements: CarrierMovement[] = []
  ) { }

  public sameValueAs(other: Schedule): boolean {
    return this.carrierMovements === other.carrierMovements
  }
}
