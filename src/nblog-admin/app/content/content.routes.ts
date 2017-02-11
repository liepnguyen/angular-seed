import { Route } from '@angular/router';
import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';

export const ContentRoutes: Route[] = [
  { 
    path: 'content', 
    component: ContentComponent, 
    children: [
      { path: 'category', component: CategoryComponent }
    ]
  }
];
