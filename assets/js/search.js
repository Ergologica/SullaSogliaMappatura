/* ======================================================================
   SULLA SOGLIA — Ricerca globale (search.js)
   ======================================================================
   Questo file NON contiene dati.
   Legge tutto da sitedata.js tramite la funzione getAllItems().

   Se devi aggiungere un servizio, modifica SOLO sitedata.js.
   La ricerca lo troverà automaticamente.
   ====================================================================== */

function initSearch() {
  var input = document.getElementById("global-search");
  var results = document.getElementById("search-results");
  if (!input || !results) return;

  /* Costruisci l'indice di ricerca da sitedata.js */
  var searchIndex = getAllItems().map(function(item) {
    return {
      /* Testo cercabile: nome + categoria + keywords */
      text: (item.name + " " + item.cat + " " + item.kw + " " + item.addr + " " + item.desc).toLowerCase(),
      name: item.name,
      cat:  item.cat,
      icon: item.icon,
      page: item.page,
      phone: item.phone,
      addr: item.addr
    };
  });

  /* --- Evento di input: cerca mentre si digita --- */
  input.addEventListener("input", function() {
    var q = this.value.trim().toLowerCase();

    /* Minimo 2 caratteri per cercare */
    if (q.length < 2) {
      results.classList.remove("active");
      return;
    }

    /* Dividi la query in parole e trova match che contengono TUTTE le parole */
    var words = q.split(/\s+/);
    var matches = searchIndex.filter(function(item) {
      return words.every(function(w) { return item.text.indexOf(w) !== -1; });
    }).slice(0, 8); /* Massimo 8 risultati */

    /* Svuota e riempie i risultati */
    results.innerHTML = '';

    if (matches.length === 0) {
      var noResult = document.createElement('div');
      noResult.className = 'search-no-results';
      noResult.textContent = 'Nessun risultato per "' + q + '"';
      results.appendChild(noResult);
    } else {
      matches.forEach(function(m) {
        var a = document.createElement('a');
        a.className = 'search-result-item';
        a.href = m.page || '#';

        /* Icona + Titolo */
        var title = document.createElement('div');
        title.className = 'result-title';
        title.textContent = m.icon + ' ' + m.name;

        /* Categoria + info extra */
        var cat = document.createElement('div');
        cat.className = 'result-category';
        var catText = m.cat;
        if (m.addr) catText += ' · ' + m.addr;
        if (m.phone) catText += ' · ☎ ' + m.phone;
        cat.textContent = catText;

        a.appendChild(title);
        a.appendChild(cat);
        results.appendChild(a);
      });
    }
    results.classList.add("active");
  });

  /* --- Chiudi risultati cliccando fuori --- */
  document.addEventListener("click", function(e) {
    if (!e.target.closest(".global-search-bar")) {
      results.classList.remove("active");
    }
  });

  /* --- Navigazione con tastiera (frecce + invio) --- */
  var activeIndex = -1;

  input.addEventListener("keydown", function(e) {
    var items = results.querySelectorAll(".search-result-item");
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      highlightItem(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      highlightItem(items);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      items[activeIndex].click();
    } else if (e.key === "Escape") {
      results.classList.remove("active");
      activeIndex = -1;
    }
  });

  function highlightItem(items) {
    items.forEach(function(el, i) {
      if (i === activeIndex) {
        el.style.background = 'rgba(184, 81, 58, 0.08)';
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.style.background = '';
      }
    });
  }

  /* Reset indice quando si cambia query */
  input.addEventListener("input", function() { activeIndex = -1; });
}

document.addEventListener("DOMContentLoaded", initSearch);
