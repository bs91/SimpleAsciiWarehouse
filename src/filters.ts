import { app } from "./App";
import * as MonetaryFilter from "./filters/MonetaryFilter";
import * as DateFilter from "./filters/DateFilter";

'use strict';

app.addFilter(MonetaryFilter.ID, MonetaryFilter.FilterFunction);
app.addFilter(DateFilter.ID, DateFilter.FilterFunction);