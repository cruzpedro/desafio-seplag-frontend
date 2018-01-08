import { Routes } from '@angular/router';
import { AposentadoriaComponent } from './aposentadoria/aposentadoria.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';

export const ROUTES: Routes = [
    { path: '', component: AposentadoriaComponent},
    { path: 'aposentadoria', component: AposentadoriaComponent},
    { path: 'movimentacao', component: MovimentacaoComponent}
];