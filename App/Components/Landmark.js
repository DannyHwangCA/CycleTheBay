"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  MapView,
  ScrollView,
  Image,
  TabBarIOS,
  AlertIOS,
  navigator,
  LinkingIOS,
  View
} from 'react-native';

import LandmarkList from './LandmarkList'
import TrailList from './TrailList'
import Weather from './Weather'
import Local from './Local'
import Main from './Main'



class Landmark extends Component{

	render() {
    console.log(this.props)
		return(
			<View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: this.props.img_url}}
              style={{height: 400, width: 500}} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView style={styles.description}>
						<Text style={styles.descriptionText}>
							{this.props.desc}
						</Text>
          </ScrollView>
        </View>

        <View style={styles.footerNav}>
          <TouchableOpacity
            onPress={this._onHomeButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onBackButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Back to List</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.blankButton}>Blank</Text>
          </TouchableOpacity>
        </View>
			</View>
		);
	}

  _onLandmarksButton(trail_id){
    this.props.navigator.push({
      component:LandmarkList,
      name: "Landmarks",
      passProps:{
        trail_id: trail_id
      }
    });
  }

  _onHomeButton(){
    this.props.navigator.popToTop()
  }

  _onBackButton() {
    this.props.navigator.pop()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  header: {
    flex: 1.5,
  },
  // image: {
  //   flex: 2,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  infoWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#17aacf'
  },
  imageWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverPhoto: {
    flex: 1,
    alignItems: 'stretch'
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17aacf'
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  body: {
    flex: 1
  },
  navText: {
    fontSize: 50,
    marginTop: 10,
    color: '#658D9F'
  },
  description: {
    flex: 3,
    padding: 15,
    margin: 10
  },
  descriptionText: {
    color: '#658D9F',
    fontSize: 16
  },
  // image: {
  //   width: 420,
  //   height: 350
  // },
  labels: {
    fontSize: 25,
    color: 'white'
  },
  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText:{
    color: '#658D9F',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blankButton:{
    color: '#d9d9d9',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerNav: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 15,
    backgroundColor: '#d9d9d9',
    paddingLeft: 20,
    paddingRight: 20
  }
});

module.exports = Landmark;
