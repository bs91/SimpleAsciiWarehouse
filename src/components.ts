import { app } from "./App";
import { AdComponent, AdComponentController } from "./components/AdComponent";
import { ProductSortComponent, ProductSortComponentController } from 
    "./components/ProductSortComponent";
import { AppComponent, AppComponentController } from "./components/AppComponent";
import { HeaderComponent, HeaderComponentController } from "./components/HeaderComponent";
import { ProductsComponent, ProductsComponentController } from "./components/ProductsComponent";
import { LoadingIndicatorComponent, LoadingIndicatorComponentController } from 
    "./components/LoadingIndicatorComponent";

'use strict';

app.addController(AdComponentController.ID, AdComponentController);
app.addComponent(AdComponent.ID, new AdComponent());

app.addController(ProductSortComponentController.ID, ProductSortComponentController);
app.addComponent(ProductSortComponent.ID, new ProductSortComponent());

app.addController(AppComponentController.ID, AppComponentController);
app.addComponent(AppComponent.ID, new AppComponent());

app.addController(HeaderComponentController.ID, HeaderComponentController);
app.addComponent(HeaderComponent.ID, new HeaderComponent());

app.addController(ProductsComponentController.ID, ProductsComponentController);
app.addComponent(ProductsComponent.ID, new ProductsComponent());

app.addController(LoadingIndicatorComponentController.ID, LoadingIndicatorComponentController);
app.addComponent(LoadingIndicatorComponent.ID, new LoadingIndicatorComponent());