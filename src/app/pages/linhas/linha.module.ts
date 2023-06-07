import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { ListaLinhasComponent } from './lista-linhas/lista-linhas.component';
import { DetalhesLinhaComponent } from './detalhes-linha/detalhes-linha.component';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ListaOnibusModule } from 'src/app/components/onibus/lista-onibus/lista-onibus.module';



@NgModule({
  declarations: [
    ListaLinhasComponent,
    DetalhesLinhaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ListaOnibusModule,

    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class LinhaModule { }
