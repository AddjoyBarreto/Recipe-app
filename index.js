import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Meals_App', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('Meals_App', { rootTag });
}
