import {TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {Button} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './styles';

type SearchbarProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};
const Searchbar: FC<SearchbarProps> = ({text, setText, onSubmit}) => {
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
          buttonColor={'#fb6a00'}
          style={styles.searchButton}
          mode="contained"
          onPress={onSubmit}>
          Search
        </Button>
      </View>
    </View>
  );
};

export default Searchbar;
