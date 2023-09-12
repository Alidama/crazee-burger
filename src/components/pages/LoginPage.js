import React, { useState } from "react";

const LoginPage = () => {
  // state

  const [inputValue, setInputValue] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;
