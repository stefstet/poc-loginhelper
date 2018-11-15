import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRedirectComponent } from './login-redirect/login-redirect.component';
import { PostLoginRedirectResultComponent } from './post-login-redirect-result/post-login-redirect-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-redirect', pathMatch: 'full' },
  { path: 'login-redirect', component: LoginRedirectComponent },
  { path: 'login-redirect-result', component: PostLoginRedirectResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
