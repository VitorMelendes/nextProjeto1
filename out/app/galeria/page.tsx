import Image from "next/image";
import NavBar from '../components/NavBar';

export default function galeria() {

  const fotos = [
    "/neymar_aura.jpg",
    "/cat_rose.jpg",
    "/chad_cat.jpg",
    "/dog_toilet.jpg",
    "/creepy_cat.jpg",
    "/cute_cat_paws.jpg"
  ];

  const nomes = [
    "Neymar perdeu aura",
    "Gato romântico",
    "Gato Chad",
    "Cachorro no banheiro",
    "Gato bizarro",
    "Gatinho fofo"
  ]
  
  return (
   <div>
      <NavBar/>
      <main>
        <h1 className="flex flex-col items-center font-semibold text-white mt-7">Galeria de imagens</h1>
        <div className="flex flex-col grid grid-cols-4 gap-2 items-center p-10 justify-center text-center rounded-lg">
        {fotos.map((foto, index) => (
          <div key={index} className="flex flex-col items-center">
            <img key={index} src={foto} alt={`Foto ${index + 1}`} className="rounded-lg shadow-lg mb-6 transition-transform duration-500 hover:scale-105 h-70"/>
            <p className="text-white text-sm">{nomes[index]}</p>
          </div>
            ))}
          {/* picsum.photos */}
        </div>
      </main>
    </div>
  );
}
