import { app } from "./App";
import { AutoLoadDirective } from "./directives/AutoLoadDirective";

"use strict";

app.addDirective(AutoLoadDirective.ID, AutoLoadDirective.instance);