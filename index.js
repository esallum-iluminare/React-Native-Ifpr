/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //importa o arquivo App.js
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App); //Registra o componente raiz do app
