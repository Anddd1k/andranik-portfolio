import assert from 'node:assert/strict';

const base = process.env.VERIFY_URL || 'http://127.0.0.1:3000';
const pages = new Map();
async function read(path) {
  if (pages.has(path)) return pages.get(path);
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  const html = await response.text();
  pages.set(path, html);
  return html;
}
for (const locale of ['ru', 'en']) {
  const html = await read(`/${locale}`);
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'One main heading');
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="description"/);
  const routes = [...html.matchAll(/href="([^"]+)"/g)]
    .map(match => match[1]).filter(href => href.startsWith(`/${locale}/projects/`));
  assert.equal(new Set(routes).size, 3, 'Three project routes');
  for (const route of routes) {
    const page = await read(route);
    assert.match(page, new RegExp(`<html[^>]*lang="${locale}"`));
    assert.equal((page.match(/<html[ >]/g) || []).length, 1, 'One HTML document');
  }
}
for (const [path, html] of pages) {
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    assert.notEqual(href, '#', `${path}: placeholder link`);
    const target = new URL(href, new URL(path, base));
    if (target.origin !== new URL(base).origin) continue;
    const destination = await read(target.pathname);
    if (target.hash) assert.ok(destination.includes(`id="${target.hash.slice(1)}"`), `${path}: missing ${target.hash}`);
  }
}
const redirect = await fetch(base, { redirect: 'manual' });
assert.ok([307,308].includes(redirect.status));
assert.equal(new URL(redirect.headers.get('location'),base).pathname,'/ru');
for (const path of ['/en/projects/unknown','/fr','/ru/projects/vortiq','/en/projects/brainrush','/ru/projects/planpatch','/en/projects/dots-agent']) {
  const response = await fetch(new URL(path,base));
  const html = await response.text();
  assert.ok(response.status===404 || /name="robots" content="noindex"/.test(html),`${path}: missing not-found response`);
}
for (const path of ['/robots.txt','/sitemap.xml','/icon.svg','/og.png']) {
  const response = await fetch(new URL(path,base));
  assert.equal(response.status,200,path);
}
console.log(`PASS: ${pages.size} localized pages, all internal links and anchors, root redirect, not-found responses, metadata, robots, sitemap and social assets.`);
