import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  addNewCategoryForm: FormGroup;

  public constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    var formValue = this.addNewCategoryForm.value;
    this.rows.push({
      name: formValue.categoryName,
      description: formValue.categoryDescription,
      slug: formValue.categorySlug,
      count: 1
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

    this.addNewCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categorySlug: ['', Validators.required],
      categoryDescription: ['']
    })
  }
}