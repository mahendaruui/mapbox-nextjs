import { React } from 'react';
import tw from 'tailwind-styled-components';
const RidesSelector = () => {
  const carList = [
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'UberX',
      multiplier: 1
    },
    {
      imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
      service: 'UberXL',
      multiplier: 1.5
    },
    {
      imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
      service: 'Black',
      multiplier: 2
    },
    {
      imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
      service: 'Comfort',
      multiplier: 1.2
    },
    {
      imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
      service: 'Black SUV',
      multiplier: 2.8
    }
  ];

  return (
    <Wrapper>
      <Title>Pilih kendaraan anda, atau scroll lihat lebih banyak </Title>
      <Carlist>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetail>
              <Service>{car.service}</Service>
              <Time> {car.multiplier} Menit </Time>
            </CarDetail>
            <Price>Rp. 70.000</Price>
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
