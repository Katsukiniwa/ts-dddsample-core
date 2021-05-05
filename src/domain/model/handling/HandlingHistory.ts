import { ValueObject } from "../../shared/ValueObject";
import { HandlingEvent } from "./HandlingEvent";

/**
 * @name 配送記録
 * @description 実際に貨物に起こったこと
 */
export class HandlingHistory implements ValueObject<HandlingHistory> {
  constructor(
    private _handlingEvents: HandlingEvent[] = []
  ) { }

  /**
   * TODO: mostRecentlyCompletedEventメソッドを実装する
   */

  public sameValueAs(other: HandlingHistory) {
    return this._handlingEvents === other._handlingEvents
  }
}
