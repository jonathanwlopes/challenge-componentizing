interface SelectedGenreProps {
  selectedGenre: {
    id: number
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
    title: string
  }
}

export const Header = ({ selectedGenre }: SelectedGenreProps) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}
