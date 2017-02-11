import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [CommonModule, SharedModule, NgxDatatableModule],
  declarations: [ContentComponent, CategoryComponent],
  exports: [ContentComponent, CategoryComponent],
  providers: []
})
export class ContentModule { }
