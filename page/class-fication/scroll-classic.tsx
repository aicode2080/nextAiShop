import {Text} from '@rneui/base';
import {memo, useEffect, useMemo, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import {sc375} from '../shop/tabBar';
import classNames from 'classnames';
import {imgPrix} from '../constants/comm';

const ScrollClassic = (props: any) => {
  const {dataSource, defaultIndex} = props;
  const scrollViewRef = useRef(null);
  const [menuIndex, setMenuIndex] = useState(0);
  const [positionObj, setPositionObj] = useState({});

  const getLeftMenuData = useMemo(() => {
    setMenuIndex(0);
    return dataSource?.[defaultIndex]?.children?.filter(
      o => !!o?.children?.length,
    );
  }, [defaultIndex]);

  const handleLouter = (id, event) => {
    event.persist();
    setTimeout(() => {
      const {layout} = event.nativeEvent;
      if (layout) {
        const {y} = layout;
        setPositionObj(prev => ({...prev, [id]: y}));
      } else {
        console.warn(`Layout for ${id} is undefined`);
      }
    }, 1000);
  };
  const scrollToTarget = (id: string) => {
    const position = positionObj[id] || {};
    if (position) {
      scrollViewRef?.current?.scrollTo({
        y: position,
        animated: true,
      });
    }
  };

  const getRightData = useMemo(() => {
    return getLeftMenuData;
  }, [getLeftMenuData]);
  return (
    <View style={styles.container}>
      <View style={styles.leftMenu}>
        <ScrollView>
          <View style={styles.menuContainer}>
            {getLeftMenuData?.map((o, i) => {
              return (
                <Pressable
                  key={i}
                  onPress={() => {
                    setMenuIndex(i);
                    scrollToTarget(`left${i}`);
                  }}>
                  <View
                    style={[
                      styles.menuItem,
                      {
                        backgroundColor:
                          i === menuIndex ? '#fff' : 'transparent',
                        height: i === menuIndex ? sc375(66) : sc375(55),
                      },
                    ]}>
                    {i === menuIndex && (
                      <View
                        style={[
                          styles.topLine,
                          i === 0 && {backgroundColor: 'transparent'},
                        ]}></View>
                    )}
                    <View
                      style={[
                        styles.itemTextContainer,
                        i === menuIndex && styles.itemTextContainerAct,
                      ]}>
                      <View style={styles.class_left_line}></View>
                      <Text
                        style={[
                          styles.itemText,
                          i === menuIndex && styles.itemTextAct,
                        ]}>
                        {o?.name}
                      </Text>
                    </View>
                    {i === menuIndex && <View style={styles.bottomLine}></View>}
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.rightScroll}>
        <SafeAreaView>
          <ScrollView style={styles.scrollContainer} ref={scrollViewRef}>
            {getRightData?.map((o, index) => {
              return (
                <View
                  style={styles.list}
                  key={o?.name}
                  onLayout={event => handleLouter(`left${index}`, event)}>
                  <View style={styles.listHeader}>
                    <Text
                      style={{
                        //   backgroundColor: '#9b6fff',
                        color: '#363636',
                        fontSize: sc375(18),
                        fontWeight: '700',
                      }}>
                      # {o?.name} #
                    </Text>
                  </View>
                  <View style={styles.listContainer}>
                    {o?.children?.map((item: any) => {
                      return (
                        <View
                          style={styles.listItem}
                          key={`${item?.name}${item?.id}`}>
                          <Image
                            source={{
                              uri: `${imgPrix}${item.imageUrl}`,
                            }}
                            style={{
                              width: sc375(70),
                              height: sc375(70),
                            }}></Image>
                          <Text style={styles.listText}>{item?.name}</Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  leftMenu: {
    width: sc375(90),
    height: sc375(500),
    backgroundColor: '#9b6fff',
    flexDirection: 'row',
  },
  menuItem: {
    height: sc375(66),
    flexDirection: 'column',
    // backgroundColor: '#fff',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  class_left_line: {
    width: sc375(2),
    height: sc375(21),
    backgroundColor: '#9b6fff',
    borderRadius: sc375(1),
    // marginTop: sc375(15),
  },
  topLine: {
    width: '100%',
    height: sc375(8),
    backgroundColor: '#9b6fff',
    borderBottomRightRadius: sc375(16),
  },
  bottomLine: {
    width: '100%',
    height: sc375(8),
    backgroundColor: '#9b6fff',
    borderTopRightRadius: sc375(16),
  },
  itemTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: sc375(2),
    width: sc375(90),
    height: sc375(50),
    backgroundColor: 'transparent',
  },
  itemTextContainerAct: {
    backgroundColor: '#fff',
    height: sc375(50),
  },
  itemText: {
    color: '#ffffff',
    marginLeft: sc375(12),
  },
  itemTextAct: {
    color: '#9b6fff',
  },
  menuContainer: {},
  rightScroll: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: sc375(500),
  },
  scrollContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  list: {},
  listHeader: {
    width: sc375(285),
    height: sc375(50),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItem: {
    width: sc375(93),
    height: sc375(120),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  listText: {
    height: sc375(20),
    alignItems: 'center',
    marginTop: sc375(5),
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
});

export default memo(ScrollClassic);
