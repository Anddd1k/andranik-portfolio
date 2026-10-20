import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, site, locales } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/ui/motion-provider";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const ru = locale === "ru";
  return {
    metadataBase: new URL(site.url ?? "http://127.0.0.1:3000"),
    icons: { icon: "/icon.svg" },
    title: {
      default: "Andranik Harutyunyan — Developer",
      template: "%s | Andranik Harutyunyan",
    },
    description: ru
      ? "Разработка сайтов, Telegram-ботов, Python-автоматизаций и AI-решений. От идеи до работающего продукта."
      : "Websites, Telegram bots, Python automation and AI integration. From an idea to a working product.",
    openGraph: {
      title: "Andranik Harutyunyan — Developer",
      description: ru
        ? "Цифровые решения для ваших задач"
        : "Digital solutions for your next move",
      type: "website",
      locale: ru ? "ru_RU" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    robots: site.url
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-latin-5.3.0.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {locale === "ru" && (
          <link
            rel="preload"
            href="/fonts/manrope-cyrillic-5.3.0.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body id="top">
        <MotionProvider>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </MotionProvider>
      </body>
    </html>
  );
}
