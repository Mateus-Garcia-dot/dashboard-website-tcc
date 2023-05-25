import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { LinhasService } from 'src/app/services/linhas.service';
import { MapaService } from 'src/app/services/mapa.service';
import { PontosService } from 'src/app/services/pontos.service';
import { VeiculosService } from 'src/app/services/veiculos.service';

const LOCALIZACAO_PREFEITURA = { lat: -25.417419972874562, lng: -49.269363993299066 };


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, OnDestroy {

  pontos: any[] = [];
  linha: any;
  linhaId: any;

  options!: google.maps.MapOptions;
  markers?: any[];
  onibusMarkers: any[] = [];
  pontosMarkers?: any[] = [];
  polylineOptions?: any;

  apiLoaded: boolean = false;

  alterarPosicaoOnibus?: Subscription;

  carregando = false;

  constructor(
    private mapaService: MapaService,
    private linhaService: LinhasService,
    private veiculoService: VeiculosService,
    private pontosService: PontosService
  ) {
    this.mapaService.apiLoaded.subscribe(loaded => this.apiLoaded = loaded);

    this.linhaAlteradaListener();
    this.atualizaFiltrosListener();
  }

  ngOnInit(): void {
    if (!this.options) {
      this.options = {
        center: LOCALIZACAO_PREFEITURA,
        fullscreenControl: false,
        mapTypeControl: false
      };
    }
  }

  buscarPosicaoOnibusNoShapeLinha(linhaId: string) {
    this.veiculoService.buscarLocalizacaoVeiculoLinha(linhaId)
      .subscribe((veiculos: any) => {
        this.mapaService.listaOnibus?.next(veiculos)
        this.carregando = false;
        this.criaMarkersPosicoesVeiculo(veiculos);
      })
  }

  buscarDetalhesLinha(linhaId: any) {
    this.linhaService.buscarDetalhesLinha(linhaId).subscribe(resultado => {
      this.linha = resultado;
      this.mapaService.linhaSelecionada?.next(this.linha)
    })
  }

  private atualizaFiltrosListener() {
    this.mapaService.filtros?.subscribe(filtros => {
      filtros?.exibirPontos ? this.criaMarkersPontos() : this.removeMarkersPonto();

      const onibusFiltrados = this.onibusMarkers.filter(o => {
        let filtrar = true;
        if (filtros?.situacao.length > 0)
          filtrar = filtros.situacao.some((s: any) => s == o.info.situacao);

        if (filtros?.adaptado)
          filtrar = filtrar || filtros?.adaptado == Boolean(o.info.adaptado);

        return filtrar;
      })
      this.atualizaMarkers(onibusFiltrados, this.pontosMarkers);
    });

  }

  private removeMarkersPonto() {
    this.markers = this.markers?.filter(marker => !this.pontos?.some(ponto => ponto.codigo == marker.info.codigo));
  }

  private criaMarkersPontos() {
    if (this.pontos?.length <= 0) {
      this.pontosService.buscarPontosPorLinha(this.linhaId)
        .subscribe(pontos => {
          this.pontos = pontos;
          this.criarMarkerPonto(pontos);
        });
    } else {
      this.criarMarkerPonto(this.pontos);
    }
  }

  private criarMarkerPonto(pontos: any) {
    pontos.forEach((ponto: any) => {
      const marker = {
        info: ponto,
        position: new google.maps.LatLng(ponto.LAT.replace(',', "."), ponto.LON.replace(',', ".")),
        title: ponto.codigo,
        options: {
          draggable: false,
          icon: 'assets/icons/pin-icon.svg'
        }
      };
      this.markers?.push(marker);
    });
  }

  private linhaAlteradaListener() {
    this.mapaService.buscaLinha?.subscribe(linha => {
      this.limpaMarcacoes();
      this.linhaId = linha;
      if (linha) {
        this.carregando = true;
        this.buscarPosicaoOnibusNoShapeLinha(linha);
        this.alterarPosicaoOnibus = interval(120000)
          .subscribe(() => { this.buscarPosicaoOnibusNoShapeLinha(linha); });
        this.buscarLinhaShape(linha);
        this.buscarDetalhesLinha(linha);
      } else {
        this.alterarPosicaoOnibus?.unsubscribe();
      }
    });
  }


  private buscarLinhaShape(linhaId: string) {
    this.linhaService.buscarShapeLinha(linhaId).subscribe(pontosShape => {
      const shape = pontosShape as google.maps.LatLngLiteral[];
      this.polylineOptions = {
        path: shape,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      };
    });
  }

  private criaMarkersPosicoesVeiculo(veiculos: any) {
    this.onibusMarkers = [];
    veiculos.forEach((veiculo: any) => {
      const marker = {
        info: veiculo,
        position: new google.maps.LatLng(veiculo.latitude, veiculo.longitude),
        title: veiculo.codigo,
        options: {
          draggable: false,
          icon: 'assets/icons/bus-icon.svg'
        }
      };
      this.onibusMarkers.push(marker);
    });

    this.markers = [...this.onibusMarkers];
  }

  private limpaMarcacoes() {
    this.markers = [];
    this.polylineOptions = null;
  }

  private atualizaMarkers(onibusMarkers: any, pontosMarkers: any) {
    this.markers = [...onibusMarkers, ...pontosMarkers];
  }

  ngOnDestroy(): void {
    this.alterarPosicaoOnibus?.unsubscribe();
  }

}

