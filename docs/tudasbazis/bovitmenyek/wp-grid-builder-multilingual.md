---
title: "WP Grid Builder - Multilingual"
description: "Hivatalos kiegészítő a WP Grid Builderhez, amely mély integrációt ad a Polylang és WPML többnyelvű bővítményekhez, hogy ugyanaz a grid, facet és kártya minden nyelven helyesen működjön."
sidebar_label: "WP Grid Builder - Multilingual"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder – Multilingual a WP Grid Builder hivatalos többnyelvű kiegészítője. Az a célja, hogy ugyanazt a **rácsot (grid)**, **szűrőt (facet)** és **kártyát (card)** tudd használni minden nyelven, anélkül hogy ezeket nyelvenként duplikálnod kellene. Ezzel megszűnik a “mindenből több példány” karbantartási rémálma: egyetlen konfigurációt kezelsz, mégis minden nyelven pontos, releváns találatokat és helyes feliratokat kapsz.

## Hogyan működik?

- **Automatikus nyelvfelismerés**: a grid és a facettek mindig az aktuális oldalnyelvhez tartozó tartalmat kérdezik és jelenítik meg. Nem kell külön nyelvi paraméterekkel trükköznöd: az add-on átveszi a Polylang vagy WPML kontextusát.
- **Egységes szövegfordítás**: a WP Grid Builder által generált feliratok, címkék és üzenetek automatikusan megjelennek a Polylang vagy WPML string-fordítási felületén. Így a UI-szövegeket egy helyen fordítod, nem szétszórva.
- **Nyelvspecifikus indexelés**: a facettek úgy működnek helyesen, ha az érintett bejegyzések, termékek, taxonómiák és egyedi mezők ténylegesen léteznek minden nyelven. Az add-on ehhez igazítja a lekérdezéseket és a relevanciát, hogy a szűrés nyelvenként konzisztens legyen.
- **Fejlesztői API**: szűrők segítségével regisztrálhatsz és fordíthatsz egyedi szövegeket (pl. grid-, card- vagy facet-konfigurációból származó címkéket), vagy dinamikusan módosíthatod a megjelenő fordításokat.
- **Kiegészítő kompatibilitások**: célzott támogatás Polylanghoz és WPML-hez, plusz kompatibilitási javítások Elementorhoz.

## Fő funkciók részletesen

- **Egy konfiguráció, több nyelv**: ugyanazt a gridet és facet-készletet használhatod minden nyelven. Az add-on a háttérben a megfelelő nyelvi tartalmakra “fordítja” a lekérdezéseket, így nincs szükség duplikált objektumokra.
- **String-kezelés központilag**: a “Load more”, “No results”, gombfeliratok, facet-címkék, üzenetek – minden felirat egyetlen fordítási felületen kezelhető. Ha a projektedben egyedi labelt adsz meg, az is regisztrálható és fordítható.
- **Helyes taxonómia- és meta-fordítás**: a lekérdezések a megfelelő lokalizált taxonómiákra, metaértékekre és – integrációtól függően – ACF választási értékekre is tekintettel vannak, hogy a szűrés nyelvszinten konzisztens legyen.
- **Elementor-kompatibilitás**: ha Elementorban helyezed el a gridet és a facetteket, a nyelvi logika akkor is következetes marad.

## Gyakorlati példák

- **Többnyelvű webáruház**: készítesz egy termékrácsot és néhány facettet (kategória, ár, attribútumok). A látogató nyelvén jelennek meg a termékek és a szűrők; a “Load more” vagy a kosár gomb feliratait egy helyen fordítod.
- **Blog és híroldal**: egyetlen archív grid különböző nyelvű bejegyzésekhez. A kategória- és címkeszűrés csak az adott nyelv tartalmaira szűkít, így a találatok mindig relevánsak.
- **Portfólió/könyvtár**: projektek vagy listázások több nyelven, egységes kártyadizájnnal. A címkék és státuszok fordításai központilag kezelhetők.
- **ACF-alapú egyedi tartalmak**: ha választós (select) mezőket vagy repeater-mezőket használsz, a facettek és kártyák a lokalizált értékekkel dolgoznak.

## Telepítés és beállítás

1. Telepítsd és aktiváld a WP Grid Builder core bővítményt.
2. Telepítsd és aktiváld a Polylangot vagy a WPML-t.
3. Telepítsd és aktiváld a Multilingual kiegészítőt.
4. Hozd létre a tartalmakat minden nyelven (posztok, termékek, taxonómiák, egyedi mezők), hogy a facettek indexelése pontos legyen.
5. A string-fordítási felületen (Polylang vagy WPML) fordítsd le a WP Grid Builder feliratait és az esetleges egyedi címkéidet.

Tipp: a core bővítmény rendszerkövetelményei az irányadók (WordPress és PHP verziók tekintetében).

## Fejlesztői példák (hookok)

Regisztrálj egyedi feliratokat, hogy megjelenjenek a string-fordításnál:

```php
add_filter( 'wp_grid_builder_i18n/facet/register_strings', function( $strings, $facet_id ) {
  // Egyedi felirat hozzáadása a facethez
  $strings['featured_only_label'] = 'Kiemeltek';
  return $strings;
}, 10, 2 );
```

Dinamikusan fordíts egy sztringet:

```php
add_filter( 'wp_grid_builder_i18n/translate_string', function( $translated, $string, $context, $domain ) {
  if ( $context === 'facet' && $string === 'Kiemeltek' ) {
    // Példa: alternatív fordítás adott környezetben
    return $translated ?: 'Kiemelt tartalom';
  }
  return $translated;
}, 10, 4 );
```

Hasonló hookok érhetők el gridhez és cardhoz is (register_strings variánsok).

## Előnyök és értékajánlat

- **Kevesebb duplikáció**: egy grid, egy facettkészlet, egy kártya – több nyelven.
- **Központi fordítás**: minden UI-felirat egy helyen, kontrolláltan kezelhető.
- **Konzisztens szűrés**: nyelvspecifikus indexelés és relevancia a pontos találatokért.
- **Kisebb karbantartási teher**: frissítések és változtatások csak egyszer készülnek el.
- **Fejlesztőbarát**: hookokkal és szűrőkkel finoman hangolható.

## Kinek ajánlott?

- **WooCommerce áruházaknak**, amelyek több nyelven listáznak és szűrnek termékeket.
- **Tartalomgazda blogoknak/hírportáloknak**, ahol fontos a releváns, nyelvspecifikus archívum.
- **Ügynökségeknek és fejlesztőknek**, akik szabványosítható, könnyen karbantartható többnyelvű grid/facet megoldást keresnek.
- **Portfóliók és könyvtár jellegű oldalak** készítőinek, ahol a facettált szűrés kulcsfunkció.

## Korlátok és bevált gyakorlatok

- **Valós többnyelvű tartalom szükséges**: a facettek indexeléséhez a bejegyzések, taxonómiák és egyedi mezők külön nyelvi példányainak létezniük kell. Puszta karakterlánc-fordítás nem elég.
- **Egyedi feliratok regisztrálása**: ha a grid/facet/card beállításokban egyedi címkéket használsz, regisztráld őket a megfelelő hookokon, hogy fordíthatók legyenek.
- **Tesztelj nyelvenként**: nézd át a szűrési logikát, a “nincs találat” állapotokat és a lapozást minden érintett nyelven.

## Összegzés

A WP Grid Builder – Multilingual a többnyelvű grid- és facettált szűrési projektekhez készült hivatalos megoldás. Egyetlen konfigurációval szolgál ki minden nyelvet, egységesíti a feliratok fordítását, és gondoskodik a nyelvspecifikus, releváns találatokról. Ha többnyelvű tartalmat kezelsz, ez a kiegészítő jelentősen csökkenti a karbantartási költséget, miközben fokozza a felhasználói élményt.