import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { Store } from '@ngrx/store';
import { AppState } from './app.store';
import { AuthState } from './shared/stores/auth/auth.store';
import { Observable } from 'rxjs';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  authState$: Observable<AuthState>;

  constructor(private store: Store<AppState>) {
    console.log('Environment config', Config);
  }

  ngOnInit(): void {
    this.authState$ = this.store.select(state => state.auth);
  }

  ngOnDestroy(): void {

  }
}
