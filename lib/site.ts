export const site = {
  name: "Andranik Harutyunyan",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  // Replace null with verified values. Only configured contacts are rendered.
  contacts: {
    telegram: null as string | null,
    github: null as string | null,
    email: null as string | null,
  },
};
export type Locale = "ru" | "en";
export const locales: Locale[] = ["ru", "en"];
export function isLocale(value: string): value is Locale {
  return value === "ru" || value === "en";
}
