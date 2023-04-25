import { Component } from '@angular/core';
import { LinhasService } from 'src/app/services/linhas.service';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  options?: any;

  constructor(
    private mapaService: MapaService,
    private linhaService: LinhasService

  ) {

    this.linhaService.buscarShapeLinha('022').subscribe(pontosShape => {

      const shape = pontosShape as google.maps.LatLngLiteral[];

      this.mapaService.options.next({ center: this.mapaService.calculateCenter(shape) })

      this.mapaService.polyline?.next({
        path: shape,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      })
    })
  }
}
