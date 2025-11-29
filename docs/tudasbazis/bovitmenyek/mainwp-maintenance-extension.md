---
title: "MainWP Maintenance Extension"
description: "Prémium MainWP kiegészítő központi adatbázis‑karbantartáshoz és ‑optimalizáláshoz több WordPress oldalon, kézi és ütemezett futtatással."
sidebar_label: "MainWP Maintenance Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Maintenance Extension egy MainWP Dashboardhoz készült prémium bővítmény, amellyel több WordPress „Child” oldal adatbázisát tudod egy helyről tisztítani és optimalizálni. Célja, hogy megszabadítson a felhalmozódó adatbázis‑„bloat”-tól (verziók, piszkozatok, spam), javítsa a teljesítményt, és automatizálja az ismétlődő karbantartási feladatokat – különösen akkor, ha sok webhelyet kezelsz.

## Fő funkciók és működés

- **Adatbázis‑tisztítás több oldalon**
  - Mit töröl? Bejegyzés‑verziókat, automatikus piszkozatokat, kukában lévő bejegyzéseket, spam/felfüggesztett/kukába tett hozzászólásokat, valamint a 0 bejegyzéssel rendelkező tageket és kategóriákat.
  - Hogyan működik? A Dashboardban kiválasztod a feladatokat és a céloldalakat, majd egy kattintással lefuttatod. A művelet minden kijelölt Child oldalon végigmegy.

- **Adatbázis‑optimalizálás**
  - Mit csinál? Egy kattintással futtatja az OPTIMIZE TABLE parancsot a kijelölt Child oldalakon, csökkentve a táblák töredezettségét és a tárhely‑használatot, javítva az I/O hatékonyságot.
  - Fontos: MariaDB esetén nem ajánlott az optimalizálás használata. Ilyenkor kapcsold ki ezt az opciót, és maradj a tisztításnál.

- **Időzített karbantartás**
  - Mit ad? Ismétlődő ütemezéseket hozhatsz létre (pl. heti/havi), amelyek automatikusan lefutnak.
  - Hogyan lesz megbízható? A WP‑Cron forgalomfüggő; stabil ütemezéshez használj külső pinget vagy rendszerszintű cron feladatot.

- **Azonnali futtatás (Run Now)**
  - Mire jó? Ha azonnal kell nagytakarítást végezni – például nagyobb tartalomimport vagy frissítési kör után –, egy külön fülön rögtön futtathatod a kiválasztott műveleteket.

## Telepítés és integráció

- **Követelmények**
  - A bővítmény a MainWP Dashboard kiegészítése.
  - A kezelt webhelyeken a MainWP Child plugin fusson és legyen csatlakoztatva a Dashboardhoz.

- **Lépések**
  1. Telepítsd és állítsd be a MainWP Dashboardot.
  2. Engedélyezd a Maintenance kiegészítőt a Dashboardban.
  3. Gondoskodj róla, hogy minden kezelt oldalon aktív legyen a Child plugin és kapcsolódjon a Dashboardhoz.

- **Használat röviden**
  - Kézi futtatás: Extensions > Maintenance > Maintenance fül. Válaszd ki a feladatokat és Child oldalakat, majd „Perform Maintenance”.
  - Ütemezés: Extensions > Maintenance > Schedules > Create New Schedule. Állítsd be a címet, gyakoriságot, feladatokat és céloldalakat, majd mentsd.
  - Ad hoc: a „Run Now” fülön azonnal végrehajthatod a kijelölt műveleteket.

## Gyakorlati példák

- **Ügynökségi portfólió (50+ oldal):** Beállítasz egy havi tisztítást, amely törli a verziókat és spamet. Eredmény: kisebb adatbázisok, gyorsabb admin, 20–40%‑kal kisebb mentések.
- **Tartalomimport után:** „Run Now” tisztítással eltávolítod a felesleges automatikus piszkozatokat és régi verziókat, így az adatbázis nem duzzad tovább.
- **Rendszeres optimalizálás (nem MariaDB):** Negyedévente OPTIMIZE TABLE futtatás a kevésbé változó oldalakon a táblák karbantartására.

## Best practice és biztonság

- **Mindig készíts adatbázis‑mentést** a Child oldalakról bármilyen karbantartás előtt.
- **MariaDB esetén** kapcsold ki az adatbázis‑optimalizálást; maradj a tisztítási feladatoknál.
- **Megbízható ütemezés:** Fontold meg a WP‑Cron kikapcsolását és használj szerver‑szintű cront, vagy külső pinget a Dashboard ütemezéseinek ébresztésére.

Példa rendszerszintű cron bejegyzésre WP‑CLI‑vel:
```
*/15 * * * * /usr/bin/wp cron event run --due-now --path=/var/www/html >> /dev/null 2>&1
```

## Előnyök és értékajánlat

- **Időmegtakarítás:** Tömeges, automatizált karbantartás sok webhelyen.
- **Következetesség:** Azonos szabályok és ütemezések minden oldalon.
- **Jobb teljesítmény:** Kevesebb „bloat”, frissebb táblák, gyorsabb I/O.
- **Kisebb mentések:** Kevesebb felesleges adat, rövidebb backup és restore idő.
- **Központi irányítás:** Egy Dashboardból mindent elérsz.

## Kinek ajánlott?

- **Webügynökségek** és **karbantartási szolgáltatók**, akik sok ügyféloldalt kezelnek.
- **Freelancer fejlesztők**, akik 10+ webhelyet gondoznak.
- **Vállalati csapatok**, belső portfólióval és szabályozott karbantartási folyamatokkal.

## Mit nem csinál?

- **Nem helyettesít backup/repair megoldást.** Fókusza a tisztítás és az optimalizálás a felsorolt elemekre korlátozva.
- **Nem teljes körű 404‑monitor.** A 404 e‑mail értesítések funkció új telepítéseken már nem elérhető; dedikált 404/redirect bővítmény ajánlott.

## Hibaelhárítás

- **Az ütemezések nem futnak:** Ellenőrizd a WP‑Cron állapotát. Állj át szerver‑cronra vagy állíts be külső pinget. Nézd meg, hogy a Dashboard webhelye elérhető‑e.
- **Optimize hibázik:** Valószínűleg MariaDB fut; kapcsold ki az optimalizálást és maradj a tisztításnál. Győződj meg róla, hogy az adatbázis‑felhasználónak van szükséges jogosultsága.
- **Timeout nagy oldalakon:** Oszd csoportokra a Child oldalakat, és futtasd a karbantartást több részletben. Csökkentsd a feladatok számát egy futtatáson belül.
- **Nem látszik a 404 e‑mail funkció:** Új telepítéseken nem elérhető; ez nem hiba.
- **Nem történik változás a céloldalon:** Ellenőrizd, hogy a Child plugin aktív, a kapcsolat él, és nincs‑e biztonsági szabály, amely blokkolja a műveletet.

Ezzel a kiegészítővel stabil, ismételhető folyamatot építhetsz a WordPress adatbázis‑karbantartásra, központosítva mindent, ami a teljesítményhez és a tiszta adatbázishoz kell.