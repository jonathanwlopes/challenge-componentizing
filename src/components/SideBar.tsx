import { useEffect, useState } from "react"
import { api } from "../services/api"
import { Button } from "./Button"
import { Content } from "./Content"
import { Header } from "./Header"

interface GenresProps {
  genres: {
    id: number
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
    title: string
  }[]
}

interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

interface GenreResponseProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}

export function SideBar({ genres }: GenresProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then((response) => {
      setMovies(response.data)
    })

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>

      <div className="container">
        <Header selectedGenre={selectedGenre} />
        <Content movies={movies} />
      </div>
    </div>
  )
}
