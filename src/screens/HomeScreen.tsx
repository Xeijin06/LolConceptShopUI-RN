import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RiotIcon, SearchIcon} from '../assets/svg/SvgIcon';
import {COLORS} from '../theme/COLORS';
import {BaseStyle} from '../theme/BaseStyle';
import {fileterdCharactersArr, filterArr, mostSelled} from '../data/data';
import {Character} from '../interfaces/interface';
import {Header} from '../components/Header';

export const HomeScreen = () => {
  const [filteredText, setFilteredText] = useState<string[]>(filterArr);
  const [filteredImages, setFilteredImages] = useState<Character[]>(
    fileterdCharactersArr,
  );

  const [mostSelledSkins, setmostSelledSkins] =
    useState<Character[]>(mostSelled);
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header title="Tienda">
          <View style={{width: 21, height: 21}}>
            <SearchIcon color={COLORS.text} />
          </View>
        </Header>

        {/* Filtered Text */}
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 35}}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}>
          {filteredText.map((item, index) => {
            return (
              <View key={item} style={{marginLeft: index === 0 ? 0 : 15}}>
                <Text
                  style={{
                    ...BaseStyle.regularFont,
                    fontSize: 16,
                    color: index === 0 ? COLORS.primary : COLORS.text,
                  }}>
                  {item}
                </Text>
                <View
                  style={{
                    height: 1,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor:
                      index === 0 ? COLORS.primary : 'transparent',
                  }}
                />
              </View>
            );
          })}
        </ScrollView>

        {/* Skins */}
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 35}}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 15}}>
          {filteredImages.map(({name, image, cost}, index) => {
            return (
              <View style={{marginLeft: index === 0 ? 0 : 15}}>
                <View
                  style={{
                    elevation: 10,
                    borderRadius: 15,
                    overflow: 'hidden',
                    marginBottom: 5,
                  }}>
                  <Image source={image} style={{height: 230, width: 188}} />
                </View>

                <Text
                  style={{
                    ...BaseStyle.regularFont,
                    fontSize: 14,
                    color: COLORS.text,
                  }}>
                  {name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 4,
                    alignItems: 'center',
                  }}>
                  <View style={{width: 14, height: 14, marginRight: 4}}>
                    <RiotIcon color={COLORS.text} />
                  </View>
                  <Text
                    style={{
                      ...BaseStyle.boldFont,
                      fontSize: 12,
                      color: COLORS.text,
                    }}>
                    {cost}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Most selled */}
        <Header title="Más vendidos" />
        {mostSelled.map(({name, cost, image, tag}, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 35,
                marginBottom: 17,
              }}>
              <Image
                source={image}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 13,
                  marginRight: 8,
                }}
              />
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                  style={{
                    ...BaseStyle.regularFont,
                    fontSize: 14,
                    color: COLORS.text,
                    marginBottom: 2,
                  }}>
                  {name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 14, height: 14}}>
                    <RiotIcon color={COLORS.text} />
                  </View>
                  <Text>{' ' + cost}</Text>
                </View>
              </View>
              <View style={{justifyContent: 'center'}}>
                <View style={{backgroundColor: COLORS.primary, borderRadius: 7, padding: 4}}>
                  <Text style={{...BaseStyle.regularFont, color: 'white', fontSize: 10}}>{tag}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
