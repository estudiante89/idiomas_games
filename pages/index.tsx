
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Bienvenido a la App de Retos de Idiomas</h1>
      <p>Elige una opción para empezar:</p>
      <ul>
        <li><Link href="/quiz">Jugar Quiz</Link></li>
        <li><Link href="/progreso">Ver Progreso</Link></li>
      </ul>
    </main>
  );
}
