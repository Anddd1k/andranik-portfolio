export const site = {
  name: "Andranik Harutyunyan",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  // Public contacts explicitly provided and approved by the owner.
  contacts: {
    telegram: "https://t.me/Anddd1kk",
    github: null as string | null,
    email: "andharut2000@gmail.com",
  },
};
export type Locale = "ru" | "en";
export const locales: Locale[] = ["ru", "en"];
export function isLocale(value: string): value is Locale {
  return value === "ru" || value === "en";
}
