import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(''); // [city = '',setCity() es un método]

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleInputChange}
        value = {city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
