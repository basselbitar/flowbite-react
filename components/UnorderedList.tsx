interface UnorderedListProps {
  names: string[];
}

export const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  return (
    <ul className="list-disc pl-5">
      {props.names.map((name, index) => (
        <li key={index} className="dark:text-white">
          {name}
        </li>
      ))}
    </ul>
  );
};
