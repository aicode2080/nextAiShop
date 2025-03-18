import {memo} from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {sc375} from '../../utils/screen';
import classNames from 'classnames';

interface SearchProps {
  placeholder?: string;
  onSearch?: (event: GestureResponderEvent) => void;
  containerClassName?: StyleProp<ViewStyle> | undefined;
}

const Search = (props: SearchProps) => {
  const {
    placeholder = '请输入想搜索的商品',
    containerClassName,
    onSearch,
  } = props;
  return (
    <Pressable onPress={onSearch}>
      <View style={[styles.searchContainer, containerClassName]}>
        <View style={styles.inputContaienr}>
          <Image
            source={require('../../../asserts/newhome_search.png')}
            style={{
              width: sc375(15),
              height: sc375(15),
            }}
          />
          <View style={styles.inputWrraper}>
            <Text style={styles.inputText}>{placeholder}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

export default memo(Search);
