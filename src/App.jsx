export default function App() {
  return (
    <>

      <section>
        <div className="flex flex-col gap-y-2 bg-blue-900 w-xl mx-auto my-10 p-10 ">
          <h1 className="text-3xl text-center font-bold text-gray-400">Password Generator</h1>
          <div className="flex justify-center items-center ">
            <input className="bg-gray-400 w-full p-2 rounded-s-md text-gray-900" type="text" placeholder="Type Your Password" />
            <button className="py-3 px-3 text-xs rounded-e-md bg-amber-400 hover:bg-amber-300">
              Copy
            </button>
          </div>
          <div className="flex flex-row justify-around gap-x-2 bg-blue-950 p-2 rounded-md">
            <div>
              <input  type="range" min={6} max={100}  />
            </div>

            <div className="flex gap-x-2 items-center">
              <label htmlFor="number">Number</label>
              <input type="checkbox" name="number" id="number" />
            </div>

            <div className="flex gap-x-2 items-center">
              <label htmlFor="character">character</label>
              <input type="checkbox" name="character" id="character" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
