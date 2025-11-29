---
title: "All-in-One WP Migration and Backup"
description: "Egyszerű, megbízható WordPress migráció és biztonsági mentés egyetlen .wpress csomaggal – egykattintásos export, drag‑and‑drop import, automatikus URL‑csere és WP‑CLI."
sidebar_label: "All-in-One WP Migration and Backup"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration and Backup egy mindenes WordPress bővítmény, amellyel teljes webhelyeket tudsz biztonsági menteni és költöztetni. Egyetlen .wpress csomagba gyűjti az adatbázist, a fájlokat, a médiatárat, a témákat és a bővítményeket, majd drag‑and‑drop módszerrel visszaállítod a céloldalon. A legnagyobb gondokat – domain/útvonal csere, sorosított adatok törése, szerverlimitek – automatikusan kezeli, így nem kell külön adatbázis‑exporttal és fájlmásolással bajlódnod.

## Fő funkciók, érthetően

- **Teljes export .wpress-be**: az oldalad minden összetevőjét egyetlen archivált fájlba csomagolja. Így mindig egyetlen állományt kell kezelned, verzióznod, tárolnod.
- **Drag‑and‑drop import**: a csomagot bedobod az admin felületen, és a bővítmény figyelmeztet, hogy a visszaállítás felülírja a jelenlegi adatbázist és fájlokat. Ezután azonnal a migrált oldal felhasználóival tudsz belépni.
- **Automatikus URL‑ és útvonalcsere**: domain vagy könyvtárváltáskor a bővítmény a WordPress‑specifikus, sorosított adatokat is biztonságosan cseréli, így nem „törik el” semmi.
- **Keresés és csere (find & replace)**: finomhangolhatod, hogy milyen karakterláncokat cseréljen, például környezetspecifikus endpointok vagy CDN‑URL‑ek esetén.
- **Alacsony erőforrás‑igényű feldolgozás**: kis csomagokra bontva dolgozik, így gyengébb tárhelyeken is stabilan fut, kevesebb „timeout” és memóriahiba mellett.
- **Mentések kezelése**: a mentések a wp‑content/ai1wm‑backups mappába kerülnek, az adminból letöltheted, visszaállíthatod, törölheted őket.
- **Adatbázis‑motorok közti mozgás**: MySQL, MariaDB és SQLite közt is tudsz költözni, a WordPress Playground‑ot is támogatja.
- **Hozzáférhetőség és lokalizáció**: akadálymentes admin, reszponzív kezelőfelület, sok nyelvi fordítás.
- **WPRESS megnyitása Traktorral**: webes és asztali (Windows/Mac/Linux) eszközzel a csomag tartalma böngészhető, ellenőrizhető.
- **WP‑CLI támogatás**: parancssorból automatizálható mentés és visszaállítás, kizárásokkal és haladó opciókkal.

## Gyakorlati példák

- **Tárhely- vagy domainváltás**: a forráson exportálsz fájlba, a célszerveren telepített üres WordPressre importálsz. Az URL‑csere automatikus, minimális állásidővel lezajlik a költözés.
- **Staging ↔ éles szinkron**: a staginget visszanyomod élesbe, vagy élesből készítesz staging klónt egy gombnyomással.
- **Helyi fejlesztés → éles**: MAMP/XAMPP/Playground környezetből egy .wpress csomaggal felviszed a kész oldalt a szerverre.
- **Gyors visszaállítás hibás frissítés után**: a Backups nézetből egy kattintással visszateheted az utolsó jó állapotot.
- **Multisite hálózat mozgatása**: teljes hálózat vagy kiválasztott aloldalak exportja/importja a Multisite kiegészítővel.
- **CI/CD jellegű automatizálás**: ütemezett mentések és parancssoros visszatöltés fejlesztői folyamatokba illesztve.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt a forrás és a cél oldalon.
2. A forráson válaszd az Export → File műveletet, töltsd le a .wpress csomagot.
3. A céloldalon nyisd meg az Import nézetet, és húzd be a fájlt.
4. A folyamat végén jelentkezz be az importált oldal felhasználóival; az URL‑ek és elérési utak már át vannak írva.

## Haladó beállítások és WP‑CLI

- **Szelektív kizárások**: kihagyhatod a cache‑t, spamet, logokat vagy nagy könyvtárakat.
- **Find & replace szabályok**: például „dev.example” → „prod.example”, vagy médiaútvonalak cseréje.
- **WP‑CLI példa**:
```bash
# Export fájlba kizárásokkal
wp ai1wm export --file=/var/backups/site.wpress --exclude-spam --exclude-cache --exclude-media

# Import fájlból felhasználói beavatkozás nélkül
wp ai1wm import /var/backups/site.wpress --interactive=0
```

## Teljesítmény és tárhely

- **Szabad hely**: az export/import ideiglenes fájlokat is használ; célszerű a webhely méretének többszörösét szabadon hagyni.
- **Memória és futásidő**: ha a tárhely korlátoz, a bővítmény kis csomagokban dolgozik; nagyon nagy csomagokhoz szükség lehet a korlátokat feloldó kiegészítőre.
- **Jogosultságok**: a wp‑content/ai1wm‑backups könyvtárnak írhatónak kell lennie.

## Kiegészítők és Pro funkciók

- **Unlimited**: eltávolítja a feltöltési és futásidejű korlátok hatását, szerveroldali visszaállítást és bővített WP‑CLI funkciókat ad.
- **Pro**: ütemezett, automatikus mentések, titkosított átvitel és több mint tucatnyi felhőszolgáltató integrációja (például Drive, Dropbox, OneDrive, S3).
- **Multisite**: teljes hálózat vagy egyes aloldalak exportja/importja, klónozás, hálózat‑a‑hálózatban esetek támogatása.

## Hibakeresés és gyakori problémák

- **Feltöltési limit hiba**: nagy .wpress importnál a tárhely/PHP korlát lehet az akadály; használd az Unlimited kiegészítőt vagy WP‑CLI‑t.
- **„Out of disk space”**: szabadíts fel tárhelyet, töröld a régi mentéseket, és ellenőrizd az ideiglenes mappákat.
- **Jogosultság hiba**: állíts megfelelő írási jogot a mentéskönyvtárra.
- **Böngésző/szerver timeout**: próbáld kisebb részekre bontva, szerveroldali importtal vagy parancssorból.
- **Biztonság**: korábban jelentettek közepes súlyosságú XSS sebezhetőséget az import folyamattal összefüggésben, amit frissítéssel orvosoltak. Mindig a legfrissebb kiadást használd.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs külön adatbázis‑dump, fájl‑szinkron és kézi URL‑csere.
- **Kevesebb hiba**: a sorosított adatok biztonságosan frissülnek, a folyamat töredezetten fut, így stabil.
- **Rugalmasság**: működik gyenge tárhelyen, támogatja a felhőt és az automatizálást.
- **Gyors visszaállítás**: incidens után percek alatt visszaállhatsz.

## Kinek ajánlott?

- **Ügynökségeknek és szabadúszóknak**: gyakori klónozás, költöztetés, staging‑éles szinkron miatt.
- **Kisvállalkozásoknak és hobbi felhasználóknak**: egyszerű, megbízható mentés‑visszaállításra.
- **Multisite hálózatok üzemeltetőinek**: aloldalak mozgatása és hálózatkezelés miatt a kiegészítőkkel együtt különösen hasznos.

Ha szeretnéd, kérhetsz egy környezetedre szabott, parancsokkal és képernyőképekkel illusztrált runbookot is.