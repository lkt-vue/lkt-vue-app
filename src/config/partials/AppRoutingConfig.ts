import {RouteRecordRaw, RouterHistory} from "vue-router";

export interface AppRoutingConfig {
    history?: RouterHistory
    routes?: Array<RouteRecordRaw>
    beforeEachRouteCallback?: Function
}