---
title: "JetBlocks For Elementor"
description: "Prémium Elementor kiegészítő fejlécek és láblécek építéséhez, speciális navigációs és azonosítási widgetekkel, kódolás nélkül."
sidebar_label: "JetBlocks For Elementor"
---

## Mi ez és milyen problémát old meg?

A JetBlocks egy prémium bővítmény az Elementorhoz, amellyel profi **fejléceket (header)** és **lábléceket (footer)** építhetsz kódolás nélkül. Olyan, az oldalon mindenhol fontos elemeket ad a kezedbe, mint a menü, kereső, kosár, logó, morzsamenü és felhasználói azonosítás (bejelentkezés, regisztráció, jelszó-visszaállítás). Megoldja, hogy az Elementor (különösen a Free verzió) hiányzó fejléc-eszközeit könnyen pótold, és egy helyen tudd megoldani a navigációt, keresést és fiókfunkciókat.

## Hogyan működik?

- **Alapkövetelmény:** WordPress + Elementor szerkesztő.
- **Fejléc/lábléc sablon:** Elementor Pro Theme Builderrel vagy a Crocoblock **JetThemeCore** sablonkezelőjével (utóbbival Elementor Free mellett is).
- **Használat:** a JetBlocks saját **widgeteket** és két **kiegészítőt (extensions)** ad az Elementorhoz. Ezeket bármely oldal/sablon fej- vagy lábléc szekciójába húzhatod.
- **JetBlocks Dashboard:** itt kapcsolhatod ki/be a widgeteket és kiegészítőket, beállíthatod az **Editor Load Level** (mennyi stílusopció töltődjön be az editorba) értéket, és a **Breadcrumbs** forrását.

## Fő funkciók, érthetően

- **Navigation Menu:** teljesen testreszabható WordPress menü a fejlécben. Kezelheted az elrendezést, ikonokat, gombstílusokat, színeket; mobilon és asztali nézetben külön megjelenést adhatsz.
- **Hamburger Panel:** reszponzív oldalsó panel, amely egy Elementor-sablont nyit meg (pl. mobilmenü). Saját ikon, váltógomb, animáció és panelstílus állítható.
- **Search:** keresőikon vagy -mező, ami felugró vagy lenyíló animációval jelenik meg. Ikonválasztás, helyőrző, színek és fókusz-állapot testreszabható.
- **Breadcrumbs:** morzsamenü a tartalmi hierarchia feltérképezéséhez. A Dashboardban megadhatod, mely taxonómiát részesítse előnyben (pl. kategória).
- **Site Logo:** képi vagy szöveges logó, kattintható kezdőoldal-linkkel és tipográfiai/stílus beállításokkal.
- **Auth Links:** dinamikus **Belépés/Kilépés/Regisztráció** hivatkozások, amelyek a felhasználó állapota szerint változnak.
- **Login Form:** bejelentkezési űrlap beépített hibakezeléssel és átirányítással, fejlécbe vagy külön oldalra is teheted.
- **Registration Form:** regisztrációs űrlap, amely **CAPTCHA**-val (CAPTCHA 4WP integráció) is védhető. Egyéni mezők és üzenetek.
- **Reset Password Form:** jelszó-visszaállítás egyedi e-mail tárggyal/szöveggel, feladó név/cím beállítással, siker utáni átirányítással, gomb- és üzenetszövegek finomhangolásával.
- **WooCommerce Shopping Cart:** kosár ikon/doboz a fejlécben; testreszabhatod a jelző buborékot, lenyíló listát és interakciókat. (WooCommerce szükséges.)
- **Sticky Section (kiegészítő):** bármely Elementor szekció „ragadósra” állítható. Vezérelheted eszközönkénti láthatósággal és a „Stop at parent end” opcióval.
- **Column Order (kiegészítő):** az oszlopok sorrendjét külön-külön állíthatod desktop/tablet/mobil nézethez – kulcs a mobilbarát elrendezéshez.

## Gyakorlati példák

- **Alap fejléc csomag**  
  Balra logó, középen menü, jobbra kereső + fióklinkek + kosár. A szekciót állítsd **Sticky**-re, hogy görgetéskor is elérhető maradjon.
  
  ```
  [Section (Sticky: On)]
    [Col1] Site Logo
    [Col2] Navigation Menu
    [Col3] Search | Auth Links | Shopping Cart
  ```

- **Mobil első navigáció**  
  Asztali menü helyett **Hamburger Panel**, amely megnyit egy sablont a teljes navigációval. A **Column Order**-rel mobilon előre hozhatod a hamburger ikont.

- **Fiókkezelés a helyszínen**  
  Fejlécben **Auth Links**, külön oldalon **Login Form** és **Registration Form**, az „Elfelejtett jelszó” oldalra **Reset Password Form**. Egyedi e-mail szövegezés és siker utáni átirányítás segít az UX finomhangolásában.

## Előnyök és értékajánlat

- **Kódolás nélkül**: drag-and-drop megoldás a legfontosabb fejléc elemekre.
- **Gyorsabb építés**: kész widgetekkel nem kell egyedi fejlesztéssel bajlódnod.
- **Jobb felhasználói élmény**: kereső, morzsamenü, kosár és sticky fejlécek növelik a használhatóságot és konverziót.
- **Rugalmasság**: azonosítási űrlapok, WooCommerce integráció, reszponzív oszlopsorrend.
- **Teljesítmény-kontroll**: az **Editor Load Level** csökkentheti az editor terhelését nagy projekteknél.

## Célközönség

- **Weboldal-építők és ügynökségek**, akik Elementorral dolgoznak és egységes header/footer rendszert akarnak gyorsan.
- **WooCommerce tulajdonosok**, akik kiemelnék a kosarat és egyszerűsítenék a vásárlói útvonalat.
- **Tagsági/memberség oldalak** készítői, akik helyben kezelnék a bejelentkezést, regisztrációt és jelszó-visszaállítást.
- **Elementor Free felhasználók**, akik JetThemeCore-ral teljes fej-/lábléc sablonozást szeretnének.

## Követelmények és kompatibilitás

- WordPress + **Elementor**.
- Fejléc/lábléc sablonhoz: **Elementor Pro Theme Builder** vagy **JetThemeCore**.
- **WooCommerce** szükséges a Shopping Cart widgethez.
- Oldalakon, bejegyzéseken és archív sablonokon is használható.

## Gyors kezdés

1. Telepítsd és aktiváld a JetBlocks-t (és igény szerint a JetThemeCore-t).
2. Hozz létre egy **Header** sablont (Theme Builder vagy JetThemeCore).
3. Adj hozzá egy szekciót 3 oszloppal: logó, menü, hasznos ikonok.
4. Helyezd el a JetBlocks widgeteket: **Site Logo**, **Navigation Menu**, **Search**, **Auth Links**, **Shopping Cart**.
5. Kapcsold be a **Sticky Section**-t a szekción, és állítsd be a láthatóságot eszközönként.
6. Finomhangold a mobilnézetet a **Column Order** segítségével.
7. A **JetBlocks Dashboard**-ban állítsd be az **Editor Load Level**-t és a **Breadcrumbs** forrást.
8. Mentsd el és rendeld a sablont a megfelelő megjelenési feltételekhez.

## Biztonság és karbantartás

A bővítmény rendszeresen kap hibajavításokat és biztonsági frissítéseket. Különösen, ha bejelentkezési/űrlapfunkciókat használsz, tartsd mindig **naprakészen** a plugint, és időszakosan ellenőrizd a jogosultsági és űrlapbeállításokat.

---

A JetBlocks egy kompakt, mégis átfogó „header & footer” eszköztár Elementorhoz: a navigáció, keresés, kosár és felhasználói azonosítás teljes folyamata egy helyről építhető fel, finom reszponzív vezérléssel és professzionális sablonkezeléssel. Ha gyorsan szeretnél modern, mobilbarát fejlécet és láblécet, ez a bővítmény neked szól.