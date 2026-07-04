import Contact from '@/app/components/contactus/Contact';
import { auth } from '@/lib/auth';
import React from 'react';

export const metadata = {
    title : "MediCare Connect - Contact us",
    description : "Contact"
}
const ContactPage =  async () => {

    const session = await auth.api.getSession({
    headers: await headers(),
  });

    return (
        <div>
            <Contact session = {session}/>
        </div>
    );
};

export default ContactPage;