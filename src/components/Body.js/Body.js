import React from 'react';
import MovieCard from './MovieCard';
const Body = () => {
  return (
    <main>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/your-image-file.jpg"
          title="Venom: Let There Be Carnage"
          rating="7.2"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg"
          title="Red Notice"
          rating="6.8"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/xmYVd5P2sKTz1mh3x9JvJm0RjQ0.jpg"
          title="Clifford the Big Red Dog"
          rating="7.0"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
          title="Shang-Chi and the Legend of the Ten Rings"
          rating="7.8"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/tq8x5F17q95T1j0up5rpzXFAylN.jpg"
          title="Spider-Man: No Way Home"
          rating="8.3"
        />
      </div>
    </main>
  );
};
export default Body;