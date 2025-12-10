---
title: "LearnDash LMS - Certificate Builder"
description: "Hivatalos, ingyenes LearnDash kiegészítő a Gutenberg szerkesztőben készíthető, dinamikus PDF tanúsítványokhoz élő előnézettel."
sidebar_label: "LearnDash LMS - Certificate Builder"
---

## Mi ez és milyen problémát old meg?

A **LearnDash LMS – Certificate Builder** egy hivatalos, ingyenes add‑on, amellyel a tanúsítványaidat a **Gutenberg** (blokkszerkesztő) felületén, vizuálisan tervezheted meg. A klasszikus, HTML/CSS‑t és rövidkódokat igénylő módszer helyett kapod a **drag‑and‑drop** élményt, valós adatokkal működő **PDF‑előnézettel**. Így gyorsabban, kiszámíthatóbban és kódolás nélkül készíthetsz profi, személyre szabott okleveleket.

## Hogyan működik röviden?

- Telepítés után a LearnDash menüben új **Certificates** tartalomtípusod lesz.
- Új tanúsítvány létrehozásakor a Builder kéri egy **háttérkép** megadását (kötelező).
- A háttérre helyezhetsz **szöveg** blokkokat és **dinamikus LearnDash blokkokat** (kurzus/kvíz/csoport/ felhasználói adatok).
- A beépített **Preview** gombbal valós adatokkal látod a **PDF‑nézetet**, és finomíthatod az elrendezést.
- A kész tanúsítványt hozzárendeled egy kurzushoz, kvízhez vagy csoporthoz; a felhasználó **PDF‑ben letöltheti**.

## Fő funkciók részletesen

- **Blokk‑alapú tervezés (Gutenberg):** Minden elem egy blokk (cím, bekezdés, dinamikus adat). Pontosan oda húzhatod és formázhatod, ahol szükséges – a háttérképedre illesztve.
- **Háttérkép‑alapú elrendezés:** A design a választott oklevél‑sablonodra épül. A háttérkép kötelező, és érdemes helyben hosztolt képet használni a stabil előnézethez.
- **Dinamikus LearnDash blokkok:**  
  - **Course Info:** kurzus címe, teljesítés dátuma stb.  
  - **Quiz Info:** kvízpontszám, százalék, vizsga neve, dátum.  
  - **User Meta:** hallgató neve, e‑mail, egyedi profilmezők.  
  - **Groups Info:** csoportnév és releváns adatok.  
  Fontos: mindig a tanúsítvány **társítási kontextusához** illő blokkot használd (kurzushoz Course Info, kvízhez Quiz Info), különben a mezők üresek maradnak.
- **Egyedi betűtípusok:** Tölts fel saját **fontokat**, és válaszd ki a címsorokhoz, bekezdésekhez és dinamikus blokkokhoz – így a tanúsítvány igazodik a márkádhoz.
- **Élő PDF‑előnézet:** A Preview gomb valós felhasználói/kurszus/kvíz adatokkal, **PDF nézetben** mutatja az eredményt. Drasztikusan csökkenti a próbálgatások számát.
- **RTL támogatás:** Egy kapcsolóval **jobbról balra** író nyelvekhez igazíthatod az elrendezést.
- **PDF kimenet beállításai:** Választható **A4 vagy US Letter**, illetve **álló vagy fekvő** tájolás, hogy a nyomtatás pontos legyen.
- **Visszafelé kompatibilis:** A régi, „klasszikus” tanúsítványaid változatlanul működnek; a Builder egy külön opció, nem kényszer.

## Gyakorlati példák

- **Kurzus befejezési oklevél:**  
  Helyezz el egy nagy címet (pl. „Tanúsítvány”), alatta a **User Meta** blokkot a hallgató nevével, majd **Course Info** a kurzuscímmel és „Teljesítve:” dátummal. A Preview‑ban ellenőrzöd, hogy a név és a cím pontosan a keretbe essen.

- **Kvíz teljesítési tanúsítvány:**  
  A háttérre tedd a kurzus logóját (kép a sablonban), majd **Quiz Info** blokkokat a **pontszám** és **százalék** megjelenítésére. Hasznos vizsgáknál, ahol minimum pontszámhoz kötöd az oklevelet.

- **Csoportos elismerő okirat:**  
  Használd a **Groups Info** blokkot a csoport nevéhez, és **User Meta**‑t a résztvevő nevéhez – vállalati tréningeknél ideális.

Példa rövidkódok (dinamikus mezők) blokk‑szövegben is használhatók:
```
[usermeta field="display_name"]
[courseinfo show="course_title"]
[quizinfo show="percentage"]
[groupinfo show="group_title"]
```

## Előnyök és értékajánlat

- **Kódmentes munka:** Nincs szükség HTML/CSS‑re; vizuálisan tervezel.
- **Időmegtakarítás:** Az **élő PDF‑előnézet** miatt kevesebb kör a finomhangolás.
- **Márkahű design:** **Egyedi fontok**, precíz pozícionálás a háttérképhez igazítva.
- **Kevesebb hibalehetőség:** A kontextushoz kötött dinamikus blokkok megbízhatóan töltődnek ki.
- **Zökkenőmentes átállás:** A régi tanúsítványok megmaradnak, párhuzamosan használhatod őket.

## Kinek ajánlott?

- **Online akadémiáknak és tréningcégeknek:** Sok kurzus/kvíz tanúsítványát egyszerűen karbantarthatod.
- **Felsőoktatási és vállalati L&D csapatoknak:** Szigorú arculati elvárások mellett is gyors a kiadás.
- **Szabadúszó webfejlesztőknek:** Gyors átadás ügyfeleknek, kódolás nélkül is vállalható minőség.

## Telepítés és alaplépések

1. Nyisd meg: **LearnDash LMS > Add‑Ons**, keresd a **Certificate Builder** add‑ont, majd Install > Activate.  
   (Alternatíva: kézi feltöltés .zip fájlból.)
2. Új tanúsítvány: **LearnDash LMS > Certificates > Add New**, majd válaszd a **Use Certificate Builder** gombot.
3. Adj meg **háttérképet** (kötelező), helyezz el **szöveg** és **LearnDash** blokkokat.
4. Használd a **Preview** gombot valós adatokhoz.
5. Állítsd be a **PDF méretet és tájolást**, mentsd el.
6. Kapcsold a tanúsítványt a megfelelő **kurzushoz/kvízhez/csoporthoz**.

## Tippek és hibakeresés

- **Háttérkép legyen helyben hosztolva**, különösen médiatár‑offload használatakor.
- **Képoptimalizálók** esetén zárd ki a tanúsítvány háttérképeit az átméretezésből/átalakításból.
- **Kontekstus‑helyes blokkokat** használj (kurzus ↔ Course Info, kvíz ↔ Quiz Info, csoport ↔ Groups Info).
- **Tesztelj mintafelhasználóval** és próbakurzussal a gyors előnézet érdekében.

--- 

A Certificate Builderrel pontosan azt látod a képernyőn, amit a hallgató **PDF‑ben** megkap – gyorsan, kód nélkül, márkahűen. Ha célod a profi, megbízható oklevélkibocsátás, ez az a kiegészítő, amire szükséged van.