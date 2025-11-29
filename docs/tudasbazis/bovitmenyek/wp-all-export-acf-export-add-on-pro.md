---
title: "WP All Export - ACF Export Add-On Pro"
description: "ACF mezők precíz és ütemezhető exportja WordPressből CSV/XLSX/XML és Google Sheets formátumba, repeater/flexible/relációs mezők teljes támogatásával."
sidebar_label: "WP All Export - ACF Export Add-On Pro"
---

## Mi ez és milyen problémát old meg?

A WP All Export – ACF Export Add‑On Pro a WP All Export Pro kiegészítője, amellyel az Advanced Custom Fields (ACF) mezőidet tudod maradéktalanul kinyerni. Az ACF gyakran összetett, hierarchikus adatokat (repeater, group, flexible, relációk) tárol – ezeket kézzel táblázatba tördelni időigényes és hibásodó. Ez az add‑on automatikusan felismeri az ACF mezőket, és segít szabványos, könnyen feldolgozható CSV/XLSX/XML (vagy Google Sheets) kimenetet készíteni.

## Hogyan működik röviden?

- Mindig azt a bejegyzéstípust exportálod (post type), amelyhez az ACF mezők tartoznak (pl. bejegyzés, oldal, egyedi CPT, termék).
- Az export varázslóban a jobb oldali “ACF” szekcióban megjelennek a mezőid; egyszerűen húzd át őket az export sablonba.
- A bővítmény a bonyolult mezőket (repeater, group, flexible, relációk) értelmesen szétszedi oszlopokra vagy egységesen formázott cellaértékekre.
- Az exportot futtathatod azonnal, ütemezheted, és akár bundle fájlt is készíthetsz a későbbi visszaimporthoz.

## Fő funkciók, érthetően

- Teljes ACF mezőtámogatás
  - Kezeli a repeater, group és flexible content mezőket úgy, hogy a gyermekmezőkből oszlopokat készít, ismétlődéseknél konzisztens elválasztóval.
  - A relációs mezőket (Relationship, Post Object, User, Page Link, Link) előre értelmezett, egységes formában adja vissza, így a hivatkozások megőrződnek.
  - A tartalmi mezőket (Image, Gallery, File, WYSIWYG, oEmbed, dátum/idő, choice/jQuery típusok) konzisztensen formázza.

- Drag & drop export szerkesztő
  - Szabadon rendezheted az oszlopokat, átnevezheted őket, több mezőt kombinálhatsz egy oszlopba, és egyedi CSV elválasztót állíthatsz.
  - XML‑hez tetszőleges struktúrát készíthetsz, így a kimenet illeszthető bármelyik külső rendszer sémájához.

- Kódolható transzformációk (PHP)
  - Bármelyik export oszlophoz adhatsz PHP‑alapú logikát: dátumformázás, feltételes szabályok, összefűzés, normalizálás – azonnali előnézettel.

- Ütemezett futtatás
  - Használhatod a beépített ütemezőt vagy saját cront. Így a riportok és feedek emberi beavatkozás nélkül frissülnek.

- Migráció és tömeges szerkesztés
  - Az export után letölthető “bundle” csomag tartalmazza a visszaimporthoz szükséges sablont. Ezzel elkerülöd a mezőtérképezési hibákat, és gyorsan tudsz tömegesen módosítani, majd visszaimportálni.

- Kimeneti formátumok
  - CSV (alapértelmezett), Excel (XLSX), XML, valamint közvetlen Google Sheets export támogatás.

## Gyakorlati példák

- Riportok és BI: A termékeid ACF mezőiből (pl. extra attribútumok, technikai adatok) készítesz XLSX riportot, amit a pénzügy vagy a marketing hetente megkap.
- Integráció partnerekhez: Egyedi XML feedet állítasz elő ACF‑alapú ingatlanadatokból, amit a partner rendszer automatikusan beolvas.
- Staging → production migráció: A teljes CPT + ACF struktúrát exportálod bundle formában, majd a célszerveren azonnal visszaimportálod az előre elkészített sablonnal.
- Tömeges szerkesztés: Kinyitod az adatokat táblázatban, javítasz (pl. árak, címkék, meta információk), és a bundle‑lel visszatöltöd – minimális hibalehetőséggel.

## Előnyök és értékajánlat

- Időmegtakarítás: Nem kell kézzel szétszedned repeater/group mezőket, az add‑on elvégzi helyetted.
- Kevesebb hiba: A relációk konzisztensen megmaradnak, a bundle csökkenti a téves mezőtérképezés esélyét.
- Rugalmasság: A PHP transzformációval az export pontosan olyan lesz, amilyet a célrendszer vár.
- Automatizálás: Ütemezett exportokkal stabil adatcsatornát tartasz fenn minimális üzemeltetési költséggel.

## Kinek ajánlott?

- Fejlesztőknek és üzemeltetőknek, akik ACF‑alapú projekteket tartanak karban.
- Ügynökségeknek, akik rendszeresen migrálnak staging/production között.
- Adatgazdáknak/analitikusoknak, akik ACF‑adatokat visznek BI eszközökbe.
- Webshop‑tulajdonosoknak (pl. termékek egyedi ACF attribútumaival), akiknek partneri feed, XML katalógus vagy Sheets‑szinkron kell.

## Lépésről lépésre: telepítés és első export

1. Aktiváld a WP All Export Pro‑t és az ACF Export Add‑On‑t. Bizonyosodj meg róla, hogy az ACF és a kívánt mezők aktívak, a megfelelő post type‑hoz rendelve.
2. Menj az új export varázslóhoz, válaszd ki a post type‑ot (pl. egyedi CPT).
3. A “Available Data” panelen nyisd le az ACF szekciót, és húzd át a szükséges mezőket az export sablonba.
4. Nevezd át az oszlopokat, adj hozzá transzformációkat (PHP), és válassz kimeneti formátumot.
5. Futtasd az exportot, vagy állítsd be az ütemezést. Szükség esetén töltsd le a bundle csomagot a későbbi visszaimporthoz.

## Haladó tippek és minták

- Repeater/group elválasztó cseréje
  - Alapértelmezés szerint az ismétlődő értékek “|” jellel vannak szeparálva. Ezt egy filterrel módosíthatod:
  ```
  add_filter('wp_all_export_repeater_delimiter', function ($delimiter) {
      return '||'; // egyedi elválasztó
  });
  ```

- PHP transzformáció példa (dátum normalizálása)
  ```
  // Feltételezve, hogy az oszlopodban az [acf_datum] mezőt használod:
  // Kimenet: YYYY-MM-DD
  date('Y-m-d', strtotime([acf_datum]))
  ```

- XML séma illesztés
  - Az XML sablonban kézzel nevezheted el a node‑okat és hierarchiákat, így a kimenet pontosan a partner rendszer sémáját követi.

- Google Sheets export
  - Az elkészült exportot közvetlenül egy választott Google Sheets táblába tolhatod, így a csapat mindig a legfrissebb adatokkal dolgozik.

## Fontos működési megjegyzések

- Az ACF mezők nem önálló entitások: mindig egy post type‑hoz kapcsolódnak. Ezért exportáláskor a post type‑ot választod, és ahhoz társítod az ACF mezőket.
- A flexible content és más összetett mezők is támogatottak; a drag & drop szerkesztővel az outputot áttekinthető táblává vagy jól strukturált XML‑lé alakíthatod.
- Ha vissza is szeretnéd importálni az exportált adatokat, használd a bundle csomagot a WP All Import és az ACF Import Add‑On társaságában.

## Összegzés

Az ACF Export Add‑On Pro a hiányzó láncszem az ACF komplex, hierarchikus adatvilága és a riportálható, feedelhető, automatizálható kimenetek között. Teljes ACF támogatást, rugalmas export szerkesztést, PHP‑alapú testreszabást, ütemezést és migrációbarát bundle formát kínál. Ha ACF‑et használsz, ezzel az eszközzel gyorsan, pontosan és megbízhatóan tudod az adataidat kinyerni – és szükség esetén ugyanilyen biztonsággal vissza is tölteni.