import { Common } from './app-version.common';
import { android } from 'tns-core-modules/application';

export class AppVersion extends Common {
    constructor() {
        super();
        const packageManager = android.context.getPackageManager();
        const packageInfo = packageManager.getPackageInfo(android.context.getPackageName(), 0);
        const versionName = packageInfo.versionName;

        this.message = `This version number for this package is: ${versionName}`
    }
}
