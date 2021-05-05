import { ValueObject } from "../../shared/ValueObject";

/**
 * @name 輸送機器移動
 * @description トラックや船などの特定の輸送機器によって実現されるある位置からある位置への特定の移動
 */
export class CarrierMovement implements ValueObject<CarrierMovement> {
  constructor(
    private departureLocation: Location,
    private arrivalLocation: Location,
    private departureTime: Date,
    private arrivalTime: Date,
  ) { }

  public sameValueAs(other: CarrierMovement) {
    return this.departureLocation === other.departureLocation &&
      this.arrivalLocation === other.arrivalLocation &&
      this.departureTime === other.departureTime &&
      this.arrivalTime === other.arrivalTime
  }
}
