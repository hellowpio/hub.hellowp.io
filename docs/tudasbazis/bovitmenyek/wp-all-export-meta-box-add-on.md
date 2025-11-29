---
title: "WP All Export - Meta Box Add-On"
description: "Kiegészítő a WP All Exporthez, amely natívan kezeli a Meta Box egyedi mezőit, és egyszerűvé teszi azok exportját CSV, XLSX vagy XML formátumba."
sidebar_label: "WP All Export - Meta Box Add-On"
---

## Mi ez és milyen problémát old meg?

A WP All Export – Meta Box Add‑On egy kiegészítő, amely teljes, natív integrációt ad a Meta Box által kezelt egyedi mezőkhöz. Célja, hogy a Meta Box összes mezőtípusát – a legegyszerűbb szövegmezőktől a csoportos, ismétlődő és fájlfeltöltés mezőkig – stabilan, adatvesztés nélkül tudd exportálni CSV, Excel (XLSX) vagy XML formátumba. Megoldja a Meta Box komplex, tömbös adatstruktúráinak „kilapítását”, és drag‑and‑drop felületen teszi kényelmessé a mezőválasztást.

## Fő funkciók, érthetően

- **Teljes mezőtámogatás**  
  Kezeli a Text, Textarea, Radio, Select, Checkbox/Checkbox List, Image, File, Group/Repeater és egyéb mezőtípusokat. A bonyolult, ismétlődő és csoportos mezők adatait rendezett, exportálható oszlopokba szervezi.

- **Húzd‑és‑ejtsd mezőválasztás**  
  Az export összeállításakor külön panelen jelenik meg az „Available Data › Meta Box” szekció. Innen egyszerűen behúzod a kívánt mezőket az exportfájlba – nincs manuális térképezés vagy meta‑kulcs keresgélés.

- **Adatformázás és PHP‑transzformáció**  
  Az exportálás közben PHP függvényeket futtathatsz a mezőkön: tisztítás, összefűzés, átalakítás, normalizálás, egyedi formátumok. Így azonnal a fogadó rendszer elvárásaihoz igazíthatod a kimenetet.

- **Ütemezés és inkrementális export**  
  Időzítheted az exportokat, és beállíthatod, hogy csak a módosult rekordok kerüljenek ki (delta export). Ez ideális folyamatos szinkronizáláshoz és rendszeres jelentésekhez.

- **Újraimportálásra kész bundle**  
  Az elkészült exporthoz letölthetsz egy bundle csomagot, amit a WP All Import azonnal fel tud használni visszaimportáláshoz. Migrálásnál és tömeges szerkesztésnél ez drasztikusan csökkenti a hibákat és a beállítási időt.

- **Integrációk és haladó opciók**  
  Támogatottak olyan kimeneti beállítások, mint oszlopsorrend, egyedi elválasztók, XML séma‑illesztés, valamint külső automatizálások (például Zapier‑alapú folyamatok).

## Előfeltételek és kompatibilitás

- Szükséged van a WP All Export Pro bővítményre.
- A Meta Box plugin mezőit teljes körűen támogatja.
- Az add‑on a WP All Export kiegészítőcsomagjának része.

## Hogyan működik? Lépésről lépésre

1. Nyisd meg: All Export › New Export.
2. Válaszd ki a bejegyzéstípust (pl. bejegyzés, oldal, termék), amely Meta Box mezőket tartalmaz.
3. A „Customize Export File” nézetben nyisd meg az „Available Data › Meta Box” szekciót.
4. Húzd át a kívánt Meta Box mezőket az export mezőlistába. Állítsd be az oszlopneveket, sorrendet.
5. Igény szerint adj meg szűrőket, ütemezést és PHP‑alapú átalakításokat.
6. Kattints a „Confirm & Run Export” gombra, majd töltsd le a CSV/XLSX/XML fájlt, vagy a bundle csomagot a visszaimporthoz.

## Mezőtípusok és kimenet sajátosságai

- **Alap mezők (Text, Textarea, Radio, Select, Checkbox)**  
  Egyértékű mezők sík értékként, többválasztós mezők több értéke alapértelmezetten elválasztóval kerül egy cellába.

- **Fájl- és képfeltöltés (Image, File, Video)**  
  A kimenetben kész **URL‑ek** szerepelnek (nem csak azonosítók), ami kulcsfontosságú feedekhez és külső rendszerekhez.

- **Ismétlődő és csoport mezők (Repeater, Group, Cloneable)**  
  A rendszer soron belül jellemzően vesszőt, a sorok között „|” (pipe) jelet használ szeparátorként. A repeater belső mezői külön oszlopokat kaphatnak. Az elválasztók testreszabhatók vagy PHP‑val felülírhatók.

- **WordPress‑specifikus kapcsolatok (felhasználó, term, bejegyzés)**  
  A mezőtípustól függően ID vagy név kerül exportálásra, a gyakorlatban a célrendszer igényeihez igazítva.

## Gyakorlati példák

- **Migrálás staging és éles között**  
  Exportáld a tartalmakat a Meta Box mezőkkel együtt, töltsd le a bundle‑t, majd a céloldalon importáld vissza – nincs kézi térképezés.

- **Tömeges szerkesztés**  
  Exportálj XLSX‑be, módosítsd a termék specifikációkat vagy cikk‑metaadatokat táblázatban, majd importáld vissza a bundle segítségével.

- **Jelentések és audit**  
  Rendszeres, ütemezett export, amely csak a frissült rekordokat tartalmazza. Ideális havi kimutatásokhoz, minőségellenőrzéshez.

- **Külső integrációk**  
  Állíts elő CSV/XML feedet ERP/CRM/BI rendszerekhez, vagy indíts automatizmusokat külső eszközökkel.

- **Biztonsági mentés / archiválás**  
  Főként fájl és URL mezők snapshot‑szerű mentése gyors visszaállításhoz.

## PHP‑transzformáció példa

Egyszerű példák adatnormalizálásra:

```php
function normalize_text($value) {
  $value = trim($value);
  $value = preg_replace('/\s+/', ' ', $value);
  return $value;
}

function join_multi($values) {
  // Többértékű mezők egységes elválasztóval
  return is_array($values) ? implode('; ', $values) : $values;
}

function to_iso_date($dateStr) {
  return date('c', strtotime($dateStr)); // ISO 8601
}
```

Az exportmezőknél válaszd a PHP futtatását, és add meg a fenti függvények egyikét a kívánt kimenethez.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Drag‑and‑drop mezőválasztás, automatikus „kilapítás” a komplex struktúrákra, bundle‑alapú visszaimport.
- **Adatminőség**: URL‑ek exportja fájloknál, testreszabható elválasztók, PHP‑alapú tisztítás és formázás.
- **Rugalmasság**: CSV/XLSX/XML kimenet, ütemezés, delta export, külső folyamatok integrálása.
- **Kisebb kockázat**: Kevesebb manuális lépés, kevesebb térképezési hiba migráláskor és tömeges módosításnál.

## Kinek ajánlott?

- **Fejlesztőknek és ügynökségeknek**: migrálás, integráció, feedek előállítása megbízhatóan.
- **Tartalom‑ és termékmenedzsereknek**: tömeges szerkesztés táblázatban, gyors visszaimport.
- **Adat‑ és üzleti elemzőknek**: rendszeres, sémának megfelelő exportok jelentésekhez és BI rendszerekhez.
- **Webshopoknak és portáloknak**: nagy mennyiségű egyedi mező karbantartása, szinkronizálása külső rendszerekkel.

## Tippek és bevált gyakorlatok

- Többértékű mezőknél egységesítsd az elválasztókat (pl. „; ”) PHP‑val, ha a fogadó rendszer ezt igényli.
- Repeater mezőknél ellenőrizd, mely belső mezőket szeretnél külön oszlopként látni, és nevezd el beszédesen az oszlopokat.
- Fájl/ kép mezőknél dolgozz a kiexportált URL‑ekkel; a bundle biztosítja, hogy visszaimportnál minden a helyére kerüljön.
- Használj ütemezést és „csak módosult” exportot, ha rendszeres szinkronizálásra van szükség.