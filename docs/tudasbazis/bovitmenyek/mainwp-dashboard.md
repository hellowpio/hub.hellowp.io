---
title: "MainWP Dashboard"
description: "Self‑hosted, nyílt forráskódú WordPress‑flottamenedzsment eszköz, amellyel több, egymástól független webhely frissítése, karbantartása és felügyelete végezhető egyetlen központi irányítópultról."
sidebar_label: "MainWP Dashboard"
---

## Mi ez és milyen problémát old meg?

A **MainWP Dashboard** egy saját szerveren futó (self‑hosted), nyílt forráskódú megoldás, amellyel több, egymástól független WordPress‑oldalt tudsz egy helyről kezelni. Ha eddig minden webhelyre külön belépve frissítettél, mentettél és ellenőriztél, a MainWP ezt központosítja: egy irányítópultból intézhetsz frissítéseket, figyelhetsz sebezhetőségeket, futtathatsz mentéseket, küldhetsz ügyfélriportokat és sok mást.

## Hogyan működik?

A rendszer két komponensből áll:
- A **Dashboard** plugint egy külön, tiszta WordPress‑re telepíted (ajánlott akár külön aldoménen).
- A kezelt webhelyekre felkerül a **Child** plugin.

A Dashboard és a Child között **titkosított, aláírt** kommunikáció zajlik. Az első kapcsolódáskor kulcspár jön létre, a kéréseket a Dashboard írja alá, a Child ellenőrzi. Beállíthatsz opcionális admin jelszavas ellenőrzést és egyedi biztonsági azonosítót, inaktivitás esetén automatikus védelmi inaktiválás is elérhető. Az egész a megszokott HTTP/HTTPS csatornákon fut, és támogatott a **REST API** és a **WP‑CLI** is automatizáláshoz.

## Fő funkciók részletesen

### Központi webhelykezelés
- **Webhelyek felvétele, címkézése, csoportosítása**: gyorsan rendszerezheted a flottát ügyfél vagy technikai szempontok szerint.
- **Dashboard Insights**: összkép a frissítésekről, státuszokról és azonosításra váró anomáliákról.

### Frissítések, visszagörgetés
- **WordPress, bővítmények, sablonok** frissítése egyenként vagy kötegelve.
- **Verziók ignorálása**: elrejthetsz problémás kiadásokat.
- **Visszaállítás**: a WordPress beépített rollback képességeit a MainWP‑ből is elérheted, így gyorsan visszaguríthatsz egy nem kívánt frissítést.

### Bővítmény/sablon menedzsment
- **Telepítés, aktiválás, törlés** több oldalon egyszerre.
- **Automatikus frissítések** bekapcsolása és felügyelete.
- **Elhagyott kiegészítők figyelése**: jelzést kapsz, ha egy plugin/sablon gyanúsan régóta nem karbantartott.

### Tartalom és felhasználók
- **Bejegyzések/oldalak** létrehozása, szerkesztése, ütemezése több helyre.
- **Felhasználók és szerepkörök** kezelése, **hozzászólások** moderálása központból.

### 1‑kattintásos belépés
- **Jump to WP‑Admin**: azonnal belépsz a gyermek oldal adminjába. Fontos: az a rendszergazdai felhasználó kerül bejelentkeztetésre, amellyel a kapcsolat létrejött; más szerepkörrel való belépés nincs támogatva. HTTP Basic Auth esetén külön megfontolások szükségesek.

### Ügyfél- és költségkezelés
- **Clients modul**: ügyfélprofilok, webhelyek ügyfélhez rendelése.
- **Cost Tracker**: licencek és költségek nyilvántartása, összesítők, exportok; a Pro kiegészítő lejárati értesítésekkel és automatizálással bővít.

### Automatizálás
- **REST API**: kulcsos hitelesítéssel saját rendszerekből integrálhatsz és vezérelhetsz.
- **WP‑CLI**: parancssoros műveletekhez, ütemezett feladatokhoz.

## Bővítmények és integrációk (példák)

- **Vulnerability Checker**: sérülékenység‑figyelés NVD vagy WPScan adatforrásokkal, értesítésekkel és gyors műveletekkel.
- **Advanced Uptime Monitor**: Uptime Robot, Better Uptime, NodePing, Site24x7 integrációk.
- **SSL Monitor és Domain Monitor**: tanúsítvány‑ és domain lejáratfigyelés e‑mail riasztásokkal.
- **Biztonsági mentések**: UpdraftPlus, BackWPup, Solid Backups, WP Time Capsule vezérlése központból.
- **Teljesítmény/SEO**: WP Rocket beállítások távoli kezelése; Lighthouse mérések a PageSpeed Insights API‑val, ütemezve.
- **Pro/Client Reports**: márkázott PDF jelentések frissítésekről, mentésekről, uptime‑ról, analitikáról.
- **Code Snippets**: kód és konfiguráció terítése (akár wp‑config vonatkozású módosítások).
- **Team Control**: csapattag‑szerepek, site‑ és funkciószintű jogosultságok.
- **White Label**: a Child plugin és az admin felület újracímkézése.
- **Regression Testing**: frissítések utáni **HTML forrás‑összehasonlítás** diff‑nézettel, ütemezéssel és értesítési küszöbökkel – csökkenti a rejtett vizuális/markup hibák kockázatát.

## Gyakorlati példák

1. **Heti frissítési rutin 30 oldalra**
   - Sérülékenység‑listát átnézed → mentések ellenőrzése → kötegelt frissítés → Regression Testing futtatása → eltérések felülvizsgálata → jóváhagyás.
2. **Új plugin bevezetése 50 oldalra**
   - Plugin feltöltése a Dashboardba → terítés címke alapján → aktiválás → alapbeállítások Code Snippets‑szel → automatikus frissítések bekapcsolása.
3. **Havi ügyfélriport**
   - Pro Reports sablon → frissítések, uptime, mentések, Lighthouse pontszámok → PDF generálás → e‑mail kiküldés.

Példa karbantartási „playbook”:
```
1) Vulnerability scan és figyelmeztetések áttekintése
2) Legutóbbi mentések érvényességének ellenőrzése
3) Kötegelt frissítések (core/plugins/themes)
4) Regression Testing és manuális spot-check
5) Uptime/SSL/domain státusz ellenőrzés
6) Ügyfélriport generálás és archiválás
```

## Biztonság és korlátok

- **Titkosítás és aláírás**: OpenSSL, kulcspár‑alapú hitelesítés, aláírt kérések.
- **Opciók**: kezdeti admin jelszavas verifikáció, egyedi biztonsági azonosító, inaktív kapcsolat automatikus védelme.
- **1‑kattintásos belépés**: csak a kapcsolódó admin felhasználóval működik; Basic Auth mellett speciális beállítások kellenek.
- **Multisite**: a Dashboard nem multisite környezetre készült.
- **Függőségek**: backup/teljesítmény integrációkhoz a megfelelő gyermek oldali pluginek és/vagy külső API‑kulcsok szükségesek.

## Telepítés és ajánlott gyakorlat

1. Hozz létre egy **tiszta WordPress** telepítést a Dashboardnak (lehetőleg külön aldoménen).
2. Telepítsd és aktiváld a **MainWP Dashboard** plugint ezen a tiszta oldalon.
3. Minden kezelt webhelyre telepítsd a **MainWP Child** plugint.
4. A Dashboardban add hozzá a webhelyeket, állíts be opcionális jelszavas verifikációt és biztonsági azonosítót.
5. Címkézd és rendeld ügyfelekhez a site‑okat, majd konfiguráld a kívánt modulokat és add‑onokat.
6. Állíts be ütemezett feladatokat (mentés, Lighthouse, riportok) és értesítéseket.

## Kinek ajánlott és miért?

- **Ügynökségek és fejlesztőcsapatok**: sok oldal egységes karbantartása, automatizált riportok és minőségbiztosítás.
- **Freelancerek**: több ügyféloldal gyors, átlátható kezelése, kevesebb adminisztráció.
- **Vállalati/in‑house IT**: adatvédelmi okokból self‑hosted kontroll, integrálhatóság belső rendszerekhez.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kötegelt frissítések, központi mentés‑ és állapotkezelés.
- **Biztonság**: sérülékenység‑figyelés, gyors beavatkozás, titkosított kapcsolat.
- **Minőség**: Regression Testing csökkenti a frissítés utáni hibák kockázatát.
- **Átláthatóság**: márkázott, automatizált ügyfélriportok.
- **Rugalmasság**: REST API/CLI, kiterjedt integrációk, testreszabható jogosultságok.
- **Költséghatékonyság**: a core ingyenes, a Pro kiterjesztések modulárisan választhatók, nincs webhelyenkénti limitdíj.

## Összefoglalás

A MainWP Dashboard egy ügynökségi szintű, self‑hosted **WordPress‑flotta menedzsment** eszköz. Egyetlen irányítópultban egyesíti a frissítéseket, mentéseket, biztonságot, monitorozást, teljesítmény‑auditot és riportolást, miközben skálázható automatizálást és adatvédelmi kontrollt ad a kezedbe. Ha több WordPress‑oldalt üzemeltetsz, és szeretnéd mindezt gyorsabban, biztonságosabban és átláthatóbban intézni, erre való.