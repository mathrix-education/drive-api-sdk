import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Create, Endpoint, ListOptions, ReadOptions, UpdateOptions} from '@mathrix-education/iridium';
import {Topic} from '../models/topic';

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
   * @param topics The topics model.
   */
  create(topics: Create<Topic>) {
    return this.defaultCreate(topics);
  }

  /**
   * GET /topics/{topicsId}
   * @param topicsId The topics id.
   * @param options The read topics request options.
   */
  read(topicsId: number, options: ReadOptions<Topic>) {
    return this.defaultRead(topicsId, options);
  }

  /**
   * PATCH /topics/{topicsId}
   * @param topicsId The topics id.
   * @param topics The topics model.
   * @param options The update topics request options.
   */
  update(topicsId: number, topics: Topic, options: UpdateOptions<Topic>) {
    return this.defaultUpdate(topicsId, topics, options);
  }

  /**
   * GET /topics/{relation}/${relation}
   * @param topicId the topic id.
   * @param relation the relation.
   */
  related(topicId: number, relation: 'courses' | 'questions' | 'theme') {
    return this.defaultRelationList(topicId, relation);
  }
}
