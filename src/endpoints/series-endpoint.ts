import {
  BaseUrl,
  Create,
  Endpoint,
  ListOptions,
  PaginatedResponse,
  ReadOptions,
  UpdateOptions
} from '@mathrix-education/iridium';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Question} from '../models/question';

/**
 * /questions endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class SeriesEndpoint extends Endpoint<Question> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'questions');
  }

  /**
   * GET /questions
   * @param options The list options.
   */
  list(options?: ListOptions<Question>) {
    return this.defaultList(options);
  }

  /**
   * POST /questions
   * @param question The question model.
   */
  create(question: Create<Question>) {
    return this.defaultCreate(question);
  }

  /**
   * GET /questions/{questionId}
   * @param questionId The question id.
   * @param options The read question request options.
   */
  read(questionId: number, options?: ReadOptions<Question>) {
    return this.defaultRead(questionId, options);
  }

  /**
   * PATCH /questions/{questionId}
   * @param questionId The question id.
   * @param question The question model.
   * @param options The update question request options.
   */
  update(questionId: number, question: Question, options?: UpdateOptions<Question>) {
    return this.defaultUpdate(questionId, question, options);
  }

  /**
   * GET /questions/random/{count}
   * @param count The number of questions.
   */
  random(count: number) {
    return this.http.get<PaginatedResponse<Question>>(`${this.url}/random/${count}`);
  }
}
