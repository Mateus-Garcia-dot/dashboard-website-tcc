import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  apiLoaded: Observable<boolean>;

  options: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  markers?: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  polyline?: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(httpClient: HttpClient) {
    this.apiLoaded = this.carregaGoogleMap(httpClient);
  }

  calculateCenter(pontos: any[]) {
    var longitudes = pontos.map((i) => i.lng);
    var latitudes = pontos.map((i) => i.lat);

    latitudes.sort();
    longitudes.sort();

    var lowX = latitudes[0];
    var highX = latitudes[latitudes.length];
    var lowy = longitudes[0];
    var highy = longitudes[latitudes.length];

    var centerX = lowX + ((highX - lowX) / 2);
    var centerY = lowy + ((highy - lowy) / 2);

    return { lat: centerX, lng: centerY }
  }

  private carregaGoogleMap(httpClient: HttpClient) {
     return httpClient.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyCKfgO1jvx-odeUtoMiglrkK7Df0O77t00", 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

}
