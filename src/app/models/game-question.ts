//so gameQuestion is what we will get from DB

import { QuestionType } from "./question-type";

export interface GameQuestion{
  questionType: QuestionType;
  surveyQuestion: string;
  answerOptions?: {surveyView:string, mingleView:string}[];
  mingleQuestionStructure: string // must contain %s%
}

