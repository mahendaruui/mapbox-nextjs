import React from 'react';
import mapboxgl from '!mapbox-gl';
import { useEffect } from 'react';
import tw from 'tailwind-styled-components';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGVuZGFydGVhIiwiYSI6ImNreHp2YzlwcTdkNHgydXN0b2lvcjNmeWgifQ.KkhabDdcX_efZd2fiIzg6Q';

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [95.336983, 5.541539],
      zoom: 9
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`flex-1`;
