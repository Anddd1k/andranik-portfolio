import Link from "next/link";
export default function NotFound() {
  return (
    <html lang="ru">
      <body>
        <main className="shell case-page">
          <p className="eyebrow">404</p>
          <h1>Страница не найдена</h1>
          <Link className="button primary" href="/ru">
            На главную
          </Link>
          <Link className="button secondary" href="/en">
            Home in English
          </Link>
        </main>
      </body>
    </html>
  );
}
