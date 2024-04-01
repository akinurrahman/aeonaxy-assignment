import React from "react";

const Button = ({ value, bg = true, border = false }) => {
  const hasBorder = !bg && border;
  return (
    <button
      className={`${!bg ? " text-black" : "bg-blue-600 text-white hover:bg-blue-500"} rounded-lg  px-6 py-3 text-center align-middle font-sans text-sm font-bold uppercase  ${hasBorder && "border-2 border-solid"}  `}
      type="button"
    >
      {value}
    </button>
  );
};

export default Button;
