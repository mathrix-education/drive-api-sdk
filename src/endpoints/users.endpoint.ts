import {BaseUrl, Create, Endpoint, ListOptions} from '@mathrix-education/iridium';
import {User} from '../models/user';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result, ResultType} from '../models/result';

/**
 * /users endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersEndpoint extends Endpoint<User> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'users');
  }

  /**
   * GET /users
   * @param options The list user request options.
   */
  list(options?: ListOptions<User>) {
    return this.defaultList(options);
  }

  /**
   * GET /users
   * @param user The user.
   */
  create(user: Create<User>) {
    return this.defaultCreate(user);
  }

  /**
   * GET /users/{userId}
   * @param userId The user id.
   * @param options The options.
   */
  read(userId: number, options?: ListOptions<User>) {
    return this.defaultRead(userId, options);
  }

  /**
   * PATCH /users/{userId}
   * @param userId The user id.
   * @param model The user.
   */
  update(userId: number, model: User) {
    return this.defaultUpdate(userId, model);
  }

  /**
   * DELETE /users/{userId}
   * @param userId The user id.
   */
  delete(userId: number) {
    return this.defaultDelete(userId);
  }

  /**
   * DELETE /users/{userId}/cache
   * @param userId The user id.
   */
  deleteCache(userId: number) {
    return this.http.delete(`${this.url}/${userId}/cache`);
  }

  /**
   * GET /users/{userId}/results/{type}
   * @param userId The user id.
   * @param type The result type.
   */
  relatedResults(userId: number, type: ResultType) {
    return this.defaultRelationList<Result>(userId, 'results', {filters: [['type', '=', type]]});
  }
}
