/* eslint-disable react/react-in-jsx-scope */
import tw from 'tailwind-styled-components';
import Map from './components/map';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItem>
        {/* header */}
        <Header>
          <UberLogo src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"></UberLogo>
          <Profile>
            <Name>Mahendar</Name>
            <UserImage src="./img/profile.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="./img/Car2.png" />
              Ride
            </ActionButton>
          </Link>

          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="./img/wheels.png" />
              Wheels
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="./img/reserver.png" />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>

        <Link href="/search">
          <InputButton utton>Mau Kemana? </InputButton>
        </Link>
      </ActionItem>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col h-screen`;
const ActionItem = tw.div`flex-1 p-4`;
const Header = tw.div`flex justify-between`;
const UberLogo = tw.img`h-28`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-4 w-40 text-sm text-right`;
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div`flex text-center`;
const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center p-5 flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 cursor-pointer`;
