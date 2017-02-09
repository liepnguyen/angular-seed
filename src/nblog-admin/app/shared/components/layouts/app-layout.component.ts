import { Component } from '@angular/core';

/**
 * This class represents the app layout component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-layout',
  templateUrl: 'app-layout.component.html',
  styleUrls: ['app-layout.component.css'],
})
export class AppLayoutComponent {
  constructor() {
    console.log("AppLayoutComponent was created");
  }
}