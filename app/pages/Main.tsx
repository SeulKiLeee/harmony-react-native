import React, { useRef, useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Platform, Animated, Easing } from 'react-native';

const BounceAnimation = () => {
  // const BounceAnim = useRef(new Animated.Value(0)).current;
  const [bounceValue, setBounceValue] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    playBounce()
  }, []);

  const playBounce = () => {
   Animated.loop(
    Animated.timing(
      bounceValue,
      {
        toValue:60,
        useNativeDriver:true,
        duration: 3000,
        easing:Easing.linear,
      }
    )).start()
  }

  const bounce = bounceValue.interpolate({
    inputRange: [0, 60],
    outputRange: [60, 0]
  });


  return (
    <Animated.View style={{width: '100%',
    height: 100,
    alignItems: 'center',
    transform: [{ translateY: bounce}],
    
    }}>
       <Text style={mainStyles.animationText}>인생 한조각 맞추러 가기</Text>
          <Image
          style={mainStyles.fingerImage}  
          source={require('../assets/images/finger.png')} />
    </Animated.View>
  )
}



const MainPage = () => {

  return (
    <SafeAreaView style={mainStyles.backgroundView}>
      <ScrollView>
        <View style={mainStyles.imageContainer}>
          <Image
          style={mainStyles.mainImage}
          source={require('../assets/images/mainPuzzle.png')} />
        </View>
        <View style={mainStyles.textContainer}>
          <Text style={mainStyles.titleText}>한 번에 맞추는 것은 어렵습니다</Text>
          <Text style={mainStyles.titleText}>한 조각씩은 쉽죠</Text>
          <View style={mainStyles.subTextTopContainer}>
            <Text style={mainStyles.subText}>할아버지, 할머니, 부모님의 이야기를 자서전으로 남기고 싶지만 너무 거창해서 쉽게 손이 가지 않습니다.</Text>
          </View>
          <View style={mainStyles.subTextBottomContainer}>
            <Text style={mainStyles.subText}>인생을 적은 작은 퍼즐들이 모여 자연스럽게 긴 이야기가 될 수 있도록 도와드립니다. </Text>
          </View>
        </View>
        <BounceAnimation />
      </ScrollView>
    </SafeAreaView>
  );
};

const mainStyles = StyleSheet.create({
  backgroundView:{
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  imageContainer:{
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    overflow: 'hidden',
    flex: 0.5
  },
  mainImage:{
    width:'100%',
    height:352,
    alignSelf:'center',
    borderRadius:32,
    ...Platform.select({
      ios:{ shadowColor: '#000000',
      shadowOpacity: 0.25,
      shadowOffset: {width:0, height:4},
      shadowRadius: 32,
    },
    android:{
      elevation: 5,
    }
    })
  },
  textContainer:{
    width: '100%',
    overflow: 'hidden',
    marginTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 0.5,
    alignItems: 'flex-start',
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171C2E'
  },
  subTextTopContainer:{
    width: '100%',
    overflow: 'hidden',
    marginTop: 14,
    alignItems: 'flex-start',
  },
  subTextBottomContainer:{
    width: '100%',
    overflow: 'hidden',
    marginTop: 8,
    alignItems: 'flex-start',
  },
  subText:{
    lineHeight:25,
    fontSize:12,
    letterSpacing:0.15,
    fontWeight: '600',
    color: '#171C2E'
  },
  animationText:{
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing:0.15,
    paddingBottom:10
  },
  fingerImage:{
    width:24,
    height:23,
  }
});

export default MainPage;
