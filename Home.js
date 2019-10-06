import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { Feather, Foundation } from '@expo/vector-icons';
import feedData from './feedData'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.heading}>
          <View style={styles.headingInner}>
            <Image style={styles.headingLogo} source={require('./assets/ico_logo.png')} resizeMode="contain"/>
            <Image style={styles.icon} source={require('./assets/ico_ib.png')}/>
          </View>
        </View>

        <ScrollView style={styles.container}>
        {feedData.map(feed => {
            return (
              <View style={styles.card} key={feed.id}>
                <View style={styles.cardAuthor} onPress={() => this.props.navigation.navigate('User')}>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('User')}>
                    <Image style={styles.cardAvatar} source={feed.avatar} resizeMode="cover"/>
                  </TouchableHighlight>
                  <Text style={styles.cardName}>{feed.name}</Text>
                </View>
                <View style={styles.cardBody}>
                  <Image style={styles.cardImage} source={feed.image} resizeMode="cover"/>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.cardFooterBlock}>
                    <Feather name="heart" size={27} color="black" onPress={() => alert("Liked")} />
                    <Feather style={styles.ml16} name="message-square" size={27} color="black" />
                    <Feather style={styles.ml16} name="share" size={27} color="black" />
                  </View>
                  <View style={styles.cardFooterBlock}>
                    <Foundation name="heart" size={27} color="black" />
                    <Text style={styles.ml4}>{feed.likeCount}</Text>
                  </View>
                </View>
              </View>
            )
          })}
 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  },

  headingInner: {
    flex: .7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headingLogo: {
    width: 150,
    height: 60
  },

  icon: {
    width: 34,
    height: 34
  },

  container: {
    flex: 1
  },

  card: {
    paddingTop: 24,
    paddingBottom: 24
  },

  cardAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },

  cardAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16
  },

  cardName: {
    fontSize: 15,
    fontWeight: '500'
  },

  cardBody: {
    height: 300,
  },

  cardImage: {
    flex: 1,
    width: null,
    height: null
  },

  cardFooterBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingTop: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  ml16: {
    marginLeft: 16
  },

  ml4: {
    marginLeft: 4
  }
});
