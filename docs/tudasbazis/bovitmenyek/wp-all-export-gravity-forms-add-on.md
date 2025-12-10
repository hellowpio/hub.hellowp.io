---
title: "WP All Export - Gravity Forms Add-On"
description: "Kiegészítő a Gravity Forms űrlapbejegyzéseinek rugalmas exportálásához CSV, Excel vagy XML formátumba a WP All Export felületéről."
sidebar_label: "WP All Export - Gravity Forms Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Export – Gravity Forms Add‑On egy kiegészítő, amellyel a Gravity Forms űrlapbejegyzéseit profi módon, teljesen testreszabhatóan exportálhatod. Megoldja a beépített Gravity Forms export korlátait: szabadon építhetsz oszlopstruktúrát, több formátum közül választhatsz, szűrhetsz, időzíthetsz, és integrálhatsz külső rendszerek felé. Ha unod a kézi exportálást, és pontos, automatizált riportokra vagy adatfolyamokra van szükséged, ez az add‑on a hiányzó láncszem.

Fejlesztője a Soflyy, és a WP All Export Pro ökoszisztémába illeszkedik. Használatához aktív WordPress, Gravity Forms és WP All Export (gyakorlatban a Pro) szükséges.

## Hogyan működik? – Rövid áttekintés

1. Lépj az adminban az All Export › New Export menübe.  
2. Válaszd a “Gravity Forms Entries” adatforrást, majd azt az űrlapot, amelynek bejegyzéseit exportálni szeretnéd.  
3. Állítsd össze drag & drop módszerrel a kimeneti oszlopokat: elérhető az Entry Data, az Entry Notes és az Entry Meta is.  
4. Válaszd ki a formátumot (CSV, Excel, XML), és állítsd be a haladó opciókat.  
5. Adj meg szűrőket (például dátum, státusz, mezőérték alapján).  
6. Futtasd az exportot, töltsd le a fájlt, vagy időzítsd automatikus futásra.  
7. Igény szerint kapcsold integrációkhoz (például automatizálás Zapierrel).

## Fő funkciók, érthetően

- Formátumok és egyéni sémák  
  Exportálhatsz CSV-be, Excelbe (XLS/XLSX) vagy XML-be. XML esetén teljesen egyedi struktúrát állíthatsz össze, így bármilyen külső rendszer követelményeihez igazodhatsz.

- Drag & drop mezőleképezés  
  Szabadon határozhatod meg az oszlopok sorrendjét és nevét, sőt több mezőt is összevonhatsz egy oszlopba (például “Név” = Keresztnév + Vezetéknév). Ezzel a kimenetet pontosan a feldolgozó fél igényeihez igazíthatod.

- Teljes mezőtípus-támogatás  
  Minden Gravity Forms mezőtípust kezel: többválasztós, listás, jelölőnégyzetes, fájlfeltöltés, poszt‑mezők stb. A komplex mezők is konzisztensen kinyerhetők, így nem kell utólag kézzel “szétbontanod” az adatokat.

- Szűrés és szelekció  
  Rugalmas feltételrendszert kapsz: exportáld például csak a “Fizetve” státuszú bejegyzéseket az elmúlt 30 napból, vagy azokat, ahol egy mező értéke meghalad egy küszöböt.

- Időzített exportok  
  Állíts be automatikus futtatást (cron vagy szolgáltatás), és kapj rendszeres riportokat (pl. heti Excel) emberi beavatkozás nélkül.

- Integrációk és automatizálás  
  Kapcsolódhatsz több száz külső alkalmazáshoz automatizációs szolgáltatásokon keresztül. Így például feltöltheted a kimenetet táblázatkezelőbe, felhőbe vagy elküldheted emailben – teljesen automatizált folyamatként.

- Fejlesztői eszközök (PHP, hookok)  
  A kimenetet export közben PHP-val transzformálhatod: formázás, normalizálás, egyéni logika. A dokumentált hook-okkal finomhangolhatod a folyamatokat.

- Nagy adatmennyiség és “Bundle”  
  Stabilan működik nagy elemszámnál is. Készíthetsz “Bundle” csomagot, amellyel később visszaimportálhatod vagy migrálhatod az adatokat.

- Specifikus GF-adattartományok  
  Külön panelen éred el az Entry Data-t (mezőértékek), az Entry Notes-t (naplójegyzetek) és az Entry Meta-t (technikai/meta adatok), így mindent strukturáltan tudsz exportálni.

## Gyakorlati példák

- Heti vezetői riport  
  Időzíts egy exportot, ami minden hétfőn Excel állományt generál az előző hét lead-jeiről (csak “Érvényes” bejegyzések), és továbbítja a csapatnak.

- Google Sheets frissítés automatizáltan  
  Az export eredményét egy automatizációs láncon keresztül folyamatosan töltheted egy táblázatba, így az értékesítés mindig a legfrissebb adatokkal dolgozik.

- Migráció és tömeges szerkesztés  
  Exportáld a bejegyzéseket, módosítsd a táblázatban (például egységesítsd a mezőértékeket), majd importáld vissza a WP All Importtal.

- Audit és naplózás  
  Exportáld az Entry Notes-ot és Meta-t is, hogy átlásd, ki mikor, milyen változtatást végzett az űrlapbejegyzéseken.

## PHP-transzformáció példa

Használd a beépített Function Editort a kimenet formázására:

```
function normalize_phone($phone) {
  $digits = preg_replace('/\D+/', '', $phone);
  if (strlen($digits) >= 9) {
    return '+36 ' . substr($digits, 0, 2) . ' ' . substr($digits, 2);
  }
  return $phone;
}
```

Ezt a függvényt a mezőhöz rendelve már normalizált telefonszám kerül az exportfájlba.

## Előnyök és értékajánlat

- Időmegtakarítás: a kézi, ismétlődő exportfolyamatokat kiváltja.  
- Pontosság: konzisztens, tiszta adatstruktúrák, kevesebb hibalehetőség.  
- Rugalmasság: teljesen testreszabható oszlopok és formátumok.  
- Automatizálás: időzítés és integrációk – “beállítod és megy”.  
- Skálázhatóság: nagy adatmennyiségnél is megbízható.

## Kinek ajánlott?

- Ügynökségeknek és webfejlesztőknek: testreszabott integrációk, migrációk, automatizált adatfolyamok.  
- Marketing és értékesítés csapatoknak: friss lead-listák, kampányriportok.  
- Pénzügy/könyvelés számára: rendszeres, szabványosított CSV/Excel kimutatások.  
- Adat- és BI-csapatoknak: tiszta, szűrt, feldolgozható exportok külső rendszerekbe.  
- Nagy forgalmú oldalaknak: skálázható, megbízható adatkezelés.

## Követelmények és megjegyzések

- Szükséges: WordPress, aktív Gravity Forms és WP All Export (a teljes funkcionalitáshoz Pro).  
- A kiegészítő a WP All Export Pro csomag részeként érhető el; kereskedelmi licenc szükséges.  
- A Google Sheets összeköttetés tipikusan automatizációs szolgáltatáson keresztül történik, nem natív “egy kattintásos” export.  
- A csomagok és licencelés idővel változhatnak – mindig ellenőrizd az aktuális feltételeket.

## Best practice tippek

- Egységesítsd az oszlopneveket már az exportban (pl. snake_case), így könnyebb a további feldolgozás.  
- Többértékű mezőknél használj következetes elválasztót (pl. “;”), hogy táblázatban is jól kezelhető legyen.  
- Fájlfeltöltéseknél döntsd el, URL-t vagy szerverútvonalat szeretnél exportálni – a célrendszer igénye szerint.  
- Időzített export előtt készíts tesztfutást, és ellenőrizd a szűrőket, formátumokat.  
- Nagy adatmennyiségnél preferáld a CSV-t, és használj Bundle-t migrációhoz.