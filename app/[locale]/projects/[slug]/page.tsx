import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Check,
  Smartphone,
  Globe,
} from "lucide-react";
import { isLocale, locales, site } from "@/lib/site";
import { projects } from "@/data/projects";
import { translations } from "@/data/translations";
import { Contact } from "@/components/sections/contact";
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.name,
    description: p && isLocale(locale) ? p.description[locale] : undefined,
    ...(site.url
      ? {
          alternates: {
            canonical: `${site.url}/${locale}/projects/${slug}`,
            languages: {
              ru: `${site.url}/ru/projects/${slug}`,
              en: `${site.url}/en/projects/${slug}`,
            },
          },
        }
      : {}),
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const t = translations[locale];
  const ru = locale === "ru";
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const cover = p.images[0];
  return (
    <main id="main">
      <article className={`shell case-page case-v2 ${p.kind}`}>
        <Link href={`/${locale}#projects`} className="back-link">
          <ArrowLeft size={17} />
          {t.back}
        </Link>
        <div className="case-category">
          <span>
            {p.kind === "android" ? (
              <Smartphone size={14} />
            ) : (
              <Globe size={14} />
            )}{" "}
            {p.category[locale]}
          </span>
          <span className={`project-status ${p.kind}`}>{p.status[locale]}</span>
        </div>
        <h1>{p.name}</h1>
        <p className="case-intro">{p.description[locale]}</p>
        <div className="case-top-links">
          {p.store && (
            <a
              href={p.store}
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              Google Play
              <ArrowUpRight size={17} />
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              {t.demo}
              <ArrowUpRight size={17} />
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
        <div className={`case-cover ${p.kind}`}>
          <Image
            src={cover.src}
            alt={cover.alt[locale]}
            width={cover.width}
            height={cover.height}
            priority
            sizes="(max-width:760px) 100vw, 1240px"
          />
        </div>
        <p className="art-disclaimer">
          {p.kind === "android"
            ? ru
              ? "Публичный скриншот Google Play · проверено 21.10.2026"
              : "Public Google Play screenshot · verified 21 Oct 2026"
            : ru
              ? "Реальный скриншот работающего демопроекта"
              : "A real screenshot of the working demo"}
        </p>
        <div className="case-grid">
          <div className="case-story">
            <h2>{t.caseTitle}</h2>
            <p>{p.summary[locale]}</p>
            <h2>{ru ? "Задача" : "The challenge"}</h2>
            <p>{p.challenge[locale]}</p>
            <h2>{ru ? "Решение" : "The solution"}</h2>
            <p>{p.solution[locale]}</p>
            <h2>{ru ? "Что работает" : "What it does"}</h2>
            <ul className="case-features">
              {p.features[locale].map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <h2>{ru ? "Статус и границы проекта" : "Status and scope"}</h2>
            <p>{p.limitations[locale]}</p>
            {p.source && (
              <a
                href={p.source}
                className="case-source"
                target="_blank"
                rel="noreferrer"
              >
                {ru
                  ? "Источник: публичная карточка Google Play"
                  : "Source: public Google Play listing"}
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
          <aside>
            <span className="eyebrow">
              {ru ? "ДЕТАЛИ ПРОЕКТА" : "PROJECT DETAILS"}
            </span>
            <h3>{t.stack}</h3>
            <div className="skill-tags">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <h3>{ru ? "Статус" : "Status"}</h3>
            <p>{p.status[locale]}</p>
            {p.kind === "demo" && (
              <>
                <h3>{ru ? "Публикация" : "Publication"}</h3>
                <p>
                  {p.demo && p.github
                    ? ru
                      ? "Ссылки доступны выше."
                      : "Links are available above."
                    : ru
                      ? "Публичные GitHub и Live Demo добавятся после согласованной публикации. Локальная демонстрация доступна при запуске приложений."
                      : "Public GitHub and live demo links will be added after approved publication. Local demos are available when the applications are running."}
                </p>
              </>
            )}
            {p.kind === "android" && (
              <p className="case-private">
                {ru
                  ? "Исходники приложения не публикуются."
                  : "Application source code is not published."}
              </p>
            )}
          </aside>
        </div>
        {p.images.length > 1 && (
          <section className={`case-gallery ${p.kind}`} aria-label={t.screens}>
            <h2>{t.screens}</h2>
            <div>
              {p.images.map((img) => (
                <figure key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt[locale]}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width:760px) 80vw, 350px"
                  />
                  <figcaption>{img.alt[locale]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <Link
          className="next-project"
          href={`/${locale}/projects/${next.slug}`}
        >
          <span>
            <small>{t.next}</small>
            {next.name}
          </span>
          <ArrowRight />
        </Link>
      </article>
      <Contact locale={locale} />
    </main>
  );
}
