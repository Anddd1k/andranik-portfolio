import { SelectedWork } from "./selected-work";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Code2,
  Send,
  Workflow,
  Sparkles,
  Braces,
} from "lucide-react";
import type { Locale } from "@/lib/site";
import { translations } from "@/data/translations";
import { Reveal } from "@/components/ui/reveal";
import { SolutionVisual } from "@/components/ui/solution-visual";
import { Contact } from "./contact";
const icons = [Code2, Send, Workflow, Sparkles];
export function Home({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return (
    <main id="main">
      <section className="hero shell">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="blue-line" />
            {t.eyebrow}
          </p>
          <p className="hero-role">{t.role}</p>
          <h1>
            {t.hero.map((line, i) => (
              <span key={line} className={i === 1 ? "gradient-text" : ""}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="hero-sub">{t.sub}</p>
          <div className="hero-actions">
            <Link href="#contact" className="button primary">
              {t.talk}
              <ArrowUpRight size={18} />
            </Link>
            <Link href="#projects" className="button secondary">
              {t.work}
              <ArrowDown size={17} />
            </Link>
          </div>
          <p className="hero-note">
            <span className="live-dot" />
            {t.heroNote}
          </p>
        </div>
        <SolutionVisual locale={locale} />
        <div className="hero-bottom">
          <span>01 — 05</span>
          <span>{t.ribbon}</span>
          <a href="#services" aria-label={t.nav[0]}>
            <ArrowDown size={18} />
          </a>
        </div>
      </section>
      <div className="tech-strip">
        <div className="shell">
          <span>Python</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Telegram API</span>
          <span>AI Integration</span>
          <span>React</span>
        </div>
      </div>
      <section className="section shell" id="services">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.servicesTag}</p>
              <h2>{t.servicesTitle}</h2>
            </div>
            <p className="section-copy">{t.servicesSub}</p>
          </div>
        </Reveal>
        <div className="services-grid">
          {t.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={service[0]} className="service-card">
                <div className="service-top">
                  <span className="service-icon">
                    <Icon size={23} />
                  </span>
                  <span className="mono">0{i + 1}</span>
                </div>
                <h3>{service[0]}</h3>
                <p>{service[1]}</p>
                <p className="service-problem">{service[2]}</p>
                <div className="service-example">
                  <span />
                  <p>{service[3]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <SelectedWork locale={locale} />
      <section className="section shell about-grid" id="about">
        <Reveal>
          <p className="eyebrow">{t.aboutTag}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="about-text">{t.aboutText}</p>
          <p className="about-text muted">{t.aboutText2}</p>
          <div className="skill-tags">
            {["Python", "Web", "Telegram", "AI", "Mobile"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="about-panel">
          <div className="about-monogram">
            ah<span>.</span>
          </div>
          <div className="about-panel-footer">
            <Braces size={24} />
            <p>
              <span>{t.aboutLabel}</span>
              {t.aboutQuote}
            </p>
          </div>
        </Reveal>
      </section>
      <section className="section process-section" id="process">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">{t.processTag}</p>
            <h2>{t.processTitle}</h2>
          </Reveal>
          <div className="process-grid">
            {t.steps.map((step, i) => (
              <Reveal key={step[0]} className="process-step">
                <div className="step-number">
                  <span>0{i + 1}</span>
                  {i < 3 && <ArrowRight size={18} />}
                </div>
                <h3>{step[0]}</h3>
                <p>{step[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact locale={locale} />
    </main>
  );
}
