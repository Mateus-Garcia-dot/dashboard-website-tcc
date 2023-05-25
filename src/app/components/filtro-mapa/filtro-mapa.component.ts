import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-filtro-mapa',
  templateUrl: './filtro-mapa.component.html',
  styleUrls: ['./filtro-mapa.component.scss']
})
export class FiltroMapaComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mapaService: MapaService
  ) {
    this.form = this.formBuilder.group({
      situacao: new FormArray([]),
      adptado: [],
      formaPagamento: new FormArray([]),
      tipo: new FormArray([]),
      exibirPontos: [],
    });

    this.form.valueChanges.subscribe(form => {
      this.mapaService.filtros?.next(form);
    })
  }


  selecionarSituacao(event: any, value: string) {
    const formArray: FormArray = this.form.get('situacao') as FormArray;
    console.log(event)
    if (event.checked) {
      formArray.push(new FormControl(value));
    }
    else {
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        if (ctrl.value == value) {
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
}
