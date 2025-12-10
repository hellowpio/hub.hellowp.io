---
title: "MainWP Clone Extension"
description: "A MainWP hivatalos kiegészítője, amellyel teljes WordPress-oldalakat klónozhatsz és villámgyorsan duplikálhatsz MainWP-felügyelet alatt."
sidebar_label: "MainWP Clone Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Clone Extension egy MainWP-kiegészítő, amellyel teljes WordPress-oldalakat másolhatsz át egyik környezetből a másikba, beleértve a beállításokat, témákat, bővítményeket és azok konfigurációit, valamint a tartalmakat és médiákat. Akkor hasznos, ha ügynökségként sablonoldalakat sokszorosítasz új ügyfeleknek, ha domain/hoszt váltásnál költöztetsz, ha gyors staging példányt készítenél, vagy ha blog/affiliate hálózatot skálázol. Célja, hogy percek alatt egységes, hibamentes telepítéseket és migrációkat végezhess, külső migrációs eszközök nélkül.

## Fő funkciók, érthetően

- **Két klónozási módszer**
  - **Quick Clone**: Közvetlenül klónoz egy csatlakoztatott forrás Child site-ról egy frissen csatlakoztatott cél Child site-ra. Kis-közepes méretű oldalakhoz ideális; a Dashboard–Child kapcsolatot használja, így nincs szükség külön mentési fájlokra.
  - **Clone from Backup**: A forrás teljes MainWP (Legacy) mentéséből állítja vissza a cél oldalt. Nagyobb webhelyeknél stabilabb, mert a folyamat a feltöltött backup állományból dolgozik, kevésbé érzékeny időtúllépésre vagy memórialimitre.

- **Teljes tartalom és konfiguráció átvitele**: Témák, bővítmények, felhasználói beállítások, posztok, oldalak, egyedi bejegyzéstípusok, taxonómiák, média – minden átkerül, így egy az egyben kapod vissza a forrást.

- **Szoros MainWP-integráció**: A Dashboard és a Child plugin közti kommunikációra épít. Nem kell külön migrációs bővítményt telepítened, a teljes folyamat a saját infrastruktúrádon marad.

- **Adminisztratív vezérlés**: A Dashboardban külön engedélyezheted a klónozást. A felület visszajelzést ad a folyamat állapotáról és irányítottan választhatod ki a forrást és a célt.

- **Önhosztolt, adatvédelmi kontroll**: A klónozás nem küld adatot külső szolgáltatóhoz; minden a saját szervereden történik.

## Hogyan működik? Előfeltételek

- Legyen egy **forrás** WordPress-oldalad és egy **cél** (üres/fresh) WordPress telepítésed.
- Mindkettőn fusson a **MainWP Child**, és legyenek **csatlakoztatva** a MainWP Dashboardodhoz.
- Engedélyezd a Clone kiegészítőt a Dashboardban.

Ha a szerver erőforrásai szűkösek, vagy nagy az oldalad, a backup-alapú módszer lesz a megbízhatóbb.

## Lépésről lépésre

### Quick Clone (kis-közepes oldalakhoz)
1. Engedélyezd a Clone funkciót a Dashboardban.
2. A cél Child site-on nyisd meg a MainWP Child Restore/Clone felületét.
3. Válaszd ki a forrás oldalt és indítsd a klónozást.
4. A végén a forrás admin adataival lépj be a célra, majd mentsd újra a **Közvetlen hivatkozásokat** (Permalinks).

### Clone from Backup (nagyobb oldalakhoz)
1. Engedélyezd ideiglenesen a MainWP Legacy Backups funkciót, és készíts teljes mentést a forrásról.
2. Töltsd le, majd töltsd fel a mentésfájlt a cél szerverre.
3. A cél Child site-on válaszd ki a feltöltött mentést és indítsd a visszaállítást.
4. Belépés a forrás admin adataival, majd Permalinks mentése.

## Konkrét, gyakorlati példák

- **Ügynökségi sablon sokszorosítása**: Készítesz egy mintaoldalt a kedvenc témáiddal és bővítményeiddel. Minden új ügyfélhez Quick Clone-nal pár perc alatt létrehozod az induló oldalt, teljesen azonos beállításokkal.
- **Költöztetés új domainre**: Létrehozol egy üres cél telepítést az új hoszton, majd a Clone from Backup segítségével átemeled a teljes oldalt – nem kell kézzel fájlokat vagy adatbázist másolni.
- **Staging környezet**: Gyorsan klónozol egy dev/staging példányt teszteléshez, majd élesítéskor visszafele is tudsz klónozni.

## Előnyök és értékajánlat

- **Időmegtakarítás**: percek alatt standardizált telepítések.
- **Kevesebb hiba**: automatizált, reprodukálható folyamat.
- **Költségcsökkentés**: nincs szükség külön migrációs eszközökre.
- **Skálázhatóság**: könnyen építesz hálózatot egységes plugin/téma stackkel.
- **Adatbiztonság**: minden a saját szervereden marad.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőcsapatoknak**: tömeges telepítések, ügyfélprojektek gyors indítása.
- **Tartalomgyártóknak, affiliate/blog hálózatoknak**: azonos felépítésű oldalak gyors klónozása.
- **Ops/DevOps csapatoknak**: staging–éles szinkron és migrációk megbízhatóan.
- **Bárkinek**, aki MainWP-t használ és egyszerűsítené a migrációt.

## Követelmények és bevált gyakorlatok

- Biztosíts stabil **Dashboard–Child–Child** kapcsolatot, megfelelő PHP memória- és futásidő-limitet.
- Ha a Quick Clone időtúllép vagy megakad, válts **Clone from Backup** módszerre.
- **Permalinks mentése** klónozás után kötelező az URL-struktúra helyreállításához.

## Hibakeresés, tippek

- **A cél oldal a forrásra irányít át**: valószínűleg a siteurl/home nem frissült. Javítsd az adatbázisban vagy WP-CLI-vel:
```
wp option update siteurl "https://uj-domen.tld"
wp option update home "https://uj-domen.tld"
```
- **Nagy oldal, erőforrás-hibák**: ellenőrizd a mentés épségét, használd a backup-alapú klónozást, és növeld a memóriát/időlimitet, ha lehet.
- **Hiányzó média**: futtasd újra a klónozást backupból; ellenőrizd, hogy a feltöltött mentés teljes és sértetlen.
- **Belépési adatok**: a klónozás után a forrás admin adataival tudsz belépni a cél oldalra.

## Biztonság és karbantartás

A kiegészítő korábban érintett volt hozzáférés-ellenőrzési hibában, amelyet a fejlesztők kijavítottak. Mindig tartsd naprakészen a MainWP Dashboardot, a Child plugint és a Clone kiegészítőt, és kövesd a MainWP ajánlott rendszerkövetelményeit.