---
title: "WP Grid Builder - Oxygen"
description: "Hivatalos add-on az Oxygen Builderhez, amely élő előnézettel és villámgyors, AJAX-os facettás szűréssel teszi szűrhetővé a rácsokat és listákat."
sidebar_label: "WP Grid Builder - Oxygen"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder egy prémium WordPress bővítmény rugalmas rácselrendezésekkel és valódi, indexelt, AJAX‑os **facettás szűréssel**. Az Oxygen add-on ennek a rendszernek az integrációja: két új elemet kapsz az Oxygen szerkesztőben (Grid és Facet), élő előnézettel. A gond, amit megold: WordPressben (és az Oxygen natív elemeivel) a többfeltételes, gyors szűrés és lapozás általában bonyolult és lassú. Itt a szűrés csak a szükséges elemeket rendereli újra, nem az egész oldalt – ettől az élmény azonnali és skálázható marad.

## Hogyan működik röviden?

- A plugin a szűrhető adataidat egy **index táblában** tartja, így a facettek gyorsan kérdezhetők le.
- Az interakciók **AJAX**-on mennek: a böngésző URL-je frissül (visszalépés, könyvjelző, megosztható szűrt állapot).
- Az Oxygenben a Facet elemet egy Gridhez vagy Oxygen komponenshez (Easy Posts, Repeater, Products List) kapcsolod. Szűréskor csak a célzott lista frissül, nem az egész oldal.
- Opcionális **cache** add-on gyorsítja a lekérdezéseket, finomhangolható kivételekkel.

## Fő funkciók részletesen

### Facettás keresés és szűrés
- Több mint 20 **facet típus**: checkbox, radio, legördülő, tartomány/slider, értékelés, dátum, keresőmező, rendezés, reset, lapozás és „load more”.
- **AJAX és URL-perzisztencia**: a szűrés nem tölt újra oldalt, miközben egyedi URL készül a kiválasztott feltételekhez.
- **Indexelt adatmodell**: a facettek adatai külön táblában vannak, így nagy adatállománnyal is gyors marad.

### Rácsok, karusszelek és Card Builder
- **Masonry/Justified/Metro** elrendezések, karusszel, reszponzív oszlopszám és sormagasság, lazy loading, animációk, lightbox.
- **Card Builder**: drag & drop kártyaépítő, kész kártyasablonokkal. Képes ACF/Meta Box/Pods mezőket, WooCommerce adatokat (ár, készlet, értékelés, kosár gomb) megjeleníteni.

### Oxygen integráció
- **Új elemek**: Grid és Facet közvetlenül az Oxygenben, élő rendereléssel.
- **Szűrhető Oxygen elemek**: Easy Posts, Repeater, Products List – a facettek stílusát az Oxygenen belül is testre szabhatod.
- **Teljesítmény**: csak a megcélzott lista frissül, nem az oldal egésze – gyors reakció nagy listáknál is.
- **Lapozás kezelése**: az Oxygen saját Pagination opcióját ne használd ezekhez a listákhoz; helyette a WP Grid Builder **Pagination** vagy **Load more** facetjeit alkalmazd, kattintásra vagy görgetésre.
- **Archív sablonok**: a Grid elemmel az archívumok (például blog kategóriák) eredményei is megjeleníthetők és szűrhetők.

### Térképes szűrés és teljesítmény-kiegészítések
- **Map Facet**: Google Maps/Mapbox/Leaflet alapú térképfacet, jelölőcsoportosítás, geolokáció, távolság szerinti rendezés.
- **Caching add-on**: facettek és tartalmi lekérdezések gyorsítótárazása, kivételek és élettartam beállításokkal, tömeges törléssel.

## Gyakorlati példák

- Webáruház: terméklista szűrése ár, készlet, akció, értékelés vagy attribútumok szerint. A Products List vagy a Grid mellé felteszed az ár‑slider és attribútum checkbox facetteket, majd egy „Load more” facetet a lapozáshoz.
- Blog/archívum: kategória, címke, dátum és szerző facettek kombinálása, plusz egy kereső és rendező facet (pl. legújabb elől). A böngésző URL-je tükrözi a kiválasztott feltételeket.
- Portfólió/galéria: masonry rács egyedi kártyákkal (kép, cím, címkék), téma és technológia szerinti szűréssel, „Load more” görgetésre.
- Cégtár/ingatlan/állások: ACF/Meta Box mezőkre épített szűrés (város, ár/tartomány, státusz), térképfacettel és távolság szerinti rendezéssel.

## Gyors bevezetés Oxygenben

1. Telepítsd és aktiváld a WP Grid Buildert és az Oxygen add-ont.
2. Hozz létre egy **Gridet** és a szükséges **facetteket** (mezők, taxonómiák), majd futtasd az indexelést.
3. Az Oxygen szerkesztőben:
   - Illeszd be a **Grid** elemet, vagy használd az **Easy Posts/Repeater/Products List** elemeket.
   - Illeszd be a **Facet** elemet, és a „Select a grid or element to filter” mezőben válaszd ki a célzott Gridet vagy Oxygen elemet.
   - Lapozáshoz a **Pagination** vagy **Load more** facetet használd, ne az Oxygen beépített Pagination opcióját.
4. Nagy forgalomnál kapcsold be a **Caching** add-ont, és zárd ki a dinamikus/kereső facetteket a cache-ből.

## Előnyök és értékajánlat

- **Gyors, skálázható szűrés**: indexelt adat és célzott újrarenderelés – jobb konverzió, kevesebb kilépés.
- **Editor‑barát munkafolyamat**: Oxygenben élő előnézet, drag & drop kártyaépítés.
- **Konzisztens UX**: egységes facetták a lapozáshoz és betöltéshez, oldalfrissítés nélkül.
- **Rugalmasság**: sokrétű elrendezések, számos facet típus, fejlett integrációk (ACF, WooCommerce, többnyelvűség).
- **Költség- és időmegtakarítás**: komplex, többfeltételes szűrések kódolás nélkül.

## Kinek ajánlott?

- **Webáruház üzemeltetőknek**: gyors termékszűrés, jobb vásárlói élmény.
- **Ügynökségeknek és fejlesztőknek**: megbízható, újrahasznosítható komponensek Oxygen projektekhez.
- **Tartalomgazda oldalaknak** (blog, magazin): összetett archívumok könnyű szűrése.
- **Katalógusoknak és adatbázis‑alapú oldalaknak**: cégtár, ingatlan, állás, esemény – ACF/Meta Box/Pods mezők kezelése.
- **Térképes kereséshez**: hely alapú böngészés és távolság szerinti rendezés.

## Korlátozások és tippek

- Egy **facet** egyszerre csak egy lekérdezést szűr. Ha több független listád van, mindegyikhez külön facetteket hozz létre.
- Az Oxygen natív **Pagination** opcióit ne keverd a Grid Builderrel; a lapozást/betöltést facettel oldd meg.
- Ha nem az Oxygen add-ont használod, a Grid Builder képes témák/lekérdezések szűrésére is, de oldalépítők esetén a hivatalos integráció a stabil megoldás.
- Cache használatakor zárd ki a **kereső** és erősen dinamikus facetteket, hogy pontos eredményt kapj.

Ezzel az integrációval az Oxygenben készített listáid valós, indexelt, AJAX‑os facettás szűrést kapnak, miközben a dizájnt a Grid/Card Builder és az Oxygen stíluseszközeinek kombinációjával finomhangolhatod. Ha gyors, profi és felhasználóbarát szűrhető katalógusokat akarsz, ez az add-on hiányzó láncszem.