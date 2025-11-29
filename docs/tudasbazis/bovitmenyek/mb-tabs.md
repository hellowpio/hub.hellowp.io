---
title: "MB Tabs"
description: "Meta Box prémium kiegészítő, amellyel az egyedi mezőket fülekbe rendezheted a WordPress admin felületén. Átláthatóbb űrlapok, gyorsabb szerkesztés, natív megjelenéssel."
sidebar_label: "MB Tabs"
---

## Mi ez és milyen problémát old meg?

Az **MB Tabs** a Meta Box keretrendszer prémium kiegészítője. Arra való, hogy a Meta Box‑szal létrehozott **egyedi mezőidet fülekbe** rendezd a WordPress adminban. Ha a mezőcsoportjaid hosszúak, görgetősek és nehezen áttekinthetők, a fülek segítenek logikus szekciókra bontani mindent, így gyorsabban megtalálod, amit szerkeszteni szeretnél, és az űrlapok is könnyebben kezelhetők.

Követelmény: szükséged van a Meta Box bővítményre; az MB Tabs önmagában nem használható.

## Fő funkciók, érthetően

- **Mezők csoportosítása fülekbe**: egy mezőcsoporton belül több tabot hozhatsz létre, és megadhatod, mely mezők melyik fülre kerüljenek. A sorrend és a kapcsolat a mezők definícióján múlik – nem kell saját JS/CSS.
- **Három fülstílus**: 
  - `default` – a WordPress natív, egyszerű fül-szerkezete,
  - `box` – kártyaszerű, jól tagolt megjelenés,
  - `left` – bal oldali, vertikális fülek nagy űrlapokhoz.
  A fülek lehetnek felül vagy balra, így az elrendezést a tartalom hosszához igazíthatod.
- **Ikontámogatás**: használhatsz **Dashicons** és **Font Awesome** ikonokat, vagy **saját képet**. Saját ikonfont esetén gondoskodsz a CSS betöltéséről, és már kész is a vizuális jelölés.
- **Alapértelmezett aktív fül**: a `tab_default_active` beállítással megadhatod, melyik fül nyíljon meg elsőként – hasznos, ha van egy elsődleges adatblokk.
- **Fül emlékezet**: a `tab_remember` opcióval a rendszer megjegyzi a legutóbb megnyitott fület, így mentés után oda térsz vissza. Ez csökkenti a kattintgatást és megtartja a szerkesztői fókuszt.
- **Letisztult megjelenés**: elrejtheted a meta box “keretet”, ha teljesen beolvadó, minimalista űrlapot szeretnél.
- **Ökoszisztéma-kompatibilitás**: jól működik más Meta Box kiegészítőkkel (például **MB Columns**), így tabolt, többoszlopos űrlapokat is építhetsz. Beállítási oldalakhoz az **MB Settings Page** ad “oldalszintű” fülezést; az MB Tabs a mezőcsoporton belüli fülezést végzi.

## Hogyan működik?

Két módon használhatod:
- **Vizuálisan a Meta Box Builderrel**: létrehozol egy mezőcsoportot, hozzáadsz “Tab” elemeket, majd a tab után elhelyezett mezők automatikusan ahhoz a fülhöz tartoznak. A tabhoz cím, azonosító és ikon is megadható.
- **Kóddal**: a mezőcsoport definícióban létrehozol egy `tabs` tömböt (fülek listája), beállítod a `tab_style`, `tab_default_active`, `tab_remember` opciókat, és minden mezőnél a `tab` kulccsal jelölöd, melyik fülre tartozik.

### Példakód (alap)

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'title'  => 'Termék adatok',
        'id'     => 'product_data',
        'tabs'   => [
            'general' => [ 'label' => 'Általános', 'icon' => 'dashicons-admin-generic' ],
            'media'   => [ 'label' => 'Média',     'icon' => 'fas fa-photo-video' ],
            'seo'     => [ 'label' => 'SEO',       'icon' => 'path/to/icon.png' ],
        ],
        'tab_style'          => 'box',
        'tab_default_active' => 'general',
        'tab_remember'       => true,
        'fields' => [
            [ 'id' => 'sku',   'name' => 'Cikkszám',     'type' => 'text',   'tab' => 'general' ],
            [ 'id' => 'price', 'name' => 'Ár',           'type' => 'number', 'tab' => 'general' ],
            [ 'id' => 'gal',   'name' => 'Galéria',      'type' => 'image_advanced', 'tab' => 'media' ],
            [ 'id' => 'desc',  'name' => 'Meta leírás',  'type' => 'textarea', 'tab' => 'seo' ],
        ],
    ];
    return $meta_boxes;
} );
```

## Gyakorlati példák

- **Ingatlanadatlap**: “Általános”, “Elhelyezkedés”, “Képek”, “Energetika”. A helyszín mezők és a térkép egy külön fülön, így a szerkesztő nem veszik el a részletekben.
- **Termék-specifikációk**: “Alapadatok”, “Médiák”, “Variációk”, “SEO”. A képek és videók a “Média” fülön, a strukturált adatok az “Alapadatokban”.
- **Komplex egyedi bejegyzéstípus**: “Tartalom”, “Oldalbeállítások”, “Kiemelések”, “Kapcsolódó elemek”. A szerkesztő gyorsan vált a szekciók között, görgetés nélkül.
- **Beállítási oldalak**: az oldal saját füleit az MB Settings Page kezeli, míg az egyes lapokon belüli mezőket az MB Tabs rendezheti további alfülekbe.

## Előnyök és értékajánlat

- **Gyorsabb szerkesztés**: kevesebb görgetés, kevesebb keresgélés.
- **Jobb áttekinthetőség**: logikus szekciók, natív admin UI‑hoz illeszkedő dizájn.
- **Kevesebb fejlesztés**: nincs szükség egyedi JS/CSS tab megoldásra; pár paraméterrel kész a struktúra.
- **Stabil működés**: tipikus tab‑UX problémák (rejtett mezők, validáció, elrendezési ütközések) előre kezelve.
- **Rugalmas dizájn**: ikonok, fülstílusok, vertikális elrendezés, keret nélküli megjelenés.

## Kinek ajánlott?

- **WordPress fejlesztőknek és ügynökségeknek**: akik összetett űrlapokat építenek ügyfeleknek, és szabványos, karbantartható megoldást keresnek.
- **Site buildereknek / no‑code felhasználóknak**: a Builderrel kód nélkül is összerakhatod a tabolt űrlapokat.
- **Tartalommenedzsereknek és szerkesztőknek**: áttekinthetőbb felület, kevesebb hiba, gyorsabb munka.
- **E‑kereskedelmi és katalógus oldalaknak**: sok mező, sok kép, sok specifikáció – a fülek itt hozzák a legnagyobb hasznot.

## Tippek a jó tab‑struktúrához

- **Ne legyen túl sok fül**: inkább 3–6 fő szekció, mint 10 apró. Ha kell, használj almezőket vagy csoportokat.
- **Beszédes címek + ikonok**: azonnal felismerhetővé teszik a szekciókat.
- **Alapértelmezett fül megválasztása**: állítsd arra a fület, amit a felhasználó a leggyakrabban szerkeszt.
- **Vertikális elrendezés nagy űrlapokhoz**: a `left` stílus hosszú fülneveknél és sok mezőnél kényelmesebb.

## Követelmények és kompatibilitás

- **Meta Box szükséges**: az MB Tabs erre épül.
- **Admin kontextusok**: bejegyzések, oldalak, egyedi bejegyzéstípusok, felhasználói profilok, taxonómiák és beállítási oldalak esetén is használható.
- **Ikonok**: Dashicons, Font Awesome, illetve saját ikonok; egyedi ikonfontnál a CSS betöltése a te feladatod.
- **Integrációk**: különösen jól működik az MB Columns‑szal, rácsalapú, tabolt elrendezésekhez.

## Licenc és támogatás

- **Licenc**: nyílt forráskódú, GPL v2+.
- **Használat**: korlátlan számú webhelyen aktiválhatod.
- **Támogatás és frissítések**: hivatalos támogatás és frissítések éves licenccel érhetők el. Az MB Tabs önálló bővítményként és csomagban is megvásárolható.

Összefoglalva: az MB Tabs egy kicsi, de hatásos eszköz, amivel a Meta Box‑os űrlapjaidat valóban használhatóvá, gyorsan szerkeszthetővé és letisztulttá teheted – pont úgy, ahogy a WordPress natív admin UI‑ja elvárja. Ha nagy mezőcsoportokkal dolgozol, szinte biztos, hogy megéri bevetni.