import { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const Search = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="./img/backbutton.png"></BackButton>
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle></Circle>
          <Line></Line>
          <Square></Square>
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Lokasi penjemputan"
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
            }}
          />
          <Input
            placeholder="Mau kemana?"
            value={dropoff}
            onChange={(e) => {
              setDropoff(e.target.value);
            }}
          />
        </InputBoxes>
        <PlusIcon src="./img/plusicon.png"></PlusIcon>
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="./img/staricon.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: '/confirm',
          query: {
            pickup: pickup,
            dropoff: dropoff
          }
        }}
      >
        <ConfirmButtonWrapper>
          <ConfirmButton> Confirm Location </ConfirmButton>
        </ConfirmButtonWrapper>
      </Link>
      {/* saved Place */}
      {/* confirm location */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`sm:container sm:mx-auto bg-white h-screen`;
const ButtonContainer = tw.div`bg-white h-12 p-2`;
const BackButton = tw.img`h-10 cursor-pointer`;
const InputContainer = tw.div`bg-white flex items-center px-4 mb-2`;
const FromToIcons = tw.div`flex flex-col items-center px-4 mr-2`;
const Circle = tw.div`h-2.5 w-2.5 rounded-full bg-gray-800 my-1`;
const Line = tw.div`h-10 w-0.5 bg-gray-500`;
const Square = tw.div`h-3 w-3 bg-gray-700 my-1`;
const InputBoxes = tw.div`flex flex-col flex-1 `;
const Input = tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`;
const PlusIcon = tw.img`w-10 h-10 ml-3`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2`;
const StarIcon = tw.img`w-10 p-2 bg-gray-400 rounded-full mr-2`;
const ConfirmButtonWrapper = tw.div`container mx-auto text-center px-5 bg-white`;
const ConfirmButton = tw.button`bg-gray-600 px-5 py-3 w-full my-2 text-xl text-white`;
