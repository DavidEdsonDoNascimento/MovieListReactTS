import { useEffect, useState } from 'react'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { api } from './services/api'
import { Movie } from './@types/Movie'
import { Genre } from './@types/Genre'

import './styles/global.scss'
import './styles/sidebar.scss'
import './styles/content.scss'

export function App() {
  
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [genres, setGenres] = useState<Genre[]>([])
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre)

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data)
    })

    api.get<Genre>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} genres={genres} handleClickButton={handleClickButton}/>
      <div className="container">
        <Content genreTitle={selectedGenre.title} movies={movies}/>
      </div>
    </div>
  )
}