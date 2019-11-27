import {ModelWithDates} from '@mathrix-education/iridium';

export type ResultType = 'exam' | 'series';


export interface Result extends ModelWithDates {
  id: number;
  type: ResultType;
  answers: { question_id: string, choices: number[], marked: boolean }[];
}
