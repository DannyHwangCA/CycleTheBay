"use strict";

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TabBarIOS,
  AlertIOS,
  ListView,
  View,
  AppActions,
  navigator
} from 'react-native';

import Trail from './Trail'
import Main from './Main'
import Weather from './Weather'
import Local from './Local'
import navAnimations from '../Helper_Functions/navAnimations'


class LandmarkList extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      trail_id: this.props.trail_id,
      landmark_id: '',
      title: '',
      desc: '',
      img_url: ''
    };
  }

  componentDidMount() {
    console.log(this.state.trail_id)
    var url = `http://pacific-meadow-80820.herokuapp.com/api/locations/${this.state.trail_id}/landmarks`
    this.fetchData(url);
  }

  fetchData(url) {
    fetch(url, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  _handleLandmarkSelection(landmark){
    var trail_id = this.state.trail_id
    console.log(trail_id)
    console.log(landmark.id)
    fetch('http://pacific-meadow-80820.herokuapp.com/api/locations/'+trail_id+'/landmarks/'+landmark.id)
      .then((response) => response.json())
      .then(responseData => {
        this.props.navigator.push({
          title: landmark.title,
          name: 'Landmark',
          passProps: {
            title: responseData.title,
            desc: responseData.desc,
            img_url: responseData.image_url
          },
        });
      }).done();
  }

  render() {
    if (!this.state.loaded) {
      this.renderLoadingView();
    }

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Landmarks List
          </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderLandmark.bind(this)}
          style={styles.listView}
        />
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
              <Text style={styles.buttonText}>Back to Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            underlayColor="gray">
              <Text style={styles.blankButton}>blank</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading landmarks...
        </Text>
      </View>
    )
  }

  renderLandmark(landmark) {
    return (
      <View>
        <Image
          source={{uri: landmark.image_url}}
          style={styles.image}>
          <TouchableOpacity
            style={styles.row}
            onPress={(this._handleLandmarkSelection.bind(this, landmark))}
            underlayColor="white">
            <Text style={styles.landmark}>
              {landmark.title}
            </Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }

  _onHomeButton(){
    this.props.navigator.popToTop()
  }

  _onBackButton(){
    this.props.navigator.pop()
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 25,
  },
  landmark: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  listView: {
    flex: 10,
    marginTop: 20
  },
  row: {
    flex: 1,
    alignItems: 'stretch',
    margin: 20
  },
  image: {
    flex: 1,
    alignItems: 'stretch',
    marginBottom: 5,
    padding: 20,
    width: null,
    height: 175
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

module.exports = LandmarkList;
