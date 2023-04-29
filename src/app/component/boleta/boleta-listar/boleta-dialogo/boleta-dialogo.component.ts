import { Component } from '@angular/core';
import { BoletaService } from 'src/app/service/boleta.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boleta-dialogo',
  templateUrl: './boleta-dialogo.component.html',
  styleUrls: ['./boleta-dialogo.component.css']
})
export class BoletaDialogoComponent {
  constructor(private bS: BoletaService, private dialogRef: MatDialogRef<BoletaDialogoComponent>) {}

  ngOnInit(): void {}

  confirmar(estado: boolean) {
      this.bS.setConfirmDelete(estado);
      this.dialogRef.close();
  }
}
