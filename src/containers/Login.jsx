import React, { useRef, useContext } from 'react';
import Button from '../components/Button';
import CloudAnimation from '../components/CloudAnimation';
import { AppContext } from '@context/AppContext';

import '../styles/Login.css'

const Login = () => {
    const formRef = useRef(null);
    const { state, actions } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }
        if (data.password.length >= 8) {
            console.log(data);
            actions.addUsername(data);
        } else {
            console.log('password mas grande');
        }
    }
    const username = state?.user[0]?.username;
    return (
        <div className='Login-Container'>
            {username && <h1>{username}</h1>}
            <CloudAnimation />
            <form ref={formRef} className='Form-Container'>
                <input
                    className='Input-Styles'
                    type='email'
                    name='username'
                    placeholder='Your e-mail'
                />
                <input
                    className='Input-Styles'
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                <Button text='Iniciar Sesión' onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default Login;
