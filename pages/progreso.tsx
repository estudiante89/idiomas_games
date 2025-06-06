
import { useEffect, useState } from 'react';

export default function Progreso() {
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    const almacenados = localStorage.getItem('puntos');
    setPuntos(almacenados ? parseInt(almacenados, 10) : 0);
  }, []);

  const nivel = puntos >= 5 ? 'Avanzado' : puntos >= 2 ? 'Intermedio' : 'Inicial';

  return (
    <main style={{ padding: 20 }}>
      <h1>Tu Progreso</h1>
      <p>Puntos: {puntos}</p>
      <p>Nivel: {nivel}</p>
    </main>
  );
}
