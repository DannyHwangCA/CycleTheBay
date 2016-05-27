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



class Trail extends Component{

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.imageWrapper}>
          <Image
            source={{uri: this.props.map_url}}
            style={{height: 300, width: 400}} />
				</View>
				<View style={styles.header}>

					<View style={styles.infoWrapper}>
						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.props.elevation_up} feet
							</Text>
							<Text style={styles.measurements}>
								Elevation
							</Text>
						</View>

						<View style={styles.measurementContainer}>
							<Text style={styles.labels}>
								{this.props.distance} miles
							</Text>
							<Text style={styles.measurements}>
								Distance
							</Text>
						</View>
					</View>

          <View style={styles.navLandWrapper}>
  					<TouchableOpacity style={styles.leftNavButton}
              underlayColor="transparent"
              onPress={() => LinkingIOS.openURL(this.props.gmaps)}>
              <Text style={styles.navText}>
  							Navigation
  						</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightNavButton}
              underlayColor="transparent"
              onPress={() => this._onLandmarksButton(this.props.id)}>
              <Text style={styles.navText}>
                Landmarks
              </Text>
  					</TouchableOpacity>
          </View>

          <ScrollView>
  					<View style={styles.description}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                  {this.props.title}
                </Text>
              </View>
  						<Text style={styles.descriptionText}>
  							{this.props.desc}
  						</Text>
  					</View>
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
            onPress={this._onMapsButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onTrailsButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onWeatherButton.bind(this)}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onLocalButton.bind(this)}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
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

 _onTrailsButton(){
   this.props.navigator.push({
     component: TrailList,
     name: "Trails",
   });
 }

 _onMapsButton(){
   this.props.navigator.push({
     component: Map,
     name: "Map"
   })
 }

 _onWeatherButton() {
   this.props.navigator.push({
     component: 'Weather',
     name: "Weather"
   })
 }

 _onLocalButton(){
   this.props.navigator.push({
     component: 'Local',
     name: "Local"
   })
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
  },
  map: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#17aacf'
  },
  imageWrapper: {
    flex: 0.70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverPhoto: {
    flex: 1,
    alignItems: 'stretch'
  },
  leftNavButton: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73cf17',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  rightNavButton: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfa117',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  navLandWrapper: {
    flexDirection: 'row',
  },
  navText: {
    fontSize: 20,
    color: 'white'
  },
  description: {
    flex: 3,
    padding: 15,
    margin: 10,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    color: '#658D9F',
    fontWeight: 'bold',
    alignSelf: 'center'
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
    fontSize: 20,
    color: 'white'
  },
  measurementContainer: {
    alignItems: 'center'
  },
  measurements: {
    fontSize: 12,
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

module.exports = Trail;
