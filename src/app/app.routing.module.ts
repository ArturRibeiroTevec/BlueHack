import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoAnalisadoComponent } from './contrato-analisado/contrato-analisado.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'chat', component: ChatComponent },
    {path: 'contratos', component: ContratoComponent },
    {path: 'contrato-analisado', component: ContratoAnalisadoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
