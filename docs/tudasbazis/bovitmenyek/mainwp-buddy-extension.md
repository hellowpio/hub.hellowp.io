---
title: "MainWP Buddy Extension"
description: "Központi irányítás a Solid Backups (Legacy) / BackupBuddy mentésekhez a MainWP-ből – több webhely egységes, biztonságos mentéskezelése."
sidebar_label: "MainWP Buddy Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Buddy Extension** egy MainWP-kiegészítő, amellyel a **Solid Backups (Legacy)** (korábbi nevén BackupBuddy) bővítményt tudod egyetlen irányítópultról felügyelni az összes csatlakoztatott gyermekoldalon. Ha sok webhelyet kezelsz, megszűnik az a nyűg, hogy minden oldalra külön be kelljen lépned a mentések ellenőrzéséhez, ütemezéséhez vagy a fájlok letöltéséhez. Egy helyen állíthatod be a szabályokat, elindíthatod a mentéseket és kezelheted az archívumokat.

## Hogyan működik röviden?

- A kiegészítőt a **MainWP irányítópultra** telepíted.
- A gyermekoldalakon futnia kell a **Solid Backups (Legacy)** bővítménynek érvényes licenccel.
- A MainWP ezen a csatornán keresztül olvassa a beállításokat, ütemezéseket, és távolról indítja a mentéseket, kezeli a tárolási célokat és a mentési fájlokat.
- A visszaállítás a Solid Backups saját folyamatán (tipikusan ImportBuddy) keresztül történik; ez nem automatikus MainWP visszaállítás.

## Fő funkciók részletesen

### Központi felügyelet
- Áttekinted minden gyermekoldal **mentési állapotát**, a bővítmény telepítettségét és frissítéseit.
- Távolról **aktiválhatod/frissítheted** a mentő bővítményt, és egy pillantással látod, hol hiányzik valami.

### Beállításkezelés globálisan vagy oldalszinten
- Egységesítheted (vagy tudatosan eltérítheted) a **mentési házirendeket**.
- Konfigurálhatod az **ImportBuddy/visszaállítási** opciókat, **e-mail értesítéseket**, helyi **archívumtár limitet**, **kizárásokat/inklúziókat** (adatbázis és fájlok), valamint **haladó/hibakeresési** és **háztartási** beállításokat.
- A licencadatokat és kritikus opciókat központból kezelheted.

### Mentések indítása és profilok
- Készíthetsz **teljes**, csak **adatbázis**, csak **fájl** vagy **egyedi profil** alapú mentéseket.
- Egy kattintással **több webhelyen egyszerre** indíthatsz mentést, így karbantartás előtt gyorsan készülhet friss állapot.

### Ütemezések karbantartása
- Létrehozhatsz **globális ütemezéseket** (pl. napi adatbázis, heti teljes), vagy finomhangolhatod **egyedi oldalszinten**.
- Kezelheted a **megtartási szabályokat**, így nem telik be a tárhely, és megfelelsz a belső előírásoknak.

### Mentési fájlok kezelése és szelektív visszaállítás
- Egy felületen **letöltöd** a ZIP-eket, **elküldöd** őket távoli tárhelyre, **böngészed** az archív tartalmát.
- **Szelektív recovery**: csak bizonyos fájlokat vagy **adatbázis-táblákat** állítasz vissza, ha nem kell az egész oldal.

### Távoli tárhelyek
- Több **távoli cél** is beállítható (pl. S3-kompatibilis tár, Dropbox, Stash és más támogatott célok).
- A ténylegesen elérhető célok a gyermekoldalon futó **Legacy** verzió képességeitől függenek; bizonyos célok (például Google Drive) egyes Legacy kiadásokban már nem érhetők el.

## Használati esetek – gyakorlati példák

- Ügynökségi alapstratégia: készítesz egy **globális házirendet** napi adatbázis- és heti teljes mentéssel, 30 napos megőrzéssel, S3-kompatibilis tárolóra küldéssel. Ezt kiosztod minden oldalra, és a kritikus e-kereskedelmi oldalaknál oldalszinten sűríted az adatbázis-mentést.
- Karbantartási ablak előtt: kijelölöd a frissítendő webhelyeket, és **tömeges azonnali teljes mentést** indítasz. Ha gond van, szelektíven visszaállítod a problémás bővítmény könyvtárát vagy a vonatkozó táblákat.
- Migráció tesztkörnyezetbe: készítesz egy teljes mentést, feltöltöd a távoli tárhelyre, majd az ImportBuddy segítségével egy külön tárhelyen **staging** környezetet állítasz vissza.

## Előnyök és értékajánlat

- **Időmegtakarítás**: tömeges műveletek és központi felügyelet, kevesebb belépés, kevesebb manuális lépés.
- **Következetesség**: egységes házirendek minden oldalon, kevesebb hibalehetőség.
- **Gyors reakció**: központból indítható mentések, szelektív visszaállítás a szükséges komponensekre.
- **Biztonság és megfelelés**: távoli tárolás, megőrzési szabályok, átlátható auditnyom.

## Célközönség

- **Webügynökségek** és **szabadúszó webmesterek**, akik több tucat webhelyet kezelnek.
- **Vállalati webcsapatok**, akiknél fontos az egységes szabályozás és a gyors visszaállíthatóság.
- **Technikai projektvezetők**, akik SLA-khoz igazított mentési rendet akarnak fenntartani.

## Telepítés és alap munkafolyamat

1. Telepítsd és aktiváld a kiegészítőt a **MainWP irányítópulton**.
2. A gyermekoldalakon telepítsd/aktiváld a **Solid Backups (Legacy)** bővítményt, és gondoskodj az érvényes licencről.
3. Szinkronizáld a webhelyeket, majd nyisd meg az **Extensions > Buddy** felületet.
4. Állíts be **globális** házirendet, szükség esetén **oldalszintű felülírásokkal**.
5. Hozz létre **ütemezéseket** és add hozzá a kívánt **távoli tárhelyeket**.
6. Futtass egy **tesztmentést**, majd ellenőrizd a távoli célon az archívumot és a visszaállíthatóságot.

Példa házirend-vázlat (csak szemléltetés):

```
profiles:
  - name: daily-db
    type: database
    schedule: daily
    retention_days: 14
    destinations: [s3_primary]
  - name: weekly-full
    type: full
    schedule: weekly
    retention_copies: 4
    destinations: [s3_primary, offsite_secondary]
exclusions:
  files: [cache/, node_modules/, *.log]
  db_tables: [wp_statistics_*]
notifications:
  email: ops@example.com
```

## Korlátozások és fontos megjegyzések

- A kiegészítő által készített mentések **nem kompatibilisek** a MainWP automatikus visszaállítás és klónozás funkcióival.
- A **visszaállítás nem automatikus**: a Solid Backups saját eszközeivel (pl. ImportBuddy) történik, általában manuális lépésekben.
- A **távoli tárhely** opciók a **Legacy** kiadástól függenek; bizonyos célok (például Google Drive) egyes verziókban már nem támogatottak.
- A kiegészítő **a Legacy ággal működik**; a NextGen vonalhoz nincs integráció.
- Előfeltétel az egyes gyermekoldalakon a **Solid Backups (Legacy)** bővítmény aktív telepítése és érvényes előfizetés.

## Tippek és bevált gyakorlatok

- Kezdd egy **alap házirenddel** (napi DB, heti teljes, 30 nap megőrzés), majd finomhangold a forgalmas oldalakat.
- Mindig végezz **próbavisszaállítást** staging környezetben, hogy tudd, mennyi idő és milyen lépések kellenek.
- Állíts be **értesítéseket** a sikertelen mentésekre, és rendszeresen ellenőrizd a **tárolókapacitást**.
- Zajos könyvtárakat (**cache, logok, ideiglenes fájlok**) zárj ki a gyorsabb, megbízhatóbb mentésekért.
- Ütemezd a nagy mentéseket **alacsony terhelésű időszakokra** (éjszaka, karbantartási ablak).