import { Component } from '@angular/core';
import { FormControl, } from '@angular/forms';
import {  NavigationStart, Router, } from '@angular/router';
import { Observable, filter, map, startWith } from 'rxjs';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  exibirCampoPesquisa = true;

  linha = new FormControl('');
  options: string[] = ['022', '466', '456'];
  filteredOptions?: Observable<string[]>;

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

  ngOnInit() {
    this.filteredOptions = this.linha.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
