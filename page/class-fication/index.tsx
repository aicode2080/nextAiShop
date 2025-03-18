import {Image, StyleSheet, Text, Pressable, View} from 'react-native';
import {sc375} from '../shop/tabBar';
import {useEffect, useState} from 'react';
import {api_home} from '../shop/api/http/home';
import {api_classfication} from '../shop/api/http/classfication';
import {Log} from '../shop/utils/log';
import {dataSource} from './data';
import ScrollClassic from './scroll-classic';
import {imgPrix} from '../constants/comm';

const ClassFication = () => {
  const [classffication, setClassffication] = useState(dataSource);
  const [key, setKey] = useState(0);
  useEffect(() => {
    // api_classfication
    //   .getClassMenu({
    //     t: 1742019573,
    //     channel: 'Mobile',
    //     clientId: 'haiwaigou',
    //     version: '300',
    //     version_v1: '5.4.605',
    //     terminalType: 'H5',
    //     h: '8fa5f6dc99daf32c962ab0ad45737342',
    //   })
    //   .useSuccess((data, msg) => {
    //     setClassffication(data?.data ?? []);
    //     Log(data, msg, '========');
    //   });
  }, []);
//   console.log(classffication?.object, '分类数据');
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContaienr}>
            <Image
              source={require('../asserts/newhome_search.png')}
              style={{
                width: sc375(15),
                height: sc375(15),
              }}
            />
            <View style={styles.inputWrraper}>
              <Text style={styles.inputText}>请输入想搜索的商品</Text>
            </View>
          </View>
        </View>
        <View style={styles.flex}>
          {classffication?.object?.map((o, i) => {
            return (
              <View style={styles.item} key={i}>
                <Pressable
                  onPress={() => {
                    setKey(i);
                  }}>
                  <Image
                    style={{width: sc375(59), height: sc375(59)}}
                    source={{
                      uri: `${imgPrix}${o.imageUrl}`,
                    }}></Image>
                  <Text
                    style={[styles.itemText, key === i && styles.itemTextAct]}>
                    {o?.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
      {/* 滚动区域 */}
      <ScrollClassic key={key} defaultIndex={key} dataSource={classffication?.object} />
    </View>
  );
};

export default ClassFication;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
  },
  searchContainer: {
    height: sc375(40),
    marginTop: sc375(10),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputContaienr: {
    width: sc375(345),
    height: sc375(30),
    backgroundColor: '#f5f5f5',
    marginTop: sc375(1),
    borderRadius: sc375(15),
    flexDirection: 'row',
    paddingLeft: sc375(15),
    alignItems: 'center',
  },
  inputWrraper: {
    marginLeft: sc375(10),
  },
  inputText: {
    color: 'grey',
  },
  container: {
    backgroundColor: '#9b6fff',
    paddingTop: sc375(10),
    paddingBottom: sc375(15),
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  direction: {
    flexDirection: 'row',
  },
  moreImgList: {
    width: sc375(120),
    height: sc375(137),
    marginLeft: sc375(10),
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: sc375(5),
  },
  itemTextAct: {
    backgroundColor: '#fff',
    borderRadius: sc375(8),
    paddingLeft: sc375(3),
    paddingRight: sc375(3),
    display: 'flex',
    color: '#9b6fff',
    overflow: 'hidden',
  },
  item: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
    flexDirection: 'column',
    paddingTop: sc375(5),
    display: 'flex',
  },
  itemAct: {
    color: '#fff',
  },
  itemCurrent: {
    width: sc375(20),
    height: sc375(3),
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: sc375(2),
    left: sc375(10),
    zIndex: 1,
  },
});
