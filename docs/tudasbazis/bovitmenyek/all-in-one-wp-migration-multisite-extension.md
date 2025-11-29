---
title: "All-in-One WP Migration Multisite Extension"
description: "Prémium kiegészítő WordPress Multisite hálózatok gyors, biztonságos exportjához, importjához és subsite ↔ single konverziókhoz."
sidebar_label: "All-in-One WP Migration Multisite Extension"
---

## Áttekintés – mi ez, milyen problémát old meg?

Az All‑in‑One WP Migration Multisite Extension a jól ismert migrációs bővítmény prémium kiegészítője, kifejezetten **WordPress Multisite** hálózatokhoz. Abban segít, hogy egyben vagy szelektíven mozgasd a hálózatod subsite‑jait, és egy kattintással alakíts át **subsite‑ot önálló oldallá**, illetve **single site‑ot** importálj a **multisite hálózatba**. Megspórolod a kézi adatbázis‑műtéteket (táblaprefixek, URL‑ek, fájlok szétválogatása), és a mellékelt **Unlimited Extension** miatt a hoszt feltöltési idő‑ és méretkorlátai sem akadályoznak.

## Fő funkciók, érthetően

### Teljes hálózat export/import
- Egy művelettel **kimentheted az egész multisite hálózatot** (adatbázis, feltöltések, bővítmények, témák).
- Az import a célhálózaton **felülírja az egész hálózatot**, ezért mindig készíts biztonsági mentést. Ideális költöztetéshez vagy staging ↔ production szinkronhoz.

### Szelektív subsite migrálás
- Kijelölhetsz **egy vagy több subsite‑ot** exportálásra, illetve kizárhatsz másokat.
- Importnál a kiválasztott subsite‑ok **újként jönnek létre vagy felülírják** a meglévő megfelelőjüket. A hálózat többi része érintetlen marad.

### Subsite → single konverzió
- Bármely **subsite különálló WordPress telepítéssé** alakítható.
- Az import a cél single site‑on teljes felülírást végez (adatbázis, média, pluginek, témák), ezért előtte ments.

### Single → multisite import
- Egy **önálló oldalt** importálhatsz egy meglévő hálózatba: létrehozhatsz **új subsite‑ot**, vagy **felülírhatod** a meglévőt. A többi subsite változatlan.

### Subsite klónozás hálózaton belül
- Egy kattintással **klónozhatsz subsite‑okat** ugyanazon a hálózaton belül. Hasznos sablon‑site‑ok gyors sokszorosításához.

### Multi‑network támogatás
- Kezeli a komplex **„network of networks”** topológiákat is, így bonyolultabb hosting‑ vagy ügynökségi környezetekben is megállja a helyét.

### WP‑CLI támogatás
- Parancssorból is automatizálhatod a műveleteket (például tömeges exportok/importok, ütemezett szkriptek). Ideális DevOps folyamatokba illesztve.

### Unlimited Extension és nagy importok
- A csomag része az **Unlimited Extension**, amely **meghaladja a hoszt feltöltési, memória- és időkorlátait**. Ez lehetővé teszi a **nagy hálózatok** gond nélküli importját is.

### Reset eszközök
- A **Reset Hub** gyors tisztítást és újrainicializálást ad a hálózat adminisztrációjához, így hamar rendet tehetsz egy tesztelés vagy költöztetés után.

## Gyakorlati példák

- Ügyfél leválasztása: egy ügyfél subsite‑ját exportálod, majd **önálló webhellyé** importálod. Az ügyfél saját hostingra költözik, te pedig egy lépésben adod át a kész oldalt.
- Staging → éles: a staging hálózatot **teljes exporttal** kimented, az éles hálózatra importálod. Az egész hálózat szinkronban lesz.
- Tartalom konszolidálása: több **single site‑ot** importálsz egy központi **multisite hálózatba**. Minden site külön subsite lesz.
- Sablon‑site sokszorosítás: egy bevált subsite‑ot **klónozol** és percek alatt készreszabsz új ügyfeleknek.

## Telepítés és alaplépések

1. Telepítsd és aktiváld az **All‑in‑One WP Migration** alapbővítményt.
2. A hálózatkezelőben töltsd fel és aktiváld a **Multisite Extension** kiegészítőt.
3. Export
   - Teljes hálózat: Network Admin → All‑in‑One WP Migration → Export → válaszd a teljes hálózatot.
   - Szelektív: jelöld ki a kívánt **subsite‑okat** az exportnál.
4. Import
   - Teljes hálózat import: a célhálózat **egésze felülíródik**.
   - Subsite import: új subsite jön létre, vagy **felülírhatod** a meglévőt; csak az érintett subsite módosul.
5. Subsite → single: exportáld a subsite‑ot, majd importáld egy tiszta **single site‑ra** (teljes felülírás).
6. Single → multisite: exportáld a single site‑ot, majd importáld a hálózatba **új** subsite‑ként vagy **felülírva** a meglévőt.

```text
Migrációs ellenőrzőlista
- Mentés: készíts teljes backupot a célrendszeren (felülírás várható).
- Karbantartás: kapcsold be a karbantartási módot az érintett site-okon.
- Export: teljes hálózat vagy kijelölt subsite-ok.
- Import: megfelelő cél kiválasztása (teljes hálózat vs. subsite).
- Ellenőrzés: URL-ek, média, bejelentkezés, pluginok, témák.
- DNS/slug: ha változott, teszteld a hivatkozásokat és redirecteket.
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs kézi adatbázis‑szerkesztés, nincs fájlok egyenkénti másolása.
- **Kisebb kockázat**: bevált, egykattintásos folyamatok; kevesebb emberi hiba.
- **Rugalmasság**: teljes hálózat vagy **csak a kiválasztott subsite‑ok** mozgatása.
- **Skálázhatóság**: az **Unlimited Extension** miatt a nagy mentések is kezelhetők.
- **Automatizálhatóság**: **WP‑CLI** a tömeges és ütemezett műveletekhez.

## Kinek ajánlott?

- **Ügynökségeknek**: subsite sablonok klónozása, ügyfélleválasztás, több környezet kezelése.
- **Multisite adminoknak/hostoknak**: teljes hálózatok költöztetése, részleges migrációk.
- **DevOps csapatoknak**: CI/CD‑be illesztett, scriptelhető migrációk WP‑CLI‑vel.
- **Freelancereknek**: gyors átadás single site‑ként, vagy integrálás ügyfél multisite‑jába.

## Licenc és megjegyzések

- **Prémium, előfizetéses** kiegészítő. A standard csomag **használatszám‑alapú** (például évi kvóta) licenceléssel érkezik, és tartalmazza az **Unlimited Extensiont**. Az aktuális feltételek és árak a gyártó oldalán változhatnak.
- Az export **WPRESS** archívot hoz létre; az import **drag‑and‑drop** módon történik.
- **Cloud mentéshez** (például Drive, S3) külön **felhő‑kiegészítők** szükségesek.
- Import előtt mindig készíts **teljes mentést**. A célhelyen a kiválasztott hatókör (teljes hálózat / subsite / single site) **felülírásra kerül**.