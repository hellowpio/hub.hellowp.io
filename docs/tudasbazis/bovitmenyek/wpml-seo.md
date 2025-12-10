---
title: "WPML SEO"
description: "A WPML‑hez készült kiegészítő, amely teljes többnyelvű SEO‑kompatibilitást ad a Yoast SEO és Rank Math bővítményekhez: fordítható SEO‑mezők, helyes hreflang és sitemap kezelés."
sidebar_label: "WPML SEO"
---

## Mi ez és milyen problémát old meg?

A WPML SEO egy „összekötő” bővítmény a WPML és a legnépszerűbb SEO‑pluginek (Yoast SEO, Rank Math) között. Segítségével a többnyelvű webhelyeden a SEO‑mezők és technikai elemek nem csak lefordíthatók, hanem minden nyelven helyesen, konzisztensen működnek. Megoldja azt a gyakori gondot, hogy a címek, meta leírások, slugok, breadcrumbs és a hreflang/sitemap logika külön életet él, emiatt duplikáció, kannibalizáció vagy feltérképezési hiányosságok jelentkeznek.

## Hogyan működik?

A bővítmény a WPML fordítási folyamataiba „beköti” a Yoast/Rank Math által kezelt SEO‑adatokat. Amikor egy bejegyzést, oldalt vagy taxonómiát fordítasz, az on‑page SEO‑mezők együtt utaznak a tartalommal. Technikai szinten a WPML SEO kezeli a többnyelvű hreflangot és a sitemapok felépítését is, így a keresőrobotok minden nyelvi verziót helyesen látnak.

## Fő funkciók, érthetően

- SEO‑mezők fordítása és szinkronban tartása  
  Fordíthatod a SEO címet, meta leírást, URL‑slugot, képek ALT és felirat mezőit, breadcrumbs szövegeket és a közösségi megosztási metákat. A Yoast/Rank Math által generált schema adatok is a megfelelő nyelvi változattal társulnak.

- Hreflang kezelés két módon  
  Alapértelmezés szerint a hreflang a sitemapokban jelenik meg (ideális a modern keresőrobotoknak). Igény esetén átteheted az oldal fejléceibe (head), hogy minden nyelvi pár explicit legyen.

- Többnyelvű sitemap logika  
  A forrás és a fordítások egyetlen sitemap indexben, helyes nyelvi összerendeléssel jelennek meg. A Yoast/Rank Math automatikusan felveszi a fordításokat – így a robotok könnyen feltérképezik az összes verziót.

- Taxonómiák SEO‑metája fordítható  
  Kategóriák, címkék és egyéb taxonómiák SEO‑címei és leírásai a WPML fordítási felületén fordíthatók, nem kell admin‑nyelvet váltogatnod.

- Globális SEO‑szövegek fordítása  
  A breadcrumbs kezdőlap‑címkéje, sablonszövegek és egyéb globális stringek a WPML String Translationben kényelmesen kezelhetők.

- Teljes kompatibilitás Yoast SEO‑val és Rank Math‑tal  
  A WPML SEO kifejezetten ehhez a két bővítményhez ad tartós, támogatott kompatibilitási réteget.

## Gyakorlati példák

- Blogcikk több nyelven: a magyar „SEO cím” és „Meta leírás” fordításai az angol és német változatban külön‑külön adhatók meg és szinkronban maradnak a tartalommal, nincs kézi másolgatás.
- WooCommerce breadcrumbs: Rank Math használatakor a kenyérmorzsa útvonal minden nyelven helyes lesz; a korábban hiányzó vagy hibás elemeket a WPML SEO rendezi.
- Kategóriaoldalak SEO‑ja: a „Hírek” kategória SEO‑címe/leírása a fordítási irányítópulton fordítható, nem kell külön a kategória adminját nyelvenként megnyitnod.
- Hreflang a head‑ben: ha szükséged van rá, egy kapcsolóval átteheted a hreflang címkéket a head‑be.

```php
// Hreflang címkék áthelyezése a <head> részbe (wp-config.php)
define('WPML_SEO_ENABLE_SITEMAP_HREFLANG', false);
// Ezután a WPML → Languages → SEO opciók alatt engedélyezd a head‑beli megjelenítést.
```

## Telepítés és beállítás

1. Telepítsd és aktiváld: WPML (core) + WPML String Translation.  
2. Telepítsd a választott SEO‑plugint: Yoast SEO vagy Rank Math.  
3. Telepítsd és aktiváld a WPML SEO bővítményt.  
4. Fordítási folyamat: a WPML Translation Dashboardból küldd fordításra a tartalmat; az SEO‑mezők az Advanced Translation Editorban együtt fordulnak.  
5. Hreflang: alapból a sitemapban jelenik meg; ha a head‑et választod, állítsd be a fenti konstanssal, majd kapcsold be a vonatkozó opciót.

Megjegyzés: A WPML SEO a WPML Multilingual CMS és Multilingual Agency csomagok része. AIOSEO és SEOPress esetén általában nincs rá szükség.

## Ismert korlátok és óvintézkedések

- Rank Math speciális permalink opciói (pl. kategória bázis eltávolítása) többnyelvű oldalon problémákat okozhatnak. Törekedj konzervatív permalink‑sémára.
- Mindig tartsd naprakészen a WPML‑t, a WPML SEO‑t és a SEO‑plugint; nyitott hibák esetén a frissítések rendszerint tartalmaznak javításokat.

## Előnyök és értékajánlat

- Időmegtakarítás: az SEO‑mezők a fordítási folyamattal együtt menedzselhetők, nincs duplikált munka.  
- Technikai pontosság: helyes hreflang, konzisztens sitemapok, breadcrumbs és canonicals minden nyelven.  
- Kevesebb hibakockázat: a Yoast/Rank Math együttműködését dedikált kompatibilitási réteg biztosítja.

## Kinek ajánlott?

- Többnyelvű vállalati, tartalommarketing és e‑kereskedelmi oldalak üzemeltetőinek, akik WPML‑t és Yoast SEO‑t vagy Rank Math‑ot használnak.  
- Ügynökségeknek és fejlesztőknek, akik skálázható, hibamentes többnyelvű SEO‑folyamatot akarnak.  
- Szerkesztőségi csapatoknak, ahol a fordítók egységes felületen kezelik a tartalmat és az SEO‑adatokat.

Ha külön domaint, aldomaint vagy könyvtáras struktúrát használsz nyelvekhez, a WPML és a WPML SEO együtt kezeli a sitemapokat és a hreflangot. A beállítás után érdemes minden nyelvi tulajdont ellenőrizni a keresőkben, hogy a feltérképezés teljes és konzisztens legyen.

Összefoglalva: a WPML SEO pontosan azt adja, amire a többnyelvű SEO‑hoz szükséged van — fordítható és szinkronban tartott SEO‑mezőket, valamint stabil technikai alapot a helyes hreflanghoz és sitemapokhoz, minimális kézi munkával.