import { Component, OnInit } from '@angular/core';
import { TipoAsociado } from 'src/app/model/tipo-asociado';
import { TipoAsociadoService } from 'src/app/service/tipo-asociado.service';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tipo-asociado-listar',
  templateUrl: './tipo-asociado-listar.component.html',
  styleUrls: ['./tipo-asociado-listar.component.css']
})
export class TipoAsociadoListarComponent implements OnInit {
  dataSourceAsociado: MatTableDataSource<TipoAsociado>=new MatTableDataSource();
  displayedColumns: string[] = ['idTipoAsociado', 'tipoAsociado'];
  constructor(private taS: TipoAsociadoService) {

  }

  ngOnInit(): void {
    this.taS.list().subscribe(data => {
      this.dataSourceAsociado = new MatTableDataSource(data);
    })

    this.taS.getList().subscribe(data => {
      this.dataSourceAsociado = new MatTableDataSource(data);
    })
  }

}
