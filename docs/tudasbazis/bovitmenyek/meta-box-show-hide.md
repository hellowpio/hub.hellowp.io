---
title: "Meta Box Show Hide"
description: "Feltételes megjelenítés/elrejtés meta box szinten, valós időben a WordPress szerkesztőben a Meta Box keretrendszerhez."
sidebar_label: "Meta Box Show Hide"
---

## Mi ez és milyen problémát old meg?

A Meta Box Show Hide egy prémium kiegészítő a Meta Box keretrendszerhez. Segítségével **teljes meta boxokat** tudsz **feltételesen megjeleníteni vagy elrejteni** a WordPress szerkesztőben, azonnali (JavaScript-alapú) váltással. Akkor hasznos, ha a szerkesztőfelületet szeretnéd letisztítani: csak az adott kontextushoz releváns beállítások látszanak, a többi nem zavarja a munkát. Így gyorsabban szerkesztesz, kevesebb hibával, és nem kell egyedi PHP feltételeket írnod.

## Hogyan működik?

A meta box definíciójához adsz egy **show** és/vagy **hide** szabálycsoportot. Ezekben megmondod, milyen körülmények között jelenjen meg vagy tűnjön el a meta box. A váltás **valós időben**, oldalfrissítés nélkül történik. A rejtés JavaScript-tel történik, tehát a markup betöltődik; ha el van rejtve, a mezők értékei mentéskor továbbra is beküldésre kerülnek.

Támogatott feltételek:
- **template**: oldal- és post type sablonok (post_type:template.php formátummal is).
- **post_format**: bejegyzésformátumok (pl. gallery, video).
- **category**: bejegyzéskategóriák.
- **egyedi taxonómiák**: a taxonómia slugját kulcsként használod (hierarchikus taxonómiák).
- **is_child**: csak akkor jelenjen meg, ha az oldalnak van szülője.
- **input_value**: tetszőleges admin UI mezők pillanatnyi értéke CSS-szelektor + érték párokkal.

A **show** és **hide** csoportokon belül a feltételeket **AND/OR** kapcsolattal kombinálhatod a `relation` kulccsal.

## Fő funkciók, részletesen

- **Meta box szintű feltételes logika**: Nem egyes mezőket, hanem teljes dobozokat kezelsz. Így a szerkesztő valóban a kontextushoz igazodik.
- **Azonnali, JS-alapú váltás**: Ha változik egy feltétel (pl. kategória kiválasztása), a meta boxok azonnal fel/eltűnnek, oldalfrissítés nélkül.
- **Széles körű feltétel-készlet**: Sablonok, post formátumok, kategóriák, hierarchikus taxonómiák, szülő/gyerek oldal viszony, sőt bármely admin input aktuális értéke is figyelhető.
- **Összetett logika**: Több feltételt kombinálhatsz, külön show és hide csoportokkal, AND/OR operátorral.
- **Blokkszerkesztő és klasszikus szerkesztő támogatás**: Gond nélkül működik mindkét szerkesztőben.

## Gyakorlati példák

### 1) Oldalsablon-specifikus beállítások
Csak landing oldalsablonnál jelenjen meg a “Hero szekció” meta box:
```php
add_filter( 'rwmb_meta_boxes', function( $boxes ) {
  $boxes[] = [
    'title' => 'Hero szekció',
    'post_types' => ['page'],
    'show' => [
      'template' => ['templates/landing.php', 'page-landing.php'],
    ],
    'fields' => [
      ['id' => 'hero_title', 'type' => 'text', 'name' => 'Címsor'],
    ],
  ];
  return $boxes;
} );
```

### 2) Post type sablon + kategória kombináció (AND)
Egy CPT meta box csak akkor látszódjon, ha adott post type sablon és egy “event” kategória is be van állítva:
```php
'show' => [
  'relation' => 'AND',
  'template' => ['event:single-event.php'],
  'category' => ['event'],
]
```

### 3) Egyedi taxonómia és post formátum (OR)
Zenei bejegyzéseknél: ha a “genre” taxonómiában rock VAGY a formátum “gallery”, jelenjen meg a galéria beállítás:
```php
'show' => [
  'relation' => 'OR',
  'genre' => ['rock'],      // egyedi, hierarchikus taxonómia slug-ja kulcsként
  'post_format' => ['gallery'],
]
```

### 4) Szülő oldalhoz kötött mezők
Csak akkor látszódjon, ha az oldalnak van szülője:
```php
'show' => [
  'is_child' => true,
]
```

### 5) Azonnali váltás admin input alapján
Ha egy select mező értéke “gallery”, jelenjen meg a képgaléria meta box:
```php
'show' => [
  'input_value' => [
    ['select[name="post_format"]', 'gallery'],
  ],
]
```

### 6) Bizonyos kategóriáknál rejts el egy meta boxot
```php
'hide' => [
  'category' => ['news', 'press'],
]
```

## Előnyök és értékajánlat

- **Tiszta szerkesztőfelület**: a szerkesztők csak a releváns beállításokat látják.
- **Kevesebb hiba**: csökken a rossz mezőtöltés esélye, mert a kontextuson kívüli dobozok eltűnnek.
- **Gyorsabb munka**: valós idejű váltás, nincs oldalfrissítés.
- **Kevesebb egyedi kód**: nincs szükség külön PHP ellenőrzésekre; mindent a meta box konfigurációban állítasz.
- **Rugalmas bővíthetőség**: egyszerűen kombinálható más Meta Box kiegészítőkkel.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**, akik többféle tartalomtípussal és összetett szerkesztési folyamattal dolgoznak.
- **Webszerkesztő csapatoknak**, ahol fontos a gyors és hibamentes tartalomkészítés.
- **Összetett sablonokat használóknak**, akik eltérő sablonokhoz eltérő beállításokat akarnak láttatni.
- **Olyan projekteknél**, ahol az admin UI-n belüli értékek alapján kell azonnal váltani meta boxok között.

## Különbségek kapcsolódó kiegészítőkhöz

- **MB Conditional Logic**: mező- és tetszőleges HTML-elem szinten is vezérel; ha nem meta box szinten akarsz szabályozni, ezt használd.
- **MB Include Exclude**: PHP-oldali megjelenítés/elrejtés; nem azonnali váltás. Ha azt is szeretnéd, hogy a rejtett mezők értékei se kerüljenek mentésre, ez a célszerű.

## Korlátozások és megfontolások

- **Meta box szint**: egyedi mezők feltételes megjelenítéséhez válaszd az MB Conditional Logic-ot.
- **Hierarchikus taxonómiák**: egyedi taxonómiáknál ezeket támogatja a szabályrendszer.
- **JS-es rejtés**: a rejtett mezők értékei mentéskor is beküldésre kerülnek. Ha ezt el akarod kerülni, használd a PHP-oldali megoldást.

## Licencelés és csomagolás

- **Licenc**: GPL v2+.
- **Használat**: korlátlan számú webhelyen.
- **Frissítés és támogatás**: éves előfizetéssel.
- **Elérhetőség**: önállóan vagy csomagban.
- **Ár**: megfizethető, a fejlesztési idő és hibák csökkentésével gyorsan megtérül.

---

Szeretnél saját esetedre szabott mintakódot (sablonhoz/kategóriához/taxonómiához kötve, input-alapú azonnali váltással)? Írj a pontos igényről, és adok kész snippetet.