import { Component } from '@angular/core';
import { LinhasService } from 'src/app/services/linhas.service';

@Component({
  selector: 'app-lista-linhas',
  templateUrl: './lista-linhas.component.html',
  styleUrls: ['./lista-linhas.component.scss']
})
export class ListaLinhasComponent {

  linhas: any[] = [];

  displayedColumns: string[] = ['COD', 'NOME', 'SOMENTE_CARTAO', 'CATEGORIA_SERVICO'];
  dataSource?: any;

  constructor(private linhasService: LinhasService) {
    this.listarLinhas();
  }

  listarLinhas() {
    this.linhasService.listarLinhas().subscribe(resultado => {
      this.linhas = resultado.linhas;
      this.dataSource = this.linhas;
    });
  }
}
