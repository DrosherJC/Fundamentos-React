import { useEffect, useState } from "react";

const Tercero = () => {
  const [orden, setOrden] = useState(null);
  const [cargar, setCargar] = useState(false);

  const getOrdenApi = async () => {
    const id = Math.floor(Math.random() * 10) + 1;
    const request = await fetch(`https://dummyjson.com/carts/${id}`);
    const response = await request.json();
    setOrden(response);
  };

  useEffect(() => {
    getOrdenApi();
  }, [cargar]);

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Ejemplo de efecto secundario para consultar la información de un pedido en la base de datos mediante la API.
        </li>
      </ul>

      <div className="flex flex-col items-center mb-8 mt-8">
        <button
          onClick={() => setCargar(!cargar)}
          className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Consultar Otra Orden
        </button>

        <div className="border border-black rounded-xl p-6 w-96 text-left shadow-sm">
          {!orden ? (
            <p className="text-center text-gray-500">Cargando datos de la orden...</p>
          ) : (
            <>
              <h2 className="text-center font-bold text-lg mb-4">
                Orden de Compra #{orden.id}
              </h2>

              <p className="mb-2">
                <span className="font-semibold">ID Usuario:</span> {orden.userId}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Items Totales:</span> {orden.totalQuantity}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Subtotal:</span> ${orden.total}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Total con Descuento:</span> ${orden.discountedTotal}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Producto Principal:</span>{" "}
                {orden.products?.[0]?.title ?? "N/A"}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tercero;