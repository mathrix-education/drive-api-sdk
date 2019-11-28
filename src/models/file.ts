import {Model} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface FileInterface extends Model<string> {
  type: 'dir';
  basename: string;
  dirname: string;
  path: string;
  url: string;
}
