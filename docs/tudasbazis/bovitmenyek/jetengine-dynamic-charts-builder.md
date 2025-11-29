---
title: "JetEngine - dynamic charts builder"
description: "Dinamikus, lekérdezésekre épülő grafikonok létrehozása WordPressben, kódolás nélkül – JetEngine modul, Elementor/Gutenberg megjelenítéssel."
sidebar_label: "JetEngine - dynamic charts builder"
---

## Mi ez és mit old meg?

A JetEngine – dynamic charts builder a JetEngine egyik külön modulja, amellyel bármilyen, adatbázisból vagy külső forrásból érkező adatot gyorsan, kódolás nélkül alakíthatsz vizuális grafikonokká. Ahelyett, hogy kézzel írnál kódot egy JavaScript chart könyvtárhoz, a modul végigvezet a folyamaton: lekérdezés kiválasztása, oszlopok beállítása, típus és stílus megadása, majd az eredmény beszúrása Elementor widgetként vagy Gutenberg blokkban. Ideális dashboardokhoz, riportokhoz, e‑kereskedelmi statisztikákhoz és REST API-ból érkező adatok vizualizálásához.

## Hogyan működik? (áttekintés)

- Engedélyezed a JetEngine moduljai között a **Dynamic Charts Buildert**. Ekkor a JetEngine egy külön bővítményt aktivál, és a Vezérlőpulton megjelenik a **Charts Builder** menüpont.
- Az adatok forrása a **JetEngine Query Builder**: itt hozol létre lekérdezéseket (posztok, taxonómiák, felhasználók, WooCommerce, CCT, SQL, REST API stb.).
- A Charts Builderben létrehozol egy új chartot, kiválasztod a Query-t, majd a **Fetch** gombbal betöltöd a lekérdezés oszlopait. Ezekből állítod össze a diagramot.

### A szerkesztőfelület fő lapjai

- **General Settings**: név, a használandó Query kiválasztása, oszlopok betöltése (Fetch).
- **Chart Type**: a diagram típusa (példák: Bar/Column, Line, Pie/Donut, Histogram, GeoChart és továbbiak – 10+ típus).
- **Columns**: itt adod meg, mely oszlopok kerülnek a grafikonra. Az első oszlop a **címkék (labels)**, a többi az **értékek**. Oszloponként állíthatsz:
  - mezőválasztás a Query oszlopai közül,
  - **Filter Callback** (kimenet szűrése),
  - **Ensure number/string** (adattípus kényszerítése).
- **Chart Config**: jelmagyarázat (legend) pozíciója, **stackelt** oszlopok engedélyezése, és egy haladó **JSON** mező a finomhangoláshoz.
- **Chart Styles**: vászonméretek (szélesség és magasság pixelben).

A létrehozott chartot az oldalakon a **Dynamic Chart** Elementor widgettel vagy a **Dynamic Chart** Gutenberg blokkal szúrod be. A termék a Bricks szerkesztővel is kompatibilis.

## Fő funkciók és mit csinálnak

- **Dinamikus grafikonok lekérdezésekből**: a Query Builderben definiált adatokat közvetlenül vizualizálhatod. A Fetch megmutatja, milyen oszlopok állnak rendelkezésre.
- **Sokféle diagramtípus**: oszlop-, vonal-, torta-/fánkdiagram, hisztogram, térkép alapú **GeoChart** és további típusok, így az adathoz illő megjelenítést választhatod.
- **Haladó testreszabás JSON-nal**: a Chart Config mező a Google Charts opcióit követi, így precízen állíthatod az animációt, színeket, tengelyeket, jelmagyarázatot.
- **Integrációk és szűrhetőség**: a Query Builder **Query ID** mezőjével összekötheted a chartot JetSmartFilters-szel, így valós idejű szűrés/újrarajzolás valósítható meg. A Query Builder cache-eléssel segíti a teljesítményt.
- **Szerkesztő-kompatibilitás**: ugyanazt a chartot több oldalon, sablonban újra felhasználhatod, nincs szükség shortcode-ok kézi karbantartására.

Példa haladó konfigurációra:
```
{
  "legend": { "position": "bottom" },
  "animation": { "startup": true, "duration": 600, "easing": "out" },
  "hAxis": { "slantedText": true },
  "vAxis": { "minValue": 0 },
  "isStacked": true,
  "colors": ["#1a73e8", "#34a853", "#fbbc04"]
}
```

## Gyakorlati példák

- **Tartalom-statisztika**: oszlopdiagram a bejegyzésszámokról kategóriánként. Query: Posts csoportosítva kategória szerint, Columns: kategória név (label) + bejegyzésszám (value).
- **Eladási trend**: vonaldiagram havi bevételről WooCommerce-ből. Query: rendelés dátum szerinti aggregálás, Columns: hónap (label) + összeg (value), Chart Config: animáció bekapcsolva.
- **Űrlaperedmények**: fánkdiagram JetFormBuilder beküldések státuszairól. Query: CCT/Records, Columns: státusz (label) + darabszám (value).
- **GeoChart**: SQL táblából országonkénti megtekintések térképen. Query: SQL SELECT ország, összegzés; Columns: ország (label) + nézettség (value).
- **Külső API**: REST API-ból érkező filmértékelések tortadiagramon. Query: REST, Columns: kategória (label) + arány (value), Filter Callback-kel tisztítod az adatokat.

## Telepítés és első lépések

1. Engedélyezd a JetEngine moduljai között a **Dynamic Charts Buildert** (External Modules).
2. Hozz létre egy **Queryt** a Query Builderben (forrás: posztok, CCT, WooCommerce, SQL, REST API stb.).
3. A **Charts Builderben** készíts új chartot, válaszd ki a Queryt, nyomd meg a **Fetch** gombot, állítsd be a **Chart Type**-ot és a **Columns**-t (első: label, többi: érték).
4. A **Chart Styles** fülön add meg a szélességet/magasságot, hogy működjön az előnézet.
5. Szúrd be az oldalakra a **Dynamic Chart** widgettel/blokkal, és válaszd ki a létrehozott chartot.

## Előnyök és értékajánlat

- **Kódolás nélkül** hozol létre profi grafikonokat.
- **Egységes felület** minden adatforráshoz (WP, WooCommerce, CCT, SQL, REST).
- **Gyors bevezetés**: Query → Fetch → Típus → Megjelenítés.
- **Rugalmas testreszabás** a Google Charts opcióival.
- **Interaktív szűrés** JetSmartFilters-szel, cache-elés nagy adathalmazokra.
- **Újrafelhasználhatóság**: egy chart több oldalon, külön karbantartás nélkül.

## Kinek ajánlott?

- **Weboldal- és webshop-tulajdonosoknak**: azonnali, élő statisztikák kódolás nélkül.
- **Marketing- és tartalomcsapatoknak**: riportok, dashboardok percek alatt.
- **Fejlesztőknek és ügynökségeknek**: skálázható, karbantartható vizualizációk, szerkesztő-kompatibilis komponensekkel.
- **Adat-orientált projekteknek**: REST/SQL integrációk vizuális összefoglalása.

## Korlátozások és tippek

- Az előnézethez a **Chart Styles** fülön kötelező szélességet megadni.
- A **Re-fetch Data** előnézeti funkció WooCommerce esetén nem működik.
- A **Columns** fülön ügyelj az adattípusokra (**Ensure number/string**), különösen pénznem és számok esetén.
- A haladó opciók a **Google Charts** beállításait követik; animációt, jelmagyarázatot, tengelyeket itt finomhangolhatod.
- Szűrhetőséghez használd a Query **Query ID**-ját és kösd össze JetSmartFilters-szel; nagy adatnál érdemes bekapcsolni a Query cache-t.

Megjegyzés: a Charts Builder a JetEngine része; előfizetéssel érhető el, az árak változhatnak. A fejlesztő a Crocoblock.