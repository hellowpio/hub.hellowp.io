---
title: "JetEngine - dynamic tables builder"
description: "Dinamikus, szűrhető és újrafelhasználható adattáblák építése WordPressben, kódolás nélkül, JetEngine alapon."
sidebar_label: "JetEngine - dynamic tables builder"
---

## Mi ez és milyen problémát old meg?

A Dynamic Tables Builder a JetEngine külső modulja, amellyel kódolás nélkül hozhatsz létre dinamikus, szűrhető és rendezhető adattáblákat. Ugyanazon felületen tudod megjeleníteni az eltérő forrásokból származó adatokat (posztok, felhasználók, taxonómiák, WooCommerce-termékek, SQL-táblák, sőt külső API-k), és azt egységes, újrahasznosítható táblanézetben publikálhatod Elementorban, Gutenbergben és Bricksben. Megszünteti a kézzel írt HTML-táblák, egyedi lekérdezések és ad hoc megoldások szükségességét.

## Fő funkciók és működés

### Több szerkesztő támogatása
- Dedikált **Dynamic Table** widget/blokk/elem az Elementor, Gutenberg és Bricks szerkesztőkben, azonos beállításlogikával.
- Egy táblanézetet több helyen is beilleszthetsz, azonos vagy eltérő adatforrással.

### Adatforrások a Query Builderből
- **Posztok/CPT**, **CCT** (Custom Content Types), **Felhasználók**, **Taxonómiák**, **Hozzászólások**, **WooCommerce-termékek**.
- **SQL Query** közvetlen adatbázis-táblákhoz.
- **REST API**-s tartalom a JetEngine REST API moduljával (külső rendszerekből érkező élő adatokhoz).

### Oszlopok és kimenet
- A tábla létrehozásakor a Query kiválasztása után a **Fetch/Re-fetch** gombbal automatikusan felderíted az elérhető oszlopokat és előnézetet kapsz.
- Oszloponként választható kimenet:
  - **Raw value** (nyers érték),
  - **Callback/formatting** (pl. dátum/ár formázás),
  - **Template** (egyéni Listing-sablon a cellában: kép, gomb, értékelés, audiólejátszó stb.).

### Stílusok és elrendezés
- **Fejléc/lábléc** kapcsolható, oszlopnevek testreszabhatók.
- Cella- és fejléctartalom **igazítása**, oszlopszélességek megadása.
- Sok oszlopnál **horizontális görgetés** bekapcsolása a használhatóságért.

### Szűrés, rendezés, lapozás
- Oszloponkénti **rendezés** (ASC/DESC).
- **Keresés és összetett szűrés** a JetSmartFilters bővítménnyel: szabad szavas keresés, több feltétel, aktív címkék, törlés.
- **Pagináció** külön widget/blokk/elem formájában (AJAX vagy oldal-újratöltés).

### Előnézet és újrafelhasználhatóság
- Admin **előnézet** a builderben.
- A megjelenítő widgetben elérhető **Rewrite table query**: ugyanazt a táblalayoutot másik lekérdezéssel is használhatod, csökkentve a duplikációt.

### Integrációk és vizualizáció
- **ACF, Pods, CPT UI** mezők támogatása.
- **WooCommerce**-termékek táblás listázása.
- **JetReviews** értékelések megjelenítése.
- **Charts Builder**: a táblában lévő számokból grafikonok készíthetők.

## Gyakorlati példák

- **Termékkatalógus**: Kép, kategória, ár, készlet, gomb a kosárhoz; kategória és ár szerinti szűrés, lapozás.
- **Könyvtár/archívum**: E-könyv vagy podcast-lista; podcast esetén audiólejátszó a cellában Template kimenettel.
- **Személyzeti névsor**: Felhasználók/CCT képpel, pozícióval, kapcsolattal; név szerinti keresés, osztály szerinti szűrés.
- **Ingatlan/Tag-adatbázis**: SQL-táblából beolvasott rekordok; több feltételes szűrés, rendezés ár/terület szerint.
- **Élő statisztikák**: Külső API-ból érkező adatok táblába töltve, frissíthető listázással.

## Telepítés és alap workflow

1. **Modul engedélyezése**: WordPress admin > JetEngine > Modules > External Modules > Dynamic Tables Builder.
2. **Lekérdezés létrehozása**: JetEngine > Query Builder (pl. Posts, Users, Terms, WooCommerce, SQL, REST).
3. **Tábla felépítése**: JetEngine > Tables Builder > Add New.
   - General: név, **Data Query**, **Fetch** az oszlopok előnézetéhez.
   - Columns: kimenet (Raw/Callback/Template), címkék, igazítás, szélesség.
   - Table Styles: fejléc/lábléc, görgetés, alap stílusok.
4. **Beillesztés oldalra**:
   - Elementor/Gutenberg/Bricks: **Dynamic Table** kiválasztása.
   - Opcionális: **Rewrite table query**, horizontális scroll, fejléc/lábléc beállítások.
5. **Szűrés és pagináció**:
   - JetSmartFilters widgetek/blokkok: Search, Select, Range, Active Tags, Remove Filters, Pagination.
   - Provider: **JetEngine Dynamic Table**; több táblánál Query ID használata.

## Előfeltételek és tippek

- Szükséges a **JetEngine** és a Dynamic Tables Builder modul aktiválása.
- Haladó szűréshez/paginációhoz **JetSmartFilters** kell.
- WooCommerce-táblához WooCommerce, SQL-alaphoz elérhető SQL-tábla és JetEngine **SQL Query**.
- Teljesítmény: strukturált adatmodell (**CPT/CCT**), pagináció használata, sok oszlopnál **horizontális scroll**. Vizuális cellákhoz a **Template** kimenet ajánlott.

## Előnyök és értékajánlat

- **Kód nélküli** táblakészítés: gyors konfiguráció fejlesztés helyett.
- **Egységesítés**: különböző források egy nézetben.
- **Skálázhatóság**: rendezés, szűrés, lapozás nagy adathalmazokra.
- **Újrafelhasználhatóság**: ugyanaz a layout több lekérdezéssel (**Rewrite table query**).
- **Ökoszisztéma**: szoros együttműködés JetSmartFilters, WooCommerce, ACF/Pods és más JetEngine modulok között.

## Kinek ajánlott?

- **Webes tartalomgazdáknak**: akik rendszeresen frissülő listákat, katalógusokat kezelnek.
- **Webshop-tulajdonosoknak**: termékek táblás bemutatásához és gyors szűréséhez.
- **Ügynökségeknek/fejlesztőknek**: ismételhető, karbantartható listanézetekhez, minimális kódolással.
- **Adat-intenzív projektekhez**: SQL/CCT alapú rendszerek, külső API-adatok egységes megjelenítéséhez.

## Gyorsindító (összefoglaló)

```
1) Kapcsold be a Dynamic Tables Builder modult.
2) Készíts egy Query-t a JetEngine Query Builderben.
3) Hozz létre egy táblát (Tables Builder): Fetch → Columns → Styles.
4) Illeszd be az oldalra a Dynamic Table elemet.
5) Adj hozzá JetSmartFilters szűrőket és Paginationt (Provider: JetEngine Dynamic Table).
```

Összegzés: a JetEngine – Dynamic Tables Builder egy rugalmas, szerkesztőfüggetlen táblázat-építő megoldás, amellyel gyorsan hozhatsz létre professzionális, szűrhető és rendezhető adatnézeteket szinte bármilyen WordPress- vagy külső adatforrásból – fejlesztői munka nélkül.