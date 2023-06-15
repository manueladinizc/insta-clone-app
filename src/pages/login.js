// eslint-disable-next-line
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import IphoneProfile from '../images/iphone-with-profile.png'

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = () => {};	

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return(
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
     I'm Login Page!!!
      <div className="flex w-3/5">
        <img src={IphoneProfile} alt="iPhone with Instagram app" />
      </div>
    </div>
  )
}