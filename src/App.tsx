import { useEffect, useState } from "react"

import { SideBar } from "./components/SideBar"
// import { Content } from './components/Content';

import { api } from "./services/api"

import "./styles/global.scss"

import "./styles/sidebar.scss"
import "./styles/content.scss"

interface GenreResponseProps {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}

export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data)
    })
  }, [])

  return <SideBar genres={genres} />
}
