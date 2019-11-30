import {ModelWithDates} from '@mathrix-education/iridium';
import {questions} from '../types/questions';

// tslint:disable:variable-name


export interface Question extends ModelWithDates<number> {
  situational: boolean;
  questions: questions<1> | questions<2>;
  readonly questions_original: number[];
  choices: string[];
  readonly choices_original: string[];
  correct_choices: number[];
  readonly correct_choices_original: number[];
  media: string;
  media_original: string;
  correction: any[];
  correction_sound: string;
  readonly correction_sound_original: string;
  sound: string;
  source?: string;
  topic_id?: number;
  review: any;
}




