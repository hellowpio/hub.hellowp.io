---
title: "Products Linked by Variations for WooCommerce"
description: "Különálló WooCommerce termékek összekapcsolása közös attribútumok alapján, swatch-szerű választóval és automatikus átirányítással a megfelelő termékoldalra."
sidebar_label: "Products Linked by Variations for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Products Linked by Variations for WooCommerce abban segít, hogy a **variációk élményét** megőrizd a termékoldalon, miközben minden variáns **különálló termék** marad a boltban. Ha külön URL-t, egyedi leírást, eltérő képeket, készletet vagy árazást akarsz kezelni minden variánshoz (pl. színekhez/méretekhez), de a felhasználónak mégis **swatch-szerű választót** szeretnél mutatni, ez a bővítmény hidalja át a két világot.

A vásárló a termékoldalon a szín/méret gombra kattintva nem egy “belső” variációt választ, hanem egy másik, önálló termékre kerül át – és mindezt úgy, mintha klasszikus variációkat használna.

## Hogyan működik röviden?

- Összekapcsolsz több **önálló egyszeres terméket** közös **attribútumok** alapján (pl. szín, méret).
- A bővítmény ezekből egy **linkelt csoportot** készít, és a termékoldalon **swatch-okként** jeleníti meg az opciókat.
- Kattintáskor a rendszer a **megfelelő termékoldalra** irányítja a vásárlót.
- A kifogyott opciók **elhomályosítva** jelennek meg, elkerülve a zsákutcákat.

## Fő funkciók, érthetően

- **Különálló termékek összekapcsolása attribútumok alapján**
  - Te döntöd el, mely termékek tartoznak össze (akár terméklistából, akár teljes kategóriákat kiválasztva). A közös attribútumok adják azokat a “választókat”, amelyeken a vásárló kattint.

- **Swatch-szerű megjelenítés**
  - A választók lehetnek **képes** swatch-ok (pl. színminták) vagy **szöveges** címkék. Így pont úgy néz ki, mint a natív variációválasztó – csak a háttérben külön termékekre mutat.

- **Átirányítás a megfelelő termékoldalra**
  - Egy kattintás, és azonnal a kiválasztott variáns önálló termékoldalán landol a vásárló. Beállíthatod, hogy ugyanabban vagy **új lapon** nyíljon meg.

- **Készlethiány kezelése**
  - A kifogyott opciók **inaktívként** (elhomályosítva) jelennek meg. Ez tiszta visszajelzést ad, csökkenti a csalódást és a felesleges kattintásokat.

- **Több csoport és kategóriaalapú linkelés**
  - Létrehozhatsz több, egymástól független **linkelt termékcsoportot** (pl. “Póló – színek”, “Póló – méretek”). Egész **kategóriákat** is összekapcsolhatsz, ha a rendszeres karbantartást szeretnéd egyszerűsíteni.

- **Stílus és élő előnézet**
  - Részletesen testreszabhatod a gombok **háttér-, szegély-, szöveg-** és **aktív/inaktív** színeit, a **paddingot**, és azonnal látod az eredményt **élő előnézetben**.

- **Modern WooCommerce kompatibilitás**
  - Támogatja a **HPOS** működést és a **Cart & Checkout blokkokat**, így jól illeszkedik a modern boltfelépítésekhez.

## Gyakorlati példák

- **Divatüzlet (pólók több színben):**
  - Minden szín külön termék (egyedi fotók, meta leírás, URL). A “piros/kék/fekete” swatch-okra kattintva a megfelelő szín termékoldalára jutsz. A kifogyott “sárga” elhalványulva látszik.

- **Sportcipők (külön méretek külön készlettel):**
  - Egy modell minden mérete külön termék, eltérő készlettel és szállítási idővel. A méretválasztás swatch-ról történik, kattintás után azonnal az adott méret termékoldalán jársz.

- **Márkák szerinti váltás:**
  - Azonos típusú kiegészítők több márkában, eltérő garanciával és leírással. A márka swatch-ra kattintva a megfelelő márkájú termékre lépsz át.

## Beállítás és admin felület

### Manage Groups
- **Csoportok kezelése:** új csoport létrehozása, szerkesztés, törlés, keresés.
- **Csoportnév és engedélyezés:** egy kattintással aktiválhatod/tilthatod.
- **Termékek/kategóriák linkelése:** választhatsz egyesével vagy egész kategóriákat.
- **Attribútumok kiválasztása és sorrendezése:** drag & drop sorrend, ami meghatározza a swatch-ok sorrendjét.
- **Enable Images:** ha be van kapcsolva, a swatch-ok képeket használnak; kikapcsolva szöveges címkék jelennek meg.

### General Settings
- **Linkmegnyitás módja:** azonos vagy új lap.
- **Stílus beállítások:** padding, szegélyszín, háttér- és szövegszínek aktív/inaktív állapotban.
- **Élő előnézet:** azonnal látod, hogyan fog kinézni a választó a termékoldalon.

Példa-konfiguráció:

```
Csoport: "Póló – színek"
Linkelés: Termékkategória = "Basic pólók"
Attribútum: Szín (sorrend: fekete, fehér, piros)
Megjelenítés: Enable Images = be
Stílus: kerekített gombok, aktív: fekete háttér/fehér szöveg, inaktív: halványszürke
Link megnyitás: azonos lapon
```

## Előnyök és értékajánlat

- **SEO és marketing kontroll:** minden variáns külön URL, külön meta és leírás – jobb céloldalak, kampány- és organikus teljesítmény.
- **Gyorsabb navigáció:** a felhasználó egy kattintással vált variánsok között, nem kell keresőbe visszalépni.
- **Karbantartási rugalmasság:** termékszintű készlet/ár/szállítás kezelhető, mégis egységes választót kap a látogató.
- **Konzisztens márkaélmény:** testreszabott swatch-ok, élő előnézettel – kevesebb próbálgatás, kevesebb CSS.
- **Skálázható beállítás:** több csoport, kategóriaalapú linkelés – nagy katalógusnál is átlátható.

## Kinek ajánlott?

- **Tartalom- és SEO-központú boltoknak:** ahol fontos az egyedi termékoldal minden variánshoz.
- **Marketingintenzív webáruházaknak:** kampány-URL-ekhez és specifikus landolókhoz.
- **Változatos készlet/ár logikájú üzleteknek:** amikor a variánsok üzletileg valóban külön “termékek”.
- **Dizájnérzékeny márkáknak:** ha swatch-szerű, márkahű választót szeretnél minimális fejlesztéssel.

## Kompatibilitás és licenc

A bővítmény a modern WooCommerce környezetekkel működik, támogatja a HPOS-t és a Cart & Checkout blokkokat. Kereskedelmi **Marketplace-előfizetésként** érhető el, támogatással és pénzvisszatérítési garanciával. Az árak és feltételek idővel változhatnak.

## Döntési segéd: Kell ez neked?

- Szükséged van külön URL-re és egyedi tartalomra minden variánshoz?  
- Mégis swatch-szerű, egykattintásos váltást szeretnél a termékoldalon?  
- Fontos a testreszabható megjelenés és a kifogyott opciók kezelése?

Ha a válasz igen, a Products Linked by Variations for WooCommerce pontosan erre készült.