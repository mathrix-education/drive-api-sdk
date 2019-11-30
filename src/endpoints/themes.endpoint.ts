import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {BaseUrl, Create, Endpoint, ListOptions, ReadOptions, UpdateOptions} from '@mathrix-education/iridium';
import {Theme} from '../models/theme';
import {Topic} from '../models/topic';

/**
 * /themes endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemesEndpoint extends Endpoint<Theme> {
  constructor(http: HttpClient, @Inject(BaseUrl) base: string) {
    super(http, base, 'themes');
  }

  /**
   * GET /themes
   * @param options The list options.
   */
  list(options?: ListOptions<Theme>) {
    return this.defaultList(options);
  }

  /**
   * POST /themes
   * @param themes The themes model.
   */
  create(themes: Create<Theme>) {
    return this.defaultCreate(themes);
  }

  /**
   * GET /themes/{themesId}
   * @param themesId The themes id.
   * @param options The read themes request options.
   */
  read(themesId: number, options?: ReadOptions<Theme>) {
    return this.defaultRead(themesId, options);
  }

  /**
   * PATCH /themes/{themesId}
   * @param themesId The themes id.
   * @param themes The themes model.
   * @param options The update themes request options.
   */
  update(themesId: number, themes: Theme, options?: UpdateOptions<Theme>) {
    return this.defaultUpdate(themesId, themes, options);
  }

  /**
   * GET /themes/{themeId}/topics
   * @param themeId The theme id.
   */
  relatedTopics(themeId: number) {
    return this.defaultRelationList<Topic>(themeId, 'topics');
  }
}
