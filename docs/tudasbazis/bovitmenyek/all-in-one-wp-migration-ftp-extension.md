---
title: "All-in-One WP Migration FTP Extension"
description: "Hivatalos kiegészítő az All‑in‑One WP Migration pluginhez: közvetlen FTP‑re exportálhatsz és onnan importálhatsz .wpress mentéseket, ütemezéssel és retencióval."
sidebar_label: "All-in-One WP Migration FTP Extension"
---

## Bevezetés: mi ez és milyen problémát old meg?

Az All‑in‑One WP Migration FTP Extension a ServMask hivatalos, fizetős kiegészítője, amely az alap All‑in‑One WP Migration bővítményhez ad **FTP‑kapcsolatot**. A lényege, hogy a WordPress adminból, külön FTP kliens nélkül, **egyetlen felületen** exportálhatsz biztonsági mentést **közvetlenül FTP tárhelyre**, és ugyanonnan **importálhatsz**. Ezzel egyszerűvé válik az off‑site mentés, a tárhelyek közötti költöztetés, valamint az ügynökségi, központi mentési folyamatok.

## Hogyan működik röviden?

- Telepíted és aktiválod az alap All‑in‑One WP Migration plugint, majd az FTP Extensiont.
- Az FTP elérés adatait megadod az FTP Settings oldalon.
- Exportáláskor „FTP” célpontot választasz; importáláskor „FTP” forrást.
- Az extension az FTP‑n egy „[weblapnev]-wordpress” mappába dolgozik, ide kerülnek a **.wpress** archívumok.

```
Beállítás: All‑in‑One WP Migration → FTP Settings
Export:   All‑in‑One WP Migration → Export → Export to → FTP
Import:   All‑in‑One WP Migration → Import → Import from → FTP
```

## Fő funkciók részletesen

- **FTP célpont az Export/Import nézetben**
  - Az All‑in‑One WP Migration menüben új „FTP” opció jelenik meg. Exportnál a mentés automatikusan az FTP‑re töltődik fel; importnál az FTP‑n elérhető archívumokból választhatsz. A bővítmény az FTP‑n egy „[weblapnev]-wordpress” mappát kezel, így a mentéseid rendezettek maradnak.

- **Ütemezett automatikus mentések**
  - Óránkénti, napi, heti vagy havi futtatást állíthatsz be. A futásokról **e‑mail értesítést** kérhetsz, így azonnal látod, ha egy mentés sikeres vagy hibás. Az ütemező az FTP célra is működik: a rendszer a beállított időpontokban feltölti az új archívumot.

- **Retenció és tárhelykorlátok**
  - Meghatározhatod, hány legutóbbi mentés maradjon meg (darabszám), és beállíthatsz **összméret‑limitet** is az FTP tárolón. Ezzel megelőzöd, hogy a tárhely beteljen, és automatikusan karcsú, fenntartható mentéskészletet tartasz.

- **Export finomhangolása**
  - Az alapplugin összes export opciója elérhető: **Find & Replace** az adatbázisban (pl. domain csere), **kizárások** (cache könyvtárak, spam, inaktív bővítmények), valamint **jelszavas védelem** a .wpress archívumra. Így kisebb, tisztább és biztonságosabb mentést készíthetsz.

- **Import előtti ellenőrzés**
  - Importálásnál a rendszer egyértelmű figyelmeztetést ad, hogy a webhely (adatbázis, média, témák, bővítmények) **felülírásra kerül**. Csak megerősítés után indul a visszaállítás, csökkentve a véletlen overwrite kockázatát.

- **Multisite és nagy importok megjegyzések**
  - Hálózati (network) környezetben is használható az FTP‑kezeléshez, de teljes multisite migrációhoz külön kiegészítő szükséges. Nagy méretű importoknál a szerver PHP korlátjai gondot okozhatnak; erre külön kiegészítő kínál megoldást, amely a feltöltési és időkorlátokat megkerüli.

## Gyakorlati példák

- **Off‑site biztonsági mentés saját FTP‑re**: óránkénti ütemezéssel minden változásod kikerül egy különgépre, jelszóval védett .wpress fájlokban.
- **Költöztetés FTP‑n keresztül**: forrás tárhelyen exportálás FTP‑re, cél tárhelyen importálás ugyanarról az FTP‑ről – nincs kézi letöltés/feltöltés.
- **Ügynökségi központi backup**: több ügyféloldal ugyanarra a központi FTP‑re ment ütemezetten, retencióval és méretlimittel.
- **Szabályozott környezet**: amikor felhő nem használható, az on‑prem FTP a kijelölt biztonsági tár hely – a bővítmény ezt natívan kezeli.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs külön FTP kliens, nincs kézi fájlmozgatás – minden a WP adminból megy.
- **Kevesebb hiba**: ütemezés, e‑mail értesítés és retenció automatizálja a rutint.
- **Tárhely‑kontroll**: darabszám és összméret limit a túlcsordulás ellen.
- **Konzisztens formátum**: egységes **.wpress** archívumok, bárhol visszaállíthatók az ökoszisztémán belül.
- **Biztonság**: jelszóval védett mentések, földrajzilag elkülönített tárolás.

## Telepítés és első lépések

1. Telepítsd és aktiváld az All‑in‑One WP Migration alap bővítményt.
2. Töltsd fel és aktiváld az „all‑in‑one‑wp‑migration‑ftp‑extension.zip” fájlt.
3. Menj az All‑in‑One WP Migration → FTP Settings oldalra, add meg az **FTP host**, **felhasználó**, **jelszó**, **célmappa** adatokat.
4. Állíts be **ütemezést**, **retenciót** és **e‑mail értesítést** igény szerint.

## Követelmények és kompatibilitás

- Az alap All‑in‑One WP Migration plugin kötelező előfeltétel.
- Legyen elég tárhely az FTP‑n és megfelelő fájl‑/mappajogosultság a WordPress alatt.
- Nagy importoknál a szerver feltöltési és időkorlátjai ütközhetnek; ilyen esetekre létezik korlátokat megkerülő kiegészítő.
- Bizonyos bővítményekkel ütközhet (pl. SSL/URL‑átíró megoldások). Export/import előtt érdemes ezeket ideiglenesen kikapcsolni.
- Az ütemező központilag kezelhető, és a távoli tárolókra (így **FTP**‑re) is működik.

## Kinek ajánlott?

- **Webhelytulajdonosoknak**, akik egyszerű off‑site mentést szeretnének.
- **Ügynökségeknek**, több ügyféloldal központi, szabályozott backupjához.
- **Rendszergazdáknak**, kontrollált, on‑prem FTP alapú környezetekben.
- **Fejlesztőknek/DevOps csapatoknak**, staging‑production munkafolyamatokhoz.

## Tippek és jó gyakorlatok

- Állíts be reális **retenciót** (pl. 7–14 nap) és **összméret‑limitet** a tárhely védelmére.
- Használd a **kizárásokat** (cache, spam, inaktív bővítmények) a kisebb, gyorsabb mentésekért.
- Kapcsold be a **jelszavas védelmet** az archívumokra.
- Időnként végezz **teszt‑visszaállítást** staging környezetben.
- Import előtt kapcsold ki az esetlegesen ütköző SSL/URL‑átíró bővítményeket; import után vissza.

--- 

Az All‑in‑One WP Migration FTP Extension akkor a legerősebb, ha automatizált, megbízható, FTP‑alapú mentést és visszaállítást keresel egyetlen, kézre álló WordPress felületen, kompromisszumok nélkül.