import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {ExampleConfig} from 'main/content/example/ExampleConfig';
import {ModuliConfig} from "../main/content/moduli/moduliConfig";

const routeConfigs = [
    ExampleConfig,
    ModuliConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];
