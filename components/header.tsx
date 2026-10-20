"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import type { Locale } from "@/lib/site";
import { translations } from "@/data/translations";
const ids = ["services", "projects", "about", "process"];
export function Header({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const other = locale === "ru" ? "en" : "ru";
  const languagePath = pathname.replace(/^\/(ru|en)(?=\/|$)/, `/${other}`);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="header">
        <div className="shell nav-shell">
          <Link
            href={`/${locale}`}
            className="brand"
          >
            <span className="brand-mark" aria-hidden="true">
              a<span>.</span>
            </span>
            <span>
              Andranik
              <br />
              <strong>
                Harutyunyan<span className="blue">.</span>
              </strong>
            </span>
          </Link>
          <nav
            className="desktop-nav"
            aria-label={
              locale === "ru" ? "Основная навигация" : "Main navigation"
            }
          >
            {t.nav.map((n, i) => (
              <Link key={n} href={`/${locale}#${ids[i]}`}>
                {n}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Link
              href={languagePath}
              hrefLang={other}
              className="language"
              aria-label={
                locale === "ru" ? "RU/EN: переключить язык на английский" : "RU/EN: switch language to Russian"
              }
            >
              <span className={locale === "ru" ? "selected" : ""}>RU</span>
              <span className="divider">/</span>
              <span className={locale === "en" ? "selected" : ""}>EN</span>
            </Link>
            <Link className="nav-cta" href={`/${locale}#contact`}>
              {t.talk}
              <ArrowUpRight size={15} />
            </Link>
            <button
              ref={toggle}
              className="menu-toggle"
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label={
              locale === "ru" ? "Мобильная навигация" : "Mobile navigation"
            }
          >
            {t.nav.map((n, i) => (
              <Link
                onClick={() => setOpen(false)}
                key={n}
                href={`/${locale}#${ids[i]}`}
              >
                {n}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href={`/${locale}#contact`}>
              {t.talk}
              <ArrowUpRight size={18} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
