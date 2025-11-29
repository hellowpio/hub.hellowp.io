---
title: "Bought Together for WooCommerce"
description: "Fizetős WooCommerce-bővítmény, amellyel „Gyakran együtt vásárolt” szekciót jeleníthetsz meg a termékoldalakon, egykattintásos kosárba tétellel a kosárérték növeléséért."
sidebar_label: "Bought Together for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Bought Together for WooCommerce egy kereskedelmi bővítmény, amely a termékoldalakon megjeleníti a „Gyakran együtt vásárolt” blokkot. Így a vásárlók egyetlen kattintással több, általad ajánlott kapcsolódó terméket adhatnak a kosarukhoz, vagy kiválaszthatják közülük a számukra relevánsakat. Ezzel megoldod, hogy a kiegészítők és kompatibilis termékek ne maradjanak „láthatatlanok”, csökkented a vásárlási súrlódást, és növeled az átlagos rendelési értéket.

## Fő funkciók és mit csinálnak

- **„Frequently Bought Together” szekció**: A termékoldalon egy jól látható dobozban ajánlhatsz további tételeket. A vevő egy kattintással mindet, vagy csak a kipipáltakat teheti a kosarába.
- **Két elrendezés (Row / Table)**: 
  - **Row**: vizuális, egymás mellé helyezett képekkel és plusz jelekkel; alatta jelölőnégyzetekkel választhatók a tételek.
  - **Table**: táblázatos lista, praktikus, ha sok vagy variációs terméket ajánlasz.
- **Korlátlan ajánlások termékenként**: Bármennyi releváns kiegészítőt összeköthetsz egy alaptermékkel, így összetett ajánlásokat is építhetsz.
- **Testreszabható szövegek**: Módosíthatod a szekció címét (pl. „Gyakran együtt vásárolt”) és a gomb feliratát (pl. „Hozzáadás a kosárhoz”), hogy illeszkedjen a márkahangodhoz.
- **Rugalmas pozicionálás**: Beállíthatod, hol jelenjen meg a blokk a termékoldalon (pl. leírás alatt, ár mellett, kapcsolódó termékek előtt/után).
- **Globális és termékszintű beállítások**: 
  - Globálisan meghatározhatod az alapértelmezett elrendezést és feliratokat.
  - Termékszinten finomhangolhatod, mely tételek legyenek ajánlva az adott alaptermékhez.
- **Egykattintásos „Add to cart”**: Több termék egyszerre kerül a kosárba, csökkentve a kattintások számát és a kilépési pontokat.
- **Funkció ki-/bekapcsolása**: Ha bizonyos termékkategóriáknál nincs rá szükség, egyszerűen letilthatod.

## Hogyan működik? (rövid áttekintés)

Telepítés és aktiválás után megjelennek a bővítmény beállításai a WooCommerce adminban. Globálisan kiválaszthatod az elrendezést, a szekciócímeket és a pozíciót; termékszinten pedig az „alaptermékhez” rendelt ajánlott tételeket.

Admin útvonalak:
```
WooCommerce > Beállítások > Bought Together
Termékek > (Termék szerkesztése) > Product data > Bought Together
```

A termékoldalon a vásárló:
1) látja az ajánlott tételeket a kiválasztott elrendezésben,
2) jelölőnégyzetekkel kiválasztja, mit kér,
3) egy kattintással a kosárba teszi a kijelölt termékeket.

A modul az ajánlásokat jeleníti meg és a gyors kosárba tételt intézi; készlet- és árazáskezelés továbbra is a WooCommerce saját folyamatai szerint történik.

## Gyakorlati példák

- **Laptop + kiegészítők**: Egy notebook oldalán felkínálhatod az egeret, tokot és pendrive-ot. A vevő pipál, majd egy kattintással mindet kosárba rakja.
- **Ruha + kiegészítők**: Pulóver mellé ajánlhatsz sálat és sapkát. A soros (Row) elrendezés vizuálisan mutatja, hogyan passzolnak össze.
- **Kamera + memória + állvány**: A táblázatos (Table) megjelenítés jól kezeli a különböző kapacitású kártyákat és tartozékokat.
- **Kávégép + vízszűrő + tisztítószett**: A vásárló azonnal látja, mire lesz még szüksége a hosszú távú használathoz.

## Előnyök és értékajánlat

- **Nagyobb kosárérték**: A kontextusban felkínált kiegészítők bizonyítottan növelik az átlagos rendelési értéket.
- **Kevesebb súrlódás**: Több termék egyszerre, egy kattintással a kosárban – kevesebb oldalváltás, kisebb lemorzsolódás.
- **Jobb láthatóság**: A releváns cross-sell tételek nem „bújnak el” a boltban; a termékoldalon, fókuszban jelennek meg.
- **Egyszerű admin**: Pár kattintással állítható, termékszinten és globálisan is, fejlesztés nélkül.

## Gyors kezdés (lépésről lépésre)

1. Telepítsd és aktiváld a bővítményt a WordPress adminban.  
2. Nyisd meg:
   ```
   WooCommerce > Beállítások > Bought Together
   ```
   - Válaszd ki az elrendezést (Row vagy Table).
   - Állítsd be a szekció címét és a gomb feliratát.
   - Add meg a megjelenítési pozíciót és kapcsold be a funkciót.
3. Nyisd meg az alapterméket szerkesztésre:
   ```
   Termékek > (Termék szerkesztése) > Product data > Bought Together
   ```
   - Add hozzá az ajánlott tételeket (korlátlanul).
4. Mentsd a terméket, majd ellenőrizd a frontenden a megjelenést és a működést.
5. Finomhangold a szövegeket és a pozíciót a konverzió maximalizálásához.

## Kinek ajánlott?

- **Elektronika és számítástechnika**: tartozékok, kábelek, védőtokok ajánlásához.  
- **Divat és kiegészítők**: összeillő szettek, outfit-kiegészítők kiemelésére.  
- **Hobbi/fotó/videó**: alternatívák és kiegészítők strukturált, táblázatos ajánlására.  
- **Otthon és kert**: kiegészítő kellékek, utántöltők, karbantartó szettek ajánlására.  
- **Bármely WooCommerce bolt**, ahol cél az átlagos kosárérték növelése és a vásárlói élmény javítása.

## Korlátok és jó tudni

- **Nem bundle-kezelő**: Nem kezeli a csomagokat önálló készlet- vagy ár-entitásként. Az ajánlott tételek külön-külön kerülnek a kosárba.
- **Nincs beépített csomagkedvezmény**: Ha összevásárlási kedvezményt szeretnél, külön árkedvezmény- vagy csomagkezelő bővítményre lesz szükséged.
- **Célzott használat**: A modul erőssége az ajánlások megjelenítése és a gyors kosárba tétel; az árképzés és készletlogika a WooCommerce alapszabályai szerint működik.

Ezzel a bővítménnyel gyorsan és látványosan teheted elérhetővé a legrelevánsabb kiegészítőket a termékoldalakon, minimális beállítással, maximális hatással a konverzióra és a kosárértékre.