
export default (eleventyConfig) => {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  eleventyConfig.addFilter("json", (data) => JSON.stringify(data, getCircularReplacer(), 2))
  eleventyConfig.addFilter("breadcrumb", (collection, page) => {
    if (!page || typeof page.url !== "string" || !Array.isArray(collection)) return [];

    // Normalize URL (ensure trailing slash)
    let url = page.url;
    if (!url.endsWith("/")) url += "/";

    const parts = url.split("/").filter(Boolean);
    const crumbs = [];
    let path = "/";

    for (const part of parts) {
      path += part + "/";

      const match = collection.find(p => {
        if (!p || typeof p.url !== "string") return false;
        // Normalize collection URL for comparison
        const normalized = p.url.endsWith("/") ? p.url : p.url + "/";
        return normalized === path;
      });

      crumbs.push({
        title: match?.data?.title || part.replace(/[-_]/g, " "), // fallback readable name
        url: match?.url || path, // fallback to generated path if no match
      });
    }

    // Always prepend Home
    // crumbs.unshift({ title: "Home", url: "/" });

    return crumbs;
  });

  // returns all siblings and itself 
  eleventyConfig.addFilter("siblings", (collection, page) => {
    if (!Array.isArray(collection) || typeof page.url !== "string") return [];

    const parts = page.url.split("/").filter(Boolean);
    if (parts.length === 0) {
      return []
    }
    const parentUrl = "/" + parts[0] + "/";

    return collection.filter(p => {
      if (!p.url || typeof p.url !== "string") return false;

      // Keep only pages in the same folder level
      const pParts = p.url.split("/").filter(Boolean);
      const isSibling =
        p.url.startsWith(parentUrl)
      return isSibling;
    }).map(item => ({
      title: item.data.title,
      url: item.url
    })).sort((a,b) => (a.url.length < b.url.length) && (a.url < b.url))
  });

  eleventyConfig.addFilter('parent', (collections) => {
    const parts = pageUrl.split('/').filter(Boolean);
    const parentUrl = '/' + parts.slice(0, -1).join('/') + '/';
  });
}
