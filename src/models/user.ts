import {ModelWithDates} from '@mathrix-education/iridium';

// tslint:disable:variable-name

export interface User extends ModelWithDates<number> {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  scopes: string[];
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
}
