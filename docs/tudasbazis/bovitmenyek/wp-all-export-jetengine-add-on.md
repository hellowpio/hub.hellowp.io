---
title: "WP All Export - JetEngine Add-On"
description: "WP All Export Pro kiegészítő, amellyel a JetEngine egyedi mezőit (Meta Boxes, CCT-k, kapcsolatok, repeater) strukturáltan exportálhatod CSV, Excel és XML formátumba."
sidebar_label: "WP All Export - JetEngine Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Export – JetEngine Add‑On a JetEngine egyedi mezőinek professzionális exportját teszi lehetővé. Ha JetEngine‑t használsz (Meta Boxes, CCT, kapcsolatok, repeater mezők stb.), ez a bővítmény áthidalja a JetEngine hiányzó natív import/export képességeit: rendezett, táblázat‑barát adatot kapsz CSV, XLSX vagy XML formátumban – úgy, ahogyan a célrendszerednek szüksége van.

## Hogyan működik röviden

- A telepítés után az All Export felületén új, külön **JetEngine** szekciót kapsz.
- A JetEngine mezőket **drag & drop** módszerrel húzod az exportfájl oszlopaiba.
- Beállíthatod a kimeneti formátumot (CSV/XLSX/XML), a szűréseket és az ütemezést.
- Összetett mezők (repeater, kapcsolatok) is strukturáltan kerülnek a fájlba.
- Az elkészült exportot szerkesztheted és ugyanazzal az eszközkészlettel vissza is importálhatod.

## Fő funkciók, érthetően

- **Teljes JetEngine mezőtámogatás**  
  Kezeli a szinte összes mezőtípust: Text, Textarea, WYSIWYG, Date/Time/Datetime, Checkbox/Radio/Switcher, Select, Number, Colorpicker, Iconpicker, Media/Gallery, Repeater, Maps és **Relations**. Új mezőknél a támogatás folyamatosan bővül.

- **Formátumok és testreszabás**  
  Export **CSV**, **Excel (XLSX)** és **XML** formátumba. Szabadon alakíthatod az oszlopok sorrendjét, a CSV elválasztókat, illetve egyedi XML sémát készíthetsz.

- **Drag & drop mezőleképezés**  
  A JetEngine mezők külön panelen jelennek meg. Egyszerűen húzd be az export oszlopokba, és el is készült az egyéni kimeneted.

- **Összetett szűrés**  
  Szabályokkal határozhatod meg, mely rekordok kerüljenek be (pl. dátum, státusz, mezőértékek alapján).

- **Repeater és kapcsolatok kezelése**  
  Repeater almezők külön oszlopot kapnak, a többértékű cellák alapértelmezetten „|” jellel elválasztva jelennek meg. Kapcsolatoknál több kapcsolt elem szintén rendezett, többértékű formában kerül ki.

- **Picker mezők okos kimenete**  
  Színválasztó hex formátumban, ikonválasztó ikon‑osztályként, dátumok és időpontok egységes, feldolgozható formátumban exportálódnak.

- **CCT és meta tárolás támogatás**  
  A poszt‑alapú JetEngine adatok a post_meta‑ból, a **CCT‑k** pedig saját tábláikból jönnek – az add‑on mindkettőt kezeli.

- **Ütemezés és automatizálás**  
  Futó exportokat időzíthetsz beépített ütemezővel vagy saját cron feladatokkal. Így naponta, óránként vagy tetszőleges időközönként frissülhet a kimeneti fájl.

- **Integrációk**  
  Közvetlen kapcsolódás automatizáló szolgáltatásokhoz (pl. Zapier) – könnyű továbbítás táblázatokba, tárhelyekre, e‑mailre vagy külső rendszerekbe.

- **Fejlesztői eszköztár**  
  Export közben **PHP kódot** futtathatsz, így tisztíthatod, formázhatod vagy átalakíthatod a mezőket. Dokumentált hookokkal és API‑val egyedi logikákat is építhetsz.

```php
// Példa: saját formázó függvény (functions.php)
function je_upper_trim($value) {
  return strtoupper(trim((string) $value));
}
// Export oszlop sablonjában:
// [php function="je_upper_trim({JetEngine/Custom Text})"]
```

## Gyakorlati példák

- **Adatmigráció két JetEngine‑es oldal között**  
  Exportálod a CCT‑ket, kapcsolati mezőket és repeater adatokat, majd az eredményt visszaimportálod a céloldalon. A mezőstruktúra megmarad, a többértékű kapcsolatok is átmennek.

- **Tömeges szerkesztés**  
  Kiexportálod a bejegyzések JetEngine mezőit Excelbe, módosítod (pl. árak, címkék, kapcsolt elemek), majd visszaimportálod. Így nem kell egyesével kattintgatnod a WordPressben.

- **Rendszerintegráció**  
  Ütemezett exportot készítesz, ami óránként frissül, és egy külső CRM/ERP vagy táblázat automatikusan megkapja a JetEngine adatokat.

- **Riportok és elemzés**  
  Összetett kapcsolatok és repeater adatok táblázatos formában, elemezhetően – például termékekhez kapcsolt szervizek listája, „|” jellel elválasztva.

## Telepítés és első lépések

1. Telepítsd és aktiváld a **WP All Export Pro‑t** és a **JetEngine Export Add‑On‑t**; a **JetEngine** legyen aktív és a mezőcsoportjaid létrehozva.  
2. Menj az **All Export › New Export** menübe. Válaszd ki az adattípust (posztok, CCT stb.).  
3. A Drag & Drop nézet jobb oldalán keresd a **JetEngine** szekciót, és húzd be a kívánt mezőket.  
4. Válaszd ki a formátumot (**CSV/XLSX/XML**), állíts be szűrőket és – igény esetén – ütemezést.  
5. Futtasd az exportot, ellenőrizd a kimenetet. Repeater mezőknél számíts „|” elválasztóra a többértékű cellákban.  
6. Round‑trip szerkesztéshez használd a **WP All Import** + **JetEngine Import Add‑On** párost.

Megjegyzés: CCT‑knél a JetEngine saját tábláiból jönnek az adatok – ellenőrizd az oszlopok megfeleltetését, ha egyedi leképezésre van szükség.

## Előnyök és értékajánlat

- **Időspórolás**: percek alatt készíthetsz konzisztens exportot még bonyolult JetEngine struktúrákból is.  
- **Hibacsökkentés**: egységes formátumok, automatizált ütemezés, ellenőrizhető kimenet.  
- **Rugalmasság**: saját oszlopok, egyéni XML séma, PHP‑alapú formázás.  
- **Skálázhatóság**: nagy adatállományok, rendszeres szinkronok, külső rendszerekhez illesztés.  
- **Kerek folyamat**: export – szerkesztés – visszaimport ugyanazzal az eszközkészlettel.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: migrációk, staging‑éles szinkronok, egyedi integrációk gyors kivitelezése.  
- **Webshopoknak és portáloknak**: tömeges termék/frissítés, kapcsolatok és repeater adatok karbantartása.  
- **Adatmenedzsmenttel foglalkozóknak**: ütemezett riportok és adatfolyamok külső rendszerekbe.  
- **No‑code/low‑code szerkesztőknek**: drag & drop alapú export, Excel‑ben szerkeszthető kimenet, visszaimportálhatóan.

## Követelmények és licenc

A JetEngine exporthoz szükséged van a **WP All Export Pro**‑ra és a **JetEngine Export Add‑On**‑ra, valamint az aktív **JetEngine** pluginedre. Round‑trip szerkesztéshez a **WP All Import** és a **JetEngine Import Add‑On** is kell. Az add‑on a WP All Export csomagok részeként érhető el; a pontos csomag‑összetétel és ár idővel változhat.