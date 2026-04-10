"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ["nosotros", "servicios", "proyectos", "contacto"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`navbar-root ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="navbar-inner">
          {/* ── Logo ── */}
          <a href="#" className="navbar-logo" aria-label="Inicio">
            <Image
              src="/logo.jpg"
              alt="Logo empresa"
              width={130}
              height={44}
              className="navbar-logo-img"
              priority
            />
          </a>

          {/* ── Desktop links ── */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
                  >
                    {label}
                    <span className="navbar-link-indicator" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── CTA button ── */}
          <a href="#contacto" className="navbar-cta" id="navbar-cta-btn">
            <span>Cotizar Proyecto</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* ── Mobile hamburger ── */}
          <button
            className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            id="navbar-hamburger-btn"
          >
            <span className="bar bar-top" />
            <span className="bar bar-mid" />
            <span className="bar bar-bot" />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`mobile-drawer ${menuOpen ? "drawer-open" : "drawer-closed"}`}
        aria-hidden={!menuOpen}
        id="mobile-nav-drawer"
      >
        <ul className="drawer-links" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleLinkClick}
                  className={`drawer-link ${active === id ? "drawer-link-active" : ""}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#contacto" onClick={handleLinkClick} className="drawer-cta" id="drawer-cta-btn">
          Cotizar Proyecto →
        </a>
      </div>

      {/* ── Mobile overlay backdrop ── */}
      {menuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
