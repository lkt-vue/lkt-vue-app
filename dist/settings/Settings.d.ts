import { NavigationGuardWithThis, RouteRecordRaw, RouterHistory } from "vue-router";
export declare class Settings {
    static routerHistory: RouterHistory;
    static routerRoutes: RouteRecordRaw[];
    static beforeEachRouteCallback?: NavigationGuardWithThis<any>;
}
