---
title: "WooCommerce Product Recommendations"
description: "Hivatalos WooCommerce bővítmény szabály- és adatvezérelt termékajánlásokhoz, sokféle elhelyezéssel, feltételekkel és beépített analitikával."
sidebar_label: "WooCommerce Product Recommendations"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Product Recommendations egy rugalmas ajánlórendszer, amellyel célzott, kontextusfüggő termékajánlásokat jeleníthetsz meg a bolt különböző felületein. Ahelyett, hogy kézzel karbantartanád az upsell/cross‑sell kapcsolásokat, szabályokkal és adatvezérelt logikákkal automatizálhatod az ajánlásokat, mérheted a hatásukat, és skálázhatóan növelheted az átlagos kosárértéket.

## Hogyan működik? – az építőkockák

### Ajánlómotorok (Engines)
Négy motor­-típus közül választhatsz, attól függően, hol jelenik meg az ajánlás:
- **Generic**: általános listák (pl. „Újdonságok”, „Legnépszerűbbek”).
- **Product Archive**: kategória/archív nézetben releváns találatok.
- **Product**: az éppen nézett termékhez illeszkedő ajánlások.
- **Order**: a rendelési folyamat és az utóvásárlási képernyők ajánlatai.

Minden motor két fő elemből épül: **Szűrők** (mit jelölj ki) és **Erősítők** (milyen sorrendben/pontozással).

### Szűrők (Filters)
Szabályokkal leszűkítheted a jelölteket. Gyakori példák:
- **Kategória, címke, attribútum, ár**; akciós/kiemelt státusz; készlet elérhetőség.
- **Recently viewed**: a vásárló által nemrég megtekintett termékek/kategóriák.
- **Product motor-specifikus**: például **Relative Price** (az aktuális termék árarányához igazítás), **Current Category/Tag** (azonos kategóriából ajánlás).

### Erősítők (Amplifiers)
Ezek rangsorolják a jelölteket különböző jelek alapján:
- **Frissesség**, **ár**, **értékelés**, **népszerűség** (időablakokkal), **konverziós ráta**.
- Speciálisak: **Bought Together** („gyakran együtt vásárolt”) és **Others Also Bought** („mások ezt vették még”) – statisztikai pontozással tárják fel a valódi együtt‑vásárlási kapcsolatokat, nem csak egyszerű társítások.

### Elhelyezési pontok (Locations)
Több mint húsz beépített pozíció:
- **Termékoldal**: például „Kosárba” gomb után, infófülek alatt.
- **Bolt/archív**: kategóriaoldalak tetején/alján.
- **Kosár/Checkout**: kosár kollateráloknál, űrlap előtt/után.
- **Rendelés után**: Order Received/Pay – post‑purchase upsell.

Haladó esetekhez elérhető egy ingyenes kiegészítő egyedi, rövidkódos elhelyezésekhez.

### Láthatósági feltételek (Visibility Conditions)
Szabályozhatod, mikor jelenjen meg egy ajánlás:
- Nemrég megtekintett termék/kategória/címke.
- **Geolokáció**, **vendég vs. bejelentkezett** státusz, dátum/idő.
- **Kosár- és rendelésalapú** feltételek (érékhatár, tartalom, mennyiség).
- Az aktuálisan nézett termék tulajdonságai.

### Analitika és mérés
A bővítmény követi a **megjelenítés** és **kattintás** eseményeket (viewport‑alapú láthatóság‑detektálással), és egy attribúciós **cookie** segítségével a kattintástól a vásárlásig visszaköveti a konverziót. A WooCommerce Analytics felületén külön jelentésekben láthatod a bevételt, rendelésszámot, eladott tételeket, valamint szűrhetsz helyszínre vagy konvertált termékre.

### Teljesítmény és skálázhatóság
- A javaslatok **háttérben** generálódnak egy sorban, **gyorsítótárral** kiszolgálva.
- Állítható **cache regenerálási periódus**.
- **AJAX** megjelenítés a cache-elt oldalak kompatibilitásáért.
- Nagy katalógusoknál **throttling** és ütemezés az Action Schedulerrel.
- Fejlesztőknek **WP‑CLI** parancs a generálási sor kézi futtatásához:
  ```
  wp wc prl process-generation-queue
  ```

### Kompatibilitás
Támogatja a **HPOS** rendeléstárolást és a **Cart/Checkout Blocks** felületet. Hagyományos témákkal teljes funkcionalitás elérhető; blokk‑témák alatt bizonyos motorok viselkedése eltérhet. Modern WordPress, WooCommerce és PHP verziók szükségesek.

## Gyakorlati példák

- **„Frequently Bought Together” a termékoldalon**  
  Motor: Product. Szűrők: Current Category + Relative Price (±20%). Erősítő: Bought Together. Elhelyezés: „Add to Cart” után. Eredmény: releváns kiegészítők, amelyek tényleg együtt fogynak.

- **„Trending” a kategóriaoldalon**  
  Motor: Product Archive. Szűrők: az aktuális kategória. Erősítők: népszerűség az utóbbi 30 napban + frissesség. Elhelyezés: archív oldal teteje.

- **Checkout impulzusajánlat**  
  Motor: Order. Feltétel: vendég felhasználó és a kosárérték egy küszöb alatt. Szűrő: alacsony árú, magas konverziójú termékek készleten. Elhelyezés: űrlap előtt.

- **Rendelés utáni upsell**  
  Motor: Order. Erősítő: Others Also Bought. Elhelyezés: Order Received. Cél: azonnali második vásárlás indítása.

## Előnyök és értékajánlat

- **Bevételnövelés és AOV‑emelés**: kontextusos, jól időzített ajánlatokkal.
- **Kevesebb kézi munka**: a szabályok és erősítők elvégzik a karbantartást.
- **Mérhetőség**: láthatod, mi működik, és gyorsan optimalizálhatsz.
- **Reszponzív és skálázható**: cache, háttér‑sor és AJAX a nagy forgalomhoz.
- **Pontosság**: a „Bought Together” és „Others Also Bought” tényleges együtt‑vásárlásokra épít.

## Kinek ajánlott?

- **Közép‑ és nagy katalógusok** tulajdonosainak, ahol a kézi upsell már nem tartható.
- **D2C és B2C boltoknak**, ahol fontos a kosárérték és a visszatérő vásárlás.
- **Ügynökségeknek/fejlesztőknek**, akik szabályozható, megbízható ajánlómotort keresnek ügyfeleiknek.
- **Tartalom‑ és kampányvezérelt** márkáknak, ahol a láthatósági feltételek és időzítés kritikus.

## Gyors beüzemelés

1. **Hozz létre egy Engine‑t**: válaszd ki a motor típusát, add meg a szűrőket és erősítőket.
2. **Deploy**: rendeld hozzá egy vagy több **Location** ponthoz és állítsd be a láthatósági feltételeket.
3. **Teszt és mérés**: ellenőrizd az analitikát, A/B‑jelleggel variálj erősítőket/időablakokat.
4. **Skálázás**: nagy katalógusnál állítsd a cache regenerálást, használd a WP‑CLI‑t és a throttlingot.

## Tippek és hibakeresés

- **Page cache** esetén engedélyezd az AJAX megjelenítést, és állíts be kivételeket, ha kell.
- Figyeld a **Recommendations Queue** státuszait; szükség esetén futtasd kézzel:
  ```
  wp wc prl process-generation-queue
  ```
- **Adatvédelem**: a click‑to‑purchase attribúció cookie‑val működik; fejlesztői filterrel kikapcsolható.
- **Blokk‑témák**: számíts eltérő működésre; szükség esetén használj egyedi elhelyezéseket vagy rövidkódos kiegészítőt.

Összefoglalva: a WooCommerce Product Recommendations egy szabály‑ és adatvezérelt ajánlási keretrendszer, amellyel célzottan, sok helyen és mérhetően növelheted az eladásokat – kézi párosítások helyett skálázható, professzionális megoldással.