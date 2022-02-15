import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./landing/landing.module').then(m=>m.LandingModule) },
  {path:"game", loadChildren: ()=> import('./game/game.module').then(m=>m.GameModule)},
  {path:"dashboard" , loadChildren: ()=> import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
