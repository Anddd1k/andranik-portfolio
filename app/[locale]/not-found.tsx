"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { translations } from "@/data/translations";
export default function NotFound() {
  const locale = usePathname().startsWith("/en") ? "en" : "ru";
  const t = translations[locale];
  return (
    <main id="main" className="shell case-page">
      <p className="eyebrow">404</p>
      <h1>{t.notfound}</h1>
      <Link className="button primary" href={`/${locale}`}>
        {t.home}
      </Link>
    </main>
  );
}
