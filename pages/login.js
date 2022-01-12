import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
      }
    });
  }, []);

  return (
    <Wrapper>
      <div className="flex items-center justify-center">
        <UberLogo src="./img/moda.png"></UberLogo>
        <div className="text-xl">
          Moda<sup className="text-xs ml-1 italic">ltd</sup>
        </div>
      </div>
      <Title> Log in to access your account</Title>
      <LoginImage src="./img/loginimage.png"></LoginImage>
      <div className="flex">
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
          Sign In with Google
        </SignInButton>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200 p-4 sm:container sm:mx-auto sm:w-1/2`;
const SignInButton = tw.button`bg-black text-white mr-1 text-center py-4 mt-8 self-center w-full rounded-xl`;
const UberLogo = tw.img`h-28 w-auto object-contain self-start`;
const Title = tw.div`text-xl pt-2 text-gray-600 text-center`;
const LoginImage = tw.img`mt-5 rounded-xl`;
