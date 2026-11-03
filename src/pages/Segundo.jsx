
/*

  1- useState

*/


import { useState } from "react"

const Segundo = () => {

  const [counter, setCounter] = useState(5)

  const handleReset = () =>
  {
    setCounter(5)
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
        
          <h2 className="mt-4 mb-4">Gestión de existencias de un producto en bodega: {counter}</h2>
        
          <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded" onClick={()=>setCounter(counter + 1)}>Reabastecer</button>
          
          <button className="bg-red-700 text-white py-1 px-3 mx-1 rounded" onClick={handleReset}>Resetar</button>
        
          <button className="bg-blue-700 text-white py-1 px-3 rounded" onClick={()=>{setCounter(counter-1)}}>Vender</button>
        
        </div>
    </>
  )
}

export default Segundo