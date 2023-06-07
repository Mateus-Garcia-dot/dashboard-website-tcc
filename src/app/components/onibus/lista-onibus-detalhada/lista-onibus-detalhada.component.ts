import { Component, Input } from '@angular/core';
import { VeiculosService } from 'src/app/services/veiculos.service';

@Component({
  selector: 'app-lista-onibus-detalhada',
  templateUrl: './lista-onibus-detalhada.component.html',
  styleUrls: ['./lista-onibus-detalhada.component.scss']
})
export class ListaOnibusDetalhadaComponent {

  displayedColumns: string[] = ['codigo', 'situacao', 'adaptado', 'tipo'];
  dataSource?: any;

  @Input() linhaId?: string;

  linha: any;

  constructor(
    private veiculoService: VeiculosService,
  ) { }

  ngOnInit(): void {
    this.dataSource = null;

    if (this.linhaId) {
      this.veiculoService.buscarLocalizacaoVeiculoLinha(this.linhaId)
        .subscribe((veiculos: any) => {
          console.log(veiculos)
          this.dataSource = veiculos;
        });
    }
  }
}
