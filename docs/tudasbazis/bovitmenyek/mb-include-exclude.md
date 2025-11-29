---
title: "MB Include Exclude"
description: "Meta Box kiegészítő feltételes megjelenítéshez: teljes meta box csoportokat mutathatsz vagy rejthetsz admin felületeken include/exclude szabályokkal."
sidebar_label: "MB Include Exclude"
---

## Mi ez és milyen problémát old meg?

A MB Include Exclude a Meta Box hivatalos kiegészítője, amellyel **meta box csoportokat** (field groupokat) tudsz **feltételesen megjeleníteni vagy elrejteni** az admin felületeken. Célja, hogy a szerkesztők csak azt lássák, ami nekik releváns: kevesebb zaj, kevesebb téves szerkesztés, gyorsabb munka. Nem mezőszinten, hanem **meta box szinten** működik, így egy egész csoportot kezelsz egyszerre.

## Hogyan működik? – Fő funkciók, érthetően

- **Include/Exclude szabályok:** A meta box regisztrációjához hozzáadhatsz egy `include` és/vagy `exclude` tömböt.  
  - A meta box akkor jelenik meg, ha az `include` feltételek teljesülnek, és egyetlen `exclude` feltétel sem igaz rá. Gyakorlatban az `exclude` felülír, ha találat van.
- **Több feltétel kombinálása:** A szabályokon belül a `relation` kulccsal állíthatod, hogy **AND** (minden feltétel teljesüljön) vagy **OR** (bármelyik elég). Alapértelmezésben OR.
- **Széles feltételkészlet:** Példák, amikre szűrhetsz:
  - Bejegyzés/oldal: `id`, `parent`, `slug`, `is_child`
  - Oldalsablon: `template`
  - Kategória, címke, egyedi taxonómia: `category`, `tag`, `{taxonomy_slug}`, `parent_{taxonomy_slug}`
  - Jogosultság: `user_role`, `user_id`
  - Felhasználói profil képernyő (MB User Meta szükséges): `edited_user_role`, `edited_user_id`
  - Egyedi logika: `custom` (saját PHP callback true/false visszatéréssel)
- **Mikor alkalmazza a szabályokat:** A döntés **oldalbetöltéskor vagy mentés után** történik. Nem “élő” JS kapcsolgatás; ha azonnali, értékváltozásra reagáló logikát szeretnél, használd a Show Hide vagy Conditional Logic kiegészítőket.
- **Teljesítmény és tisztaság:** A nem releváns meta box ténylegesen **nem töltődik be**, így az admin felület letisztultabb és gyorsabb.

## Gyakorlati példák

- **Sablonhoz kötött beállítások:** Egy “Kapcsolat” oldalsablonhoz tartozó mezők csak azon az oldalon látszanak (pl. térkép, nyitvatartás).
- **Kategória-alapú megjelenítés:** “Hírek” kategóriában lévő bejegyzésekhez speciális mezőcsoportot adsz (pl. forrás, szerzői megjegyzés).
- **Jogosultság szerinti elrejtés:** Haladó SEO beállítások csak adminnak jelenjenek meg; szerkesztők elől legyenek rejtve.
- **Összetett, kombinált logika:** Például CSAK akkor mutasd a boxot, ha egy adott oldalsablon VAN és egy adott taxonómia ÉS a bejelentkezett felhasználó admin.

## Telepítés és konfigurálás – rövid áttekintés

1. Telepítsd és aktiváld a kiegészítőt, majd a meta box regisztrációs tömbjében add meg az `include`/`exclude` kulcsokat.
2. A szabályok értékei lehetnek azonosítók, slugok, role-ok, vagy tömbök több értékkel.
3. Egyedi logikához használj `custom` callbacket.

### Kódminták

Egyszerű sablon + kategória + szerepkör példa:

```php
add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'id'         => 'seo_beallitasok',
        'title'      => 'SEO beállítások',
        'post_types' => ['post', 'page'],
        'fields'     => [
            ['id' => 'seo_title', 'type' => 'text', 'name' => 'SEO cím'],
        ],
        'include' => [
            'relation' => 'AND',
            'template' => ['templates/kapcsolat.php'], // Blade esetén pl. 'views/kapcsolat.blade.php'
            'category' => ['hirek'],
        ],
        'exclude' => [
            'user_role' => ['editor'], // szerkesztők elől rejtve
        ],
    ];
    return $meta_boxes;
} );
```

Egyedi callback használata:

```php
function my_mb_condition( $meta_box ) {
    // Csak oldalakon és csak akkor, ha a cím 20 karakternél hosszabb
    return get_post_type() === 'page' && mb_strlen( get_the_title() ) > 20;
}

add_filter( 'rwmb_meta_boxes', function ( $meta_boxes ) {
    $meta_boxes[] = [
        'id'     => 'halado_opciok',
        'title'  => 'Haladó opciók',
        'fields' => [ ['id' => 'flag', 'type' => 'checkbox', 'name' => 'Speciális flag'] ],
        'include' => [
            'custom' => 'my_mb_condition',
        ],
    ];
    return $meta_boxes;
} );
```

## Előnyök és értékajánlat

- **Kevesebb zaj, kevesebb hiba:** A szerkesztők csak a releváns mezőket látják.
- **Gyorsabb munka:** Letisztult admin felület, kevesebb görgetés és keresgélés.
- **Karbantartható logika:** Egységes include/exclude API helyettesíti a szétszórt, ad hoc feltételkezelést.
- **Jobb teljesítmény:** A felesleges meta boxok nem töltődnek be.
- **Rugalmas testreszabás:** Taxonómiák, sablonok, jogosultságok és egyedi callback kombinálhatók.

## Célközönség

- **Fejlesztők és ügynökségek:** Több tartalomtípusú, komplex admin felületek szabályalapú tisztítása.
- **Site builderek:** Gyors konfiguráció kódolás nélkül vagy minimális kóddal.
- **Nagy szerkesztőcsapatot kiszolgáló oldalak:** Jogosultság-alapú láthatóság és hibamegelőzés.

## Jó tudni – megkötések

- **Meta box szintű vezérlés:** Egyedi mezők feltételes mutatásához használj mezőszintű logikát (vagy szervezd külön meta boxokba).
- **Nem “élő” toggling:** A szabályok nem váltanak azonnal értékváltozásra; a döntés oldalbetöltéskor/mentéskor történik.
- **Felhasználói profil képernyők:** Az `edited_user_role` és `edited_user_id` feltételekhez szükséges a felhasználói meta kezelést biztosító kiegészítő.
- **Sablonnevek:** Blade-alapú témáknál a WordPress által mentett sablonértéket add meg (pl. `views/valami.blade.php`).

## Összegzés

A MB Include Exclude ideális, ha a **meta box csoportokat kontextus, sablon, taxonómia vagy jogosultság** alapján szeretnéd láthatóvá tenni vagy eltüntetni. Tiszta, skálázható és könnyen karbantartható szabályrendszert ad, amellyel személyre szabott, gyors és biztonságos szerkesztői élményt építhetsz. Ha azonnali, mezőszintű vagy értékfüggő kapcsolgatás a cél, válassz kiegészítőket, amelyek erre specializáltak.