import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { AppState } from '../../app/app.store';
// import { LoggedInActions } from '../shared/stores/auth/logged-in.actions'
import { AccountService } from '../shared/services/account/account.service'

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  response: any;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService
              /*private loggedInActions: LoggedInActions,
              private store: Store<AppState>*/) {
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value)
        .subscribe( () => {
            this.ngOnInit();
            this.response = 'Successfully loggedin';
        },
        error => this.response = error );
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
