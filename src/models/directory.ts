import {Model} from '@mathrix-education/iridium';

// tslint:disable:variable-name


export interface Directory extends Model<string> {
  type: 'dir';
  basename: string;
  dirname: string;
  filename: string;
  path: string;
  url: string;
}
