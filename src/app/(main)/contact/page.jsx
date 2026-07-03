import Contact from '@/app/components/contactus/Contact';
import React from 'react';

export const metadata = {
    title : "MediCare Connect - Contact us",
    description : "Contact"
}
const ContactPage =  () => {

    return (
        <div>
            <Contact token = {token}/>
        </div>
    );
};

export default ContactPage;