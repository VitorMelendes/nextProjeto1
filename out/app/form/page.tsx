import Image from "next/image";
import NavBar from '../components/NavBar';

export default function Form() {
  return (
   <div>
      <NavBar/>
      <main className="flex flex-col items-center justify-center p-10">
        <div className="mb-3">
            <h1 className="text-5xl p-4 mb-3">Formulário</h1>
        </div>
        <form action="" method="post" className="border border-purple-700 p-10 rounded-lg">
            <input type="text" placeholder="Digite seu nome" className="border p-2 rounded mb-4 w-full"/> <br />
            <input type="text" placeholder="Digite sua e-mail" className="border p-2 rounded mb-4 w-full"/> <br />
            <textarea name="" placeholder="Digite sua mensagem" className="border p-2 rounded w-full mb-4" id=""></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Enviar</button>
        </form>
      </main>
    </div>
  );
}
