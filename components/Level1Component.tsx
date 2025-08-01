import { Level2Component } from "./Level2Component";

interface Level1ComponentProps {
  arg1: string;
}

export const Level1Component: React.FC<Level1ComponentProps> = ({ arg1 }) => {
  return <Level2Component arg1={arg1}>Level1Component -&gt; </Level2Component>;
};

// another way to pass it is this:
// export const Level1Component: React.FC<Level1ComponentProps> = (props) => {
//   return <div>Level1Component - {props.arg1}</div>;
// };
