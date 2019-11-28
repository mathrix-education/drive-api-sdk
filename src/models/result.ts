import {ModelWithDates} from '@mathrix-education/iridium';

export type ResultType = 'exam' | 'series';


export interface Result extends ModelWithDates<number> {
  id: number;
  type: ResultType;
  answers: { question_id: number, choices: number[], marked: boolean }[];
}
