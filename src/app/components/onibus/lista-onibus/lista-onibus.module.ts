import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { ListaOnibusComponent } from './lista-onibus.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListaOnibusDetalhadaComponent } from '../lista-onibus-detalhada/lista-onibus-detalhada.component';



@NgModule({
  declarations: [
    ListaOnibusComponent,
    ListaOnibusDetalhadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ListaOnibusComponent,
    ListaOnibusDetalhadaComponent
  ]
})
export class ListaOnibusModule { }
