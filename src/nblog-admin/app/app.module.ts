import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appReducer } from './app.store';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ContentModule } from './content/content.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    AboutModule, 
    HomeModule, 
    ContentModule, 
    LoginModule, 
    SharedModule.forRoot(),
    StoreModule.provideStore(appReducer)],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
