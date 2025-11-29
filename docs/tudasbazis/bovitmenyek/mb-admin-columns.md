---
title: "MB Admin Columns"
description: "Meta Box prémium kiegészítő, amellyel az admin listanézetekben oszlopokban jelenítheted meg a Meta Box-szal felvett egyedi mezők értékeit, rendezhető/kereshető/szűrhető formában."
sidebar_label: "MB Admin Columns"
---

## Mi ez és mit old meg?

Az MB Admin Columns egy prémium Meta Box kiegészítő, amellyel a WordPress admin listanézeteiben (bejegyzések, egyedi bejegyzéstípusok, taxonómiák, felhasználók) külön oszlopokban jelenítheted meg az egyedi mezők értékeit. Így már a táblázatos nézetben átlátod a tartalmaid kulcsadatait, és azonnal tudsz rendezni, keresni vagy szűrni anélkül, hogy megnyitnád a szerkesztőoldalt. Kódolás helyett egyszerű kapcsolókkal (vagy minimális kóddal) állíthatod be az oszlopok viselkedését.

## Fő funkciók, érthetően

- **Oszlopok pozicionálása**: pontosan megadhatod, hogy az új oszlop hova kerüljön (például „before title”, „after date”, vagy meglévő oszlop cseréje). Így a fontos információk ott jelennek meg, ahol a szemed keresi.
- **Cím és kimenet testreszabása**: saját oszlopcímet adhatsz, és a mezőérték elé/után HTML-t fűzhetsz (pl. badge, ikon). A mező tartalmát akár kattintható szerkesztési linkké is alakíthatod.
- **Rendezhetőség**: a listát a mezőértékek szerint rendezheted. Szöveghez alapértelmezett, számokhoz **numerikus rendezés** is bekapcsolható, hogy a 2 ne a 10 után jöjjön.
- **Kereshetőség**: megadhatod, hogy a globális admin kereső nézze-e a megadott mezőt. Ez gyorsabb találatokat ad akkor is, ha a kulcsszó nem a címben szerepel.
- **Taxonómia-szűrő**: taxonomy típusú mezőknél felül megjelenő legördülő szűrővel egyetlen kattintással szűrhetsz kategóriára, címkére, vagy bármely egyedi taxonómiára.
- **Több adattípus támogatása**: kezeli a post meta, term meta, user meta mezőket, valamint a Meta Box egyedi adattábláiban (MB Custom Table) tárolt értékeket is.
- **Teljesítmény és natív UI**: könnyű, a Meta Box ökoszisztémához illeszkedő megoldás, amely a WordPress admin felület stílusába simul.

## Gyakorlati példák

- **Kiadói szerkesztőség – „Könyv” CPT**: a listában külön oszlopokban látod a szerzőt, kiadót, oldalszámot és műfajt. Rendezel oldalszám szerint (numerikusan), a műfajra pedig felül legördülő szűrő jelenik meg.
- **Ingatlanportál**: a „Lakások” listában megjeleníted az árat, alapterületet, várost és státuszt. Ár szerint rendezel, státuszra szűrsz, a város mező kereshető.
- **HR rendszer**: a felhasználó-listában oszlopként mutatod az osztályt, munkakört és belépési dátumot. A belépési dátum alapján gyorsan sorba rendezed az új kollégákat.

## Használat

### UI-val (kódmentesen)
1. Nyisd meg: Meta Box > Custom Fields.
2. Válassz egy mezőt, kapcsold be az **Admin column** opciót.
3. Állítsd be az oszlop **pozícióját**, **címét**, **rendezhetőségét**, **kereshetőségét** és – taxonomy mezőknél – a **szűrhetőséget**.
4. Ments, és nyisd meg az admin listát: az új oszlop azonnal megjelenik.

### Kóddal (rugalmas vezérlés)
Az admin oszlopokat mezőszinten, az `admin_columns` paraméterrel állíthatod be.

Egyszerű bekapcsolás:
```php
[
  'id'   => 'publisher',
  'name' => 'Kiadó',
  'type' => 'text',
  'admin_columns' => true,
]
```

Pozíció és rendezés:
```php
[
  'id'   => 'pages',
  'name' => 'Oldalszám',
  'type' => 'number',
  'admin_columns' => [
    'position'   => 'after title',
    'title'      => 'Oldalak',
    'sort'       => 'numeric',   // numerikus rendezés
    'searchable' => false,
  ],
]
```

Taxonómia oszlop szűrővel:
```php
[
  'id'        => 'genre',
  'name'      => 'Műfaj',
  'type'      => 'taxonomy',
  'taxonomy'  => 'genre',
  'admin_columns' => [
    'position'   => 'before date',
    'filterable' => true, // felső legördülő szűrő
  ],
]
```

Linkké alakított érték és kimenet formázása:
```php
[
  'id'   => 'author',
  'name' => 'Szerző',
  'type' => 'text',
  'admin_columns' => [
    'title'  => 'Szerző',
    'link'   => true,                 // kattintható (szerkesztés)
    'before' => '<span class="badge">',
    'after'  => '</span>',
  ],
]
```

## Előfeltételek és kompatibilitás

- Szükséges: **Meta Box**.
- Vizuális beállításokhoz: **Meta Box Builder**.
- Term meta és user meta oszlopokhoz: **MB Term Meta** és **MB User Meta**.
- Egyedi adattáblás tároláshoz: **MB Custom Table** (opcionális, teljesítményhez ajánlott).

## Korlátok és megjegyzések

- A rendezés általában nem-klónozható, nem-többszörös mezőkkel működik megbízhatóan.
- A `filterable` csak taxonomy mezőkre értelmezett.
- Nagy adatmennyiségnél érdemes egyedi adattáblát és megfelelő indexelést használni a teljesítmény érdekében.
- Inline (gyors) szerkesztés és CSV export nem része ennek a kiegészítőnek. Ezekhez használj Admin Columns integrációt.

## Kinek ajánlott?

- **Tartalomkezelők és szerkesztők**: gyors ellenőrzés, rendezés, szűrés a listanézetben.
- **Ügynökségek és fejlesztők**: minimális kódolással professzionális admin táblákat adsz az ügyfeleknek.
- **Adatintenzív projektek**: ahol sok egyedi mező és nagy adatmennyiség van (MB Custom Table támogatással).

## Érték és előnyök

- **Időmegtakarítás**: nem kell egyesével megnyitni a bejegyzéseket az adatok megtekintéséhez.
- **Jobb átláthatóság**: a kritikus mezők „első látásra” látszanak.
- **Kevesebb kód**: a WordPress oszlop- és lekérdezés-hookok kézi írása helyett mezőszintű opciókkal dolgozol.
- **Skálázhatóság**: működik meta táblákkal és egyedi adattáblákkal is.

## Licenc és ár

- Fizetős, GPL kompatibilis licenc.
- Korlátlan számú webhelyen használhatod, az előfizetés tartalmazza a frissítéseket és támogatást. Az ár jellemzően kedvező, egy éves díjért cserébe profi funkciókat kapsz.