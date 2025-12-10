---
title: "MainWP UpdraftPlus Extension"
description: "Központi vezérlés az UpdraftPlus mentésekhez: beállítás, ütemezés, indítás és visszaállítás elérése a MainWP Dashboardból több gyerekoldalon."
sidebar_label: "MainWP UpdraftPlus Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP UpdraftPlus Extension az a kiegészítő, amivel a gyerekoldalaidon futó **UpdraftPlus** mentéseket egyetlen **MainWP Dashboardból** tudod beállítani és felügyelni. Az UpdraftPlus végzi a tényleges mentést a gyerekoldalakon, az Extension pedig központi, egységes irányítópultot ad neked. Ezzel megszűnik a sokszoros bejelentkezés, csökken az emberi hiba, és átláthatóvá válik a teljes mentési stratégia.

## Hogyan működik röviden?

- A gyerekoldalakon az UpdraftPlus fut (free vagy premium).
- A MainWP Dashboardra telepíted az UpdraftPlus Extensiont.
- A Dashboardból elérsz egy központi nézetet, ahol:
  - beállíthatod a mentési ütemezéseket és célhelyeket,
  - indíthatsz azonnali mentést,
  - megnyithatod a gyerekoldal UpdraftPlus felületét a visszaállításhoz.
- Bizonyos távoli tárhelyeknél (pl. felhő) az első hitelesítés a gyerekoldalon történik, utána már központból kezeled.

## Fő funkciók részletesen

### Központi áttekintő nézet
Látod, mely gyerekoldalakon aktív az UpdraftPlus, mi az aktuális beállítás, elérhető-e frissítés, és mikor futnak az ütemezett mentések. Ez segít gyorsan azonosítani a hiányzó vagy hibás mentési konfigurációkat.

### Beállítások távoli kezelése
- **Ütemezés:** külön ütemezheted a fájl- és adatbázismentéseket (pl. fájlok naponta, adatbázis óránként).
- **Kizárások és adatbázis-opciók:** mappák, fájltípusok kizárása; adatbázis-optimalizálás beállítása.
- **Értesítések:** e-mail értesítések és jelentések konfigurálása.
- **Távoli tárhelyek:** beállíthatod, hová menjenek a mentések (pl. szerver, Dropbox, Google Drive, Amazon S3 és további célpontok a premium UpdraftPlus esetén). Első hitelesítés bizonyos szolgáltatóknál a gyerekoldalon szükséges.

### Mentés indítása és visszaállítás elérése
A Dashboardból elérhető a **Backup Now** parancs, amely a gyerekoldalon futtatja az azonnali mentést. Visszaállításhoz a Dashboard gyorslinket ad az adott gyerekoldal UpdraftPlus felületére, ahol a tényleges restore lépései történnek. Közvetlen, egykattintásos központi visszaállítás nincs; ez szándékos működés.

### Ütemezett mentések monitorozása
A **Scheduled Backups** nézetben egyben látod és frissítheted a beállított ütemezéseket, ellenőrizheted az utolsó futásokat és a következő esedékes időpontokat. Nagy flottánál ez a leggyorsabb módja a mentési SLA-k ellenőrzésének.

### Free és Premium UpdraftPlus támogatás
Az Extension együttműködik az UpdraftPlus ingyenes és prémium kiadásával. Premium használata esetén a prémium képességek (például **inkrementális mentések**) is központilag kezelhetők.

## Gyakorlati példák

- **Ügynökségi portfólió (50+ oldal):** beállítod globálisan, hogy a fájlok naponta, az adatbázis óránként mentődjön, 14 napos retencióval, tárhelynek felhőszolgáltatót választva. Új ügyfél bekötésekor két kattintás a szabványos profil alkalmazása.
- **Nagy forgalmú webáruház:** a fájlok naponta, az adatbázis inkrementálisan óránként mentődik. Kritikus kampányidőszakban ideiglenesen sűríted a DB-mentést, majd visszaállítod az alap profilt.
- **Incidenskezelés:** frissítés után szétesik egy oldal. A Dashboardból megnyitod a gyerekoldal UpdraftPlus felületét, kiválasztod az utolsó jó mentést, és visszaállítod az adatbázist és a fájlokat.

## Telepítés és bevezetés

1. Telepítsd a MainWP UpdraftPlus Extensiont a **MainWP Dashboardra**.
2. Telepítsd és aktiváld az **UpdraftPlus** plugint minden gyerekoldalon (megoldható távoli telepítéssel).
3. Szinkronizálj a Dashboardon.
4. Állítsd be a globális vagy oldalszintű mentési profilokat (ütemezés, retenció, kizárások, tárhely).
5. Ha szükséges, végezd el az első hitelesítést a gyerekoldalon a választott tárolóhoz.
6. Tesztelj egy próba-mentést és egy próba-visszaállítást.

## Fontos megjegyzések és korlátozások

- **Beállítások iránya:** a szinkron alapvetően **Dashboard → Gyerek**. A központi beállítások felülírhatják a helyi UpdraftPlus-beállításokat, és a létező helyi konfigurációk nem importálódnak automatikusan a Dashboardba.
- **Visszaállítás folyamata:** a restore az UpdraftPlus gyerekoldali felületén történik. A Dashboard ehhez gyors elérést ad, de nem futtat központi „egy kattintásos” visszaállítást.
- **Hitelesítés távoli tárhelyhez:** egyes szolgáltatóknál első alkalommal a gyerekoldalon kell jóváhagynod a hozzáférést.
- **Időzítés megbízhatósága:** gondoskodj a megbízható cron futtatásról (WP-Cron vagy rendszer cron), különösen nagy flottánál és sűrű ütemezéseknél.

## Biztonság és karbantartás

- Tartsd naprakészen a Dashboardot, az Extensiont és az UpdraftPlust.
- Használj **jogkör-minimalizálást**: csak annak adj hozzáférést az Extensionhöz, akinek feltétlenül szükséges.
- Engedélyezd a **titkosítást** a mentésekhez, és válassz megbízható távoli tárhelyet.
- Ütemezz rendszeres **visszaállítási teszteket**, és őrizd meg a mentési naplókat audit célokra.

## Előnyök és értékajánlat

- **Időnyereség:** drasztikusan kevesebb kattintás több tucat/száz oldal kezelésénél.
- **Szabványosítás:** egységes retenció, kizárások és tárhelybeállítások minden ügyfélnél.
- **Kockázatcsökkentés:** automatizált ütemezések és központi láthatóság minimalizálják az adatvesztés esélyét.
- **Skálázhatóság:** új oldalak gyors bekötése és azonos házirend alkalmazása.

## Célközönség

- **Webügynökségek és site care szolgáltatók**, akik sok webhelyet felügyelnek.
- **IT/DevOps csapatok** vállalati többoldalas környezetben.
- **Freelancerek**, akik több ügyfél webhelyét karbantartják, és egységes mentési folyamatot akarnak.

## Ajánlott házirend-sablon

```
Mentési házirend:
  Ütemezés:
    - Fájlok: napi 1x, 02:00
    - Adatbázis: óránként
  Retenció:
    - Fájlok: 14 nap
    - Adatbázis: 7 nap
  Kizárások:
    - cache/, node_modules/, *.zip, backup-*
  Távoli tárhely:
    - Elsődleges: S3 kompatibilis tárhely, szerveroldali titkosítás
    - Másodlagos: Google Drive (heti szinkron)
  Biztonság:
    - Jelszóval védett archívumok, TLS feltöltés
  Operáció:
    - Heti állapotjelentés a Dashboardból
    - Havi visszaállítási próba tesztkörnyezetben
    - Felelősök: ügyeletes rendszergazda, account manager
```

Ezzel a kiegészítővel pontosan azt kapod, amire egy professzionális mentési stratégiához szükséged van: központi irányítást, szabványosítható beállításokat és gyors reagálást incidens esetén. Ha több WordPress oldalt kezelsz, ez az Extension jelentősen leegyszerűsíti a mindennapi munkádat.