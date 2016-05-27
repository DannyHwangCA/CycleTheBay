import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  MapView,
  ScrollView,
  TabBarIOS,
  navigator,
  TouchableOpacity,
  View
} from 'react-native';

import Weather from "./Weather"
import Trail from './Trail'
import TrailList from './TrailList'
import Main from "./Main"
import Map from "./Map"


var Local = React.createClass ({
  getInitialState: function() {
    return {
      pin: {
        latitude: 37,
        longitude: -122
      },
      region: {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 2,
        longitudeDelta: 2
      }
    };
  },

  render() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation={true}
          region={this.state.region}
          mapType={'hybrid'}
          followUserLocation={true}>
        </MapView>
        <View style={styles.footerNav}>
          <TouchableHighlight
            onPress={this._onHomeButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onMapsButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onTrailsButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onWeatherButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  _onHomeButton(){
    this.props.navigator.popToTop()
  },

  _onTrailsButton(){
    this.props.navigator.push({
      component: TrailList,
      name: "Trails",
    });
  },

  _onMapsButton(){
    this.props.navigator.push({
      component: Map,
      name: "Map"
    })
  },

  _onWeatherButton() {
    this.props.navigator.push({
      component: Weather,
      name: "Weather"
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex:2,
    marginTop: 30
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
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





module.exports = Local;
