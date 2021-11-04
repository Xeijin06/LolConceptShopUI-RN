import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RiotIcon} from '../assets/svg/SVGIcon';
import {COLORS} from '../theme/COLORS';
import {Character} from '../interfaces/interface';

interface Props {
  filteredCharacter: Character[];
}

export const FilteredImage = ({filteredCharacter}: Props) => {
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 10}}
        contentContainerStyle={{paddingHorizontal: 35}}>
        {filteredCharacter.map(({name, cost, image}, index) => {
          return (
            <View
              key={name}
              style={{
                marginLeft: index === 0 ? 0 : 10,
              }}>
              <View
                style={{
                  elevation: 10,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  overflow: 'hidden',
                }}>
                <Image
                  source={image}
                  style={styles.filteredImage}
                  resizeMode="cover"
                />
              </View>
              <Text style={{...styles.baseText, marginTop: 8, marginBottom: 5}}>
                {name}
              </Text>
              <View style={styles.filteredContent}>
                <View style={styles.iconRiot}>
                  <RiotIcon color={COLORS.text} />
                </View>
                <Text
                  style={{
                    ...styles.baseText,
                    color: COLORS.text,
                    fontFamily: 'BwSeidoRound-Bold',
                  }}>
                  {' ' + cost}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  filteredImage: {
    height: 230,
    width: 188,
  },
  filteredContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRiot: {
    height: 14,
    width: 14,
  },
  baseText: {
    fontSize: 12,
    fontFamily: 'BwSeidoRound-Regular',
  },
});
