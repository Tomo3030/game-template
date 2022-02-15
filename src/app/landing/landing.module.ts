import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { EnterClassroomIdComponent } from './pages/enter-classroom-id/enter-classroom-id.component';
import { EnterNameComponent } from './pages/enter-name/enter-name.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IsSignedInComponent } from './pages/is-signed-in/is-signed-in.component';
import { MatCardModule} from '@angular/material/card';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

@NgModule({
  declarations: [
    EnterClassroomIdComponent,
    EnterNameComponent,
    IsSignedInComponent,
    SignInComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
