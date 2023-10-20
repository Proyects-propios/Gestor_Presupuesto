export const formatearCantidad = cantidad => {
  const cantidadFormateada = Math.floor(Number(cantidad));
  const cantidadConSignoDolar = cantidadFormateada.toLocaleString('es-ES', {
    useGrouping: true, // Habilita el uso de separadores de miles
    maximumFractionDigits: 0, // No muestra decimales
    currency: 'COP',
  });

  // Agrega el signo de dólar a la cantidad formateada
  return '$' + cantidadConSignoDolar;
};

export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  return fechaNueva.toLocaleDateString('es-ES', options);
};

export const generarId = () => {
  const random = Math.random().toString(36).substring(2, 11);
  const fecha = Date.now().toString(36);

  return random + fecha;
};
