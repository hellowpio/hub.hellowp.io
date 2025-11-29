---
title: "MainWP Wordfence Extension"
description: "MainWP-kiegészítő, amellyel a Wordfence Security beállításait, vizsgálatait és forgalmi nézeteit központilag kezelheted minden csatlakoztatott WordPress-oldalon."
sidebar_label: "MainWP Wordfence Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Wordfence Extension** egy kiegészítő, amely összekapcsolja a MainWP irányítópultodat a Wordfence Security bővítménnyel. Ha sok WordPress-oldalt kezelsz, nem kell külön-külön belépned mindegyikbe: a Wordfence beállításait, vizsgálatait és élő forgalmi nézeteit egy helyről vezérelheted. Ez drasztikusan csökkenti az időráfordítást, egységesíti a biztonsági profilt, és felgyorsítja az incidenskezelést.

## Hogyan működik röviden?

- A kiegészítőt a **MainWP Dashboard** oldalra telepíted és ott engedélyezed.
- A gyermekoldalakon a **Wordfence** bővítménynek telepítve és aktívnak kell lennie.
- A MainWP-ből:
  - központi Wordfence-beállításokat adsz meg (és szükség esetén oldalanként felülírod),
  - távoli vizsgálatokat indítasz (akár minden oldalon egyszerre),
  - élő forgalmat nézel hálózati és oldalszintű bontásban,
  - látod a Wordfence állapotát (inaktív, frissítés szükséges), és gyorsműveleteket hajthatsz végre.

## Fő funkciók, érthetően

- **Központi beállításkezelés**
  - A MainWP-ben állítod a Wordfence opciókat: **Scan ütemezés**, **Alerts** (riasztások), **Live Traffic** (élő forgalom), **Scans to Include** (mit vizsgáljon), **Firewall Rules**, **Login Security** és további opciók.
  - Mentéskor a beállítások automatikusan **szétküldésre kerülnek** a kiválasztott gyermekoldalakra, így pár kattintással egységes biztonsági profilt adsz a teljes flottának.

- **Per-site felülírás**
  - Ha egy oldalnak speciális igénye van, az adott site-nál bekapcsolhatod az **Override General Settings** lehetőséget, és eltérhetsz a központi sablontól (például sűrűbb vizsgálat, szigorúbb tűzfalszabályok).

- **Vizsgálatok indítása és ütemezése**
  - Egy kattintással indíthatsz **tömeges Wordfence-vizsgálatot** több vagy akár az összes oldalon.
  - A vizsgálatok ütemezhetők, és az eredmények **központosítva jelennek meg**, így gyorsan kiszűröd a fertőzéseket és kockázatokat.

- **Élő forgalom és hálózati nézet**
  - **Live Traffic** oldalszinten és **Network Live Traffic** hálózati nézetben: valós időben látod a látogatói és bot forgalmat, gyanús aktivitásokat, blokkolt kéréseket.
  - Különösen hasznos incidensek közben, amikor gyors visszaigazolás kell arról, hogy a védelem működik.

- **Állapot- és gyorsműveletek**
  - Azonnal láthatod, ha egy site-on a Wordfence **inaktív** vagy **frissítés** várható.
  - Gyorsműveletek: **aktiválás**, **frissítés**, a plugin **elrejtése/megmutatása** a kliens WP-Adminjában, **WP-Admin megnyitása** egy kattintással.

## Gyakorlati példák

- **Ügynökségi sablon bevezetése**
  - Készítesz egy központi Wordfence-profilt: heti vizsgálat, e-mail riasztások a security@céged.hu címre, alap tűzfalszabályok.
  - Az összes ügyféloldalra szétküldöd. A webshopokra per-site felülírással sűríted a vizsgálatot és szigorítod a bejelentkezési védelmet.

- **Zero-day sebezhetőség kezelése**
  - Egy friss hír után azonnal elindítasz egy **hálózati teljes vizsgálatot**.
  - A **Network Live Traffic** nézetben figyeled a rendellenes mintákat, és szükség esetén módosítod a tűzfalszabályokat a teljes flottán.

- **Új ügyfél bekötése**
  - Felveszed a site-ot a MainWP-be, telepítve és aktiválva a Wordfence-et.
  - Egy kattintással ráhúzod a meglévő központi sablont. Kész is a konzisztens védelem.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: tömeges műveletek, kevesebb manuális belépés.
- **Következetesség**: egységes biztonsági profil, kevesebb konfigurációs hiba.
- **Gyors reakció**: vizsgálati eredmények és élő forgalom egy helyen.
- **Egy felület, teljes kép**: nem kell több külön rendszert párhuzamosan használni.

## Követelmények és függőségek

- A kiegészítőt mindig a **MainWP Dashboard** oldalra telepítsd és ott engedélyezd.
- A gyermekoldalakon a **Wordfence** bővítménynek telepítve és aktívnak kell lennie.
- A Wordfence prémium funkcióihoz **külön Wordfence-licenc** szükséges; az extension ezeket csak integrálja.
- Az extension a **MainWP Pro** csomag része.

## Fontos megjegyzések és korlátok

- **Ne telepítsd a kiegészítőt gyermekoldalakra** – ez hibás működéshez vezet.
- A **Live Traffic** erőforrás-igényes lehet nagy forgalmú vagy multisite környezetben; ha teljesítménygondot látsz, mérlegeld a naplózás korlátozását.
- A kiegészítő a Wordfence funkcióit integrálja; a Wordfence saját központi kezelő szolgáltatása alternatíva lehet, de nagy flottáknál bizonyos tömeges műveletek korlátozottak lehetnek.

## Hibakeresés gyorsan

- Nem látod a site-ot az extensionben?
  - Szinkronizáld újra a MainWP-t.
  - Ellenőrizd, hogy a Wordfence tényleg aktív a gyermekoldalon.
  - Győződj meg róla, hogy az extension a Dashboardon van telepítve és engedélyezve.

- Frissítési anomália?
  - Frissítsd a MainWP extensionöket és a gyermekoldali Wordfence plugint.
  - Szinkronizálj újra, majd ellenőrizd a státuszt.

## Gyors kezdés – lépések

1. Telepítsd és engedélyezd a MainWP Wordfence Extensiont a MainWP Dashboardon.
2. Bizonyosodj meg róla, hogy a gyermekoldalakon a Wordfence aktív.
3. Állítsd be a **General Settings**-et, majd engedélyezd az esetleges **Override**-okat per site.
4. Indíts egy **hálózati vizsgálatot**, figyeld az eredményeket és a **Network Live Traffic** nézetet.

```
Központi sablon (példa):
  scan_schedule: heti
  alerts:
    email_to: security@pelda.hu
    notify_on_critical: true
  firewall_rules:
    brute_force_protection: enabled
    rate_limiting: moderate
  live_traffic: csak blokkolt és gyanús kérések

Per-site felülírás (webshop):
  scan_schedule: napi
  login_security: szigorított
  live_traffic: ideiglenesen részletes incidens idején
```

## Kinek ajánlott?

- **Ügynökségeknek és MSP-knek**: sok site, gyors skálázás, egységes biztonság.
- **Fejlesztőknek és site gondozóknak**: egyszerűsített karbantartás és állapotkövetés.
- **Belső IT csapatoknak**: központosított kontroll, gyors incidenskezelés.

Ha egyetlen, jól áttekinthető felületen szeretnéd menedzselni a Wordfence-et minden ügyféloldaladon, ez a kiegészítő pontosan erre való.