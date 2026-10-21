"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Code2, Send } from "lucide-react";
import { site, type Locale } from "@/lib/site";
import { translations } from "@/data/translations";
export function Contact({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 4000);
    return () => clearTimeout(timer);
  }, [copied]);
  const contacts = [
    {
      key: "telegram",
      label: "Telegram",
      value: site.contacts.telegram,
      icon: Send,
    },
    {
      key: "github",
      label: "GitHub",
      value: site.contacts.github,
      icon: Code2,
    },
    { key: "email", label: "Email", value: site.contacts.email, icon: Mail },
  ].filter((c) => c.value);
  async function copy(value: string) {
    setCopied(null);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setError(false);
    } catch {
      setCopied(null);
      setError(true);
    }
  }
  return (
    <section className="contact-section section" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">{t.contactTag}</p>
          <h2 className="contact-title">
            {t.contactTitle.split("\n").map((line, i) => (
              <span key={line} className={i === 1 ? "blue" : ""}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="section-copy">{t.contactSub}</p>
        </div>
        <div className="contact-box">
          {contacts.length ? (
            contacts.map((c) => (
              <div className="contact-row" key={c.key}>
                <a
                  href={c.key === "email" ? `mailto:${c.value}` : c.value!}
                  target={c.key === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <c.icon size={20} />
                  <span>
                    {c.label}
                    <small>{c.key === "telegram" ? c.value!.replace("https://t.me/", "@") : c.value}</small>
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                {c.key === "email" && <button
                  className="copy-email"
                  type="button"
                  aria-label={`${copied === c.value ? t.copied : t.copy} ${c.label}`}
                  onClick={() => copy(c.value!)}
                >
                  {copied === c.value ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                  <span>{copied === c.value ? t.copied : t.copy} email</span>
                </button>}
              </div>
            ))
          ) : (
            <>
              <span className="contact-icon">
                <Send size={24} />
              </span>
              <h3>{t.pending}</h3>
              <p>{t.pendingText}</p>
            </>
          )}
          <p className="contact-feedback" role="status" aria-atomic="true">
            {error ? t.copyError : copied ? (locale === "ru" ? "Email скопирован" : "Email copied") : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
