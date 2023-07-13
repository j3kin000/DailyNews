import {TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {Button} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';

type SearchbarProps = {
  isSearch: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};
const Searchbar: FC<SearchbarProps> = ({isSearch, text, setText, onSubmit}) => {
  return (
    <View style={styles.searchbarContainer}>
      <View style={styles.searchbar}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchbarTextInput}
          placeholder="Find interesting news"
          value={text}
          onChangeText={(text: string) => setText(text)}
          //   onFocus={() => {
          //     null;
          //   }}
        />
        <Button
          buttonColor={isSearch ? '#fff' : '#fb6a00'}
          textColor={isSearch ? '#000' : '#fff'}
          style={styles.searchButton}
          mode="text"
          onPress={onSubmit}>
          {isSearch ? 'X' : 'Search'}
        </Button>
      </View>
    </View>
  );
};

export default Searchbar;
