import { Route } from '@angular/router';
import { ContentComponent } from './content.component';
import { CategoriesComponent } from './categories/categories.component';

export const ContentRoutes: Route[] = [
  { 
    path: 'content', 
    component: ContentComponent, 
    children: [
      { path: 'categories', component: CategoriesComponent }
    ]
  }
];
