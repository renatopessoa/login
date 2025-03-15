"use client";

import React from 'react';
import Login from './Login';
import Head from 'next/head';

const LoginPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Login/Signup Form</title>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </Head>
            <Login />
        </>
    );
};

export default LoginPage;
