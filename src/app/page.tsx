import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
      {/* 🔹 NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-md flex items-center justify-between p-6 lg:px-8">
        <div className="text-2xl font-bold">Constructora XYZ</div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#servicios" className="text-sm font-semibold text-gray-900">Servicios</a>
          <a href="#proyectos" className="text-sm font-semibold text-gray-900">Proyectos</a>
          <a href="#contacto" className="text-sm font-semibold text-gray-900">Contacto</a>
        </div>
      </nav>

      {/* 🔹 HERO SECTION */}
      <header className="relative w-full h-screen flex items-center justify-center text-center">
        <Image src="/constru.jpg" alt="constructora" layout="fill" objectFit="cover" className="z-[-1]" />
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white">
          <h1 className="text-5xl font-bold">Construimos tu Futuro</h1>
          <p className="mt-4 text-lg">Proyectos de calidad para un mejor mañana.</p>
          <a href="#contacto" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-500">
            Contáctanos
          </a>
        </div>
      </header>

      {/* 🔹 SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-4xl font-semibold">Nuestros Servicios</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Diseño Arquitectónico</h3>
            <p className="mt-4 text-gray-600">Planificación y diseño de espacios funcionales y estéticos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Construcción</h3>
            <p className="mt-4 text-gray-600">Edificación con materiales de alta calidad y seguridad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Inmobiliaria</h3>
            <p className="mt-4 text-gray-600">Venta y alquiler de propiedades exclusivas.</p>
          </div>
        </div>
      </section>

      {/* 🔹 SECCIÓN PROYECTOS */}
      <section id="proyectos" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold">Proyectos Destacados</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image src="/proyecto1.jpg" alt="Proyecto 1" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/proyecto2.jpg" alt="Proyecto 2" width={400} height={300} className="rounded-lg shadow-md" />
          <Image src="/proyecto3.jpg" alt="Proyecto 3" width={400} height={300} className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* 🔹 SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-4xl font-semibold">Contáctanos</h2>
        <p className="mt-4 text-gray-600">Estamos listos para construir tu proyecto.</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-md mb-4" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-md mb-4" />
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded-md mb-4"></textarea>
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-500">Enviar</button>
        </form>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p>&copy; 2025 Constructora  - Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
