---
title: "All-in-One WP Migration Dropbox Extension"
description: "Prémium kiegészítő, amellyel teljes WordPress‑mentéseket és visszaállításokat készíthetsz közvetlenül a Dropboxra/Dropboxból, ütemezéssel, inkrementális mentéssel és WP‑CLI támogatással."
sidebar_label: "All-in-One WP Migration Dropbox Extension"
---

## Mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration Dropbox Extension egy prémium kiegészítő, amely közvetlen, natív kapcsolatot ad a Dropbox és az All‑in‑One WP Migration bővítmény közé. Segítségével a teljes webhelyedet (fájlok + adatbázis) egy kattintással exportálhatod a Dropboxra, és onnan importtal vissza is állíthatod. Ezzel kiváltod a kézi fájlmásolást, az adatbázis‑dumpokat, az FTP‑zést, és megkapod az off‑site mentések kényelmét és biztonságát.

Tipikus gondokra ad megoldást:
- Elveszett adatok vagy hibás frissítések esetén gyors visszaállítás
- Automatikus, rendszeres mentések külön tárolási helyre (off‑site)
- Nagy webhelyek gazdaságos, inkrementális mentése
- Migráció egyik tárhelyről a másikra néhány lépésben

## Fő funkciók, érthetően

### Közvetlen export és import Dropboxra/Dropboxból
- **Export**: a webhelyedből .wpress archívum készül, amit a kiegészítő közvetlenül a Dropbox kijelölt mappájába tölt fel.
- **Import**: a Dropbox‑fiókodból kiválaszthatod a mentést, és egy lépésben visszaállíthatod a webhelyet.

Mit jelent ez neked? Nem kell ZIP‑pakolással, adatbázis‑dumpokkal, FTP‑vel foglalkoznod, minden egy helyen, megbízhatóan működik.

### Ütemezett mentések (Schedules)
- Beállíthatsz **napi/heti/havi** mentéseket.
- **Megőrzési szabályokkal** limitálhatod, hány mentést tartson meg a rendszer.
- **E‑mail értesítéseket** kérhetsz a futásokról.
- Kijelölheted a **Dropbox célmappát**, így rendszerezve maradnak a mentéseid.

### Inkrementális mentés
- Az első futás teljes mentés, utána csak a **változások** kerülnek a csomagba.
- Ezzel jelentősen csökkented a **sávszélesség‑igényt**, gyorsabbak a mentések, és kevesebb tárhelyet használsz a Dropboxon.

### WP‑CLI integráció
- Scriptelhető, parancssoros mentés és (környezettől függően) visszaállítás.
- Hasznos kapcsolók: például **--exclude-media** (médiakönyvtár kihagyása), **--sites** (multisite aloldalak kijelölése), spam/előzmények kihagyása.

Példa parancsokra:
```
# Teljes mentés Dropboxra
wp ai1wm dropbox backup

# Mentés média kihagyásával és kijelölt multisite aloldalakkal
wp ai1wm dropbox backup --exclude-media --sites=2,3
```

### Admin felületbe épülő beállítások
- **Dropbox‑kapcsolat** egyszerű OAuth‑bejelentkezéssel.
- **Célmappa** kiválasztása, **kvóta/megőrzés** és **értesítések** konfigurálása.
- Minden a fő bővítmény menüjében, egységes felületen.

### Pro csomagképességek
- Fejlettebb ütemező, **felhőátviteli titkosítás**, WP‑CLI támogatás és az úgynevezett **méretkorlát‑kerülő** komponens nagy importokhoz. Nagy webhelyeknél életmentő a szerveres korlátok megkerüléséhez.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld az **All‑in‑One WP Migration** alappővítményt.
2. Töltsd fel és aktiváld a **Dropbox Extensiont** (vagy a Pro csomagot).
3. A bővítmény menüjében nyisd meg a **Dropbox Settings** részt, és jelentkezz be a Dropbox fiókba (OAuth).
4. Állítsd be a **célmappát**, az **ütemezéseket**, a **megőrzést** és az **értesítéseket**.
5. Futtass egy **teszt exportot** a Dropboxra, majd próbálj meg egy **importot**.

## Gyakorlati példák

- **Időzített off‑site mentés**: beállítasz egy napi exportot 02:00‑ra, megőrzéssel az utolsó 14 mentésre, e‑mail értesítéssel. Ha bármi gond történik napközben, 1 kattintással visszaállhatsz a hajnali állapotra.
- **Költöztetés új tárhelyre**: a régi helyen export Dropboxra, az új helyen import Dropboxból. Nem kell hozzá FTP vagy adatbázis‑kezelés.
- **Staging frissítés**: stagingen futtatod az importot Dropboxból, frissítesz, tesztelsz. Ha minden rendben, a produkcióra is importálsz.
- **Nagy site inkrementális mentése**: első teljes mentés után napi inkrementálisok futnak, alacsony adatforgalommal.

## Előnyök és értékajánlat

- **Időmegtakarítás**: egy felületen intézhetsz mindent (export, feltöltés, import).
- **Kevesebb hibalehetőség**: nem kell kézzel szétbontani a folyamatot fájlokra és adatbázisra.
- **Off‑site biztonság**: a mentésed nem a webszerveren van.
- **Költséghatékonyság**: inkrementális mentéssel kisebb csomagok, kisebb sávszélesség.
- **Automatizáció**: ütemezések, e‑mailek, WP‑CLI a nap végi rutinokhoz és CI/CD‑hez.

## Kinek ajánlott?

- **Weboldal‑üzemeltetők és kisvállalkozások**: egyszerű, megbízható, beállítod és megy.
- **Ügynökségek és karbantartási szolgáltatók**: több oldal, egységes mentési fegyelem, automatizálható folyamatok.
- **Fejlesztők/DevOps**: WP‑CLI integráció, scriptelhetőség, staging‑/prod szinkron.
- **Nagy forgalmú site‑ok**: inkrementális mentés és méretkorlát‑kezelés miatt.

## Kompatibilitás és korlátok

- **Dropbox API korlátok**: kvóta, aránylimit és jogosultságok befolyásolhatják a futást. Hiba esetén a hibaüzenet megmutatja a teendőt.
- **Plugin‑ütközések**: egyes bővítmények zavarhatják az export/import folyamatot; ha gond van, próbáld ki üres témával és minimális pluginnal.
- **Szerverkorlátok**: nagy importoknál hasznos lehet a Pro csomag méretkorlát‑kezelése.
- **Tárhely**: figyeld a Dropbox szabad kapacitását és a megőrzési szabályokat.

## Biztonság és karbantartás

- **Tarts mindent naprakészen** (alap plugin és kiegészítők), múltban volt releváns sebezhetőség, amelyet frissítéssel orvosolt a fejlesztő.
- **Korlátozd a hozzáférést**: csak megbízható adminok indítsanak importot.
- **Titkosítás**: a Pro csomag felhőátviteli titkosítást kínál.
- **Rendszeres próbavisszaállítás**: időnként teszteld, hogy a mentések tényleg visszaállíthatók.

## Döntési segéd: kell ez neked?

- Ha szeretnél megbízható, automatizált, off‑site mentést a WordPressedhez: **igen**.
- Ha gyakran költöztetsz vagy klónozol site‑okat: **igen**.
- Ha parancssorral és CI/CD‑vel dolgozol: **igen**.
- Ha elég az alkalmi kézi export és nem kell felhő, ütemezés vagy inkrementális mentés: **lehet, hogy az alap plugin elég**, a Dropbox kiegészítő akkor ad hozzáadott értéket, ha felhős automatizálást is akarsz.