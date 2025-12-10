---
title: "LearnDash LMS - Course Grid"
description: "Hivatalos LearnDash kiegészítő, amellyel a kurzusokat (és leckéket/témákat/kvízeket) látványos, szűrhető rácsos kártyanézetben jelenítheted meg blokkal vagy rövidkóddal."
sidebar_label: "LearnDash LMS - Course Grid"
---

## Mi ez és milyen problémát old meg?

A LearnDash Course Grid egy hivatalos kiegészítő, amellyel a kurzusaidat kártya-alapú rácsban, mozaikban vagy listában mutathatod be. Ha sok kurzusod van, a hagyományos, lineáris lista gyorsan áttekinthetetlenné válik. A Course Grid ezt váltja le egy modern, kereshető és szűrhető katalógusra, amely javítja a felfedezhetőséget, az átkattintási arányt és végső soron a beiratkozásokat.

## Fő funkciók, érthetően

### Nézetek és sablonok
- **Skin-ek**: Grid, Masonry, List – különböző elrendezések a tartalomhoz és a rendelkezésre álló helyhez igazítva.
- **Card sablonok**: előre kész kártyadizájnok (például grid-1, grid-2, list-1, list-2), amelyek a kép, cím, leírás, gomb és meta megjelenítését szabályozzák.
- **Sablonozhatóság**: saját skin/card készíthető a témában, így teljes kontrollod van a markup, a stílus és a viselkedés felett.

### Blokk és rövidkódok
- **Gutenberg blokk**: a „LearnDash Course Grid” blokkban vizuálisan állíthatod a skin-t, card-ot, oszlopszámot, elemeket és szűrőket.
- **Rövidkódok**: használhatod a klasszikus szerkesztőben és oldalépítőkben is.
  - Kurzuslista: `[ld_course_list]` (klasszikus) és `[learndash_course_grid]` (modern, skin/card alapú)
  - Leckék/témák/kvízek: `[ld_lesson_list]`, `[ld_topic_list]`, `[ld_quiz_list]`

### Rács és kártyaelemek
- **Oszlopok és minimum oszlopszélesség**: reszponzív elrendezés finomhangolása.
- **Kapcsolható elemek**: kép, cím, rövid leírás, akciógomb, ár/szalag („ribbon”), metaadatok.
- **Haladásjelző**: a beiratkozott vagy lezárt kurzusoknál mutatja a tanuló előrehaladását.
- **Videóelőnézet**: figyelemfelkeltő médiasáv a kártyán.

### Szűrés, keresés, rendezés
- **Kereső és kategória-választó**: segíti a tanulókat megtalálni a megfelelő kurzust.
- **Taxonómia-szűrés**: LearnDash saját és WordPress kategóriák/címkék alapján.
- **Beiratkozási státusz szerinti szűrés**: csak beiratkozott, csak nem beiratkozott vagy minden kurzus.
- **Rendezés**: dátum, cím, népszerűség stb., növekvő/csökkenő sorrendben.

### Lapozás és teljesítmény
- **Beépített lapozás**: klasszikus lapozó, „Load more” gomb vagy végtelen görgetés – gyorsabb, gördülékenyebb böngészés.
- **Több rács egy oldalon**: egymástól független beállításokkal is működik.

### Támogatott tartalomtípusok
- Kurzusok mellett leckéket, témákat és kvízeket is listázhatsz rácsban. (A haladás/árszalag/beiratkozás-szűrő a kurzusokra vonatkozik.)

## Gyors indulás

### Telepítés
- WordPress adminban a LearnDash kiegészítők közül telepítsd és aktiváld a Course Gridet, vagy töltsd fel a bővítmény ZIP fájlját. Aktív LearnDash szükséges.

### Használat blokkal
1. Adj az oldalhoz egy „LearnDash Course Grid” blokkot.
2. Válaszd ki a **Skin**-t (pl. Grid vagy Masonry) és a **Card** sablont.
3. Állítsd az **oszlopszámot** vagy a **minimális oszlopszélességet**.
4. Kapcsold ki/be a kártyaelemeket (kép, szalag, gomb stb.).
5. Konfiguráld a **szűrést és rendezést**, igény szerint a beiratkozási szűrőkkel.

### Rövidkód példák (kurzusok)
```
[ld_course_list col="4"]
```
```
[ld_course_list mycourses="true" progress_bar="true" orderby="date" order="ASC"]
```
```
[ld_course_list mycourses="not-enrolled" show_content="false"]
```
```
[ld_course_list num="2" col="2" course_categoryselector="true"]
```
Modern, skin/card alapú:
```
[learndash_course_grid skin="grid" card="grid-2" columns="3" min_column_width="280"]
```

### Rövidkód példák (leckék/témák/kvízek)
```
[ld_lesson_list col="3"]
[ld_topic_list col="3"]
[ld_quiz_list col="3"]
```

## Gyakorlati használati esetek

- **Course Library oldal**: több tucat kurzust mutatsz be Grid skinben, kategória-választóval és keresővel. A felhasználók gyorsan szűrnek témákra, majd rákattintanak a kártyákra.
- **Saját kurzusaim nézet**: profil oldalon csak a beiratkozott kurzusokat listázod haladásjelzővel, így mindenki látja, hol tart.
- **Promóciós kirakat**: a nem beiratkozott kurzusokat képes, rövid leírásos kártyákkal, ár-szalaggal jeleníted meg, hogy növeld a konverziót.

## Haladó testreszabás

- **Sablonozás a témában**: hozz létre egy „learndash/course-grid/” mappát a témád alatt, és készíts egyedi skin/card sablonokat (layout.php), opcionális style.css és script.js fájlokkal.
- **Lapozási sablonok**: választhatsz klasszikus lapozás, „Load more” vagy végtelen görgetés között; ezek sablonként testre szabhatók.
- **Fejlesztői tipp**: rövidkódokat beágyazhatsz sablonfájlokba is a do_shortcode hívással.

## Előnyök és értékajánlat

- **Jobb áttekinthetőség**: a hosszú listát vizuális katalógussá alakítja.
- **Magasabb konverzió**: kártya‑szintű gomb, ár/szalag, videóelőnézet és haladás jelzés.
- **Rugalmas beállítások**: blokkban kattintgatva, vagy rövidkóddal paraméterezve.
- **Fejleszthetőség**: egyedi skin/card és lapozás a márka megjelenéséhez illesztve.
- **Gyors oldalélmény**: „Load more” és végtelen görgetés a zökkenőmentes böngészéshez.

## Kinek ajánlott?

- **E‑learning oldaltulajdonosoknak**, akik sok kurzust kezelnek és szeretnék javítani a felfedezhetőséget.
- **Képzési csapatoknak és akadémiáknak**, akik célzott listákat (beiratkozott/nem beiratkozott, kategória, címke) akarnak.
- **Ügynökségeknek és fejlesztőknek**, akik egyedire szabott katalógus‑élményt szeretnének márkahű dizájnnal.
- **Marketplace‑eknek**, ahol a vizuális katalógus és a gyors szűrés kulcs a konverzióhoz.

A lényeg: a Course Grid-del a kurzusaidat profi, rugalmas és felhasználóbarát katalógusban mutathatod meg, amely pontosan ahhoz a tanulói élményhez igazítható, amit nyújtani szeretnél.