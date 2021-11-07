import { MovieCard } from './MovieCard'
import { Movie } from './../@types/Movie'

type ContentProps = {
  genreTitle: string;
  movies: Movie[]
}

export function Content({ genreTitle, movies }: ContentProps) {
  return (
    <>
      <header>
        <span className="category">Categoria:<span> {genreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  );
}