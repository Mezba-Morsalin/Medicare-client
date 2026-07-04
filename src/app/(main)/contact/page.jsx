import Contact from '@/app/components/contactus/Contact';
import { auth } from '@/lib/auth';
import React from 'react';

export const metadata = {
    title : "MediCare Connect - Contact us",
    description : "Contact"
}
const ContactPage =  async () => {

    return (
        <div>
            <Contact/>
        </div>
    );
};

export default ContactPage;