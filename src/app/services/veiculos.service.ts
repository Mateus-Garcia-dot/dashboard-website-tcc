import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpClient: HttpClient) { }

  buscarLocalizacaoVeiculoLinha(linhaId: string):Observable<Veiculo[]> {
    return this.httpClient.get<Veiculo[]>(`${environment.apiUrl}veiculos/linha/${linhaId}`)
  }

}
