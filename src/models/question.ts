import {ModelWithDates, ModelWithDatesOrder} from '@mathrix-education/iridium';
import {questions} from '../types/questions';

// tslint:disable:variable-name


export interface Question extends ModelWithDates<number> {
  situational: boolean;
  questions: questions<1> | questions<2>;
  questions_original: number[];
  choices: string[];
  choices_original: string[];
  correct_choices: number[];
  correct_choices_original: number[];
  media: string;
  media_original: string;
  correction: any[];
  correction_sound: string;
  correction_sound_original: string;
  sound: string;
  source?: string;
  topic_id?: number;
  review: any;
}




