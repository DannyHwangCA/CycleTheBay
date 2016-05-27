var React = require('react-native');
var {
  StyleSheet,
  PropTypes,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  LinkingIOS,

} = React;

var MapView = require('react-native-maps');
var PriceMarker = require('./PriceMarker');
var CustomCallout = require('./CustomCallout');

import TrailList from './TrailList'


var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.7;
const LONGITUDE = -122.2;
const LATITUDE_DELTA = 1.2;
const LONGITUDE_DELTA = 1.2;


var Map = React.createClass({
  getInitialState() {
    return {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          coordinate: {
            latitude: 37.8324,
            longitude: -122.4795,
          },
        },

        {
            coordinate: {
            latitude: 37.7786,
            longitude: -122.3893,
          },
        },

        {
            coordinate: {
            latitude: 37.6808,
            longitude: -122.3893,
          },
        },

        {
            coordinate: {
            latitude: 37.5899,
            longitude: -122.3583,
          },
        },

        {
            coordinate: {
            latitude: 37.5427,
            longitude: -122.2397,
          },
        },

        {
            coordinate: {
            latitude: 37.4926,
            longitude: -122.1732,
          },
        },

        {
            coordinate: {
            latitude: 37.4257,
            longitude: -121.969,
          },
        },

        {
            coordinate: {
            latitude: 37.5256,
            longitude: -122.0715,
          },
        },

        {
            coordinate: {
            latitude: 37.7072,
            longitude: -122.1987,
          },
        },

        {
            coordinate: {
            latitude: 37.7471,
            longitude: -122.2306,
          },
        },

        {
            coordinate: {
            latitude: 37.8052,
            longitude: -122.323,
          },
        },

        {
            coordinate: {
            latitude: 37.8000,
            longitude: -122.3,
          },
        },

        {
            coordinate: {
            latitude: 37.9009,
            longitude: -122.3247,
          },
        },

        {
            coordinate: {
            latitude: 37.964,
            longitude: -122.4276,
          },
        },

        {
            coordinate: {
            latitude: 38.0114,
            longitude: -122.316,
          },
        },

        {
            coordinate: {
            latitude: 38.0225,
            longitude: -122.1626,
          },
        },

        {
            coordinate: {
            latitude: 38.0733,
            longitude: -122.1926,
          },
        },

        {
            coordinate: {
            latitude: 38.1152,
            longitude: -122.2718,
          },
        },

        {
            coordinate: {
            latitude: 38.2059468,
            longitude: -122.3966172,
          },
        },

        {
            coordinate: {
            latitude: 38.1155,
            longitude: -122.52,
          },
        },

        {
            coordinate: {
            latitude: 38.0234,
            longitude: -122.5104,
          },
        },

        {
            coordinate: {
            latitude: 37.9762,
            longitude: -122.478,
          },
        },

        {
            coordinate: {
            latitude: 37.9209,
            longitude: -122.4989,
          },
        },

        {
            coordinate: {
            latitude: 37.888,
            longitude: -122.525,
          },
        },


      ],
    };
  },

  show() {
    this.refs.m1.showCallout();
  },

  hide() {
    this.refs.m1.hideCallout();
  },

  render() {
    const { region, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          mapType={'hybrid'}
        >
          <MapView.Marker
            ref="m1"
            coordinate={markers[0].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>San Francisco Northern Waterfront</Text>
                <Text style={{ color: '#fff' }}>Terrain: Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 11.0 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.8324,-122.4795&daddr=37.7786,-122.3893&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m2"
            coordinate={markers[1].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>San Francisco Southern Waterfront</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 8.2 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.7786,-122.3893&daddr=37.6808,-122.3893&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m3"
            coordinate={markers[2].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Brisbane Lagoon to Bayside Park</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 9.9 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.6808,-122.3893&daddr=37.5899,-122.3583&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m4"
            coordinate={markers[3].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Anza Lagoon to Belmont Slough</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 12.3 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.5899,-122.3583&daddr=37.5427,-122.2397&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m5"
            coordinate={markers[4].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Belmont Slough to Bedwell Bayfront Park</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 8.8 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.5427,-122.2397&daddr=37.4926,-122.1732&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m6"
            coordinate={markers[5].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Bedwell Bayfront Park to Alviso</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 18.3 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.4926,-122.1732&daddr=37.4257,-121.969&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m7"
            coordinate={markers[6].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Alviso to Newark</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 17.5 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.4257,-121.969&daddr=37.5256,-122.0715&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m8"
            coordinate={markers[7].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Newark to San Leandro</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 20.8 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.5256,-122.0715&daddr=37.7072,-122.1987&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m9"
            coordinate={markers[8].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>San Leandro to Bay Farm Island</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 4.4 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.7072,-122.1987&daddr=37.7471,-122.2306&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m10"
            coordinate={markers[9].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Alameda Oakland</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 9.0 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.7471,-122.2306&daddr=37.8052,-122.323&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m11"
            coordinate={markers[10].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>SF-Oakland Bay Bridge</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 9.4 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.8052,-122.323&daddr=37.7956,-122.3934&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m12"
            coordinate={markers[11].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Oakland to Albany</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 10.2 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.8052,-122.323&daddr=37.9000,-122.3&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m13"
            coordinate={markers[12].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Albany to Richmond</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 9.9 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.9009,-122.3247&daddr=37.964,-122.4276&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m14"
            coordinate={markers[13].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Pt. San Pablo to Pt. Pinole</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 10.9 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.964,-122.4276&daddr=38.0001,-122.3562&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m15"
            coordinate={markers[14].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Point Wilson to Carquinez Bridge</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 8.2 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.0114,-122.316&daddr=38.0566,-122.2282&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m16"
            coordinate={markers[15].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Carquinez Strait</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 8.1 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.0733,-122.1626&daddr=38.0566,-122.1926&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m17"
            coordinate={markers[16].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Benicia State Recreation Area to White Slough Path</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 6.8 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.0733,-122.1926&daddr=38.1152,-122.2718&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m18"
            coordinate={markers[17].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Northern Vallejo to Napa</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 13.6 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.1152,-122.2718&daddr=38.2809,-122.292&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m19"
            coordinate={markers[18].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Hudeman Slough to Black Point</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 36.7 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.2059468,-122.3966172&daddr=38.1155,-122.52&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m20"
            coordinate={markers[19].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Petaluma River to McInnis Park</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 13.8 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.1155,-122.52&daddr=38.0234,-122.5104&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m21"
            coordinate={markers[20].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Las Gallinas Valley Sanitary District to Point San Pedro Road</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 8.4 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=38.0234,-122.5104&daddr=37.9762,-122.478&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m22"
            coordinate={markers[21].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Point San Pedro Road to Paradise Drive</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 13.4 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.9762,-122.478&daddr=37.9209,-122.4989&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m23"
            coordinate={markers[22].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Paradise Drive to Bothin Marsh</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 6.2 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.9209,-122.4989&daddr=37.888,-122.525&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m24"
            coordinate={markers[23].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
            <MapView.Callout tooltip>
              <CustomCallout>
              <Text style={{ color: '#fff' }}>Strawberry Drive to Golden Gate Bridge</Text>
                <Text style={{ color: '#fff' }}>Terrain: Mostly Paved</Text>
              <Text style={{ color: '#fff' }}>Distance: 5.7 Miles</Text>
              <Text style={{ color: 'blue' }} onPress={() => LinkingIOS.openURL('http://maps.google.com/?saddr=37.888,-122.525&daddr=37.8324,-122.4795&dirflg=b')}>Click Here For Directions!</Text>
              </CustomCallout>
            </MapView.Callout>
          </MapView.Marker>

        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Click Pins for Trail Info</Text>
          </View>
        </View>
        <View style={styles.footerNav}>
          <TouchableOpacity
            onPress={this._onHomeButton}
            style={styles.navButton}
            underlayColor="gray">
              <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onTrailsButton}
          style={styles.navButton}
          underlayColor="gray">
            <Text style={styles.buttonText}>Trails</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onWeatherButton}
            style={styles.navButton}
            underlayColor="gray">
              <Text style={styles.buttonText}>Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={this._onLocalButton}
          style={styles.navButton}
          underlayColor="gray">
            <Text style={styles.buttonText}>Local</Text>
          </TouchableOpacity>
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

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  navButton: {
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

module.exports = Map;
