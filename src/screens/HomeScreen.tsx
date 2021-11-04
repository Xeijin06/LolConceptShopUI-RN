import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigators/Navigation';
import {SearchIcon, RiotIcon} from '../assets/svg/SVGIcon';
import {COLORS} from '../theme/COLORS';
import {fileterdCharactersArr, filterArr, mostSelled} from '../data/data';
import {Character} from '../interfaces/interface';
import {ScrollView} from 'react-native-gesture-handler';
import {FilteredText} from '../components/FilteredText';
import {FilteredImage} from '../components/FilteredImage';
import {Header} from '../components/Header';
import {MostSelledSkins} from '../components/MostSelledSkins';
import {TabBar} from '../components/TabBar';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const {navigate} = useNavigation<homeScreenProp>();
  const [filteredCharacter, setFilteredCharacter] = useState<Character[]>(
    fileterdCharactersArr,
  );

  const [filters, setFilters] = useState<string[]>(filterArr);

  const [mostSelledSkins, setMostSelledSkins] = useState(mostSelled);
  //navigate('DetailScreen')
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header */}
          <Header title="Tienda">
            <View style={styles.headerSearch}>
              <SearchIcon color="#434343" />
            </View>
          </Header>

          {/* Filter Text */}
          <FilteredText filters={filters} />

          {/* Filter Images */}
          <FilteredImage filteredCharacter={filteredCharacter} />

          <Header title="Más vendidos" />

          <MostSelledSkins skins={mostSelledSkins} />
        </View>
      </ScrollView>

      {/* <TabBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    paddingHorizontal: 35,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSearch: {
    height: 19,
    width: 19,
  },
});
