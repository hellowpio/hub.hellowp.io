---
title: "Fluent Boards Pro"
description: "Önhosztolt projekt- és feladatkezelő WordPresshez: Kanban/naptár nézet, időkövetés, jogosultságok, integrációk és Pro-ban publikus/privát roadmap."
sidebar_label: "Fluent Boards Pro"
---

## Mi ez és milyen problémát old meg?

A Fluent Boards Pro egy WordPressbe épülő, önhosztolt **projekt- és feladatkezelő**. Segít abban, hogy a csapatod a megszokott WP-felületen dolgozzon, külön SaaS eszközök és felhasználónkénti díjak nélkül. Kanban-, táblázatos- és naptárnézettel vizualizálod a munkát, a feladatokhoz időkövetést és kommenteket rögzítesz, az ügyfeleket pedig bevonhatod egy **frontend portálon** vagy egy publikus/privát **roadmapen** keresztül (Pro).

A cél: csökkenteni a kontextusváltást (CRM/űrlap/support → feladat), egy helyen kezelni a munkát, és az adataidat saját tárhelyen tartani.

## Hogyan működik röviden?

- Az alap entitások: **Board (tábla)** → **Stage (szakasz)** → **Task (feladat)**, kiegészítve **címkékkel**, **kommentekkel** és **fájlokkal**.  
- A feladatkártyákat szakaszok között húzod, részfeladatokat, határidőt, felelőst és prioritást állítasz, és időt követsz rajtuk.  
- Integrációkkal (CRM, űrlapok, support) az eseményekből automatikusan feladatok jönnek létre.

## Fő funkciók részletesen

### Nézetek és vizualizáció
- **Kanban, táblázatos és naptár nézet**: tetszés szerint váltogathatod, így a sprint, a backlog vagy a heti kapacitás is átlátható.  
- **Címkék, háttérképek, borítók**: gyors vizuális kontextus; például piros “Sürgős”, zöld “Kész”.

### Feladatkezelés
- **Korlátlan projektek és feladatok**: nincs mesterséges limitálás.  
- **Részfeladatok és sablonok**: ismétlődő munkákhoz előre beállított kártya- vagy szakaszsablonok.  
- **Ismétlődő feladatok, duplikálás**: visszatérő teendők automatizálása.  
- **Import/export (CSV/JSON)** és **Trello/Asana migráció**: könnyű átállás más rendszerről.

### Együttműködés és kommunikáció
- **Kommentek @megemlítéssel** és **e‑mail értesítések**: a felelősök azonnal kapnak jelzést.  
- **Személyre szabható dashboardok**: mindenkinek a saját nézete, a vezetőknek összkép.  
- **Frontend portál**: ügyfelek vagy külsősök bevonása WP oldalon rövidkóddal.

### Időkövetés és riportok
- **Beépített time tracker** feladatonként: indítás/leállítás vagy manuális rögzítés.  
- **Timesheet és kimutatások**: projekt-, ember- vagy időszak szerinti összesítések.

### Jogosultságok és szerepkörök
- **Finomhangolt hozzáférések**: pl. csak megtekintő (view-only) szerepkör ügyfeleknek.  
- **Értesítés- és erőforrás-kezelés**: ki mit lát, mit szerkeszthet, miről kap értesítést.

### Integrációk és automatizáció
- **CRM integráció**: triggerek és akciók táblákhoz/feladatokhoz (pl. “Create Task”).  
- **Űrlap integráció**: beküldésből automatikus feladat a megfelelő táblára/szakaszba.  
- **Support integráció**: ticketből egy kattintással fejlesztési feladat.  
- **Webhookok és REST API**: külső rendszerek, saját automatizmusok, fejlesztői horgok.

### Tárolás és adatrezidencia
- **Önhosztolt**: az adataid a saját tárhelyeden maradnak.  
- **Külső objektumtárak**: Amazon S3, Cloudflare R2, Backblaze B2, DigitalOcean Spaces támogatás a fájlokhoz.

### FluentRoadmap (Pro)
- **Publikus/privát roadmap** rövidkóddal: átlátható kommunikáció az érintettek felé.  
- **Visszajelzések és szavazás**: adatvezérelt priorizálás, látható státuszok és előrehaladás.

## Gyakorlati példák

- **Ügyfélbeérkezés automatizálása**  
  Űrlapbeküldés → automatikus feladat a “Bejövők” szakaszban → felelős és határidő beállítása → időkövetés → heti riport.

- **Ticket‑alapú sprint**  
  Support ticket → feladat a “Fejlesztés” táblán → szakaszok: To‑Do / In Progress / Review / Done → kommentek @megemlítéssel → fájlok külső tárhelyen.

- **Termék roadmap publikálása**  
  Roadmap bekapcsolása → publikus oldal rövidkóddal → ügyfélvisszajelzések gyűjtése és szavazás → belső státuszokkal szinkronban.

## Előnyök és értékajánlat

- **Költségcsökkentés**: nincs felhasználónkénti díj; korlátlan projektek és assignee-k.  
- **Kevesebb kontextusváltás**: CRM/űrlap/support eseményekből azonnal feladat lesz.  
- **Adatvédelem**: minden a saját WordPress környezetedben marad, könnyebb megfelelés.  
- **Skálázás és testreszabhatóság**: REST API, webhookok, fejlesztői horgok, külső tárhely.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: projektek, ügyfélkommunikáció, riportok egy helyen.  
- **Termékcsapatoknak**: feature backlog, sprint, és publikus/privát roadmap.  
- **Ügyfélszolgálat + fejlesztés csapatoknak**: ticket → feladat → átlátható lezárás.  
- **Kis- és középvállalkozásoknak**: költséghatékony, önhosztolt alternatíva a SaaS helyett.

## Telepítés és első lépések

1. Telepítsd és aktiváld az ingyenes alap bővítményt a WordPress bővítménytárból.  
2. Vásárold meg és aktiváld a Pro licencet az adminban.  
3. Hozz létre egy táblát, add meg a szakaszokat (pl. Bejövő, Folyamatban, Review, Kész).  
4. Hívd meg a csapattagokat/ügyfeleket, állítsd be a szerepköröket.  
5. Kösd be az integrációkat (CRM, űrlapok, support) és készíts automatizmusokat.  
6. Aktiváld a frontend portált és/vagy a roadmapet, ha ügyfeleket is bevonsz.

Példa rövidkódok:

```
[fluent_boards]
```

```
[fluent_roadmap]
```

## Fejlesztőknek

- **Entitások**: Board, Stage, Task, Label, Comment, Webhook.  
- **REST API és auth**: névterezett végpontok, nonce és Application Passwords támogatás.  
- **Automatizálás**: webhookok eseményekre (pl. szakaszváltás), sablonok és ismétlődő feladatok.

---

Röviden: a Fluent Boards Pro egy WordPressbe natívan illeszkedő, önhosztolt projektmenedzsment megoldás. Vizuális nézetekkel, időkövetéssel, integrációkkal és Pro-ban elérhető roadmap modullal csökkenti a széttagolt eszközhasználatot, növeli az átláthatóságot, és kiváltja a per‑felhasználó díjazású külső szolgáltatásokat.