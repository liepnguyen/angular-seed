import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent, NavbarComponent, AppLayoutComponent, BlankLayoutComponent } from './components/index';

import { LoggedInActions } from './stores/auth/logged-in.actions';
import { AccountService, AuthTokenService } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, AppLayoutComponent, BlankLayoutComponent],
  exports: [ToolbarComponent, NavbarComponent, AppLayoutComponent, BlankLayoutComponent,
    CommonModule, FormsModule, RouterModule],
  providers: [
    LoggedInActions,
    AccountService,
    AuthTokenService
  ]
})
export class SharedModule {
  constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
