import React from 'react';

function MovieCard({ m }) {


  return (
    <div className="movie">
      <div>
        <p>{m.Year}</p>
      </div>
      <div>
        <img src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/400'} alt="poster" />
      </div>
      <div>
        <span>{m.Type}</span>
        <h3>{m.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
