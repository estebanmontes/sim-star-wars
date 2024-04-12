import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="btn ml-2 btn-primary bg-teal-700 w-36 h-12 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
