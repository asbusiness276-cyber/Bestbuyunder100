/** Remove prerendered SEO block before React paints; never lock body scroll. */
document.getElementById('seo-static')?.remove();
