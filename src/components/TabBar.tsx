import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {HomeIcon, ShopIcon, RiotIcon, ConfigIcon} from '../assets/svg/SVGIcon';
import {COLORS} from '../theme/COLORS';

export const TabBar = () => {
  return (
    <Shadow
      distance={18}
      startColor={'#2e2e2e90'}
      finalColor={'#2b2b2b00'}
      offset={[3, 4]}>
      <View style={styles.container}>
        <TabIcon isSelected>
          <HomeIcon color={'white'} />
        </TabIcon>

        <TabIcon>
          <ShopIcon color={COLORS.text} />
        </TabIcon>

        <TabIcon>
          <RiotIcon color={COLORS.text} />
        </TabIcon>

        <TabIcon>
          <ConfigIcon color={COLORS.text} />
        </TabIcon>
      </View>
    </Shadow>
  );
};

interface IconProp {
  children: React.ReactNode;
  isSelected?: boolean;
}

const TabIcon = ({children, isSelected = false}: IconProp) => {
  return (
    <View style={isSelected && styles.iconContainer}>
      <View style={styles.iconSize}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 15,
  },
  iconContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 14,
  },
  iconSize: {
    height: 20,
    width: 20,
    margin: 10,
  },
});
