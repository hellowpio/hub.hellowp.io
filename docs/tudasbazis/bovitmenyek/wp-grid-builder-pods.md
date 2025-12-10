---
title: "WP Grid Builder - Pods"
description: "Hivatalos kiegészítő, amely teljes értékű integrációt ad a Pods mezőkhöz a WP Grid Builder rácsaiban, kártyáiban és facettás szűrőiben."
sidebar_label: "WP Grid Builder - Pods"
---

## Mi ez és milyen problémát old meg?

A WP Grid Builder – Pods kiegészítő a WP Grid Builder hivatalos integrációja a Pods Frameworkhöz. Arra készült, hogy a Pods által kezelt egyedi mezőket – beleértve az összetett, ismétlődő és kapcsolat típusú mezőket – gond nélkül meg tudd jeleníteni a kártyákon, és ugyanilyen könnyedén szűrni tudd őket facettákkal. A Pods sokszor speciális adatstruktúrákat használ, amelyeket a „sima” egyedi mezőkre építő eszközök nem tudnak megfelelően indexelni. Ez a kiegészítő megoldja ezt: a Pods-mezők első osztályú állampolgárrá válnak a rácsokban és a valós idejű, AJAX-os facettás szűrésben.

## Gyors telepítési és beállítási checklista

- Telepítsd és aktiváld a WP Grid Buildert és a Pods plugint.
- Telepítsd és aktiváld a WP Grid Builder – Pods kiegészítőt (a WP Grid Builder fiókból érhető el).
- Hozz létre vagy frissíts egy rácsot és kártyát a tartalmaidhoz.
- Facetta létrehozásakor válaszd a Custom Fields forrást, majd keress rá a „pods” kifejezésre, és válaszd ki a kívánt Pods-mezőt.
- A kártyaszerkesztőben add hozzá a „Custom field” blokkot, és ugyanígy válaszd ki a megfelelő Pods-mező(ke)t.
- Ha térképes nézetet használsz, állíts be marker-mezőket Pods-ból.
- Helyezd el a rácsot és a facettákat Gutenberg-blokkal vagy shortcode-dal.

## Fő funkciók és működés

### Teljes Pods-mezőtámogatás
A kiegészítő minden Pods-mezőtípust támogat. Ez azt jelenti, hogy nemcsak egyszerű szöveg vagy szám mezőkre, hanem összetett, ismétlődő és kapcsolat alapú mezőkre is tudsz szűrni. A háttérben a kiegészítő elvégzi azokat az illesztéseket és indexelési lépéseket, amelyek a Pods struktúráit „érthetővé” teszik a WP Grid Builder számára.

### Facettás szűrés Pods-mezőkre
Facetta létrehozásakor forrásként kiválaszthatod a Custom Fields opciót, majd a mezőkeresőben a „pods” beírására megjelennek a Pods által regisztrált mezők. Ezekből bármelyikre készíthetsz checkbox, radio, select, range, date, search és más facettákat, így a felhasználók több feltételt kombinálva, azonnali visszajelzéssel szűrhetnek.

### Mezők megjelenítése kártyákon
A kártyaszerkesztő „Custom field” blokkjával közvetlenül be tudod húzni a Pods-mezők tartalmát a kártyáidra. Legyen szó kapcsolatban álló bejegyzések címéről, ismétlődő mezőlistáról, képekről vagy dátumokról – a kártya felépítésében szabadon használhatod őket.

### Térképfacettához marker-mezők
Ha helyalapú listát készítesz, a Map facettában marker-mezőként is kijelölhetsz Pods-mezőket (például cím, koordináták). Így a térképes nézet és a listanézet ugyanazon Pods-adatokra épül, és egymással szinkronban működik.

### Egységes felület és teljesítmény
Nem kell külön kód vagy adattranszformáció: a Pods-mezők ugyanazon kezelőfelületeken érhetők el, mint a natív mezők. A facettás szűrés saját index-táblát és AJAX-ot használ, így nagy adatmennyiségnél is gyors marad a keresés és a lapozás.

## Gyakorlati példák

- Ingatlanlista: Szűrés város, ár intervallum, alapterület, felszereltség (ismétlődő kapcsolatok) alapján; kártyán ár, cím, fotók, címkék; térképes nézet markerrel.
- Címtár/portál: Cégek kategóriák, szolgáltatások (kapcsolatmezők) és minősítések szerint; kártyán logó, név, rövid leírás, cím.
- Csapat/portfólió: Munkatársak szakterületei, technológiák (ismétlődő tax/kapcsolat), elérhetőség; kártyán fotó, pozíció, linkek.
- Események: Időpont, helyszín (marker-mező), jegyár, szervező; idő- és helyalapú szűrés egyidejűleg.

## Előnyök és értékajánlat

- Időmegtakarítás: kódolás helyett kattintgatással konfigurálhatsz összetett Pods-mezőkre épülő szűrőket és kártyákat.
- Kevesebb hibalehetőség: a Pods-specifikus tárolásból adódó buktatókat a kiegészítő kezeli.
- Jobb felhasználói élmény: gyors, AJAX-os facettás szűrés, letisztult kártyák, térképes nézet.
- Skálázhatóság: nagy adatbázisoknál is gyors keresés az indexelt adatoknak köszönhetően.
- Egységes munkafolyamat: minden egy helyen – rács, kártya, facetta – natív módon elérhető.

## Célközönség

- WordPress fejlesztők és ügynökségek, akik Pods-alapú adatmodellekkel dolgoznak.
- No-code/low-code építők, akik kód nélkül szeretnének profi, szűrhető listákat és térképeket.
- Portálok, címtárak, ingatlanos, eseményszervező és portfólió oldalak üzemeltetői.
- Bárki, aki Pods-mezőkre támaszkodó, összetett szűrési logikát és látványos rácsokat szeretne.

## Megjelenítés példák

Shortcode-okkal:
```
[wpgb_grid id="123"]
[wpgb_facet id="facets-1"]
[wpgb_facet id="map-1"]
```

Tipikus elhelyezés: egy oldalra először a facetták, majd a rács kerül. A facetták és a rács automatikusan összekapcsolódnak.

## Megjegyzések és követelmények

- A kiegészítőt a WP Grid Builder csapata fejleszti.
- Nem a nyilvános bővítménykönyvtárból érhető el, hanem a WP Grid Builder licenc részeként, a felhasználói fiókból telepíthető.
- A használathoz aktív WP Grid Builder és Pods szükséges; a telepítést követően a facetták és kártyák mezőválasztójában a „pods” keresőkifejezésre láthatóvá válnak a Pods-mezők.
- A rendszerkövetelmények megegyeznek a WP Grid Builder és a Pods aktuális elvárásaival; naprakész WordPress és PHP verzió használata ajánlott.

Ezzel a kiegészítővel a Pods által kezelt egyedi adatszerkezetek azonnal beilleszthetők a WP Grid Builder ökoszisztémájába, így gyorsan készíthetsz professzionális, facettásan szűrhető rácsokat és térképeket – kódolás nélkül.