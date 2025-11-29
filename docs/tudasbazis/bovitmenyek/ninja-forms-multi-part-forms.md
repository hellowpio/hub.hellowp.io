---
title: "Ninja Forms - Multi-Part Forms"
description: "Hosszú űrlapokat több, egymást követő lépésre bonthatsz, haladásjelzővel, morzsamenüvel és részszintű validációval."
sidebar_label: "Ninja Forms - Multi-Part Forms"
---

## Mi ez és milyen problémát old meg?

A Multi‑Part Forms a Ninja Forms hivatalos kiegészítője, amellyel a hosszú űrlapokat több, logikus lépésre oszthatod. Így a felhasználó nem egy végtelennek tűnő űrlapot lát, hanem rövid, jól tagolt részeket, haladásjelzővel és navigációval. Ez csökkenti a lemorzsolódást, javítja a kitöltési élményt és növeli a befejezési arányt. A kiegészítő a Ninja Forms alapbővítményre épül, annak telepítése szükséges.

## Fő funkciók, érthetően

- Többlépéses űrlapépítés drag‑and‑drop módszerrel
  - Az űrlapod „Részekre” (oldalakra) bonthatod. Mezőket egyszerűen áthúzhatsz a lépések között, így gyorsan átrendezheted a logikát.

- Navigáció és visszajelzés a felhasználónak
  - **Előző/Következő gombok**: Szabadon átírhatod a feliratokat (pl. „Tovább a fizetéshez”).
  - **Morzsamenü (breadcrumb)**: Egy klikkes ugrás a lépések között – átlátható folyamatképet ad.
  - **Haladásjelző (progress bar)**: Vizualizálja, hol tart a kitöltő és mennyi van hátra.

- Részszintű (per‑page) validáció
  - Minden lépésnél ellenőrizheted a kötelező mezőket, így a felhasználó csak helyes adatokkal léphet tovább. Ez csökkenti a hibás beküldéseket és a frusztrációt.

- Feltételes megjelenítés lépésszinten
  - A Conditional Logic kiegészítővel csak a releváns lépéseket mutathatod meg (például további résztvevők adatai csak akkor jelennek meg, ha a felhasználó több résztvevőt választ).

- Összefoglaló/ellenőrző oldal a beküldés előtt
  - A merge tagekkel könnyen készíthetsz végső áttekintőt, ahol a felhasználó egyben látja és ellenőrizheti a megadott adatokat.

- Akadálymentesség és stílus
  - A kiegészítő a hozzáférhetőség szempontjait szem előtt tartja. A kinézet további finomhangolását a Layout & Styles add‑on segíti (gombok, progress bar, tipográfia).

## Gyakorlati példák

- Pályázati űrlap: 1. Személyes adatok → 2. Végzettség → 3. Tapasztalat → 4. Referenciák → 5. Összefoglaló és beküldés.
- Eseményregisztráció: 1. Résztvevő adatai → 2. További vendégek (feltételesen, a kiválasztott darabszám alapján több oldal) → 3. Számlázási adatok → 4. Összegzés.
- Ajánlatkérés: 1. Projekt leírása → 2. Költségkeret és határidő → 3. Kapcsolattartás → 4. Ellenőrzés és elküldés.
- Kérdőívek/felmérések: Tematikus blokkokra bontva, egyértelmű lépéscímekkel, morzsamenüvel.

## Telepítés és használat lépései

1. Telepítsd és aktiváld a Ninja Forms alapbővítményt.
2. Telepítsd és aktiváld a Multi‑Part Forms kiegészítőt.
3. Nyisd meg az űrlapszerkesztőt, és add hozzá az első „Rész” elemed.
4. Húzd be a mezőket a megfelelő részekbe. Új rész hozzáadásához használd a „+” ikont.
5. Az Advanced beállításoknál kapcsold be és állítsd be:
   - **Validate each part** (részszintű ellenőrzés),
   - **Show breadcrumbs** (morzsamenü),
   - **Show progress bar** (haladásjelző),
   - **Show part titles** (lépéscímek),
   - Előző/Következő gombok feliratainak testreszabása.
6. Készíts összefoglaló oldalt az utolsó lépésben merge tagekkel.

Példa összefoglaló blokkra:
```
Összefoglaló
Név: {field:name}
E-mail: {field:email}
Telefon: {field:phone}

Megadott adatok:
{all_fields}
```

## Integrációk és követelmények

- Követelmény: a Ninja Forms alapbővítmény.
- Gyakori kiegészítők:
  - **Conditional Logic**: lépések megjelenítése/elrejtése a válaszok alapján.
  - **Layout & Styles**: részletes megjelenés‑testreszabás (gombok, progress bar).
  - **Save Progress**: „Folytatás később” funkció, űrlaptervezet mentésével.

Megjegyzés: a „Folytatás később” nem része a Multi‑Part kiegészítőnek; külön add‑on biztosítja.

## Előnyök és értékajánlat

- Több kitöltött űrlap: a lépésekre bontás csökkenti az elrettentő hossz érzetét.
- Kevesebb hiba: a részszintű validáció hamar jelzi a hiányokat.
- Jobb irányítás és átláthatóság: morzsamenü, haladásjelző, összegző oldal.
- Rugalmas logika: csak releváns lépések jelennek meg, így gyorsabb a folyamat.
- Időmegtakarítás: drag‑and‑drop építés, újrafelhasználható lépésszerkezetek.

## Kinek ajánlott?

- Marketing és értékesítés: lead‑generáló, ajánlatkérő űrlapokhoz.
- HR és oktatás: jelentkezések, felvételik, pályázatok kezelése.
- Rendezvényszervezés: összetett regisztrációk, több résztvevős folyamatok.
- Ügynökségek és fejlesztők: ügyfélprojektekhez skálázható, UX‑barát formok.
- Nonprofit és közintézmények: felmérések, kérdőívek, támogatási kérelmek.

## Jó gyakorlatok és korlátok

- Tervezd meg a lépéseket témakörönként, 5–10 mező/oldal ideális.
- Adj egyértelmű **lépéscímeket**, és kapcsold be a **morzsamenüt**.
- Használd a **részszintű validációt**, hogy ne gyűljenek a hibák a végére.
- Rejtsd el a felesleges lépéseket **feltételes logikával**.
- Ha a kinézet fontos, a **Layout & Styles** add‑on segít a finomhangolásban.
- Ha a felhasználók később folytatnák, tervezz a **Save Progress** kiegészítővel.

## Összegzés

A Multi‑Part Forms profi eszközt ad a kezedbe, hogy a hosszú, komplex űrlapokat jól emészthető lépésekre bontsd. Drag‑and‑drop szerkesztés, haladásjelző, morzsamenü, részszintű validáció és összefoglaló oldal gondoskodik a gördülékeny élményről. A kiegészítő szorosan illeszkedik a Ninja Forms ökoszisztémába, és a kapcsolódó add‑onokkal együtt teljes, rugalmas megoldást ad bármilyen összetett űrlapfolyamatra. Ha a célod a magasabb konverzió, kevesebb hiba és jobb felhasználói élmény, ez a kiegészítő neked való.