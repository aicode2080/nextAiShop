import {memo, createRef} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {sc375} from '../shop/tabBar';

const ShopCart = () => {
  const webRef = createRef<any>();
  return (
    <WebView
      ref={webRef}
      style={{
        width: sc375(375),
        height: sc375(667),
      }}
      source={{
        uri: 'https://m.tepin.hk/h5/pages/tabBar/classifyPages',
      }}
      onLoadEnd={() => {
        webRef?.current?.injectJavaScript(`document.querySelector('.uni-tabbar-bottom').style.display = 'none'`);
      }}
    />
  );
};

export default memo(ShopCart);
