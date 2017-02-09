import { Component } from '@angular/core';

/**
 * This class represents the blank layout component.
 */
@Component({
  moduleId: module.id,
  selector: 'blank-layout',
  templateUrl: 'blank-layout.component.html',
  styleUrls: ['blank-layout.component.css'],
})
export class BlankLayoutComponent {
  constructor() {
    console.log("BlankComponent was created");
  }
}