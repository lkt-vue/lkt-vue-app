import { AppRoutingConfig } from "./partials/AppRoutingConfig";
import { Menu } from "lkt-vue-kernel";
export interface LktAppConfig {
    routing?: AppRoutingConfig;
    mainMenu?: Menu;
    bottomBar?: Menu;
}
