"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const axios_1 = require("axios");
const log = require("loglevel");
const constants_1 = require("../constants");
const ELECTRON_VERSIONS_URL = 'https://atom.io/download/atom-shell/index.json';
async function getChromeVersionForElectronVersion(electronVersion, url = ELECTRON_VERSIONS_URL) {
    log.debug('Grabbing electron<->chrome versions file from', url);
    const response = await axios_1.default.get(url, { timeout: 5000 });
    if (response.status !== 200) {
        throw new Error(`Bad request: Status code ${response.status}`);
    }
    const { data } = response;
    const electronVersionToChromeVersion = _.zipObject(data.map((d) => d.version), data.map((d) => d.chrome));
    if (!(electronVersion in electronVersionToChromeVersion)) {
        throw new Error(`Electron version '${electronVersion}' not found in retrieved version list!`);
    }
    const chromeVersion = electronVersionToChromeVersion[electronVersion];
    log.debug(`Associated electron v${electronVersion} to chrome v${chromeVersion}`);
    return chromeVersion;
}
function getUserAgentString(chromeVersion, platform) {
    let userAgent;
    switch (platform) {
        case 'darwin':
        case 'mas':
            userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
            break;
        case 'win32':
            userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
            break;
        case 'linux':
            userAgent = `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36`;
            break;
        default:
            throw new Error('Error invalid platform specified to getUserAgentString()');
    }
    log.debug(`Given chrome ${chromeVersion} on ${platform},`, `using user agent: ${userAgent}`);
    return userAgent;
}
exports.getUserAgentString = getUserAgentString;
async function inferUserAgent(electronVersion, platform, url = ELECTRON_VERSIONS_URL) {
    log.debug(`Inferring user agent for electron ${electronVersion} / ${platform}`);
    try {
        const chromeVersion = await getChromeVersionForElectronVersion(electronVersion, url);
        return getUserAgentString(chromeVersion, platform);
    }
    catch (e) {
        log.warn(`Unable to infer chrome version for user agent, using ${constants_1.DEFAULT_CHROME_VERSION}`);
        return getUserAgentString(constants_1.DEFAULT_CHROME_VERSION, platform);
    }
}
exports.inferUserAgent = inferUserAgent;
//# sourceMappingURL=inferUserAgent.js.map