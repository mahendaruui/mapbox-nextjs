import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/map';
import { useRouter } from 'next/router';
import RidesSelector from './components/RideSelector';

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiaGVuZGFydGVhIiwiYSI6ImNreHp2YzlwcTdkNHgydXN0b2lvcjNmeWgifQ.KkhabDdcX_efZd2fiIzg6Q',
          limit: 1
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const dropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiaGVuZGFydGVhIiwiYSI6ImNreHp2YzlwcTdkNHgydXN0b2lvcjNmeWgifQ.KkhabDdcX_efZd2fiIzg6Q',
          limit: 1
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    dropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
      <RideContainer>
        <RidesSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Konfirmasi</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`flex h-screen flex-col`;
const RideContainer = tw.div`flex flex-1 flex-col`;
const ConfirmButtonContainer = tw.div`flex border-t-2`;
const ConfirmButton = tw.button`flex-1 bg-black text-white m-4 py-4 `;
