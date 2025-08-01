import { useState } from "react";

interface BoxCardProps {
  children: React.ReactNode;
  type?: "success" | "alert" | "warning"; // Optional prop to define the type of box
}

export const BoxCard: React.FC<BoxCardProps> = ({ type, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${type}`}>{children}</div>
      <button className="trigger" onClick={() => setShow(!show)}>
        Hide
      </button>
    </div>
  );
};
