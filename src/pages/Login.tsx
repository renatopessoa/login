"use client";

import React, { useEffect } from 'react';
import './Login.css';
import { FaFacebook, FaGoogle, FaTwitter, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Login: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector('.container');
        const registerBtn = document.querySelector('.toggle-right .btn');
        const loginBtn = document.querySelector('.toggle-left .btn');

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
    }, []);

    return (
        <div className="container">
            <div className="form-box login">
                <h1>Login</h1>
                <p>Use sua conta para fazer login</p>
                <form>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <i><FaEnvelope /></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                        <i><FaLock /></i>
                    </div>
                    <div className="forgot-link">
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                <div className="social-icons">
                    <a href="#"><i><FaFacebook /></i></a>
                    <a href="#"><i><FaGoogle /></i></a>
                    <a href="#"><i><FaTwitter /></i></a>
                </div>
            </div>

            <div className="form-box register">
                <h1>Registrar</h1>
                <p>Crie sua conta gratuitamente</p>
                <form>
                    <div className="input-box">
                        <input type="text" placeholder="Nome" required />
                        <i><FaUser /></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <i><FaEnvelope /></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Senha" required />
                        <i><FaLock /></i>
                    </div>
                    <button type="submit" className="btn">Registrar</button>
                </form>
                <div className="social-icons">
                    <a href="#"><i><FaFacebook /></i></a>
                    <a href="#"><i><FaGoogle /></i></a>
                    <a href="#"><i><FaTwitter /></i></a>
                </div>
            </div>

            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Bem-vindo de volta!</h1>
                    <p>Entre com seus dados pessoais para usar todos os recursos do site</p>
                    <button className="btn">Login</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Olá, amigo!</h1>
                    <p>Registre-se conosco para iniciar sua jornada</p>
                    <button className="btn">Registrar</button>
                </div>
            </div>
        </div>
    );
};

export default Login;