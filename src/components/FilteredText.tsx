import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/COLORS';

interface Props {
  filters: string[];
}

export const FilteredText = ({filters}: Props) => {
  return (
    <>
      <ScrollView
        style={styles.filterdContainer}
        horizontal
        contentContainerStyle={{paddingHorizontal: 35}}
        showsHorizontalScrollIndicator={false}>
        {filters.map((item, index) => {
          return (
            <View key={item} style={{marginLeft: index === 0 ? 0 : 15}}>
              <Text
                style={{
                  ...styles.baseText,
                  fontSize: 16,
                  color: index === 0 ? COLORS.primary : COLORS.text,
                }}>
                {item}
              </Text>
              <View
                style={{
                  ...styles.filterUnderline,
                  backgroundColor: index === 0 ? COLORS.primary : 'transparent',
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  filterdContainer: {flexDirection: 'row', marginTop: 20, marginBottom: 10},
  filterUnderline: {
    width: '80%',
    marginLeft: '10%',
    height: 1,
    backgroundColor: COLORS.primary,
  },

  baseText: {
    fontSize: 12,
    fontFamily: 'BwSeidoRound-Regular',
  },
});
