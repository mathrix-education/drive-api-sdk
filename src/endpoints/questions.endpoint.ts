import {Question} from '../models/question';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {
  BaseUrl,
  Create,
  Endpoint,
  ListOptions,
  PaginatedResponse,
  ReadOptions,
  UpdateOptions
} from '@mathrix-education/iridium';

/**
 * /questions endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class QuestionsEndpoint extends Endpoint<Question> {
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
   * @param questions The questions model.
   */
  create(questions: Create<Question>) {
    return this.defaultCreate(questions);
  }

  /**
   * GET /questions/{questionsId}
   * @param questionsId The questions id.
   * @param options The read questions request options.
   */
  read(questionsId: number, options?: ReadOptions<Question>) {
    return this.defaultRead(questionsId, options);
  }

  /**
   * PATCH /questions/{questionsId}
   * @param questionsId The questions id.
   * @param questions The questions model.
   * @param options The update questions request options.
   */
  update(questionsId: number, questions: Question, options?: UpdateOptions<Question>) {
    return this.defaultUpdate(questionsId, questions, options);
  }

  /**
   * DELETE /questions/${questionsId}
   * @param questionsId The questions id.
   */
  delete(questionsId: number) {
    return this.defaultDelete(questionsId);
  }

  /**
   * GET /questions/random/{count}
   * @param count The number of questions.
   */
  random(count: number) {
    return this.http.get<PaginatedResponse<Question>>(`${this.url}/random/${count}`);
  }
}
