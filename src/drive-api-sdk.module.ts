import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthTokenName, BaseUrl, IridiumModule} from '@mathrix-education/iridium';


@NgModule({
    imports: [HttpClientModule, IridiumModule],
  }
)

export class DriveApiSdkModule {
  static withConfig(config: { authTokenName: string, baseUrl: string }): ModuleWithProviders {
    return {
      ngModule: DriveApiSdkModule,
      providers: [
        {provide: BaseUrl, useValue: config.baseUrl},
        {provide: AuthTokenName, useValue: config.authTokenName},

      ]
    };
  }
}
