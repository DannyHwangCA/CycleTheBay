var baseUrl = 'http://pacific-meadow-80820.herokuapp.com/api';
var trails = '/locations';
var landmarks = '/landmarks';

export default function getTrails() {
  var url = `${baseUrl}&${trails}`

  return fetch(url).then((response) => response.json())
    .then((json) => {
      return {
        trails: json
      }
    });
}

export default function getSpecificTrail(id) {
  var url = `${baseUrl}&${trails}&/${id}`

  return fetch(url)
    .then(function(response) {
      debugger;
      return response.json()
    })
    .then(function(json) {
      return {
        id: json.id,
        title: json.title,
        description: json.desc,
        map_url: json.map_url,
        image_url: json.image_url,
        start_lat: json.start_lat,
        start_long: json.start_long,
        end_lat: json.end_lat,
        end_long: json.end_long,
        distance: json.distance,
        elevation_up: json.elevation_up,
        elevation_down: json.elevation_down,
        terrain: json.terrain
      }
    }).catch(function(err){
      console.log(err)
    })

}

export default function getLandmarks(trail_id) {
  var url = `${baseUrl}&${trails}&/${trail_id}&${landmarks}`

  return fetch(url).then((response) => response.json())
    .then((json) => {
      return {
      landmarks: json
      }
    });
}

export default function getSpecificLandmark(trail_id, landmark_id) {
  var url = `${baseUrl}&${trails}&/${trail_id}&${landmarks}&${landmark_id}`

  return fetch(url).then((response) => response.json())
    .then((json) => {
      return {
        title: json.title,
        description: json.desc,
        image_url: json.image_url
      }
    });
}
