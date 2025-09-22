import {App, Component, createApp} from 'vue';

import LktTooltip from "lkt-tooltip";
import LktField from "lkt-field";
import LktTable from "lkt-table";
import LktButton from 'lkt-button';
import LktAnchor from 'lkt-anchor';
import LktLoader from 'lkt-loader';
import LktModal from "lkt-modal";
import LktItemCrud from "lkt-item-crud";
import {createRouter, NavigationGuardWithThis, RouteRecordRaw} from "vue-router";
import {Settings} from "./settings/Settings";
import LktTag from "lkt-tag";
//@ts-ignore
import {getVuexStore} from "lkt-vuex-tools";
import LktPaginator from "lkt-paginator";
import LktCharts from "lkt-charts";
import LktIcon from "lkt-icon";
import LktBox from "lkt-box";
import LktMenu from "lkt-menu";
import LktHttpInfo from "lkt-http-info";
import LktStepProcess from "lkt-step-process";
import LktAccordion from "lkt-accordion";
import LktProgress from "lkt-progress";
import LktImage from "lkt-image";
import LktToast from "lkt-toast";
import LktHeader from "lkt-header";
import LktForm from "lkt-form";
import LktVueAdmin from "lkt-vue-admin";
import LktWebPage from "lkt-web-page";
import LktCounter from "lkt-counter";
import LktDot from "lkt-dot";
import LktBanner from "lkt-banner-box";
import {LktObject} from "lkt-vue-kernel";

export const createLktApp = (component: Component, componentProps: LktObject) => {
    const app: App = createApp(component);

    // Configure router
    console.log('Settings.routerHistory: ', Settings.routerHistory);
    const router = createRouter({history: Settings.routerHistory, routes: []});
    Settings.routerRoutes.forEach(route => {
        console.log('route: ', route);
        router.addRoute(route)
    });

    if (typeof Settings.beforeEachRouteCallback === 'function') {
        router.beforeEach(Settings.beforeEachRouteCallback);
    }

    app.use(router);

    // Load all vuex storages
    app.use(getVuexStore());

    // Register dependencies
    if (app.component('lkt-accordion') === undefined) app.use(LktAccordion);
    if (app.component('lkt-anchor') === undefined) app.use(LktAnchor);
    if (app.component('lkt-banner') === undefined) app.use(LktBanner);
    if (app.component('lkt-box') === undefined) app.use(LktBox);
    if (app.component('lkt-button') === undefined) app.use(LktButton);
    if (app.component('lkt-chart') === undefined) app.use(LktCharts);
    if (app.component('lkt-counter') === undefined) app.use(LktCounter);
    if (app.component('lkt-dot') === undefined) app.use(LktDot);
    if (app.component('lkt-field') === undefined) app.use(LktField);
    if (app.component('lkt-form') === undefined) app.use(LktForm);
    if (app.component('lkt-header') === undefined) app.use(LktHeader);
    if (app.component('lkt-http-info') === undefined) app.use(LktHttpInfo);
    if (app.component('lkt-icon') === undefined) app.use(LktIcon);
    if (app.component('lkt-image') === undefined) app.use(LktImage);
    if (app.component('lkt-item-crud') === undefined) app.use(LktItemCrud);
    if (app.component('lkt-loader') === undefined) app.use(LktLoader);
    if (app.component('lkt-menu') === undefined) app.use(LktMenu);
    if (app.component('lkt-modal') === undefined) app.use(LktModal);
    if (app.component('lkt-paginator') === undefined) app.use(LktPaginator);
    if (app.component('lkt-progress') === undefined) app.use(LktProgress);
    if (app.component('lkt-step-process') === undefined) app.use(LktStepProcess);
    if (app.component('lkt-table') === undefined) app.use(LktTable);
    if (app.component('lkt-tag') === undefined) app.use(LktTag);
    if (app.component('lkt-toast') === undefined) app.use(LktToast);
    if (app.component('lkt-tooltip') === undefined) app.use(LktTooltip);
    if (app.component('lkt-vue-admin') === undefined) app.use(LktVueAdmin);
    if (app.component('lkt-web-page') === undefined) app.use(LktWebPage);

    return app;
}

export const addAppRoute = (route: RouteRecordRaw) => {
    Settings.routerRoutes.push(route);
}

export const setBeforeEachRouteCallback = (fn: NavigationGuardWithThis<any>) => {
    Settings.beforeEachRouteCallback = fn;
}