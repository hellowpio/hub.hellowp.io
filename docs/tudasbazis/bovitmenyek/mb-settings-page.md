---
title: "MB Settings Page"
description: "Prémium Meta Box kiegészítő, amellyel gyorsan készíthetsz testreszabható beállítási oldalakat és Theme Options felületeket, egységes UI-val és fejlesztőbarát API-val."
sidebar_label: "MB Settings Page"
---

## Mi ez és milyen problémát old meg?

Az MB Settings Page a Meta Box keretrendszer prémium bővítménye. Segítségével teljesen testreszabható beállítási (options) oldalakat hozhatsz létre témákhoz, pluginekhez vagy ügyfélprojektekhez – akár többet is, menü- és tabstruktúrában. Ahelyett, hogy a WordPress Settings API körülményes kódját írnád, kész komponenseket, a Meta Box összes mezőtípusát és egységes admin felületet kapsz. Ezzel drasztikusan csökkented a kódmennyiséget, miközben a UI konzisztens és ismerős marad a felhasználók számára.

## Fő funkciók és hogyan működnek

- **Beállítási oldalak UI-ból és kóddal**:  
  - UI: a Meta Box Builderben néhány kattintással megadod a menü helyét, ikonját, elrendezését, majd mezőcsoportokat rendelsz az oldalhoz.  
  - Kód: az oldalak a `mb_settings_pages` szűrővel regisztrálhatók; a mezőcsoportok a `settings_pages` paraméterrel kapcsolódnak az oldalhoz.
- **Admin menü integráció**:  
  Felső szintű menüt vagy al-menüt hozhatsz létre bármely parent alatt. Beállíthatod a pozíciót és az ikont (Dashicons, Font Awesome, SVG vagy egyedi URL).
- **Elrendezés és navigáció**:  
  Választhatsz **Boxes** (meta box stílus) vagy **No boxes** (klasszikus WP settings) nézetet, 1–2 oszlopos elrendezést, és tabokat a tetején vagy bal oldalon – akár ikonokkal.
- **Help tabs támogatás**:  
  Az admin felület “Help” paneljébe saját füleket és tartalmat adhatsz, így kontextusfüggő súgót biztosíthatsz.
- **WordPress Customizer integráció**:  
  A beállítási oldal megjelenhet a Customizerben panelként; az egyes meta boxok szekciókká válnak. Kérheted, hogy csak a Customizerben látszódjon. A fájl/kép mezők automatikusan fejlettebb (advanced) változatra váltanak; a postMessage nem támogatott (frissítés történik).
- **Multisite (hálózati) beállítások**:  
  Központi (network) oldalt is létrehozhatsz, így például API-kulcsok egy helyen kezelhetők az egész hálózatra.
- **Tiszta mentés és adatszerkezet**:  
  A mezők egyetlen opció alatt, tömbként mentődnek. Ez kíméli az options táblát és átláthatóvá teszi a tárolást. Az opciónév testreszabható; kérheted a theme mods tárhely használatát is.
- **Mentés/Visszaállítás mező**:  
  Beépített “backup” mező exportálja JSON-ba az összes beállítást; importtal egy kattintás a visszaállítás vagy migráció.
- **Fejlesztői horgok és egységes lekérdezés**:  
  Akciók (pl. mentés utáni folyamatokhoz) és egységes getter: `rwmb_meta( 'field_id', ['object_type' => 'setting'], 'option_name' )`.  
- **Kompatibilitás**:  
  Minden Meta Box mezőtípussal működik, és együttműködik az MB Tabs, MB Columns kiegészítőkkel.

## Gyakorlati példák

- **Theme Options**: logó, márkaszínek, layout kapcsolók, header/footer beállítások – tabokra rendezve, kétoszlopos “Boxes” nézettel.  
- **Plugin beállítási oldal**: saját top-level menüvel, egyedi ikonnal és capability-vel.  
- **Ügyféloldalak általános beállításai**: cégnév, cím, kapcsolat, analitika/3rd party kulcsok – mind egyetlen opcióként mentve.  
- **Multisite központi konfiguráció**: külső szolgáltatás API-kulcsai hálózati szinten, amit minden aloldal felhasznál.

## Rövid használati folyamat

- **UI-val**  
  1. Menj a Meta Box → Settings Pages → Add New pontra.  
  2. Állítsd be a menüt, elrendezést (Boxes/No boxes), oszlopokat, tabokat, ikont és jogosultságot.  
  3. A Builderben rendeld a mezőcsoportokat az oldalhoz a `settings_pages` paraméterrel.

- **Kóddal (példa)**

```php
// 1) Settings page regisztrálása
add_filter( 'mb_settings_pages', function( $settings ) {
    $settings[] = [
        'id'          => 'theme_options',
        'option_name' => 'my_theme_options',
        'menu_title'  => 'Theme Options',
        'parent'      => 'themes.php',
        'icon_url'    => 'dashicons-admin-customize',
        'style'       => 'boxes',
        'columns'     => 2,
        // 'network'   => true, // hálózati oldalhoz
        // 'customizer'=> ['panel' => 'theme_options'],
        'capability'  => 'edit_theme_options',
    ];
    return $settings;
} );

// 2) Mezőcsoport hozzárendelése
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
    $meta_boxes[] = [
        'title'          => 'Általános',
        'settings_pages' => ['theme_options'],
        'fields'         => [
            [ 'id' => 'logo',        'name' => 'Logó',       'type' => 'image_advanced' ],
            [ 'id' => 'brand_color', 'name' => 'Márkaszín',  'type' => 'color' ],
            [ 'id' => 'backup',      'name' => 'Backup',     'type' => 'backup' ],
        ],
    ];
    return $meta_boxes;
} );

// 3) Értékek lekérése a frontenden
$logo_id = rwmb_meta( 'logo', [ 'object_type' => 'setting' ], 'my_theme_options' );
```

## Előnyök és értékajánlat

- **Idő- és kódtakarékos**: a Settings API „ragasztgatása” helyett kész UI-t és mezőtípusokat kapsz.  
- **Konzisztens admin élmény**: tabs/boxes nézet, ismerős WordPress-es minták.  
- **Jobb teljesítmény és rend**: minden beállítás egy opció alatt tárolva.  
- **Gyors testreszabás**: menü, ikon, jogosultság, elrendezés néhány paraméterrel állítható.  
- **Könnyű migráció**: JSON alapú export/import a backup mezővel.  
- **Rugalmas megjelenítés**: admin oldal, Customizer vagy mindkettő.

## Kinek ajánlott?

- **Témakészítőknek**: professzionális Theme Options percek alatt.  
- **Plugin fejlesztőknek**: saját beállítási UI minimális kóddal.  
- **Ügynökségeknek és site buildereknek**: egységes, karbantartható ügyfélbeállítások.  
- **Multisite üzemeltetőknek**: központi, hálózati konfiguráció.

## Fontos részletek és korlátok

- **Customizer**: a fájl/kép mezők automatikusan advanced típusra váltanak; a postMessage nem támogatott, oldalfrissítés történik.  
- **Jogosultság**: oldalanként állítható capability (alapértelmezetten a téma opciók szerkesztéséhez igazodva).  
- **Licenc és elérhetőség**: prémium kiegészítő, nyílt forrású licenccel, korlátlan számú webhelyen használható.

## Összegzés

Az MB Settings Page gyors, fejlesztőbarát megoldás skálázható beállítási felületekhez. Egységes UI-t, a Meta Box teljes mezőtípus-ökoszisztémáját, Customizer- és Multisite-támogatást, tiszta adatkezelést és beépített backupot kapsz – mindezt minimális kód mellett. Ha stabil, professzionális és könnyen karbantartható beállítási rendszert keresel, ez az a bővítmény, amire szükséged van.