import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import User from './User';
import Profile from './Profile';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      title: 'Home'
    },
   },
  User: { screen: User },
  Profile: { screen: Profile },
}, {headerMode: 'none'});

export default createAppContainer(AppNavigator);
