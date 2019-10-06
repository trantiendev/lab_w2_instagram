import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const POLO_BLUE_COLOR = 'rgb(51,60,87)';

export default class User extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.heading}>
          <Feather style={styles.headingIcon} name="arrow-left" size={27} color="white" onPress={() => this.props.navigation.navigate('User')} />
          <Feather style={styles.headingIcon} name="cloud-rain" size={27} color="white" />
          <Image style={styles.floatImg} source={require('./assets/bg.jpeg')} resizeMode="cover"/>
        </View>
        <View style={styles.container}>
          <View style={styles.info}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: '600',}}>Eiffel Tower</Text>
              <Text style={{ color: '#666'}}>Pari</Text>
            </View>
            <TouchableOpacity style={[styles.btnPrimary, styles.ml8]}>
              <Feather name="download-cloud" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#666', marginTop: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
          <View style={{flexDirection: 'row',marginTop: 16}}>
            <Text style={styles.tag}>#sea</Text>
            <Text style={styles.tag}>#sea</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 16,
    height: 400,
  },

  headingIcon: {
    zIndex: 2
  },

  floatImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 400,
    borderRadius: 32,
    flexDirection: 'row',
    width: width,
    zIndex: 1,
  },

  info: {
    marginTop: 48,    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tag: {
    color: '#eee',
    backgroundColor: '#ccc',
    marginRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 12,
  },

  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  btnPrimary: {
    padding: 16,
    backgroundColor: POLO_BLUE_COLOR,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  
});