import "./styles.css";
import Checkboxes from "./components/Checkboxes";
import { useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Blueberry",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Tropical",
    children: [
      {
        id: 9,
        name: "Mango",
      },
      {
        id: 10,
        name: "Banana",
      },
    ],
  },
  {
    id: 11,
    name: "Apple",
  },
];

export default function App() {
  const [checked, setChecked] = useState({});

  return (
    <div className="App">
      <h1>Check Boxes</h1>
      <Checkboxes
        data={checkboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
