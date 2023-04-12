import { Component, OnInit } from '@angular/core';
import { Boleta } from 'src/app/model/boleta';
import { BoletaService } from 'src/app/service/boleta.service';
import { MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-boleta-listar',
  templateUrl: './boleta-listar.component.html',
  styleUrls: ['./boleta-listar.component.css']
})
export class BoletaListarComponent implements OnInit{
  dataSource: MatTableDataSource<Boleta>=new MatTableDataSource();
  displayedColumns:string[]=['nboleta', 'ncontrato', 'descripcion', 'precio']
  constructor(private bs: BoletaService) {

  }

  ngOnInit(): void {
    this.bs.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
