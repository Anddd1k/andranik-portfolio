import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/site";
import { translations } from "@/data/translations";
export function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <footer className="shell footer">
      <div>
        <span className="footer-name">
          Andranik Harutyunyan<span className="blue">.</span>
        </span>
        <p>{t.footer}</p>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} · {t.rights}
      </span>
      <Link href="#top">
        {t.top}
        <ArrowUpRight size={16} />
      </Link>
    </footer>
  );
}
