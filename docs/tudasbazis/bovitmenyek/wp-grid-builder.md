---
title: "WP Grid Builder"
description: "Prémium WordPress bővítmény egységes grid-elrendezéshez, carouselhez és fejlett, facettált szűréshez – nagy teljesítménnyel és vizuális szerkesztéssel."
sidebar_label: "WP Grid Builder"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder egy „minden egyben” eszköz, amivel tartalmakat (bejegyzések, termékek, felhasználók, taxonómiák) tudsz rugalmas rácsokban és carouselekben megjeleníteni, és ezeket **facettált szűrőkkel** pillanatok alatt leszűrni. A WordPress alapból nem kínál erős, többkritériumos szűrést gyors válaszidővel – a WP Grid Builder ezt pótolja egy **indexelt adatbázis-táblával**, AJAX-alapú működéssel és vizuális eszközökkel, hogy mindez kódolás nélkül is gördülékeny legyen.

## Fő funkciók, érthetően

### Grid és megjelenítés
- **Elrendezések:** Masonry, Justified, Metro – bármelyikből egy kattintással **érintésvezérelt carousel** készíthető.
- **Teljesen reszponzív:** rugalmas oszlopszámok, sor-magasságok, **lazy loading**, 20+ animáció, RTL és beépített lightbox.
- **Kártyaépítő:** vizuális drag-and-drop szerkesztő 20+ előre gyártott kártyával, több száz betűtípussal és ikonokkal. A kártyákra dinamikus adatokat húzhatsz: poszt/term/user mezők, illetve ACF/Meta Box/Pods egyéni mezők.

Mit jelent ez a gyakorlatban? Gyorsan építhetsz portfóliót, termékgrideket, karuszeleket, és minden tartalomelemet (kép, cím, ár, címke, gomb) teljesen a saját arculatodra szabhatod.

### Facettált szűrés
- **20+ facettatípus:** checkbox, rádió, legördülő, gomb, hierarchia, szám- és dátumtartomány, értékelés, kereső, rendező, **pagináció** és **load more**, valamint reset.
- **AJAX és URL-perzisztencia:** szűrés közben az oldal nem tölt újra, a **vissza/előre** böngészőgombok és a megosztható URL-ek működnek.
- **Index tábla:** a szűrés egy dedikált, automatikusan karbantartott táblán fut, ezért nagy adatmennyiségnél is gyors. Kézi/automata újraindexelés adott.

A “csak releváns opciók” megjelenítése és a többkritériumos finomítás így nem terheli a fő lekérdezést – a felhasználó gyors, pontos találatokat kap.

### WordPress blokkok és archívumok szűrése
- **Blokkok szűrése:** a Query Loop és több népszerű lekérdező blokk tartalma közvetlenül facettázható.
- **Archívumok:** a bővítmény képes a fő lekérdezést is szűrni, még grid nélkül is. Így például a boltoldal vagy blog archívum meglévő sablonját tudod felokosítani.
- **Egy grid, több sablon:** egyetlen gridből több archívum-sablon eredményét is meg tudod jeleníteni, külön beállítás nélkül.

### Integrációk és add-onok
- **Ökoszisztéma:** működik bármely témával, a blokk- és shortcode-alapú tartalommal, kompatibilis számos bővítménnyel (például webáruházak, keresőmotorok, többnyelvűség, page builderek).
- **Map Facet:** térképes szűrő Google/Mapbox/Leaflet alapon, geolokációval és **távolság szerinti rendezéssel**.
- **Caching:** az aszinkron kérések cache-elése egyedi táblában a még gyorsabb válaszidőért.
- **Multilingual:** többnyelvű oldalakhoz nyelvhelyes lekérdezés és string-fordítás, egyetlen grid/facet készlet mellett.

### Fejlesztői lehetőségek
- **PHP/JS API:** akciók, filtrek, JS események és metódusok. REST API útvonalak is rendelkezésre állnak az adatok lekérdezéséhez és kereséshez.
- **Developer-friendly mód:** facetteket akkor is használhatsz, ha nem gridbe kötöd (egyedi markup és lekérdezés mellett).

## Gyakorlati példák

### 1) Webáruház termékszűrés
- Facettek: **ártartomány**, készlet, akciós, értékelés, attribútumok.
- Interakció: AJAX-os rendezés, **pagináció vagy végtelen görgetés**.
- Tipp: használd a bővítmény paginációját, és kapcsold ki a téma/bolt alap paginációját és rendezőjét a duplikáció és konfliktusok elkerüléséhez.

### 2) Blog/portfólió
- Facettek: kategória, címke, szerző, dátumtartomány, egyéni taxonómiák.
- Kivitelezés: Query Loop-ot szűrj facettekkel, a kártyaépítőben állítsd be a bejegyzés-kártyát (kép, cím, kivonat, gomb).

### 3) Katalógus, ingatlan, állás
- Map Facet geolokációval, marker-clusteringgel, **távolság szerinti rendezéssel**.
- ACF/Meta Box pozíciómezők alapján pontos találati lista és térképes vizualizáció.

### 4) Felhasználó- és taxonómialisták, tananyagok
- Facettázd a szerzőket, szerepköröket, kurzusokat vagy term taxonómiákat – a kártyaépítővel egységes megjelenést adva.

### Rövid shortcode példa

```shortcode
[wpgb_facet id="search"] 
[wpgb_facet id="category"]
[wpgb_facet id="price_range"]

[wpgb_grid id="12"]
```

Archívum főlekérdezés megjelenítése:

```shortcode
[wpgb_grid id="12" is_main_query="true"]
```

## Előnyök és értékajánlat

- **Gyors, skálázható szűrés:** az index tábla és az opcionális cache miatt nagy adatnál is fürge.
- **Kevesebb bővítmény, kevesebb kód:** grid + carousel + facettek + térkép egy rendszerben, vizuális szerkesztéssel.
- **Konzisztens UX:** AJAX, megosztható URL-ek, vissza/előre kompatibilis böngészés.
- **Rugalmas testreszabás:** kártyaépítő, tipográfia, ikonok, dinamikus mezők, integrációk.
- **Fejlesztőbarát:** API-k, események, REST; könnyű bekötni egyedi use case-ekbe.

## Kinek ajánlott?

- **Webáruházaknak:** professzionális termékszűrés ár, készlet, attribútumok szerint.
- **Ügynökségeknek és fejlesztőknek:** komplex katalógusok, portálok, többnyelvű és térképes projektek gyors kivitelezése.
- **Tartalomkészítőknek:** blogok, portfóliók, magazinok egységes, látványos gridje és finom szűrése.
- **Page builder felhasználóknak:** hivatalos integrációk stabil facettázással.

## Telepítés, kompatibilitás, licenc

- Bármely témával és szerkesztővel működik (blokkok és shortcodes). Népszerű page builderekhez hivatalos add-onok érhetők el.
- Minimum környezet: WordPress 6.0 és PHP 7.0 (ajánlott PHP 8.x).
- Éves licenc-csomagok érhetők el; minden add-on a licenc része, pénzvisszafizetési garanciával.

## Bevált gyakorlatok

- **Indexelés:** nagy adatnál hagyatkozz az automatikus indexre; tartalomfrissítés után futtasd az újraindexelést.
- **Archívumok/bolt:** kapcsold be az egyedi tartalomszűrést, használd a bővítmény paginációját, és kapcsold ki a téma/bolt saját paginációját/rendezőjét.
- **Cache:** gyorsít, de véletlenszerű sorrend vagy erősen feltételes megjelenítés mellett óvatosan használd; adj meg kivételeket (pl. kereső facettákra).
- **Térkép:** állítsd be a koordinátamezőket, kapcsold a marker-clusteringet, és engedélyezd a geolokációt, ha szükséges.
- **Page builderek:** a hivatalos integrációs add-onok biztosítják a stabil facettázást és a grid-archívum kapcsolatot.

Ezzel a bővítménnyel gyors, vizuálisan egységes, skálázható és fejlesztőbarát tartalomlistákat és szűrőket építhetsz – kódolás nélkül, mégis profi kontrollal.