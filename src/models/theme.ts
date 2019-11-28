import {ModelWithDates} from '@mathrix-education/iridium';

export interface Theme extends ModelWithDates<number> {
  name: string;
  slug: string;
}
