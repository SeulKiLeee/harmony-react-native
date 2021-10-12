import React from 'react';
import MainPage from './Main';
import {Text, View} from 'react-native';

const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MainPage />
    </View>
  );
};
export default HomePage;
