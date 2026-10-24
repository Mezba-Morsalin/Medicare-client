import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Chatbot/>
            <Footer/>
        </div>
    );
};

export default AuthLayout;