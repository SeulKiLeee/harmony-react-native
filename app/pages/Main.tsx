import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, Platform, Animated } from 'react-native';

const BounceAnimation = () => {
  const [bounceValue, setBounceValue] = React.useState(new Animated.Value(20));

  React.useEffect(() => {
    playBounce()
  }, []);

  const playBounce = () => {
    Animated.loop(
   Animated.sequence([
      Animated.timing(
        bounceValue,
        {
          toValue: 0,
          useNativeDriver:true,
          duration: 2000,
        }
      ),
      Animated.timing(
        bounceValue,
        {
          toValue: 20,
          useNativeDriver:true,
          duration: 2000,
        }
      )
   ]
    )).start()
  }

  const bounce = bounceValue.interpolate({
    inputRange: [0, 20],
    outputRange: [20, 0],
  });


  return (
    <Animated.View style={{
      width: '100%',
      alignItems: 'center',
      position: 'absolute',
      bottom: 35,
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
      <View style={mainStyles.containerWrap}>
        <View style={mainStyles.imageContainer}>
          <Image
          style={mainStyles.mainImage}
          source={require('../assets/images/mainPuzzle.png')} />
        </View>
        <View style={mainStyles.textContainer}>
          <View style={mainStyles.titleTextContainer}>
            <Text style={mainStyles.titleText}>한 번에 맞추는 것은 어렵습니다</Text>
            <Text style={mainStyles.titleText}>한 조각씩은 쉽죠</Text>
          </View>
          <View style={mainStyles.subTextTopContainer}>
            <Text style={mainStyles.subText}>할아버지, 할머니, 부모님의 이야기를 자서전으로 남기고 싶지만 너무 거창해서 쉽게 손이 가지 않습니다.</Text>
          </View>
          <View style={mainStyles.subTextBottomContainer}>
            <Text style={mainStyles.subText}>인생을 적은 작은 퍼즐들이 모여 자연스럽게 긴 이야기가 될 수 있도록 도와드립니다. </Text>
          </View>
        </View>
        <View style={mainStyles.aniContainer}>
          <BounceAnimation />
        </View>
      </View>
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
  containerWrap:{
    flex:1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer:{
    width: '100%',
    overflow: 'hidden',
    flex: 0.525,
    maxHeight: 355
  },
  mainImage:{
    width:'100%',
    // maxWidth: 343,
    height:'100%',
    // maxHeight: 355.25,
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
    paddingLeft: 9,
    paddingRight: 9,
    flex: 0.3,
    alignItems: 'flex-start',
  },
  titleTextContainer:{
    paddingTop: 19.75,
  },
  titleText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#171C2E',
  },
  subTextTopContainer:{
    width: '100%',
    overflow: 'hidden',
    marginTop: 12,
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
    fontSize:13,
    letterSpacing:0.15,
    fontWeight: '600',
    color: '#171C2E'
  },
  aniContainer:{
    width: '100%',
    flex: 0.15,
    position: 'relative',
  },
  animationText:{
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing:0.15,
    paddingBottom:5
  },
  fingerImage:{
    width:24,
    height:23,
  }
});

export default MainPage;
