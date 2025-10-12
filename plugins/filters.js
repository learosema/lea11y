
export default (eleventyConfig) => {
  eleventyConfig.addFilter("breadcrumb", (collections, page) => {
    if (!page || typeof page.url !== "string" || !Array.isArray(collections)) return [];

    // Normalize URL (ensure trailing slash)
    let url = page.url;
    if (!url.endsWith("/")) url += "/";

    const parts = url.split("/").filter(Boolean);
    const crumbs = [];
    let path = "/";

    for (const part of parts) {
      path += part + "/";

      const match = collections.find(p => {
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
  eleventyConfig.addFilter("siblings", (collections, page) => {
    if (!Array.isArray(collections) || typeof page.url !== "string") return [];

    const parts = page.url.split("/").filter(Boolean);

    const parentUrl =
      parts.length <= 1
        ? "/"
        : "/" + parts.slice(0, -1).join("/") + "/";

    return collections.filter(p => {
      if (!p.url || typeof p.url !== "string") return false;

      // Keep only pages in the same folder level
      const pParts = p.url.split("/").filter(Boolean);
      const isSibling =
        p.url.startsWith(parentUrl) &&
        pParts.length === parts.length;

      return isSibling;
    });
  });

  eleventyConfig.addFilter('parent', (collections) => {
    const parts = pageUrl.split('/').filter(Boolean);
    const parentUrl = '/' + parts.slice(0, -1).join('/') + '/';
  });
}
