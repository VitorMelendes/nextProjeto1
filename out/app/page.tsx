import NavBar from './components/NavBar'
import Link from 'next/link';

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen">
      <NavBar/>
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="flex flex-col items-center mt-10">
          <Link href="/galeria" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors text-xl">
            Ir para a Galeria
          </Link>
        </div>
      </main>
    </div>
  );
}
