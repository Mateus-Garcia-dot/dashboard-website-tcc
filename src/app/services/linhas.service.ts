import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LinhasService {

  constructor(private httpClient: HttpClient) { }

  buscarShapeLinha(linhaId: string) {
    return this.httpClient.get(`${environment.apiUrl}linhas/shape/${linhaId}`)
  }

}
