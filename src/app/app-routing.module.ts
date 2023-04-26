import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletaComponent } from './component/boleta/boleta.component';
import { BoletaCreaeditaComponent } from './component/boleta/boleta-creaedita/boleta-creaedita.component';

const routes: Routes = [
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
