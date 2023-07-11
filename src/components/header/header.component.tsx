import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

type HeaderProps = {leftIconName: string; title: string; rightIconName: string};
const Header: FC<HeaderProps> = ({leftIconName, title, rightIconName}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Ionicons
          name={leftIconName}
          size={24}
          color="black"
          //   style={}
        />
        <Text style={styles.headerText}>{title}</Text>
        <Ionicons
          name={rightIconName}
          size={24}
          color="black"
          //   style={}
        />
      </View>
    </View>
  );
};

export default Header;
