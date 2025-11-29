---
title: "JetSmartFilters"
description: "Dinamikus, AJAX-alapú, facettált szűrőrendszer WordPresshez, amely Elementorral, Gutenberggel és Bricks-szel működik, teljes WooCommerce-támogatással."
sidebar_label: "JetSmartFilters"
---

## Mi ez és milyen problémát old meg?

A JetSmartFilters a Crocoblock dinamikus szűrőmegoldása, amivel kódolás nélkül építhetsz gyors, facettált (több feltételes) szűrést WordPressen. Elementor, a WordPress Block Editor (Gutenberg) és a Bricks builder felületén is natívan működik, WooCommerce-kompatibilis. Segít:
- nagy katalógusokban villámgyorsan és pontosan találatokat adni (**AJAX**),
- a “szűrt” állapotot megosztható, **SEO-barát URL**-re tenni,
- több komponens (pl. lista + térkép) **szinkron szűrését** megoldani,
- összetett, **hierarchikus** szűréseket felépíteni,
- többnyelvű (**WPML**) projekteket kiszolgálni,
- térképes, **távolság alapú** keresést biztosítani.

## Fő funkciók, magyarázattal

### Szűrőtípusok (12+)
- **Checkboxes / Radio / Select / Search**: klasszikus mezők kategóriákra, tulajdonságokra, kulcsszavakra.
- **Range** (csúszka) és **Check Range** (előre definiált sávok): ár, méret vagy bármely számszerű meta gyors szűrésére.
- **Rating**: értékelés szerinti szűrés boltokban vagy könyvtárakban.
- **Date Range / Date Period**: időintervallum vagy relatív időszak (pl. elmúlt 7 nap).
- **Alphabet**: cím szerinti betűrendes böngészés.
- **Sorting**: rendezés ár, dátum, népszerűség szerint.
- **Visual**: szín- vagy képalapú opciók (pl. színminták WooCommerce-hez).
- **Hierarchy Select**: több szintű kiválasztás (pl. kategória → alkategória).
- **Hidden Filter**: rejtett paraméterek a lekérdezés finomításához (pl. csak akciós).
- **Location & Distance**: geokeresés megadott ponthoz mért távolsággal (JetEngine Geo Search szükséges).

### Alkalmazási módok és AJAX
- **AJAX**: azonnali frissítés oldal-újratöltés nélkül.
- **Page Reload**: klasszikus újratöltéssel, ha ezt igényled.
- **Mixed**: AJAX-élmény, de közben az URL is frissül a megoszthatóság és SEO miatt.
- **AJAX kéréstípusok**: default, referrer, self – összetett elrendezéseknél segítenek pontosan megadni, melyik komponens mit frissítsen.

### Indexer (számlálók és teljesítmény)
- **Darabszámok** az opciók mellett (pl. “Piros (12)”).
- **Üres opciók** elrejtése vagy tiltása.
- **Automatikus újraindexelés** nagyobb adatbázisokhoz. A felhasználó csak elérhető választékot lát, gyorsabb a döntés.

### URL és SEO
- **Plain vs. Permalink**: választható URL-struktúra.
- **URL Aliases**: beszédes, szebb szűrőparaméterek (pl. color=red).
- **SEO Rules**: megadhatod, mely szűrt állapotok kerüljenek a sitemapbe, és dinamikus **SEO cím/description** is beállítható.

### Providerek és integráció
- Szűrhető **Elementor Pro** archívumok és gridek, **JetEngine** (Listing Grid, Map, Calendar, Table/Chart), **JetWooBuilder** terméklisták, **WooCommerce** shortcode-ok és **Bricks Query Loop**.
- **Additional Providers**: egy szűrő több listát/térképet is frissíthet egyszerre.
- **Query ID**: az adott listával való egyértelmű összekapcsolás.
- **Adatforrások**: taxonómiák, meta mezők, bejegyzések, kézi értéklista; Query Variable/Builder támogatás.
- **Mezőkezelők**: jól működik ACF, Pods, Meta Box és JetEngine mezőkkel.

### Felhasználói élmény
- **Active Filters/Active Tags**: az aktuálisan alkalmazott szűrők láthatók és egyenként törölhetők.
- **Apply/Remove**: gombos vezérlés, ha nem azonnali alkalmazást szeretnél.
- **Pagination**: lapozás, “Load more”, előző/következő.
- **Provider preloader**, hozzáférhetőség és kompatibilitási beállítások.

## Gyakorlati példák

- **Webshop (WooCommerce)**: Árhoz **Range**, színhez **Visual**, márkához **Checkboxes**, értékeléshez **Rating**. **Mixed** mód, hogy az URL megosztható legyen; **Indexer** a készleten lévő opciókra; **Active Filters** a gyors törléshez; **SEO Rules** a fontos állapotok indexeléséhez.
- **Ingatlan-katalógus**: **JetEngine Listing Grid** + **Map Listing** közös szűrése **Additional Providers**-szal. Város → kerület **Hierarchy Select**, alapterület **Range**, elhelyezkedéshez **Location & Distance**. A térkép és a lista együtt szűkül.
- **Blog/portfólió**: **Alphabet** a címekhez, **Date Period** az új tartalomra, **Sorting** népszerűség szerint. **Hidden Filter**-rel kiemelt posztokat automatikusan előresorolhatsz.

## Hogyan épül fel egy szűrés? (rövid lépések)

1. Menj az adminban: Smart Filters > Add New.
2. Válassz **szűrőtípust** és **adatforrást** (tax/meta/post/manuális).
3. Állítsd be a **Query Variable/ID**-t, ha szükséges.
4. Helyezd ki a szűrő widgetet/blokkot a builderben a szűrendő listával egy oldalon.
5. A szűrőn állítsd be a **Provider**-t (This filter for) és – ha több lista/térkép is van – az **Additional Providers**-t.
6. Válaszd ki az **Apply type**-ot (AJAX / Page reload / Mixed).
7. Kapcsold be az **Indexer**-t (számlálók, üres opciók kezelése).
8. Finomhangold az **URL/SEO** beállításokat (Permalink, Aliases, SEO Rules).

```
Gyors ellenőrzőlista
- Filter Type: Checkboxes
- Data Source: Taxonomy (pl. product_cat)
- Apply type: Mixed
- Provider: Listing Grid (Query ID: shop_grid)
- Additional Providers: Map Listing
- Indexer: Show counter + Hide empty
- URL: Permalink + Aliases; SEO Rules: only key states
```

## Előnyök és értékajánlat

- **Jobb találhatóság** nagy adatbázisokban (gyors, releváns listák).
- **Megosztható, SEO-barát** szűrt URL-ek, sitemap integrációval.
- **Idő- és költségmegtakarítás**: összetett logika kód nélkül.
- **Skálázható** teljesítmény (**Indexer**, AJAX).
- **Rugalmas integráció** több builderrel és adatforrással.
- **Professzionális UX**: vizuális opciók, aktív szűrők, lapozás.

## Kinek ajánlott?

- **Webshop tulajdonosoknak**: konverziót növelő, gyors termékszűrés.
- **Katalógusoknak/könyvtáraknak** (ingatlan, autó, állás): összetett, többtényezős szűrés térképpel.
- **Ügynökségeknek/fejlesztőknek**: egységes szűrőréteg Elementor/Gutenberg/Bricks alatt.
- **Tartalomgazda blogoknak/portfólióknak**: rendezett böngészés, betűrendes és idő alapú szűrés.
- **Többnyelvű oldalaknak**: WPML-kompatibilis szűrők és címkék.
- **Geolokációs projekteknek**: hely- és távolságszűrés térképes listákkal.

A JetSmartFilters a JetPlugins ökoszisztéma része. Ha facettált keresést, szinkronizált listákat és SEO-barát szűrést szeretnél egyben, ez a bővítmény célzott, professzionális megoldás WordPressre.