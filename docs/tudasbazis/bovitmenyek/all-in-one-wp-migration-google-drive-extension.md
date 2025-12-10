---
title: "All-in-One WP Migration Google Drive Extension"
description: "Közvetlen Google Drive integráció az All‑in‑One WP Migrationhez: felhőmentés, visszaállítás, ütemezés, inkrementális mentés és WP‑CLI."
sidebar_label: "All-in-One WP Migration Google Drive Extension"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration Google Drive Extension az alap bővítményhez ad közvetlen Google Drive kapcsolatot. Segítségével a teljes WordPress webhelyedet egyetlen, hordozható **.wpress** archívumba csomagolod, majd ezt automatikusan a Drive‑ra mentheted és onnan egy kattintással visszaállíthatod. Megoldja, hogy ne kelljen SFTP‑vel, manuális feltöltésekkel vagy ideiglenes tárhellyel bajlódnod, és biztosítja az off‑site biztonsági mentést gyors, megbízható visszaállítással.

## Hogyan működik röviden?

- Az alap bővítmény a webhelyet **.wpress** csomagba exportálja.
- A kiegészítő a csomagot közvetlenül a **Google Drive‑ra** tölti fel (vagy onnan importál).
- Beállíthatod az **automatizált ütemezést**, a megőrzési szabályokat és az **inkrementális** mentést, így a rendszer önállóan gondoskodik a biztonsági másolatokról.
- A felület jelzi, hogy **teljes Drive hozzáféréssel** vagy csak **alkalmazásmappához** kapcsolódva működik.
- Alapértelmezett célmappa a Drive‑on egy, a webhely nevéhez illeszkedő mappa (pl. „[sajat‑oldal‑neve]-wordpress”).

## Fő funkciók, érthetően

- **Export/Import közvetlenül a Drive‑ra/‑ról**  
  Válaszd az Export to → Google Drive vagy Import from → Google Drive opciót. Nincs szükség köztes letöltésre/feltöltésre; az archívum a Drive‑ban landol, és onnan azonnal visszaállítható.

- **Ütemezett automatikus mentések**  
  Állíts be óránkénti, napi, heti vagy havi futást, megadott időponttal. Kérhetsz **e‑mail értesítést** a sikeres mentésekről, így mindig tudod, hogy kész a friss másolat.

- **Inkrementális mentés**  
  Az első teljes mentés után csak a változások kerülnek mentésre. Ez jelentősen csökkenti a futási időt és a Drive tárhelyhasználatot, különösen nagy, gyakran frissülő oldalaknál.

- **Megőrzési (retention) szabályok**  
  Add meg, hány utolsó mentést tartson meg a bővítmény a Drive‑on. A régiek automatikusan törlődnek, így a tárhelyed rendezett marad.

- **Tartalomkizárások**  
  Kihagyhatsz felesleges elemeket (pl. spam hozzászólások, revíziók, cache mappák, inaktív bővítmények, nem használt témák), hogy kisebb és gyorsabb legyen a mentés.

- **Jelszóval védett mentések**  
  Opcionális **titkosítás** a .wpress archívumhoz. Jó gyakorlat, ha ügyféladatok, rendelési információk is a csomagban vannak.

- **WP‑CLI integráció**  
  Parancssorból automatizálhatod a mentést és a visszaállítást, ideális CI/CD vagy cron környezetben, multisite esetén is.

  ```
  # Mentés Google Drive-ra
  wp ai1wm gdrive backup

  # Visszaállítás egy konkrét archívumból
  wp ai1wm gdrive restore mysite-2025-05-30-123000.wpress

  # Példa kizárásokkal
  wp ai1wm gdrive backup --exclude-spam --exclude-cache --exclude-themes
  ```

- **Reset Hub integráció**  
  Gyors „reset” eszközök fejlesztői/staging környezethez, hogy tiszta állapotból tesztelhess migrációt és visszaállítást.

- **Kapcsolat mód kijelzése**  
  A felületen látod, hogy teljes Drive hozzáféréssel vagy csak az alkalmazásmappához kapcsolódva működsz, átláthatóvá téve az engedélyeket.

- **Speciális adatbázis‑támogatás**  
  Kezeli az egyedi adatbázis‑előtaggal rendelkező táblákat is, így atipikus beállítások mellett is konzisztens exportot kapsz.

## Gyakorlati példák

- **Ügynökségi rutinmentés**: napi 01:00‑kor automatikus inkrementális mentés, megőrzés 14 példányig, e‑mail értesítés a sikeres futásról. Ha gond van, 2 kattintás az import a Drive‑ból.
- **WooCommerce webáruház**: nagy médiakönyvtár és sok rendelés miatt inkrementális mentéssel órák helyett percek alatt lefut a napi backup, és kevesebb tárhelyet foglal a Drive‑on.
- **Fejlesztés → staging → éles**: export Drive‑ra a fejlesztői környezetből, majd import a stagingre, végül az élesre. Nincs köztes tárhely, nincs zip‑pakolás, nincs FTP.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs manuális fájlmozgatás, a felhőbe megy minden.
- **Kevesebb hiba**: ütemezés + retention + értesítések = automatizált folyamat.
- **Skálázhatóság**: inkrementális mentéssel nagy oldalakon is kezelhető a backup‑idő.
- **Biztonság**: off‑site mentés, jelszóval védett archívumok.
- **Rugalmasság**: UI és CLI egyaránt; jól illeszthető üzemeltetési folyamatokba.

## Kinek ajánlott?

- **Webhely‑üzemeltetőknek és vállalkozásoknak**, akik megbízható, automatizált off‑site mentést szeretnének.
- **Ügynökségeknek**, akik sok site‑ot kezelnek és egyszerűsítenék a migrációt/mentést.
- **Fejlesztőknek és DevOps‑nak**, akik CLI‑vel, cron/CI‑vel dolgoznak.
- **Webáruházaknak és tartalomintenzív portáloknak**, ahol fontos a gyors, inkrementális mentés.

## Telepítés és beállítás – röviden

1. Telepítsd és aktiváld az All‑in‑One WP Migration alap bővítményt, majd a Google Drive kiegészítőt.
2. Jelentkezz be a Google‑fiókoddal, válaszd ki a hozzáférés módját (teljes Drive vagy alkalmazásmappa), és állítsd be a célmappát.
3. Kapcsold be az ütemezést, állítsd be a megőrzési szabályt, szükség esetén az inkrementális mentést és az e‑mail értesítést.
4. Adj meg tartalomkizárásokat és jelszót a mentés titkosításához.
5. Exportálj a Drive‑ra, vagy importálj onnan az admin felületről.

## Kompatibilitás és ismert ütközések

- A kiegészítő az alap bővítménnyel együtt működik, nélküle nem használható.
- Bizonyos bővítmények ütközhetnek az export/import folyamattal. Ha gondot látsz, ideiglenesen kapcsold ki a vegyes tartalom/SSL javító, illetve hasonló „átíró” bővítményeket a mentés idejére.

## Hibaelhárítás és tippek

- **Drive kvóták és API korlátok**: jelentkezz ki/be a Drive kapcsolatból, állítsd le átmenetileg a Drive szinkron klienst, várj néhány percet és próbáld újra.
- **Tárhelykorlátok**: nagy visszaállításnál időkorlát vagy memóriahiba esetén használd a parancssort, vagy fontold meg a Pro csomagot, amely képes megkerülni hoszting limitációkat.
- **Helytakarékosság**: engedélyezd az inkrementális mentést, és használd a kizárásokat (cache, revíziók, spam).

## Megjegyzés a licencelésről

A Google Drive integráció önálló kiegészítőként vagy a Pro csomag részeként érhető el. A Pro csomag további felhőszolgáltatókat is támogat, és segít a hoszting feltöltési/timeout limitjeinek kezelésében. A standard licenc éves díjas, több webhelyre is használható.