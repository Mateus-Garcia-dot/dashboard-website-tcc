import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  linha = new FormControl('');

  constructor(private mapaService: MapaService, ) {}

  pesquisarLinha() {
    this.mapaService.alterarLinha(this.linha.value);
  }
}
