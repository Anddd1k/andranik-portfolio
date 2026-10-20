import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home } from "@/components/sections/home";
import { isLocale, site } from "@/lib/site";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return site.url
    ? {
        alternates: {
          canonical: `${site.url}/${locale}`,
          languages: { ru: `${site.url}/ru`, en: `${site.url}/en` },
        },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Home locale={locale} />;
}
