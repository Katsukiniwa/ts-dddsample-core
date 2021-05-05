import { ValueObject } from "../../shared/ValueObject";
import { Voyage } from "../voyage/Voyage";

export class Leg implements ValueObject<Leg> {
  constructor(
    private _voyage: Voyage,
    private _loadLocation: Location,
    private _unloadLocation: Location,
    private _loadTime: Date,
    private _unloadTime: Date,
  ) { }

  get voyage(): Voyage {
    return this._voyage;
  }

  get loadLocation(): Location {
    return this._loadLocation;
  }

  get unloadLocation(): Location {
    return this._unloadLocation;
  }

  get loadTime(): Date {
    return this._loadTime;
  }

  get unloadTime(): Date {
    return this._unloadTime;
  }

  public sameValueAs(other: Leg) {
    return this._voyage === other._voyage;
  }
}
