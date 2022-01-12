import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
// import {carList} from '../data/carList';

const RidesSelector = ({ pickupcoordinates, dropoffCoordinates }) => {
  const carList = [
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'Ekonomi',
      multiplier: 1,
    },
    {
      imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
      service: 'Bisnis',
      multiplier: 1.5,
    },
    {
      imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
      service: 'Eksekutif',
      multiplier: 2,
    },
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'VIP',
      multiplier: 2.2,
    },
    {
      imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
      service: 'VVIP',
      multiplier: 2.8,
    }
  ]
  
  
  
  const [rideDuration, setRideDuration] = useState(0);
  // 
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupcoordinates[0]},${pickupcoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaGVuZGFydGVhIiwiYSI6ImNreHp2YzlwcTdkNHgydXN0b2lvcjNmeWgifQ.KkhabDdcX_efZd2fiIzg6Q`
    )
    .then(res=>res.json())
    .then(data=>{setRideDuration(data.routes[0].duration / 100)}
    )
  }, [pickupcoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Pilih kendaraan anda, atau scroll lihat lebih banyak </Title>
      <Carlist>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetail>
              <Service>Moda - {car.service}</Service>
              <Time> 10 Menit </Time>
            </CarDetail>
            <Price>{'Rp.' + (rideDuration*car.multiplier).toFixed(3)}</Price>
          </Car>
        ))}
      </Carlist>
    </Wrapper>
  );
};

export default RidesSelector;
const Wrapper = tw.div`flex-1 overflow-y-auto`;
const Title = tw.div`text-gray-500 text-xs text-center`;
const Carlist = tw.div`flex-1 h-40 overflow-y-scroll`;
const Car = tw.div`flex p-4 items-center justify-between`;
const CarImage = tw.img`h-14 mr-4`;
const CarDetail = tw.div`flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-sm text-blue-500`;
const Price = tw.div``;
