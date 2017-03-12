import './styles/main.scss';
import { IApp } from './interfaces/IApp';
import { module } from 'angular';

'use strict';

class App implements IApp
{
    app: ng.IModule;

    constructor(name: string, modules: Array<string>) {
        this.app = module( name, modules );
    }

    addController(name: string, controller: ng.IControllerConstructor) {
        this.app.controller(name, controller);
    }

    addService(name: string, service: Function) {
        this.app.service(name, service);
    }

    addDirective(name: string, directive: any) {
        this.app.directive(name, directive);
    }

    addComponent(name: string, component: any) {
        this.app.component(name, component);
    }

    addFilter(name: string, filter: Function) {
        this.app.filter(name, filter)
    }

    config(config?: Array<any>) {
        this.app.config(config);
    }

    run(run?: Function) {
        this.app.run(run);
    }
}

export let app: App = new App('asciiWarehouseApp', [
    'ngMaterial', 
    'ui.scroll'
    ]);

import './filters';
import './controllers';
import './services';
import './directives';
import './components';

app.config(['$qProvider', function ($qProvider: ng.IQProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
app.run();
