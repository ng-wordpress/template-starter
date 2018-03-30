import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

(<any> window)['initAngular'] = function() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
};

if (environment.production) {
  enableProdMode();
} else {
  (<any> window)['initAngular']();
}
