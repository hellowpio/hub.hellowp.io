---
title: "Meta Box Template"
description: "YAML‑alapú konfigurációs réteg a Meta Box‑hoz: mezőcsoportok és mezők létrehozása kódírás nélkül."
sidebar_label: "Meta Box Template"
---

## Mi ez és milyen problémát old meg?

A Meta Box Template (MB Template) egy prémium kiegészítő, amivel a Meta Box mezőcsoportjait és mezőit YAML‑ban írhatod le, a plugin pedig futásidőben PHP konfigurációvá alakítja és regisztrálja azokat. Vagyis nem kell többé hosszú PHP tömböket karbantartanod: egy olvasható, rövid YAML leírásból kapsz működő metaboxokat. Ez gyorsítja a munkát, csökkenti a hibákat, és ideális akkor is, ha a csapatban nem mindenki PHP‑fejlesztő.

## Hogyan működik röviden?

- Te megadod a mezőcsoportok és mezők konfigurációját **YAML** formában.
- Az MB Template ezt a leírást **PHP tömbbé** konvertálja.
- A konvertált konfigurációt átadja a **Meta Box** keretrendszernek, ami regisztrálja és megjeleníti a mezőket a WordPress adminban.
- A változtatások azonnal érvényesülnek (runtime parsing), ezért gyorsan iterálhatsz.

## Fő funkciók, érthetően

- **YAML‑alapú definíció**  
  A Meta Box összes mezőtípusa és paramétere leírható YAML‑ban. Ugyanazt tudod, mint PHP‑ban, csak lényegesen tömörebben és áttekinthetőbben.

- **Beépített beállítási felület**  
  A WordPress adminban a Settings → MB Template oldalon közvetlenül szerkesztheted a YAML sablonokat, vagy elérési utakat adhatsz meg fájlokhoz/mappákhoz. A beépített szerkesztő kódkiemeléssel és szintaxis‑visszajelzéssel segít.

- **Fájl- és mappatámogatás**  
  Nem csak kézzel beillesztett YAML működik: egy vagy több `.yml` fájl és teljes mappák is megadhatók. A plugin több helyről is tud olvasni, és a változások azonnal életbe lépnek. Használhatsz rövidített útvonalváltozókat, például:  
  `%wp-content%`, `%plugins%`, `%themes%`, `%template%`, `%stylesheet%`.

- **Fejlesztői bővíthetőség (hook)**  
  A `meta_box_template_files` szűrővel programból is hozzáadhatsz új fájl- és mappaútvonalakat a figyelt listához.

- **Hibakezelés és kényelmes szerkesztés**  
  Szintaktikai hiba esetén a plugin figyelmeztet, és a beállítási oldalon is jelzi a problémát. A CodeMirror alapú szerkesztés növeli a komfortot és csökkenti a hibákat.

- **Gyors és kompatibilis**  
  A YAML‑alapú definíció együttműködik a Meta Box összes mezőtípusával és paraméterével, így egyszerű és összetett adatmodellekhez is ideális.

## Gyakorlati példák

### 1) Egyszerű mezőcsoport YAML‑ban
Illeszd be a beállítási felületen, vagy mentsd `.yml` fájlba:

```yaml
- id: movie_meta
  title: Film adatok
  post_types: [movie]
  context: normal
  fields:
    - id: release_date
      name: Megjelenés dátuma
      type: date
    - id: rating
      name: Értékelés
      type: number
      min: 0
      max: 10
      step: 0.5
    - id: poster
      name: Poszter
      type: single_image
```

Ezzel a „movie” egyedi bejegyzéstípushoz három mező kerül: dátum, szám és egy képmező.

### 2) Konfigurációk mappából, több forrásból
A Settings → MB Template mezőbe írd be például:

```
%stylesheet%/meta-box/
%plugins%/my-plugin/config/
```

A plugin mindkét helyről beolvassa az összes `.yml` fájlt, és azonnal alkalmazza a változtatásokat.

### 3) Fájlok/mappák hozzáadása hookkal
Bővítsd a figyelt útvonalak listáját kódból:

```php
add_filter( 'meta_box_template_files', function( $paths ) {
    $paths[] = WP_CONTENT_DIR . '/custom-config/meta-box/';
    return $paths;
} );
```

Hasznos, ha egy plugin vagy mu-plugin kezeli a konfigurációkat.

## Telepítés és első lépések

1. Telepítsd és aktiváld a **Meta Box** alapplugint.
2. Telepítsd és aktiváld az **MB Template** kiegészítőt (önállóan vagy a Meta Box AIO részeként).
3. Lépj a **Settings → MB Template** oldalra.
4. Illeszd be a YAML‑t, vagy add meg a YAML fájlok/mappák teljes elérési útját (használhatod a rövidített útvonalváltozókat).
5. Mentsd a beállításokat – a változtatások azonnal látszanak a szerkesztőfelületen.

Tipp: fejlesztői környezetben a runtime parse nagyon kényelmes; éles környezetben érdemes kontrollálni, ki és hogyan módosíthat konfigurációs fájlokat.

## Előnyök és értékajánlat

- **Gyors bevezetés és iteráció**: nincs PHP boilerplate, kevesebb hibalehetőség.
- **Olvasható, rövid konfiguráció**: a YAML könnyen tanulható, csapatban jól kezelhető.
- **Hordozhatóság**: a `.yml` fájlok könnyen vihetők másik site‑ra, és jól verziókezelhetők.
- **Központosítás**: több mappából olvasva is egy helyen menedzselheted a mezők leírását.
- **Skálázhatóság**: a Meta Box teljes ökoszisztémájával kompatibilis, összetett tartalommodellekhez is megfelelő.

## Kinek ajánlott?

- **Site buildereknek és tartalom‑architekteknek**: gyorsan állíthatsz össze mezőcsoportokat kódírás nélkül.
- **Ügynökségeknek**: a YAML fájlok jól illeszkednek Git alapú munkafolyamatokba, több projekt között újrahasznosíthatók.
- **Fejlesztőknek**: tisztább konfiguráció, programozható bővíthetőség hookokkal, és teljes Meta Box kompatibilitás.

## Követelmények, licenc, beszerzés

- **Előfeltétel**: a Meta Box alapplugin kötelező.
- **Licenc**: nyílt forráskódú licenc alatt érhető el, korlátlan számú webhelyen használható.
- **Beszerzés**: önálló prémium kiegészítőként vagy Meta Box csomag részeként érhető el.

## Jó gyakorlatok

- Hozz létre egy külön **config mappát** a témádban (például: `%stylesheet%/meta-box/`), és tedd verziókezelés alá.
- Strukturáld a YAML fájlokat modulonként (pl. `seo.yml`, `product.yml`, `options.yml`), hogy könnyebb legyen a karbantartás.
- Éles környezetben vezess be review folyamatot a konfigurációs fájlokra, és korlátozd a módosítás jogát.

## Összegzés

Az MB Template egy könnyen bevezethető, YAML‑alapú konfigurációs réteg a Meta Box‑hoz. Segítségével gyorsabban, tisztábban és hordozható módon írhatod le az egyedi meta mezőket – akár egy fájlban, akár több mappában szervezve, valós idejű frissüléssel és fejlesztőbarát eszközökkel. Ha a célod a gyors iteráció, kevesebb hiba és jobb csapatmunka a meta mezők körül, ez a kiegészítő pontosan neked való.