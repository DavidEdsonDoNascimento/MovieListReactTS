import { Button } from './Button'
import { Genre } from './../@types/Genre'

type SideBarProps ={
  selectedGenreId: number;
  genres: Genre[];
  handleClickButton: (id: number) => void;
}
export function SideBar({ selectedGenreId, genres, handleClickButton }: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
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
  );
}