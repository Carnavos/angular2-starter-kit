// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.browser'; // temporary until 2.1.1 things are patched in Core

// Angular 2
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal/browser';
import { bootloader } from '@angularclass/bootloader';

// import { load as loadWebFont } from 'webfontloader';

// enable prod for faster renders
// enableProdMode();

import { MainModule } from './browser.module';

export const platformRef = platformUniversalDynamic();

// on document ready bootstrap Angular 2
export function main() {
  // Load fonts async
  // https://github.com/typekit/webfontloader#configuration
  // loadWebFont({
  //   google: {
  //     families: ['Droid Sans']
  //   }
  // });

  return platformRef.bootstrapModule(MainModule);
}

// support async tag or hmr
bootloader(main);
