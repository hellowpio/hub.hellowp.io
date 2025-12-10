---
title: "MB Term Meta"
description: "Meta Box kiegészítő taxonómia-termek egyedi mezőihez: egységes szintaxis, natív WordPress term meta API és letisztult admin UI."
sidebar_label: "MB Term Meta"
---

## Mi ez és milyen problémát old meg?

Az MB Term Meta a Meta Box ökoszisztéma hivatalos kiegészítője. Segítségével ugyanazzal az egységes szintaxissal adhatsz egyedi mezőket bármely taxonómia terminhez (kategóriák, címkék, egyedi taxonómiák), mint amit bejegyzésekhez használsz. A WordPress natív term meta API-jára épít, így az adatok szabványosan, megbízhatóan tárolódnak.

Míg a WordPress biztosít term meta API-t, alapból nincs egységes, fejlesztőbarát felület és deklaratív definíció a termin mezőkhöz. Az MB Term Meta pontosan ezt a hiányt pótolja: kapsz egy konzisztens szintaxist és natív admin UI-t.

## Fő funkciók, részletesen

- **Egyedi mezők a termin-szerkesztőben**: Ugyanazt a Meta Box meződefiníciós modellt használhatod, mint bejegyzéseknél; csak a **taxonomies** kulcsot adod meg, és máris megjelennek a mezők a megfelelő taxonómia terminjeinek szerkesztő oldalán.
- **Teljes mezőtípus-támogatás**: Több mint 40 mezőtípus áll rendelkezésedre (szöveg, kép, média, szín, kapcsolatok stb.), támogatott a **klónozás** (ismételhető mezők) és a **validáció**, így komplex adatmodelleket is könnyen felépíthetsz.
- **Natív mentés és lekérés**: Az értékek a WordPress term meta táblába kerülnek. Nincs egyedi adatbázis-séma, nincs vendor lock-in; a lekérés a megszokott Meta Box helperrel történik.
- **Könnyű admin felület**: A mezők a WordPress natív UI mintáit követik, így az adminok gyorsan eligazodnak és örömmel használják.

## Gyakorlati példák

- **Kategória-ikon és szín**: Magazin vagy blog esetén minden kategóriához beállíthatsz ikont és színt, és ezeket a kategória-archívon vagy megjelenítési listákban használhatod.
- **SEO metafield-ek**: Külön meta title és meta description mezőket adhatsz a termin-oldalakhoz, amelyeket sablonban vagy SEO megoldásokkal felhasználhatsz.
- **Megjelenítési logika**: Kategóriaoldalak sablon-variánsa, oldalsáv-pozíció, jogosultsági elvek – mind beállíthatók term meta alapon.
- **Admin listanézet bővítése**: MB Admin Columns-szal a termin mezőket oszlopként jelenítheted meg a taxonómia listanézetében.
- **Headless és integráció**: MB REST API-val a termin mezők a REST végpontokon is elérhetők, így könnyű a frontendre továbbítani őket.

## Hogyan működik? Fejlesztői áttekintés

### Mezőcsoport regisztrálása

```php
add_filter( 'rwmb_meta_boxes', function( $meta_boxes ) {
    $meta_boxes[] = [
        'title'      => 'Kategória beállítások',
        'taxonomies' => 'category', // vagy: ['category', 'post_tag', 'sajat_tax']
        'fields'     => [
            [
                'id'   => 'cat_color',
                'name' => 'Szín',
                'type' => 'color',
            ],
            [
                'id'   => 'cat_icon',
                'name' => 'Ikon',
                'type' => 'image_advanced',
            ],
            [
                'id'   => 'seo_desc',
                'name' => 'Meta description',
                'type' => 'textarea',
            ],
        ],
    ];
    return $meta_boxes;
} );
```

- A **taxonomies** kulcs határozza meg, mely taxonómiák terminjein jelenjen meg a mezőcsoport.
- A **fields** tömbben a teljes Meta Box mezőarzenál használható (opciókkal, validációval, klónozással).

### Mentés és lekérés sablonban

```php
$term_id = get_queried_object_id();

$color   = rwmb_meta( 'cat_color', [ 'object_type' => 'term' ], $term_id );
$icon_id = rwmb_meta( 'cat_icon',  [ 'object_type' => 'term' ], $term_id );
$seo     = rwmb_meta( 'seo_desc',  [ 'object_type' => 'term' ], $term_id );

// Példa: színt beégetjük inline stílusba
echo '<div class="cat-hero" style="--cat-color:' . esc_attr( $color ) . '"></div>';
```

- Az adatok a core term meta táblában élnek, a Meta Box a WordPress natív API-ját használja.

### AIO környezetben aktiváltság ellenőrzése

```php
if ( function_exists( 'mb_term_meta_load' ) ) {
    // Az MB Term Meta modul aktív az All-In-One csomagban.
}
```

## Integrációk

- **MB Admin Columns**: tetszőleges termin mezőt megjeleníthetsz oszlopként a taxonómia listanézetekben (könnyebb ellenőrzés, gyors szerkesztés).
- **MB REST API**: a termin mezők a REST válaszokban is elérhetők (headless, SPA, mobil app integrációkhoz).

## Korlátok és megfontolások

- **Hatókör**: alapértelmezés szerint a mezőcsoport az adott taxonómia összes termére érvényes. Ha csak bizonyos termeknél akarod megjeleníteni, kezeld feltételekkel a sablonban vagy a meződefiníció logikájában.
- **Karbantartás**: használd a legfrissebb Meta Box (vagy AIO) kiadást a kompatibilitás és hibajavítások érdekében.
- **Függőségek**: szükséges a Meta Box keretrendszer; AIO csomag esetén minden együtt települ, az MB Term Meta modullal együtt.

## Előnyök és értékajánlat

- **Egységesség**: ugyanaz a deklaratív modell posztoknál, felhasználóknál és termeknél – könnyű kódújrahasznosítás.
- **Gyors fejlesztés**: nincs egyedi meta box UI építés; gyorsan iterálsz, kevesebb hibalehetőség.
- **Skálázhatóság**: sok mezőtípus, validáció és klónozás – komplex adatmodellekhez is.
- **Későbbi integrációk**: admin oszlopok és REST API támogatás out-of-the-box.

## Kinek ajánlott?

- **Témát és egyedi megoldásokat fejlesztő WordPress fejlesztőknek**, akik strukturált termin-adatokkal dolgoznak.
- **Ügynökségeknek és nagyobb webhelyeknek**, ahol kategória- vagy címkeszintű beállításokra van szükség (megjelenés, SEO, jogosultság).
- **Headless/SPA csapatoknak**, akik REST-en át szeretnék elérni a termin meta adatokat.
- **Site builder-eknek**, akik a kezelhető, natív admin UI-t értékelik.

## Összegzés

Az MB Term Meta stabil, fejlesztőbarát megoldás a taxonómia-termek gazdagítására egyedi adatokkal. Egységes szintaxist és natív admin UI-t ad, csökkenti a fejlesztési időt, egyszerűsíti az admin folyamatokat, és megkönnyíti a sablonok, listanézetek és API-integrációk felépítését. Ha termin-szinten akarsz adatot kezelni WordPressben, ez a kiegészítő pontosan erre való.