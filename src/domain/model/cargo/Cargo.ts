import { Entity } from '../../shared/Entity';

export class Cargo implements Entity<Cargo> {

  constructor(
    private id: string
  ) { }

  public sameIdentityAs(args: Cargo): boolean {
    return this.id === args.id
  }
}
