import { Entity } from "../../shared/Entity";
import { Schedule } from "./Schedule";
import { VoyageNumber } from "./VoyageNumber";

export class Voyage implements Entity<Voyage> {
  constructor(
    private _voyageNumber: VoyageNumber,
    private _schedule: Schedule,
  ) { }

  public schedule(): Schedule {
    return this._schedule;
  }

  public sameIdentityAs(other: Voyage) {
    return this._voyageNumber.sameValueAs(other._voyageNumber);
  }
}
