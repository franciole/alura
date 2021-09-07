import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteudoComponent } from './conteudo.component';
import { DestaquesModule } from './destaques/destaques.module';
import { PopularesModule } from './populares/populares.module';

@NgModule({
  imports: [
    CommonModule,
    DestaquesModule,
    PopularesModule
  ],
  declarations: [ConteudoComponent],
  exports: [ConteudoComponent]
})
export class ConteudoModule { }
