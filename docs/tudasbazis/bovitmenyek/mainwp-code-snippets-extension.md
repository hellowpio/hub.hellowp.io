---
title: "MainWP Code Snippets Extension"
description: "Központi PHP-kódrészlet-kezelés a MainWP Dashboardból: snippetek futtatása, tárolása és wp-config módosítások több gyermekoldalon."
sidebar_label: "MainWP Code Snippets Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Code Snippets Extension egy MainWP-kiegészítő, amellyel egyetlen vezérlőpultból adhatsz hozzá, futtathatsz és kezelhetsz PHP-kódrészleteket bármennyi kapcsolt WordPress „Child” webhelyen. Nem kell többé mindegyik oldalra külön belépni, fájlokat szerkeszteni vagy FTP-zni: központilag, auditálható módon tudod érvényesíteni a módosításokat. Ez különösen hasznos, ha sok webhelyen kell egységes biztonsági beállításokat, gyorsjavításokat vagy kisebb funkcionális módosításokat kiteríteni.

## Fő funkciók és működés

### 1) Execute function on Child site
- Mit csinál: a snippetet a gyermekoldal adatbázisába menti, és minden oldalbetöltéskor futtatja.
- Mire jó: tartós viselkedésbeli változtatásokra (például admin felirat módosítása, szűrők/akciók hozzáadása).
- Mit érdemes tudni: a kód minden kérésnél lefut, ezért legyen idempotens és biztonságos. Ha gondot okoz, adatbázisból kapcsolható ki (lásd lent).

### 2) Return information from Child site
- Mit csinál: egyszer lefuttatja a kódot a kiválasztott oldalakon, és az eredményt visszaadja a vezérlőpultban.
- Mire jó: gyors állapotlekérdezésekre, diagnosztikára (például bejegyzésszám, opciók kiolvasása).
- Mit érdemes tudni: nem ment tartós kódot a gyermekoldalra.

### 3) Edit the wp-config.php file
- Mit csinál: közvetlenül a wp-config.php fájlhoz ad beállításokat.
- Mire jó: tartós konfigurációkhoz (például memória-limit, WP-Cron kikapcsolása, fájlszerkesztő tiltása).
- Mit érdemes tudni: a módosítások visszavonásához kézi fájlszerkesztés szükséges.

### Tömeges célzás és mentett snippetek
- Tömeges végrehajtás: választhatsz konkrét webhelyeket (Sites) vagy site-címkéket (Tags). A két módszer kizárja egymást; váltáskor az előző hozzárendelés törlődik.
- Snippet-könyvtár: a gyakran használt kódok menthetők és bármikor újrafelhasználhatók.
- Kódszerkesztő és visszajelzés: beépített, szintaxiskiemeléses szerkesztő és futási kimenet/napló segíti a munkát.

## Gyakorlati példák

### Tartós viselkedés beállítása (Execute function on Child site)
Admin lábléc szöveg testreszabása minden gyermekoldalon:
```php
add_filter('admin_footer_text', function () {
  return 'Üzemeltetve a te csapatod által – központilag menedzselt snippet';
});
```

### Információ lekérése (Return information from Child site)
Publikált bejegyzések száma gyorsan, több site-ról:
```php
echo 'Bejegyzések száma: ' . (int) wp_count_posts()->publish;
```
A futtatás után az eredmények a vezérlőpultban, oldalanként jelennek meg.

### Tartós konfiguráció wp-config-ban (Edit the wp-config.php file)
Fájlszerkesztő tiltása:
```php
if (!defined('DISALLOW_FILE_EDIT')) {
  define('DISALLOW_FILE_EDIT', true);
}
```
Memória-limit növelése:
```php
if (!defined('WP_MEMORY_LIMIT')) {
  define('WP_MEMORY_LIMIT', '256M');
}
```
WP-Cron kikapcsolása:
```php
if (!defined('DISABLE_WP_CRON')) {
  define('DISABLE_WP_CRON', true);
}
```

## Munkafolyamat röviden

1. Nyisd meg a MainWP Dashboardban az Extensions > Code Snippets > Execute Snippet oldalt.
2. Adj címet és leírást, válaszd ki a futtatási módot.
3. Válaszd ki a célzott site-okat vagy a címkéket (Sites és Tags közül egyszerre csak az egyik használható).
4. Illeszd be a kódot a szerkesztőbe.
5. Dönts a mentésről (Save Snippet) és/vagy futtatásról (Save & Execute).
6. Ellenőrizd a futási kimenetet és szükség esetén ismételd meg több site-on.

## Előnyök és értékajánlat

- Idő- és költségmegtakarítás: egy művelettel tucatnyi vagy száz oldal frissíthető.
- Konzisztencia: ugyanaz a kód mindenhol azonos módon kerül alkalmazásra.
- Kockázatcsökkentés: nincs szükség kézi fájlszerkesztésre vagy FTP-re; központi, dokumentált futtatás.
- Rugalmasság: három futtatási mód a legtöbb esetre lefedi az igényt (folyamatos funkció, egyszeri lekérdezés, tartós konfiguráció).
- Újrafelhasználhatóság: mentett snippetekkel kialakíthatod a saját „mini eszköztáradat”.

## Kinek ajánlott?

- WordPress ügynökségeknek, akik sok ügyféloldalt kezelnek.
- Freelancereknek, akik rendszeresen hajtanak végre kisebb módosításokat több webhelyen.
- DevOps/üzemeltetési csapatoknak, akik egységes biztonsági és teljesítménybeállításokat szeretnének kiteríteni.
- Olyan fejlesztőknek, akik „mini plugineket” szeretnének gyorsan és központilag teríteni.

Ha egyetlen site-ot kezelsz és ritkán van szükséged kódos módosításokra, ez a kiegészítő túlzás lehet. Több site esetén viszont hatalmas gyorsítást és kontrollt ad.

## Biztonsági megfontolások és visszavonás

- Haladó eszköz: csak olyan kódot futtass, amit értesz és teszteltél, lehetőleg először staging környezetben.
- A „Child site-on futtatás” mód a kódot az adatbázisban tárolja és minden oldalkéréskor futtatja; ügyelj a teljesítményre és biztonságra.
- Visszavonás:
  - Ha egy tartós snippet problémát okoz és az adatbázisban van tárolva, a gyermekoldal wp_options táblájából törölhetők a kapcsolódó bejegyzések (például: mainwp_ext_snippets_enabled, mainwp_ext_code_snippets).
  - Ha a wp-config.php fájl módosult, a visszaállítás kézi fájlszerkesztést igényel.
- Jó gyakorlat: először futtasd a snippetet 1–2 tesztoldalon, csak utána címkék alapján skálázd fel.

Ezzel a kiegészítővel a kódrészletek valódi, központi menedzsmenteszközzé válnak: gyorsan bevetheted őket, könnyen újrahasznosíthatod, és kontrolláltan tarthatod a teljes WordPress-flottát.