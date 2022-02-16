import { EnterNameComponent } from './pages/enter-name/enter-name.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterClassroomIdComponent } from './pages/enter-classroom-id/enter-classroom-id.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

const routes: Routes = [
  {path: '', component: EnterClassroomIdComponent},
  {path: 'classroom/:classroomId', component: EnterNameComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'createaccount', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
