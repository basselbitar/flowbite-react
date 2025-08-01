import { BoxCard } from "../components/BoxCard";
import { Heading } from "../components/Heading";
import { MovieCard } from "../components/MovieCard";
import { UnorderedList } from "../components/UnorderedList";
import { Level1Component } from "../components/Level1Component";

export const Page6 = () => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

  const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  };

  return (
    <>
      <div className="mb-12 text-5xl dark:text-white">
        Page 6 - Components and Props
      </div>

      <Heading message="Passing an array of strings as a prop" />
      <UnorderedList names={names} />

      <Heading message="Passing an object as a prop" />
      <MovieCard movie={movie} />

      <Heading message="Passing children" />
      <BoxCard type="success">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
          architecto?
        </p>
      </BoxCard>

      <BoxCard type="warning">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
          architecto?
        </p>
      </BoxCard>

      <BoxCard type="alert">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
          architecto?
        </p>
      </BoxCard>

      <Heading message="Prop Drilling Exercise" />
      <Level1Component arg1="Secret Message" />
    </>
  );
};
