import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Smartphone } from "lucide-react";
import type { Locale } from "@/lib/site";
import { releases } from "@/lib/releases";
import { projects } from "@/data/projects";
import { translations } from "@/data/translations";
import { Reveal } from "@/components/ui/reveal";
export function SelectedWork({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const ru = locale === "ru";
  return (
    <section className="section projects-section" id="projects">
      <div className="shell">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.projectsTag}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p className="section-copy">{t.projectsSub}</p>
          </div>
        </Reveal>
        <div className="projects-grid selected-v2">
          {projects.map((p) => (
            <Reveal key={p.slug} className="project-card">
              <Link
                href={`/${locale}/projects/${p.slug}`}
                className="project-link"
              >
                <div className={`project-cover ${p.kind}`}>
                  <Image
                    src={p.images[0].src}
                    alt={p.images[0].alt[locale]}
                    fill
                    sizes="(max-width:760px) 100vw, 420px"
                  />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span>{p.category[locale]}</span>
                    <span className={`project-status ${p.kind}`}>
                      {p.kind === "demo"
                        ? ru
                          ? "ДЕМОПРОЕКТ"
                          : "DEMO PROJECT"
                        : "GOOGLE PLAY"}
                    </span>
                  </div>
                  <div className="project-title-row">
                    <h3>{p.name}</h3>
                    <span className="round-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                  <p>{p.description[locale]}</p>
                  <div className="skill-tags">
                    {p.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    <span>{p.status[locale]}</span>
                    <span>
                      {t.detail}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
              <div className="project-resource-links">
                {p.store && (
                  <a href={p.store} target="_blank" rel="noreferrer">
                    Google Play
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    {t.demo}
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {p.kind === "demo" && !p.demo && !p.github && (
                  <span>
                    {ru ? "Публикация готовится" : "Publication pending"}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="android-promo">
          <span className="android-promo-icon">
            <Smartphone size={24} />
          </span>
          <div>
            <p className="eyebrow">
              {ru
                ? "ANDROID-ПРИЛОЖЕНИЯ В GOOGLE PLAY"
                : "ANDROID APPS ON GOOGLE PLAY"}
            </p>
            <h3>
              And1k<span className="blue">.</span>
            </h3>
            <p>
              {ru
                ? "Опыт создания и публикации Android-приложений: SmokeReset с React-интерфейсом, персональным учётом привычки и локальным хранением данных."
                : "Experience building and publishing Android apps: SmokeReset combines a React interface, personal habit tracking and local data storage."}
            </p>
          </div>
          <a
            href={releases.smokereset.play}
            className="button secondary"
            target="_blank"
            rel="noreferrer"
          >
            {ru ? "SmokeReset в Google Play" : "SmokeReset on Google Play"}
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
