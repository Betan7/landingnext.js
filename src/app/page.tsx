import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="section-label animate-fadeInDown">🏗️ Constructora Líder en Ibagué</span>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-tight mt-4 animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Construimos tu{" "}
            <span className="gradient-text">Visión</span>
            <br />con Excelencia
          </h1>
          <p
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.25s" }}
          >
            Diseño arquitectónico, construcción e inmobiliaria de primera calidad.
            Más de 15 años transformando espacios en Colombia.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#proyectos" className="btn-primary">
              Ver Proyectos →
            </a>
            <a href="#contacto" className="btn-outline">
              Solicitar Cotización
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeInUp"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              { num: "+200", label: "Proyectos" },
              { num: "+15", label: "Años de experiencia" },
              { num: "+500", label: "Clientes felices" },
              { num: "100%", label: "Garantía de obra" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <p className="text-3xl font-black text-white">{s.num}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ── */}
      <section id="nosotros" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="animate-slideInLeft">
            <span className="section-label">Quiénes Somos</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mt-2">
              Construimos más que edificios,{" "}
              <span className="gradient-text">construimos hogares</span>
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Somos una empresa líder en diseño arquitectónico, construcción e inmobiliaria,
              comprometida con la excelencia y la innovación en cada proyecto que emprendemos.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Arquitectos e ingenieros certificados",
                "Materiales de primera calidad",
                "Cumplimiento de plazos y presupuestos",
                "Atención personalizada en cada etapa",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#servicios" className="btn-primary mt-10 inline-flex">
              Ver nuestros servicios →
            </a>
          </div>

          {/* Imagen */}
          <div className="relative animate-slideInRight">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <img
              src="/nosotros.png"
              alt="Nosotros"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
            />
            {/* Badge flotante */}
            <div className="absolute -bottom-6 -left-6 glass bg-white/90 rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-black text-blue-600">+15</p>
              <p className="text-xs text-gray-600 font-semibold">Años de experiencia</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Lo que hacemos</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Nuestros <span className="gradient-text">Servicios</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Ofrecemos soluciones integrales para hacer realidad cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/servicio1.jpg",
                alt: "Diseño Arquitectónico",
                title: "Diseño Arquitectónico",
                desc: "Planificación y diseño de espacios funcionales, estéticos y sostenibles adaptados a tu visión.",
                price: "Desde $20M",
                href: "/servicios/diseno",
                color: "from-blue-600/80 to-blue-900/80",
                icon: "📐",
              },
              {
                src: "/servicio2.jpg",
                alt: "Construcción",
                title: "Construcción",
                desc: "Edificación con materiales de alta calidad, equipo certificado y garantía de estructura.",
                price: "Desde $500M",
                href: "/servicios/construccion",
                color: "from-slate-600/80 to-slate-900/80",
                icon: "🏗️",
              },
              {
                src: "/servicio3.jpg",
                alt: "Inmobiliaria",
                title: "Inmobiliaria",
                desc: "Venta y alquiler de propiedades exclusivas con asesoría jurídica y financiera completa.",
                price: "Desde $120M",
                href: "/servicios/inmobiliaria",
                color: "from-emerald-600/80 to-emerald-900/80",
                icon: "🏠",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl overflow-hidden bg-gray-900 border border-white/5 card-hover"
              >
                {/* Imagen con zoom y overlay */}
                <div className="relative h-52 overflow-hidden img-zoom">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <span className="absolute top-4 left-4 text-2xl bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5">
                    {s.icon}
                  </span>
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {s.price}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center text-gray-500 text-xs mb-5 gap-4">
                    <span>📍 Ibagué, Colombia</span>
                  </div>
                  <Link
                    href={s.href}
                    target="_blank"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition text-sm"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Portafolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Cada proyecto es el resultado de pasión, detalle y compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/proyecto1.jpg",
                title: "Proyecto Residencial Prado",
                tag: "Residencial",
                tagColor: "bg-green-100 text-green-700",
                desc: "Huertas comunitarias, piscina y áreas verdes para familias que buscan tranquilidad.",
              },
              {
                src: "/proyecto2.jpg",
                title: "Proyecto Urbano Central",
                tag: "Apartamentos",
                tagColor: "bg-blue-100 text-blue-700",
                desc: "Apartamentos modernos con zonas comunes y áreas recreativas para jóvenes profesionales.",
              },
              {
                src: "/proyecto3.jpg",
                title: "Proyecto Villas Prado",
                tag: "Exclusivo",
                tagColor: "bg-purple-100 text-purple-700",
                desc: "Villas privadas con diseño contemporáneo, seguridad 24/7 y zonas deportivas.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer border border-gray-100"
              >
                {/* Imagen con overlay al hover */}
                <div className="relative h-60 overflow-hidden img-zoom">
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white text-sm font-medium">{p.desc}</p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-24 px-6 bg-gray-950 relative overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="section-label animate-fadeInUp">Hablemos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            ¿Listo para construir tu{" "}
            <span className="gradient-text">proyecto?</span>
          </h2>
          <p className="mt-4 text-gray-400 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Cuéntanos tu idea y te contactaremos con una propuesta personalizada.
          </p>

          <form
            className="mt-10 bg-gray-900 border border-white/10 rounded-2xl p-8 text-left shadow-2xl animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Correo</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Teléfono</label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div className="mb-6">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Mensaje</label>
              <textarea
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 text-base shadow-lg shadow-blue-500/25"
            >
              Enviar mensaje →
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + desc */}
          <div>
            <Image src="/logo.jpg" alt="Logo" width={120} height={40} className="object-contain mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Empresa líder en diseño, construcción e inmobiliaria en Ibagué, Colombia.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold mb-4">Navegación</p>
            <ul className="space-y-2">
              {[["#nosotros","Nosotros"],["#servicios","Servicios"],["#proyectos","Proyectos"],["#contacto","Contacto"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-gray-500 hover:text-white text-sm transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white font-semibold mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>📍 Ibagué, Tolima, Colombia</li>
              <li>📞 +57 300 000 0000</li>
              <li>✉️ info@constructora.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 Constructora. Todos los derechos reservados.</p>
          <p className="text-gray-700 text-xs">Diseñado con ❤️ en Ibagué</p>
        </div>
      </footer>
    </>
  );
}