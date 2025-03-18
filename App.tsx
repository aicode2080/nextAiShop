// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './page/Home';
import ClassFication from './page/class-fication';
import { sc375, ShopTab } from './page/shop/tabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { tabIcons } from './page/constants/tab';
import vipCard from './page/vip-card';
import shopCart from './page/shop-cart';
import userCenter from './page/user-center';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function switchIcon(name: string, focused: boolean) {
  switch (name) {
    case '首页':
      return focused ? tabIcons[name][0] : tabIcons[name][1];
      break;
    case '分类':
      return focused ? tabIcons[name][0] : tabIcons[name][1];
      break;
    case '友阿购物卡':
      return focused ? tabIcons[name][0] : tabIcons[name][1];
      break;
    case '购物车':
      return focused ? tabIcons[name][0] : tabIcons[name][1];
      break;
    case '我的':
      return focused ? tabIcons[name][0] : tabIcons[name][1];
    default:
      break;
  }
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='首页'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                style={{
                  width: sc375(24),
                  height: sc375(24),
                }}
                source={switchIcon(route.name, focused)}
              />
            );
          },
          tabBarActiveTintColor: '#7c1bff',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="首页" key={'home'} component={HomeScreen} />
        <Tab.Screen
          name="分类"
          key={'classfication'}
          component={ClassFication}
        />
        <Tab.Screen
          name="友阿购物卡"
          key={'yacard'}
          component={vipCard}
        />
        <Tab.Screen name="购物车" key={'cart'} component={shopCart} />
        <Tab.Screen name="我的" key={'user'} component={userCenter} />
      </Tab.Navigator>
      {/* <ShopTab selectedIndex={0} /> */}
    </NavigationContainer>
  );
}

export default App;
