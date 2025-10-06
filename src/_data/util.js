export function formatReviewer(line) {
  const esc = s => String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
  );

  const re = /^(\d{4}-\d{2}-\d{2}) \[([^\]]+)\]\(([^)]+)\)$/;
  const m = line.match(re);
  if (!m) return null;

  const [, date, name, link] = m;
  const href = link.includes('@') && !/^https?:/i.test(link)
    ? `mailto:${link}`
    : link;

  return `<time datetime="${esc(date)}">${esc(date)}</time> <a href="${esc(href)}">${esc(name)}</a>`;
}
