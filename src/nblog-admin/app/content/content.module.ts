import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, NgxDatatableModule, ReactiveFormsModule],
  declarations: [ContentComponent, CategoryComponent],
  exports: [ContentComponent, CategoryComponent],
  providers: []
})
export class ContentModule { }
