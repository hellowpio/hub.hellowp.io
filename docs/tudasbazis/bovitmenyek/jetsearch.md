---
title: "JetSearch"
description: "Prémium, AJAX‑alapú WordPress kereső bővítmény élő találatokkal, WooCommerce- és egyedi mező támogatással."
sidebar_label: "JetSearch"
---

## Mi ez és milyen problémát old meg?

A JetSearch a Crocoblock prémium kereső bővítménye WordPresshez. Élő, AJAX‑alapú keresést ad a webhelyedhez, így a találatok gépelés közben, oldalfrissítés nélkül jelennek meg. A natív WordPress‑keresés korlátait (lassú UX, gyenge relevancia, korlátozott testreszabás, hiányzó SKU/attribútum keresés) kifejezetten orvosolja – különösen WooCommerce‑en és nagy tartalomportálokon.

Prémium termék (nem a WordPress.org tárolóból), hivatalos támogatással Elementorhoz, a Blokkszerkesztőhöz (Gutenberg) és Brickshez. Két fő komponense van: **Ajax Search** és **Search Suggestions**.

## Fő funkciók és hogyan működnek

### Élő, AJAX‑alapú keresés
- Gépelés közben valós időben jelennek meg a találatok egy legördülő listában vagy külön találati területen.
- A találatok rendezhetők: **relevancia**, ID, szerző, cím, dátum, módosítás, véletlen és menürend szerint.
- A kiemelés funkció megmutatja, hol egyezik a lekérdezés a tartalommal.

### Keresési kör és források testreszabása
- Kereshetsz **posztokban, oldalakban, egyedi bejegyzéstípusokban (CPT), taxonómiákban** (kategória, címke, egyedi taxonómiák) és **egyedi mezőkben** (meta key‑k).
- Beállíthatod a **Sentence Search** módot (kifejezések pontos egyezésére).
- Források kombinálása, konkrét posztok/termékek és kifejezések **kizárása vagy bevonása**, találatok száma és oldalankénti limit precízen szabályozható.

### WooCommerce‑specifikus keresés
- Keresés **SKU**, termék meta és egyedi mezők, kategóriák, címkék és attribútumok alapján.
- Opcionálisan figyelembe veszi a **katalógus‑láthatóságot**, és dokumentáltan megoldható az **out‑of‑stock** termékek kizárása.
- A Crocoblock‑ökoszisztémában a foglalhatóság szerinti találat is támogatott.

### Keresési javaslatok és „fuzzy” képességek
- A **Search Suggestions** külön widget és egy admin felület, ahol a valódi felhasználói lekérdezésekből automatikusan, illetve kézzel felvett kifejezésekből listát építhetsz.
- **Súlyozás**, „**szülő–gyerek**” viszony (elgépelések automatikus korrekciójához), felhasználónkénti mentési limitek, **Top keresések** megjelenítése.
- „Fuzzy” és elgépelés‑korrekció támogatott; a felhasználói keresési előzmények javítják a javaslatokat.

### Találati terület testreszabása
- Készíthetsz **egyedi keresési eredményoldalt** és **saját URL‑t** adhatsz meg.
- Választható **listás / grid / masonry** nézet, **lapozás**, egyedi mezők értékeinek megjelenítése a kártyákban.
- Sablonozáshoz gyakori a JetEngine Listing Grid vagy JetWooBuilder használata.

### Több szerkesztő támogatása és admin
- Elementorban, Gutenbergben és Bricksben azonos logikájú panelek: **Search Form**, **Search Query**, **Results Area**, **Custom Fields**.
- Globális opciók a JetPlugins beállításai között.

### Többnyelvűség
- **WPML‑kompatibilis**, így nyelvenkénti indexelés és fordítás mellett is pontos találatokat ad.

## Gyakorlati példák

- Webáruház: a fejlécbe beteszed az Ajax Search widgetet, és SKU + attribútum alapú keresést kapcsolsz be. Kikapcsolod az out‑of‑stock megjelenítését, így a vevő csak elérhető terméket lát.
- Tartalomportál: CPT‑kben és taxonómiákban keresel; a „Szerző” és „Témakör” meta kulcsokat hozzáadod a találati kártyához.
- Saját eredményoldal: létrehozol egy „Keresés” oldalt grid nézettel, és hozzárendeled a bővítményben mint egyedi találati URL‑t.
- Javaslatok: a Suggestions dashboardon felveszel brand neveket nagyobb súllyal, és engedélyezed, hogy a leggyakoribb keresések megjelenjenek már fókuszkor.

Példa egyedi mezők konfigurációjára:
```
Custom Fields:
- _sku (Címke: SKU)
- author_name (Címke: Szerző)
- event_date (Címke: Dátum, formázás: Y.m.d)
```

## Előnyök és értékajánlat

- **Gyorsabb megtalálás**: valós idejű találatokkal csökken a kilépések száma, nő a konverzió.
- **Jobb relevancia**: rendezés relevancia szerint, meta és taxonómia bevonásával.
- **Teljes kontroll**: források, kizárások, limit, egyedi mezők – mind adminból.
- **Professzionális UX**: testreszabott kártyák, kiemelés, grid/masonry, saját URL.
- **Kevesebb fejlesztés**: komplex keresési logika kódolás nélkül, builder‑integrációval.
- **WooCommerce‑ready**: SKU/attribútum/meta keresés, készlet és láthatóság kezelése.
- **Többnyelvűség**: WPML‑lel tiszta, nyelvhez kötött találatok.

## Kinek ajánlott?

- **WooCommerce‑üzemeltetőknek**, akik gyors, pontos termékkeresést akarnak SKU és attribútum szerint.
- **Tartalomportáloknak / magazinoknak**, ahol CPT‑kben, taxonómiákban és metaadatokban kell keresni.
- **Ügynökségeknek és site buildereknek**, akik Elementor/Gutenberg/Bricks környezetben gyorsan akarnak prémium keresőt adni.
- **Többnyelvű oldalaknak**, ahol WPML mellett is stabil és releváns keresés szükséges.

## Bevezetés röviden

1. Add hozzá az Ajax Search elemet a fejlécbe.
2. Állítsd be a Search Query panelen a forrásokat, rendezést (pl. relevancia), kizárásokat.
3. A Results Area‑ban válaszd ki a nézetet, engedélyezd a highlightot és a lapozást.
4. Vedd fel a szükséges egyedi mezőket a Custom Fields részben.
5. Ha kell, hozz létre egyedi keresési eredményoldalt és állíts be saját URL‑t.
6. Kapcsold be a Search Suggestions‑t, súlyozd a fontos kifejezéseket, jelenítsd meg a top kereséseket.
7. WooCommerce esetén kezeld a katalógus‑láthatóságot és zárd ki a kifutott termékeket.
8. Többnyelvű oldalnál állítsd be a WPML‑integrációt.

Megjegyzés: ha a találati oldalon **szűrős (facet) böngészésre** is szükség van, érdemes a JetSearch‑t a JetSmartFilters‑szel kombinálni. Így az élő keresés és a facettált szűrés egymást kiegészítve ad teljes értékű keresési élményt.