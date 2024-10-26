import {createWebHistory, NavigationGuardWithThis, RouteRecordRaw, RouterHistory} from "vue-router";

export class Settings {
    static routerHistory: RouterHistory = createWebHistory();
    static routerRoutes: RouteRecordRaw[] = [];
    static beforeEachRouteCallback?: NavigationGuardWithThis<any> = undefined;
}