import Image from "next/image";
import NavBar from '../components/NavBar';

export default function galeria() {

  const fotos = [
    "https://i.pinimg.com/736x/86/05/d7/8605d72ea5e448cd595b873e4dd8c792.jpg",
    "https://i.pinimg.com/736x/c8/93/11/c8931163a756a0f879b2fdae4712038f.jpg",
    "https://i.pinimg.com/736x/bf/9a/8a/bf9a8a9d275aafb028353aa8c271b385.jpg", // foto 3 diferente
    "https://i.pinimg.com/1200x/da/2b/47/da2b473531d7f3508694669e0c312747.jpg", // foto 4 diferente
    "https://i.pinimg.com/736x/f5/4d/b3/f54db338a03870858fabd42e6278f106.jpg", 
    "https://i.pinimg.com/736x/99/6f/24/996f24b2e876f8254067f69771469be8.jpg", // foto 6 diferente
    "https://i.pinimg.com/736x/87/19/ea/8719ea37228c995bf5d38385b121d35b.jpg",  // foto 7 diferente
    "https://i.pinimg.com/736x/17/e2/41/17e241e001b3f5a4a4032af8bcd92cd5.jpg",
    "https://i.pinimg.com/736x/88/53/ef/8853ef7a89b1b90f4083b2ed8b89b58b.jpg",
    "https://i.pinimg.com/736x/34/30/49/343049dfb200b332c50a72c3b69b4144.jpg",
    "/felca.png",
    "https://i.pinimg.com/1200x/be/5c/9e/be5c9e26b67867845b8ef94023be0e13.jpg"
  ];

  const nomes = [
    "Leon romântico",
    "Aizen cat",
    "Ni",
    "Gato macabro",
    "Programming",
    "Programming two",
    "KKKKKK",
    "Peak fiction",
    "Reze",
    "Reze plush",
    "Felca",
    "Sidinei",
    "Cassio",    
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
