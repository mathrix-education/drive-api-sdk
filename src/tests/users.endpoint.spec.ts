import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DriveApiSdkModule} from '../drive-api-sdk.module';
import {environment} from '../../environment';
import {UsersEndpoint} from '../endpoints/users.endpoint';
import {HttpRequest} from '@angular/common/http';

describe('Users Endpoint', () => {

  let backend;
  let usersEndpoint;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DriveApiSdkModule.withConfig(environment.config),
      ],
      providers: [UsersEndpoint]
    });
    backend = TestBed.get(HttpTestingController);
    usersEndpoint = TestBed.get(UsersEndpoint);
  });


  it('patch user', () => {
    usersEndpoint.update(1,
      {
        id: 1,
        password: "",
        scopes: [],
        first_name: 'a',
        last_name: 'b',
        username: 'c',
        email: 'd@mthx.fr',
        created_at: Date.now().toString(),
        updated_at: Date.now().toString()
      }).subscribe();

 //   backend.expectOne(`${environment.config.baseUrl}/users/1`);

    backend.expectOne((request: HttpRequest<any>) => {
      expect(request.method).toBe('PATCH');
      expect(request.url).toBe(`${environment.config.baseUrl}/users/1`);
      expect(request.body.updated_at).toBeUndefined();
      expect(request.body.created_at).toBeUndefined();
      console.log(request);
      return true;
    })


  });
});
