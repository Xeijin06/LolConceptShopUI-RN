import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BaseStyle} from '../theme/BaseStyle';
import {COLORS} from '../theme/COLORS';

interface Props {
  title: string;
  children?: React.ReactNode;
}
export const Header = ({title, children}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
        marginTop: 35,
        marginBottom: 20,
      }}>
      <Text
        style={{
          ...BaseStyle.boldFont,
          fontSize: 19,
          color: COLORS.text,
          flex: 1,
        }}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
