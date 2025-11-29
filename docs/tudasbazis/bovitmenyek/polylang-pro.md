---
title: "Polylang Pro"
description: "Prémium többnyelvűségi bővítmény WordPresshez, DeepL integrációval, URL‑slug fordítással, XLIFF/PO folyamattal és SEO támogatással."
sidebar_label: "Polylang Pro"
---

## Mi ez és milyen problémát old meg?

A Polylang Pro egy professzionális, teljesítményorientált többnyelvűségi bővítmény WordPresshez. Segítségével ugyanazon webhelyen több nyelven kezelheted a teljes tartalmat – bejegyzéseket, oldalakat, médiát, kategóriákat, tageket, egyedi bejegyzéstípusokat és taxonómiákat, menüket és widgeteket. A cél: ne kelljen külön site‑példányokat vagy bonyolult adatbázis‑megoldásokat fenntartanod, miközben a SEO és az URL‑stratégia is kézben marad.

## Fő funkciók

### Nyelvkezelés és URL‑stratégia
- **Nyelv hozzárendelése minden tartalomhoz**: minden bejegyzés, oldal, kategória és egyéb elem kap egy elsődleges nyelvet, és összekapcsolhatod a fordítási párjait.
- **Rugalmas URL‑kiosztás**: használhatsz könyvtár alapú (/en/), aldomaines (en.), vagy külön domaines megoldást. Az **alapértelmezett nyelv kódját elrejtheted**, így megőrizheted a meglévő linkprofilodat.
- **Nyelvváltó**: menübe, widgetbe vagy blokkba illeszthető, zászlóval és/vagy névvel. Beállíthatod, hogy rejtse el azokat a nyelveket, ahol nincs fordítás.
- **Böngésző nyelvének észlelése**: az első látogatónál automatikusan a megfelelő kezdőoldalra irányíthatsz (többdomaines felállásnál bizonyos böngészőkorlátok érvényesek).

### Fordítási munkafolyamat
- **Manuális fordítás és duplikálás**: a bejegyzés/oldal szerkesztőből egy kattintással készíthetsz fordítási vázlatot, és szinkronban tarthatod a releváns mezőket.
- **Gépfordítás DeepL‑lel (Pro)**: API‑kulccsal bekapcsolhatod az automatikus lefordítást, majd szerkesztheted a kimenetet. Nagy tartalmi készleteknél hatalmas időnyereség.
- **XLIFF/PO import–export (Pro)**: sztringeket ki‑ és visszaimportálhatsz, így külső fordítóeszközökkel, ügynökségekkel is gördülékeny a munka.
- **Sztringfordítások**: témák és bővítmények opciói, widgetcímek, webhelycím és tagline – minden, ami nem klasszikus bejegyzéstartalom.

### URL‑lokalizáció és SEO
- **Slugok fordítása (Pro)**: fordíthatod a kategória‑, címke‑, szerző‑ és egyéni bázisslugokat.
- **Azonos slug megosztása (Pro)**: ha szeretnéd, ugyanaz a slug szerepelhet több nyelven (pl. márkanevek), így egységes marad az információ‑architektúra.
- **Automatikus hreflang és Open Graph**: a bővítmény SEO‑barát jelöléseket ad minden nyelvi változathoz, csökkentve a duplikációs kockázatot.

### Szerkesztői és fejlesztői eszközök
- **Blokkszerkesztő és FSE támogatás**: külön nyelvi oldalsáv segíti, hogy gyorsan lásd és kezeld a fordítási állapotot.
- **REST API**: a nyelvi beállítások és műveletek elérhetők API‑n keresztül, így fejlesztőként automatizálhatsz és integrálhatsz folyamatokat.
- **Hookok és szűrők**: finomhangolhatod a nyelvváltó megjelenését, a lekérdezéseket és a viselkedést.

Példa nyelvváltó kiíratására sablonban:
```
<?php if (function_exists('pll_the_languages')) {
    pll_the_languages([
        'show_flags' => 1,
        'show_names' => 1,
        'hide_if_empty' => 1,
    ]);
} ?>
```

### WooCommerce
- **Külön kiegészítővel** (vagy Business Pack csomaggal) a termékek, kategóriák, tagek, globális attribútumok és alap oldalak (Shop, Cart, Checkout, My Account) fordíthatók.
- **Készlet‑ és metaadat‑szinkron**, HPOS‑kompatibilitás, és SEO jelölések – minden, ami egy többnyelvű áruházhoz kell.

### Teljesítmény és kompatibilitás
- **Bloat‑mentes működés**: nem hoz létre extra adatbázistáblákat, jól együttműködik cache‑bővítményekkel.
- **Multisite‑kompatibilitás**, professzionális támogatás.
- **Zökkenőmentes migráció** az ingyenes változatról: a Pro ugyanazt az adatállományt használja.

## Gyakorlati példák

- **Vállalati webhely**: angol a főnyelv, magyar és német a másodlagos. Az alapértelmezett nyelvnél nincs nyelvkód az URL‑ben, a többinél igen. A nyelvváltó csak akkor mutat egy nyelvet, ha van fordítás.
- **Tartalomportál**: kategóriabázis slug fordítva (news → hirek), de egyes márkanevek slugja minden nyelven azonos marad.
- **Webshop**: a termékek leírása és attribútumai nyelvenként kezelhetők, a készlet közös, a kosár és a pénztár oldalak lokalizáltak.

## Miért érdemes használni?

- **Időmegtakarítás**: DeepL integráció, duplikálás és szinkronizáció, XLIFF/PO folyamatok – kevesebb kézi munka.
- **SEO‑biztonság**: automatikus hreflang, fordítható slugok, tiszta URL‑stratégia.
- **Fejlesztőbarát**: REST API, hookok, blokkszerkesztő oldalsáv, WordPress‑natív adatmodell.
- **Skálázható folyamat**: ügynökségeknek és nagy site‑oknak is átlátható, karbantartható többnyelvűség.

## Kinek ajánlott?

- **Közép‑ és nagyvállalati oldalaknak**, ahol sok tartalom és több szerkesztő dolgozik.
- **Fejlesztőknek és ügynökségeknek**, akik szabványos, API‑barát megoldást szeretnének.
- **E‑kereskedőknek**, akik több nyelven értékesítenek, és fontos a készlet‑szinkron és a SEO.
- **Szerkesztőknek**, akik egyszerűen akarják kezelni, hogy melyik tartalom melyik nyelvhez tartozik.

## Jó tudni (korlátok és licenc)

- A **gépfordítás nem “mindent egy kattintásra”** – a minőség érdekében utószerkesztés javasolt.
- **WooCommerce‑hez külön kiegészítő** szükséges (vagy Business Pack), hogy minden áruházi rész teljesen többnyelvű legyen.
- **Böngészőnyelv‑észlelés** többdomaines beállításnál korlátozott lehet a modern sütikezelés miatt.
- **Licencelés**: éves kulcs, amely frissítést és támogatást biztosít; megújításkor kedvezmény. A Pro aktiválásakor az ingyenes kiadás automatikusan kikapcsol, az adatok változatlanok maradnak.

Összességében a Polylang Pro egy gyors, tiszta és fejlesztőbarát út a többnyelvű WordPress‑oldalakhoz. Ha egyszerre fontos a teljesítmény, a SEO és a skálázható fordítási workflow, ezzel a bővítménnyel mindezt natív WordPress‑élményben kapod meg.