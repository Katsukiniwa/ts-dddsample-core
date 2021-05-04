import { Entity } from "../../shared/Entity";
import { UnLocode } from "./UnLocode";

export class Location implements Entity<Location> {
  constructor(
    private _unLocode: UnLocode,
    private _name: string
  ) { }

  get unLocode(): UnLocode {
    return this._unLocode;
  }

  get name(): string {
    return this._name;
  }

  public sameIdentityAs(other: Location) {
    return this._unLocode.sameIdentityAs(other._unLocode);
  }
}
