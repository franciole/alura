import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularesComponent } from './populares.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PopularesComponent],
  exports: [PopularesComponent]
})
export class PopularesModule { }
