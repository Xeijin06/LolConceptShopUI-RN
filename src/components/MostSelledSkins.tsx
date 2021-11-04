import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {RiotIcon} from '../assets/svg/SVGIcon';
import {Character} from '../interfaces/interface';
import {COLORS} from '../theme/COLORS';

interface Props {
  skins: Character[];
}

export const MostSelledSkins = ({skins}: Props) => {
  return (
    <>
      {skins.map(({name, cost, image, tag}) => {
        return (
          <View style={styles.container} key={name}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.baseText}>{name}</Text>
              <View style={styles.content_separator} />
              <View style={{flexDirection: 'row'}}>
                <View style={styles.iconRiot}>
                  <RiotIcon color={COLORS.text} />
                </View>
                <Text
                  style={{
                    ...styles.baseText,
                    fontFamily: 'BwSeidoRound-Bold',
                  }}>
                  {' ' + cost}
                </Text>
              </View>
            </View>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Text style={{...styles.baseText, color: 'white'}}>{tag}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    marginVertical: 8,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  content_separator: {
    height: 7,
  },
  iconRiot: {
    height: 14,
    width: 14,
  },
  baseText: {
    fontSize: 12,
    fontFamily: 'BwSeidoRound-Regular',
  },
  badgeContainer: {
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
