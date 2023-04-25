import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpClient: HttpClient) { }

  buscarLocalizacaoVeiculoLinha(linhaId: string) {
    return this.httpClient.get(`${environment.apiUrl}veiculos/linha/${linhaId}`)
  }

}
