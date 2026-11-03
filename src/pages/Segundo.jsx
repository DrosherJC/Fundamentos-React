
/*

  1- useState

*/


import { useState } from "react"

const Segundo = () => {

  const [temperatura, setTemperatura] = useState(20)

  const handleReset = () =>
  {
    setTemperatura(20)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      
      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite manejar el estado dentro de un componente.
        </li>
      </ul>
        
        <div className="text-center mb-8">
        
          <h2 className="mt-4 mb-4">Temperatura actual: {temperatura} °C</h2>
        
          <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded" onClick={()=>setTemperatura(temperatura + 1)}>Subir</button>
          
          <button className="bg-red-700 text-white py-1 px-3 mx-1 rounded" onClick={handleReset}>Resetear</button>
        
          <button className="bg-blue-700 text-white py-1 px-3 rounded" onClick={()=>setTemperatura(temperatura - 1)}>Bajar</button>
        
        </div>
    </>
  )
}

export default Segundo