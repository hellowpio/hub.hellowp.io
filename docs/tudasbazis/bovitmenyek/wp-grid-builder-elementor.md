---
title: "WP Grid Builder - Elementor"
description: "Prémium rácselrendezés és facettás szűrés WordPresshez, natív Elementor-integrációval (Grid és Facet widgetek)."
sidebar_label: "WP Grid Builder - Elementor"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder egy prémium WordPress bővítmény, amellyel rugalmas **grid elrendezéseket** és valódi **facettás szűrést** készíthetsz bejegyzésekhez, termékekhez, felhasználókhoz és taxonómiákhoz. Az Elementor kiegészítője két új widgetet ad (Grid és Facet), és képes közvetlenül az Elementor saját listázó elemeit szűrni. A cél: összetett, gyors, kódmentes keresés és gyönyörű kártya-alapú megjelenítés – egy helyen.

## Fő funkciók

### Facettás szűrés, ami tényleg skálázódik
- Több mint 20 **facet típus**: checkbox, radio, select, gombok, hierarchia, szám- és dátumtartomány, értékelés, kereső, rendező, reset, lapozás és „Load More”.
- **AJAX-alapú** működés, ezért valós időben frissül a találati lista.
- **URL-paraméterek és böngésző-előzmények**: minden szűrési állapot könyvjelzőzhető és megosztható.
- **Index tábla** gyorsítja a lekérdezéseket nagy adatállománynál is.
- **ACF, Meta Box, Pods** és **WooCommerce/EDD** mezők natív kezelése.

### Grid elrendezések és kártyaépítő
- Rácsok: **Masonry**, **Justified**, **Metro**, bármelyikből **karusszel** készíthető.
- **Beépített lightbox**, **lazy loading**, 20+ belépési és megjelenítési animáció.
- **Drag & drop kártyaépítő**: előre gyártott kártyák, Google fontok, SVG ikonok.
- **Dinamikus adatok és feltételes megjelenítés**: a kártya elemei az adatokhoz igazodnak, kód nélkül.

### Elementor-integráció a szerkesztőben
- Kapsz két widgetet: **Grid** és **Facet**.
- A Facet widgettel közvetlenül szűrheted az Elementor listázó elemeit (pl. Posts, Portfolio, Loop Grid, Archive Posts, WooCommerce Products/Archive Products, JetEngine Listing Grid).
- Az Elementor saját lapozása helyett a WPGB **Pagination** vagy **Load More** facetjét használd.
- Működik **Popupokban** is (Facet és Grid).

### Teljesítmény és cache
- A dedikált **indexelő** teszi gyorssá a szűrést.
- **Caching add-on**: a grid/facet kérés-válaszok cache-elése, kivételek megadásával és időzített ürítéssel. (Kereső facetteket ne cache-elj.)

### Hozzáférhetőség és SEO
- **WCAG-elvű** komponensek, billentyűzet-navigáció, érthető ARIA.
- **SEO-barát** HTML-struktúra; a facettázott URL-ek megoszthatók és visszaléphetők.

### Fejlesztői bővíthetőség
- Gazdag **hook**-készlet (actions/filters), **JS események és metódusok**.
- Saját facet- és kártyablokkok készítése, indexelő testreszabása.
- Shortcode, blokk, widget és REST végpontok.

## Gyakorlati példák

- **Webáruház**: Termékek szűrése kategória, ár-tartomány, szín, készlet és értékelés szerint. A találatok azonnal frissülnek, a felhasználó nem veszti el a kontextust, a lapozás „Load More”-ral történik.
- **Ingatlan/állás katalógus**: Város, ár, alapterület, típus, dátum és egyedi mezők kombinálása. A hierarchikus facettek szépen kezelik a régió → város → kerület logikát.
- **Tartalommagazin**: Szerző, címke, rovat, dátum és tartalomtípus szűrése egy összetett archívumban, megosztható URL-ekkel.
- **Térképes keresés**: Helyalapú listázás **Map Facet**-tel, geolokáció, marker clustering, és „szűrés a nézetre” térképműveletekkel.

## Gyors kezdés Elementorral

1. Telepítsd és aktiváld a WP Grid Buildert és az Elementor kiegészítőjét (Elementor szükséges).
2. Hozz létre **facetteket** (pl. kategória, ár min/max), majd futtasd az **indexelőt**.
3. Az Elementorban helyezd el a listázó elemet (pl. **Loop Grid**, **Posts**, **Woo Products**).
4. Adj hozzá egy **Facet** widgetet, és a legördülőben válaszd ki, melyik grid/widget legyen a célja.
5. Kapcsold ki az Elementor beépített lapozását, és adj hozzá **Pagination** vagy **Load More** facetet (kattintás vagy görgetés aktiválásra).
6. Teszteld a szűrést, ellenőrizd az URL-paramétereket és a visszalépést.

Példa shortcode-os beillesztéshez (nem Elementor esetén):
```
[wpgb_grid id="GRID_ID"]
[wpgb_facet id="FACET_ID"]
[wpgb_facet id="PAGINATION_FACET_ID"]
```

## Fontos megjegyzések és best practice

- **Egy facet csak egy** tartalmat/lekérdezést szűrhet. Ha több listát akarsz egyszerre szűrni, mindegyikhez külön facetet rendelj.
- **Archívumok szűrése**: a téma/builder saját lapozása vagy JS-alapú elrendezése ütközhet. Ilyenkor kapcsold ki a natív lapozást és használd a WPGB Pagination facetet.
- **Cache**: ne cache-elj olyan nézetet, ahol véletlensorrend vagy erős feltételes megjelenítés van; a **Search** facetteket érdemes kizárni.

## Miért érdemes használni?

- **Idő- és költségmegtakarítás**: összetett szűrés kód nélkül, vizuális beállításokkal.
- **Gyors és skálázható**: indexelt, AJAX-os facettek, cache opcióval.
- **Jobb UX és konverzió**: valós idejű találatfrissítés, megosztható URL-ek, hozzáférhető komponensek.
- **Egységes ökoszisztéma**: Elementor, Bricks, Oxygen, Beaver Builder, WooCommerce, EDD, ACF, Meta Box, Pods, SearchWP, Relevanssi, WPML/Polylang, LearnDash kompatibilitás.

## Kinek ajánlott?

- **Webáruházaknak**: gyors termékszűrés, skálázható teljesítmény, „Load More” lapozás.
- **Katalógus- és könyvtár-oldalaknak**: sok szempontos keresés, hierarchiák, egyedi mezők.
- **Tartalomportáloknak és magazinoknak**: rugalmas archívumszűrés, SEO-barát URL-ek.
- **Ügynökségeknek és site buildereknek**: stabil integráció több builderrel, gyors szerkesztői workflow, fejlesztői hookok.

Összességében a WP Grid Builder – Elementor kiegészítővel egy komplett, professzionális facettás keresési és grid-megjelenítési megoldást kapsz, amely a szerkesztőben dolgozik, gyors, hozzáférhető és könnyen testreszabható – pont azt adja, ami a WordPress alapból hiányzik, de a modern projektekhez elengedhetetlen.