import React, { useState } from "react";

import { create, all } from "mathjs";
export default function Calculator() {
  const [numbers, setNumbers] = useState("");
  const handleClick = e => {
    setNumbers(numbers.concat(e.target.name));
  };
  const clear = () => {
    setNumbers("");
  };
  const backspace = () => {
    setNumbers(numbers.slice(0, -1));
  };
  const calculate = () => {
    try {
      const math = create(all);

      const result = math.evaluate(numbers);
      setNumbers(String(result));
    } catch (error) {
      setNumbers("Error");
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <div className="grid grid-cols-4 gap-2">
          <input
            type="text"
            value={numbers}
            className="col-span-4 p-2 border rounded mb-2"
            readOnly
          />
          <button name="C" onClick={clear} className="p-2 bg-gray-200 rounded">
            C
          </button>
          <button
            name="CE"
            onClick={backspace}
            className="p-2 bg-gray-200 rounded">
            CE
          </button>
          <button
            name="("
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            (
          </button>
          <button
            name=")"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            )
          </button>
          <button
            name="7"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            7
          </button>
          <button
            name="8"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            8
          </button>
          <button
            name="9"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            9
          </button>
          <button
            name="/"
            onClick={handleClick}
            className="p-2 bg-orange-400 text-white rounded">
            /
          </button>
          <button
            name="4"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            4
          </button>
          <button
            name="5"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            5
          </button>
          <button
            name="6"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            6
          </button>
          <button
            name="*"
            onClick={handleClick}
            className="p-2 bg-orange-400 text-white rounded">
            *
          </button>
          <button
            name="1"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            1
          </button>
          <button
            name="2"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            2
          </button>
          <button
            name="3"
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            3
          </button>
          <button
            name="-"
            onClick={handleClick}
            className="p-2 bg-orange-400 text-white rounded">
            -
          </button>
          <button
            name="0"
            onClick={handleClick}
            className="col-span-2 p-2 bg-gray-200 rounded">
            0
          </button>
          <button
            name="."
            onClick={handleClick}
            className="p-2 bg-gray-200 rounded">
            .
          </button>
          <button
            name="="
            onClick={calculate}
            className="p-2 bg-orange-400 text-white rounded">
            =
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="col-span-4 p-2 bg-orange-400 text-white rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
