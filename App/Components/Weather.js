"use strict";

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Icon,
  ListView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';


// import currentWeather from "../Api/weatherapi"
// import forecast from "../Api/weatherapi"
import Trail from './Trail'
import TrailList from './TrailList'
import Local from './Local'
import Main from './Main'
import Map from './Map'

var moment = require('moment');
var kelvinToF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + " ˚F"
};

var weatherIcon = (iconCode) => {
  var icon_src = ''
  if (iconCode === 800 || iconCode === 904 || iconCode === 951) {
    icon_src = require('../Utils/img/sun.png')
  }
  else if (iconCode >= 801 && iconCode <= 804 || iconCode >= 952 && iconCode <= 959 ) {
    icon_src = require('../Utils/img/NA_clouds.png')
  }
  else if (iconCode >= 960 && iconCode <= 962 || iconCode >= 500 && iconCode <= 531) {
    icon_src = require('../Utils/img/NA_rain.png')
  }
  else if (iconCode === 906 || iconCode === 611 || iconCode === 612) {
    icon_src = require('../Utils/img/NA_rain_snow.png')
  }
  else if (iconCode === 905 || iconCode === 751 || iconCode === 741 || iconCode === 731) {
    icon_src = require('../Utils/img/NA_fog.png')
  }
  else if (iconCode === 903 || iconCode >= 600 && iconCode <= 602) {
    icon_src = require('../Utils/img/NA_blizzard.png')
  }
  else if (iconCode >=  900 && iconCode <= 902 || iconCode === 781 || iconCode >= 200 && iconCode <= 232) {
    icon_src = require('../Utils/img/NA_lighting.png')
  }
  else if (iconCode === 771 || iconCode === 721) {
    icon_src = require('../Utils/img/sun_fog.png')
  }
  else if (iconCode >= 615 && iconCode <= 701 || iconCode >= 300 && iconCode <= 321) {
    icon_src = require('../Utils/img/sun_rain.png')
  }
  else {
    icon_src = require('../Utils/img/sun_lighting.png')
  }
  return icon_src
};


var mockedForecast = [
    {
      dt: 1463443200,
      main: {
        temp: 295.44,
        temp_min: 295.44,
        temp_max: 295.443,
        pressure: 987.68,
        sea_level: 1025.53,
        grnd_level: 987.68,
        humidity: 59,
        temp_kf: 0
      },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n"
      }
    ],
    clouds: {
      all: 0
    },
    wind: {
      speed: 2.67,
      deg: 295.502
    },
    rain: { },
    sys: {
      pod: "n"
    },
      dt_txt: "2016-05-17 00:00:00"
    }
  ];

var Weather = React.createClass({
   getInitialState: function() {
    return {
       initialPosition: 'unknown',
       city: '',
       temperature: '',
       temp_min: '',
       temp_max: '',
       description: '',
       humidity: 0,
       icon: '',
       wind: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows(mockedForecast)
    };
  },

  componentDidMount: function(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        var lon = position.coords.longitude;
        var lat = position.coords.latitude;
        this.setState.position;
        this.getForecast(lat, lon);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  componentWillUnmountfunction(){

  },

  getForecast: function(latitude, longitude) {
    var url = `http://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&APPID=4a55512194ca2751c9dec4fd1fa57028`
     console.log(url);
     fetch(url).then((response) => response.json())
      .then((responseData) => {
        console.log('forecast: ')
        console.log(responseData.list)
        var testdata = responseData.list
        this.setState({
          city: responseData.city.name,
          temperature: kelvinToF(responseData.list[0].main.temp),
          temp_min: kelvinToF(responseData.list[0].main.temp_min),
          temp_max: kelvinToF(responseData.list[0].main.temp_max),
          description: responseData.list[0].weather[0].description,
          humidity: responseData.list[0].main.humidity,
          icon: weatherIcon(responseData.list[0].weather[0].id),
          wind: responseData.list[0].wind.speed,
          dataSource: this.state.dataSource.cloneWithRows(testdata)
        })
      })
  },

renderRow: function(weather) {
    return (
      <WeatherCell weather={weather}/>
  );
},
  render: function() {
    return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Current Weather</Text>
      </View>
      <View style={styles.currentWrapper}>
        <Text style={styles.whiteText}>
          {this.state.city}
        </Text>
        <View style={styles.horContainer1}>
            <Image
            style={styles.icon}
            source={this.state.icon} />
          <View style={styles.vertContainer}>
            <View style={styles.horContainer2}>
              <Text style={styles.sideText}>
                Max: {this.state.temp_max}
              </Text>
              <Text style={styles.sideText}>
                Min: {this.state.temp_min}
              </Text>
              <Text style={styles.sideText}>Humidity: {this.state.humidity} %
              </Text>
              <Text style={styles.sideText}>Wind: {this.state.wind} m/s
              </Text>
            </View>
          </View>
      </View>
        <View style={styles.horContainer3}>
          <Text style={styles.whiteText}>
           {this.state.temperature}
          </Text>
          <Text style={styles.lightText}>
           {this.state.description.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.forecastWrapper}>
        <Text style={styles.title}> Hourly Forecast </Text>
        <ListView
          style={styles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
      <View style={styles.footerNav}>
        <TouchableHighlight
          onPress={this._onHomeButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this._onTrailsButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this._onMapsButton}
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.buttonText}>Maps</Text>
          </TouchableHighlight>
          <TouchableHighlight
          onPress={this._onLocalButton}
          style={styles.button}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
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
     component: 'Weather',
     name: "Weather"
   })
 },

  _onLocalButton(){
   this.props.navigator.push({
     component: 'Local',
     name: "Local"
   })
 }

});

var WeatherCell = React.createClass({
  render() {
    return (
      <View>
          <View style={styles.WeatherCell}>
              <Image
              style={styles.icon2}
              source={weatherIcon(this.props.weather.weather[0].id)} />
              <View style={styles.rightContainer}>
                <View>
                  <Text style={styles.whiteText}>
                  {kelvinToF(this.props.weather.main.temp)}
                  </Text>
                  <Text style={styles.lightText}>
                    {moment(this.props.weather.dt_txt).format('MMM Do, h:mm a')}
                  </Text>
                </View>
                <View style={styles.descContainer}>
                <Text style={styles.lightText}>
                  Forecast: {this.props.weather.weather[0].description}
                </Text>
                <Text style={styles.lightText}>
                  Wind: {this.props.weather.wind.speed} m/s
                </Text>
                <Text style={styles.lightText}>
                  Humidity: {this.props.weather.main.humidity} %
                </Text>
                </View>
              </View>
          </View>
        <View style={styles.separator}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  listContainer: {
  },
  timeContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  seperator: {
    height: 1,
    backgroundColor: 'white'
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  whiteText: {
    fontSize: 18,
    color: 'white'
  },
  lightText: {
    color: 'white'
  },
  titleWrapper: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#658D9F',
    padding: 15
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  descContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  horContainer1: {
    flexDirection: 'row',
    marginBottom: 5
  },
  horContainer2: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  horContainer3: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  vertContainer: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 10
  },
  sideText: {
    color: '#658D9F'
  },
  currentWrapper: {
    flex: 3,
    padding: 20,
    backgroundColor: '#17aacf'
  },
  forecastWrapper: {
    flex: 5,
    backgroundColor: 'white'
  },
  icon: {
    padding: 0,
    width: 125,
    height: 125,
    marginRight: 20
  },
  icon2: {
    padding: 0,
    width: 75,
    height: 75,
    marginRight: 20
  },
  WeatherCell: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray',
    backgroundColor: '#17aacf'
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

module.exports = Weather;
