---
title: "MainWP iThemes Security Extension"
description: "MainWP kiegészítő, amellyel a Solid Security (korábban iThemes Security) beállításait és állapotát központilag kezelheted az összes Child WordPress webhelyeden."
sidebar_label: "MainWP iThemes Security Extension"
---

## Mi ez és miért hasznos?

A MainWP iThemes Security Extension (mai nevén MainWP Solid Security Integration) egy hivatalos MainWP add-on. Segítségével a Solid Security biztonsági bővítményt egy központi irányítópultról kezelheted az összes Child webhelyeden. A legnagyobb gondot oldja meg: nem kell minden egyes oldalra belépned, hogy az alapvető biztonsági beállításokat egységesen karbantartsd, frissítsd vagy ellenőrizd.

Ha sok WordPress oldalt kezelsz, a biztonsági konfigurációk kézi szinten tartása időigényes és hibalehetőségekkel teli. Ezzel a kiegészítővel egységes „baseline”-t oszthatsz ki minden oldalra, gyorsan reagálhatsz incidensekre (például lockoutokra), és egyetlen felületen láthatod, hol van teendő.

## Hogyan működik röviden?

- A Dashboard oldaladon telepíted és aktiválod az add-ont.
- A Child webhelyeken fut a Solid Security és a MainWP Child plugin.
- A MainWP-ből távolról vezérled a Solid Security ingyenes funkcióit: telepítés, frissítés, aktiválás, konfiguráció, monitorozás.
- A Solid Security Pro funkciók használatához külön licenc és többnyire helyi beállítás szükséges; ezeket a MainWP nem kezeli központilag.

## Fő funkciók, érthetően

### Központosított telepítés és kezelés
- Solid Security telepítése és aktiválása több site-on egyszerre.
- Gyors frissítések és deaktiválás szükség esetén.
- Ezzel minimalizálod az adminisztratív terheket nagy site-portfólió mellett.

### Egységes beállításkiosztás (baseline)
- Készíts egy „alap” konfigurációt, és oszd ki minden Child webhelyre.
- Ahol eltérő igény van (pl. speciális bejelentkezési ablak), site-onként felülírhatod a központi beállításokat.
- Csökkenti az inkonzisztenciákból fakadó kockázatokat.

### Solid Security funkciócsoportok távoli kezelése
- Globális beállítások és finomhangolás.
- 404 észlelés: gyanús kérések figyelése.
- Away Mode: idősávos admin-hozzáférés korlátozása.
- Tiltott felhasználók és IP-k: gyors blokkolás/engedélyezés.
- Brute force védelem (lokális/hálózati): bejelentkezési támadások elleni védelem.
- Adatbázis-mentések: alap biztonsági mentések ütemezése.
- Fájlváltozás-észlelés: váratlan módosítások jelzése.
- Login elrejtése (Hide Backend): bejelentkezési URL megváltoztatása.
- SSL kényszerítése: biztonságos kommunikáció előírása.
- Erős jelszókövetelmények: minimum biztonsági szint betartatása.
- Rendszer- és WordPress-tweakek: felesleges fejlécek, REST/ XML-RPC korlátozások stb.
- Admin user/DB prefix eszközök: alapértelmezett értékek megváltoztatása.
- Kétlépcsős azonosítás (2FA) bekapcsolása.
- Notification Center: értesítések központi kezelése.

### Áttekintés és gyors reagálás
- „Overview” nézet: látod, mely site-okon hiányzik, inaktív vagy figyelmet igényel a biztonsági plugin.
- „Active Lockouts” widget: aktuális zárolások listája, gyors feloldás vagy további tiltás.
- „Security Status” widget: problémák prioritás szerinti csoportosítása és gyors javítási hivatkozások.

## Gyakorlati példák

- Ügynökségi baseline: az új ügyféloldalakra egy kattintással kiosztod a vállalati alapbiztonságot (brute force védelem, 2FA, hide login, erős jelszavak). Kivételkezelés: egy nagy forgalmú webshopnál a 404 észlelést lazítod, hogy ne büntesd a robotokat.
- Incidenskezelés: több site-nál hirtelen sok lockout jelenik meg. A Dashboardból ellenőrzöd a mintát, feloldod a téves zárolásokat, a gyanús IP-ket feketelistára teszed.
- Gyors on-boarding: új Child site hozzáadása után azonnal telepíted és aktiválod a Solid Securityt, majd ráhúzod a központi beállítást.
- Karbantartás: rendszeres frissítési ablakban minden érintett site-on végigviszed a biztonsági plugin műveleteit, külön belépés nélkül.

## Előnyök és értékajánlat

- Időmegtakarítás: tömeges műveletek, központi konfiguráció, kevesebb manuális belépés.
- Következetesség: egységes biztonsági szint minden oldalon, kevesebb emberi hiba.
- Gyors reakció: lockoutok és státuszjelzések egy helyen, azonnali beavatkozás.
- Skálázhatóság: akár több tucat vagy száz oldal kezelése is kezelhető terheléssel.
- Átláthatóság: egy irányítópultból látod a teljes portfólió biztonsági állapotát.

## Kinek ajánlott?

- WordPress ügynökségeknek: egységes szabályrendszer és hatékony tömeges kezelés.
- Szabadúszóknak több ügyféloldallal: kevesebb adminisztráció, gyorsabb incidenskezelés.
- IT/DevOps csapatoknak: szabványosítás, változáskezelés és auditálhatóság.
- Belső webcsapatoknak több microsite-tal: egységes megfelelőség és központi kontroll.

## Telepítés és első lépések

1. A MainWP Dashboardon telepítsd és aktiváld az iThemes/Solid Security Extensiont.
2. Minden Child site-on legyen aktív a MainWP Child és a Solid Security.
3. Szinkronizáld a site-okat, hogy a Dashboard felismerje a bővítményt.
4. Készíts baseline beállítást, majd oszd ki minden site-ra.
5. Szükség esetén állíts be site-onként felülírást.

Példa navigáció:
```
MainWP > Extensions > Solid Security > Beállítások > Save to All Sites
MainWP > Sites > [kiválasztott site] > Solid Security fül > Overwrite General Settings: YES > Mentés
```

## Követelmények és kompatibilitás

- MainWP Dashboard (Core) és az add-on hozzáférés.
- MainWP Child plugin a Child site-okon.
- Solid Security plugin telepítve és aktiválva a Child site-okon.
- A MainWP-ből a Solid Security ingyenes funkciói vezérelhetők; Pro funkciókhoz külön licenc és jellemzően helyi konfiguráció szükséges.

## Korlátozások és biztonsági megjegyzések

- A Pro képességek központi vezérlése nem része az integrációnak.
- Az elnevezések keveredhetnek: a felületen „Solid Security”, a régi dokumentációkban „iThemes Security”.
- Régebbi kiadásokban ismert jogosultságkezelési hiba előfordult. Mindig a legfrissebb verziót használd, és korlátozd a Dashboard hozzáféréseket csak megbízható adminokra.

## Összefoglalás

Ezzel az add-onnal egy helyről, következetesen és skálázhatóan gondoskodhatsz a WordPress portfóliód alapbiztonságáról. Ha több oldalt kezelsz, és fontos a gyors reagálás, az egységes baseline és a minimális adminisztráció, ez az integráció neked való.