/** @format */

import { Navigation } from "react-native-navigation";
// import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';


Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// AppRegistry.registerComponent(appName, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({

    topBar: {
      visible: false,
      background: {
        color: '#000000'
      },
      title: {
        color: '#000000'
      }
    },
    // animations: screenPopAnimations
  });
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});