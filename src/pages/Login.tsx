"use client";

import React, { useEffect, useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
    // Form data state
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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

            return () => {
                registerBtn.removeEventListener('click', handleRegisterClick);
                loginBtn.removeEventListener('click', handleLoginClick);
            };
        }
    }, []);

    // Handle login form input changes
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    // Handle register form input changes
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    // Handle login form submission
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'login',
                    username: loginData.username,
                    password: loginData.password
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess('Login successful!');
                // In a real application, you would redirect or update app state here
            } else {
                setError(data.error || 'Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred during login. Please try again.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle register form submission
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'register',
                    username: registerData.username,
                    email: registerData.email,
                    password: registerData.password
                }),
            });

            const data = await response.json();

            if (data.success) {
                setSuccess('Registration successful! You can now login.');
                // Clear form
                setRegisterData({ username: '', email: '', password: '' });
                // Switch to login view
                document.querySelector('.container')?.classList.remove('active');
            } else {
                setError(data.error || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setError('An error occurred during registration. Please try again.');
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            {isLoading && <div className="loading-message">Processing...</div>}

            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={loginData.username}
                            onChange={handleLoginChange}
                            required
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="forgot-link">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                    <p>or login with social platforms</p>
                    <div className="social-icons">
                        <a href="#"><i className='bx bxl-google'></i></a>
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-github'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegister}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={registerData.username}
                            onChange={handleRegisterChange}
                            required
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                        />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <button type="submit" className="btn" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    <p>or register with social platforms</p>
                    <div className="social-icons">
                        <a href="#"><i className='bx bxl-google'></i></a>
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-github'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </form>
            </div>

            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button className="btn register-btn">Register</button>
                </div>

                <div className="toggle-panel toggle-right"></div>
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button className="btn login-btn">Login</button>
            </div>
        </div>

    );
};

export default Login;
