---
title: "MainWP Time Capsule Extension"
description: "Hivatalos MainWP kiegészítő, amellyel a WP Time Capsule mentéseket és staginget egy központi Dashboardból vezérelhetsz minden kapcsolt WordPress-oldalon."
sidebar_label: "MainWP Time Capsule Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Time Capsule Extension egy hivatalos kiegészítő, amely a **WP Time Capsule** (WPTC) biztonsági mentési megoldást integrálja a **MainWP Dashboardba**. Ha sok WordPress-webhelyet kezelsz, a mentések, visszaállítások és staging környezetek mozgatása oldalanként rengeteg időt visz el és könnyen hibázol. Ezzel a kiegészítővel mindezt egy helyről, egységes felületen intézheted: indíthatsz azonnali vagy ütemezett mentést, visszaállíthatsz korábbi állapotokat, és létrehozhatsz staging példányokat – anélkül, hogy belépnél az egyes site-ok adminjába.

## Hogyan működik röviden?

- A bővítményt a **MainWP Dashboard** oldaladra telepíted, a gyerekoldalakon pedig fut a **MainWP Child** és a **WP Time Capsule**.
- A WPTC minden gyerekoldalon a saját **felhő-tárhelyedre** ment (pl. Google Drive, Dropbox, S3, Wasabi, Backblaze B2), és **növekményes** (incremental), akár **valós idejű** mentéseket készít.
- A MainWP kiegészítő egy központi vezérlőpultot ad: innen indítod a műveleteket, látod az állapotokat, és kezdeményezheted a visszaállításokat vagy a staginget. A tényleges mentési folyamatot a WPTC végzi a gyerekoldalakon.

## Fő funkciók, érthetően

- **Központi vezérlés több site-hoz**
  Egy felületen eléred a WPTC funkcióit minden kapcsolt oldaladon. Csoportos kijelöléssel tömegesen indíthatsz műveleteket (pl. „Backup Now”), és gyorsan átlátod, mely site-ok védettek naprakész mentéssel.

- **Azonnali és ütemezett mentések**
  Ha azonnal kell mentened (pl. nagy frissítés előtt), egy kattintással indítod. Beállíthatsz **ütemezést** és **időzónát**, így rendszeresen és automatán készülnek az inkrementális mentések a háttérben, minimális szerverterheléssel.

- **Visszaállítás korábbi állapotra**
  Ha gond adódik, a **visszaállítási pontokból** (Restore Points) gyorsan visszatekerhetsz. Lehetőséged van **szelektív visszaállításra** is: teljes oldal, csak fájlok, csak adatbázis, vagy akár kijelölt fájlok/DB-táblák.

- **Staging környezet létrehozása**
  Készíts **staging** példányt egy aldomainre vagy alkönyvtárba, próbáld ki a frissítéseket, sabloncserét, új bővítményeket. Ha minden rendben, a változtatásokat élesítheted, vagy szükség esetén visszaugorhatsz.

- **Növekményes, valós idejű mentés**
  A WPTC csak a változásokat menti, így jelentősen csökken a **tárhely- és sávszélesség-igény**, és gyorsabb a visszaállítás. A valós idejű mentés kritikus oldalaknál minimális adatvesztési kockázatot jelent.

- **Saját felhő-fiókod használata**
  A mentések a saját **felhőszolgáltatói fiókodba** kerülnek, nem külső szolgáltatóhoz. Így jobb a kontroll, átláthatóbb a költség, és egyszerűbb a megfelelés (compliance).

## Telepítés és első lépések

1. Telepítsd és aktiváld a MainWP Time Capsule Extensiont a **MainWP Dashboard** oldaladon.
2. Minden gyerekoldalon telepítsd és aktiváld a **WP Time Capsule** plugint.
3. A MainWP-ben jelentkezz be a **WPTC-fiókodba**, majd szinkronizáld a site-okat.
4. A gyerekoldalak WPTC beállításainál csatlakoztasd a választott **felhő-tárhelyet**. Az első teljes mentés automatikusan elindul.
5. A MainWP felületéről indíts „**Backup Now**”-t, állíts be **ütemezést**, hozz létre **staginget**, vagy kezdeményezz **visszaállítást**.

Gyors ellenőrzőlista:
```
[ ] Extension a Dashboardon
[ ] WPTC minden gyerekoldalon
[ ] Bejelentkezés WPTC-fiókba
[ ] Felhő csatlakoztatása site-onként
[ ] Ütemezés és Backup Now teszt
```

## Gyakorlati példák

- **Ügynökségi frissítéscsomag**: 40 ügyféloldalt frissítesz. Előtte csoportos „Backup Now”, frissítés futtatása, majd egy hibás oldalnál célzott visszaállítás az előző állapotba percek alatt.
- **Incidenskezelés**: Gyanús módosítás vagy feltörés után visszaállsz a tegnap esti pontra. A valós idejű mentés miatt minimális a kiesés és az adatvesztés.
- **Redesign tesztelése**: Staging példányon új sablont és blokkbővítményeket próbálsz. Ha rendben, élesítesz; ha gond van, nem érinti az éles oldalt.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Tömeges műveletek egyetlen felületről, kevesebb belépés és manuális kattintás.
- **Kisebb kockázat**: Frissítés előtt-után elérhető visszaállítási pontok, gyors rollback.
- **Erőforrás-hatékonyság**: **Incremental** mentések, kisebb tárhely és szerverterhelés.
- **Jobb kontroll**: Saját **felhő-fiókodba** mentés, átlátható költségek és adatkezelés.

## Kinek ajánlott?

- **Ügynökségeknek**: Sok ügyféloldal, egységes folyamatok és SLA-k betartása.
- **Freelancer fejlesztőknek**: Biztonságos frissítési rutin és gyors hibaelhárítás.
- **In-house csapatoknak**: Vállalati portfólió központi védelme és auditálhatósága.
- **Hosting/üzemeltetőknek**: Standardizált backup-stratégia és gyors helyreállítás.

## Fontos megjegyzések és korlátok

- A kiegészítő a WPTC-re épül: a tényleges **mentési/staging** műveleteket a WPTC végzi a gyerekoldalon.
- **Előfizetés szükséges** a WPTC használatához; a felhőkapcsolatot site-onként, a WPTC-ben állítod.
- Egyes haladó opciók (pl. szelektív tartományok, titkosítás) a **WPTC pluginban** érhetők el.
- Az első teljes mentés idő- és erőforrás-igényes lehet; gondoskodj megbízható tárhelyről és cron futtatásról.