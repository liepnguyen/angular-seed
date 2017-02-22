import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';
import { AddOrEditCategoryModal } from './category/add-edit-category-modal.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, SharedModule, NgxDatatableModule, ReactiveFormsModule, NgbModule],
  declarations: [ContentComponent, CategoryComponent, AddOrEditCategoryModal],
  exports: [ContentComponent, CategoryComponent, AddOrEditCategoryModal],
  providers: [],
  entryComponents: [AddOrEditCategoryModal]
})
export class ContentModule { }
