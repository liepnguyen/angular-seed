import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ContentComponent, CategoriesComponent],
  exports: [ContentComponent, CategoriesComponent],
  providers: []
})
export class ContentModule { }
