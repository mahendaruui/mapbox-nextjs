import { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/map';
import Link from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItem>
        {/* header */}
        <Header>
          <div className="flex items-center">
            <UberLogo src="./img/moda.png"></UberLogo>
            <div className="">
              Moda<sup className="text-xs ml-1 italic">ltd</sup>
            </div>
          </div>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={() => signOut(auth)} />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="./img/Car2.png" />
              Mobil
            </ActionButton>
          </Link>

          {/* <Link href="/search"> */}
          <ActionButton>
            <ActionButtonImage src="./img/wheels.png" />
            Sepeda
          </ActionButton>
          {/* </Link> */}
          {/* <Link href="/search"> */}
          <ActionButton>
            <ActionButtonImage src="./img/reserver.png" />
            Jadwal
          </ActionButton>
          {/* </Link> */}
        </ActionButtons>

        {/* <Link href="/search"> */}
        <InputButton>Mau Kemana? </InputButton>
        {/* </Link> */}
      </ActionItem>
    </Wrapper>
  );
}

const Wrapper = tw.div`flex flex-col h-screen sm:flex-row sm:p-2`;
const ActionItem = tw.div`flex-1 p-4 `;
const Header = tw.div`flex justify-between`;
const UberLogo = tw.img`h-20 sm:h-28`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-4 w-40 text-sm text-right`;
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`;
const ActionButtons = tw.div`flex text-center sm:p-5`;
const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1  h-32 items-center p-5 flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-5 flex items-center mt-8 sm:mx-5 `;
