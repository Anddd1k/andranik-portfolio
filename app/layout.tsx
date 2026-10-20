import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Andranik Harutyunyan — Developer",
  description: "Сайты, Telegram-боты и автоматизация процессов.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
