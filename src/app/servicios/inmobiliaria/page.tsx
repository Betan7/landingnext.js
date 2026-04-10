import Image from "next/image";
import Link from "next/link";

export default function Inmobiliaria() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative w-full h-80 bg-emerald-900">
        <Image
          src="/servicio3.jpg"
          alt="Inmobiliaria"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Inmobiliaria</h1>
          <p className="mt-4 text-emerald-200 text-lg max-w-xl">
            Encuentra la propiedad perfecta para vivir o invertir en Ibagué.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto py-16 px-6">

        {/* Descripción */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué ofrecemos?</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nuestro portafolio inmobiliario cuenta con propiedades exclusivas en las mejores zonas
            de Ibagué. Ya sea que busques comprar, vender o arrendar, te acompañamos en cada paso
            con asesoría experta y procesos transparentes.
          </p>
        </section>

        {/* Beneficios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Incluye</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏠", titulo: "Venta de propiedades", desc: "Casas, apartamentos y lotes en las mejores ubicaciones." },
              { icon: "🔑", titulo: "Arriendo", desc: "Propiedades en arriendo con todos los servicios incluidos." },
              { icon: "📜", titulo: "Asesoría jurídica", desc: "Acompañamiento legal en escrituración y trámites notariales." },
              { icon: "💰", titulo: "Crédito hipotecario", desc: "Te orientamos con las mejores opciones de financiación." },
              { icon: "📍", titulo: "Zonas exclusivas", desc: "Propiedades en sectores estratégicos de Ibagué." },
              { icon: "🔍", titulo: "Avalúo de propiedades", desc: "Valoración profesional de tu inmueble al precio justo." },
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
        <section className="mb-12 bg-emerald-700 rounded-2xl p-8 text-white text-center shadow-lg">
          <p className="text-emerald-200 text-sm uppercase tracking-widest mb-2">Precio desde</p>
          <p className="text-5xl font-bold">$120.000.000</p>
          <p className="mt-2 text-emerald-100">Cotización personalizada según la propiedad · Ibagué</p>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contacto"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition text-center"
          >
            Solicitar información
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
