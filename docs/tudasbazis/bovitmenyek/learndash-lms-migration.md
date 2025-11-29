---
title: "LearnDash LMS - Migration"
description: "Hivatalos, ingyenes LearnDash add‑on, amellyel más WordPress‑es LMS‑ekből egykattintásosan viheted át a kurzustartalmat LearnDash‑be."
sidebar_label: "LearnDash LMS - Migration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Migration egy hivatalos, ingyenes kiegészítő, amellyel a meglévő WordPress‑alapú LMS rendszeredből (Sensei LMS, Tutor LMS, LearnPress, LifterLMS) gyorsan és biztonságosan át tudod hozni a kurzusaidat LearnDash‑be. A célja, hogy ne kelljen mindent kézzel újraépítened: a kurzus‑hierarchiát és a kvíz‑/kérdés tartalmat automatikusan konvertálja, így minimalizálod az átállási időt és a hibázás kockázatát.

## Fő funkciók és hogyan működnek

- Egykattintásos migráció: kiválasztod a forrás LMS‑t és a migrálandó kurzust, majd a bővítmény lefuttatja az átvitel fő lépéseit. A folyamat végén a LearnDash‑ben kész kurzusstruktúrát kapsz, amit azonnal finomhangolhatsz.
- Tartalomtípusok átvitele: kurzusok, leckék, témák (topics), kvízek és kvízkérdések importja LearnDash‑be. A hierarchia megmarad, a kvíztartalom a támogatott kérdéstípusoknak megfelelően konvertálódik.
- Beépített leképezés (mapping): a különböző LMS‑ek eltérő elnevezéseit és szintjeit a bővítmény automatikusan LearnDash‑nek megfelelő struktúrává alakítja.
- Adminból telepíthető és frissíthető: hivatalos LearnDash add‑onként az Add‑ons menüből éred el (a LearnDash licenc aktiválása után).

### Konkrét leképezések

- LearnPress → LearnDash
  - Sections → Lessons
  - Lessons → Topics
  - Nem kerül át: követelmények, célközönség, akciós ár, kiemelt lista és más LearnPress‑specifikus mezők.

- Tutor LMS → LearnDash
  - Topics → Lessons
  - Lessons → Topics
  - Nem kerül át: nehézségi szint, Q&A, célközönség, követelmények és egyéb Tutor‑specifikus adatok.

- Sensei LMS → LearnDash
  - Modules → szakaszcímek (section headings) a tananyag‑szerkesztőben.
  - Sensei Pro speciális kérdéstípusok egyszeres választású kérdéssé konvertálódnak. A Sensei‑blokkok miatt utóellenőrzés javasolt.

- LifterLMS → LearnDash
  - Kurzusok, szekciók, leckék, témák, kvízek és kérdések azonos nevű LearnDash‑típusokká válnak.
  - Támogatott kérdéstípusok: Igaz/Hamis (egyszeres választásként), feleletválasztós és képes választás (többválasztósként). Nem kerül át többek között: akciós ár, trackek, nehézségi szintek, engagements. Lifter‑blokkok után ellenőrzés szükséges.

### Mit nem migrál?

- Tanulói előrehaladás (course progression)
- Kurzus metaadatok (kategóriák, címkék, egyedi mezők stb.)
- Médiafájlok és LMS‑specifikus vizuális blokkok
- Egyes, platform‑specifikus funkciók és mezők (lásd a fenti példákat)

## Telepítés és használat

1. Nyisd meg a LearnDash LMS > Add‑ons menüt, és telepítsd a LearnDash Migration kiegészítőt.
2. Győződj meg róla, hogy a forrás‑LMS bővítménye aktív a migráció idejére.
3. Menj a LearnDash LMS > Settings > Advanced > Migration oldalra.
4. Válaszd ki a forrás LMS‑t és a migrálandó kurzust, majd indítsd a folyamatot (Migrate Course).
5. A futás után ellenőrizd a tartalmat a LearnDash‑ben, különösen ha Sensei vagy LifterLMS volt a forrás (blokkok és speciális kérdések miatt).

Hasznos parancsútvonalak:
```
LearnDash LMS > Add-ons > LearnDash Migration > Install
LearnDash LMS > Settings > Advanced > Migration
```

## Gyakorlati példák

- LearnPress kurzus áthozása: a LearnPress „Sections” elemeid leckékké, a „Lessons” elemeid témákká válnak, a kvízkérdések konvertálódnak. A kurzus szerkezetét azonnal látod a LearnDash tananyagépítőben.
- Tutor LMS átállás: a Tutor „Topics” szintje leckévé, a „Lessons” pedig témává alakul. A kérdésbank átbillen LearnDash kvízekbe, így csak beállításokat kell finomítanod.
- Sensei moduláris kurzus: a modulokból LearnDash szakaszcímek lesznek, a speciális kérdések alap egyszeres választásúvá konvertálódnak – gyors utóellenőrzéssel befejezed az átállást.
- LifterLMS kérdésbank: az igaz/hamis kérdéseid egyszeres választássá, a képes választások többválasztó kérdéssé válnak – megőrizve a logikát, csökkentve az újraépítés idejét.

## Előnyök és értékajánlat

- Jelentős idő‑ és költségmegtakarítás: nem kell kézzel újrarakni a kurzus‑hierarchiát és a kvízeket.
- Kisebb átállási kockázat: automatizált, egykattintásos folyamat, kevesebb hibalehetőség.
- Egységes, LearnDash‑barát struktúra: beépített mappingek oldják a fogalmi eltéréseket.
- Hivatalos add‑on, díjmentes: frissítéseket és támogatást a LearnDash ökoszisztémán belül kapsz.

## Kinek ajánlott?

- Olyan tananyag‑tulajdonosoknak, akik WordPress‑es LMS‑ről váltanának LearnDash‑re, és szeretnék megőrizni a tartalmi struktúrát.
- Ügynökségeknek és fejlesztőknek, akik ügyfelek kurzusportfólióit konszolidálják vagy platformot váltanak.
- Oktatási intézményeknek, ahol nagy kérdésbankok és több kurzus gyors átemelése szükséges.

## Bevált gyakorlatok és korlátok

- Készíts teljes biztonsági mentést, és lehetőleg staging környezetben futtasd a migrációt.
- A forrás‑LMS legyen aktív a migráció idején.
- Kezdd egy próbakurzussal, majd skálázz.
- Tervezd meg külön a nem migrált elemek (előrehaladás, metaadatok, média) pótlását.
- Sensei és Lifter esetén a blokkok és speciális kérdések utóellenőrzése kötelező.

Megjegyzés: A „LearnDash LMS – Migration” kifejezés itt a hivatalos, LearnDash‑be migráló add‑ont jelenti. Nem összekeverendő olyan külső eszközökkel, amelyek LearnDash‑ből visznek át tartalmakat más platformokra.

Szerző: LearnDash. Ár: ingyenes add‑on.