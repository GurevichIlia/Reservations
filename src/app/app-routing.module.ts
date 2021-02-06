import { PageNotFoundComponent } from './core/layouts/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: ':id', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
