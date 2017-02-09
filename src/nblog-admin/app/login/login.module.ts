import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: []
})
export class LoginModule { }
