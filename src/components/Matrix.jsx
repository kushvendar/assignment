import { useState } from "react";

export default function Matrix() {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickOrder([...clickOrder, index]);

      if (index === 8) {
        changeToOrangeSequentially([...clickOrder, index]);
      }
    }
  };

  const changeToOrangeSequentially = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[idx] = "orange";
          return newGrid;
        });
      }, i * 500); // Delay to show sequence
    });
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-40 mx-auto mt-10">
      {grid.map((color, index) => (
        <div
          key={index}
          className="w-12 h-12 border cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
