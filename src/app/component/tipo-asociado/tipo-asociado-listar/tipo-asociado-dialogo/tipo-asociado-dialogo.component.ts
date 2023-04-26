import { Component, OnInit } from '@angular/core';
import { TipoAsociadoService } from 'src/app/service/tipo-asociado.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-asociado-dialogo',
  templateUrl: './tipo-asociado-dialogo.component.html',
  styleUrls: ['./tipo-asociado-dialogo.component.css']
})
export class TipoAsociadoDialogoComponent implements OnInit {

  constructor(private taS: TipoAsociadoService, private dialogRef: MatDialogRef<TipoAsociadoDialogoComponent>) {}

  ngOnInit(): void {}

  confirmar(estado: boolean) {
      this.taS.setConfirmDelete(estado);
      this.dialogRef.close();
  }
}
