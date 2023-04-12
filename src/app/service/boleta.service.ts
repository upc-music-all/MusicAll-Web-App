import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boleta } from '../model/boleta';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  private url = `${base_url}/boletas`

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Boleta[]>(this.url)
  }
}
