import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRedirectComponent } from './login-redirect/login-redirect.component';
import { PostLoginRedirectResultComponent } from './post-login-redirect-result/post-login-redirect-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRedirectComponent,
    PostLoginRedirectResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
