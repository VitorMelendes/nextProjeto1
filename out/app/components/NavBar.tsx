import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 p-4 text-white flex justify-center space-x-8 text-xl font-medium shadow-lg transition-all">
            <Link href={"/"} className="hover:text-cyan-400 hover:scale-105 transition-transform duration-300">Home</Link>
            <Link href={"/sobre"} className="hover:text-cyan-400 hover:scale-105 transition-transform duration-300">Sobre</Link>
            <Link href={"/form"} className="hover:text-cyan-400 hover:scale-105 transition-transform duration-300">Formulário</Link>
            <Link href={"/galeria"} className="hover:text-cyan-400 hover:scale-105 transition-transform duration-300">Galeria</Link>
            <Link href={"/tabela"} className="hover:text-cyan-400 hover:scale-105 transition-transform duration-300">Tabela</Link>
        </nav>
    );
}