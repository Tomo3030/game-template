import { GameQuestion } from './../../../models/game-question';
import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/models/game-status';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameStatus: GameStatus = 'doingSurvey';
  score?: number;

  surveyQuestions: GameQuestion[] = [
    {
      questionType: 'text',
      surveyQuestion: 'Where do you want to go on your next vacation?',
      mingleQuestionStructure: 'Find someone who wants to visit %s% on their next vacation',
    },
  {
      questionType: 'radio',
      surveyQuestion: 'Have you ever been to Europe?',
      answerOptions:[{surveyView: 'Yes', mingleView: 'has'},{surveyView: 'No', mingleView: 'has not'}],
      mingleQuestionStructure: 'Find someone who %s% been to Europe',
    },
    {
      questionType: 'radio',
      surveyQuestion: 'What is your favorite color?',
      answerOptions:[{surveyView: 'Red', mingleView: 'red'},{surveyView: 'Blue', mingleView: 'blue'},{surveyView: 'Green', mingleView: 'green'},{surveyView: 'Yellow', mingleView: 'yellow'}],
      mingleQuestionStructure: 'Find someone who likes %s%',
    },
    {
      questionType: 'radio',
      surveyQuestion: 'What do you like to do on vacation?',
      answerOptions:[{surveyView: 'Go to the beach', mingleView: 'go to the beach'},{surveyView: 'Go to the mountains', mingleView: 'go to the mountains'},{surveyView: 'Go to the city', mingleView: 'go to the city'},{surveyView: 'Go to the zoo', mingleView: 'go to the zoo'}],
      mingleQuestionStructure: 'Find someone who likes to %s% on vacation'
    },
    {
      questionType: 'number',
      surveyQuestion: 'How many countries have you visited?',
      mingleQuestionStructure: 'Find someone who has visited %s% countries'
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }
}
