import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { LoginModel } from '../../models/login.model';
import { AuthTokenModel } from '../../models/auth-token.model';
import { AppState } from '../../../app.store';
import { LoggedInActions } from '../../stores/auth/logged-in.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthTokenService {
  refreshSubscription$: Subscription;

  constructor(private http: Http,
              private store: Store<AppState>,
              private loggedInActions: LoggedInActions
  ) { }

  getTokens(data: LoginModel, grantType: string): Observable<void> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    Object.assign(data, {
      client_id: 'postman',
      grant_type: grantType,
      // offline_access is required for a refresh token
      scope: ['openid offline_access']
    });

    return this.http.post('http://localhost:51115/connect/token', this.encodeObjectToParams(data), options)
      .map(res => res.json())
      .map((tokens: AuthTokenModel) => {
        this.store.dispatch(this.loggedInActions.loggedIn());
      });
  }

  scheduleRefresh() {

  }

  private encodeObjectToParams(obj: any): string {
    return Object.keys(obj)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
      .join('&');
  }
}