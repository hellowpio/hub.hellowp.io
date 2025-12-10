---
title: "MainWP Staging Extension"
description: "Központi staging menedzsment a MainWP Dashboardból: tesztoldalak létrehozása, frissítések próbafuttatása és kezelés a WP STAGING integrációjával."
sidebar_label: "MainWP Staging Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Staging Extension egy olyan kiegészítő, amellyel a MainWP Dashboardból közvetlenül hozhatsz létre és kezelhetsz staging (teszt) WordPress oldalakat az alá kapcsolt Child site-jaidon. A tényleges klónozást a WP STAGING bővítmény végzi, a MainWP pedig ehhez ad központi vezérlést és tömeges menedzsmentet. Így kockázat nélkül tesztelhetsz frissítéseket, beállításokat és új funkciókat, mielőtt az éles oldalon bármi változna.

## Hogyan működik röviden?

- A Child site-okra felkerül a WP STAGING bővítmény (telepítheted egyenként vagy tömegesen a MainWP-ből).
- Staging létrehozásakor a WP STAGING klónozza a fájlokat egy elkülönített mappába, duplikálja az adatbázist új előtaggal, és beállítja a konfigurációt.
- A létrehozott staging példányt a MainWP automatikusan felveszi a Dashboardba, mintha egy külön Child site lenne, így külön szűrheted, frissítheted és törölheted.
- A stagingen kipróbált frissítéseket és változtatásokat ellenőrzés után az éles oldalakon is végrehajthatod. A stagingről élesre “push” funkciót a WP STAGING Pro biztosítja, az nem része ennek az extensionnek.

## Fő funkciók és mit csinálnak

- **Egykattintásos staging létrehozás**: A MainWP felületéről indítod a klónozást az adott Child site-ra. Nem kell belépni minden oldal adminjába.
- **Részletes klónozási beállítások**: Megadhatod a staging nevét/útvonalát, kizárhatsz fájlokat és adatbázis-táblákat (például nagy méretű feltöltéseket vagy cache mappákat), így gyorsabb és célzottabb klónozást érhetsz el.
- **Staging-specifikus frissítések**: A staging példányokon külön futtathatod a WordPress mag-, téma- és bővítményfrissítéseket, majd ellenőrzés után dönthetsz az éles frissítésekről.
- **Újraduplikálás és törlés**: Ha a produkció változott, a staginget újra klónozhatod a friss állapotról, vagy biztonságosan törölheted, ha nincs rá szükség.
- **Automatikus MainWP Child telepítés a stagingre**: A frissen létrehozott staging automatikusan bekerül a Dashboardba, így ugyanúgy kezelheted, mint bármelyik Child site-ot.
- **WP STAGING jelenlét ellenőrzése**: A kiegészítő figyeli, hol hiányzik a WP STAGING, és tömeges telepítést is javasol/indít.
- **Áttekintő nézet és számlálók**: A Dashboardban külön oszlop és számláló mutatja az egyes site-okhoz tartozó staging példányokat, javított visszajelzésekkel és átláthatóbb UI-val.

## Gyakorlati példák

- **Ügynökségi frissítési ablak**: Hetente egyszer stagingen lefuttatod a frissítéseket minden ügyféloldalnál, átnézed a kritikus funkciókat (pl. kosár, űrlapok, keresés), majd jóváhagyás után élesen is frissítesz.
- **Új funkciók kipróbálása**: Egy nagy webáruházban új fizetési módot és témamódosítást tesztelsz stagingen. Ha minden rendben, a módosításokat dokumentálod, és az éles környezetben is végrehajtod.
- **Hibakeresés izoláltan**: Inkompatibilis bővítmény gyanúja esetén stagingen kapcsolgatod a pluginokat és reprodukálsz hibákat, miközben az éles oldal zavartalanul működik.

## Előnyök és értékajánlat

- **Kockázatcsökkentés**: A változtatások nem az éles oldalon történnek, így minimális az üzleti leállás esélye.
- **Időmegtakarítás**: Központi, tömeges menedzsmenttel nem kell minden oldalra külön belépni és manuálisan klónozni.
- **Átláthatóság**: Külön láthatod és kezelheted a staging példányokat, tiszta workflow-val a teszt → éles lépésekhez.
- **Skálázhatóság**: Sok site esetén is konzisztens, megismételhető folyamatokat kapsz.

## Célközönség

- **WordPress ügynökségek** és **managed service** csapatok, akik sok ügyféloldalt üzemeltetnek.
- **Rendszergazdák** és **DevOps** felelősök, akik strukturált frissítési- és változáskezelést keresnek.
- **Fejlesztők**, akik biztonságos játszóteret szeretnének új funkciókhoz, anélkül hogy az éles forgalmat kockáztatnák.

## Előfeltételek, kompatibilitás, korlátozások

- **Szükséges**: MainWP Dashboard (Core + Pro), illetve a **WP STAGING** bővítmény minden érintett Child site-on.
- **Push élesre**: A stagingről élesre való automatikus “push” nem része ennek a kiegészítőnek; ehhez a WP STAGING Pro szükséges.
- **Környezet**: Nagy site-oknál számolj elegendő tárhellyel és I/O-val. Nem szabványos mappastruktúráknál (pl. egyedi wp-content elhelyezés) lehetnek extra lépések; ilyen esetekben a WP STAGING dokumentációja és támogatása az irányadó.
- **Állapot**: A kiegészítő jelenleg “work in progress”/Beta megjelölésű. Éles bevezetés előtt mindig ellenőrizd a kiadási megjegyzéseket és tesztelj stagingen.

## Biztonság és bevált módszerek

- Tartsd naprakészen a MainWP kiegészítőket és a WP STAGING bővítményt.
- Először mindig stagingen frissíts, és csak ellenőrzés után az élesen.
- Zárd ki a klónozásból a feleslegesen nagy mappákat (cache, backup), hogy gyorsabb legyen a folyamat.
- Rendszeresen töröld a már nem használt staging példányokat.

## Gyors indulási ellenőrzőlista

```
1) Telepítsd a MainWP Staging Extensiont a Dashboardra.
2) Telepítsd és aktiváld a WP STAGING bővítményt a kiválasztott Child site-okon (akár tömegesen).
3) Szinkronizálj, majd indítsd a staging létrehozását:
   - Adj nevet/útvonalat
   - Állítsd be a kizárásokat (fájlok/táblák)
4) Várd meg a klónozást; a staging automatikusan Childként jelenik meg.
5) Futtasd a frissítéseket a stagingen, teszteld a kritikus funkciókat.
6) Ha minden rendben, frissíts az éles site-on is.
7) Szükség esetén újraduplikáld vagy töröld a staginget.
```

## Összegzés

A MainWP Staging Extension a WP STAGING integrációjával biztonságos, központosított staging-menedzsmentet ad a kezedbe. Gyorsan hozhatsz létre tesztpéldányokat, külön futtathatod és ellenőrizheted a frissítéseket, majd kontrolláltan léphetsz tovább az éles környezetbe. Ha sok site-ot üzemeltetsz, ez a bővítmény kézzelfogható időt, költséget és kockázatot spórol meg, miközben átláthatóvá teszi a változáskezelési folyamataidat.