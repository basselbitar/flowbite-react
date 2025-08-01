interface BoxCardProps {
  children: React.ReactNode;
  type?: "success" | "alert" | "warning"; // Optional prop to define the type of box
}

export const BoxCard: React.FC<BoxCardProps> = ({ type, children }) => {
  return (
    <>
      <div className={`box ${type}`}>{children}</div>
    </>
  );
};
