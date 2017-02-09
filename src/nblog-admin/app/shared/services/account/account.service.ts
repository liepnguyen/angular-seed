import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { AuthTokenService } from '../auth-token/auth-token.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.store';
import { LoggedInActions } from '../../stores/auth/logged-in.actions';
import { LoginModel } from '../../models/login.model';
import 'rxjs/add/operator/do';

@Injectable()
export class AccountService {

    constructor(private http: Http,
                private authTokens: AuthTokenService,
                private store: Store<AppState>,
                private loggedInAction: LoggedInActions
    ) { }

    login(user: LoginModel)  {
        return this.authTokens.getTokens(user, 'password')
            .catch(res => Observable.throw(res.json()))
            .do(res => this.authTokens.scheduleRefresh());
    }
}