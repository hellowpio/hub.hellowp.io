---
title: "All-in-One WP Migration OneDrive Extension"
description: "Fizetős kiegészítő az All‑in‑One WP Migrationhez, amely összeköti WordPress oldaladat a Microsoft OneDrive‑val. Közvetlen export/import, ütemezett és inkrementális mentések retencióval."
sidebar_label: "All-in-One WP Migration OneDrive Extension"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration OneDrive Extension egy kiegészítő, amellyel a teljes WordPress webhelyedet közvetlenül a OneDrive‑ra mentheted, onnan pedig egy kattintással visszaállíthatod vagy migrálhatod. Megspórolod a manuális fájl+adatbázis mentést, nem terheled a webszerver tárhelyét, és kapsz ütemezett, megbízható offsite backupot a Microsoft ökoszisztémában.

## Hogyan működik röviden?

- Az alap All‑in‑One WP Migration plugin készít egy **.wpress** archívumot (fájlok + adatbázis).
- A OneDrive Extension ezt az archívumot a megadott **OneDrive mappába** tölti fel, illetve onnan tölti le importkor.
- Beállíthatod az ütemezést, a retenciót, az értesítéseket és az inkrementális mentést, hogy a backup folyamatosan és takarékosan működjön.

## Fő funkciók, érthetően

- **Közvetlen export/import OneDrive‑ra/‑ról**  
  Exportkor a bővítmény feltölti a .wpress mentést a OneDrive‑odra; importkor egy felugró listából kiválasztod a kívánt mentést, és a rendszer teljes oldal‑visszaállítást végez (adatbázis, média, bővítmények, témák).

- **Ütemezett mentések és e‑mail értesítések**  
  Beállíthatsz óránkénti/napi/heti/havi futásokat. A rendszer e‑mailt küld a sikeres vagy hibás futásokról, így azonnal tudod, ha beavatkozás kell.

- **Retenció és tárhelykorlát**  
  Megadhatod, hány utolsó mentést tartson meg és mekkora összméretig tároljon a bővítmény. A régi mentések automatikus törlésével kézben tarthatod a OneDrive fogyasztást.

- **Célkönyvtár testreszabás**  
  Alapértelmezetten egy “[sajat‑oldal‑neve]-wordpress” mappába ment, de tetszőleges OneDrive mappát beállíthatsz.

- **Advanced export opciók**  
  - DB **Keresés/Csere**: URL‑ek és elérési utak korrekciója migrációkor.  
  - **Kizárások**: spam, cache, inaktív bővítmények/témák kihagyása a kisebb archívumért.  
  - **Jelszóval védett archívum**: extra biztonsági réteg a .wpress fájlra.

- **Átviteli sebesség finomhangolás**  
  A „Transfer” beállítással optimalizálhatod az import/export tempóját instabil vagy korlátozott kapcsolatnál.

- **Inkrementális mentések**  
  Az első teljes mentés után csak a változások mennek a következő backupokba, jelentősen csökkentve az időt és a sávszélességet – különösen nagy oldalaknál hasznos.

- **WP‑CLI és automatizálás**  
  Az alap plugin CLI‑vel vezérelhető; a Pro csomag kiterjeszti a felhős célokra is. Integrálható ütemezőkbe és CI/CD folyamatokba.

## Gyakorlati használati esetek

1. **Offsite biztonsági mentés**  
   Beállítasz egy napi ütemezést, retencióval (pl. 14 nap) és e‑mail értesítéssel. Ha frissítés után gond van, pár kattintással importálsz a OneDrive‑ról.

2. **Migráció fejlesztőről élesre**  
   Fejlesztői környezetben exportálsz a OneDrive‑ra, majd az élesen importálod ugyanazt az archívumot. A DB Keresés/Csere opcióval átírod a domain‑eket.

3. **Ügynökségi többoldalas mentés**  
   Minden ügyfélhez külön OneDrive mappát és retenciót állítasz be. Hibánál azonnali e‑mail, régi backupok automatikus törlése.

## Beállítás és napi használat – rövid útmutató

1. **Előfeltételek**  
   - Telepített és aktív All‑in‑One WP Migration.  
   - OneDrive fiók és hozzáférés (vállalati környezetben ellenőrizd az engedélyeket).  
   - Írási jogok a wp‑content/ai1wm‑backups és a bővítmény storage mappáiba.

2. **Kapcsolódás és konfiguráció**  
   - Jelentkezz be a OneDrive Settings képernyőn (OAuth).  
   - Állítsd be a célmappát, retenciót, e‑mail értesítéseket és (opcionálisan) az ütemezést.

3. **Export**  
   - Válaszd az Export → OneDrive opciót.  
   - Használd az Advanced opciókat (kizárások, jelszó, Keresés/Csere) igény szerint.

4. **Import**  
   - Válaszd az Import → OneDrive lehetőséget, jelöld ki a .wpress archívumot.  
   - Figyelem: a folyamat felülírja a teljes jelenlegi oldalt.

5. **CLI példa (általános)**

```
# Teljes mentés készítése (helyi), majd feltöltés a OneDrive-ra a bővítmény beállításai alapján
wp ai1wm backup

# Visszaállítás egy meglévő archívumból
wp ai1wm restore ./backups/site-YYYYMMDD.wpress
```

A felhős célok és opciók a Pro környezetben érhetők el; a pontos paraméterezést a CLI súgó mutatja.

## Hibaelhárítás és kompatibilitás

- **OneDrive API hibák**: Invalid Credentials, Too Many Requests, Rate Limit, Insufficient permissions, File not found. Tipikus megoldások: kijelentkezés/újrabejelentkezés, más OneDrive kliensek leállítása, rövid várakozás limit után, jogosultságok és megosztási szabályok ellenőrzése.  
- **Vállalati korlátozások**: előfordulhat „Cannot be used within the domain” jellegű tiltás; kérd az admin engedélyét.  
- **Fájlrendszer/jogosultság**: ha nincs írási jog vagy betelik a tárhely, a mentés leállhat. Ellenőrizd a mappajogokat és a szerver kvótáit.  
- **Helyi erőforrás‑korlátok**: ütemezett backup és OneDrive cél segít elkerülni a host idő‑ és méretlimitjeit.

## Előnyök és értékajánlat

- **Időmegtakarítás**: egyklikkes, teljes archívum, automatizált ütemezéssel.  
- **Biztonság**: offsite mentés, jelszavas archívum, értesítések.  
- **Költséghatékonyság**: kevesebb webszerver tárhely és sávszélesség.  
- **Skálázhatóság**: inkrementális mentés nagy oldalakhoz, ügynökségi használatra is alkalmas.

## Kinek ajánlott?

- **Kis‑ és középvállalkozásoknak**, akik Microsoft környezetben dolgoznak és egyszerű, megbízható offsite mentést szeretnének.  
- **Fejlesztőknek és ügynökségeknek**, akik gyakran mozgatnak oldalakat környezetek között, és több ügyfél backupját kezelik.  
- **Nagy forgalmú vagy nagy méretű oldalak üzemeltetőinek**, ahol az inkrementális mentés és a retenció kritikus.  

Ha szeretnéd, készíthetek személyre szabott telepítési és üzembe helyezési ellenőrzőlistát (előfeltételek, jogosultságok, ütemezés, teszt‑restore), hogy az indulás zökkenőmentes legyen.