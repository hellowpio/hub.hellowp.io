---
title: "WP Grid Builder - Caching"
description: "Hivatalos WP Grid Builder kiegészítő, amely a rácsok és facettek aszinkron lekérdezéseit gyorsítótárazza a villámgyors szűréshez."
sidebar_label: "WP Grid Builder - Caching"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder – Caching egy hivatalos kiegészítő, amely a **rácsok** és **facettek** szűrésénél keletkező **aszinkron** (AJAX) lekérdezések eredményeit **gyorsítótárba** teszi. Így amikor a felhasználó újra ugyanazokat a szűréseket futtatja, a rendszer nem számol mindent elölről, hanem a mentett eredményt adja vissza. Ezzel drasztikusan csökken a válaszidő és a szerverterhelés – különösen nagy adatállományoknál és összetett facettkombinációknál.

## Hogyan működik?

A kiegészítő a már kiszámolt lekérdezések eredményeit (találati lista + kapcsolódó facet‑állapot) egy **egyedi adatbázis‑táblában** tárolja. A kulcs a szűrési paraméterek és a rács/facet kontextus kombinációja. Ha ugyanarra a kombinációra új kérés érkezik:
- ha van érvényes találat a gyorsítótárban, azt adja vissza (gyors válasz),
- ha nincs, lefuttatja a lekérdezést, majd eltárolja a kimenetet a megadott **TTL** szerint.

A lejárt elemeket háttérben egy takarító folyamat (cron) és/vagy kézi ürítés távolítja el. A WP Grid Builder saját facett‑index táblája és ez a lekérdezés‑cache egymást kiegészítve ad stabil teljesítményt.

## Fő funkciók részletesen

- **Aszinkron kérések gyorsítótárazása**  
  A rácsok és facettek AJAX kéréseinek kimenetét menti. Így a gyakran ismétlődő szűrések (pl. ár + kategória + készlet) újraszámítás nélkül visszaadhatók.
  
- **Oldalszintű ürítés**  
  Minden oldalhoz külön ürítheted a kapcsolódó cache‑t. Hasznos, ha egy konkrét landing módosult, és csak ott szeretnél friss eredményeket.

- **Globális törlés**  
  Egy kattintással törölheted a teljes webhely gyorsítótárát – ideális nagyobb tartalomfrissítés, import vagy deploy után.

- **Kizárások rácsra/facetre**  
  Bizonyos **rácsokat** vagy **facetteket** kivehetsz a cache‑ből. Például a kereső facettek (szabad szöveg) elméletileg végtelen variációt generálnak, ezeket érdemes kihagyni.

- **Élettartam (TTL) beállítása**  
  Megadhatod, mennyi ideig legyen érvényes egy cache‑bejegyzés. Gyakran változó tartalomnál rövidebb, statikusabb listáknál hosszabb TTL ajánlott.

- **WP‑CLI parancsok**  
  Parancssorból is irányíthatod a cache‑t – automatizáláshoz, ütemezéshez ideális:
  ```
  wp wpgb-caching clear           # teljes cache törlése
  wp wpgb-caching clear {ID|Név}  # adott rács/sablon cache törlése
  wp wpgb-caching cleanup         # lejárt elemek takarítása
  ```

- **Admin eszközök és visszajelzés**  
  Az admin sávban és a beállításokban külön **Caching** menü jelenik meg. A HTTP fejlécben a bővítmény jelzi a cache állapotát (pl. HIT/MISS), ami hibakereséshez és teljesítmény‑monitorozáshoz hasznos.

- **Fejlesztői szűrők (hookok)**  
  Finomhangolható a működés: cache megkerülése, TTL módosítás, cron időzítés.
  - `wp_grid_builder_caching/bypass`
  - `wp_grid_builder_caching/lifespan`
  - `wp_grid_builder_caching/cron_interval`
  - `wp_grid_builder_caching/cron`

  Példa: cache kihagyása bejelentkezett felhasználóknál vagy véletlenszerű rendezésnél:
  ```php
  add_filter('wp_grid_builder_caching/bypass', function ($bypass, $ctx) {
      if ( is_user_logged_in() ) { return true; }
      if ( ! empty($ctx['query']['orderby']) && $ctx['query']['orderby'] === 'rand' ) { return true; }
      return $bypass;
  }, 10, 2);
  ```

## Gyakorlati példák

- **Webáruház**: A látogatók gyakran szűrnek márkára, árra, készletre. Az ismétlődő kombinációk azonnal visszajönnek a cache‑ből, így a lista és a facettek gyorsan frissülnek, a szerver terhelése csökken.
- **Ingatlan/állás/katalógus**: Sok feltétel (város, ár, kategória, állapot) kombinálódik. A felhasználók jellemzően hasonló szűréseket futtatnak – a cache itt adja a legnagyobb nyereséget.
- **Nagy archívum/blog**: A kategória + címke + dátum kombinációk újra és újra előkerülnek; a gyorsítótár jelentősen rövidíti a válaszidőt.
- **Üzemeltetés**: Tartalmi import után `wp wpgb-caching clear`, éjszakai karbantartáskor `wp wpgb-caching cleanup` futtatás ütemezetten.

## Előnyök és értékajánlat

- **Gyorsabb felhasználói élmény**: a facettes szűrés és rácsfrissítés látványosan felgyorsul.
- **Alacsonyabb szerverterhelés**: kevesebb drága lekérdezés, kisebb CPU és adatbázis terhelés.
- **Egyszerű üzemeltetés**: oldalszintű és globális ürítés, valamint WP‑CLI vezérlés.
- **Rugalmas testreszabás**: kizárások, TTL és hookok a speciális igényekhez.

## Kinek ajánlott?

- **Webáruházak** és nagy forgalmú listázó oldalak üzemeltetőinek.
- **Katalógusok**, **ingatlan-** és **állásportálok** készítőinek.
- **Ügynökségeknek** és **fejlesztőknek**, akik skálázható, stabil facett‑szűrést akarnak.
- **DevOps/üzemeltetés** számára, ahol fontos az automatizálhatóság és az átlátható cache‑kezelés.

## Mikor ne használd? (Korlátozások)

- **Feltételes vagy személyre szabott nézetek**: szerepkör‑, készlet‑, AB‑teszt‑függő megjelenítésnél a cache rögzíthet „egy” állapotot, ami másnak nem lesz helyes. Ilyenkor zárd ki az adott rácsot/facetet.
- **Véletlenszerű rendezés**: random sorrendnél a cache nem kívánt ismétlődést okoz.
- **Kereső facettek**: a szabad szavas keresés variációi miatt célszerű kizárni.
- **Facet‑feltételek (Conditions)**: a backend‑oldali feltételkezelés miatt könnyen kerülhet hibás állapot a cache‑be – általában ne cache‑eld az ilyen nézeteket.

## Telepítés és követelmények

- A Caching egy **hivatalos add‑on**, a WP Grid Builder licenc része. Nem a nyilvános tárházból érhető el.
- A letöltés és aktiválás a WP Grid Builder fiókon/bővítményen belül történik.
- Használatához a WP Grid Builder aktuális kiadása és modern WordPress/PHP környezet ajánlott.
- **Page cache/CDN mellett**: ügyelj rá, hogy a facettes **AJAX végpontokat** ne cache‑elje a CDN, különben elavult találatokat kaphatsz. A Caching add‑on a lekérdezés‑eredményeket tárolja, nem a teljes oldalt.

## Bevált gyakorlatok

- Kezdd **konzervatív kizárásokkal** (kereső facetek, random rendezés, feltételes nézetek), majd fokozatosan engedélyezd a cache‑t stabil rácsoknál.
- Változáskor használj **oldalszintű ürítést**; nagyobb frissítésnél **globális törlést** vagy **WP‑CLI** parancsokat.
- Állíts be **ésszerű TTL‑t**: gyorsan változó adatnál rövidebbet, statikus listáknál hosszabbat.
- Kövesd a HTTP fejléc **HIT/MISS** jelzéseit a beállítás finomhangolásához.