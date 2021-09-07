import { RodapeModule } from './rodape/rodape.module';
import { ConteudoModule } from './conteudo/conteudo.module';
import { CabecalhoModule } from './cabecalho/cabecalho.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    CabecalhoModule,
    ConteudoModule,
    RodapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
