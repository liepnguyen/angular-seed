import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'bootstrap/dist/css/bootstrap.css', inject: true },
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' }
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      {
        name: '@ng-bootstrap/ng-bootstrap',
        path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
      },
      {
        name: '@ngrx/store',
        packageMeta: {
          main: 'bundles/store.umd.js',
          defaultExtension: 'js'
        }
      },
      {
        name: '@ngrx/core',
        packageMeta: {
          main: 'bundles/core.umd.js',
          defaultExtension: 'js'
        }
      },
      {
        name: 'ngrx-store-freeze',
        path: `node_modules/ngrx-store-freeze/dist/index.js`
      },
      {
        name: 'deep-freeze-strict',
        path: `node_modules/deep-freeze-strict/index.js`
      }
    ];

    this.NPM_DEPENDENCIES
    
    this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
