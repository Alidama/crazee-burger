import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
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
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accéder à votre espace</button>
      <Link to="/order">Vers OrderPage</Link>
    </form>
  );
}

export default LoginForm;
