/** Runs before React/CSS so users never see prerendered SEO copy. */
document.getElementById('seo-static')?.remove();
document.body.classList.add('app-ready');
