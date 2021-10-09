import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

const isLoggined = false;

const RootNavigator = () => {
  return <AuthStack.Navigator />;
};
