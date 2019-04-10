import { Action } from "@ngrx/store";
import { Ship } from "../../models/ship";
import { ShipPlaceRequest } from "../../models/ship-place-request";

export const ADD_SHIP_SUCCESS = "ADD_SHIP_SUCCESS";

export class AddShipRequestAction implements Action {
  constructor(public payload: ShipPlaceRequest) {}

  readonly type = "CALL_ADD_SHIP";
}

export class AddShipSuceededAction implements Action {
  readonly type = "ADD_SHIP_SUCCESS";

  constructor(public payload: Ship) {}
}

export class ShipPlaceFailedAction implements Action {
  readonly type = "SHIP_PLACEMENT_FAILED";

  constructor(public payload: string) {}
}

export type ShipActions = AddShipSuceededAction;
