import { MovieCard } from "./MovieCard"

interface MoviesProps {
  movies: {
    imdbID: string
    Title: string
    Poster: string
    Ratings: Array<{
      Source: string
      Value: string
    }>
    Runtime: string
  }[]
}
export function Content({ movies }: MoviesProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}
