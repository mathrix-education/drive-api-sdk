import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {
  BaseUrl,
  Create,
  Endpoint,
  ListOptions,
  ReadOptions,
  RelationListOptions,
  UpdateOptions
} from '@mathrix-education/iridium';
import {Topic} from '../models/topic';
import {Course} from '../models/course';
import {Question} from '../models/question';
import {Theme} from '../models/theme';

/**
 * /topics endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class TopicsEndpoint extends Endpoint<Topic> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'topics');
  }

  /**
   * GET /topics
   * @param options The list options.
   */
  list(options?: ListOptions<Topic>) {
    return this.defaultList(options);
  }

  /**
   * POST /topics
   * @param topics The topic model.
   */
  create(topics: Create<Topic>) {
    return this.defaultCreate(topics);
  }

  /**
   * GET /topics/{topicId}
   * @param topicId The topic id.
   * @param options The read topic request options.
   */
  read(topicId: number, options?: ReadOptions<Topic>) {
    return this.defaultRead(topicId, options);
  }

  /**
   * PATCH /topics/{topicId}
   * @param topicId The topic id.
   * @param topics The topic model.
   * @param options The update topic request options.
   */
  update(topicId: number, topics: Topic, options?: UpdateOptions<Topic>) {
    return this.defaultUpdate(topicId, topics, options);
  }

  /**
   * DELETE /topcs/${topicId}
   * @param topicId The topic id.
   */
  delete(topicId: number) {
    return this.defaultDelete(topicId);
  }

  /**
   * GET /topics/{relation}/${relation}
   * @param topicId The topic id.
   * @param relation The relation.
   * @param options The relation list options.
   */
  related(topicId: number, relation: 'courses' | 'questions' | 'themes', options?: RelationListOptions<Course | Question | Theme>) {
    return this.defaultRelationList<Course | Question | Theme>(topicId, relation, options);
  }
}
