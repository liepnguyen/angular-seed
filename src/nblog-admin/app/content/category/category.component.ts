import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddOrEditCategoryModal } from './add-edit-category-modal.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * This class represents the lazy loaded CategoryComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
})
export class CategoryComponent implements OnInit {
  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
  rows: any[];
  columns: any[];
  addNewOrEditCategoryForm: FormGroup;

  public constructor(private formBuilder: FormBuilder,
                     private modalService: NgbModal) {
  }

  onSubmit() {
    var formValue = this.addNewOrEditCategoryForm.value;
    this.rows.push({
      name: formValue.categoryName,
      description: formValue.categoryDescription,
      slug: formValue.categorySlug,
      count: 1
    });

    this.initAddNewOrEditCategoryForm();

    
  }

  private initAddNewOrEditCategoryForm() {
    this.addNewOrEditCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categorySlug: ['', Validators.required],
      categoryDescription: ['']
    });
  }

  ngOnInit() {
    this.rows = [
      { name: '3D Graphic', description: 'description text goes here', slug: '@g', count: 1 },
      { name: 'Maya', description: 'description text goes here', slug: '@g', count: 1 },
      { name: '3DMax', description: 'description text goes here', slug: '@g', count: 1 },
    ];
    this.columns = [
      { name: 'Name' },
      { name: 'Description' },
      { name: 'Slug' },
      { name: 'Count' },
      {
        name: '',
        cellTemplate: this.actionTmpl
      }
    ];

    this.initAddNewOrEditCategoryForm();

    const modalRef = this.modalService.open(AddOrEditCategoryModal);
    modalRef.componentInstance.name = 'World';
  }
}