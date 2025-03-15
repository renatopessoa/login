"use client";

import React, { useEffect } from 'react';
import './Login.css';

const Login: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector('.container');
        const registerBtn = document.querySelector('.register-btn');
        const loginBtn = document.querySelector('.login-btn');

        if (container && registerBtn && loginBtn) {
            const handleRegisterClick = () => {
                container.classList.add('active');
            };

            const handleLoginClick = () => {
                container.classList.remove('active');
            };

            registerBtn.addEventListener('click', handleRegisterClick);
            loginBtn.addEventListener('click', handleLoginClick);

            // Limpeza dos event listeners quando o componente for desmontado
            return () => {
                registerBtn.removeEventListener('click', handleRegisterClick);
                loginBtn.removeEventListener('click', handleLoginClick);
            };
        }
    }, []); // Array vazio significa que este efeito só executa uma vez após a montagem

    return (
        <div className="container">
            {/* Aqui você pode adicionar seu HTML para os formulários de login/registro */}
            <button className="login-btn">Login</button>
            <button className="register-btn">Registrar</button>
        </div>
    );
};

export default Login;