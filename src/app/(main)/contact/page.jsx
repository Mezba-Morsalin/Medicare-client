import Contact from '@/app/components/contactus/Contact';
import { getUserToken } from '@/lib/session';
import React from 'react';

export const metadata = {
    title : "MediCare Connect - Contact us",
    description : "Contact"
}
const ContactPage =  async () => {

    const token = await getUserToken();

    return (
        <div>
            <Contact token = {token}/>
        </div>
    );
};

export default ContactPage;