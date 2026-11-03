/*

  1- Zustand 

*/



import storeVolumen from "../context/storeVolumen"
import Octavo from "./Octavo"


const Septimo = () => {

  const { volumen, subirVolumen, bajarVolumen, resetVolumen } = storeVolumen()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand </h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store que cualquier componente puede usar.
        </li>
        <li>
          En este ejemplo, el volumen de la música se comparte entre el componente padre y el hijo.
        </li>
      </ul>


      <h2 className="text-blue-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-blue-500 flex-colum justify-center items-center w-120 mx-auto mb-8">

        <Octavo/>
        
        <p className="text-center">Volumen actual: {volumen}%</p>

        <div className="flex justify-center gap-2 mt-4">

          <button className="bg-gray-600 text-white py-1 px-3 rounded" onClick={bajarVolumen}>Bajar</button>

          <button className="bg-gray-600 text-white py-1 px-3 rounded" onClick={subirVolumen}>Subir</button>

          <button className="bg-gray-600 text-white py-1 px-3 rounded" onClick={resetVolumen}>Resetear</button>

        </div>

        
      </div>

    </>
  )
}

export default Septimo
