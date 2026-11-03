import { useEffect, useState } from "react";

const Tercero = () => {
  const [hora, setHora] = useState(null);
  const [cargar, setCargar] = useState(false);
  const [error, setError] = useState(false);

  const getHoraApi = async () => {
    try {
      setError(false);
      const request = await fetch(
        "https://timeapi.io/api/Time/current/zone?timeZone=America/Guatemala"
      );
      const response = await request.json();
      setHora(response);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getHoraApi();
  }, [cargar]);

  const getSaludo = () => {
    if (!hora) return "";
    if (hora.hour < 12) return "Buenos días";
    if (hora.hour < 19) return "Buenas tardes";
    return "Buenas noches";
  };

  const formatHora = () => {
    if (!hora) return "";
    const minutos = String(hora.minute).padStart(2, "0");
    const segundos = String(hora.seconds).padStart(2, "0");
    return `${hora.hour}:${minutos}:${segundos}`;
  };

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          Ejemplo de efecto secundario para consultar la hora actual mediante una API y mostrar el saludo correspondiente.
        </li>
      </ul>

      <div className="flex flex-col items-center mb-8 mt-8">
        <button
          onClick={() => setCargar(!cargar)}
          className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Actualizar Hora
        </button>

        <div className="border border-black rounded-xl p-6 w-96 text-center shadow-sm">
          {error ? (
            <p className="text-red-600">No se pudo obtener la hora. Intenta de nuevo.</p>
          ) : !hora ? (
            <p className="text-gray-500">Cargando hora actual...</p>
          ) : (
            <>
              <h2 className="font-bold text-lg mb-4">{getSaludo()}</h2>

              <p className="mb-2">
                <span className="font-semibold">Hora actual:</span> {formatHora()}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Fecha:</span> {hora.date}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Zona horaria:</span> {hora.timeZone}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tercero;
