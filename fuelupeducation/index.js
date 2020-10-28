import "react-native-gesture-handler";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Signup from './screens/Signup';
import Account from './screens/Account';
import GetStarted from './screens/GetStarted';
AppRegistry.registerComponent(appName, () => Account);
