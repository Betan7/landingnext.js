import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Constructora Profesional</title>
        <meta name="description" content="Constructora - Diseño, Construcción e Inmobiliaria" />
      </Head>

      {/* 🔹 NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
          <Image src="/logo.jpg" alt="Logo" width={150} height={50} className="object-contain" />

          {/* Links Navbar */}
          <div className="hidden lg:flex gap-4">
            <a
              href="#nosotros"
              className="text-lg font-semibold text-black px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
            >
              Nosotros
            </a>
            
            <a
              href="#servicios"
              className="text-lg font-semibold text-black px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="text-lg font-semibold text-black px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
            >
              Proyectos
            </a>
            <a
              href="#contacto"
              className="text-lg font-semibold text-black px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-blue-500 hover:text-white transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer para que el contenido no quede debajo del navbar */}
      <div className="h-28"></div>
      <br />
      <br />
      {/* 🔹 SECCIÓN NOSOTROS */}
      <section id="nosotros" className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800">Bienvenidos a Nuestra Constructora</h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Somos una empresa líder en diseño arquitectónico, construcción e inmobiliaria, comprometida con la excelencia y la innovación en cada proyecto que emprendemos.
        </p>
        <image>
          <img className="mx-auto" src="/nosotros.png" alt="Nosotros" width={600} height={400} /></image>
      </section>
      {/* 🔹 SECCIÓN SERVICIOS */}
      <br />
      <section id="servicios" className="py-20 px-6 bg-gray-50">
  <h2 className="text-4xl font-bold text-gray-800 text-center">Nuestros Servicios</h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Tarjeta 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/servicio1.jpg"
          alt="Diseño Arquitectónico"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Diseño Arquitectónico</h3>
        <p className="text-gray-600 mb-4">Planificación y diseño de espacios funcionales y estéticos.</p>
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2h12v16H4V2z"/></svg> Desde 20 millones</span>
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/></svg> Ibagué</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">Ver detalles</button>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/servicio2.jpg"
          alt="Construcción"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Construcción</h3>
        <p className="text-gray-600 mb-4">Edificación con materiales de alta calidad y seguridad.</p>
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2h12v16H4V2z"/></svg> Desde 500 millones</span>
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/></svg> Ibagué</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">Ver detalles</button>
      </div>
    </div>

    {/* Tarjeta 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/servicio3.jpg"
          alt="Inmobiliaria"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Inmobiliaria</h3>
        <p className="text-gray-600 mb-4">Venta y alquiler de propiedades exclusivas.</p>
        <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 2h12v16H4V2z"/></svg> Desde 120 millones</span>
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"/></svg> Ibagué</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">Ver detalles</button>
      </div>
    </div>

  </div>
</section>

      {/* 🔹 SECCIÓN PROYECTOS */}
{/* 🔹 SECCIÓN PROYECTOS */}
<section id="proyectos" className="py-20 px-6 text-center bg-gray-50">
  <h2 className="text-4xl font-bold text-gray-800">Proyectos Destacados</h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Proyecto 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/proyecto1.jpg"
          alt="Proyecto 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2">Proyecto Residencial Prado</h3>
        <p className="text-gray-600">Desarrollo de huertas comunitarias, piscina y áreas verdes, diseñado para familias que buscan tranquilidad y contacto con la naturaleza.</p>
      </div>
    </div>

    {/* Proyecto 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/proyecto2.jpg"
          alt="Proyecto 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2">Proyecto Urbano Central</h3>
        <p className="text-gray-600">Edificación de apartamentos modernos con zonas comunes, parqueaderos y áreas recreativas, enfocado en jóvenes profesionales.</p>
      </div>
    </div>

    {/* Proyecto 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <div className="relative w-full h-64">
        <Image
          src="/proyecto3.jpg"
          alt="Proyecto 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2">Proyecto Villas Prado</h3>
        <p className="text-gray-600">Villas privadas con diseño contemporáneo, seguridad 24/7 y acceso a zonas deportivas y sociales para un estilo de vida exclusivo.</p>
      </div>
    </div>

  </div>
</section>

      {/* 🔹 SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">Contáctanos</h2>
        <p className="mt-4 text-gray-600">Estamos listos para construir tu proyecto.</p>
        <form className="mt-6 max-w-lg mx-auto">
          <input type="text" placeholder="Nombre" className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Mensaje" className="w-full p-4 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-500 transition">Enviar</button>
        </form>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p>&copy; 2025 Constructora - Todos los derechos reservados.</p>
      </footer>
    </>
  );
}