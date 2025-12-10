---
title: "JetProductTables"
description: "Prémium WooCommerce-kiegészítő rugalmas, reszponzív terméktáblákhoz – fejlett szűréssel, rendezéssel, variációkezeléssel és mobil‑specifikus nézetekkel."
sidebar_label: "JetProductTables"
---

## Mi ez és mit old meg?

A JetProductTables egy prémium bővítmény, amivel **WooCommerce** termékeket tudsz táblázatos formában megjeleníteni. Akkor hasznos, ha a hagyományos rácsnézet helyett gyorsan átlátható, **szűrhető, rendezhető, kereshető** listát szeretnél – például nagy katalógushoz, B2B gyors rendeléshez vagy összehasonlításhoz. Egy helyen látod a nevet, SKU-t, árat, készletet, mennyiségmezőt és a Kosárba gombot, így kevesebb kattintásból leadható a rendelés.

## Fő funkciók és hogyan működnek

### Testreszabható oszlopok és adatok
- Megjeleníthetsz szinte bármilyen termékadatot: **név, ID, SKU, ár, bélyegkép, attribútumok, leírás, kategóriák, címkék, meta és egyedi taxonómiák**.
- Minden oszlop külön szabályozható (láthatóság, sorrend, cím, igazítás), így pontosan olyan táblát építesz, amire szükséged van.

### Műveletek és dinamikus elemek
- Helyezhetsz a táblába **értékelést, dátumokat, készletállapotot, mennyiségválasztót, Kosárba** gombot.
- Tudsz hozzáadni belső/külső **linkgombokat** és **attribútumválasztót** változatos termékekhez, hogy a vásárló a táblán belül tudjon opciót választani.

### Elrendezés és reszponzivitás (asztali)
- Támogatott a **függőleges és vízszintes görgetés**, **ragadós (sticky) fejlécek**, szerkeszthető lábléc.
- Beállítható **min/max termékszám**, **Lazy Load**, **lapozás** és **Load More** a jobb teljesítményhez és UX-hez.

### Mobil nézetek
- Külön mobil‑layoutok oldják meg a “túl sok oszlop kis kijelzőn” problémát:
  - **Moveable**: vízszintesen görgethető oszlopsorok.
  - **Shorten**: kevésbé fontos oszlopok elrejtése mobilon.
  - **Transform**: sorok **kártyákká** alakulnak.
  - **Collapsed**: részletek **összecsukhatók**, csak a lényeg látszik elsőre.

### Keresés, szűrés, rendezés
- **AJAX‑os keresés** terméknévre.
- Szűrés **kategória, címke, attribútum** és bármely **taxonómia** szerint; támogatott a **hierarchia**, a **Select** választó, **Aktív szűrők** és **Mindent töröl**.
- Rendezés **dátum, ID, név** és egyéb mezők alapján.

### Variációk kezelése
- Változatos termékek **variációit külön táblában** tudod listázni, akár a **konkrét termékoldalon**. Az opciók egy nézetben látszanak, kevesebb a téves választás és a kattintás.

### Kimeneti módok
- **Gutenberg**: dedikált blokk, preset vagy egyedi oszlopstruktúra.
- **Elementor**: “Product Table” widget részletes panelekben (forrás/Query, Variations, Columns, Filters, Layout, Sticky Header, Lazy Load, Pagination/Load More, mobil‑layoutok).
- **Shortcode**: bárhol beilleszthető. Példa (tájékoztató jellegű):
  ```
  [jet_product_table id="preset-azonosito"]
  ```

### Globális beállítások és Presetek
- A **WooCommerce beállításai** alatt éred el a globális vezérlőket (oszlopok, stílus, szűrők, mobilnézetek, lapozó/Load More, sticky header).
- A **Preset Manager** segítségével elmentheted és újrafelhasználhatod a táblakonfigurációkat több oldalon.

## Gyakorlati példák

- **B2B gyors rendelés**: Egy nagyker katalógusban egy táblában megjelenik SKU, készlet, nettó/bruttó ár, mennyiség és Kosárba. A vevő szűr kategóriára, keres SKU-ra, majd soronként bepakol.
- **Összehasonlító tábla**: Több laptop fő specifikációi (CPU, RAM, SSD, súly, ár, értékelés) oszlopokban, fejléchez ragasztva, hogy görgetésnél is látszódjon.
- **Éttermi menü**: Ételek listája kategóriával, leírással, allergén attribútumokkal és árakkal; mobilon kártyás nézetre vált.
- **Variációs tábla termékoldalon**: Egy póló minden szín/méret variációja külön sor, azonnali elérhetőséggel és Kosárba gombbal.

## Beállítás lépései röviden

1. **Globális konfiguráció**: WooCommerce beállításokban kapcsold be a szükséges oszlopokat, állítsd a **Sticky Header**, **Lazy Load**, **Pagination/Load More**, mobil‑layoutokat. Mentsd el presetként.
2. **Gutenberg blokk**: Illeszd be a **Product Table** blokkot, válassz **Presetet** vagy építs egyedit. Állítsd a forrást (**Products** vagy **Variations**), a **Filters** és **Layout** opciókat.
3. **Elementor widget**: Húzd be a **Product Table** widgetet. A Preset/Query/Columns/Settings/Filters füleken finomhangold az irányt, fej/láblécet, szűrőket, mobil‑nézeteket, lapozást.
4. **Shortcode**: Generáld le a shortcode‑ot, majd illeszd be bármely oldalra vagy bejegyzésbe.
5. **Archív oldalak**: Ha szeretnéd, a Shop/Kategória/Archív nézetekre is alkalmazhatod a táblát a globális beállításokkal.

## Előnyök és értékajánlat

- **Gyorsabb rendelés**: Minden lényeges adat és művelet egy nézetben, kevesebb oldalváltás.
- **Jobb teljesítmény**: **Lazy Load**, **lapozás**, **Load More** csökkenti az egyszerre töltött adatot.
- **Mobil‑barát**: Külön **Moveable/Shorten/Transform/Collapsed** nézetekkel valódi mobil használhatóság.
- **Kevesebb hibázás**: Variációk és attribútumok átláthatóan, egy képernyőn.
- **Skálázhatóság**: **Presetek** és globális vezérlés gyors karbantartást tesznek lehetővé nagy site‑okon is.

## Kinek ajánlott?

- **B2B/viszonteladói** boltoknak és nagy katalógusoknak, ahol a gyors kosarazás fontos.
- **Elektronikai, autóipari, alkatrész** webáruházaknak, ahol az **SKU/attribútum alapú** keresés alapelvárás.
- **Szolgáltatás‑ és csomagajánlat** oldalakon átlátható pricing táblákhoz.
- **Éttermi/menü** oldalaknak, ahol sok tétel látszik kis kijelzőn is.
- **Ügynökségeknek**, akik szabványosítható, újrafelhasználható táblamegoldást keresnek több ügyfélprojektre.

## Licencelés és támogatás

- **Egyedi előfizetés**: 1 webhely, 1 év frissítés és támogatás, éves díjjal.
- **All‑Inclusive csomag**: A teljes JetPlugins készlet, frissítések és támogatás, éves díjjal.
- **Pénzvisszafizetés**: 30 napos garancia.

Megjegyzés: Az árak és csomagok időről időre változhatnak; vásárlás előtt mindig ellenőrizd az aktuális feltételeket.

--- 

Ezzel a bővítménnyel pontosan azt kapod, amire a táblázatos terméklistákhoz szükség van: testreszabható oszlopok, gyors szűrés-rendezés, variációk átlátható kezelése és kiforrott mobil‑élmény, mindezt WooCommerce‑be szorosan integrálva. Ha gyorsabb rendelési folyamatot és jobb katalógus‑UX‑et akarsz, jó helyen jársz.