import { useState } from "react";

const saladsList = [
  "Lettuce",
  "Spinach",
  "Tomato",
  "Cucumber",
  "Pickles",
  "Mixed Peppers",
  "Onions",
  "Olives",
  "Sweetcorn",
  "Jalapenos",
  "Chilli Flakes",
  "Sea Salt",
  "Mixed Peppercorns",
];

const getDefaultSalads = () => {
  return saladsList.map((salad) => ({
    name: salad,
    checked: false,
  }));
};

const useSalads = (defaultSalads) => {
  const [salads, setSalads] = useState(defaultSalads || getDefaultSalads);
  const checkSalads = (index) => {
    const newSalads = [...salads];
    newSalads[index].checked = !newSalads[index].checked;
    setSalads(newSalads);
  };
  return {
    checkSalads,
    salads,
  };
};

export default useSalads;
