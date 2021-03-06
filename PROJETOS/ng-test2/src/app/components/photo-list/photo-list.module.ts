import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoBoardmodule } from './../../shared/components/photo-board/photo-board.module';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardmodule, FontAwesomeModule],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
