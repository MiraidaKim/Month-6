import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <Link to="/">← Back</Link>
      </div>
    </div>
  );
};

export default CharacterDetail;
