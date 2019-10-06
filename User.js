import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const width = Dimensions.get('window').width;

const imgData = [
  { id: 1, imgSource: require('./assets/bg.jpeg') },
  { id: 2, imgSource: require('./assets/bg.jpeg') },
  { id: 3, imgSource: require('./assets/bg.jpeg') },
  { id: 4, imgSource: require('./assets/bg.jpeg') },
  { id: 5, imgSource: require('./assets/bg.jpeg') },
  { id: 6, imgSource: require('./assets/bg.jpeg') }
];

const centerImgData = Math.floor(imgData.length / 2);

export default class User extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.heading}>
          <Feather name="arrow-left" size={27} color="black" onPress={() => this.props.navigation.navigate('Home')} />
          <Feather name="cloud-rain" size={27} color="black" />
        </View>
        <View style={styles.tileWrapper}>
          <Image style={styles.tileImage} source={require('./assets/avatar2.png')} resizeMode="contain"/>
          <View style={styles.tileContent}>
            <Text style={styles.tileName}>Slash</Text>
            <Text style={styles.textSm}>Guns n' Roses</Text>
            <View style={[styles.dFlex, styles.mt8]}>
             <TouchableOpacity style={styles.btnPrimary}>
                <Text style={styles.textWhite}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnSecondary, styles.ml8]}>
                <MaterialIcons name="send" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.listItem, styles.textCenter]}>
            <Text style={styles.textLg}>210</Text>
            <Text style={styles.textSm}>Photos</Text>
          </View>
          <View style={[styles.listItem, styles.textCenter]}>
            <Text style={styles.textLg}>15k</Text>
            <Text style={styles.textSm}>Followers</Text>
          </View>
          <View style={[styles.listItem, styles.textCenter]}>
            <Text style={styles.textLg}>605</Text>
            <Text style={styles.textSm}>Following</Text>
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.gallery}>
            <View style={{flexDirection: 'column', paddingLeft: 8, paddingRight: 8}}>
              {imgData.slice(0, centerImgData).map(img => {
                return (
                  <TouchableHighlight key={img.id} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image style={styles.images} key={img.id} source={img.imgSource} resizeMode="cover" />
                  </TouchableHighlight>
                  )
              })}
            </View>
            <View style={{flexDirection: 'column'}}>
              {imgData.slice(centerImgData).map(img => {
                return (
                  <TouchableHighlight key={img.id} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image style={styles.images} key={img.id} source={img.imgSource} resizeMode="cover" />
                  </TouchableHighlight>
                  )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: Constants.statusBarHeight,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16
  },

  tileWrapper: {
    paddingBottom: 32,
    paddingTop: 32,
    flexDirection: 'row',
  },

  tileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  }, 

  tileName: {
    fontSize: 24,
    fontWeight: '600'
  },

  btnPrimary: {
    backgroundColor: FOLLOW_COLOR,
    alignSelf: 'flex-start',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 16,
  },

  btnSecondary: {
    backgroundColor: SEND_MESSAGE_COLOR,
    alignSelf: 'flex-start',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
  },

  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  gallery: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 64,
  },

  container: {
    paddingTop: 64,
    flex: 1
  },

  images: {
    height: 200,
    width: width,
    borderRadius: 8,
    marginTop: 8
  },

  textWhite: {
    color: '#fff'
  },

  dFlex: {
    flexDirection: 'row'
  },

  mt8: {
    marginTop: 8
  },

  ml8: {
    marginLeft: 8
  },

  textSm: {
    color: '#666'
  },

  textLg: {
    fontSize: 18,
    fontWeight: '600',
  },

  textCenter: {
    alignItems: 'center',
  }
});