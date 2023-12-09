import React from "react";
import clsx from "clsx";

export interface CalculatorKeyProps {
  value: string;
  onClick: () => void;
  type?: "black" | "gray" | "blue";
  doubleSize?: boolean;
  blackText?: boolean;
}

const CalculatorKey: React.FC<CalculatorKeyProps> = ({
  value,
  onClick,
  type = "black",
  doubleSize,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " h-12 rounded-xl  bg-black backdrop-filter backdrop-blur-lg p-1  mx-auto text-center ",
        {
          "bg-black bg-opacity-50": type === "black",
          "bg-blue-800 bg-opacity-80": type === "blue",
          "bg-gray-100 bg-opacity-10": type === "gray",
          "w-12 ": !doubleSize,
          "w-28 col-span-2 ": doubleSize,
        },
      )}
    >
      <span
        className={clsx("text-2xl font-semibold ", {
          "text-blue-800": type === "black",
          "text-black": type === "blue",
          "text-blue-400": type === "gray",
        })}
      >
        {value}
      </span>
    </button>
  );
};

export default CalculatorKey;
