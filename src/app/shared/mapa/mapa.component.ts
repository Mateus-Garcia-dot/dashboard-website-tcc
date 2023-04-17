import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyCKfgO1jvx-odeUtoMiglrkK7Df0O77t00", 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
}
