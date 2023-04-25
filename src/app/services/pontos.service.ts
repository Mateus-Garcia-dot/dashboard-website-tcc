import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ponto } from '../models/ponto';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(private httpClient: HttpClient) { }

  buscarPontosPorLinha(linhaId: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}pontos/linha/${linhaId}`)
  }
}
