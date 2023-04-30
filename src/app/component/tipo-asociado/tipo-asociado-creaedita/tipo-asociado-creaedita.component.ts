import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoAsociado } from 'src/app/model/tipo-asociado';
import { TipoAsociadoService } from 'src/app/service/tipo-asociado.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tipo-asociado-creaedita',
  templateUrl: './tipo-asociado-creaedita.component.html',
  styleUrls: ['./tipo-asociado-creaedita.component.css']
})
export class TipoAsociadoCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  errorMessage: boolean = false;

  form: FormGroup = new FormGroup({});
  tipoAsociado: TipoAsociado = new TipoAsociado();
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })

    this.form = new FormGroup({
      idTipoAsociado: new FormControl(),
      descripcionTipoAsociado: new FormControl('', [Validators.required])
    });
  }

  constructor(private taS: TipoAsociadoService, private router: Router, private route: ActivatedRoute) {}

  aceptar(): void {
    this.tipoAsociado.id = this.form.value['idTipoAsociado'];
    this.tipoAsociado.descripcionTipoAsociado = this.form.value['descripcionTipoAsociado'];

    if(this.form.value['descripcionTipoAsociado'].length > 0) {
      if (this.edicion) {
        this.taS.update(this.tipoAsociado).subscribe(() => {
          this.taS.list().subscribe(data => {
            this.taS.setList(data);
          })
        });
      } else {
        this.taS.insert(this.tipoAsociado).subscribe(data => {
          this.taS.list().subscribe(data => {
            this.taS.setList(data);
          })
        })
      }

      this.router.navigate(['tipo-asociado']);
    } else {
      this.errorMessage = true;
    }
  }

  init() {
    if (this.edicion) {
      this.taS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          idTipoAsociado: new FormControl(data.id),
          descripcionTipoAsociado: new FormControl(data.descripcionTipoAsociado)
        });
      })
    }
  }

  getErrorMessage() {
    return this.errorMessage ? 'Ingresa un valor' : '';
  }
}
