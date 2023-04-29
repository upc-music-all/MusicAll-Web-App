import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/model/boleta';
import { BoletaService } from 'src/app/service/boleta.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BoletaDialogoComponent } from './boleta-dialogo/boleta-dialogo.component';

@Component({
  selector: 'app-boleta-listar',
  templateUrl: './boleta-listar.component.html',
  styleUrls: ['./boleta-listar.component.css']
})
export class BoletaListarComponent implements OnInit{
  dataSource: MatTableDataSource<Boleta>=new MatTableDataSource();
  idMayor: number=0
  displayedColumns:string[]=['id', 'idContrato', 'descripcion', 'precioTotal', 'accion01']
  constructor(private bs: BoletaService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.bs.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.bs.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.bs.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(BoletaDialogoComponent);
  }

  eliminar(id: number) {
    this.bs.delete(id).subscribe(() => {
      this.bs.list().subscribe(data => {
        this.bs.setList(data);
      })
    })
  }

  filtrar(z: any){
    this.dataSource.filter=z.target.value.trim();
  }
}
