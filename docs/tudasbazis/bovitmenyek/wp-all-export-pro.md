---
title: "WP All Export Pro"
description: "Professzionális WordPress export bővítmény, amellyel bármilyen adatot testre szabott CSV, Excel vagy XML formátumba vihetsz ki, ütemezéssel, valós idejű futással és integrációkkal."
sidebar_label: "WP All Export Pro"
---

## Mi ez és milyen problémát old meg?

A **WP All Export Pro** egy haladó export bővítmény WordPresshez. Segítségével a WordPress „adatrengetegét” – bejegyzéseket, egyedi mezőket, taxonómiákat, felhasználókat, WooCommerce adatokat és még sok mást – egységes, testre szabott **CSV**, **Excel (XLS/XLSX)** vagy **XML** fájlba rendezheted. Megoldja a széttagolt adatok összegyűjtését, a **nagy adatmennyiségek** stabil exportját, a **WooCommerce rendelési tételek** elérését, és az **automatizált** (ütemezett vagy valós idejű) adatáramlást külső rendszerek felé.

Fejlesztője a **Soflyy**, a WP All Import / Export termékcsalád készítője.

## Hogyan működik röviden?

1. Indíts új exportot, válaszd ki a forrást (pl. bejegyzések, termékek, rendelések, felhasználók).
2. A **drag-and-drop** felületen jelöld ki a mezőket, nevezd át, rendezd át, kombináld őket.
3. Állíts be **szűrőket** (pl. státusz, dátum, ár > 10 000), válaszd ki a formátumot és a haladó beállításokat.
4. Futtasd az exportot, töltsd le a fájlt, vagy **ütemezd** automatikus futásra; igény szerint **valós idejű** exportot is bekapcsolhatsz.
5. Migrációhoz vagy visszaimportáláshoz használd az **Export Bundle** csomagot (adat + import sablon).

## Fő funkciók részletesen

### Formátumok és sablonozás
- **CSV, XLS/XLSX, XML** támogatás.
- XML-nél saját **séma** építése, címkék és struktúra szabad kialakítása.
- Sablonban tetszőlegesen **átnevezheted**, **átrendezheted**, vagy **összefűzheted** a mezőket.

### Haladó szűrők
- Feltételek: **tartalmaz**, **egyenlő**, **nagyobb/kisebb**, **üres/nem üres**, dátumintervallumok, stb.
- Több feltétel kombinálása logikai operátorokkal a pontos célzáshoz.

### Ütemezés és valós idejű futtatás
- **Ütemezett export**: futtasd meghatározott időközönként, manuális cron vagy beépített automatikus ütemezés segítségével.
- **Valós idejű export**: új rekord létrejöttekor azonnali fájlgenerálás és eseményindítás (pl. rendelés beérkezésekor).

### Nagy adatmennyiség kezelése
- **Iterációk**, **fájl-darabolás**, **BOM** beállítás.
- Csak **új vagy módosított** rekordok exportja az inkrementális folyamatokhoz.

### WooCommerce és add-onok
- WooCommerce: **termékek**, **rendelések**, **vásárlók**, **kuponok**, **értékelések** exportja; rendelési **tételek** részletei is kinyerhetők.
- Kiegészítők: **ACF**, **Meta Box**, **JetEngine**, **Gravity Forms**, **Users** – az ezek által létrehozott összetett mezők (képek, repeaterek, relációk) is drag-and-drop módon exportálhatók.
- Beépített termékfeed-sablonok, pl. **Google Merchant Center**.

### Fejlesztői testreszabás
- Saját **PHP-függvények** az export során, **hookok** és actionök (pl. export utáni események).
- Példa egyedi formázásra:

```php
// functions.php
function my_export_format_price($price) {
  return number_format((float)$price, 2, '.', '');
}
```

Az export mező képletében:
```
=my_export_format_price({_price})
```

### Kliens mód és jogosultságok
- **Client Mode**: nem admin felhasználók is futtathatnak és letölthetnek előre beállított exportokat, korlátozott felületen.

### Többnyelvűség
- **WPML** támogatás: exportálás nyelv szerint, többnyelvű tartalom kezelése.

## Gyakorlati példák

- **Havi könyvelési export WooCommerce-ből**: szűrd az adott hónap rendeléseit, add hozzá a rendelési tételeket és ÁFA-mezőket, mentsd Excelbe, majd ütemezd havi ismétlődésre. A kész fájl mehet automatikusan megosztott tárhelyre vagy e-mailre.
- **Termékfeed Google Merchant Centerhez**: válaszd a beépített feed-típust, illeszd a kötelező attribútumokat (title, price, availability), és állíts be napi frissítést.
- **Adattisztítás és tömeges szerkesztés**: exportáld a bejegyzéseket/termékeket táblázatba, tisztítsd az adatokat (pl. címkézés, árazás), majd töltsd vissza a módosításokat a WP All Importtal.
- **Valós idejű rendelés-integráció**: új rendelésnél azonnal generálj exportfájlt és továbbítsd külső teljesítési rendszernek.
- **Migráció egyik oldalról a másikra**: készíts **Export Bundle** csomagot, a céloldalon az import sablon mindent automatikusan beállít.

## Előnyök és értékajánlat

- **Időmegtakarítás**: percek alatt összeállítható export-sablonok.
- **Rugalmasság**: bármilyen adatmező és komplex struktúra kezelhető.
- **Megbízhatóság nagy adatmennyiségnél**: darabolás, iterációk, inkrementális export.
- **Kevesebb egyedi fejlesztés**: Zapier és sablonok révén kattintásos integrációk.
- **Üzleti folyamatok automatizálása**: ütemezett és valós idejű futásokkal a manuális lépések kiválthatók.

## Kinek ajánlott?

- **Webáruház-tulajdonosok és operáció**: riportok, könyvelési exportok, logisztikai integrációk.
- **Marketing és marketplace menedzsment**: termékfeedek, ár- és készlet-szinkron.
- **Ügynökségek és fejlesztők**: migrációk, staging–éles adatátadás, testreszabott exportok.
- **BI/pénzügy**: rendszeres, formátum-helyes adatkinyerés táblázatokba vagy adatcsatornákba.
- **Site adminok**: jogosultságkezelt kliens-felület egyszerű exportfeladatokhoz.

## Korlátok és megjegyzések

- Nem teljes körű „**site backup**” eszköz: post típusonként exportálj; fájlrendszer és adatbázis mentés külön téma.
- **Automatic Scheduling** használatakor metaadatok (pl. export azonosító és ütemezés) biztonságos csatornán kerülnek továbbításra a szolgáltatás felé.
- Modern WordPress és PHP környezetekkel kompatibilis; a Pro a jól ismert ingyenes alapra épül.

## Összegzés

A **WP All Export Pro** egy kiforrott, skálázható és integrációbarát megoldás, amellyel a WordPress-adatokat pontosan olyan struktúrában exportálhatod, ahogy az üzleti folyamataid megkívánják. Ha rendszeres riportokra, megbízható feedekre, valós idejű adatáramlásra vagy fejlesztőbarát testreszabásra van szükséged, ez az eszköz gyors és stabil választ ad.