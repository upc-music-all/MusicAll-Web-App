import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boleta } from '../model/boleta';
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class BoletaService {
  private url = `${base_url}/boletas`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Boleta[]>();

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Boleta[]>(this.url)
  }
  insert(boleta: Boleta) {
    return this.http.post(this.url, boleta);
  }
  setList(listaNueva: Boleta[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }
  listId(id: number) {
    return this.http.get<Boleta>(`${this.url}/${id}`)
  }
  update(b: Boleta) {
    return this.http.put(this.url + "/" + b.id, b)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
