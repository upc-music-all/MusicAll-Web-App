import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAsociadoCreaeditaComponent } from './component/tipo-asociado/tipo-asociado-creaedita/tipo-asociado-creaedita.component';
import { TipoAsociadoComponent } from './component/tipo-asociado/tipo-asociado.component';
import { BoletaComponent } from './component/boleta/boleta.component';
import { BoletaCreaeditaComponent } from './component/boleta/boleta-creaedita/boleta-creaedita.component';

const routes: Routes = [
  {
    path: 'tipo-asociado',
    component: TipoAsociadoComponent,
    children: [
      {
        path: 'new',
        component: TipoAsociadoCreaeditaComponent
      },
      {
        path: 'edicion/:id',
        component: TipoAsociadoCreaeditaComponent
      }
    ]
  },
  {
    path: 'boletas', component: BoletaComponent, children:[
      {
        path: 'new', component:BoletaCreaeditaComponent
      },
      {
        path: 'edicion/:id', component:BoletaCreaeditaComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
