import { useConversion } from "../customHook/useConversion";

const Cuarto = () => {
  const { valor, setValor, tipo, setTipo, resultado, unidad, opciones } =
    useConversion();

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
        <li>
          En este ejemplo, <strong>useConversion</strong> es un hook reutilizable para realizar conversiones de temperatura, distancia y peso.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="w-80 border rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2 underline">Conversor</h2>

          <div className="my-4 text-left text-sm bg-gray-50 p-3 rounded">
            <label className="block mb-1 font-semibold">Tipo de conversión</label>
            <select
              className="w-full border rounded px-2 py-1 mb-3"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              {opciones.map((opcion) => (
                <option key={opcion.id} value={opcion.id}>
                  {opcion.etiqueta}
                </option>
              ))}
            </select>

            <label className="block mb-1 font-semibold">Valor</label>
            <input
              type="number"
              className="w-full border rounded px-2 py-1"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />

            <p className="mt-3 text-center">
              <strong>Resultado:</strong> {Number(resultado.toFixed(2))} {unidad}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cuarto;
