import { ValueObject } from "../../shared/ValueObject";

/**
 * 州番号
 */
export class UnLocode implements ValueObject<UnLocode> {
  constructor(
    private unlocode: string
  ) { }

  public sameValueAs(args: UnLocode): boolean {
    return this.unlocode === args.unlocode
  }
}
