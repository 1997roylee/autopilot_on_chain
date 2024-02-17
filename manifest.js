import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const manifest = {
    manifest_version: 3,
    name: 'Twitter Ad/Scam Block',
    description: 'Blocks Twitter ads and scams',
    version: packageJson.version,
    action: {
        default_popup: 'index.html',
    },
    host_permissions: ['https://*.twitter.com/'],
    permissions: ['activeTab', 'storage'],
    background: {
        service_worker: 'src/apps/background/index.ts',
    },
    icons: {
        128: 'icon-128.png',
      },
    content_scripts: [
        {
            matches: ['*://*.x.com/*', '*://*.twitter.com/*'],
            js: [
                'src/apps/ad-block/index.ts',
                // 'src/apps/ad-block/injected.css.js',
            ],
        },
    ],
};
export default manifest;
