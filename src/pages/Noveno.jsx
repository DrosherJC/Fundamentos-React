/*

  1- Rederizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"



const Noveno = () => {

  const [productos] = useState([
    { id: 1, nombre: "Laptop", precio: 7500, stock: 8 },
    { id: 2, nombre: "Mouse", precio: 150, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 300, stock: 12 },
    { id: 4, nombre: "Monitor", precio: 1800, stock: 0 },
    { id: 5, nombre: "Audífonos", precio: 450, stock: 5 },
  ])

  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0])

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
        <strong>Renderizado condicional:</strong> Permite mostrar u ocultar elementos de la interfaz según ciertas condiciones.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite mostrar múltiples elementos a partir de un array usando métodos de los arreglos.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="border rounded-lg p-4 w-120 mx-auto text-center">

          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional</h2>

          <select
            className="border rounded px-2 py-1 mb-4 w-full"
            value={productoSeleccionado.id}
            onChange={(e) => setProductoSeleccionado(productos.find((producto) => producto.id === Number(e.target.value)))}
          >
            {productos.map((producto) => (
              <option key={producto.id} value={producto.id}>{producto.nombre}</option>
            ))}
          </select>

          {productoSeleccionado.stock > 0
            ?
          (
            <p className="text-green-700 font-semibold">Disponible ({productoSeleccionado.stock} en stock)</p>
          )
            :
          (
            <p className="text-red-700 font-semibold">Agotado</p>
          )}

        </div>

      </div>

      <div className="flex justify-center mb-8">

        <div className=" border rounded-lg p-4 w-120 mx-auto">

          <h2 className="text-1xl font-bold text-left underline mb-4">Listas</h2>

          <ul className="divide-y">

            {productos.map((producto) => (

              <li key={producto.id} className="flex justify-between items-center py-2 text-left">

                <div>

                  <p className="font-semibold">{producto.nombre}</p>

                  <p className="text-sm text-gray-600">Precio: ${producto.precio} - Stock: {producto.stock}</p>

                </div>

                {producto.stock > 0 ? (

                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Disponible</span>

                ) : (

                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">Agotado</span>

                )}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </>
  )
  }

export default Noveno
