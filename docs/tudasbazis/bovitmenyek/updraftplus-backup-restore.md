---
title: "UpdraftPlus - Backup/Restore"
description: "WordPress-hez készült biztonsági mentő és visszaállító bővítmény, ütemezéssel, távoli tárhelyekkel és alap költöztetéssel."
sidebar_label: "UpdraftPlus - Backup/Restore"
---

## Mi ez és milyen problémát old meg?

Az UpdraftPlus egy **WordPress biztonsági mentés és visszaállítás** bővítmény. Abban segít, hogy ne veszíts adatot, és hiba esetén pár kattintással vissza tudd állítani a webhelyedet. Kezeli a rendszeres, **automatizált mentéseket** és a **gyors helyreállítást**. Alapfunkcióként a **költöztetést (migrációt)** is támogatja: a forrásoldalon készült mentést feltöltöd a céloldalra, és a beépített **keresés–csere** motor kijavítja az URL-eket és útvonalakat.

A fejlesztő a TeamUpdraft (Updraft WP Software Ltd, UK), a projektet David Anderson indította. A bővítmény széles körben használt, érett megoldás a WordPress-üzemeltetésben.

## Hogyan működik röviden?

- **Mit ment?** Az ingyenes verzió a teljes **wp-content** fájlstruktúrát (bővítmények, témák, feltöltések, egyéb mappák) és az **adatbázist** menti. A mentés komponensekre bontott: külön kezelhető az adatbázis, bővítmények, témák, feltöltések és egyéb fájlok.
- **Hová ment?** Több **offsite** cél támogatott: népszerű felhőszolgáltatók és protokollok. A Premium bővíti ezt további vállalati célokkal és az UpdraftVaulttal.
- **Hogyan állítasz vissza?** A bővítmény saját visszaállító felülete lépésről lépésre végigvisz; kiválaszthatod, mely komponenseket (pl. csak adatbázis vagy csak feltöltések) állítsa vissza.
- **Nagy oldalak?** A mentéseket a rendszer több részre **darabolja (split archives)**, és folytatni tudja megszakítás után – ez csökkenti a timeoutokat gyenge tárhelyeken is.

## Fő funkciók (ingyenes)

- **Teljes mentés és szelektív visszaállítás**: Készíthetsz teljes mentést, majd visszaállításkor eldöntheted, hogy csak az adatbázist, csak a témákat vagy épp a feltöltéseket szeretnéd visszahozni.
- **Ütemezés**: Állíts be automatikus mentéseket (óránkénti, napi, heti, kétheti, havi opciók). Nem kell manuálisan indítgatni.
- **Távoli tárhelyek**: Elmentheted a mentéseket több népszerű felhőbe vagy FTP/FTPS-en keresztül, akár e-mail mellékletként is kisebb oldalaknál.
- **Alap migráció**: Letöltöd a forrás mentését, a céloldalon feltöltöd, a beépített **keresés–csere** elem automatikusan kijavítja a domain- és útvonalváltozásokat.
- **Erőforrás-kímélés**: A darabolt archívumok és a folytonosság-kezelés segítik a **nagy webhelyek** stabil mentését.

## Prémium képességek

- **Automatikus mentés frissítés előtt**: Core, bővítmények és témák frissítése előtt automatikus mentés készül, így egy kattintás a visszagörgetés.
- **Inkrementális mentés (fájlok)**: A legutóbbi teljes mentés óta csak a változott fájlok kerülnek mentésre. Ez jelentősen gyorsít és spórol tárhelyet. (Az adatbázis mentése továbbra is teljes.)
- **További tárhelyek és haladó opciók**: Több vállalati felhőcél (pl. SFTP/SCP, WebDAV, egyéb felhők) és **több célhelyre mentés egyszerre**, részletes **retention** szabályok, **haladó ütemezés** és **kripto ellenőrzőösszegek**.
- **Közvetlen oldal–oldal migráció**: A forrásoldalról indított **direct site-to-site** költöztetés, valamint **szelektív migráció** és **multisite** támogatás.
- **WP-CLI**: Parancssori vezérlés üzemeltetési szkriptekhez és automatizáláshoz.
- **Adatvédelem és hozzáférés**: **Adatbázis-titkosítás**, a bővítmény felületének **jelszavas zárolása**, valamint **adat-anonimizálás** a mentésekben.

## Kapcsolódó szolgáltatások

- **UpdraftVault**: Beépített, S3-alapú tárhely, magas tartóssággal; kényelmes, külön kulcsok nélkül.
- **UpdraftClone**: **Elkülönített VPS klón** indítása teszteléshez; ideális próbafrissítésekhez, rollbackhez.
- **UpdraftCentral**: Több WordPress oldal **központi menedzsmentje** (mentések, frissítések, ellenőrzés).

## Gyakorlati példák

- **Hibás frissítés visszavonása**: Témafrissítés után szétesik a dizájn. Belépsz az UpdraftPlusba, kiválasztod az utolsó mentést, és csak a **témák** komponensét állítod vissza. A site percek alatt helyreáll.
- **Költözés új tárhelyre**: A régi szerveren készítesz mentést, a céloldalon feltöltöd. A beépített **keresés–csere** javítja a domain- és elérési útvonalakat – nincs sorozatos kézi adatbázis-szerkesztés.
- **Nagy webshop mentése**: A mentés **darabolva** fut, így nem dől meg a folyamat alacsony memória/timeout miatt. A Premium inkrementális mentései a napi változásokat gyorsan rögzítik.
- **Dev–stage–prod folyamat**: UpdraftClone-nal indítasz klónt, ott frissítesz és tesztelsz. Ha minden rendben, a produkción a frissítés előtt a rendszer **automatikus mentést** készít.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Automatizált mentések, egykattintásos visszaállítás, kevesebb kézi beavatkozás.
- **Kockázatcsökkentés**: Frissítés előtti automentés, külön tárolt **offsite** mentések, gyors katasztrófa utáni helyreállítás.
- **Költségoptimalizálás**: Inkrementális mentéssel kevesebb tárhely és sávszélesség; kevesebb állásidő.
- **Rugalmasság**: Szelektív visszaállítás és migráció, több tárolási cél, WP-CLI integráció.

## Kinek ajánlott?

- **Kis- és közepes vállalkozásoknak**: egyszerű beállítás, megbízható mentések, gyors visszaállítás.
- **Ügynökségeknek és üzemeltetőknek**: több oldal központi kezelése, WP-CLI, haladó ütemezés és retention.
- **Webshopoknak és nagy oldalaknak**: darabolt mentés, inkrementális fájlmentés, több felhőcél.
- **Fejlesztőknek**: klónozás teszteléshez, szelektív migráció, parancssori automatizáció.

## Korlátok és jó gyakorlatok

- Az ingyenes verzió a **wp-content** és az **adatbázis** mentésére fókuszál; a WordPress-gyökérfájlokhoz a Premium „Back up more files” kiegészítése kell.
- **Inkrementális mentés** csak a fájlokra vonatkozik; az adatbázist időszakosan teljes mentéssel fedd le.
- **Multisite** használatnál tesztelj különösen alaposan, és tarts több generációt.
- A teljes körű védelemhez használd az **offsite tárolást**, és fontold meg a **több célhelyre történő párhuzamos mentést**.

```text
Mentési stratégia – gyakorlati példa
- Fájlok: heti teljes + napi inkrementális
- Adatbázis: napi teljes, 14 napi megőrzés
- Célok: egy elsődleges felhő + másodlagos S3-kompatibilis
- Műveletek: frissítések előtt automatikus mentés
- Visszaállítási próba: havonta egy „dry run” tesztkörnyezeten
```