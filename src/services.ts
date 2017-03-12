import { app } from "./App";
import { ProductService } from "./services/ProductService";
import { AdLinkService } from "./services/AdLinkService";

'use strict';

app.addService(ProductService.ID, ProductService);
app.addService(AdLinkService.ID, AdLinkService);