import { app } from "./App";
import { AdComponent } from "./components/AdComponent";
import { ProductSortComponent } from "./components/ProductSortComponent";
import { AppComponent } from "./components/AppComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ProductsComponent } from "./components/ProductsComponent";
import { LoadingIndicatorComponent } from "./components/LoadingIndicatorComponent";


"use strict";

app.addComponent(AdComponent.ID, new AdComponent());
app.addComponent(ProductSortComponent.ID, new ProductSortComponent());
app.addComponent(AppComponent.ID, new AppComponent());
app.addComponent(HeaderComponent.ID, new HeaderComponent());
app.addComponent(ProductsComponent.ID, new ProductsComponent());
app.addComponent(LoadingIndicatorComponent.ID, new LoadingIndicatorComponent());