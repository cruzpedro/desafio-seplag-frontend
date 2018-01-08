import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { AposentadoriaComponent } from './aposentadoria/aposentadoria.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AposentadoriaComponent,
    MovimentacaoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
