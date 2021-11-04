import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchIcon} from '../assets/svg/SVGIcon';
import {COLORS} from '../theme/COLORS';

interface Props {
  title: string;
  children?: React.ReactNode;
}
export const Header = ({title, children}: Props) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={{...styles.headerTitle, color: COLORS.text}}>{title}</Text>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 35,
    marginTop: 35,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'BwSeidoRound-Bold',
    flex: 1,
  },
});
