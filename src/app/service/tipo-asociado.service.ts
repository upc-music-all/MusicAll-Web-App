import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoAsociado } from "src/app/model/tipo-asociado";

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipoAsociadoService {
  private url = `${base_url}/tipoAsociado`

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<TipoAsociado[]>(this.url)
  }
}
