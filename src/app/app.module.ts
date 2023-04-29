import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BoletaComponent } from './component/boleta/boleta.component';
import { BoletaListarComponent } from './component/boleta/boleta-listar/boleta-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { TipoAsociadoComponent } from './component/tipo-asociado/tipo-asociado.component';
import { TipoAsociadoListarComponent } from './component/tipo-asociado/tipo-asociado-listar/tipo-asociado-listar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BoletaCreaeditaComponent } from './component/boleta/boleta-creaedita/boleta-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BoletaDialogoComponent } from './component/boleta/boleta-listar/boleta-dialogo/boleta-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoletaComponent,
    BoletaListarComponent,
    TipoAsociadoComponent,
    TipoAsociadoListarComponent,
    BoletaCreaeditaComponent,
    BoletaDialogoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
