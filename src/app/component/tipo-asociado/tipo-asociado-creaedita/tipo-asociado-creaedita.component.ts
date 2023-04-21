import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoAsociado } from 'src/app/model/tipo-asociado';
import { TipoAsociadoService } from 'src/app/service/tipo-asociado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-asociado-creaedita',
  templateUrl: './tipo-asociado-creaedita.component.html',
  styleUrls: ['./tipo-asociado-creaedita.component.css']
})
export class TipoAsociadoCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tipoAsociado: TipoAsociado = new TipoAsociado();
  mensaje: string = "";
  ngOnInit(): void {
    this.form = new FormGroup({
      idTipoAsociado: new FormControl(),
      descripcionTipoAsociado: new FormControl()
    });
  }

  constructor(private taS: TipoAsociadoService, private router: Router) {}

  aceptar(): void {
    this.tipoAsociado.id = this.form.value['idTipoAsociado'];
    this.tipoAsociado.descripcionTipoAsociado = this.form.value['descripcionTipoAsociado'];

    if(this.form.value['descripcionTipoAsociado'].length > 0) {
      this.taS.insert(this.tipoAsociado).subscribe(data => {
        this.taS.list().subscribe(data => {
          this.taS.setList(data);
        })
      })

      this.router.navigate(['tipo-asociado']);
    } else {
      this.mensaje = "Ingrese los datos";
    }
  }
}
