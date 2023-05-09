import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  options!: google.maps.MapOptions;
  markers?: any[];
  polylineOptions?: any;

  apiLoaded: boolean = false;

  localizacaoPrefeitura = { lat: -25.417419972874562, lng: -49.269363993299066 };

  constructor(private mapaService: MapaService) {
    this.mapaService.apiLoaded.subscribe(loaded => this.apiLoaded = loaded);

    this.atualizarShapeMapa();
    this.atualizarOpcoesMapa();
    this.atualizarMarkersMapa();
  }

  ngOnInit(): void {
    if (!this.options) {
      this.options = {
        center: this.localizacaoPrefeitura,
        fullscreenControl: false
       };
    }
  }

  private atualizarShapeMapa() {
    this.mapaService.polyline?.subscribe(polyline => {
      if (polyline) {
        console.log(polyline)
        this.polylineOptions = polyline;
      }
    });
  }

  private atualizarMarkersMapa() {
    this.mapaService.markers?.subscribe(markers => this.markers = markers);
  }

  private atualizarOpcoesMapa() {
    this.mapaService.options?.subscribe(options => {
      if (options) {
        this.options = options;
      }
    });
  }

}
