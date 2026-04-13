import Image from "next/image";
import NavBar from './components/NavBar'

export default function Home() {
  return (
   <div>
      <NavBar/>
      <main className="">
        <div className="flex flex-col grid grid-cols-4 gap-4 items-center p-10 justify-center text-center">
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          <img src="https://i.pinimg.com/736x/17/57/4f/17574f50858d7a0417515a57c8c3d71d.jpg" alt="fotoHome" className="rounded-lg shadow-lg mb-6"/>
          {/* picsum.photos */}
        </div>
        <div className="flex flex-col items-center font-semibold text-white">
          <h1>SIMSIMSISMISMSIMSIMSISMMISMISISMSIMSIMS</h1>
        </div>
      </main>
    </div>
  );
}
