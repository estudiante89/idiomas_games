
import { useState } from 'react';
import { useRouter } from 'next/router';

const preguntas = [
  { pregunta: '¿Cómo se dice "gato" en inglés?', opciones: ['Cat', 'Dog', 'Fish'], respuesta: 'Cat' },
  { pregunta: '¿Qué significa "house"?', opciones: ['Casa', 'Auto', 'Perro'], respuesta: 'Casa' },
  { pregunta: '¿Qué significa "carro"en ingles', opciones: ['Car' ,'horse','motorcycle'], respuesta: 'Car'},
];

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const router = useRouter();

  const manejarRespuesta = (opcion) => {
    if (opcion === preguntas[indice].respuesta) {
      setPuntos(p => p + 1);
    }
    const siguiente = indice + 1;
    if (siguiente < preguntas.length) {
      setIndice(siguiente);
    } else {
      localStorage.setItem('puntos', puntos + (opcion === preguntas[indice].respuesta ? 1 : 0));
      router.push('/progreso');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pregunta {indice + 1} de {preguntas.length}</h2>
      <p>{preguntas[indice].pregunta}</p>
      {preguntas[indice].opciones.map((op, i) => (
        <button key={i} onClick={() => manejarRespuesta(op)} style={{ display: 'block', margin: 10 }}>
          {op}
        </button>
      ))}
    </div>
  );
}
