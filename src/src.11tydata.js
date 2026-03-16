/* =============================================================
   FIX 404 — Forza output "file piatto" per tutte le pagine
   =============================================================
   Senza questo file, Eleventy crea cartelle:
     src/quartieri.html → _site/quartieri/index.html
   Con questo file, crea file piatti:
     src/quartieri.html → _site/quartieri.html

   Così tutti i link relativi (href="quartieri.html") funzionano.
   ============================================================= */

module.exports = {
  siteUrl: "https://ergologica.github.io/SullaSogliaMappatura",
  eleventyComputed: {
    permalink: (data) => {
      /* index.html ha fileSlug vuoto → serve "index.html" */
      var slug = data.page.fileSlug || "index";
      return slug + ".html";
    }
  }
};
