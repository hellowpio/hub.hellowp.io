---
title: "Notes for LearnDash"
description: "Beépített jegyzetelés és oktató–tanuló kommunikáció a LearnDash kurzusokban, rövidkódokkal és testreszabással."
sidebar_label: "Notes for LearnDash"
---

## Mi ez és milyen problémát old meg?

A Notes for LearnDash egy hivatalos, fizetős kiegészítő, amely **beépített jegyzetelést** és **aszinkron oktató–tanuló kommunikációt** ad a kurzusaidhoz. A hallgatók közvetlenül a lecke/tema/oldal nézetében írhatnak jegyzeteket, te pedig erre válaszolhatsz. Így nem kell külső jegyzetappra váltani, csökken a kognitív terhelés, és a visszajelzés mindig a tartalom kontextusában történik.

## Fő funkciók és működés

### In‑context jegyzetelés
- A tanuló ott és akkor írhat jegyzetet, ahol tanul: **kurzus**, **lecke**, **téma**, sőt bármely **WordPress oldal/bejegyzés** alatt.
- A jegyzetek a tartalomhoz kötöttek, később visszanézhetők és rendszerezhetők.

### Két megjelenítési mód
- **Felugró ikon és űrlap**: lebegő, mozgatható ikonról nyitható, a felhasználó által áthelyezhető panel; az alapállapot tömörített, hogy ne zavarja az olvasást.
- **Beágyazott űrlap**: a tartalom alá illesztett jegyzetmező stabil, jól látható interakcióhoz.

### Rövidkódok
Az alábbi rövidkódokkal bárhol elérhetővé teheted a jegyzetelést és a listákat. Globális opcióval automatikusan is beszúrhatók a kurzusoldalakra.

```
[llms_add_new_note]         // Új jegyzet űrlap
[llms_add_new_note_popup]   // Felugró jegyzet ikon/űrlap
[llms_notes_list]           // Az adott oldal/leckéhez tartozó jegyzetek listája
[llms_full_notes_list]      // A felhasználó teljes jegyzettörténete
```

### Oktatói válasz és értesítések
- Az **oktató** vagy **Group Leader** válaszolhat a jegyzetekre; a tanuló **e‑mail értesítést** kap a válaszról.
- Beállíthatod, hogy az oktatók automatikus értesítést kapjanak új jegyzetekről (Instructor Notification), csoportokkal együttműködve.

### Jogosultságok és láthatóság
- **Admin** mindent lát és kezel.
- **Group Leader** csak a saját csoportjai tanulóinak jegyzeteit látja.
- Opcionálisan engedélyezheted, hogy az oktató **minden jegyzetet** lásson.

### Letöltés és nyomtatás
- A tanulók **letölthetik és kinyomtathatják** a jegyzeteiket – hasznos vizsgafelkészüléshez vagy archiváláshoz.

### Testreszabás
- **Labels**: felületi szövegek átírása (pl. gombok, címkék).
- **Styling**: ikonok (Font Awesome) és színek igazítása a márkádhoz.
- **Email**: értesítési e‑mailek tárgya és törzse külön szerkeszthető.

### Beállítások és automatizálás
- Útvonal: **LearnDash LMS > Notes > Settings**.
- Fülek: **Settings**, **Labels**, **Styling**, **Email**, **How To**.
- Itt kapcsolhatod:
  - az automatikus rövidkód‑beillesztést,
  - a megjelenítés helyét (pl. kurzus, lecke, téma, kvíz),
  - az oktatói láthatósági szabályokat.
- A **How To** fülön találsz útmutatót menü‑értesítő ikonhoz; a menüelemhez add a `llmssn-bell-icon` CSS osztályt.

### Hozzáférhetőség és kompatibilitás
- Korszerű, akadálymentesített UI, jobb képernyőolvasó‑támogatás és kontrasztok.
- Mobilbarát, általánosan kompatibilis a legtöbb WordPress témával.

## Gyors indulás (ajánlott minta)

1. Telepítsd és aktiváld a bővítményt, majd nyisd meg: LearnDash LMS > Notes > Settings.
2. Kapcsold be az **automatikus** beszúrást a felugró jegyzetikonhoz.
3. Hozz létre egy “Saját jegyzeteim” oldalt ezzel:
   ```
   [llms_full_notes_list]
   ```
4. Engedélyezd az **Instructor Notification** opciót, és szerkeszd az e‑mail sablonokat.
5. Adj a főmenühöz értesítő ikont: a menüelemhez add a `llmssn-bell-icon` osztályt.

## Konkrét használati esetek

- **Reflexiós napló a leckén belül**: a tanuló leírja, mi volt a legnehezebb rész; te válaszolsz, és e‑mailben értesítést kap.
- **Vállalati csoportok támogatása**: a Group Leader a saját csapatának jegyzeteit átnézi, és célzottan segít.
- **Vizsgafelkészülés**: a tanuló összegyűjti egy oldalon az összes jegyzetét, majd letölti/nyomtatja.
- **Gyors kérdés a tartalomhoz**: beágyazott űrlappal minden leckéhez biztosítasz kérdés‑mezőt.

## Előnyök és értékajánlat

- **Kevesebb kontextusváltás**: nem kell külső jegyzetapp – fókuszáltabb tanulás.
- **Gyors bevezetés**: automatikus rövidkód‑injektálás, minimális szerkesztés.
- **Skálázható támogatás**: szerepkör‑alapú láthatóság, e‑mail értesítések.
- **Márkahű élmény**: testreszabható szövegek, ikonok és színek.
- **Audit és megőrzés**: jegyzetek exportálása és nyomtatása.

## Kinek ajánlott?

- **Online kurzuskészítőknek**: kontextusban tartott kommunikáció és jobb megtartás.
- **Vállalati L&D csapatoknak**: csoportvezetői betekintés, nyomon követés.
- **Felsőoktatásnak és KKV‑akadémiáknak**: reflexió és visszajelzés strukturáltan.
- **Coaching/mentoring programoknak**: személyes naplózás és kétirányú üzenetváltás.
- **Compliance‑képzésekhez**: jegyzetarchívum és bizonyítható utánkövetés.

## Megjegyzés örökölt projektekhez

Ha régi telepítésben olyan rövidkódokat látsz, mint például:
```
[learndash_my_notes]
[note_editor]
```
akkor nagy eséllyel egy korábbi változattal találkozol. Ilyenkor javasolt az új rövidkódokra váltani:
```
[llms_add_new_note]
[llms_add_new_note_popup]
[llms_notes_list]
[llms_full_notes_list]
```

Ezzel a bővítménnyel a jegyzetelés és az oktatói támogatás szervesen beépül a LearnDash‑élménybe: gyors beállítás, tiszta jogosultságok, rugalmas testreszabás és kontextusban maradó kommunikáció – mindezt egyetlen, egységes megoldásban.