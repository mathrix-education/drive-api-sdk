import {ModelWithDates} from '@mathrix-education/iridium';

export interface Topic extends ModelWithDates<number> {
  name: string;
  slug: string;
  order: number;
  theme_id: number;
}
