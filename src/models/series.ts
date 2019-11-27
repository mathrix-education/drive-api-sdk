import {ModelWithDatesOrder} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';


export interface Series extends ModelWithDatesOrder<number> {
  name: string;
  difficulty: Difficulty;
}




