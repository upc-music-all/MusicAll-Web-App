import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoAsociado } from "src/app/model/tipo-asociado";
import { Subject } from 'rxjs';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipoAsociadoService {
  private url = `${base_url}/tipoAsociado`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<TipoAsociado[]>();

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<TipoAsociado[]>(this.url);
  }

  insert(tipoAsociado: TipoAsociado) {
    return this.http.post(this.url, tipoAsociado);
  }

  setList(listaNueva: TipoAsociado[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<TipoAsociado>(`${this.url}/${id}`);
  }

  update(a: TipoAsociado) {
    return this.http.put(this.url + "/" + a.id, a);
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
