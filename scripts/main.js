    // load map and data
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3dvbGZmIiwiYSI6ImNpdTgwYmZsbDAwMnkydHFtcGdqeDR4angifQ.pDNfE5XnQy3r6kvnbobn6w';

    //enable remove func
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }

    var buildings = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "img": "img/jbaskin.jpg",
              "name": "Jack Baskin Engineering",
              "code": "BE",
              "website": "https://www.soe.ucsc.edu/",
              "address": "1156 High St"
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -122.062743,
                    37.000617
                  ],
                  [
                    -122.063154,
                    37.000574
                  ],
                  [
                    -122.06381,
                    37.000506
                  ],
                  [
                    -122.063789,
                    37.000377
                  ],
                  [
                    -122.06375,
                    37.000138
                  ],
                  [
                    -122.063101,
                    37.000205
                  ],
                  [
                    -122.06308,
                    37.000072
                  ],
                  [
                    -122.062967,
                    37.000083
                  ],
                  [
                    -122.062988,
                    37.000216
                  ],
                  [
                    -122.062683,
                    37.000247
                  ],
                  [
                    -122.062724,
                    37.0005
                  ],
                  [
                    -122.062743,
                    37.000617
                  ]
                ]
              ],
              "type": "Polygon"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "img": "img/kerrhall.jpg",
              "name": "Kerr Hall",
              "address": "Kerr Hall, Kerr Rd",
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -122.061995,
                    36.997316
                  ],
                  [
                    -122.062185,
                    36.99727
                  ],
                  [
                    -122.062169,
                    36.997228
                  ],
                  [
                    -122.062289,
                    36.997198
                  ],
                  [
                    -122.062161,
                    36.996864
                  ],
                  [
                    -122.0621,
                    36.996706
                  ],
                  [
                    -122.062121,
                    36.9967
                  ],
                  [
                    -122.062092,
                    36.996625
                  ],
                  [
                    -122.061885,
                    36.996675
                  ],
                  [
                    -122.061832,
                    36.996686
                  ],
                  [
                    -122.061841,
                    36.996711
                  ],
                  [
                    -122.061801,
                    36.996721
                  ],
                  [
                    -122.061832,
                    36.99679
                  ],
                  [
                    -122.061744,
                    36.996812
                  ],
                  [
                    -122.061769,
                    36.996875
                  ],
                  [
                    -122.061815,
                    36.996863
                  ],
                  [
                    -122.061889,
                    36.997059
                  ],
                  [
                    -122.061914,
                    36.997121
                  ],
                  [
                    -122.061863,
                    36.997133
                  ],
                  [
                    -122.061881,
                    36.997181
                  ],
                  [
                    -122.061904,
                    36.997176
                  ],
                  [
                    -122.06194,
                    36.997272
                  ],
                  [
                    -122.061974,
                    36.997264
                  ],
                  [
                    -122.061995,
                    36.997316
                  ]
                ]
              ],
              "type": "Polygon"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "img": "img/physsci.jpg",
              "name": "Physical Sciences",
              "website": "http://pbsci.ucsc.edu/",
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -122.06192,
                    36.999844
                  ],
                  [
                    -122.061969,
                    36.999843
                  ],
                  [
                    -122.061967,
                    36.999715
                  ],
                  [
                    -122.062449,
                    36.999711
                  ],
                  [
                    -122.062447,
                    36.99959
                  ],
                  [
                    -122.062503,
                    36.999589
                  ],
                  [
                    -122.062503,
                    36.999554
                  ],
                  [
                    -122.062479,
                    36.999555
                  ],
                  [
                    -122.062477,
                    36.999435
                  ],
                  [
                    -122.062157,
                    36.999438
                  ],
                  [
                    -122.062098,
                    36.999439
                  ],
                  [
                    -122.062034,
                    36.999439
                  ],
                  [
                    -122.061904,
                    36.999441
                  ],
                  [
                    -122.061841,
                    36.999441
                  ],
                  [
                    -122.06184,
                    36.999402
                  ],
                  [
                    -122.061839,
                    36.999325
                  ],
                  [
                    -122.061838,
                    36.999238
                  ],
                  [
                    -122.061509,
                    36.999241
                  ],
                  [
                    -122.061514,
                    36.999518
                  ],
                  [
                    -122.061637,
                    36.999517
                  ],
                  [
                    -122.061638,
                    36.999554
                  ],
                  [
                    -122.061638,
                    36.999585
                  ],
                  [
                    -122.061578,
                    36.999585
                  ],
                  [
                    -122.06158,
                    36.999731
                  ],
                  [
                    -122.061553,
                    36.999732
                  ],
                  [
                    -122.061554,
                    36.999783
                  ],
                  [
                    -122.061585,
                    36.999783
                  ],
                  [
                    -122.061587,
                    36.999901
                  ],
                  [
                    -122.061725,
                    36.9999
                  ],
                  [
                    -122.061727,
                    36.999984
                  ],
                  [
                    -122.061781,
                    36.999984
                  ],
                  [
                    -122.06178,
                    36.999956
                  ],
                  [
                    -122.061921,
                    36.999955
                  ],
                  [
                    -122.06192,
                    36.999844
                  ]
                ]
              ],
              "type": "Polygon"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "img": "img/selib.jpg",
              "name": "Science & Engineering Library",
              "website": "https://library.ucsc.edu/science",
              "address": "1156 High St",
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -122.061087,
                    36.999346
                  ],
                  [
                    -122.061088,
                    36.999093
                  ],
                  [
                    -122.060981,
                    36.999093
                  ],
                  [
                    -122.060981,
                    36.999077
                  ],
                  [
                    -122.060981,
                    36.999027
                  ],
                  [
                    -122.060883,
                    36.999027
                  ],
                  [
                    -122.060883,
                    36.998934
                  ],
                  [
                    -122.060922,
                    36.998934
                  ],
                  [
                    -122.060922,
                    36.998861
                  ],
                  [
                    -122.060807,
                    36.998861
                  ],
                  [
                    -122.060443,
                    36.99886
                  ],
                  [
                    -122.060442,
                    36.998928
                  ],
                  [
                    -122.060365,
                    36.998928
                  ],
                  [
                    -122.060365,
                    36.99911
                  ],
                  [
                    -122.060462,
                    36.99911
                  ],
                  [
                    -122.060462,
                    36.999199
                  ],
                  [
                    -122.06051,
                    36.999199
                  ],
                  [
                    -122.06051,
                    36.999236
                  ],
                  [
                    -122.060557,
                    36.999236
                  ],
                  [
                    -122.060557,
                    36.999271
                  ],
                  [
                    -122.060662,
                    36.999271
                  ],
                  [
                    -122.060661,
                    36.999352
                  ],
                  [
                    -122.060777,
                    36.999353
                  ],
                  [
                    -122.060777,
                    36.999427
                  ],
                  [
                    -122.060994,
                    36.999428
                  ],
                  [
                    -122.060995,
                    36.999345
                  ],
                  [
                    -122.061087,
                    36.999346
                  ]
                ]
              ],
              "type": "Polygon"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "img": "img/thimann.jpg",
              "name": "Thimann Labs",
              "address": "568 Steinhart Way",
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    -122.06245,
                    36.998283
                  ],
                  [
                    -122.062447,
                    36.998146
                  ],
                  [
                    -122.062444,
                    36.998062
                  ],
                  [
                    -122.062442,
                    36.997989
                  ],
                  [
                    -122.061612,
                    36.998003
                  ],
                  [
                    -122.061614,
                    36.998084
                  ],
                  [
                    -122.06162,
                    36.998298
                  ],
                  [
                    -122.061692,
                    36.998296
                  ],
                  [
                    -122.061806,
                    36.998294
                  ],
                  [
                    -122.06245,
                    36.998283
                  ]
                ]
              ],
              "type": "Polygon"
            }
          }
        ]
      };

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-122.06, 36.989],
        maxBounds: [ [-122.12, 36.97],
                     [-122, 37.01] ],
        maxZoom: 18,
        minZoom: 14,
        zoom: 14
    });
    map.on('load', function(e) {
      // Add the data to your map as a layer
      map.addLayer({
        'id': 'locations',
        'type': 'fill',
        // Add a GeoJSON source containing place coordinates and information.
        'source': {
          'type': 'geojson',
          'data': buildings
        },
        'layout': {},
        'paint': {
          'fill-color': '#22871f',
          'fill-opacity': 0.8,
          'fill-outline-color': '#1a6818'
        }
      });
      //console.log(map.getSource('locations'));
      buildLocationList(buildings);
    });
    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });

      // if the map has anything on it
      if (features.length) {
        var clickedPoint = features[0];
        gotoBuilding(clickedPoint);
        popUp(clickedPoint);
        removeActive();
        var selectedFeature = clickedPoint.properties.name;
        for (var i = 0; i < buildings.features.length; i++)
          if (buildings.features[i].properties.name === selectedFeature)
            selectedFeatureIndex = i;
        var listing = document.getElementById('listing-' + selectedFeatureIndex);
        listing.classList.add('active');
      }
    });
    var features = buildings.features;
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 64,
      minMatchCharLength: 1,
      keys: ['properties.name', 'properties.code']
    };
    var fuse = new Fuse(features, options);
    var search = document.getElementsByClassName("searchTextbox")[0];
    var closex = document.getElementsByClassName("close-svg")[0];
    search.addEventListener("focus", ()=> {
      if(!search.value) {
        map.flyTo({
          center: [-122.06, 36.989],
          zoom: 14
        });
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        removeActive();
      }
    });
    search.addEventListener("input", ()=>{
      var results = fuse.search(search.value);
      removeList();
      //console.log(results);
      if(!search.value) {
        buildLocationList(buildings);
        closex.style.display = 'none';
      } else { closex.style.display = 'block'; console.log(closex);}
      buildLocationList({features: results});
      search.onkeypress = (e) => {
        var event = e || window.event;
        var charCode = event.which || event.keyCode;

        if ( charCode == '13' ) {
          gotoBuilding(results[0]);
          popUp(results[0]);
          removeActive();
          console.log(document.getElementById('listings').innerHTML);
          document.getElementById('listing-0').classList.add('active');
        }
      }
    });
    closex.addEventListener("click", ()=>{
      search.value = "";
      closex.style.display = 'none';
    });

    function removeList() {
      var listings = document.getElementById('listings');
      while (listings.firstChild) listings.removeChild(listings.firstChild);
    }

    function removeActive() {
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
    }

    function buildLocationList(data) {

      for(i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        var prop = currentFeature.properties;

        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('a'));
        listing.href = '#';
        listing.className = 'item';
        listing.dataPosition = i;
        listing.id = 'listing-' + i;


        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.innerHTML = prop.name;

        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.address;

        listing.addEventListener('click', function(e) {
          var clickedListing = data.features[this.dataPosition];
          gotoBuilding(clickedListing);
          popUp(clickedListing);
          removeActive();
          this.classList.add('active');
        });
      }
    }

    function avg (arr) {
      var x = arr.map(function(v) { return v[0]; })
                 .reduce(function(a, b) { return a + b; });
      var y = arr.map(function(v) { return v[1]; })
                 .reduce(function(a, b) { return a + b; });
      return [parseFloat(x/arr.length), parseFloat(y/arr.length)];
    }

    function gotoBuilding(currentFeature) {
      var center = avg(currentFeature.geometry.coordinates[0]);
      map.flyTo({
        center: new mapboxgl.LngLat(center[0], center[1]),
        zoom: 17
      });
    }
    function popUp(currentFeature) {
      var popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();
      //console.log(currentFeature.geometry.coordinates);
      var center = avg(currentFeature.geometry.coordinates[0]);
      var popup = new mapboxgl.Popup({ closeOnClick: false, anchor: 'bottom'})
        .setLngLat(new mapboxgl.LngLat(center[0], center[1]))
        .setHTML('<img src=' + currentFeature.properties.img + '>' +
                 '<h1 class="popup-title">' + currentFeature.properties.name + '</h1>' +
                 '<h3 class="popup-desc"><i>' + currentFeature.properties.address + '</i></h3>')
        .addTo(map);
      popup.on("close", function(e) {
          removeActive();
      });
    }
