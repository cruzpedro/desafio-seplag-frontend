import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { AposentadoriaComponent } from './aposentadoria/aposentadoria.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { HttpModule } from '@angular/http';
import { ModalAdicionarComponent } from './modal-adicionar/modal-adicionar.component';
import { ModalTramitarComponent } from './modal-tramitar/modal-tramitar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BeneficioService } from './beneficio.service';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AposentadoriaComponent,
    MovimentacaoComponent,
    MenuComponent,
    ModalAdicionarComponent,
    ModalTramitarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [BeneficioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
