import { ValueObject } from "../../shared/ValueObject";

/**
 * Voyageの識別子
 */
export class VoyageNumber implements ValueObject<VoyageNumber> {
  constructor(
    private number: string,
  ) { }

  public sameValueAs(other: VoyageNumber) {
    return this.number === other.number
  }
}
