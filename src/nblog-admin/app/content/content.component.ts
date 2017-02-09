import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded ContentComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
}