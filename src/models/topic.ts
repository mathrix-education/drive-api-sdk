import {ModelWithDates} from '@mathrix-education/iridium';

export interface Topic extends ModelWithDates {
  name: string;
  slug: string;
  order: number;
  theme_id: string;
}
