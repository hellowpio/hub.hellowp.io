---
title: "Advanced Custom Fields PRO"
description: "Fizetős, önálló WordPress bővítmény, amellyel strukturált, egyedi mezőket és összetett tartalommodelleket hozhatsz létre – Repeaterrel, Flexible Contenttel, opcióoldalakkal és ACF Blocks-szal."
sidebar_label: "Advanced Custom Fields PRO"
---

## Mi ez és milyen problémát old meg?

Az **Advanced Custom Fields PRO** (ACF PRO) egy önálló WordPress bővítmény, amellyel tetszőleges, strukturált adatmezőket adhatsz a szerkesztőfelületekhez (bejegyzések, oldalak, egyedi bejegyzéstípusok, taxonómiák, felhasználók, média, kommentek, opcióoldalak). A cél: a „szövegdobozos” tartalom helyett jól definiált űrlapokkal vidd fel az adatot, és azt tiszta, kiszámítható **PHP API-val** jelenítsd meg a sablonokban. Így konzisztens szerkesztői élményt és karbantartható kódot kapsz – kevesebb hibával, gyorsabb fejlesztéssel.

Röviden: az ACF PRO-val tartalommodellt tervezel, mezőcsoportokat rendelsz helyekhez, az értékeket pedig `get_field()`/`the_field()` hívásokkal olvasod ki. A PRO kiadás a haladó mezőtípusokkal és eszközökkel igazi „svájcibicska” a modern WordPress projektekben.

## Fő funkciók (PRO)

### Repeater mező
Ismétlődő elemek (sorok) tetszőleges almezőkkel – ideális listákhoz, csúszkákhoz, csapatblokkokhoz. Kezeli a min/max korlátokat, összehajtható sorokat és különböző elrendezéseket.

```php
<?php if (have_rows('team')): ?>
  <ul>
    <?php while (have_rows('team')): the_row(); ?>
      <li>
        <strong><?php the_sub_field('name'); ?></strong>
        <span><?php the_sub_field('role'); ?></span>
      </li>
    <?php endwhile; ?>
  </ul>
<?php endif; ?>
```

### Flexible Content mező
„Blokkos” oldalépítés több **layouttal**, amelyeket a szerkesztő vegyesen, sorban építhet össze (hero, feature-k, CTA, stb.). 6.5-től kényelmesebb UX (pl. átnevezhető layoutok).

```php
<?php if (have_rows('content_sections')): ?>
  <?php while (have_rows('content_sections')): the_row(); ?>
    <?php if (get_row_layout() === 'hero'): ?>
      <section class="hero"><?php the_sub_field('headline'); ?></section>
    <?php elseif (get_row_layout() === 'features'): ?>
      <section class="features">...</section>
    <?php endif; ?>
  <?php endwhile; ?>
<?php endif; ?>
```

### Gallery mező
Képkollekciók válogatással, validációval és választható visszatérési formátummal (ID/URL/tömb). Praktikus portfóliókhoz, galériákhoz, csúszkákhoz.

### Clone mező
Meglévő mezők/mezőcsoportok újrahasznosítása **seamless** vagy **group** módban. Csökkenti a duplikációt, segít moduláris mintákat építeni (pl. „Button”, „SEO beállítások”).

### Opcióoldalak (Options Pages) – PRO UI
Globális webhelybeállítások (fejléc/lábléc, elérhetőségek, értesítési sáv) külön admin menüponttal. Az értékeket azonnal lekéred:

```php
<?php echo esc_html( get_field('company_phone', 'option') ); ?>
```

### ACF Blocks (Gutenberg)
PHP-alapú blokkfejlesztés élő előnézettel. Nem kell külön build-lánc: mezőkkel paraméterezett, dinamikus blokkokat készítesz. 6.6-tól támogatott a **Blocks v3**.

```php
<?php
add_action('acf/init', function () {
  acf_register_block_type([
    'name' => 'cta',
    'title' => __('CTA'),
    'render_callback' => function () {
      echo '<a class="btn">'. esc_html(get_field('label')) .'</a>';
    },
    'supports' => ['align' => true, 'anchor' => true],
  ]);
});
```

### Kétirányú kapcsolatok (Bidirectional)
Automatikus, UI-ból állítható **kétirányú szinkron** Relationship/Post Object/User/Taxonomy mezőkhöz. Példa: ha egy terméknél kijelölöd a kapcsolódó kategóriát, a kategória oldalán is megjelenik a termék – kód nélkül.

### Licencelés
A PRO funkciók és frissítések használatához **licencaktiválás** kell. A PRO önálló plugin; nem igényli a free verziót.

## Közös képességek (amelyeket a PRO kiterjeszt)

- **30+ mezőtípus**, mezőcsoportok, megjelenítési szabályok (Location Rules) és egyszerű **PHP API** (`get_field()`, `the_field()`).
- **Egyedi bejegyzéstípusok és taxonómiák** regisztrálása admin UI-ból (6.1-től), import eszközzel.
- **Local JSON**: a meződefiníciók JSON-ba mentése a témában – gyors betöltés, Git-barát verziózás, megbízható szinkron környezetek között.
- **REST API integráció**: ACF mezők elérhetők/szerkeszthetők a WordPress REST API-n, mezőcsoport-szintű láthatósági beállítással.
- **Block Bindings**: ACF metaadatokat köthetsz core blokkok attribútumaihoz (WP 6.5-től).

## Gyakorlati használati esetek

- **Oldalépítés szerkesztőknek**: Flexible Contenttel hero + szolgáltatás-kártyák + referenciák sorrendben, kódírás nélkül.
- **Csapat/termék listák**: Repeaterrel név, pozíció, fotó; Gallery mezővel képgaléria.
- **Globális beállítások**: Opcióoldalon cím, telefonszám, social linkek; sablonban `get_field('...', 'option')`.
- **Kapcsolt tartalmak**: Bidirectional kapcsolatokkal konzisztens „Kapcsolódó termékek” és „Kapcsolódó cikkek”.
- **Headless**: ACF mezők REST API-n keresztül kiszolgálhatók Next.js/React/Vue frontendeknek.
- **Egyedi blokkok**: ACF Blocks-szal konfigurálható CTA, Feature-lista, Cards – PHP renderrel.

## Előnyök és értékajánlat

- **Gyors fejlesztés**: kész mezőtípusok, UI-alapú modellezés, egyszerű sablon API.
- **Konzisztens szerkesztés**: űrlapokkal vezérelt tartalom, kevesebb hiba, jobb minőség.
- **Modularitás és újrahasznosítás**: Clone, Flexible, Blocks – skálázható komponensek.
- **Csapatmunka és CI/CD**: Local JSON a verziókövetéshez, gyors betöltés nagy projekteknél.
- **Modern stack kompatibilitás**: REST API, Block Bindings, Blocks v3 támogatás.

## Kinek ajánlott?

- **WordPress fejlesztőknek és ügynökségeknek**: skálázható tartalommodellek, tiszta sablonkód, gyors iteráció.
- **Szerkesztői/marketing csapatoknak**: biztonságos, egyszerű űrlapok, vizuálisan építhető oldalak.
- **Headless/Frontend fejlesztőknek**: strukturált adat REST-en, stabil integrációk.
- **Enterprise projekteknek**: verziózható definíciók, kontrollált workflow, hosszú távú karbantarthatóság.

## Kompatibilitás és frissítések

Az ACF folyamatosan követi a modern WordPress fejleményeket. A legújabb kiadásokban elérhető a **Blocks v3** támogatás, továbbfejlesztett szerkesztői élmény és akadálymentesítés, valamint olyan újdonságok, mint a **Block Bindings**. A PRO külön licenccel frissíthető és támogatott.

## Rövid összegzés

Az ACF PRO egy fejlesztőközpontú, mégis szerkesztőbarát eszközkészlet WordPresshez. A **Repeater**, **Flexible Content**, **Gallery**, **Clone**, az **Opcióoldalak**, a **Bidirectional kapcsolatok** és az **ACF Blocks** együtt teljes megoldást adnak a strukturált, skálázható és hosszú távon karbantartható webhelyekhez – akár klasszikus, akár headless felépítésben. Ha megbízható tartalommodellezést és gyorsabb fejlesztést keresel, ez az egyik legjobb alap.