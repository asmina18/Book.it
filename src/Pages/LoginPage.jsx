import React, { useState } from 'react';
import userData from '../../users.json';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const user = userData.users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            alert('Velkommen, du er nu logget ind!');
           
        } else {
            alert('Forkert brugernavn eller adgangskode. Prøv igen.');
        }
    };

    return (
        <>
        <div className={'loginContainer'}>
  <h1>LOG IN</h1>
  <form onSubmit={handleLogin}>
    <label htmlFor="uname">Email</label>
    <input
      className={'input'}
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="password">Password</label>
    <input
      name='password'
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className={'loginButton'} type="submit">
      Log ind
    </button>
  </form>
</div>

    </>
);  
     
};
