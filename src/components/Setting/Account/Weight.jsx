import React, { useContext, useState } from "react";
import { FloatingLabel } from "flowbite-react";
import { UserContext } from "../../UserContext";
const Weight = ({ setWeight, handleBlur }) => {
  const { data } = useContext(UserContext);

  const handlechangeWeight = (e) => {
    let value = e.target.value;
    value = String(Number(value));
    setWeight(value);
  };

  return (
    <div className="xl:flex-1">
      <FloatingLabel
        className="text-[1.25rem]"
        variant="outlined"
        label="Weight"
        type="number"
        onBlur={handleBlur}
        defaultValue={data?.weight}
        onChange={handlechangeWeight}
        aria-label="weight"
      />
    </div>
  );
};

export default Weight;
