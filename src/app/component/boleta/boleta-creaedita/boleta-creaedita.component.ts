import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Boleta } from 'src/app/model/boleta';
import { BoletaService } from 'src/app/service/boleta.service';

@Component({
  selector: 'app-boleta-creaedita',
  templateUrl: './boleta-creaedita.component.html',
  styleUrls: ['./boleta-creaedita.component.css']
})
export class BoletaCreaeditaComponent implements OnInit {
  id: number = 0
  edicion: boolean = false

  form: FormGroup = new FormGroup({});
  boleta: Boleta = new Boleta();
  mensaje: string = "";

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })


    this.form = new FormGroup({
      id: new FormControl(),
      idContrato: new FormControl(),
      descripcion: new FormControl(),
      precioTotal: new FormControl()
    })
  }

  constructor(private bS: BoletaService, private router: Router, private route: ActivatedRoute) { }

  aceptar(): void {
    this.boleta.id = this.form.value['id'];
    this.boleta.idContrato = this.form.value['idContrato'];
    this.boleta.descripcion = this.form.value['descripcion'];
    this.boleta.precioTotal = this.form.value['precioTotal'];

    if (this.form.value['idContrato'] > 0 && this.form.value['descripcion'].length > 0 && this.form.value['precioTotal'] > 0) {

      if(this.edicion){
        //actualice
        this.bS.update(this.boleta).subscribe(()=>{
          this.bS.list().subscribe(data => {
            this.bS.setList(data)
          })
        })
      }
      else{
        this.bS.insert(this.boleta).subscribe(data => {
          this.bS.list().subscribe(data => {
            this.bS.setList(data)
          })
        })
      }

      this.router.navigate(['boletas'])
    }
    else {
      this.mensaje = "Ingrese los datos de la boleta!!!"
    }
  }

  init() {
    if (this.edicion) {
      this.bS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          idContrato: new FormControl(data.idContrato),
          descripcion: new FormControl(data.descripcion),
          precioTotal: new FormControl(data.precioTotal)
        })
      })
    }

  }
}
