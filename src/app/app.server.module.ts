import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
//import { NgtPwaMockModule } from '@ng-toolkit/pwa';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
//    NgtPwaMockModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
