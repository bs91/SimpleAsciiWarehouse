import { app } from "./App";
import { AdComponentController } from 
    "./controllers/AdComponentController";
import { ProductSortComponentController } from 
    "./controllers/ProductSortComponentController";
import { AppComponentController } from 
    "./controllers/AppComponentController";
import { HeaderComponentController } from 
    "./controllers/HeaderComponentController";
import { ProductsComponentController } from 
    "./controllers/ProductsComponentController";
import { LoadingIndicatorComponentController } from 
    "./controllers/LoadingIndicatorComponentController";


"use strict";

app.addController(AdComponentController.ID, AdComponentController);
app.addController(ProductSortComponentController.ID, ProductSortComponentController);
app.addController(AppComponentController.ID, AppComponentController);
app.addController(HeaderComponentController.ID, HeaderComponentController);
app.addController(ProductsComponentController.ID, ProductsComponentController);
app.addController(LoadingIndicatorComponentController.ID, 
    LoadingIndicatorComponentController);