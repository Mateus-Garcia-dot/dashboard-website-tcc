import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Shape } from '../models/shape';
import { Linha } from '../models/linha';

@Injectable({
  providedIn: 'root'
})
export class LinhasService {

  constructor(private httpClient: HttpClient) { }

  buscarShapeLinha(linhaId: string):Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}linhas/shape/${linhaId}`);
  }

  listarLinhas(pagina: number, qntdPorPagina: number): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}linhas?pagina=${pagina}&qntdPorPagina=${qntdPorPagina}`);
  }

  buscarDetalhesLinha(linhaId: any) {
    return this.httpClient.get<any>(`${environment.apiUrl}linhas/${linhaId}`);
  }
}
