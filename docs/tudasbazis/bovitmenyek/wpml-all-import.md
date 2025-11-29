---
title: "WPML All Import"
description: "WPML kiegészítő a WP All Importhoz: többnyelvű tartalmak automatikus nyelvi hozzárendelése és fordítások összekapcsolása."
sidebar_label: "WPML All Import"
---

## Mi ez és milyen problémát old meg?

A WPML All Import a WPML hivatalos kiegészítője, amely a WP All Import folyamataiba illeszkedve automatikusan kezeli a többnyelvű tartalmakat. Segít abban, hogy a bejegyzések, oldalak, egyedi bejegyzéstípusok, taxonómiák, média és egyedi mezők a megfelelő nyelvhez legyenek rendelve, és a fordítások egymással össze legyenek kapcsolva. Így nem kell kézzel összepárosítanod ugyanannak a tételnek a különböző nyelvi változatait.

Megjegyzés: a bővítmény ma “legacy” jelölésű, azaz van újabb, ajánlott módszer, de továbbra is működik, támogatott és dokumentált.

## Fő funkciók, érthetően

- Többnyelvű import teljes körűen  
  Importálhatsz bármilyen poszttípust és taxonómiát több nyelven. A kiegészítő beállítja a tételek nyelvét, és azonosítók alapján a fordításokat egymáshoz kapcsolja. Ez a gyakorlatban azt jelenti, hogy például az angol és magyar változat ugyanahhoz a “törzs” tartalomhoz fog tartozni.

- Fordítás-kapcsolatok automatikus kezelése  
  Egy közös egyedi azonosító (Unique Identifier) alapján a rendszer felismeri, melyik elem melyik fordítása. A másodlagos nyelvű import során csak megadod, melyik az alapnyelvi import “szülője”, és a plugin elvégzi a kapcsolást.

- Taxonómiák és média nyelvi megfeleltetése  
  Kategóriák, címkék és egyedi taxonómiák fordításai is rendben összekapcsolódnak. A képek és egyéb médiaelemek nyelve és kapcsolatai konzisztensen kerülnek be.

- WooCommerce-támogatás  
  Egyszerű és változatos termékek többnyelvű importja, a kapcsolódó adatokkal együtt. Az ajánlott és kapcsolódó termékek hivatkozásai a megfelelő fordított termékekre mutatnak. Ehhez a WooCommerce-hez való WP All Import kiegészítőre és a WPML WooCommerce többnyelvű bővítményére is szükséged lesz.

- Rugalmas források  
  Bármilyen XML/CSV (vagy táblázatból exportált) adat feldolgozható a WP All Import drag and drop mező-hozzárendelésével kombinálva.

## Hogyan működik? Ajánlott munkafolyamat

1. Szervezd nyelvenként külön fájlokba az adatokat.  
   Minden fájl tartalmazza ugyanazt a Unique Identifier mezőt (azonos értékkel a fordításoknál).
2. Tartsd a bevált import-sorrendet:  
   - Taxonómiák alapnyelven  
   - Taxonómiák más nyelveken  
   - Tartalom/termékek alapnyelven  
   - Tartalom/termékek más nyelveken (itt add meg “szülőnek” az alapnyelvi importot)
3. Változatos WooCommerce-termékeknél:  
   - Használj numerikus Unique Identifiert (ne SKU-t).  
   - A változatokhoz szükséges globális attribútumokat és azok fordításait hozd létre előre.  
   - Futtass próbaimportot 1–2 tétellel, mielőtt nagy tömegben importálsz.

Példa egy CSV-részletre (két nyelv, közös azonosítóval):
```
id;post_title;post_content;lang;product_type;attribute_pa_color
1001;Póló;Kényelmes pamut póló.;hu;variable;piros|kék
1001;T-Shirt;Comfortable cotton t-shirt.;en;variable;red|blue
```

## Gyakorlati példák

- Többnyelvű webhely migrációja  
  Egy régi CMS-ből külön CSV-be exportálod a magyar, angol és német tartalmakat. Mindegyik rekord kap egy közös azonosítót. Először beimportálod a kategóriákat magyarul, majd angolul és németül, aztán a cikkeket ugyanígy. A WPML All Import a cikkek fordításait automatikusan összekapcsolja.

- E‑kereskedelmi katalógus feltöltése  
  Ruházati termékek variációkkal (szín, méret). Előre létrehozod a globális attribútumokat és azok fordításait. Az importban a fő termékek és variációk azonosítói alapján a rendszer felépíti a termék-variáció struktúrát több nyelven, és a kapcsolódó termékek linkjei a megfelelő nyelvi párjukra mutatnak.

- Nagy tömegű taxonómiakezelés  
  Több ezer címke és kategória nyelvi megfeleltetését pontosan viszi át, így elkerülheted a kézi utómunkát és a hibás hozzárendeléseket.

## Előnyök és értékajánlat

- Idő- és költségmegtakarítás: megszünteti a manuális fordítás-összekapcsolást.  
- Kiszámítható, ismételhető folyamat: az ajánlott sorrenddel elkerülheted a törött kapcsolatok és keveredő taxonómiák problémáit.  
- E‑kereskedelemre hangolva: a változatos termékek és kapcsolódó hivatkozások stabil kezelése.  
- Nagy adatmennyiségekhez is alkalmas: megbízható a tömeges feltöltések során.

## Követelmények és kompatibilitás

- Szükséges: WP All Import, WPML, WPML String Translation és a WPML All Import.  
- WooCommerce esetén: WP All Import WooCommerce Product Import addon és a WPML WooCommerce többnyelvű bővítménye.  
- A kiegészítőt a WPML csapata fejleszti és támogatja, és hivatalosan együttműködik a WP All Import ökoszisztémával.  
- A bővítmény “legacy” jelölésű; új projektnél érdemes megfontolni a modernebb WPML Export and Import megoldást.

## Gyors ellenőrzőlista

- Készíts nyelvenként külön CSV/XML fájlokat, egységes Unique Identifier mezővel.  
- Importáld a taxonómiákat: alapnyelv → más nyelvek.  
- Importáld a tartalmakat/termékeket: alapnyelv → más nyelvek (szülőként az alapnyelvi import).  
- WooCommerce: csak globális attribútumokat használj; változatos termékekhez numerikus azonosító kell; futtass próbaimportot.

## Kinek ajánlott?

- Ügynökségeknek és fejlesztőknek, akik többnyelvű site-okat migrálnak vagy építenek.  
- E‑kereskedelmi csapatoknak, akik nagy, többnyelvű termékkatalógusokat kezelnek.  
- Tartalomkezelő és adatcsapatoknak, akik rendszeres, tömeges importokat futtatnak, és kritikus a pontos nyelvi megfeleltetés.

Ha új projektet indítasz és elsődleges szempont az egyszerűbb, modernebb folyamat, fontold meg a WPML Export and Import használatát. Ha viszont meglévő WP All Import folyamatba szeretnéd gördülékenyen beilleszteni a többnyelvűséget, a WPML All Import megbízható, bevált megoldás.