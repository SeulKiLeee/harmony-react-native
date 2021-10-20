import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
    <Image
      style={styles.logoImage}
      source={require('./assets/images/puzzle_logo.png')}
    />
    <Image
      style={styles.textImage}
      source={require('./assets/images/title_text.png')}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    height: 24,
    margin:20,
    marginBottom:30,
  },
  logoImage: {
    height:24,
     width:24,
    },
  textImage: {
    height:24, 
    width:90, 
    marginLeft:9, 
    resizeMode:'contain'
  }
})

export default Header;
