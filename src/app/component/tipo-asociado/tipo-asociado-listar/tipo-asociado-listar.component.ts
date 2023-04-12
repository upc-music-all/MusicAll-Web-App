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
  constructor(private bs: TipoAsociadoService) {

  }

  ngOnInit(): void {
    this.bs.list().subscribe(data => {
      this.dataSourceAsociado = new MatTableDataSource(data);
    })
  }

}
