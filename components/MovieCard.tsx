interface MovieCardProps {
  movie: {
    title: string;
    director: string;
    year: number;
    // Add other movie properties as needed
  };
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  return (
    <>
      <div className="text-large dark:text-white">
        {props.movie.title} was made in {props.movie.year} by{" "}
        {props.movie.director}
      </div>
    </>
  );
};
