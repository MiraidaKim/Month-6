import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import "./style.css";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results || []))
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="characters-container">
      <h1>Rick and Morty Characters</h1>
      <div className="characters-grid">
        {characters.map((char) => (
          <Link to={`/character/${char.id}`} key={char.id} className="character-card">
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
          </Link>
        ))}
      </div>

      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default CharactersPage;
