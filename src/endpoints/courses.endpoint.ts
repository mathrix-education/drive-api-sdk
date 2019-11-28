import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Create, Endpoint, ListOptions, ReadOptions, UpdateOptions} from '@mathrix-education/iridium';
import {Course} from '../models/course';

/**
 * /courses endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class CoursesEndpoint extends Endpoint<Course> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'courses');
  }

  /**
   * GET /courses
   * @param options The list options.
   */
  list(options?: ListOptions<Course>) {
    return this.defaultList(options);
  }

  /**
   * POST /courses
   * @param courses The courses model.
   */
  create(courses: Create<Course>) {
    return this.defaultCreate(courses);
  }

  /**
   * GET /courses/{coursesId}
   * @param coursesId The courses id.
   * @param options The read courses request options.
   */
  read(coursesId: number, options?: ReadOptions<Course>) {
    return this.defaultRead(coursesId, options);
  }

  /**
   * PATCH /courses/{coursesId}
   * @param coursesId The courses id.
   * @param courses The courses model.
   * @param options The update courses request options.
   */
  update(coursesId: number, courses: Course, options?: UpdateOptions<Course>) {
    return this.defaultUpdate(coursesId, courses, options);
  }

  /**
   * GET /courses/{courseId}/topics
   * @param courseId The course id.
   */
  relatedTopics(courseId: number) {
    return this.defaultRelationList(courseId, 'topics');
  }
}
