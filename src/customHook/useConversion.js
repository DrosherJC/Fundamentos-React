import { useState } from "react";

const conversiones = {
  "celsius-fahrenheit": {
    etiqueta: "Celsius -> Fahrenheit",
    unidad: "°F",
    convertir: (valor) => (valor * 9) / 5 + 32,
  },
  "fahrenheit-celsius": {
    etiqueta: "Fahrenheit -> Celsius",
    unidad: "°C",
    convertir: (valor) => ((valor - 32) * 5) / 9,
  },
  "kilometros-millas": {
    etiqueta: "Kilómetros -> Millas",
    unidad: "mi",
    convertir: (valor) => valor * 0.621371,
  },
  "millas-kilometros": {
    etiqueta: "Millas -> Kilómetros",
    unidad: "km",
    convertir: (valor) => valor / 0.621371,
  },
  "kilogramos-libras": {
    etiqueta: "Kilogramos -> Libras",
    unidad: "lb",
    convertir: (valor) => valor * 2.20462,
  },
  "libras-kilogramos": {
    etiqueta: "Libras -> Kilogramos",
    unidad: "kg",
    convertir: (valor) => valor / 2.20462,
  },
};

export function useConversion() {
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("celsius-fahrenheit");

  const opciones = Object.entries(conversiones).map(([id, conversion]) => ({
    id,
    etiqueta: conversion.etiqueta,
  }));

  const { convertir, unidad } = conversiones[tipo];
  const numero = Number(valor);
  const resultado = Number.isNaN(numero) ? 0 : convertir(numero);

  return {
    valor,
    setValor,
    tipo,
    setTipo,
    resultado,
    unidad,
    opciones,
  };
}
