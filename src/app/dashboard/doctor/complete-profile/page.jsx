import React from 'react';
import CompleteProfile from './CompleteProfile';
import { getUserToken } from '@/lib/session';

const page = async () => {
  const token = await getUserToken()
  return (
    <div>
      <CompleteProfile token = {token}/>
    </div>
  );
};

export default page;