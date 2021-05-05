import { Entity } from '../../shared/Entity';
import { Itinerary } from './Itinerary';
import { RouteSpecification } from './RouteSpecification';
import { TrackingId } from './TrackingId';

/**
 * @name 貨物
 * @description 中心概念でルート集約
 */
export class Cargo implements Entity<Cargo> {

  constructor(
    private _trackingId: TrackingId,
    private _origin: Location,
    private _routeSpecification: RouteSpecification,
    private _itinerary: Itinerary
  ) { }

  get origin(): Location {
    return this._origin;
  }

  get routeSpecification(): RouteSpecification {
    return this._routeSpecification;
  }

  get itinerary(): Itinerary {
    return this._itinerary;
  }

  public sameIdentityAs(args: Cargo): boolean {
    return this._trackingId === args._trackingId
  }
}
