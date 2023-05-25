import { Component } from '@angular/core';
import { FormControl, } from '@angular/forms';
import {  NavigationStart, Router, } from '@angular/router';
import { filter } from 'rxjs';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  exibirCampoPesquisa = true;

  linha = new FormControl('');

  constructor(private mapaService: MapaService, private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((val: any) => {
        this.exibirCampoPesquisa = val.url == "/"
      });
  }

  pesquisarLinha() {
    this.mapaService.alterarLinha(this.linha.value);
  }
}
