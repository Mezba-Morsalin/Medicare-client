import React from 'react';
import SigninPage from './SignIn';

export const metadata = {
    title : "MediCare Connect - Sign In",
    description : "Signin"
}

const page = () => {
  return (
    <div>
      <SigninPage/>
    </div>
  );
};

export default page;