import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

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

  public constructor() {
  }

  ngOnInit() {
    this.rows = [
      { name: '3D Graphic', description: 'description text goes here', slug: '@g', count: 1, action: 'male' },
      { name: 'Maya', description: 'description text goes here', slug: '@g', count: 1 },
      { name: '3DMax', description: 'description text goes here', slug: '@g', count: 1 },
    ];
    this.columns = [
      { name: 'Name' },
      { name: 'Description' },
      { name: 'Slug' },
      { name: 'Count' },
      {
        name: 'Action',
        cellTemplate: this.actionTmpl
      }
    ];
  }
}