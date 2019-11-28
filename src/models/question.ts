import {ModelWithDatesOrder} from '@mathrix-education/iridium';
import {questions} from '../types/questions';

// tslint:disable:variable-name


export interface Question extends ModelWithDatesOrder<number> {
  situational: boolean;
  questions: questions<1> | questions<2>;
  choices: string[];
  correct_choices: string[];
  media: string;
  correction_sound: string;
  correction: any[];
  sound: string;
  source: string;
  review: any;
  topic_id?: number;
}




