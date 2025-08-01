interface Level2ComponentProps {
  arg1: string;
  children?: React.ReactNode;
}

export const Level2Component: React.FC<Level2ComponentProps> = ({
  arg1,
  children,
}) => {
  return (
    <div className="dark:text-white">
      {children} Level2Component -&gt; {arg1}
    </div>
  );
};
