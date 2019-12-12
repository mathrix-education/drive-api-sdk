import {BaseUrl, Create, Endpoint, ListOptions, ReadOptions, UpdateOptions} from '@mathrix-education/iridium';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Question} from '../models/question';
import {Series} from '../models/series';

/**
 * /questions endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class SeriesEndpoint extends Endpoint<Series> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'series');
  }

  /**
   * GET /questions
   * @param options The list options.
   */
  list(options?: ListOptions<Series>) {
    return this.defaultList(options);
  }

  /**
   * POST /questions
   * @param series The question model.
   */
  create(series: Create<Series>) {
    return this.defaultCreate(series);
  }

  /**
   * GET /questions/{series}
   * @param seriesId The series id.
   * @param options The read question request options.
   */
  read(seriesId: number, options?: ReadOptions<Series>) {
    return this.defaultRead(seriesId, options);
  }

  /**
   * PATCH /questions/{questionId}
   * @param seriesId The series id.
   * @param question The series model.
   * @param options The update series request options.
   */
  update(seriesId: number, question: Series, options?: UpdateOptions<Series>) {
    return this.defaultUpdate(seriesId, question, options);
  }

  /**
   * DELETE /series/${seriesId}
   * @param seriesId The series id.
   */
  delete(seriesId: number) {
    return this.defaultDelete(seriesId);
  }
}
