import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-asociado',
  templateUrl: './tipo-asociado.component.html',
  styleUrls: ['./tipo-asociado.component.css']
})
export class TipoAsociadoComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {

  }
}
