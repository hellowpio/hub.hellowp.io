---
title: "JetEngine - Layout Switcher"
description: "Frontend nézetváltó az Elementorban készült JetEngine Listing Griden: rács, lista és egyedi elrendezések egy kattintással."
sidebar_label: "JetEngine - Layout Switcher"
---

## Mi ez és mit old meg?

A JetEngine – Layout Switcher egy külön telepíthető, jelenleg béta kiegészítő, amely **Elementor‑widgetként** csatlakozik a **JetEngine Listing Gridhez**. Segítségével a látogatók a frontenden **több elrendezés** (pl. rács, lista vagy saját nézetek) között **azonnal válthatnak**. Ezzel kiváltod a kódolást, a külön oldalakra bontott megoldásokat és a bonyolult feltételkezelést: egyetlen, adminból konfigurálható kapcsolóval kezeled a megjelenítési variánsokat.

## Fő funkciók, érthetően

- **Frontend elrendezésváltás**: A látogató gombokkal választhat a „Grid”, „List” és bármely általad létrehozott nézet között. Az alap két opció tetszőlegesen bővíthető, duplikálható és törölhető.

- **Egy oldalon több nézet**: A Layout Switcher egy kiválasztott Listing Grid példányhoz kapcsolódik. Te nézetenként mondod meg, hogyan jelenjen meg ugyanaz a tartalom – vagy akár teljesen másik listing sablont is választhatsz.

- **Nézetenkénti beállítások**:
  - **Label** és **Slug**: a gomb felirata és azonosítója.
  - **Icon**: saját SVG vagy az Elementor ikonkészlete.
  - **Is Default Layout**: megjelölöd az alapértelmezett nézetet.
  - **Listing**: válthatsz másik Listing Template‑re is (pl. részletes vs. kompakt kártya).
  - **Columns number**: nézetenként eltérő oszlopszámot adhatsz meg.

- **Megjelenés testreszabása**: A Style fülön beállíthatod a gombok tipográfiáját, méretét, távolságait, az **aktív állapot** jelölését – így a váltó tökéletesen illeszkedik a designhoz.

- **Drag‑and‑drop sorrendezés**: A nézetek sorrendjét egyszerűen átrendezheted.

- **JetSmartFilters kompatibilitás**: Az elrendezés váltása **nem törli a már beállított szűrőket**, a találati lista konzisztens marad.

- **Teljesítmény**: Ha csak elrendezési paramétert (pl. oszlopszámot) váltasz, a frissítés azonnali. Másik Listing Template betöltésekor a tartalom **AJAX‑szal** érkezik rövid késleltetéssel.

## Hogyan működik a frontenden?

- Azonos Listing alapra épülő nézetek között a váltás szemvillanás alatt megtörténik.
- Ha nézetenként **másik Listing Template** van megadva, a Grid tartalma AJAX‑szal frissül. A szűrők és a lapozás állapota megmarad.

Példa nézet‑konfiguráció:
```
Nézetek:
- Label: Grid, Slug: grid, Columns: 3, Is Default: igen
- Label: Lista, Slug: list, Columns: 1
- Label: Részletes, Slug: detailed, Listing: Listing - Részletes kártya, Columns: 2
```

## Gyakorlati példák

- **Webshop Grid/List**: Termékek kártyás rácsban vagy tömör listában. A vásárló eldönti, mi áttekinthetőbb számára.
- **Ingatlan katalógus**: „Két oszlop képpel” vs. „Csak paraméterek” – az egyik gyors szkenneléshez, a másik döntéshez részletesebb adatokat ad.
- **Rendezvények/turizmus**: „Kártyák dátummal” és „Naptárbarát lista” nézetek váltogatása.
- **Marketing/A‑B**: Két külön Listing Template között váltva kipróbálhatod, melyik kártyadizájn hoz jobb kattintási arányt.

## Telepítés és bevezetés

1. **Előfeltételek**: WordPress, **Elementor (Free)**, **JetEngine**, és legalább egy kész **Listing Template**.
2. **Telepítés**: A Layout Switchert külön ZIP‑ként telepítsd a Bővítmények menüben, majd aktiváld.
3. **Oldal szerkesztése Elementorban**:
   - Helyezd el a **Listing Grid** widgetet.
   - Húzd be a **Layout Switcher** widgetet ugyanarra az oldalra.
   - A „Select a Listing Grid widget” mezőben válaszd ki a megfelelő Gridet.
4. **Nézetek felvétele**: Az Items listában add meg a **Label/Slug/Icon** mezőket, jelöld az **alapértelmezett** nézetet, szükség esetén válassz **másik Listinget** és **Columns** értéket.
5. **Stílus**: A Style fülön formázd a gombokat és az **aktív** állapotot. Ments, publikálj, és teszteld a frontenden.

## Előnyök és értékajánlat

- **Kódmentes megoldás** rács/lista váltóra és egyedi nézetekre.
- **Időmegtakarítás**: nincs külön oldal, nincs egyedi JS, minden adminból kezelhető.
- **Jobb UX**: a felhasználó saját preferenciája szerint nézheti a tartalmat.
- **Kísérletezés**: gyorsan próbálhatsz ki eltérő kártyákat és elrendezéseket.
- **Skálázhatóság**: sokféle tartalomtípushoz és listához használható.

## Célközönség

- **Webshop tulajdonosok és e‑kereskedelmi ügynökségek**: Grid/List váltó percek alatt.
- **Ingatlan, utazás, esemény, recept oldalak szerkesztői**: több nézet külön fókuszpontokkal.
- **No‑code/low‑code megoldásokat kereső WordPress fejlesztők**: gyors, stabil, karbantartható implementáció.
- **Marketingesek és UX szakemberek**: A/B jellegű layout‑tesztek kód nélkül.

## Korlátozások és fontos megjegyzések

- **Elementor‑fókuszú**: a Layout Switcher egy Elementor‑widget; Gutenbergben a Listing Grid elérhető, de a Layout Switcher ott nem.
- **Külön bővítmény (béta)**: külön ZIP‑ként telepítendő.
- **Legalább egy alapértelmezett nézet** megadása kötelező.
- **JetSmartFilters kompatibilis**: a szűrések megmaradnak váltáskor.

## Kapcsolódó JetEngine‑fogalom

- **Listing Grid widget**: a JetEngine dinamikus listamegjelenítője (CPT, CCT, felhasználók, taxonómiák, termékek stb.). A Layout Switcher ehhez ad **frontend nézetváltást**.

--- 

Kell egy készre beállított Grid/List gombkészlet stílusaival? Szólj, és adok egy rövid „receptet” vagy exportálható sablont, amit azonnal be tudsz húzni.