import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoAnalisadoComponent } from './contrato-analisado/contrato-analisado.component';
import { ContratoService } from './contrato-analisado/contrato-analisado.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent,
    ContratoComponent,
    ContratoAnalisadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ChatService, ContratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
