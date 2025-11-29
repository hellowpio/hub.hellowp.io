---
title: "MainWP Jetpack Scan Extension"
description: "MainWP Pro kiegészítő, amellyel a Jetpack Scan felhős vizsgálatait központilag indíthatod, követheted és javíthatod az összes Child Site-on."
sidebar_label: "MainWP Jetpack Scan Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Jetpack Scan Extension a MainWP hivatalos Pro bővítménye, amely a Jetpack Scan szolgáltatással integrálva központosítja a WordPress biztonsági ellenőrzést. Ha több webhelyet kezelsz, nem kell egyesével belépned minden oldalra: a vizsgálatokat, a sérülékenység- és kártevőleleteket, valamint a legtöbb javítást egyetlen MainWP irányítópultról intézheted. A cél: gyorsabb észlelés, egyértelmű teendők, kevesebb manuális munka.

## Hogyan működik?

- A vizsgálatok a Jetpack Scan felhős infrastruktúráján futnak, a sérülékenység-információk forrása a WPScan adatbázis.
- A MainWP a Jetpack Scan API-n keresztül kapcsolódik: egy WordPress.com fejlesztői (OAuth) alkalmazással hitelesítesz, majd a Child Site-okat hozzárendeled.
- A napi automatikus ellenőrzések mellett bármikor indíthatsz on‑demand újravizsgálatot.
- A legtöbb fenyegetéshez elérhető „egy kattintásos javítás”, amelyhez (S)FTP/SSH hozzáférés szükséges a céloldalhoz.
- Az eredményeket a MainWP szinkronizálja; külön nézetekben követheted a leleteket és az előzményeket.

## Fő funkciók

- **Központi áttekintés és widget**
  Az Overview oldali widgetben és a részletes nézetben egy helyen látod az összes Child Site WordPress core, bővítmény és sablon sérülékenységeit, illetve a kártevő-észleléseket. Könnyen priorizálhatod, mely oldalakon kell azonnal beavatkozni.

- **Automatikus és igény szerinti vizsgálat**
  A csatlakoztatott oldalak napi automatikus ellenőrzést kapnak. Emellett egy kattintással újravizsgálhatod az összes webhelyet, egy csoportot vagy csak egy kiválasztott oldalt – például frissítés után vagy incidens gyanúja esetén.

- **Egykattintásos javítások**
  Ha a fenyegetéshez elérhető fix és megadtad a távoli elérési adatokat, a bővítmény közvetlenül végrehajtja a javítást. Ez csökkenti a kézi fájlműveletek és adminisztrátori belépések számát.

- **Fenyegetések és előzmények**
  A **Threats** nézet minden találatnál leírja, mi a probléma és mit kell tenned. A **History** fülön visszakeresheted, mi lett megoldva vagy figyelmen kívül hagyva, dátummal és idővel – ez audit és riportálás szempontjából aranyat ér.

- **Tömegműveletek**
  Hasznos, ha sok oldalt kezelsz: tömeges újravizsgálat, a Jetpack plugin frissítése, a Jetpack plugin elrejtése a gyerekoldal adminjából és egyéb bulk műveletek, akár csoportokra szűrve.

- **Adatszinkronizálás**
  A **Sync Jetpack Scan Data** opcióval bármikor behúzhatod a legfrissebb állapotokat a MainWP-be, így a döntéseid mindig aktuális információn alapulnak.

- **REST API integráció**
  A MainWP REST API-n keresztül a Jetpack Scan adatokat és műveleteket automatizálhatod: riportgenerálás, incidens-automatizmusok, külső rendszerek integrációja.

- **Kuponkezelés**
  Első éves Jetpack Scan előfizetéshez a bővítményen belül kérhetsz kedvezménykupont. A promóciók idővel változhatnak.

## Gyakorlati példák

- **Ügynökségi felügyelet**: Van 30 ügyféloldalad. Reggel ránézel az Overview widgetre; két oldalnál kritikus bővítmény-sérülékenység látszik. Kijelölöd őket, indítasz **bulk rescan**-t, majd a Threats nézetből elindítod az **egy kattintásos javítást**. Néhány perc, és minden tiszta.
- **Incidenskezelés**: Gyanús e-mailt kapsz. A MainWP-ben azonnal **on‑demand** vizsgálatot futtatsz az érintett csoportra, majd a leletek alapján célzottan javítasz. Az **előzmények** rögzítik a lépéseket.
- **Compliance riport**: Havi jelentéshez a History alapján exportálod, mely fenyegetéseket orvosoltál és mikor – egyszerű, visszakövethető dokumentáció.

## Telepítés és előfeltételek

1. **Gyerekoldalak előkészítése**: Telepítsd a Jetpack Protect vagy a Jetpack bővítményt a Child Site-okra, és biztosíts aktív Jetpack Scan előfizetést.
2. **Bővítmény telepítése a MainWP-ben**: Az Extensions nézetből telepítsd és aktiváld a Jetpack Scan kiegészítőt.
3. **API-kapcsolat létrehozása**: A bővítmény „Add App” felületén hozz létre egy WordPress.com fejlesztői (OAuth) alkalmazást a megadott Redirect URL-lel, majd kapcsold hozzá a webhelyeidet.
4. **Javításokhoz hozzáférés**: Add meg az érintett Child Site-ok (S)FTP/SSH adatait, hogy az automatikus javítások működjenek.
5. **Használat**: Az Overview/Threats/History nézetekkel menedzseld a leleteket, szükség esetén indíts újravizsgálatot és szinkronizáld az adatokat.

```
Gyors checklista
- Jetpack Scan előfizetés: AKTÍV
- Child Site-okon: Jetpack Protect vagy Jetpack plugin
- WordPress.com OAuth app: létrehozva és csatlakoztatva
- (S)FTP/SSH adatok: megadva az automatikus fixekhez
- MainWP: szinkron futtatva, Overview/Threats ellenőrizve
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: Központi irányítás, tömegműveletek, on‑demand vizsgálat.
- **Gyors reagálás**: Napi automatikus ellenőrzés + azonnali újravizsgálat csökkenti az észlelés–reagálás idejét.
- **Egyértelmű teendők**: A Threats nézet konkrét lépéseket javasol; ahol lehet, egy kattintásos fix.
- **Auditálhatóság**: Részletes előzmények, visszakövethető beavatkozások.
- **Automatizálhatóság**: REST API-val riportok, riasztások, folyamatautomaták építhetők.

## Kinek ajánlott?

- **Webügynökségek és fejlesztők**: Sok webhely, kevés idő – ideális a központosított biztonsági felügyelethez.
- **Vállalati/in‑house csapatok**: Több belső portál és microsite biztonságának egységes kezelése.
- **MSP-k/IT szolgáltatók**: Skálázható workflow, automatizálható riportolás és incidenskezelés.

Ha csak egy-két oldalt kezelsz, vagy nem használsz Jetpack Scan szolgáltatást, a haszon kisebb lehet. Több webhely esetén viszont az érték exponenciálisan nő.

## Megjegyzések és korlátok

- A napi automatikus vizsgálat a szolgáltatás ütemezése szerint fut; az on‑demand újravizsgálat bármikor indítható.
- Az eredmények szinkronizációja miatt egyes változások késleltetve jelenhetnek meg a felületen.
- Az egykattintásos javítás elérhetősége függ a fenyegetés típusától és a megadott (S)FTP/SSH hozzáféréstől.
- A kuponkedvezmények időszakosak; elérhetőségük és mértékük változhat.
- A bővítmény a MainWP aktuális főverzióival kompatibilis, a részletek a kiadási megjegyzésekben találhatók.

Ezzel a kiegészítővel egyetlen irányítópultról tudod a biztonsági vizsgálatot, a leletek kiértékelését és a javításokat irányítani – gyorsabban, átláthatóbban és kevesebb hibalehetőséggel.