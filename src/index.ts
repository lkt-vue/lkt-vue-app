import {App, Component, createApp} from 'vue';

import LktTooltip from "lkt-tooltip";
import LktField from "lkt-field";
import LktTable from "lkt-table";
import LktButton from 'lkt-button';
import LktAnchor from 'lkt-anchor';
import LktLoader from 'lkt-loader';
import LktModal from "lkt-modal";
import LktModalConfirm from "lkt-modal-confirm";
import LktItemCrud from "lkt-item-crud";
import {createRouter, RouteRecordRaw} from "vue-router";
import {Settings} from "./settings/Settings";
import LktTag from "lkt-tag";
//@ts-ignore
import {getVuexStore} from "lkt-vuex-tools";
import LktPaginator from "lkt-paginator";

export const createLktApp = (component: Component) => {
  const app: App = createApp(component);

  // Register dependencies
  if (app.component('lkt-anchor') === undefined) app.use(LktAnchor);
  if (app.component('lkt-button') === undefined) app.use(LktButton);
  if (app.component('lkt-field') === undefined) app.use(LktField);
  if (app.component('lkt-item-crud') === undefined) app.use(LktItemCrud);
  if (app.component('lkt-loader') === undefined) app.use(LktLoader);
  if (app.component('lkt-modal') === undefined) app.use(LktModal);
  if (app.component('lkt-modal-confirm') === undefined) app.use(LktModalConfirm);
  if (app.component('lkt-paginator') === undefined) app.use(LktPaginator);
  if (app.component('lkt-table') === undefined) app.use(LktTable);
  if (app.component('lkt-tag') === undefined) app.use(LktTag);
  if (app.component('lkt-tooltip') === undefined) app.use(LktTooltip);

  // Configure router
  const router = createRouter({history: Settings.routerHistory, routes: []});
  Settings.routerRoutes.forEach(route => router.addRoute(route));

  if (typeof Settings.beforeEachRouteCallback === 'function') {
    router.beforeEach(Settings.beforeEachRouteCallback);
  }

  // Load all vuex storages
  app.use(getVuexStore());

  return app;
}

export const addAppRoute = (route: RouteRecordRaw) => {
  Settings.routerRoutes.push(route);
}