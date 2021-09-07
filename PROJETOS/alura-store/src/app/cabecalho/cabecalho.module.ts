import { CabecalhoComponent } from './cabecalho.component';
import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [CabecalhoComponent],
  exports: [CabecalhoComponent]
})
export class CabecalhoModule { }
