import Image from "next/image";
import Link from "next/link";

export default function Construccion() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative w-full h-80 bg-gray-900">
        <Image
          src="/servicio2.jpg"
          alt="Construcción"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Construcción</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-xl">
            Edificamos con los más altos estándares de calidad, seguridad y durabilidad.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto py-16 px-6">

        {/* Descripción */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué ofrecemos?</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Somos especialistas en la construcción de edificaciones residenciales, comerciales e
            industriales. Utilizamos materiales de primera calidad y contamos con un equipo de
            ingenieros y maestros de obra certificados para garantizar resultados excepcionales.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Incluye</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏗️", titulo: "Obra gris y blanca", desc: "Construcción completa desde cimentación hasta acabados." },
              { icon: "🔩", titulo: "Materiales certificados", desc: "Usamos únicamente materiales de alta resistencia y calidad." },
              { icon: "👷", titulo: "Personal calificado", desc: "Ingenieros, arquitectos y maestros con amplia experiencia." },
              { icon: "📅", titulo: "Cumplimiento de plazos", desc: "Cronogramas definidos y seguimiento puntual de obra." },
              { icon: "🛡️", titulo: "Garantía de obra", desc: "Garantizamos la solidez estructural de cada proyecto." },
              { icon: "📊", titulo: "Interventoría", desc: "Control y supervisión técnica durante toda la obra." },
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
        <section className="mb-12 bg-gray-800 rounded-2xl p-8 text-white text-center shadow-lg">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Precio desde</p>
          <p className="text-5xl font-bold">$500.000.000</p>
          <p className="mt-2 text-gray-300">Cotización personalizada según el proyecto · Ibagué</p>
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
