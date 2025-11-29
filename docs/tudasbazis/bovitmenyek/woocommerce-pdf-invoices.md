---
title: "WooCommerce PDF Invoices"
description: "Automatikus, testreszabható PDF számlák generálása és csatolása WooCommerce rendelésekhez."
sidebar_label: "WooCommerce PDF Invoices"
---

## Mi ez, és milyen problémát old meg?

A WooCommerce PDF Invoices egy kiterjesztés, amely automatikusan generál, számoz és csatol PDF számlákat a rendeléseidhez. Megszünteti a kézi számlázás nyűgjeit: nem kell külön dokumentumokat készítened, nem maradnak ki kötelező céges/jogi adatok, a vevők pedig önkiszolgáló módon letölthetik a számlákat. Így gyorsabban zárhatsz le rendeléseket, kevesebb hibával és kevesebb ügyfélszolgálati teherrel.

## Hogyan működik röviden?

- Rendelés teljesítésénél a bővítmény elkészíti a PDF számlát és csatolja a megfelelő e-mailhez (alapértelmezetten a Teljesített rendeléshez).
- A számla letölthető az admin rendelésnézetből és a vásárlói fiók Rendeléseim oldaláról.
- Az admin rendeléslistában megjelenik a számlaszám, gyors letöltési/újraküldési ikonokkal.
- Több számlát egyszerre exportálhatsz ZIP-be könyveléshez.

## Fő funkciók, érthetően

- Automatikus csatolás e-mailekhez: A teljesített rendelés e-mailjéhez automatikusan csatolja a PDF-et; igény szerint az admin „Új rendelés” e-mailjéhez is.
- Teljesen testreszabható számlasablon: Logó, fejléc, oszlopok, elrendezés – mind a saját arculatodra hangolhatók. Fejlesztőként szűrőkön át saját mezőket/oszlopokat is beszúrhatsz.
- Jogi és cégadatok: Cégnév, cím, adószám, kapcsolati adatok és minden kötelező információ megjeleníthető a számlán.
- Szekvenciális számlaszámozás: Egyedi számlaszám-formátum, dátumminták és fájlnév-sémák állíthatók, biztosítva a következetes sorszámozást.
- Letöltés és újraküldés: Az admin gyorsan letöltheti vagy újraküldheti a számlát; a vevő bármikor eléri a saját fiókjából.
- Rendeléslista integráció: Külön számlaszám oszlop és ikonok a gyors műveletekhez; a láthatóság a lista beállításainál kapcsolható.
- Tömeges export (ZIP): Időszakos záráskor kijelölöd a rendeléseket és egy kattintással ZIP-be gyűjtöd a számlákat.
- Haladó admin eszközök: Bizonyos számlameta mezők utólagos frissítése (jogkövetkezmények tudatában), valamint hibakeresési mód a problémák feltárásához.

## Gyakorlati példák

- B2C webáruház: Minden sikeres, teljesített rendelésnél automatikusan kimegy a számla a vásárlónak. Nem kell manuálisan mellékelned semmit.
- B2B értékesítés: A számlán megjeleníted a vevő adószámát és a megrendelési hivatkozást. A partner könnyen be tudja küldeni saját beszerzési rendszerébe.
- Könyvelési zárás: A hónap végén kijelölöd az adott időszak rendeléseit, és egy lépésben letöltöd a számlákat ZIP-ben a könyvelőnek.
- Ügyfélszolgálat: Ha a vevő elvesztette az e-mailt, az admin rendelésnézetből egy kattintással újraküldi a számlát.

## Beállítás és testreszabás (lépésről lépésre)

1. Telepítés és aktiválás után nyisd meg a WooCommerce > PDF Invoice oldalt.
2. Add meg az alapadatokat: cégnév, cím, adószám, logó.
3. Állítsd be a dátum- és számlaszám-formátumot, valamint a fájlnév mintáját.
4. Válaszd ki, mely e-mailekhez csatolja a számlát (pl. Teljesített rendelés).
5. Készíts egy tesztrendelést, állítsd „Teljesített” állapotra, és ellenőrizd a generált PDF-et.
6. Finomhangold a sablont (mezők, oszlopok, elrendezés). Fejlesztőként szűrőkkel további mezőket adhatsz hozzá.
7. Használd a rendeléslistát a gyors letöltéshez/újraküldéshez, illetve a tömeges ZIP exporthoz.

Példa dátumformátum minták:
```
Y-m-d
Y.m.d. H:i
d/m/Y
```

Példa számlaszám mintára (logika szemléltetésére):
```
INV-{YYYY}/{MM}-{NUMBER}
```

## Előnyök és értékajánlat

- Időmegtakarítás: Automatizálja a számlázást, kevesebb manuális munka, kevesebb hiba.
- Jogkövető működés: Következetes sorszámozás, kötelező adatok, átlátható formátumok.
- Jobb vevőélmény: A vásárló bármikor letöltheti a számlát a fiókjából.
- Hatékony admin: Gyors újraküldés, letöltés, tömeges export – kevesebb támogatási jegy és gyorsabb könyvelési folyamat.

## Kinek ajánlott?

- Kis- és középvállalkozásoknak, akik automatizált, megbízható számlázást szeretnének.
- B2B kereskedőknek, ahol elvárás a precíz számlaszámozás és a cégadatok kezelése.
- Olyan boltoknak, ahol a könyvelés rendszeresen igényli a számlák összegyűjtését.
- Ügyfélszolgálati fókuszú csapatoknak, akik gyorsan akarnak reagálni számlakérésekre.

## Kompatibilitás és követelmények

- PHP 7.4 vagy újabb
- WordPress 5.8 vagy újabb
- WooCommerce 7.4.0 vagy újabb

## Tipikus munkafolyamat összefoglalva

1. Beállítod a cég- és számlázási adatokat, a formátumokat és a csatolási szabályokat.
2. Rendelés teljesítésekor a rendszer automatikus PDF-et generál és csatol.
3. A számla letölthető az adminból és a vásárlói fiókból.
4. Időszak végén tömeges ZIP exportot készítesz a könyvelésnek.

## Fontos megjegyzés a névazonosságról

A „WooCommerce PDF Invoices” kifejezés több, hasonló célú bővítményt takarhat. Ez a leírás kifejezetten a hivatalos piactéren elérhető, Andrew Benbow által fejlesztett megoldásról szól. Ha másik, hasonló nevű bővítményre gondoltál, jelezd, és ahhoz igazítom a dokumentációt.