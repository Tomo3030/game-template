import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { SelectQuestionSetCardComponent } from './components/select-question-set-card/select-question-set-card.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JoinGameComponent } from './pages/join-game/join-game.component';
import { ClassroomIdDisplayComponent } from './components/classroom-id-display/classroom-id-display.component';
import { JoinedUsersDisplayComponent } from './components/joined-users-display/joined-users-display.component';

@NgModule({
  declarations: [


    DashboardComponent,
        QuestionCardComponent,
        SelectQuestionSetCardComponent,
        ToolbarComponent,
        JoinGameComponent,
        ClassroomIdDisplayComponent,
        JoinedUsersDisplayComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
  ]
})
export class AdminModule { }
