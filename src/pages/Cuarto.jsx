import { useState } from "react";
import { useFetch } from "../customHook/useFecth";

const Cuarto = () => {
  const [cliente, setCliente] = useState(null);
  const [barbero, setBarbero] = useState(null);

  const fetchDataBackend = useFetch();

  const getProximoCliente = async () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const data = await fetchDataBackend(`https://jsonplaceholder.typicode.com/users/${randomId}`);
    setCliente(data);
    console.log("Cliente cargado:", data);
  };

  const getBarberoDisponible = async () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    const data = await fetchDataBackend(`https://jsonplaceholder.typicode.com/users/${randomId}`);
    setBarbero(data);
    console.log("Barbero cargado:", data);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-80 border rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2 underline">Agenda del Día</h2>

          <div className="my-4 text-left text-sm bg-gray-50 p-3 rounded">
            <p className="mb-2">
              <strong>Próximo Cliente:</strong> {cliente?.name ?? "Sin consultar"}
            </p>
            <p>
              <strong>Barbero Asignado:</strong> {barbero?.name ?? "Sin consultar"}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <button
              className="bg-indigo-600 text-white py-1 px-3 rounded text-sm hover:bg-indigo-700 transition-colors"
              onClick={getProximoCliente}
            >
              Ver Cliente
            </button>
            <button
              className="bg-emerald-600 text-white py-1 px-3 rounded text-sm hover:bg-emerald-700 transition-colors"
              onClick={getBarberoDisponible}
            >
              Ver Barbero
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuarto;