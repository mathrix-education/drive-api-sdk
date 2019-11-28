import {ModelWithDates} from '@mathrix-education/iridium';

export interface Course extends ModelWithDates<number> {
  name: string;
  content: any[];
  review: any;
  topic_id: number;
}
