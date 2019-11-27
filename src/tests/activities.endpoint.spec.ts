import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {SeriesEndpoint} from '../endpoints/series-endpoint';
import {EducationAPISDKModule} from '../drive-api-sdk.module';
import {environment} from '../../environment';

describe('ActivitiesEndpoint', () => {

  let backend;
  let activitiesEndpoint;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EducationAPISDKModule.withConfig(environment.config),
      ],
      providers: [SeriesEndpoint]
    });
    backend = TestBed.get(HttpTestingController);
    activitiesEndpoint = TestBed.get(SeriesEndpoint);
  });


  it('correct list for activity', () => {
    activitiesEndpoint.list().subscribe();
    backend.expectOne(`${environment.config.baseUrl}/activities`);
  });
});
