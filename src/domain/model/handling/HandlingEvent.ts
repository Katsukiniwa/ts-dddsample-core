import { DomainEvent } from "../../shared/DomainEvent";
import { ValueObject } from "../../shared/ValueObject";
import { Cargo } from "../cargo/Cargo";
import { Voyage } from "../voyage/Voyage";

/**
 * @name 荷役イベント
 * @description 貨物の船への積み込みや通関手続きなどで
 * 同一性は対象の貨物のIDと完了時刻及びイベントタイプの組み合わせで保証する
 * (同時に複数の荷役イベントは発生し得ないため)
 */
export class HandlingEvent implements DomainEvent<HandlingEvent> {
  constructor(
    private _type: Type,
    private _voyage: Voyage,
    private _completionTime: Date,
    private _registrationTime: Date,
    private _cargo: Cargo,
  ) { }

  get type(): Type {
    return this._type;
  }

  get voyage(): Voyage {
    return this._voyage;
  }

  get completionTime(): Date {
    return this._completionTime;
  }

  get registrationTime(): Date {
    return this._registrationTime;
  }

  get cargo(): Cargo {
    return this._cargo;
  }

  public sameEventAs(other: HandlingEvent) {
    return this._cargo === other._cargo &&
      this._type === other._type &&
      this._voyage === other._voyage &&
      this._completionTime === other._completionTime &&
      this._registrationTime === other._registrationTime
  }
}

export class Type implements ValueObject<Type> {
  constructor(
    public readonly LOAD: boolean,
    public readonly UNLOAD: boolean,
    public readonly RECEIVE: boolean,
    public readonly CLAIM: boolean,
    public readonly CUSTOMS: boolean
  ) { }

  public sameValueAs(other: Type): boolean {
    return this.CLAIM === other.CLAIM
  }
}
