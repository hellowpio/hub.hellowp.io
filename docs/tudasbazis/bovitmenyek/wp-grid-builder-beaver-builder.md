---
title: "WP Grid Builder - Beaver Builder"
description: "Hivatalos integrációs kiegészítő a WP Grid Builder és a Beaver Builder összekapcsolására, drag‑and‑drop rácsokkal és facetes szűréssel."
sidebar_label: "WP Grid Builder - Beaver Builder"
---

## Mi ez és milyen problémát old meg?

A **WP Grid Builder – Beaver Builder** egy hivatalos add‑on, amely összeköti a WP Grid Builder fő bővítményt a Beaver Builderrel. Két új modult kapsz a vizuális szerkesztőben: **Grid** és **Facet**. Így a rácsokat és a szűrőket nem shortcode‑dal, hanem húzd‑és‑ejtsd módszerrel helyezheted el, és azonnali előnézetet látsz. Megszűnik a kísérletezés a shortcode‑okkal, egységes lesz a szűrési logika a Beaver‑modulok között, és a szűrés gyors, mert csak a szükséges elemek töltődnek újra, nem az egész oldal.

## Fő funkciók

### Grid modul
- Már létrehozott **WP Grid Builder rácsok** beszúrása közvetlenül a Beaver Builder vászonra.
- Valódi **vizuális előnézet**: a rács úgy renderelődik, ahogy a frontenden is fog.
- Kompatibilis a **Beaver Themer archív sablonjaival**: megjelenítheted az archív lekérdezések eredményeit a Grid modulon keresztül, és kombinálhatod azokat facetes szűréssel.

### Facet modul
- **Facetek** (szűrők) elhelyezése, majd hozzárendelés egy konkrét rácshoz vagy kiválasztott Beaver‑modulhoz a „Select a grid or module to filter” legördülőben.
- Nem csak WPGB rácsokat szűr: támogatott többek közt a **Posts Grid**, **Posts Slider**, **Posts Carousel**, **WooCommerce** modulok, valamint a **PowerPack** PP Content Grid és a **WooPack** Product Grid, továbbá a **Loop Module**.
- Támogatja a WP Grid Builder több mint **20 facet‑típusát** (pl. Checkbox, Select, Range, Rating, Date, Search, Sort, Reset, Load More), **Ajax** alapon, saját indexeléssel.

### Teljesítmény és skálázás
- Szűréskor csak a **szükséges elemek** kérődnek le és renderelődnek, így a frissítés gyors és reszponzív marad még nagy tartalomkészleteknél is.
- A **facetes lapozás** és a **betöltés gomb** a Beaver‑modulok saját lapozása helyett dolgozik, ami egységes és stabil UX‑et ad.

### WP Grid Builder ökoszisztéma
- Rugalmas **kártya‑ és rácsszerkesztő**, **Masonry/Justified/Metro** elrendezések, reszponzív **carousel**.
- Egyedi mezők (ACF, Meta Box, Pods) megjelenítése, testreszabható kártyakomponensek.

## Telepítés és első lépések

- **Előfeltételek**: aktív WP Grid Builder, Beaver Builder legalább 2.5.0, WordPress 4.7.0+, PHP 5.6+.
- **Add‑on engedélyezése**: a WordPress adminban a Gridbuilder > Addons menüben kapcsold be.
- **Rácsok és facetek létrehozása**: Gridbuilder > All Grids / All Facets. A facetek akciói: **Filter**, **Load**, **Sort**, **Apply**, **Reset**.
- **Használat a Beaver Builderben**: a modulok között megjelenik a **WP Grid Builder** fül. Helyezz el egy Grid vagy Facet modult, majd a Facet modulban válaszd ki, melyik rácsot vagy Beaver‑modult szűrje.

Példa gyors beállításra:
```
Beaver Builder > WP Grid Builder > Facet modul
Select a grid or module to filter: WooCommerce
Facet 1: Kategória (Checkbox)
Facet 2: Ár (Range)
Pagination: Load More
```

## Gyakorlati példák

- **Webshop termékkatalógus**: A WooCommerce modul listáját facettel szűröd kategóriára, árra és készletre. A lapozást a „Load More” facet végzi, így a termékek gyorsan, újratöltés nélkül jelennek meg.
- **Blog archív**: A Themer archív sablonját a Grid modul jeleníti meg. Facetekkel élőben szűrsz kategóriára, címkére, dátumra és keresőkifejezésre, miközben a rács megőrzi az egyedi kártya‑designodat.
- **Portfólió és médiagyűjtemény**: Egyedi kártyák ACF mezőkkel (pl. ügyfél neve, technológia). Facetes szűrés technológia és értékelés szerint, Masonry elrendezéssel, reszponzív carousel nézettel.

## Előnyök és értékajánlat

- **Shortcode‑mentes munkafolyamat**: mindent a vizuális szerkesztőben állítasz, kevesebb hiba, gyorsabb beállítás.
- **Egységes szűrés** több Beaver‑modulon: nem kell külön megoldás minden lista‑típusra.
- **Gyors, skálázható** front‑end: csak a szükséges elemek töltődnek, jobb UX, alacsonyabb szerverterhelés.
- **Fejlett testreszabás**: több mint 20 facet‑típus, rugalmas elrendezések, kártyaszerkesztő.
- **Themer integráció**: archív lekérdezések és facetes szűrés együtt, kompromisszumok nélkül.

## Célközönség

- **Beaver Builder felhasználók**, akik profi, facetes listákat és rácsokat akarnak kódolás nélkül.
- **Ügynökségek és fejlesztők**, akik gyors, megbízható és újrahasznosítható komponenseket keresnek kliensek projektjeihez.
- **Webshopok és nagy tartalommal rendelkező oldalak**, ahol kritikus a sebesség, a skálázhatóság és a kifinomult szűrés.

## Kompatibilitás és korlátozások

- **Minimum követelmények**: WordPress 4.7.0, PHP 5.6, Beaver Builder 2.5.0.
- **Támogatott Beaver‑modulok szűrése**: Posts Grid, Posts Slider, Posts Carousel, WooCommerce, PP Content Grid (PowerPack), WooPack Product Grid, Loop Module.
- **Beaver Themer**: a Grid modul képes archív eredményeket megjeleníteni és facetes szűréssel kombinálni.
- **Korlátozások**:
  - A felsorolt Beaver‑modulok saját „Pagination” opciói nem támogatottak; használj **Load** vagy **Pagination** facetet.
  - Egy **facet** egyszerre csak **egy** rácshoz vagy modulhoz kapcsolható.

## Fejlesztő és háttér

A WP Grid Builder termékvonalat Loïc Blascos indította, a termékeket egy francia csapat gondozza. Az add‑on az ökoszisztéma hivatalos része, a fő bővítmény képességeire építve biztosít natív Beaver Builder integrációt.

## Gyors tippek bevezetéshez

- Facetes lapozást mindig **facet‑típusokkal** oldj meg, ne a modul saját lapozásával.
- Nagy adatállománynál rendszeresen futtasd újra az **indexelést**, hogy a szűrés gyors maradjon.
- Ha több külön lista van egy oldalon, ügyelj rá, hogy minden facet **csak egy** célrácsot vagy modult szűrjön.