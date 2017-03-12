import { app } from "./App";
import { AutoLoadDirective } from "./directives/AutoLoadDirective";
import { ShowWhenLoadedDirective } from "./directives/ShowWhenLoadedDirective";

'use strict';

app.addDirective(AutoLoadDirective.ID, AutoLoadDirective.instance);
app.addDirective(ShowWhenLoadedDirective.ID, ShowWhenLoadedDirective.instance);