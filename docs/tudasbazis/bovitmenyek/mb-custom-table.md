---
title: "MB Custom Table"
description: "Meta Box prémium kiegészítő egyedi mezők sémázott, saját adatbázis-táblákba mentéséhez, nagy teljesítménnyel és fejlesztőbarát API-val."
sidebar_label: "MB Custom Table"
---

## Mi ez és mit old meg?

Az MB Custom Table a Meta Box prémium bővítménye, amellyel a Meta Box-szal létrehozott egyedi mezőket nem a WordPress alap meta tábláiba, hanem saját, sémázott adatbázis-táblákba mentheted. Minden entitás (bejegyzés, felhasználó, taxonómia, komment) egy sor, és minden mező külön oszlop. Ezzel drasztikusan csökkented a sorok számát, gyorsabbak lesznek a lekérdezések, és átláthatóbbá válik a riportolás/import-export.

## Hogyan működik röviden?

- Az oszlopnevek megegyeznek a mezők azonosítóival.
- Az ID oszlopot a bővítmény kezeli (primer kulcs), és összekapcsolja a WP entitásokkal.
- Csoport (group) mezők felső szintű ID-ja egy oszlop, értéke szerializált tömb.
- A tábla létrehozása a WordPress ajánlott dbDelta mechanizmusával történik, így a séma biztonságosan frissíthető.
- A mezőlekérdezések cache-elve vannak az adott objektumon belül.

## Fő funkciók, érthetően

- Egyedi táblákba mentés: Az összes meződ tárgyanként egy sorban, mezőnként egy oszlopban tárolódik. Ez kevesebb JOIN-t és gyorsabb WHERE feltételeket jelent.
- Teljes meta-típus támogatás: Bejegyzés-, felhasználó-, taxonómia- és komment-meta mentése ugyanazzal a logikával.
- UI-alapú beállítás: Az MB Builderben csak bekapcsolod a „Custom table” opciót; kérésre a tábla automatikusan létrejön (alapból TEXT oszlopokkal).
- Fejlesztői API: Táblák programozott létrehozása (pontos típusokkal és indexekkel), illetve adatműveletek (exists, get, add, update, delete).
- WordPress-kompatibilis sémakezelés: dbDelta-val idempotens, verziózható sémafrissítés.
- Custom Models: Olyan önálló „modellek”, amelyek a teljes adatot egy saját táblában tartják, és admin CRUD felületet kínálnak, posztstruktúra nélkül.
- Integrációk: Admin listanézeti oszlopok (MB Admin Columns), valamint keresés a custom táblák tartalmában megfelelő keresőintegrációval.

## Gyakorlati példák

- Nagy rendelési adatbázis: 40+ mező rendelésenként – meta táblában ez sok tízezer sor, egyedi táblában viszont soronként rendezett, indexelhető mezők.
- Katalógus/ingatlan/CRM: Gyakori szűrés mezőértékekre (pl. státusz, ár, kategória) – gyors WHERE feltételek és indexek.
- Riportolás és export: Minden adat egy táblában, oszlopokban – egyszerű CSV/BI export.
- Custom Models: Nincs szükséged permalinkre/archívumra, de kell admin CRUD és sémázott tárolás – kezeld „üzleti entitásként”.

## Gyors indulás

### UI-val (MB Builder)
1. Nyisd meg a Meta Box > Custom Fields nézetet, szerkeszd a mezőcsoportot.
2. A Settings fülön kapcsold be a „Custom table”-t, add meg a tábla nevét.
3. Opcionálisan kapcsold be az „Auto create table”-t (alapból TEXT oszlopok).

### Kóddal (típusok és indexek fölött teljes kontroll)
```php
use MetaBox\CustomTable\API as MBCT;

add_action( 'init', function() {
    MBCT::create( 'wp_my_orders', [
        'status' => 'VARCHAR(20)',
        'amount' => 'BIGINT',
        'notes'  => 'TEXT',
    ], [ 'status' ] );
} );

// Mezőcsoport (részlet)
return [
  'id'           => 'order_fields',
  'storage_type' => 'custom_table',
  'table'        => 'wp_my_orders',
  'fields'       => [
    [ 'id' => 'status', 'type' => 'select',  'options' => [ 'new' => 'Új', 'completed' => 'Kész' ] ],
    [ 'id' => 'amount', 'type' => 'number' ],
    [ 'id' => 'notes',  'type' => 'textarea' ],
  ],
];
```

## Lekérdezések és kompatibilitás

- WP_Query: A meta_query nem működik a custom táblára. Előbb SQL-lel gyűjtsd az ID-kat, majd WP_Query-ben használd a post__in-t:
```php
global $wpdb;
$ids = $wpdb->get_col( "SELECT ID FROM wp_my_orders WHERE status = 'completed'" );
$q   = new WP_Query( [ 'post__in' => $ids, 'orderby' => 'post__in' ] );
```
- Keresés: Keresőintegrációval a custom táblák tartalma (akár szerializált group-értékek is) kereshetővé tehető.
- Admin listanézet: Az admin oszlopok könnyen testreszabhatók; Custom Models esetén különösen hasznos.

## Előnyök és értékajánlat

- Teljesítmény: Kevesebb rekord, kevesebb JOIN, indexelhető oszlopok – gyorsabb lekérdezések és admin felület.
- Átlátható adatmodell: Sémázott tárolás, könnyebb riportolás és migráció.
- Rugalmasság: UI a gyors beállításhoz, fejlesztői API a professzionális sématervezéshez.
- Jövőállóság: WordPress-ajánlott sémakezelés, idempotens frissítések.

## Kinek ajánlott?

- Fejlesztőknek és ügynökségeknek, akik nagy mennyiségű egyedi mező-adattal dolgoznak.
- E-kereskedelmi, katalógus-, ingatlan- és CRM-projektekhez, ahol létfontosságú a gyors szűrés és riport.
- Olyan rendszerekhez, ahol a posztmeta-duzzadás már teljesítménygondot okoz, vagy célzott üzleti entitásokra van szükség (Custom Models).

## Korlátok és fontos tudnivalók

- A WP_Query meta_* paraméterei nem működnek custom táblákra; külön SQL szükséges az ID-khoz.
- Group mezők értéke szerializált – nehézkes rá SQL-szintű szűrés; csak akkor használd, ha tényleg csoportos tárolás kell.
- Az automatikus tábla-létrehozás minden oszlopot TEXT-ként hoz létre; teljesítményhez definiálj célzott típusokat és indexeket kóddal.
- A Custom Models nem kap front-end sablont/permalinket; admin oldali adatkezelésre optimalizált.

## Adatmigráció

Meglévő mezőid postmeta-ból áthelyezhetők egyedi táblába. Tipikus lépések:
- Kapcsold be a „Custom table”-t és állítsd be a táblát.
- Hozd létre/finomítsd a sémát (típusok, indexek).
- Írj migrációs rutint, amely az érintett postok ID-ján végigmegy, beolvassa a régi mezőket, és az új táblába menti őket.

## Összegzés

Ha strukturált, gyors és skálázható tárolást szeretnél a Meta Box mezőidnek, az MB Custom Table a legjobb eszköz: egyszerre kapod meg a kényelmes UI-t, a fejlesztői kontrollt és a WordPress-kompatibilis sémakezelést. Tudatos sématervezéssel és a lekérdezési sajátosságok figyelembevételével jelentős teljesítmény- és kezelhetőségi előnyt nyersz.