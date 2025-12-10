---
title: "MainWP Lighthouse Extension"
description: "Lighthouse alapú teljesítmény-, akadálymentesítés- és SEO-auditok központi vezérlése a MainWP Dashboardból, automatizálással, értesítésekkel és integrációkkal."
sidebar_label: "MainWP Lighthouse Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Lighthouse Extension a MainWP Pro csomag hivatalos kiegészítője. A Google PageSpeed Insights (Lighthouse) API-ját használja, hogy egyetlen Dashboardból felügyeld az összes kezelt (Child) WordPress webhelyed teljesítményét, akadálymentesítését és SEO‑ját. A kézi, egyenkénti Lighthouse tesztelés helyett tömeges, ütemezett auditokat futtathatsz, egy helyen látod az eredményeket és a trendeket, és küszöbértékekhez kötött riasztásokkal időben reagálhatsz a romlásokra.

## Fő funkciók és hogyan működnek

### Tömeges auditálás
- Egy kattintással több webhelyen indíthatsz Lighthouse auditot.  
- Az eredmények egy összesített nézetben jelennek meg: teljesítménypontszámok, FCP (First Contentful Paint), valamint trendjelölők mutatják, javult vagy romlott-e egy oldal a legutóbbi méréshez képest.

### Ütemezett (automatikus) auditok
- Beállíthatsz napi, heti vagy havi futtatásokat.  
- A Dashboard háttérben végzi az auditokat, így mindig friss állapotképet kapsz anélkül, hogy manuálisan indítgatnád.

### Értesítési küszöbértékek
- Megadhatsz minimum pontszámokat (pl. teljesítményhez), és ha egy oldal ez alá esik, figyelmeztetést kapsz.  
- Így proaktívan léphetsz, mielőtt a felhasználói élmény vagy a SEO sérülne.

### Mobil/asztali stratégia és jelentésnyelv
- Külön választhatsz Mobile és Desktop stratégiát, vagy mindkettőt.  
- A jelentések nyelvét igényeid szerint állíthatod, így az ügyfélkommunikáció is gördülékeny.

### Vezérlőpult‑widgetek és oszlopok
- A Manage Sites táblázatban megjeleníthető a teljesítmény (Desktop/Mobile) és az FCP oszlop.  
- Áttekintő widgetek mutatják a legjobb/legrosszabb oldalakat és a legutóbbi audit óta történt változásokat.  
- Pontszám‑történet és trendjelölők segítenek észrevenni a lassú romlást is.

### Jelentéskészítés ügyfeleknek
- A bővítmény részletes, könnyen megosztható auditjelentéseket generál.  
- Ügyfélbeszámolókhoz, SLA‑riportokhoz ideális.

### WP‑CLI integráció
- Parancssorból futtathatod az auditokat, akár CRON‑nal, akár CI/CD csővezetékben:
```
# Összes site auditja
wp mainwp-lighthouse audit --all

# Kiválasztott site-ok auditja (ID alapján)
wp mainwp-lighthouse audit 125,126
```

### REST API integráció
- Programból indíthatsz auditot és lekérheted az eredményeket (pl. /lighthouse/audit, /lighthouse/results).  
- Könnyen beépítheted saját riportáló vagy monitoring rendszereidbe.
```
POST /wp-json/mainwp/v2/lighthouse/audit
{
  "site_ids": [125,126],
  "strategy": "mobile"
}

GET /wp-json/mainwp/v2/lighthouse/results?site_id=125
```

### Finomhangolható teljesítmény
- Beállíthatod a maximális futási időt, a script runtime‑ot és a throttling értékeket, hogy gyengébb szervereken is stabilan fussanak az auditok.

## Gyakorlati példák

- Ügynökségi portfolio felügyelete: Hetente automatikus audit indul az összes ügyféloldalon. Ha bármelyik site teljesítménye a beállított szint alá esik, azonnal riasztást kapsz, és célzottan javíthatsz (pl. képek optimalizálása, blokkoló erőforrások csökkentése).
- Release előtti ellenőrzés: Telepítés után CLI‑ből lefuttatsz egy auditot a stagingen. Ha a pontszám vagy az FCP romlik, a kiadás megáll, amíg a regressziót nem javítjátok.
- SLA/riport automatizálás: REST API‑n keresztül havi jelentést generálsz minden ügyfélnek, trendgrafikonokkal és ajánlásokkal.

## Telepítés és alapbeállítás

1. A MainWP Dashboardban nyisd meg az Add‑ons menüt, telepítsd és aktiváld a Lighthouse kiegészítőt.  
2. Add meg a Google PageSpeed Insights API‑kulcsot.  
3. Állítsd be a stratégiát (Mobile, Desktop vagy Both) és a jelentés nyelvét.  
4. Adj meg értesítési küszöbértékeket és válaszd ki az ütemezést (napi/heti/havi).  
5. Szükség esetén finomhangold a Max execution, script runtime és throttling értékeket.  
6. Indítsd el az első tömeges auditot, majd kapcsold be a kapcsolódó oszlopokat és widgeteket.

## Követelmények és gyakori buktatók

- PSI API‑kulcs szükséges; a kvóták befolyásolhatják a nagy mennyiségű auditot.  
- Nagy hálózatnál (100+ site) növeld a PHP/WP memóriát és a cURL timeoutot; tipikusan 512–1024 MB memória és nagyobb időkorlát stabilabb futást ad.  
- Ha a Google a szerver IP‑jét problémásnak jelöli, előfordulhat, hogy a PSI hívások blokkolódnak; ilyenkor hálózati/szerver oldali megoldás szükséges.  
- Bizonyos cache/teljesítmény pluginek a Dashboardon megzavarhatják az auditot; hibaelhárításkor kapcsold ki őket ideiglenesen.

## Mit mér a bővítmény?

A Lighthouse eredményeit hozza be a PageSpeed Insights API‑n keresztül: összesített teljesítménypontszám, kategória‑pontok (témától függően), valamint kiegészítő mutatók, például FCP. A MainWP felületen pontszám‑történettel és trendekkel együtt látod őket.

## Előnyök és értékajánlat

- Központi, skálázható minőségbiztosítás sok webhelyhez.  
- Automatizált auditok és küszöbriasztások: gyors beavatkozás romlás esetén.  
- Ügyfélbarát jelentések és egyszerű integrációk (CLI, REST), amelyek illeszkednek a meglévő ügynökségi folyamataidba.  
- Jelentős időmegtakarítás a manuális, oldalankénti Lighthouse futtatáshoz képest.

## Kinek ajánlott?

- Digitális ügynökségeknek, akik sok ügyféloldalt kezelnek és SLA‑t vállalnak.  
- In‑house webhelykezelőknek, akik egységes minőségszintet tartanak fenn több márkaoldalon.  
- SEO és performance szakértőknek, akiknek fontos a trendek követése és a regressziók gyors kiszúrása.  
- Bármely csapatnak, amely automatizált riportálást és integrálható minőségellenőrzést keres.

## Gyors parancsok összefoglaló

```
# Teljes hálózat auditja mobil stratégiával
wp mainwp-lighthouse audit --all --strategy=mobile

# Egy site REST audit indítása
POST /wp-json/mainwp/v2/lighthouse/audit
{ "site_ids": [123] }

# Eredmények lekérése
GET /wp-json/mainwp/v2/lighthouse/results?site_id=123
```

Ezzel a kiegészítővel egységes, automatizált és skálázható Lighthouse‑monitoringot kapsz, amely a napi üzemeltetésed részeként csendben dolgozik, és csak akkor jelez, amikor valóban be kell avatkoznod.