import {questions} from './questions';
import {Tuple} from './tuple';

/**
 * Tuple of choices, contain 2 to 4 choices if there is 1 question,
 * contain 4 choices if two question (2 choices for each questions)
 */
export type Choices<T extends questions<number>> = T extends questions<1> ?
  Tuple<string, 2> | Tuple<string, 3> | Tuple<string, 4> : Tuple<string, 4>;
