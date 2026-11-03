/*

  1- Zustand 

*/

import storeVolumen from "../context/storeVolumen"



const Octavo = () => {

  const { volumen, setVolumen } = storeVolumen()

  return (
    <>

      <h2 className="text-purple-700">Hijo</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">

          <p className="mb-3">Volumen actual: {volumen}%</p>

          <input
            type="range"
            min="0"
            max="100"
            value={volumen}
            onChange={(e) => setVolumen(Number(e.target.value))}
            className="w-full"
          />

        </div>

      </div>

    </>
  )
  }

export default Octavo
