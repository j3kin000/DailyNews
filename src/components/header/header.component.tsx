import {StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {styles} from './styles';

type HeaderProps = {
  LeftIcon: ReactNode;
  title: string | undefined;
  RightIcon: ReactNode;
};
const Header: FC<HeaderProps> = ({LeftIcon, title, RightIcon}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {LeftIcon}
        <Text style={styles.headerText}>{title}</Text>
        {RightIcon}
      </View>
    </View>
  );
};

export default Header;
