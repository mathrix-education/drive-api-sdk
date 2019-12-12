import {BaseUrl, Endpoint} from '@mathrix-education/iridium';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {Result} from '../models/result';

export class ResultsEndpoint extends Endpoint<Result> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'results');
  }

  create(result: Result): any {
    return this.defaultCreate(result);
  }
}
