import {Router, RouteRecordRaw, RouterHistory} from "vue-router";

export interface AppRoutingConfig {
    router?: Router
    history?: RouterHistory
    routes?: Array<RouteRecordRaw>
    beforeEachRouteCallback?: Function
}