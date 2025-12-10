---
title: "WPForms Multilingual"
description: "WPML hivatalos kiegészítője, amellyel a WPForms űrlapokat teljes körűen, automatizált vagy manuális folyamattal több nyelven kezelheted."
sidebar_label: "WPForms Multilingual"
---

## Mi ez és milyen problémát old meg?

A **WPForms Multilingual (WPFML)** a WPML hivatalos kiegészítője, amely a **WPForms** űrlapjaidat a WPML fordítási rendszerébe illeszti. Így egyetlen űrlapot használhatsz több nyelven, és a látogatók mindig a **webhely aktuális nyelvén** látják a mezőket, visszaigazolásokat és az **értesítő e-maileket** is. Nem kell külön űrlapokat építened minden nyelvre; a fordítás egy központi, ellenőrzött folyamatban kezelhető.

## Rendszerkövetelmények

- **WPForms** (vagy WPForms Lite)
- **WPML** alapbővítmény
- **WPML String Translation**
- **WPForms Multilingual** kiegészítő

A bővítményt a WPML-t fejlesztő csapat gondozza, és a WPML előfizetés részeként érhető el.

## Fő funkciók részletesen

- **Teljes űrlapfordítás**: Fordítható az űrlap címe, minden mező, címke, leírás, **alcímkék** (például a Név mező részei), **helyőrzők (placeholders)**, továbbá a **Content mezők** és **HTML blokkok**. Ez biztosítja, hogy a frontenden sehol ne maradjon „félrebeszélő” nyelvi elem.
- **Értesítések és visszaigazolások**: A beállított visszaigazolási üzenetek és admin/felhasználói értesítések nyelvenként fordíthatók. A WPFML a WPForms „smart tagjeinek” (pl. űrlapnév) nyelvi megjelenítését is kezeli, így az e-mailek és köszönőoldalak minden részletükben követik a választott nyelvet.
- **Fordítási módszerek**: Használhatod az **automatikus fordítást** (Advanced Translation Editor), **saját kézi fordítást**, vagy **professzionális fordítókat**. Mindez a WPML **Fordítási vezérlőpultjából** indítható, ahol a WPForms űrlapok külön szekcióban jelennek meg.
- **String Translation és automatikus regisztráció**: Ha valamelyik űrlapszöveg (pl. alcímke vagy gombfelirat) nem bukkan fel a fordítandó elemek között, elég **meglátogatni a formot a frontenden**, így a karakterláncok regisztrálódnak, majd a **String Translation** felületen lefordíthatók.
- **Add-on integráció**:
  - **URL-átirányítások** megerősítésekben: nyelvenként állítható céloldalak.
  - **Entry Preview** címkék: az előnézeti lépés minden eleme fordítható.
  - **Form Locker** üzenetek: zárolási és hozzáférési üzenetek lokalizálhatók.
  - **Custom CAPTCHA** kérdés–válasz párok: többnyelvű biztonsági kérdések.
  - **Save and Resume** gombok és üzenetek: a félbehagyott űrlapok kommunikációja nyelvenként testre szabható.
  - **User Registration** e-mailek: regisztrációs és megerősítő levelek a felhasználó nyelvén mennek ki.
  - **Felmérések és szavazások**: a válaszok nyelvenkénti kezelése és összevonása támogatott, így egységes riportot kapsz.
- **Megbízható megjelenítés és kompatibilitás**: Javított **feltételes mező**-logika többnyelvű környezetben, **PHP 8** kompatibilitás, importált űrlapok automatikus regisztrációja és stabilabb **űrlapmentési folyamat**.

## Hogyan működik a gyakorlatban?

1. Telepítsd és aktiváld a WPML-t, a String Translationt, a WPFormsot és a WPForms Multilingualt.
2. Lépj a **WPML → Fordítási vezérlőpultba**, és a WPForms szekcióban jelöld ki a fordítandó űrlapokat.
3. Válaszd ki a fordítási módot (automatikus, kézi vagy fordítóhoz delegált), majd küldd fordításra.
4. A frontenden nyelvváltáskor automatikusan a megfelelő **nyelvi űrlapverzió** jelenik meg.
5. Ha valami szöveg nem látszik fordíthatónak, nyisd meg az űrlapot a **frontenden** (regisztráció), majd fordítsd le a String Translationben.

```text
Gyors checklist
- WPForms + WPML + String Translation + WPFML aktív?
- Nyelvek és nyelvváltó beállítva?
- Űrlap kijelölve a Fordítási vezérlőpultban?
- Nem látható szöveg? Nyisd meg a formot a frontenden → String Translation.
- Értesítések és visszaigazolások mind fordítva?
```

## Konkrét, gyakorlati példák

- **Támogatási űrlap több régióra**: Ugyanaz a struktúra, de a címkék, súgószövegek és az automatikus válasz e-mail minden nyelven natív. Az ügyfélszolgálat egységesen kapja a beérkezőket, miközben az ügyfél saját nyelvén kommunikál.
- **Regisztrációs folyamat**: A User Registration kiegészítő megerősítő levelei és hibajelzései a felhasználó által választott nyelven mennek ki, kevesebb félreértéssel és elhagyással.
- **Felmérés/űrlap A/B országokban**: A kitöltési arányokat és válaszokat nyelvtől függetlenül egyben tudod elemezni, miközben a kérdések teljesen lokalizáltak.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Nem kell külön űrlapokat duplikálnod és karbantartanod; egy űrlap – több fordítás.
- **Következetes UX**: A látogató és az admin is a megfelelő nyelvű tartalmat kapja (mezők, üzenetek, e-mailek).
- **Kevesebb hiba, jobb skálázhatóság**: Új nyelv felvétele a meglévő munkafolyamatban történik, anélkül, hogy szétesne a logika.
- **Professzionális fordítási folyamat**: Automatizált fordítás, kézi finomhangolás, fordítócsapatok – mind egy helyen.

## Célközönség

- **Nemzetközi vállalkozások és e-kereskedelmi oldalak**: Többpiacos kapcsolatfelvétel és ügyintézés egységesen.
- **Oktatási és közintézmények**: Jelentkezési, pályázati, visszajelző űrlapok több nyelven.
- **Ügynökségek és site builderek**: Standardizálható, átadható és skálázható űrlapfordítási folyamat.
- **Ügyfélszolgálati csapatok**: Érthetőbb beérkezők, nyelvfüggő automatizmusok és riportok.

## Megbízhatóság és kompatibilitás

A WPFML-t a WPML csapata folyamatosan teszteli a WPForms aktuális funkcióival és kiegészítőivel. A legutóbbi frissítések hoztak támogatást az új generációs fordítószerkesztőhöz, javították a feltételes mezők működését, bővítették az addon-integrációkat, és stabilabbá tették az űrlapmentést modern PHP környezetekben.

---

Röviden: ha többnyelvű webhelyen használsz WPFormsot, a **WPForms Multilingual** az a kapocs, amely az űrlapjaid minden elemét professzionális fordítási folyamatba rendezi, és garantálja, hogy a látogatók és a belső folyamatok is a megfelelő nyelven működjenek.