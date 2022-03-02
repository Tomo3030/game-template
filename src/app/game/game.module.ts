import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './pages/game/game.component';
import { GameToolbarComponent } from './components/game-toolbar/game-toolbar.component';
import { WaitingComponent } from './components/waiting/waiting.component';
//import { SurveyComponent } from './components/survey/survey.component';
//import { MingleComponent } from './components/mingle/mingle.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatRippleModule } from '@angular/material/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MingleComponent } from './pages/mingle/mingle.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { QuestionComponent } from './components/question/question.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatListModule} from '@angular/material/list';
import { MingleInputComponent } from './components/mingle-input/mingle-input.component';
import { CorrectOverlayComponent } from './components/correct-overlay/correct-overlay.component';


@NgModule({
  declarations: [
    GameComponent,
    GameToolbarComponent,
    WaitingComponent,
    SurveyComponent,
    MingleComponent,
    StepperComponent,
    QuestionComponent,
    MingleInputComponent,
    CorrectOverlayComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatRippleModule,
    CdkStepperModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    OverlayModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule

  ]
})
export class GameModule { }
