---
title: "WooCommerce Tab Manager"
description: "Bővítmény WooCommerce termékoldali fülek teljes körű, kódmentes kezeléséhez: új fülek, sorrend, elnevezés, globális fülek és alapértelmezett layout."
sidebar_label: "WooCommerce Tab Manager"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Tab Manager egy hivatalos bővítmény, amellyel teljesen testre szabhatod a termékoldalak füleit. Új füleket hozhatsz létre, átnevezheted és átrendezheted a meglévőket, valamint globális füleket alkalmazhatsz több termékre egyszerre. Mindezt kódolás, sablonmódosítás és hookok nélkül, drag-and-drop felületen. Megoldja azt a problémát, hogy a fülstruktúrát eddig csak témamódosítással vagy fejlesztői munkával lehetett egységesen kezelni.

## Hogyan működik röviden

- A bővítmény két admin felületen érhető el:
  - Termékszerkesztő: Product Data > Tabs – itt termékenként felülírhatod az alapértelmezett layoutot, és egyedi füleket adhatsz hozzá.
  - WooCommerce > Tab Manager – itt hozhatsz létre globális füleket és állíthatod be az áruház szintű Default Tab Layoutot.
- A fülek (alap WooCommerce, globális, termékszintű és külső bővítmények által létrehozott) egy felületen, vizuálisan rendezhetők.
- A fül-tartalom a termékkeresésbe bevonható; a globális fülek kereshetőségét külön kapcsolhatod. Kompatibilis a Relevanssi keresőbővítménnyel.

## Fő funkciók részletesen

- Alap WooCommerce-fülek kezelése
  - A Leírás, További információk és Értékelések füleket átnevezheted, sorrendjüket módosíthatod vagy elrejtheted. Így a termékoldal felépítése megfelelhet a márkád és a felhasználói elvárások logikájának.

- Egyedi termékfülek
  - Termékenként korlátlan számú új fület adhatsz hozzá. A tartalmat WYSIWYG szerkesztővel készítheted, használhatsz HTML-t és rövidkódokat (például űrlap, videó, galéria). Ez ideális műszaki adatok, letöltések vagy beágyazott elemek megjelenítéséhez.

- Globális fülek
  - Központilag létrehozott fülek, amelyek több terméken – akár kategóriaszűréssel – automatikusan megjelennek. Így az ismétlődő, boltra jellemző információkat (pl. szállítási feltételek) egységesen és karbantarthatóan tüntetheted fel.

- Alapértelmezett füllayout
  - Beállíthatsz egy Default Tab Layoutot az egész bolt számára. Ezt bármely terméknél felülírhatod, ha speciális felépítésre van szükség. Ez a megközelítés egyszerre ad konzisztenciát és rugalmasságot.

- Külső bővítmények füleinek kezelése
  - A Tab Manager felismeri a legtöbb külső bővítmény által létrehozott fület, és beilleszti a drag-and-drop felületre, hogy sorba rendezd vagy elrejtsd őket. (Átnevezésük nem mindig lehetséges.)

- Kereshetőség
  - A termékszintű fül-tartalom automatikusan része lehet a standard termékkeresésnek. A globális fülek kereshetőségét külön kapcsolhatod – nagy katalógusnál ezzel optimalizálhatod a teljesítményt.

## Gyakorlati példák

- Egységes információk: létrehozol egy „Szállítás és visszaküldés” globális fület, amely minden terméken megjelenik. Ha változik a szabályzat, egy helyen frissíted, és mindenhol frissül.
- Kategória-specifikus tájékoztatás: „Mérettáblázat” fül csak ruházati kategóriában, külön „Ápolási útmutató” a bőrtermékeknél.
- Termékspecifikus tartalom: egyedi „Műszaki adatok” fül egy adott laptophoz, rövidkódokkal beágyazott videó bemutatóval és letölthető specifikációval.
- Keresési élmény: bekapcsolod, hogy a „Gyakori kérdések” fül kulcsszavai alapján is találjanak termékeket a vásárlók.

## Előnyök és értékajánlat

- Kódmentes testreszabás: fejlesztői beavatkozás nélkül, vizuálisan állíthatod be a fülstruktúrát.
- Konzisztencia és skálázhatóság: globális fülekkel a nagy katalógusok is egységesen kezelhetők.
- Kevesebb karbantartás: központi frissítés, kevesebb hiba, gyorsabb változtatások.
- Jobb vásárlói élmény: átlátható tartalom, releváns keresési találatok, következetes elrendezés.
- Kompatibilitás: a legtöbb 3rd party fül rendezhető, a keresés bővíthető (pl. Relevanssi).

## Kinek ajánlott?

- Közepes és nagy webáruházaknak, ahol fontos az egységes, központilag menedzselt termékinformáció.
- Olyan csapatoknak, ahol a tartalomszerkesztők önállóan, kódolás nélkül szeretnék kezelni a termékfüleket.
- Márkáknak és ügynökségeknek, akik testreszabott, letisztult termékoldal-struktúrát szeretnének fenntartható módon.

## Fontos megjegyzések és korlátok

- Külső bővítmények füleinek átnevezése nem mindig támogatott (rendezés és elrejtés többnyire igen).
- A globális fül nem sablon egyedi tartalomhoz: ha termékenként eltérő szöveg kell, hozd létre egyedileg.
- Nincs beépített teljes import/export a fülekhez; a globális fülek kezelhetők, de a termékhez rendelés külön folyamat.
- A termékszerkesztő meta boxban a WYSIWYG korlátozott lehet; kényelmesebb a WooCommerce > Tab Manager felületen szerkeszteni.
- Nagy katalógusnál a fül-tartalom keresésbe vonása lassíthat; szükség esetén kapcsold ki.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt.
2. Menj a WooCommerce > Tab Manager menübe:
   - Hozz létre globális füleket.
   - Állíts be egy Default Tab Layoutot, rendezd drag-and-drop módszerrel.
3. Nyisd meg egy termék szerkesztőjét:
   - Product Data > Tabs alatt felülírhatod a layoutot, és adhatsz hozzá egyedi füleket.
4. Döntsd el, hogy a globális fülek tartalma bekerüljön-e a keresésbe. Relevanssi használata esetén engedélyezd az indexelést.

## Tippek fejlesztőknek (sablon testreszabás)

A fül-tartalom sablonjai felüldefiniálhatók a témában. Alap útvonalak:

```
yourtheme/woocommerce/single-product/tabs/content.php
yourtheme/woocommerce/single-product/tabs/content-{slug}.php
```

A slug-alapú fájlokkal egyedi megjelenést adhatsz bizonyos füleknek. A módosítások előtt készíts biztonsági mentést, és teszteld gyermek témában.

---