---
title: "Meta Box Geolocation"
description: "Prémium Meta Box kiegészítő, amely Google Maps vagy OpenStreetMap alapján automatikusan kitölti a cím- és koordinátamezőket WordPress űrlapokon."
sidebar_label: "Meta Box Geolocation"
---

## Mi ez és milyen problémát old meg?

A Meta Box Geolocation egy fejlesztőbarát kiegészítő a Meta Box keretrendszerhez. Segítségével a felhasználó elég, ha a címmezőbe gépelni kezd, és az automatikus kiegészítés alapján a bővítmény kitölti a kapcsolódó mezőket (város, megye/állam, irányítószám, ország, szélesség/hosszúság stb.). Így elkerülöd a kézi, időigényes címbevitel hibáit, és egységes, standardizált helyadatokat kapsz minden bejegyzésnél.

Tipikus felhasználás: ingatlanhirdetések, események, több telephelyes vállalkozások adatlapjai, „store locator” megoldások – mindenhol, ahol cím és koordináták kellenek.

## Hogyan működik?

- A bővítmény a címmezőbe írt adatot elküldi a Google Maps vagy az OpenStreetMap geokódolójának.
- A szolgáltatás visszaadja a cím összetevőit (pl. locality, postal_code, country), illetve a szélesség/hosszúság koordinátákat.
- A plugin a találatokat a megfelelő mezőidbe írja. Nem csak azonos nevű mezőket kezel: rugalmas kötéseket is beállíthatsz (lásd lent).
- Ha használsz térképmezőt (Google „map” vagy OSM „osm”), kétirányú szinkron jön létre:
  - cím vagy lat/lng módosítása mozgatja a jelölőt,
  - jelölő mozgatása frissíti a koordinátákat.
  - Fontos: a cím szövege nem íródik vissza a jelölő mozgatásából.
- Több címcsoportot is kezel (pl. központ és fióktelep): az address_field paraméterrel minden mezőt a megfelelő címmezőhöz köthetsz.
- Google esetén szűrheted az eredményeket országra és típusokra (pl. csak címek), így pontosabb találatokat kapsz. OSM-nél nincs kulcs vagy extra konfiguráció.

## Fő funkciók részletesen

- Autocomplete és automatikus kitöltés: ahogy gépelsz a címmezőben, valós időben kapsz találatokat; a kiválasztás után a komponensek bekerülnek a megfelelő mezőkbe.
- Kétirányú kötés a térképhez: a koordináták és a jelölő mindig szinkronban maradnak, így az adminban és a frontenden is kényelmes a pozicionálás.
- Rugalmas „binding”: bármely mezőt bármely címkomponenshez köthetsz, akár összefűzéssel is (pl. „házszám + utca”). Rendelkezésre állnak „rövid” variánsok is (pl. államkód).
- Több címcsoport: egy űrlapon több független címmezőt is kezelhetsz, és pontosan meghatározhatod, mely mezők melyik címhez tartozzanak.
- Két szolgáltató: Google (API-kulcs szükséges) vagy OpenStreetMap (kulcs nélkül). Saját adatbázist nem kell fenntartanod.

## Gyakorlati példák

- Ingatlan lista: az ügynök csak beírja a címet, a rendszer automatikusan tölti a várost, irányítószámot, országot és a lat/lng-t. A térképjelölőt finomíthatod, a koordináták frissülnek.
- Eseménybeküldés frontenden: a felhasználó címre keres, kiválasztja a találatot, az űrlap minden címmezőt helyesen kitölt. Az MB Frontend Submission-nel a folyamat kódolás nélkül kihelyezhető.
- Store locator több telephellyel: „Központ” és „Fióktelep” címmezőpár, külön térképekkel. Az address_field gondoskodik róla, hogy minden mező a megfelelő címhez tartozzon.

## Bevezetés és konfiguráció

1) Válaszd ki a szolgáltatót:
- Google: engedélyezd a szükséges API-kat és szerezz API-kulcsot.
- OSM: nincs kulcs, azonnal használható.

2) Add hozzá a geolokációt a Meta Box csoporthoz:
- OSM-hez elég a geo kapcsoló.
- Google-höz add meg az API-kulcsot.

3) A címmező azonosítója kezdődjön „address”-szel az automatikus javaslatokhoz.

4) A kapcsolódó mezők azonosítója legyen címkomponens (pl. locality, postal_code), vagy használd a binding paramétert.

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
  $meta_boxes[] = [
    'title' => 'Helyadatok',
    // OSM:
    // 'geo' => true,
    // Google:
    'geo'  => [ 'api_key' => 'YOUR_GOOGLE_API_KEY' ],
    'fields' => [
      [ 'id' => 'address_main', 'type' => 'text', 'name' => 'Cím (központ)' ],
      [ 'id' => 'locality',     'type' => 'text', 'name' => 'Város',        'address_field' => 'address_main' ],
      [ 'id' => 'postal_code',  'type' => 'text', 'name' => 'Irányítószám', 'address_field' => 'address_main' ],
      [ 'id' => 'country',      'type' => 'text', 'name' => 'Ország',       'address_field' => 'address_main' ],
      [ 'id' => 'lat',          'type' => 'text', 'name' => 'Szélesség',    'address_field' => 'address_main' ],
      [ 'id' => 'lng',          'type' => 'text', 'name' => 'Hosszúság',    'address_field' => 'address_main' ],
      // Binding példa: teljes utca mező összeállítása
      [ 'id' => 'street_full',  'type' => 'text', 'name' => 'Utca + házszám', 'binding' => 'street_number + " " + route', 'address_field' => 'address_main' ],
      // Térképmező (Google: map, OSM: osm)
      [ 'id' => 'map', 'type' => 'map', 'address_field' => 'address_main', 'lat_field' => 'lat', 'lng_field' => 'lng' ],

      // Második címcsoport (fióktelep):
      [ 'id' => 'address_branch', 'type' => 'text', 'name' => 'Cím (fióktelep)' ],
      [ 'id' => 'locality_branch','type' => 'text', 'name' => 'Város', 'address_field' => 'address_branch' ],
    ],
  ];
  return $meta_boxes;
} );
```

Tippek:
- Több cím esetén minden kapcsolódó mezőn add meg az address_field-et.
- A jelölő mozgatása frissíti a koordinátákat; a cím szövegét nem írja felül.

## Előnyök és értékajánlat

- Időmegtakarítás: megszűnik a kézi címkomponens-bevitel.
- Kevesebb hiba: konzisztens, szabványosított adatok (rövid/hosszú államnév, pontos irányítószám).
- Egyszerű integráció: nincs szükség egyedi Google/OSM kódolásra; elég a Meta Box meződefiníció.
- Rugalmasság: tetszőleges mezőkötés, több címcsoport, térkép-szinkron.
- Költségkontroll: ha nem szeretnél Google-kulcsot és számlázást, használd az OSM-et.

## Kinek ajánlott?

- Ingatlanportálok és hirdetési oldalak, ahol pontos helyadat kell listázáshoz és térképes kereséshez.
- Eseményoldalak és rendezvénynaptárak, ahol a szervezők vagy felhasználók címeket adnak meg.
- Vállalkozások és ügynökségek több telephellyel (üzletek, irodák), „store locator” funkcióhoz.
- Katalógusok, címtárak, turisztikai oldalak, ahol a standardizált címadat elengedhetetlen.
- WordPress fejlesztők, akik gyorsan szeretnének megbízható geokódolást beépíteni admin és frontend űrlapokba.

## Korlátozások és megjegyzések

- A bővítmény a Meta Box mezőivel működik; más űrlapbővítők saját mezőit nem tölti ki automatikusan.
- Google használatához megfelelően beállított API-kulcs kell; OSM-hez nem.
- Az autocomplete a címmező azonosítójának „address” előtagjához kötött.
- A cím szövegmező nem frissül vissza a térképen végzett manuális mozgatásból.
- Frontendhez használható a Meta Box frontend űrlapkészítő megoldása.
- Prémium kiegészítő, nyílt forrású (GPL v2+). A bővítményt a Meta Box csapat (eLightUp) fejleszti.