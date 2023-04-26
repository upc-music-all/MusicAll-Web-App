import { Component, OnInit } from '@angular/core';
import { TipoAsociado } from 'src/app/model/tipo-asociado';
import { TipoAsociadoService } from 'src/app/service/tipo-asociado.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TipoAsociadoDialogoComponent } from './tipo-asociado-dialogo/tipo-asociado-dialogo.component';
@Component({
  selector: 'app-tipo-asociado-listar',
  templateUrl: './tipo-asociado-listar.component.html',
  styleUrls: ['./tipo-asociado-listar.component.css']
})
export class TipoAsociadoListarComponent implements OnInit {
  dataSourceAsociado: MatTableDataSource<TipoAsociado>=new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['idTipoAsociado', 'tipoAsociado', 'accion01'];
  constructor(private taS: TipoAsociadoService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.taS.list().subscribe(data => {
      this.dataSourceAsociado = new MatTableDataSource(data);
    })

    this.taS.getList().subscribe(data => {
      this.dataSourceAsociado = new MatTableDataSource(data);
    })

    this.taS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoAsociadoDialogoComponent);
  }

  eliminar(id: number) {
    this.taS.delete(id).subscribe(() => {
      this.taS.list().subscribe(data => {
        this.taS.setList(data);
      })
    })
  }

  filtrar(z: any) {
    this.dataSourceAsociado.filter = z.target.value.trim();
  }
}
