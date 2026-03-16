/* ======================================================================
   SULLA SOGLIA — FONTE DATI UNICA (sitedata.js)
   ======================================================================
   Questo file è l'UNICA FONTE DI VERITÀ per mappa, ricerca e popup.
   
   COME AGGIORNARE I DATI:
   ─────────────────────────────────────────────────────────────────────
   1. Trova la categoria giusta (es. "Servizi sociali")
   2. Modifica o aggiungi un oggetto dentro l'array "items"
   3. Ogni punto ha questi campi:
      - name:    Nome del servizio/luogo (obbligatorio)
      - lat/lng: Coordinate GPS (obbligatorie per la mappa)
      - addr:    Indirizzo testuale
      - phone:   Numero di telefono
      - hours:   Orari di apertura
      - desc:    Descrizione breve
      - page:    Pagina di dettaglio (es. "servizi.html")
      - kw:      Parole chiave per la ricerca (separate da spazi)
   
   Se un campo non è disponibile, usa "" (stringa vuota).
   NON cancellare i campi, lasciali vuoti.
   
   PER AGGIUNGERE UN NUOVO PUNTO:
   Copia un oggetto esistente nella stessa categoria, modifica i dati,
   e assicurati che lat/lng siano corretti (usa Google Maps > tasto destro
   > "Che cosa c'è qui?" per ottenere le coordinate).
   ====================================================================== */

var SITE_DATA = {

  /* ────────────────────────────────────────────────
     CATEGORIE — ogni categoria ha:
       label:   Nome visualizzato in legenda/mappa
       color:   Colore dei marker sulla mappa
       icon:    Emoji per i popup
       items:   Array dei punti di interesse
     ──────────────────────────────────────────────── */

  "scuole": {
    label: "Scuole e Università",
    color: "#1565C0",
    icon: "🎓",
    items: [
      /* --- Istituti Superiori --- */
      {name:"Istituto Tecnico Industriale \"G.M. Angioy\"", lat:40.715195, lng:8.5561096, addr:"Via Principessa Mafalda SNC", phone:"079 219408", hours:"Lun–Sab 8:00–14:00", desc:"Tecnico industriale — Chimica, Elettronica, Informatica", page:"scuole.html", kw:"istituto tecnico industriale angioy"},
      {name:"Liceo Scientifico G. Spano", lat:40.7165123, lng:8.5593169, addr:"Via Monte Grappa 2/I", phone:"079 217517", hours:"Lun–Sab 8:00–14:00", desc:"Liceo scientifico e scienze applicate", page:"scuole.html", kw:"liceo scientifico spano"},
      {name:"Istituto Superiore Statale 'G. M. Devilla'", lat:40.7162674, lng:8.5599402, addr:"Via Monte Grappa 2", phone:"079 210312", hours:"Lun–Sab 8:00–14:00", desc:"Istituto tecnico geometri e commerciale", page:"scuole.html", kw:"istituto superiore devilla"},
      {name:"Liceo Classico Musicale E Coreutico D.A. Azuni", lat:40.7234481, lng:8.5579351, addr:"Via Luigi Rolando 4", phone:"079 235265", hours:"Lun–Sab 8:00–14:00", desc:"Liceo classico, musicale e coreutico", page:"scuole.html", kw:"liceo classico musicale azuni rolando"},
      {name:"Istituto Tecnico Salvator Ruju", lat:40.7208321, lng:8.5576015, addr:"Via Porcellana 30", phone:"079 244302", hours:"Lun–Sab 8:00–14:00", desc:"Istituto tecnico biotecnologico e per attività sociali", page:"scuole.html", kw:"tecnico commerciale ruju"},
      {name:"Istituto Istruzione Superiore \"N. Pellegrini\"", lat:40.737795, lng:8.5740954, addr:"Via Bellini 5", phone:"079 244110", hours:"Lun–Sab 8:00–14:00", desc:"Agrario, professionale industria e artigianato", page:"scuole.html", kw:"pellegrini agrario superiore"},
      {name:"Istituto Tecnico Agrario \"Nicolò Pellegrini\"", lat:40.739138, lng:8.5540339, addr:"Via Bellini 5", phone:"079 244110", hours:"Lun–Sab 8:00–14:00", desc:"Agraria, agroalimentare", page:"scuole.html", kw:"agrario pellegrini"},
      {name:"Ist. Prof. Enogastronomia e Ospitalità Alberghiera", lat:40.7460171, lng:8.5454584, addr:"Via Cedrino 3", phone:"079 245941", hours:"Lun–Sab 8:00–14:00", desc:"Enogastronomia e ospitalità alberghiera", page:"scuole.html", kw:"alberghiero enogastronomia cedrino"},

      /* --- Istituti Comprensivi / Scuole Medie e Elementari --- */
      {name:"Istituto Comprensivo \"P. Tola\"", lat:40.7197149, lng:8.5548517, addr:"Via Monte Grappa 81", phone:"079 2845254", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"scuole.html", kw:"comprensivo tola"},
      {name:"Scuola Elementare Porcellana", lat:40.7211789, lng:8.5567383, addr:"Via Porcellana", phone:"079 244302", hours:"Lun–Ven 8:00–13:00", desc:"Scuola primaria statale", page:"scuole.html", kw:"elementare porcellana"},
      {name:"Istituto Comprensivo Statale TG5 Sardegna", lat:40.7218041, lng:8.5536597, addr:"", phone:"", hours:"", desc:"", page:"scuole.html", kw:"comprensivo tg5"},
      {name:"Istituto Comprensivo 'Brigata Sassari'", lat:40.720871, lng:8.5813019, addr:"Via Mastino 6", phone:"079 2845274", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"scuole.html", kw:"brigata sassari comprensivo"},
      {name:"Scuola Primaria e Secondaria di primo grado", lat:40.7134039, lng:8.5766255, addr:"", phone:"", hours:"", desc:"", page:"scuole.html", kw:"primaria secondaria"},
      {name:"Istituto Comprensivo Via Marras", lat:40.7260425, lng:8.5773792, addr:"Via Marras", phone:"079 2845274", hours:"Lun–Ven 8:00–16:30", desc:"Plesso dell'IC Brigata Sassari", page:"scuole.html", kw:"comprensivo marras"},
      {name:"Istituto Comprensivo \"Pertini - Biasi\"", lat:40.7278916, lng:8.572504, addr:"Via Gorizia 26", phone:"079 2845096", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"scuole.html", kw:"pertini biasi comprensivo"},
      {name:"Istituto Sant'Agnese", lat:40.731311, lng:8.5569793, addr:"Via Zanfarino 4", phone:"079 271547", hours:"Lun–Ven 8:00–16:00", desc:"Scuola paritaria cattolica", page:"scuole.html", kw:"sant agnese"},
      {name:"Istituto Comprensivo \"San Donato\"", lat:40.7298965, lng:8.5578374, addr:"Via Alessio Fontana 3", phone:"079 2845002", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"scuole.html", kw:"san donato comprensivo"},
      {name:"Istituto Comprensivo Monte Rosello Basso", lat:40.7388763, lng:8.5635531, addr:"Via Pavese 2", phone:"079 241380", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"monte.html", kw:"monte rosello basso comprensivo"},
      {name:"Scuola Media N 7", lat:40.728346, lng:8.5598342, addr:"Via Era, Li Punti", phone:"079 279980", hours:"Lun–Ven 8:00–14:00", desc:"Scuola secondaria di primo grado", page:"scuole.html", kw:"media sette"},
      {name:"Istituto Comprensivo 'Salvatore Farina - San Giuseppe'", lat:40.7216213, lng:8.5630155, addr:"Via De Nicola 2", phone:"079 234739", hours:"Lun–Ven 8:00–16:30", desc:"Infanzia, primaria e secondaria di primo grado", page:"scuole.html", kw:"farina san giuseppe comprensivo"},

      /* --- Università --- */
      {name:"Dipartimento di Agraria", lat:40.7171741, lng:8.5541312, addr:"Viale Italia 39/a", phone:"079 229202", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari", page:"scuole.html", kw:"universita uniss agraria dipartimento"},
      {name:"Orto Botanico - Università di Sassari", lat:40.7223594, lng:8.5516518, addr:"Via Piandanna 4", phone:"079 228234", hours:"Lun–Ven 8:00–14:00", desc:"Orto Botanico dell'Università di Sassari", page:"scuole.html", kw:"orto botanico universita"},
      {name:"Dipartimento di Chimica e Farmacia", lat:40.7233238, lng:8.5574054, addr:"Via Vienna 2", phone:"079 228700", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari", page:"scuole.html", kw:"chimica farmacia uniss"},
      {name:"Dipartimento di Giurisprudenza - UNISS", lat:40.7241439, lng:8.5572824, addr:"Viale Mancini 5", phone:"079 228891", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari — Dipartimento di Giurisprudenza", page:"scuole.html", kw:"giurisprudenza legge uniss"},
      {name:"Dipartimento di Scienze Economiche e Aziendali", lat:40.7239008, lng:8.5564291, addr:"Via Muroni 25", phone:"079 213000", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari — Dipartimento di Scienze Economiche e Aziendali", page:"scuole.html", kw:"economia scienze economiche uniss"},
      {name:"E.R.S.U. (Ufficio Segreteria)", lat:40.7243783, lng:8.5563116, addr:"Via Michele Coppino 18", phone:"079 9940000", hours:"Lun–Ven 9:00–12:00; Mar–Mer anche 16:00–17:00", desc:"Ente Regionale Diritto allo Studio", page:"scuole.html", kw:"ersu segreteria studenti mensa borsa studio"},
      {name:"Palazzo Università", lat:40.7250539, lng:8.5598856, addr:"Piazza Università 21", phone:"079 228211", hours:"Lun–Ven 8:00–19:00", desc:"Sede storica UNISS", page:"scuole.html", kw:"palazzo universita rettorato"},
      {name:"UniSS Segreteria Studenti \"Zirulia\"", lat:40.7249362, lng:8.5605463, addr:"Via Michele Coppino 4", phone:"079 9940002", hours:"Lun–Ven 9:00–12:00", desc:"Segreteria iscrizioni", page:"scuole.html", kw:"segreteria studenti zirulia iscrizione"},
      {name:"Dip. Scienze Umanistiche e Sociali", lat:40.7192218, lng:8.5700712, addr:"Via Roma 151", phone:"079 229600", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari", page:"scuole.html", kw:"umanistiche sociali lettere filosofia uniss"},
      {name:"Dip. Storia, Scienze dell'Uomo e della Formazione", lat:40.7184557, lng:8.5695662, addr:"Via Zanfarino 62", phone:"079 229637", hours:"Lun–Ven 8:00–18:00", desc:"Università di Sassari — Storia, Scienze dell'Uomo e della Formazione", page:"scuole.html", kw:"storia formazione scienze uomo uniss"},
      {name:"Accademia di Belle Arti \"Mario Sironi\"", lat:40.717916, lng:8.570333, addr:"Via Duca degli Abruzzi 4", phone:"079 280302", hours:"Lun–Ven 8:00–14:00; segreteria 11:30–13:30", desc:"Accademia di Belle Arti — Alta formazione artistica", page:"scuole.html", kw:"belle arti sironi accademia"},
      {name:"Convitto annesso Pellegrini", lat:40.7394355, lng:8.5575101, addr:"Via Bellini 5", phone:"079 244110", hours:"Lun–Sab 8:00–18:00", desc:"Convitto annesso all'Istituto Agrario Pellegrini", page:"scuole.html", kw:"convitto pellegrini"},
      {name:"Centro Studi Europa", lat:40.7135504, lng:8.5773871, addr:"Via Zanfarino 14", phone:"079 270777", hours:"Lun–Ven 9:00–13:00 / 15:00–19:00", desc:"Agenzia Formativa", page:"scuole.html", kw:"centro studi europa formazione"}
    ]
  },

  "socialita": {
    label: "Luoghi di socialità",
    color: "#E65100",
    icon: "☕",
    items: [
      {name:"Fumetteria Clandestina", lat:40.7172578, lng:8.5582872, addr:"Via Turritana 18", phone:"079 9461029", hours:"Lun–Sab 10:00–13:00 / 16:30–20:00", desc:"Fumetteria e giochi da tavolo", page:"centrostorico.html", kw:"fumetteria clandestina fumetti giochi"},
      {name:"Mensa Universitaria Ersu", lat:40.7173117, lng:8.5561357, addr:"Via dei Mille", phone:"079 9940000", hours:"Lun–Ven 12:00–14:30 / 19:00–21:00", desc:"Mensa a prezzo agevolato per studenti", page:"scuole.html", kw:"mensa universitaria ersu studenti pranzo"},
      {name:"Caffè Mignon", lat:40.71732, lng:8.55925, addr:"Piazza d'Italia 2", phone:"079 233145", hours:"Lun–Sab 7:00–21:00", desc:"Caffetteria storica nel centro di Sassari", page:"centrostorico.html", kw:"bar caffe mignon centro"},
      {name:"Snack-Bar Pizzeria Cipensoio", lat:40.7162956, lng:8.5560432, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"pizzeria cipensoio"},
      {name:"Giasper Caffè", lat:40.7164642, lng:8.5560045, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"giasper caffe bar"},
      {name:"Spizzati Di Gallozza Sonia", lat:40.7158947, lng:8.5555029, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"spizzati gallozza"},
      {name:"Sapore Di Pizza", lat:40.7157772, lng:8.5543057, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"sapore pizza"},
      {name:"Carhiba", lat:40.7219444, lng:8.5561111, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"carhiba bar"},
      {name:"Sweet Waffle", lat:40.7209206, lng:8.5564414, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"sweet waffle dolci"},
      {name:"White Café", lat:40.7206, lng:8.5565003, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"white cafe bar"},
      {name:"Bar Tomaso", lat:40.7195609, lng:8.5567983, addr:"", phone:"", hours:"", desc:"", page:"centrostorico.html", kw:"bar tomaso"},
      {name:"Centro Poliss", lat:40.7403907, lng:8.5648478, addr:"Via Baldedda 15", phone:"079 279730", hours:"Lun–Ven 15:00–19:00", desc:"Attività ludiche, supporto scolastico e psicologico", page:"monte.html", kw:"poliss baldedda monte rosello supporto scolastico ragazzi"},
      {name:"Biblioteca Accessibile", lat:40.723896, lng:8.5573053, addr:"Via Ferrini 12", phone:"079 279980", hours:"Lun–Ven 9:00–13:00 / 15:00–18:00", desc:"Spazio lettura aperto a tutti", page:"centrostorico.html", kw:"biblioteca accessibile lettura studio"},
      {name:"Parco di Monserrato", lat:40.7120, lng:8.5500, addr:"Via Budapest", phone:"", hours:"", desc:"Parco pubblico attrezzato con giochi", page:"carbonazzi.html", kw:"parco monserrato budapest giochi"},
      {name:"Mercato Civico Sassari", lat:40.7240, lng:8.5575, addr:"Via Rosello / Corso Trinità", phone:"", hours:"", desc:"Mercato coperto storico", page:"centrostorico.html", kw:"mercato civico coperto rosello trinita spesa"}
    ]
  },

  "formazione": {
    label: "Formazione professionale",
    color: "#6A1B9A",
    icon: "📚",
    items: [
      {name:"AICS FP Sardegna APS", lat:40.7452355, lng:8.5505835, addr:"Via Cedrino 3", phone:"079 245941", hours:"", desc:"Percorsi formativi professionali gratuiti", page:"servizi.html", kw:"aics formazione professionale gratuita cedrino"},
      {name:"IAL Sardegna — Formazione", lat:40.7265, lng:8.5610, addr:"Via G. Prati 22/28", phone:"079 2825041", hours:"", desc:"Corsi gratuiti GOL, IeFP, formazione stranieri", page:"servizi.html", kw:"ial sardegna formazione professionale prati gol corsi gratuiti"},
      {name:"CPIA n. 5 — Istruzione Adulti", lat:40.7265, lng:8.5580, addr:"Via V. Bottego 5", phone:"079 7000588", hours:"", desc:"Italiano per stranieri, licenza media, corsi serali", page:"servizi.html", kw:"adulti italiano stranieri licenza media cpia bottego"},
      {name:"INTERNATIONAL REVOLUTION S.r.l.", lat:40.7314463, lng:8.5643545, addr:"Sassari", phone:"079 274000", hours:"Lun–Ven 9:00–18:00", desc:"Scuola acconciatura ed estetica", page:"servizi.html", kw:"acconciatura estetica parrucchieri formazione"},
      {name:"Accademia e Lavoro", lat:40.7265243, lng:8.5610511, addr:"Sassari", phone:"079 270777", hours:"Lun–Ven 9:00–13:00 / 15:00–19:00", desc:"Formazione professionale", page:"servizi.html", kw:"accademia lavoro formazione"},
      {name:"X Siempre Tango", lat:40.7222111, lng:8.5547302, addr:"Sassari", phone:"", hours:"", desc:"Scuola di tango", page:"", kw:"tango danza ballo"},
      {name:"Scuola Professionale Massaggio — Evolution Academy", lat:40.730875, lng:8.5419187, addr:"Sassari", phone:"079 270500", hours:"Lun–Ven 9:00–18:00", desc:"Scuola professionale di massaggio", page:"servizi.html", kw:"massaggio evolution academy"},
      {name:"iForm srl", lat:40.7360358, lng:8.5265802, addr:"Via Luna e Sole 44", phone:"079 2590800", hours:"Lun–Ven 9:00–13:00 / 14:00–18:00", desc:"Sede Amministrativa", page:"", kw:"iform formazione"},
      {name:"Scuola di Sartoria — Sitam Franco Allentini", lat:40.7265468, lng:8.5623761, addr:"Sassari", phone:"079 271600", hours:"Lun–Ven 9:00–18:00", desc:"Formazione sartoria", page:"servizi.html", kw:"sartoria sitam allentini moda"}
    ]
  },

  "lavoro": {
    label: "Agenzie per il lavoro",
    color: "#2E7D32",
    icon: "💼",
    items: [
      {name:"ASPAL — CPLF (ex Centro per l'Impiego)", lat:40.7460049, lng:8.5528094, addr:"Via L. Auzzas 1/F — Li Punti", phone:"070 7790000", hours:"Lun–Ven 9:00–12:00 | Mar–Gio anche 15:30–17:00", desc:"Centro pubblico per l'impiego", page:"servizi.html", kw:"lavoro impiego disoccupazione auzzas li punti aspal cplf"},
      {name:"Randstad", lat:40.7224575, lng:8.5570627, addr:"Via M. Coppino SNC", phone:"079 237901", hours:"Lun 9–18 | Mar–Ven 9–17:30", desc:"Agenzia interinale", page:"servizi.html", kw:"lavoro interinale agenzia randstad coppino"},
      {name:"Adecco", lat:40.717146, lng:8.552469, addr:"Via Rockfeller 13", phone:"079 2118064", hours:"Lun–Ven 9–13 e 14–18", desc:"Agenzia interinale", page:"servizi.html", kw:"lavoro interinale agenzia adecco rockfeller"},
      {name:"Gi Group", lat:40.7151701, lng:8.5788408, addr:"Via Carlo Felice 33", phone:"079 9280106", hours:"", desc:"Agenzia interinale", page:"servizi.html", kw:"lavoro interinale agenzia gi group carlo felice"},
      {name:"Synergie Italia", lat:40.7202156, lng:8.5800687, addr:"Via De Gasperi 7", phone:"079 274190", hours:"", desc:"Agenzia interinale", page:"servizi.html", kw:"lavoro interinale agenzia synergie gasperi"},
      {name:"Openjobmetis", lat:40.7239658, lng:8.5613758, addr:"Emiciclo Garibaldi 11", phone:"079 2006020", hours:"", desc:"Agenzia per il lavoro", page:"servizi.html", kw:"lavoro openjobmetis garibaldi"},
      {name:"ETJCA", lat:40.7131628, lng:8.5653327, addr:"Via Verona 23", phone:"079 9148795", hours:"Lun–Ven 9–13 e 14–18", desc:"Agenzia per il lavoro", page:"servizi.html", kw:"lavoro interinale agenzia etjca verona"},
      {name:"e-work spa", lat:40.720207, lng:8.5690327, addr:"Viale San Francesco 8a", phone:"079 290987", hours:"", desc:"Agenzia per il lavoro", page:"servizi.html", kw:"ework lavoro san francesco"},
      {name:"Direzione Lavoro Group", lat:40.7241312, lng:8.5678327, addr:"Via Roma 107", phone:"079 2823055", hours:"", desc:"", page:"servizi.html", kw:"direzione lavoro roma"},
      {name:"Llavoro Spa", lat:40.7219154, lng:8.5677326, addr:"Sassari centro", phone:"", hours:"", desc:"Fornitura lavoro temporaneo", page:"servizi.html", kw:"llavoro temporaneo"}
    ]
  },

  "sport": {
    label: "Sport e cultura",
    color: "#C62828",
    icon: "⚽",
    items: [
      {name:"Centro Sportivo CRAL Comune", lat:40.7390297, lng:8.5598892, addr:"Via Pirandello 1", phone:"079 279111", hours:"Lun–Ven 9:00–20:00", desc:"Centro sportivo ricreativo dipendenti comunali", page:"monte.html", kw:"sport centro sportivo pirandello cral monte rosello"},
      {name:"Palestra Luca Simula", lat:40.7379056, lng:8.5612858, addr:"Via Pirandello", phone:"079 291200", hours:"Lun–Sab 8:00–22:00", desc:"Palestra e arti marziali", page:"monte.html", kw:"palestra simula monte rosello"},
      {name:"Stadio dei Pini \"Tonino Siddi\"", lat:40.7385839, lng:8.5623826, addr:"Via Duprè / Piazzale Segni", phone:"", hours:"", desc:"Stadio cittadino", page:"monte.html", kw:"stadio pini siddi calcio monte rosello"},
      {name:"Gio' Sport Di Murgia Giovanni", lat:40.7397445, lng:8.5636124, addr:"", phone:"", hours:"", desc:"", page:"monte.html", kw:"gio sport murgia"},
      {name:"Fit For Life", lat:40.7169941, lng:8.5578722, addr:"Via Turritana / Centro Storico", phone:"", hours:"Lun–Ven 7:00–22:00; Sab 9:00–13:00", desc:"Palestra fitness", page:"centrostorico.html", kw:"palestra fitness fit for life"},
      {name:"Planet Fitness", lat:40.716121, lng:8.5810989, addr:"Via Luna e Sole", phone:"", hours:"Lun–Ven 7:00–22:00; Sab 9:00–14:00", desc:"Palestra", page:"lunasole.html", kw:"palestra planet fitness"},
      {name:"MyGymnica", lat:40.7119674, lng:8.5502529, addr:"Via Budapest SNC (Galleria Monserrat)", phone:"079 276721", hours:"Lun–Ven 7–22 | Sab–Dom 8:30–19", desc:"1.700 mq, 40+ corsi, sala pesi, camp outdoor", page:"carbonazzi.html", kw:"palestra gymnica padel carbonazzi"},
      {name:"Palestra Dynamika", lat:40.7221151, lng:8.5768203, addr:"", phone:"", hours:"", desc:"", page:"lunasole.html", kw:"palestra dynamika"},
      {name:"Palestra Sport Club 900", lat:40.7258977, lng:8.5763891, addr:"", phone:"", hours:"", desc:"", page:"lunasole.html", kw:"sport club 900 palestra"},
      {name:"Palextra 2000", lat:40.732214, lng:8.5620764, addr:"", phone:"", hours:"", desc:"", page:"monte.html", kw:"palextra 2000 palestra"},
      {name:"Palestra Ludus", lat:40.7304766, lng:8.5407017, addr:"", phone:"", hours:"", desc:"", page:"carbonazzi.html", kw:"palestra ludus"},
      {name:"A.S.D. Brigata Sassari", lat:40.7509474, lng:8.5145772, addr:"", phone:"", hours:"", desc:"Associazione sportiva", page:"", kw:"brigata sassari sport"},
      {name:"MSP", lat:40.7303737, lng:8.5714436, addr:"", phone:"", hours:"", desc:"", page:"", kw:"msp sport"},
      {name:"Eagle Association", lat:40.7307916, lng:8.5395807, addr:"", phone:"", hours:"", desc:"", page:"", kw:"eagle association sport"},
      {name:"A.D. Scacchi Torres", lat:40.7279446, lng:8.5691579, addr:"Sassari", phone:"", hours:"", desc:"Club di scacchi", page:"", kw:"scacchi torres gioco"},
      {name:"Dinamo Sassari — Basket", lat:40.7180902, lng:8.5784796, addr:"PalaSerradimigni, Via Chironi (Piazzale Segni)", phone:"079 280068", hours:"In base al calendario gare", desc:"Basket Serie A — sede: Via Roma 144/d", page:"lunasole.html", kw:"dinamo sassari basket pallacanestro"},
      {name:"Gruppo Sportivo San Paolo", lat:40.7145172, lng:8.5689735, addr:"", phone:"", hours:"", desc:"", page:"", kw:"san paolo sport gruppo"},
      {name:"Bulldog Rugby Sassari", lat:40.7089635, lng:8.5553123, addr:"", phone:"", hours:"", desc:"", page:"", kw:"bulldog rugby sassari"},
      {name:"A.S.D. Spazio Libero", lat:40.7160809, lng:8.5674265, addr:"", phone:"", hours:"", desc:"", page:"", kw:"spazio libero sport"},
      {name:"Bike Sharing", lat:40.718372, lng:8.5701111, addr:"", phone:"", hours:"", desc:"Noleggio bici", page:"", kw:"bike sharing bici noleggio"},
      {name:"Scuola Ciclismo BMX MTB", lat:40.7177529, lng:8.5968179, addr:"", phone:"", hours:"", desc:"", page:"", kw:"ciclismo bmx mtb bici"},
      {name:"Gena Campo di Calcio", lat:40.710358, lng:8.56366, addr:"", phone:"", hours:"", desc:"", page:"carbonazzi.html", kw:"gena calcio campo carbonazzi"},
      {name:"Gruppo Sportivo Monserrato", lat:40.7136513, lng:8.5579862, addr:"", phone:"", hours:"", desc:"", page:"", kw:"monserrato sport gruppo"},
      {name:"Marzio Lepri Torres", lat:40.7187118, lng:8.5736379, addr:"", phone:"", hours:"", desc:"Società sportiva", page:"", kw:"lepri torres sport"},
      {name:"Torres Sassari Scuola Calcio", lat:40.7180622, lng:8.5811336, addr:"Stadio Vanni Sanna, Via Chironi", phone:"", hours:"", desc:"Scuola calcio della Torres", page:"lunasole.html", kw:"torres calcio scuola"},
      {name:"Stadio Vanni Sanna", lat:40.718097, lng:8.5800651, addr:"Via Chironi (Piazzale Segni)", phone:"", hours:"", desc:"Stadio comunale di calcio", page:"lunasole.html", kw:"vanni sanna stadio palaserradimigni luna sole"},
      {name:"Sto Torres Srl", lat:40.7186639, lng:8.579072, addr:"", phone:"", hours:"", desc:"", page:"", kw:"sto torres"},
      {name:"Campo di calcetto Latte Dolce", lat:40.7453193, lng:8.5458889, addr:"", phone:"", hours:"", desc:"", page:"latte.html", kw:"calcetto latte dolce campo"},
      {name:"Campo di calcio Latte Dolce", lat:40.7435934, lng:8.5516109, addr:"", phone:"", hours:"", desc:"", page:"latte.html", kw:"calcio latte dolce campo"},
      {name:"Sassari Calcio Latte Dolce", lat:40.7431227, lng:8.5514211, addr:"Via Ferraris, Latte Dolce", phone:"", hours:"", desc:"Società sportiva", page:"latte.html", kw:"sassari calcio latte dolce"},
      {name:"Ass. Corale \"Luigi Canepa\"", lat:40.7229363, lng:8.5539218, addr:"Via Zanfarino", phone:"", hours:"", desc:"Coro musicale", page:"", kw:"corale canepa musica coro"},
      {name:"Piscina Comunale Maria Pia", lat:40.7440, lng:8.5470, addr:"Via De Nicola (Latte Dolce)", phone:"", hours:"", desc:"Piscina pubblica coperta", page:"latte.html", kw:"piscina comunale maria pia latte dolce nuoto"}
    ]
  },

  /* ────────────────────────────────────────────────
     SERVIZI — Non sulla mappa originale, ma presenti
     nella ricerca e nelle pagine di dettaglio.
     Hanno coordinate approssimate per la mappa.
     ──────────────────────────────────────────────── */
  "servizi_sociali": {
    label: "Servizi e assistenza",
    color: "#00838F",
    icon: "🏛️",
    items: [
      /* --- Numeri utili (senza coordinate precise — marker al Comune) --- */
      {name:"Emergenze — 112", lat:40.7248, lng:8.5590, addr:"Numero europeo — senza sede", phone:"112", hours:"24h", desc:"Numero unico europeo emergenze", page:"servizi.html", kw:"emergenza pronto soccorso ambulanza polizia 112"},
      {name:"Comune di Sassari — Centralino", lat:40.7248, lng:8.5590, addr:"Piazza del Comune 1", phone:"079 279111", hours:"Lun–Ven 9:00–13:00; Mar–Gio anche 15:30–17:30", desc:"", page:"servizi.html", kw:"comune municipio centralino 079279111"},
      {name:"Guardia Medica", lat:40.7248, lng:8.5590, addr:"Via Rockefeller", phone:"079 2061450", hours:"Notturno e festivo", desc:"", page:"servizi.html", kw:"guardia medica notte festivo"},
      {name:"Antiviolenza Donne — 1522", lat:40.7248, lng:8.5590, addr:"Numero nazionale — senza sede", phone:"1522", hours:"24h, gratuito", desc:"Numero nazionale antiviolenza", page:"servizi.html", kw:"violenza donne antiviolenza aurora 1522"},
      {name:"Telefono Amico", lat:40.7248, lng:8.5590, addr:"Viale Dante 55", phone:"079 231511", hours:"Lun–Ven 9:00–18:00", desc:"Ascolto e supporto", page:"servizi.html", kw:"telefono amico ascolto aiuto"},

      /* --- Servizi Sociali Territoriali --- */
      {name:"Servizio Sociale Territoriale 1", lat:40.7254, lng:8.5574, addr:"Piazza Santa Caterina 25", phone:"079 279733", hours:"Lun–Ven 9:00–13:00; Mer anche 15:30–17:30", desc:"Copre: Centro Storico, Caniga, La Landrigga, Bancali", page:"servizi.html", kw:"assistente sociale centro storico caniga piazza santa caterina"},
      {name:"Servizio Sociale Territoriale 2", lat:40.7420, lng:8.5490, addr:"Via Giovanni Caboto", phone:"079 2497410", hours:"Lun–Ven 9:00–13:00; Mer anche 15:30–17:30", desc:"Copre: Latte Dolce, S.M. di Pisa, Li Punti, S. Orsola", page:"servizi.html", kw:"assistente sociale latte dolce pisa orsola caboto"},
      {name:"Servizio Sociale Territoriale 3", lat:40.7310, lng:8.5600, addr:"Via Giuseppe Giusti 8", phone:"079 259 5056", hours:"Lun–Ven 9:00–13:00; Mer anche 15:30–17:30", desc:"Copre: Monte Rosello, Sacro Cuore, Luna e Sole, Carbonazzi", page:"servizi.html", kw:"assistente sociale monte rosello luna sole carbonazzi giusti"},

      /* --- Consultori e Salute --- */
      {name:"Consultorio Familiare ASL — Via Rizzeddu", lat:40.7230, lng:8.5510, addr:"Via Rizzeddu 21/B", phone:"079 2062637", hours:"Lun–Gio 8:30–13:00 e 15:00–17:00", desc:"Include Spazio Giovani per adolescenti", page:"servizi.html", kw:"consultorio familiare spazio giovani rizzeddu"},
      {name:"Consultorio Familiare — Via Nurra", lat:40.7260, lng:8.5560, addr:"Via Nurra 3/A", phone:"079 2062239", hours:"Lun–Ven 8:30–13:30; Mar–Gio anche 15:00–17:00", desc:"Consultorio familiare ASL", page:"servizi.html", kw:"consultorio familiare nurra"},
      {name:"Punto Salute di Comunità", lat:40.7250, lng:8.5565, addr:"Via Casaggia 10", phone:"079 279962", hours:"Lun–Ven 9:00–13:00", desc:"Punto salute di comunità — supporto sanitario territoriale", page:"servizi.html", kw:"punto salute casaggia comunita"},
      {name:"EMERGENCY — Ambulatorio", lat:40.7440, lng:8.5470, addr:"Via Leoncavallo 27", phone:"348 8689781", hours:"Lun–Ven 8:30–16:30", desc:"Ambulatorio gratuito S.M. di Pisa", page:"servizi.html", kw:"emergency ambulatorio leoncavallo pisa gratuito"},

      /* --- Caritas e Assistenza --- */
      {name:"Caritas — Buste Alimentari", lat:40.7240, lng:8.5577, addr:"Largo Seminario 6", phone:"347 594 4199", hours:"Lun–Ven 9:00–18:00", desc:"Distribuzione alimentare", page:"servizi.html", kw:"caritas cibo buste alimentari seminario"},
      {name:"Caritas — Mensa", lat:40.7242, lng:8.5560, addr:"Via Luigi Rolando 5", phone:"347 594 4199", hours:"11:45–12:30", desc:"Mensa aperta", page:"servizi.html", kw:"caritas mensa pranzo rolando"},
      {name:"Centro Caritas Latte Dolce", lat:40.7435, lng:8.5480, addr:"Via Kennedy 1", phone:"339 3064561", hours:"Lun–Ven 9:00–12:00", desc:"Centro di ascolto e distribuzione beni Caritas", page:"servizi.html", kw:"caritas latte dolce kennedy"},
      {name:"Emporio Solidarietà \"Braccia Tese\"", lat:40.7250, lng:8.5580, addr:"Piazza Mazzotti 9", phone:"377 3930316", hours:"Lun–Ven 9:00–13:00 / 15:00–18:00", desc:"Market solidale gratuito, patronato, corsi", page:"servizi.html", kw:"emporio solidarieta braccia tese market solidale mazzotti gratuito spesa"},

      /* --- Stranieri e Mediazione --- */
      {name:"Sportello Mediazione Interculturale", lat:40.7460, lng:8.5528, addr:"Via L. Auzzas 1/F — Li Punti", phone:"800 975849", hours:"Mar e Gio 9:30–17:30", desc:"Presso CPLF — Numero verde gratuito", page:"servizi.html", kw:"stranieri mediazione interculturale immigrazione bottego 800975849"},
      {name:"Sportello consulenza extracomunitari", lat:40.7248, lng:8.5590, addr:"Comune di Sassari", phone:"079 279111", hours:"Su appuntamento", desc:"Sportello gratuito", page:"servizi.html", kw:"stranieri extracomunitari consulenza comune"},

      /* --- Orientamento Giovani --- */
      {name:"Informagiovani — Comune di Sassari", lat:40.7254, lng:8.5574, addr:"Piazza Santa Caterina 25", phone:"079 279715", hours:"Lun–Ven 9–12 | Mar anche 15:30–17:30", desc:"Lavoro, istruzione, Erasmus, WiFi, sala studio", page:"servizi.html", kw:"giovani lavoro formazione eurodesk piazza santa caterina informagiovani"},
      {name:"Punto Luce — Politiche Giovanili", lat:40.7435, lng:8.5475, addr:"Via Martin Luther King 69, Latte Dolce", phone:"079 2825033", hours:"Lun–Ven 15:00–19:00", desc:"", page:"servizi.html", kw:"giovani king latte dolce punto luce"},
      {name:"Cospes Salesiani — Orientamento", lat:40.7438, lng:8.5468, addr:"Via G. De Martini 18, Latte Dolce", phone:"079 398300", hours:"Lun–Ven 9–13", desc:"Orientamento scolastico e professionale", page:"servizi.html", kw:"cospes salesiani orientamento scolastico latte dolce"},

      /* --- Salute mentale (NUOVI) --- */
      {name:"CSM 1 — Centro Salute Mentale", lat:40.7210, lng:8.5545, addr:"Via Amendola 55", phone:"079 2062215", hours:"Lun–Ven 8–20 | Sab 8–14", desc:"Salute mentale — Centro Storico, Carbonazzi, Luna e Sole", page:"servizi.html", kw:"csm salute mentale psichiatria psicologia amendola"},
      {name:"CSM 2 — Centro Salute Mentale", lat:40.7380, lng:8.5620, addr:"Via Sennori 8", phone:"079 2062248", hours:"Lun–Ven 8–20 | Sab 8–14", desc:"Salute mentale — Latte Dolce, Monte Rosello, Orsola", page:"servizi.html", kw:"csm salute mentale psichiatria sennori monte rosello"},
      {name:"SerD — Servizio Dipendenze Patologiche", lat:40.7330, lng:8.5670, addr:"Villaggio San Camillo, Via Carlo Felice", phone:"079 2490002", hours:"Lun–Ven 8–20 | Sab 8–14", desc:"Dipendenze, alcologia, gioco d'azzardo. Accesso gratuito e anonimo", page:"servizi.html", kw:"serd dipendenze tossicodipendenza alcol droga gioco azzardo san camillo"},
      {name:"SerD — Ambulatorio Zanfarino", lat:40.7230, lng:8.5520, addr:"Via Zanfarino 44", phone:"079 2062486", hours:"Lun–Sab 8–14", desc:"Ambulatorio dipendenze", page:"servizi.html", kw:"serd dipendenze zanfarino ambulatorio"},
      {name:"Centro Ascolto Dipendenze — Coop. Promozione Umana", lat:40.7260, lng:8.5570, addr:"Via E. Lussu 1", phone:"079 231455", hours:"Lun, Mer, Ven 15:30–18:30", desc:"Ascolto e supporto dipendenze", page:"servizi.html", kw:"ascolto dipendenze promozione umana lussu"},

      /* --- Biblioteche (NUOVE) --- */
      {name:"Biblioteca Comunale \"P. Tola\"", lat:40.7257, lng:8.5590, addr:"Piazza Tola 1 (Palazzo d'Usini)", phone:"079 279380", hours:"Lun, Mer, Ven 9–13:30 | Mar, Gio 9–18:15", desc:"Accesso libero e gratuito, WiFi, prestito libri", page:"centrostorico.html", kw:"biblioteca comunale tola palazzo usini piazza studio libri wifi gratuito"},
      {name:"Biblioteca Li Punti", lat:40.7460, lng:8.5528, addr:"Via Era 3, Li Punti", phone:"079 279980", hours:"Lun–Ven 9:00–13:00 / 15:00–19:00", desc:"Sede decentrata del sistema bibliotecario", page:"", kw:"biblioteca li punti era lettura studio"},
      {name:"Biblioteca Caniga", lat:40.7300, lng:8.5400, addr:"Caniga", phone:"", hours:"", desc:"Sede decentrata del sistema bibliotecario comunale", page:"", kw:"biblioteca caniga lettura studio"},

      /* --- CAF e Patronati (NUOVI) --- */
      {name:"CAF CISL Sassari", lat:40.7215, lng:8.5640, addr:"Via IV Novembre 57/C", phone:"079 271400", hours:"Lun–Ven 9:00–13:00 / 15:00–18:00", desc:"Assistenza fiscale, 730, ISEE", page:"servizi.html", kw:"caf cisl patronato fiscale 730 isee novembre"},
      {name:"CAF CGIL — Patronato INCA", lat:40.7170, lng:8.5530, addr:"Via Rockefeller 33", phone:"079 957 5999", hours:"Lun–Ven 9:00–13:00 / 15:00–18:00", desc:"Patronato: pensioni, maternità, immigrazione", page:"servizi.html", kw:"caf cgil inca patronato pensione immigrazione rockefeller"},

      /* --- Documenti e uffici pubblici (NUOVI) --- */
      {name:"Questura di Sassari", lat:40.7195, lng:8.5700, addr:"Via Giovanni Palatucci", phone:"079 283111", hours:"Lun–Ven 8:00–14:00; sportelli su appuntamento", desc:"Permessi di soggiorno, passaporti, denunce", page:"guida.html", kw:"questura polizia permesso soggiorno passaporto documenti"},
      {name:"Agenzia delle Entrate — Sassari", lat:40.7220, lng:8.5530, addr:"Via Zanfarino", phone:"079 206711", hours:"Lun–Ven 8:30–13:00; Mar anche 14:30–16:30", desc:"Codice fiscale, partita IVA, dichiarazioni", page:"guida.html", kw:"agenzia entrate codice fiscale partita iva tasse zanfarino"},
      {name:"Poste Italiane — Ufficio Centrale", lat:40.7243, lng:8.5595, addr:"Via Brigata Sassari 13", phone:"079 2116111", hours:"Lun–Ven 8:20–19:05 | Sab 8:20–12:35", desc:"Sede centrale", page:"", kw:"poste italiane ufficio postale raccomandata pacco brigata sassari"},
      {name:"ASL Sassari — Sede Centrale", lat:40.7235, lng:8.5650, addr:"Via Enrico Costa 57", phone:"079 2061000", hours:"Lun–Ven 8:00–14:00; sportelli su appuntamento", desc:"Tessera sanitaria, scelta medico, ticket", page:"guida.html", kw:"asl sassari tessera sanitaria medico base iscrizione costa"},
      /* --- Salute (NUOVI da xlsx suggeriti) --- */
      {name:"Ambulatorio Alcologia ASL", lat:40.7230, lng:8.5545, addr:"Via Sardegna", phone:"079 2062511", hours:"Lun–Sab 8:00–14:00", desc:"Dipendenza alcol — ASL Sassari", page:"servizi.html", kw:"alcologia dipendenza alcol sardegna asl ambulatorio"},
      {name:"Unità Gioco Azzardo Patologico", lat:40.7210, lng:8.5545, addr:"Via Amendola 55", phone:"079 2062216", hours:"", desc:"Presso CSM1 — dipendenza gioco d'azzardo", page:"servizi.html", kw:"gioco azzardo patologico gap csm amendola"},
      {name:"Ospedale Civile SS. Annunziata", lat:40.7270, lng:8.5540, addr:"Via Enrico De Nicola 1", phone:"079 9955111", hours:"24h (Pronto Soccorso)", desc:"Pronto Soccorso, tutti i reparti", page:"servizi.html", kw:"ospedale pronto soccorso annunziata de nicola emergenza ricovero"},
      {name:"Clinica Chirurgica Universitaria", lat:40.7265, lng:8.5520, addr:"Viale San Pietro", phone:"079 228000", hours:"", desc:"Struttura universitaria", page:"servizi.html", kw:"clinica chirurgica universitaria san pietro"},

      /* --- Accoglienza (NUOVI) --- */
      {name:"Centro Accoglienza Mondo X", lat:40.7258, lng:8.5596, addr:"Piazza Sant'Antonio 15", phone:"079 2606600", hours:"", desc:"Accoglienza e volontariato", page:"servizi.html", kw:"mondo x accoglienza volontariato sant antonio"},

      /* --- Uffici pubblici (NUOVI) --- */
      {name:"INPS Sassari", lat:40.7170, lng:8.5530, addr:"Via Rockefeller 68", phone:"803 164", hours:"Lun–Ven 8:30–12:30", desc:"Pensioni, ISEE, prestazioni sociali", page:"guida.html", kw:"inps pensione isee previdenza sociale rockefeller contributi"},
      {name:"Carabinieri — Comando Provinciale", lat:40.7230, lng:8.5605, addr:"Via Brigata Sassari", phone:"079 233500", hours:"24h", desc:"Denunce, emergenze 112", page:"servizi.html", kw:"carabinieri denunce emergenza 112 brigata sassari"},
      {name:"Guardia di Finanza", lat:40.7215, lng:8.5630, addr:"Via Carlo Alberto 25", phone:"079 2007111", hours:"", desc:"Segnalazioni evasione e truffe", page:"servizi.html", kw:"guardia finanza evasione truffe carlo alberto"},
      {name:"Vigili del Fuoco", lat:40.7350, lng:8.5500, addr:"Viale Porto Torres", phone:"079 2849011", hours:"24h (emergenze: 115)", desc:"Emergenze: 115", page:"servizi.html", kw:"vigili fuoco pompieri 115 emergenza incendio porto torres"},
      {name:"Ufficio Anagrafe — Comune", lat:40.7248, lng:8.5590, addr:"Via Coppino", phone:"079 279111", hours:"", desc:"Residenza, carta identità, certificati", page:"guida.html", kw:"anagrafe residenza carta identita certificati coppino comune"},

      /* --- Sindacati (NUOVI) --- */
      {name:"CGIL Sassari — Camera del Lavoro", lat:40.7170, lng:8.5530, addr:"Via Rockefeller 33", phone:"079 219105", hours:"", desc:"Sindacato, CAF, patronato INCA", page:"servizi.html", kw:"cgil sindacato camera lavoro rockefeller patronato"},
      {name:"UIL Sassari", lat:40.7248, lng:8.5590, addr:"Piazza Castello 11", phone:"", hours:"", desc:"Sindacato, patronato ITAL", page:"servizi.html", kw:"uil sindacato patronato ital castello"}
    ]
  },

  /* ────────────────────────────────────────────────
     RICERCA EXTRA — Voci non mappabili ma utili
     per la barra di ricerca (farmacie, quartieri, ecc.)
     lat/lng = 0 → non compaiono sulla mappa
     ──────────────────────────────────────────────── */
  "quartieri": {
    label: "Quartieri",
    color: "#5D4037",
    icon: "📍",
    showOnMap: false,  /* ← non mostrare in mappa */
    items: [
      {name:"Centro Storico", lat:0, lng:0, addr:"Sassari — zona centrale", phone:"", hours:"", desc:"Il cuore antico della città", page:"centrostorico.html", kw:"centro storico piazza italia castello santa caterina"},
      {name:"Monte Rosello", lat:0, lng:0, addr:"Sassari — zona nord", phone:"", hours:"", desc:"~8.000 abitanti, parchi e palestre", page:"monte.html", kw:"monte rosello baddimanna meridiana emanuela loi"},
      {name:"Sacro Cuore", lat:0, lng:0, addr:"Sassari — zona sud-est", phone:"", hours:"", desc:"Quartiere residenziale anni '30", page:"cuore.html", kw:"sacro cuore basilica pavese"},
      {name:"Sant'Orsola", lat:0, lng:0, addr:"Sassari — zona nord-est", phone:"", hours:"", desc:"Zona nord-est, forte identità comunitaria", page:"orsola.html", kw:"sant orsola basket scassellati ortobene"},
      {name:"Latte Dolce", lat:0, lng:0, addr:"Sassari — periferia nord", phone:"", hours:"", desc:"Comunità multiculturale", page:"latte.html", kw:"latte dolce madonna kennedy salesiani piscine"},
      {name:"Santa Maria di Pisa", lat:0, lng:0, addr:"Sassari — periferia nord-ovest", phone:"", hours:"", desc:"Periferia nord-ovest", page:"pisa.html", kw:"santa maria pisa dettori donizetti marconi"},
      {name:"Carbonazzi", lat:0, lng:0, addr:"Sassari — periferia sud-ovest", phone:"", hours:"", desc:"Murales, sport, riqualificazione", page:"carbonazzi.html", kw:"carbonazzi aldo moro forlanini gymnica padel"},
      {name:"Luna e Sole", lat:0, lng:0, addr:"Sassari — zona est", phone:"", hours:"", desc:"~10.000 abitanti, zona est", page:"lunasole.html", kw:"luna sole palaserradimigni vanni sanna bowling"}
    ]
  },

  "farmacie": {
    label: "Farmacie",
    color: "#388E3C",
    icon: "💊",
    showOnMap: false,
    items: [
      {name:"Farmacia Sigurani", lat:0, lng:0, addr:"Piazza S. Maria", phone:"079 233440", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Centro Storico", page:"centrostorico.html", kw:"farmacia sigurani centro"},
      {name:"Farmacia Pascoli", lat:0, lng:0, addr:"C.so Pascoli", phone:"079 233525", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Monte Rosello", page:"monte.html", kw:"farmacia pascoli monte rosello"},
      {name:"Farmacia Tanda", lat:0, lng:0, addr:"Via Leoncavallo", phone:"079 262345", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Latte Dolce / Pisa", page:"latte.html", kw:"farmacia tanda latte dolce pisa"},
      {name:"Farmacia Sant'Orsola Nord", lat:0, lng:0, addr:"Via Ortobene", phone:"079 296240", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Sant'Orsola", page:"orsola.html", kw:"farmacia ortobene orsola"},
      {name:"Farmacia Masala", lat:0, lng:0, addr:"Via Forlanini", phone:"079 271330", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Carbonazzi", page:"carbonazzi.html", kw:"farmacia masala carbonazzi forlanini"},
      {name:"Farmacia Santa Chiara", lat:0, lng:0, addr:"Via Togliatti", phone:"079 296112", hours:"Lun–Ven 8:30–13:00 / 16:00–20:00; Sab 8:30–13:00", desc:"Luna e Sole", page:"lunasole.html", kw:"farmacia santa chiara togliatti luna sole"}
    ]
  },

  "trasporti": {
    label: "Trasporti",
    color: "#F57C00",
    icon: "🚌",
    showOnMap: false,
    items: [
      {name:"ATP Sassari — Linee autobus", lat:0, lng:0, addr:"Corso Vico / Stazione autobus", phone:"800 865042", hours:"Lun–Dom servizio continuativo", desc:"Trasporto pubblico urbano", page:"quartieri.html", kw:"autobus bus atp linea fermata orari"},
      {name:"Linea 22 — Centro/Monte Rosello/Latte Dolce", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Linea autobus Centro–Monte Rosello–Latte Dolce", page:"latte.html", kw:"linea 22 autobus monte rosello latte dolce pisa"},
      {name:"Linea 4 — Carbonazzi/Latte Dolce/Sant'Orsola", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Linea autobus Carbonazzi–Latte Dolce–Sant'Orsola", page:"carbonazzi.html", kw:"linea 4 autobus carbonazzi latte dolce orsola"}
    ]
  },

  "pagine": {
    label: "Pagine speciali",
    color: "#546E7A",
    icon: "📄",
    showOnMap: false,
    items: [
      {name:"Segnala un servizio o suggerisci una modifica", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Form online per segnalazioni e suggerimenti", page:"segnala.html", kw:"segnala errore suggerisci modifica collabora"},
      {name:"Chi siamo — Il progetto Sulla Soglia", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Pagina di presentazione del progetto Sulla Soglia", page:"chisiamo.html", kw:"chi siamo edupe educativa strada progetto collabora"},
      {name:"Guida per chi è nuovo a Sassari", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Multilingue IT/EN/FR/AR", page:"guida.html", kw:"nuovo sassari straniero studente arrivo guida primi passi"},
      {name:"Tutte le associazioni e il volontariato", lat:0, lng:0, addr:"", phone:"", hours:"", desc:"Elenco completo associazioni e volontariato a Sassari", page:"associazioni.html", kw:"associazioni volontariato cooperativa sociale ente"}
    ]
  }

};


/* ======================================================================
   FUNZIONI DI UTILITÀ
   Usate da mappa.html e search.js — NON MODIFICARE
   ====================================================================== */

/**
 * Restituisce un array piatto di tutti i punti,
 * ognuno arricchito con la categoria di appartenenza.
 * Usato dalla ricerca.
 */
function getAllItems() {
  var all = [];
  Object.keys(SITE_DATA).forEach(function(catKey) {
    var cat = SITE_DATA[catKey];
    cat.items.forEach(function(item) {
      all.push({
        name:  item.name,
        cat:   cat.label,
        icon:  cat.icon,
        color: cat.color,
        page:  item.page,
        kw:    item.kw,
        addr:  item.addr,
        phone: item.phone,
        hours: item.hours,
        desc:  item.desc,
        lat:   item.lat,
        lng:   item.lng
      });
    });
  });
  return all;
}

/**
 * Restituisce solo le categorie che devono apparire sulla mappa
 * (quelle con coordinate reali e showOnMap !== false).
 */
function getMapCategories() {
  var cats = {};
  Object.keys(SITE_DATA).forEach(function(catKey) {
    var cat = SITE_DATA[catKey];
    if (cat.showOnMap === false) return; /* salta quartieri, farmacie, ecc. */
    cats[catKey] = {
      label: cat.label,
      color: cat.color,
      icon:  cat.icon,
      items: cat.items.filter(function(p) { return p.lat !== 0 && p.lng !== 0; })
    };
  });
  return cats;
}
