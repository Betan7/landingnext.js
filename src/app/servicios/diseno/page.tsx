import Image from "next/image";
import Link from "next/link";

export default function DisenoArquitectonico() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative w-full h-80 bg-blue-900">
        <Image
          src="/servicio1.jpg"
          alt="Diseño Arquitectónico"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Diseño Arquitectónico</h1>
          <p className="mt-4 text-blue-200 text-lg max-w-xl">
            Creamos espacios que combinan funcionalidad, estética y sostenibilidad.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto py-16 px-6">

        {/* Descripción */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué ofrecemos?</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nuestro servicio de Diseño Arquitectónico abarca desde la conceptualización hasta la
            entrega de planos ejecutivos. Trabajamos con los mejores arquitectos para desarrollar
            soluciones que se adapten a tus necesidades, presupuesto y estilo de vida.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Incluye</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏛️", titulo: "Diseño personalizado", desc: "Cada proyecto es único, adaptado a tu visión y necesidades." },
              { icon: "📐", titulo: "Planos arquitectónicos", desc: "Planos técnicos detallados para construcción y permisos." },
              { icon: "🌿", titulo: "Diseño sostenible", desc: "Incorporamos soluciones ecológicas y eficientes energéticamente." },
              { icon: "💡", titulo: "Renderizado 3D", desc: "Visualiza tu proyecto antes de construir con renders fotorrealistas." },
              { icon: "📋", titulo: "Gestión de permisos", desc: "Te acompañamos en el proceso de licencias y normativas." },
              { icon: "🤝", titulo: "Asesoría continua", desc: "Soporte durante todo el proceso constructivo." },
            ].map((item) => (
              <div key={item.titulo} className="bg-white rounded-xl shadow p-6 flex gap-4 items-start hover:shadow-lg transition">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{item.titulo}</h3>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Precio */}
        <section className="mb-12 bg-blue-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Precio desde</p>
          <p className="text-5xl font-bold">$20.000.000</p>
          <p className="mt-2 text-blue-100">Cotización personalizada según el proyecto · Ibagué</p>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contacto"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition text-center"
          >
            Solicitar cotización
          </Link>
          <Link
            href="/"
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition text-center"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
