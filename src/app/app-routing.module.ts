import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAsociadoCreaeditaComponent } from './component/tipo-asociado/tipo-asociado-creaedita/tipo-asociado-creaedita.component';
import { TipoAsociadoComponent } from './component/tipo-asociado/tipo-asociado.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
