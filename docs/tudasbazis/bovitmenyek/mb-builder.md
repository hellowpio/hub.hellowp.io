---
title: "MB Builder"
description: "Vizuális, drag‑and‑drop építő a Meta Boxhoz: egyedi mezők és meta boxok létrehozása, exportálása (PHP/JSON), Theme Code generálás és Gutenberg blokkok – kódolás nélkül."
sidebar_label: "MB Builder"
---

## Mi ez és milyen problémát old meg?

Az **MB Builder** (Meta Box Builder) egy vizuális, drag‑and‑drop felület a Meta Box ökoszisztémához. Segítségével kód írása nélkül hozhatsz létre és kezelhetsz **egyedi mezőcsoportokat** (meta boxokat) és **40+ mezőtípust**. Megspórolod a kézi PHP‑definíciót, csökkented a hibázás esélyét, és gyorsabban szállítasz működő, skálázható adatmodelleket.

Röviden: ha dinamikus tartalomszerkezeteket szeretnél felépíteni WordPressben (pl. ingatlanadatok, események, csapatprofilok, globális beállítások), a Builder mindezt vizuálisan, érthetően és hordozhatóan adja a kezedbe.

## Hogyan működik?

- A Builderben vizuálisan összeállítod a mezőket és beállításokat.
- A konfigurációt a Meta Box regisztrálja, így a mezők az admin szerkesztőfelületen jelennek meg a kiválasztott tartalomtípusokon.
- A definíciók **exportálhatók PHP‑ba** (könnyű, bővítményfüggetlen futtatás) vagy **JSON‑ba** (**Local JSON** a gyors betöltéshez és verziókezeléshez).
- A Builder automatikusan generál **Theme Code** mintákat a mezőértékek kiolvasásához.

Alapfeltétel a **Meta Box** telepítése; a Builder a Meta Box Lite csomag részeként elérhető. Opcionális kiterjesztésekkel (pl. MB Blocks, Settings Page, Relationships, Conditional Logic) további funkciókat kapsz ugyanebben a felületben.

## Fő funkciók, közérthetően

- **Vizuális mezőépítő (drag‑and‑drop):** Fogd‑és‑vidd felületen állítod össze a mezőket (szöveg, kép, fájl, választó, csoport, oszlopok stb.). Minden fontos paramétert (azonosító, címke, alapértelmezett érték, kötelezőség, validáció) a UI‑ból állítasz.
- **Megjelenítési és viselkedési szabályok:** Feltételes logikával mezőket jeleníthetsz meg/el rejthetsz más mezők értékei alapján; include/exclude szabályokkal célzottan célozhatsz bejegyzéstípusokra, taxonómiákra, felhasználókra.
- **Kapcsolatok és beállítási oldalak:** A Builder UI‑ból hozhatsz létre **kapcsolatokat** (pl. esemény → helyszín) és **site‑szintű beállítási oldalakat** (logó, elérhetőség, social linkek), ha a megfelelő kiterjesztések elérhetők.
- **Export/Import és sablonok:** Mezőcsoportokat exportálhatsz fájlba, majd importálhatod másik webhelyre. Ideális sablonosításra és többszörözésre.
- **Export PHP‑kódba:** Egy kattintással PHP‑definíciót kapsz. Ezt beteheted child theme‑be vagy saját bővítménybe. Így a kész webhely a Builder nélkül is működik, elég az alap Meta Box.
- **Auto‑generált Theme Code:** A Builder azonnal mutat beilleszthető kódrészleteket a mezőértékek megjelenítéséhez – nem kell dokumentációt böngészned.
- **Gutenberg blokkok vizuálisan:** MB Blocks kiterjesztéssel a Builderből hozhatsz létre egyedi blokkokat, React build lánc nélkül, PHP‑alapon.
- **Local JSON:** A konfigurációk JSON‑ban is tárolhatók, gyorsabban töltenek be és könnyen verziókövethetők.
- **UI és teljesítmény nagy projektekhez:** Kétpaneles felület, élő előnézet és AJAX‑alapú mentés segít, hogy nagy mezőcsoportoknál is gördülékeny maradjon a munka.

## Gyakorlati példák

1. **Ingatlan adatlap**
   - Mezők: ár, alapterület, galéria, lokáció, felszereltség.
   - Feltételes logika: ha „bérlés”, jelenjen meg „kaució”.
   - Frontend: Theme Code‑dal azonnal kiírod a sablonban.

2. **Webhely‑beállítások**
   - Készíts „Beállítások” oldalt logó URL‑lel, cégcímmel, nyitvatartással.
   - Page builderben dinamikusan behúzod ezeket a mezőket – nincs hardcode.

3. **Esemény ↔ Helyszín kapcsolat**
   - Kapcsolatmezőkkel összekötöd a két tartalomtípust.
   - Az esemény oldalon a kapcsolt helyszín adatai automatikusan megjeleníthetők.

4. **Gutenberg blokk szerkesztőknek**
   - Létrehozol egy „Hero” blokkot háttérképpel, címmel, gombbal.
   - A szerkesztők konzisztensen használják, te pedig kontrollálod a mezőket.

## Theme Code példa

```php
// Minta: egyedi mező értéke sablonban
$price = rwmb_meta( 'ar' ); // mező ID: 'ar'
if ( $price ) {
    echo '<span class="ingatlan-ar">' . esc_html( $price ) . '</span>';
}
```

## Előnyök és értékajánlat

- **Gyors bevezetés:** percek alatt kész adatmodell, kódolás nélkül.
- **Kevesebb hiba:** a vizuális UI és a generált kód csökkenti a szintaktikai és logikai hibákat.
- **Hordozhatóság:** export PHP‑ba vagy JSON‑ba, ideális ügynökségi workflow‑hoz.
- **Skálázhatóság:** nagy mezőcsoportoknál is stabil teljesítmény.
- **Ökoszisztéma‑integráció:** page builderek és Meta Box kiterjesztések zökkenőmentes együttműködése.

## Kinek ajánlott?

- **Ügynökségek és fejlesztők:** akik szabványos, verziókövethető, exportálható megoldást keresnek egyedi adatmodellekhez.
- **Site builderek és no‑code felhasználók:** akik kód nélkül szeretnének összetett admin felületeket és Gutenberg blokkokat.
- **Tartalommenedzserek:** akiknek konzisztens, hibavédett szerkesztői élmény kell.
- **Termékcsapatok:** akik több webhelyen szeretnének újrahasznosítható konfigurációkat.

## Telepítés és első lépések

1. Telepítsd a Meta Boxot (a Builder a Lite csomag része).
2. Nyisd meg a Buildert, hozz létre egy új mezőcsoportot.
3. Add hozzá a szükséges mezőket, állítsd be a feltételeket és a célzott tartalomtípusokat.
4. Ments, majd nézd meg a szerkesztőben a megjelenő mezőket.
5. Dönts a deploymentről:
   - **Local JSON** a gyors betöltéshez és verziókezeléshez.
   - **PHP export** a végleges, könnyű, bővítményfüggetlen futtatáshoz.

## Best practice

- **Nevezéktani rend:** következetes mező‑ID‑k (prefixek), hogy jól skálázzon a projekt.
- **Csoportosítás és oszlopok:** a jobb szerkesztői élményért szervezd a mezőket logikus blokkokba.
- **Feltételes logika:** csak a releváns mezők jelenjenek meg; gyorsít és csökkenti a hibát.
- **Verziókezelés:** kapcsold be a Local JSON‑t, és kövesd gitben.
- **Production build:** exportáld PHP‑ba, ha véglegesíted a struktúrát.

## Összegzés

Az **MB Builder** egy vizuális, professzionális eszköz a Meta Boxhoz, amellyel kód nélkül tervezhetsz egyedi mezőket, admin felületeket és akár Gutenberg blokkokat. Exportálható, verziókövethető, teljesítményre optimalizált – mindent megad, hogy gyorsan, hibamentesen és skálázhatóan építs dinamikus WordPress projekteket. Ha egyetlen eszközzel szeretnéd lefedni az adatmodell‑tervezéstől a frontend megjelenítésig terjedő folyamatot, neked való.