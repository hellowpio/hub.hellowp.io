---
title: "Meta Box Columns"
description: "Prémium Meta Box kiegészítő, amellyel a szerkesztői űrlapokon 12 oszlopos rácsba rendezheted az egyedi mezőket a gyorsabb, átláthatóbb adatbevitelhez."
sidebar_label: "Meta Box Columns"
---

## Mi ez és mit old meg?

A Meta Box Columns a Meta Box keretrendszer prémium kiegészítője, amely a beviteli űrlapokon többoszlopos elrendezést ad az egyedi mezőidnek. Ha hosszú, „görgetős” admin űrlapjaid vannak, ezzel 12 oszlopos rácsba rendezheted a mezőket, így sűrűbb, logikusabb, gyorsabban kitölthető felületet kapsz. A használathoz szükség van a Meta Box alapbővítményre.

## Hogyan működik? Fő funkciók

- **12 oszlopos rács**  
  Minden mezőnek megadhatod az oszlopszélességét 1–12 között. A bővítmény automatikusan sorokba töri és stílusozza az elrendezést. Egy sor összszélessége 12 legyen (pl. 6+6 vagy 4+4+4).

- **Egyszerű szintaxis mezőnként**  
  A legegyszerűbb használat: a meződefinícióhoz hozzáadsz egy `columns` paramétert (pl. `columns: 4`). Így gyorsan oszlopokra bonthatod a már meglévő mezőidet.

- **Haladó elrendezés oszlopdefiníciókkal**  
  A teljes metaboxhoz előre definiálhatsz oszlopokat (mérettel és opcionális egyedi CSS osztállyal), majd a mezőket az adott oszlophoz rendeled (`column: 'left'`). Így finoman szabályozhatod a layoutot, és egy oszlopban több mezőt is csoportosíthatsz.

- **Több mező egy oszlopban**  
  Haladó módban logikus blokkokat építhetsz: pl. egy keskeny jobb oldali oszlopban lehet az összes „Meta” információ, míg a bal oldalon a fő tartalom.

- **Beágyazott oszlopok csoportokban**  
  Csoport (Group) mezők almezőin belül is létrehozhatsz oszlopokat. Ez összetett entitásoknál (pl. személy, termék) különösen hasznos.

- **Stílusbővítés és finomhangolás**  
  Haladó módban oszloponként egyedi CSS osztályt adhatsz, így a téma/admin stílusaihoz illesztheted az űrlap megjelenését.

- **Kombinálhatóság**  
  Kifejezetten jól működik együtt füles elrendezéssel (pl. Tabs kiegészítő), így az oszlopok és fülek kombinációjával profi, gyorsan használható szerkesztői felületet kapsz.

## Gyakorlati példák

- **Termékadatok**: ár, SKU, készlet három egyenlő szélességű oszlopban a gyors rálátásért.  
- **Ingatlan**: bal oldalon a fő tartalom és galéria (8 oszlop), jobb oldalon térkép és metaadatok (4 oszlop), hogy kitöltés közben minden szem előtt legyen.  
- **Személy entitás**: név, pozíció, elérhetőségek külön oszlopokban; a „Kapcsolat” csoporton belül e-mail és telefon fele-fele arányban.  
- **Opcióoldal**: általános beállítások balra, megjelenés/nyomtatási opciók jobbra, kevesebb görgetéssel.

## Kódminták

### 1) Egyszerű: oszlopszélesség mezőnként
```php
$meta_boxes[] = [
  'title'      => 'Termék adatok',
  'id'         => 'product_meta',
  'post_types' => ['product'],
  'fields'     => [
    [ 'id' => 'price', 'type' => 'number', 'name' => 'Ár',     'columns' => 4 ],
    [ 'id' => 'sku',   'type' => 'text',   'name' => 'SKU',    'columns' => 4 ],
    [ 'id' => 'stock', 'type' => 'number', 'name' => 'Készlet','columns' => 4 ],
  ],
];
```

### 2) Haladó: előre definiált oszlopok
```php
$meta_boxes[] = [
  'title'      => 'Ingatlan',
  'id'         => 'real_estate',
  'post_types' => ['property'],
  'columns'    => [
    'left'  => [ 'size' => 8 ],
    'right' => [ 'size' => 4, 'class' => 'is-sticky' ],
  ],
  'fields'     => [
    [ 'id' => 'headline', 'type' => 'text',           'name' => 'Cím',     'column' => 'left' ],
    [ 'id' => 'gallery',  'type' => 'image_advanced', 'name' => 'Galéria', 'column' => 'left' ],
    [ 'id' => 'map',      'type' => 'map',            'name' => 'Térkép',  'column' => 'right'],
  ],
];
```

### 3) Beágyazott oszlopok csoportban
```php
$meta_boxes[] = [
  'title'      => 'Személy',
  'id'         => 'person_meta',
  'post_types' => ['person'],
  'fields'     => [
    [
      'id'     => 'person_group',
      'type'   => 'group',
      'name'   => 'Adatok',
      'fields' => [
        [ 'id' => 'first_name', 'type' => 'text',  'name' => 'Keresztnév',  'columns' => 6 ],
        [ 'id' => 'last_name',  'type' => 'text',  'name' => 'Vezetéknév',  'columns' => 6 ],
        [ 'id' => 'email',      'type' => 'email', 'name' => 'E-mail',      'columns' => 6 ],
        [ 'id' => 'phone',      'type' => 'text',  'name' => 'Telefon',     'columns' => 6 ],
      ],
    ],
  ],
];
```

## Előnyök és értékajánlat

- **Kevesebb görgetés, gyorsabb munka**: a szerkesztők gyorsabban találják meg és töltik ki a mezőket.  
- **Rendezett, következetes UI**: 12 oszlopos rács, előre látható tördeléssel.  
- **Rugalmas összetett űrlapokhoz**: csoportok, beágyazott oszlopok, több mező egy oszlopban.  
- **Karbantartható kód**: deklaratív beállítások, könnyű továbbfejlesztés és témához igazítás.

## Célközönség

- **WordPress fejlesztők és ügynökségek**: komplex CPT-k gyors építése, skálázható admin UI.  
- **Site builderek**: meglévő Meta Box alapokra egyszerűen illeszthető oszloposítás.  
- **Tartalomszerkesztők**: áttekinthetőbb űrlapok, kevesebb hibázás, nagyobb sebesség.

## Használati megjegyzések és korlátok

- **12-es szabály**: egy sorban az oszlopok összege 12 legyen a várt tördeléshez.  
- **Függőség**: a használathoz a Meta Box alapbővítmény szükséges.  
- **Stílus**: haladó módban oszloponként CSS osztállyal finomíthatod a megjelenést; érdemes a használt admin témával együtt tesztelni.  
- **Kombináció fülekkel**: a Tabs kiegészítővel még jobb, többdimenziós űrlap-UX érhető el.

## Fontos megkülönböztetés

- **MB Columns**: az űrlapokon, a szerkesztőképernyőn rendezi oszlopokba a mezőket (layout).  
- **MB Admin Columns**: az admin listaoldalakon hoz létre oszlopokat a mezőértékekből (táblázatos nézet). Ne keverd össze a kettőt!

## Licenc és elérhetőség

A kiegészítő nyílt forrású licenccel érhető el, kereskedelmi támogatással. Előfizetés esetén korlátlan számú webhelyen használhatod, és jár hozzá frissítés és támogatás. A pontos ár és feltételek a fejlesztő oldalán találhatók.