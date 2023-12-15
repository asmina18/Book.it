import React, { useState } from 'react';

export const OpretNyPage= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    alert('Brugeren blev oprettet');
  };

  return (
    <div>
      <h1>opret ny </h1>
      <input
        type="text"
        placeholder="Brugernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Adgangskode"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Tilmeld</button>
    </div>
  );
};


