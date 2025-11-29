---
title: "WP All Import - ACF Add-On"
description: "ACF-mezők tömeges importja CSV/XML/Excel forrásból drag‑and‑drop felületen, ütemezéssel és fejlesztői bővíthetőséggel."
sidebar_label: "WP All Import - ACF Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Import – ACF Add‑On egy kiegészítő, amivel tetszőleges CSV, XML vagy Excel fájlodból közvetlenül az Advanced Custom Fields (ACF) mezőidbe importálhatsz adatot. Ha eddig kézzel töltöttél be ACF‑mezőket, ez a bővítmény órákat‑napokat spórol: az importfájl mezőit drag‑and‑drop módszerrel illesztheted az ACF mezőkhöz, és a folyamat ütemezhető, ismételhető, frissíthető.

## Hogyan működik röviden?

1. Indíts új importot, add meg a fájlt vagy URL‑t, válaszd ki a cél tartalomtípust (pl. bejegyzés, egyedi post type).
2. Nézd át a fájl szerkezetét, majd nyisd meg az ACF panelt.
3. Húzd rá a forrásmezőket az ACF mezőkre (Repeater, Flexible, Relationship stb. a Pro változatban).
4. Állíts be egy egyedi azonosítót (Unique Identifier), hogy a későbbi importok frissítsék a megfelelő rekordokat.
5. Futtasd az importot, ellenőrizd az eredményt az ACF mezőknél.

Megjegyzés: az ACF mezőcsoportokat előre hozd létre.

## Fő funkciók, magyarázattal

### Rugalmas források
- Importálhatsz helyi fájlból, URL‑ről, sőt táblázatokból is. A fájltípus felismerése automatikus.
- Nincs kötött oszlopnév‑ vagy sémaelvárás: a párosítást az importképernyőn végzed.

### Teljes ACF‑támogatás
- Az ingyenes add‑on az alap ACF‑mezőket kezeli.
- A Pro csomag a komplex mezőtípusokat is támogatja: **Repeater**, **Flexible Content**, **Relationship**, **Gallery**, **Google Maps**, dátumok stb., így hierarchikus/tömbös adatokat is be tudsz emelni kódolás nélkül.

### Képek és galériák
- Képek letöltése URL‑ről vagy a médiatárból; kiemelt kép beállítása, több kép galériába rendezése.
- Meglévő képek egyeztetése és metaadatok kezelése a duplikátumok csökkentéséhez.

### Ütemezés és szinkron
- Manuális vagy felhőalapú ütemezés: rendszeres újrafuttatás külső feedekhez.
- Frissítés Unique Identifier alapján: pontos illesztés és szelektív mezőfrissítés (pl. csak képek, csak bizonyos custom fieldek).

### Nagy fájlok, megbízható futás
- Automatikus darabolás, újrapróbálkozás és képfeldolgozási opciók a time‑out kockázatának mérséklésére.

### Fejlesztői bővíthetőség
- Inline PHP‑t hívhatsz a térképezésben adattisztításra/átalakításra.
- Add‑on API és szűrők segítségével egyedi ACF mezőtípusokat is támogathatsz.

Példa inline PHP hívásra a térképezésben:
```
{ normalize_phone([telefon]) }
```
ahol a normalize_phone saját függvényed, ami egységesíti a számformátumot.

### Kapcsolódó export
- Az ACF Export Add‑On‑nal az ACF adataidat CSV/XML formátumba exportálhatod tömeges szerkesztéshez vagy migrációhoz.

## Gyakorlati példák

- Ingatlanlista frissítése: hetente érkező CSV‑ből frissíted a lakások ACF mezőit (ár, alapterület, elhelyezkedés Google Maps mezőben, galéria képek). A Unique Identifier a hirdetés külső azonosítója.
- Portfólió migráció: Excel táblából betöltöd projektek Flexible Content blokkjait (szekciók, képgalériák, idézetek) úgy, hogy a szekciók sorrendje és tartalma megmarad.
- Állásportál feed: XML‑ből Relationship mezőbe társítod a pozíciókat a városok taxonómiájához, és Repeater mezőben listázod az elvárásokat.

## Előnyök és értékajánlat

- Jelentős időmegtakarítás: a kézi ACF‑kitöltést automatizálja.
- Adatminőség: beépített egyeztetés, képfeldolgozás, inline PHP az adattisztításhoz.
- Skálázhatóság: nagy fájlok, gyakori frissítések, ütemezett futások.
- Kódmentes komplexitás: Repeater/Flexible import kódolás nélkül a Pro funkciókkal.
- Megismételhetőség: stabil Unique Identifierrel megbízható frissítési folyamatot kapsz.

## Kinek ajánlott?

- Ügynökségeknek és fejlesztőknek, akik ACF‑alapú webhelyeket migrálnak vagy tartalmat szinkronizálnak.
- E‑kereskedelmi, ingatlan‑, állás‑ vagy katalógusoldalak üzemeltetőinek, akik külső feedekből dolgoznak.
- Tartalomkezelőknek, akik rendszeresen kapnak Excel/CSV adatokat, és azokat ACF‑mezőkbe szeretnék bevinni.

## Legjobb gyakorlatok és tippek

- **Unique Identifier**: mindig külső, stabil azonosítót használj (pl. SKU, külső ID), hogy a frissítések pontosak legyenek.
- **Szelektív frissítés**: ismételt futtatásnál csak azt jelöld, amit tényleg módosítani akarsz (pl. ár, készlet, képek).
- **Képek**: ha a forrás URL változhat, kapcsold ki a képek megtartását, hogy újra letöltődjenek; az első képet jelöld kiemeltnek.
- **Ütemezés**: ha nem kezelnél szerver‑cron beállításokat, válassz felhőalapú ütemezést a gondozásmentes futtatáshoz.
- **Adattisztítás**: használd az inline PHP‑t normalizálásra (dátumok, pénznemek, telefonszámok).

## Korlátok és előfeltételek

- Az ACF mezőcsoportokat előre létre kell hozni (a bővítmény nem hoz létre field groupokat).
- Az ingyenes add‑on csak az alap ACF mezőket támogatja; a komplex mezőtípusokhoz a Pro funkciók szükségesek.
- Szerverkörnyezeted beállításai befolyásolják a nagy importok teljesítményét; érdemes megfelelő erőforrást biztosítani.

## Gyors indulás – mintafolyamat

1. Készítsd elő az ACF mezőcsoportokat a kívánt mezőkkel.
2. Indíts új importot, töltsd fel a CSV/XML/Excel fájlt vagy add meg az URL‑t.
3. ACF panelen húzd rá a forrásmezőket az ACF mezőkre; komplex mezők esetén kövesd a mezőstruktúrát.
4. Állíts be Unique Identifiert, majd futtasd az importot.
5. Ellenőrizd a bejegyzéseket, szükség esetén finomhangold a szelektív frissítést és az ütemezést.

Ezzel az eszközzel megbízható, skálázható és fejlesztőbarát módon tudsz ACF‑mezőket adatforrásaidból naprakészen tartani.