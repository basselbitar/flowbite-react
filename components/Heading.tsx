// export default function Heading(props) {
//   return ;
// }

interface HeadingProps {
  message: string;
}

export const Heading: React.FC<HeadingProps> = ({ message }) => {
  return <h1 className="mb-4 text-4xl dark:text-white">{message}</h1>;
};
