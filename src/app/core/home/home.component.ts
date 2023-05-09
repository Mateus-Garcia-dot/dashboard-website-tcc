import { Component } from '@angular/core';
import { LinhasService } from 'src/app/services/linhas.service';
import { MapaService } from 'src/app/services/mapa.service';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  options?: any;

  constructor(
    private mapaService: MapaService,
    private linhaService: LinhasService,
    private veiculoService: VeiculosService,
  ) {
    this.mapaService.filtros?.subscribe(filtros => {
      if(filtros) {
        this.buscarLinhaShape(filtros.linha);
        this.buscarLocalizacaoOnibusDaLinha(filtros.linha);
      }
    })
  }

  private buscarLinhaShape(linhaId: string) {
    this.linhaService.buscarShapeLinha(linhaId).subscribe(pontosShape => {
      const shape = pontosShape as google.maps.LatLngLiteral[];
      this.mapaService.polyline?.next({
        path: shape,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
    });
  }

  buscarLocalizacaoOnibusDaLinha(linhaId: string) {
    this.veiculoService.buscarLocalizacaoVeiculoLinha(linhaId).subscribe((veiculos: any) => {
      const markers: any[] = [];
      veiculos.forEach((veiculo: any) => {
        const marker = {
          info: markers,
          position: new google.maps.LatLng(veiculo.latitude, veiculo.longitude),
          title: veiculo.codigo,
          options:{
            draggable: false,
            icon: 'assets/icons/bus-icon.svg'
         }
        };
        markers.push(marker);
      });
      this.mapaService.markers?.next(markers);
    })
  }

}
