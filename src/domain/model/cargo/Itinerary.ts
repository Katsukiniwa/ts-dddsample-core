import { ValueObject } from "../../shared/ValueObject";
import { Leg } from "./Leg";

export class Itinerary implements ValueObject<Itinerary> {
  constructor(
    private _legs: Leg[]
  ) { }

  sameValueAs(other: Itinerary) {
    return this._legs === other._legs
  }
}
