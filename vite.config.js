import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'build');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [ vue() ],
    resolve: {
        alias: { '@': src, '@test': test }
    },
    build: {
        lib: {
            entry: `${ src }/index.ts`,
            name: 'LktVueApp',
            fileName: 'build',
            formats: ['es']
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'vue-router',
                'vue3-carousel',
                'lkt-i18n',
                'lkt-field-validation',
                'lkt-accordion',
                'lkt-anchor',
                'lkt-button',
                'lkt-banner-box',
                'lkt-box',
                'lkt-charts',
                'lkt-counter',
                'lkt-data-state',
                'lkt-date-tools',
                'lkt-field',
                'lkt-dot',
                'lkt-flex-layout',
                'lkt-form',
                'lkt-grid-layout',
                'lkt-item-crud',
                'lkt-loader',
                'lkt-header',
                'lkt-modal',
                'lkt-paginator',
                'lkt-polymorphic-element',
                'lkt-progress',
                'lkt-table',
                'lkt-tabs',
                'lkt-tag',
                'lkt-toast',
                'lkt-vue-admin',
                'lkt-vue-kernel',
                'lkt-vuex-tools',
                'lkt-web-page',
                'lkt-icon',
                'lkt-menu',
                'lkt-icon-pack',
                'lkt-image',
                'lkt-tooltip',
                'lkt-http-client',
                'lkt-http-info',
                'lkt-step-process',
                'lkt-object-tools',
                'lkt-string-tools',
                'axios',
                'modern-normalize',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'axios',
                    "lkt-events": 'LktEvents',
                    "lkt-button": 'LktButton',
                    "lkt-http-client": 'LktHttpClient',
                    "lkt-string-tools": 'LktStringTools'
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: [ 'text', 'lcov' ]
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${ snapshots }/${ path[0] }/${ path[1] }${ snapExtension }`;
        }
    }
};