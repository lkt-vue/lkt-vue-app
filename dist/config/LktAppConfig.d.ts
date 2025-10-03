import { AppRoutingConfig } from "./partials/AppRoutingConfig";
import { Menu } from "lkt-vue-kernel";
import { AppSetupConfig } from "./partials/AppSetupConfig";
export interface LktAppConfig {
    routing?: AppRoutingConfig;
    setup?: AppSetupConfig;
    mainMenu?: Menu;
    bottomBar?: Menu;
    hasMainMenu?: boolean | (() => boolean);
    hasBottomBar?: boolean | (() => boolean);
    hasMainHeader?: boolean | (() => boolean);
}
