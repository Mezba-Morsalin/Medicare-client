import React from 'react';
import PrescriptionForm from './PrescriptionForm';
import { getUserToken } from '@/lib/session';

const page = async () => {
   const token = await getUserToken()
  return (
    <div>
      <PrescriptionForm token={token}/>
    </div>
  );
};

export default page;