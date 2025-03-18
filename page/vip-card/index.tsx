import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {sc375} from '../shop/utils/screen';
import Search from '../shop/components/search';
const topImg = require('../asserts/images/vip1.png');
const VipCard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.vipContainer}>
          <ImageBackground
            style={{
              height: sc375(314),
              width: sc375(375),
            }}
            resizeMode="contain"
            source={topImg}>
            <Search containerClassName={styles.container} />
          </ImageBackground>
          <View style={styles.imgContainer}>
            <Image
              style={{
                width: sc375(243),
                height: sc375(51),
              }}
              resizeMode="contain"
              source={require('../asserts/images/icon_hot_title.png')}
            />
          </View>
          <ImageBackground
            style={{
              width: sc375(355),
              height: sc375(434),
            }}
            source={require('../asserts/images/icon_hot_bg.png')}></ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  vipContainer: {
    backgroundColor: '#7c1bff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    top: sc375(10),
    justifyContent: 'center',
    width: sc375(375),
  },
});

export default memo(VipCard);
