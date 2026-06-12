import React, { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [range, setRange] = useState(6);

  const [input, setinput] = useState("");

  const [checkSymbols, setcheckSymbols] = useState("");

  const [checkDigits, setcheckDigits] = useState("");

  const myRef = useRef(null);

  useEffect(() => {
    function conversion() {
      const str = "a!b3cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const number = "1234567890123";
      const char = "!@#$!!@#$!!@#$!!@#$!!@#$!!@#$!!@#$!";

      let allValues = str + number + char;

      const lengthOfValues = 20;

      for (let i = 0; i <= lengthOfValues; i++) {
        const mixing = Math.floor(Math.random() * allValues.length);

        allValues += allValues[mixing];
        setinput(allValues);
        setcheckSymbols(allValues);
        setcheckDigits(allValues);
      }

      console.log(allValues);
    }
    conversion();
  }, []);

  let inputValues = input.slice(0, `${parseInt(range)}`);

  function handleCharactersCheck(e, input, checkSymbols) {
    const check = e.target.checked;

    if (!check) {
      setinput(input.replace(/[^0-9a-zA-Z]/g, ""));
    } else {
      setinput(checkSymbols);
    }
  }

  function handleDigitsCheck(e, input, checkDigits) {
    const check = e.target.checked;
    if (check) {
      setinput(checkDigits);
    } else {
      setinput(input.replace(/[0-9]/g, ""));
    }
  }

  function handleSlider(e) {
    setRange(e.target.value);
  }
  function copyHandler() {
    navigator.clipboard.writeText(myRef.current.value);
  }

  return (
    <>
      <section>
        <div className="flex flex-col gap-y-2 bg-blue-900 w-xl mx-auto my-10 p-10 ">
          <h1 className="text-3xl text-center font-bold text-gray-400">
            Password Generator
          </h1>
          <div className="flex justify-center items-center ">
            <input
              value={inputValues}
              className="bg-gray-400 w-full p-2 rounded-s-md text-gray-900"
              type="text"
              placeholder="Type Your Password"
              ref={myRef}
              readOnly
            />
            <button
              onClick={copyHandler}
              className="py-3 px-3 text-xs rounded-e-md bg-amber-400 hover:bg-amber-300"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-row justify-around gap-x-2 bg-blue-950 p-2 rounded-md">
            <div className="flex items-center gap-x-2 px-2">
              <input
                id="range"
                type="range"
                min={6}
                max={100}
                value={range}
                onChange={(e) => handleSlider(e)}
              />
              <label className="text-amber-700" htmlFor="range">
                {range}
              </label>
            </div>

            <div className="flex gap-x-2 items-center">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                name="number"
                id="number"
                onClick={(e) => handleDigitsCheck(e, input, checkDigits)}
              />
            </div>

            <div className="flex gap-x-2 items-center">
              <label htmlFor="character">character</label>
              <input
                type="checkbox"
                name="character"
                id="character"
                onClick={(e) => handleCharactersCheck(e, input, checkSymbols)
                
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
