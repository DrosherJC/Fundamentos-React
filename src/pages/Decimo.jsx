/*

  1- Localstorage

*/

import { useEffect, useState } from "react"


const Decimo = () => {

  const [idioma, setIdioma] = useState(() => localStorage.getItem("idioma-preferido") || "es")

  const textos = {
    es: {
      saludo: "Hola, bienvenido(a)",
      descripcion: "Tu idioma preferido se guarda en el navegador.",
    },
    en: {
      saludo: "Hello, welcome",
      descripcion: "Your preferred language is saved in the browser.",
    },
  }

  useEffect(() => {
    localStorage.setItem("idioma-preferido", idioma)
  }, [idioma])

  const limpiarIdioma = () => {
    localStorage.removeItem("idioma-preferido")
    setIdioma("es")
  }

return (
  <>
    <h1 className="font-bold text-2xl">Localstorage</h1>

    <hr className="border-gray-400 mb-8"/>

    <ul className="list-disc pl-5">
      <li>
        LocalStorage sirve para mantener información en el navegador incluso después de recargar o cerrar la página.
      </li>
      <li>
        Los datos se guardan en pares clave–valor (como un diccionario).
      </li>
      <li>
        Solo admite strings → si se quiere guardar se debe usar JSON.stringify() y para leerlos se usa JSON.parse()
      </li>
    </ul>




    <div className="flex justify-center mb-8 mt-8">

      <div className="w-120 border rounded-lg p-4 w-80 text-center">

        <h2 className="text-lg font-semibold mb-2">{textos[idioma].saludo}</h2>

        <p className="mb-3">{textos[idioma].descripcion}</p>
        
        <p className="mb-3">Idioma actual: {idioma === "es" ? "Español" : "English"}</p>

        <button
          className={`${idioma === "es" ? "bg-blue-700" : "bg-gray-500"} text-white py-1 px-3 mx-1 rounded`}
          onClick={() => setIdioma("es")}
        >
          Español
        </button>
        <button
          className={`${idioma === "en" ? "bg-blue-700" : "bg-gray-500"} text-white py-1 px-3 mx-1 rounded`}
          onClick={() => setIdioma("en")}
        >
          English
        </button>
        <button className="bg-red-700 text-white py-1 px-3 rounded mt-4" onClick={limpiarIdioma}>Limpiar preferencia</button>
      </div>

    </div>

  </>
)
}

export default Decimo
