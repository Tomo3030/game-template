import { EnterNameComponent } from './pages/enter-name/enter-name.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterClassroomIdComponent } from './pages/enter-classroom-id/enter-classroom-id.component';

const routes: Routes = [
  {path: '', component: EnterClassroomIdComponent},
  {path: 'classroom/:classroomId', component: EnterNameComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
