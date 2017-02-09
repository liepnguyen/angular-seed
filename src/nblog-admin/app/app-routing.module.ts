import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { ContentRoutes } from './content/content.routes';
import { AboutRoutes } from './about/about.routes';
import { LoginRoutes } from './login/login.routes';
import { AppLayoutComponent, BlankLayoutComponent } from './shared/components/index';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: '', component: AppLayoutComponent, children: [
          ...HomeRoutes,
          ...ContentRoutes,
          ...AboutRoutes
        ]
      },
      {
        path: '', component: BlankLayoutComponent, children: [
          ...LoginRoutes
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

