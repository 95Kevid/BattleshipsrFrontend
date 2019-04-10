import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ShipPlaceRequest } from "../models/ship-place-request";
import { Ship } from "../models/ship";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShipPlacingService {
  private url = "http://localhost:9721/";

  constructor(private http: HttpClient) {}

  placeShip(shipPlaceRequest: ShipPlaceRequest): Observable<Ship> {
    return this.http.post<Ship>(this.url + "placeShip", shipPlaceRequest);
  }
}
