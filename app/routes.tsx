import React from 'react';
import Header from './header';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './pages/HomePage';
import PuzzlePage from './pages/PuzzlePage';
import ProfilePage from './pages/ProfilePage';
import {Text} from 'react-native';

const MainScreenTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <MainScreenTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'Home';

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else {
            iconName = 'ios-information-circle';
          }

          // You can return any component that you like here!
          return (
            <Text>
              <Icon name={iconName} size={size} color={color} />
            </Text>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <MainScreenTab.Screen name="Home" component={HomePage} options={{ headerLeft: () => <Header />, headerStyle: headerStyle, headerTitle: ''}} />
      <MainScreenTab.Screen name="Puzzle" component={PuzzlePage} options={{ headerLeft: () => <Header />, headerStyle: headerStyle, headerTitle: ''}} />
      <MainScreenTab.Screen name="Profile" component={ProfilePage} options={{ headerLeft: () => <Header />, headerStyle: headerStyle, headerTitle: ''}} />
    </MainScreenTab.Navigator>
  );
};

const headerStyle = {
  height: 94,
  backgroundColor: '#ffffff',
};
export default RootNavigator;
