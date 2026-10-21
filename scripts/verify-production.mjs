import assert from 'node:assert/strict';

const base = new URL(process.env.VERIFY_URL || '');
assert.equal(base.protocol, 'https:', 'A real HTTPS production URL is required');
assert.ok(!['localhost', '127.0.0.1', '[::1]'].includes(base.hostname));
const origin = base.origin;
const slugs = ['', '/projects/smokereset', '/projects/brew-co', '/projects/flowdesk'];
const expected = ['ru', 'en'].flatMap(locale => slugs.map(slug => `${origin}/${locale}${slug}`));
const external = new Set();
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
for (const url of expected) {
  const response = await fetch(url);
  assert.equal(response.status, 200, url);
  assert.equal(response.url, url, 'Canonical route should not redirect');
  assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex|nofollow/i);
  const html = await response.text();
  assert.ok(html.includes('href="mailto:andharut2000@gmail.com"'), `${url}: email contact`);
  assert.ok(html.includes('href="https://t.me/Anddd1kk"'), `${url}: Telegram contact`);
  assert.doesNotMatch(html, /<form\b/i, 'No server-backed contact form');
  assert.doesNotMatch(html, /https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?=[:/"\s])/i, 'No loopback URLs');
  const tags = html.match(/<(?:link|meta)\b[^>]*>/g) || [];
  const canonical = tags.find(tag => attr(tag, 'rel') === 'canonical');
  assert.equal(attr(canonical || '', 'href'), url, `${url}: canonical`);
  const robots = tags.find(tag => attr(tag, 'name') === 'robots');
  assert.match(attr(robots || '', 'content') || '', /\bindex\b/);
  assert.doesNotMatch(attr(robots || '', 'content') || '', /noindex|nofollow/i);
  const suffix = new URL(url).pathname.replace(/^\/(ru|en)/, '');
  for (const locale of ['ru', 'en']) {
    const alternate = tags.find(tag => attr(tag, 'hreflang') === locale);
    assert.equal(attr(alternate || '', 'href'), `${origin}/${locale}${suffix}`, 'Localized alternate');
  }
  assert.ok(tags.some(tag => attr(tag, 'name') === 'description' && attr(tag, 'content')));
  assert.ok(tags.some(tag => attr(tag, 'property') === 'og:image' && attr(tag, 'content')?.startsWith(`${origin}/`)));
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    assert.notEqual(href, '#', 'No placeholder links');
    assert.doesNotMatch(href, /^(?:javascript:|tel:)/i, 'No unsafe or unapproved phone links');
    if (href.startsWith('mailto:')) assert.equal(href, 'mailto:andharut2000@gmail.com');
    if (/^https?:\/\/(?:t\.me|telegram\.me)\//i.test(href)) assert.equal(href, 'https://t.me/Anddd1kk');
    const target = new URL(href.replaceAll('&amp;', '&'), origin);
    if (target.origin !== origin) external.add(target.href);
  }
}
const sitemap = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemap.status, 200);
const sitemapXml = await sitemap.text();
const listed = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual([...listed].sort(), [...expected].sort(), 'Exactly eight localized URLs in sitemap');
const robots = await fetch(`${origin}/robots.txt`);
assert.equal(robots.status, 200);
const robotsText = await robots.text();
assert.match(robotsText, /^Allow:\s*\/\s*$/m);
assert.doesNotMatch(robotsText, /^Disallow:\s*\/\s*$/m);
assert.ok(robotsText.includes(`Sitemap: ${origin}/sitemap.xml`));
for (const url of [
  'https://brew-co-demo.vercel.app/',
  'https://flowdesk-demo-alpha.vercel.app/',
  'https://github.com/Anddd1k/brew-co-demo',
  'https://github.com/Anddd1k/flowdesk-demo',
  'https://play.google.com/store/apps/details?id=com.smokereset.app',
  'https://t.me/Anddd1kk',
  'mailto:andharut2000@gmail.com',
]) assert.ok(external.has(url), `Missing public link: ${url}`);
for (const url of ['https://brew-co-demo.vercel.app/', 'https://flowdesk-demo-alpha.vercel.app/']) {
  assert.equal((await fetch(url)).status, 200, 'Live demo reachable');
}
console.log(`PASS: ${expected.length} HTTPS pages, canonical/hreflang, index/follow, sitemap, robots, public links, approved contacts and no loopback URLs.`);
