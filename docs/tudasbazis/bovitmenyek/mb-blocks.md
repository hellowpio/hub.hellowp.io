---
title: "MB Blocks"
description: "PHP‑alapú Gutenberg blokkfejlesztés Meta Box mezőkkel, React és build‑lánc nélkül."
sidebar_label: "MB Blocks"
---

## Mi ez és milyen problémát old meg?

Az **MB Blocks** a Meta Box ökoszisztéma prémium kiterjesztése, amellyel **egyedi Gutenberg blokkokat készíthetsz kizárólag PHP‑val**. Nem kell Reactot, Webpacket vagy Bablet beállítanod: a megszokott Meta Box mezőszintaxist használod, és percek alatt felépítesz professzionális blokkokat. Támogatja a **block.json** alapú regisztrációt és teljesen **kompatibilis a Full Site Editinggel**, így a blokkok sablonokban és sablonrészekben is működnek.

A bővítmény lecsökkenti a Gutenberg fejlesztés belépési küszöbét, újrahasznosítja a már meglévő meződefinícióidat, és egységes, élő előnézetet ad a szerkesztőben – mindezt rugalmas adattárolással és fejlesztőbarát segédfunkciókkal.

## Fő funkciók és mit jelentenek a gyakorlatban

- **PHP‑alapú blokkfejlesztés**: Blokkot hozol létre úgy, mintha egy mezőcsoportot definiálnál; a típus egyszerűen „block”. Nincs build‑lánc, nincs JS fordítás.
- **block.json támogatás**: A blokkokat WordPress‑szabvány szerint regisztrálhatod. A szokásos kulcsokkal (például editorStyle, style, editorScript, script, viewStyle, viewScript) pontosan szabályozod, mi töltődjön be az editorban és a frontenden.
- **FSE kompatibilitás**: A blokkok site szerkesztőben és sablonokban is gond nélkül használhatók; ideális site‑wide komponensekhez.
- **Élő előnézet**: Mezőérték módosításkor a blokk azonnal újrarenderelődik. Látod, mit kap a szerző – nincs „preview” körhinta.
- **Meta Box mezőtípusok teljes támogatása**: 40+ mezőtípus, ugyanaz a beállítási logika, mint a klasszikus field groupoknál. Amit már ismersz, azt viszed tovább blokkokba.
- **InnerBlocks támogatás**: Beágyazott blokkokat adhatsz a sajátodhoz, szabályozva az engedélyezett típusokat, sablont és zárolást. A bővítmény gondoskodik arról, hogy az editor és a frontend markupja egyezzen (ne legyenek felesleges wrap‑elemek).
- **MB Views integráció**: Sablonozz Twiggel; a blokkot egy view‑val rendereltetheted, így a markup és a logika még tisztábban szétválik.
- **MB Builder integráció**: Vizuális felületen rakod össze a blokk mezőit és beállításait – ideális csapatoknak és gyors prototípushoz.
- **Stílusok és scriptek kezelése**: Külön kezeli az editorra és a frontend‑nézetre vonatkozó CSS/JS‑t. PHP regisztrációnál enqueue_* paraméterekkel, block.json‑nal a megfelelő kulcsokkal dolgozol.
- **Segédfüggvények és automatikus adatelőkészítés**: A render callbackben kapott $attributes már előkészített értékeket tartalmaz. Sablonban a mb_get_block_field() és mb_the_block_field() segít az értékek kiolvasásában.
- **Rugalmas adattárolás**: Alapból a blokk attribútumaiban tárol (JSON), de dönthetsz post meta vagy egyedi tábla mellett is – nagy adatmennyiségnél különösen hasznos.
- **Kiegészítő beállítások**: Ikon (Dashicons, SVG, Font Awesome), kategória, kulcsszavak, supports (align, customClassName, multiple, reusable, lock, anchor), context és saját CSS osztályok.

## Hogyan működik? (gyors áttekintés)

1) **Definiálás**  
– Block.json‑nal regisztrálsz és megadod az asseteket, vagy  
– PHP‑ban hozod létre a blokkot és a mezőit az rwmb_meta_boxes hookkal.

2) **Renderelés**  
– PHP sablonfájllal (render vagy render_template), vagy  
– MB Views‑szal (Twig), ha sablonozni szeretnél.

3) **Stílus/JS**  
– Block.json kulcsokkal, illetve PHP‑s regisztrációnál enqueue opciókkal külön az editorhoz és a frontendhez.

### Minimális PHP példa

```php
add_filter('rwmb_meta_boxes', function ($meta_boxes) {
  $meta_boxes[] = [
    'type'   => 'block',
    'id'     => 'hero',
    'title'  => 'Hero szekció',
    'icon'   => 'slides',
    'supports' => [
      'align'  => ['full', 'wide'],
      'anchor' => true,
    ],
    'render_template' => get_theme_file_path('blocks/hero.php'),
    'fields' => [
      ['id' => 'heading',  'name' => 'Címsor',   'type' => 'text'],
      ['id' => 'subtitle', 'name' => 'Alcím',    'type' => 'textarea'],
      ['id' => 'bg',       'name' => 'Háttérkép','type' => 'image_advanced'],
    ],
    // 'inner_blocks' => [
    //   'allowedBlocks' => ['core/buttons'],
    //   'templateLock'  => 'all',
    // ],
  ];
  return $meta_boxes;
});
```

```php
// blocks/hero.php
<?php
$heading  = mb_get_block_field('heading');
$subtitle = mb_get_block_field('subtitle');
$bg       = mb_get_block_field('bg'); // kép tömb URI‑val
?>
<section class="hero" style="background-image:url('<?php echo esc_url($bg[0]['url'] ?? ''); ?>')">
  <h1><?php echo esc_html($heading); ?></h1>
  <?php if ($subtitle) : ?>
    <p class="hero__subtitle"><?php echo esc_html($subtitle); ?></p>
  <?php endif; ?>
  <?php echo $content; // InnerBlocks tartalom (ha engedélyezett) ?>
</section>
```

Megjegyzés: ha post meta‑ba vagy egyedi táblába mentesz, az automatikus attribútum‑előkészítés és a mb_get_block_field() nem elérhető; ilyenkor rwmb_meta‑val kérdezd le az adatot.

## Konkrét használati esetek

- **Hero/CTA blokkok**: címsor, leírás, háttérkép, gombok – szerkesztőben azonnali előnézettel.  
- **Feature lista / testimonial**: ismétlődő mezők, képek, ikonkészletek.  
- **Adatvezérelt komponensek**: termékkiemelés, kapcsolódó bejegyzések, taxonómia‑szűrt listák.  
- **FSE komponensek**: egységes header, footer, promo sáv – sablonrészekbe illesztve.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs build‑lánc, nincs JS tooling – csak PHP és a már ismert Meta Box mezők.  
- **Kisebb kockázat**: WordPress‑szabványos block.json és FSE támogatás, jövőálló megközelítés.  
- **Skálázhatóság**: rugalmas adattárolás post meta‑ban vagy egyedi táblában nagy projekteknél.  
- **Gyors fejlesztői feedback**: élő előnézet és egységes editor/frontend markup.

## Kinek ajánlott?

- **WordPress fejlesztőknek és ügynökségeknek**, akik gyorsan, megbízhatóan akarnak Gutenberg blokkokat szállítani JS stack nélkül.  
- **PHP‑fókuszú csapatoknak**, akik már Meta Boxot használnak, és újrahasznosítanák mezőcsoportjaikat.  
- **Tartalomkészítő csapatoknak**, akik konzisztens, FSE‑kompatibilis komponenseket szeretnének, élő előnézettel.

## Fontos részletek és korlátozások

- **Foglalt attribútumnevek**: kerüld az „id” és „name” használatát mezőazonosítóként; a blokk belső értékeit felülírhatják.  
- **Azonosító szintaxis**: a blokk‑ID csak kisbetűt, számot és kötőjelet tartalmazhat (aláhúzás nélkül).  
- **Többszörözhetőség és mentés**: ha post meta‑ba vagy egyedi táblába mentesz, javasolt a multiple tiltása, hogy ne legyen ütközés.  
- **Adatlekérés**: meta/custom table tárolásnál rwmb_meta‑t használj; az automatikus attribútum‑előkészítés és a mb_get_block_field() ilyenkor nem aktív.  
- **Függőség**: az MB Blocks a Meta Box kiterjesztése; a teljes élményhez szükséges a fő bővítmény, opcionálisan az MB Builder és az MB Views.

Ezzel a bővítménnyel pontosan azt kapod, amire a mindennapi fejlesztésben szükséged van: gyors, PHP‑centrikus blokkfejlesztést, amely azonnal illeszkedik a WordPress és a Meta Box bevált folyamataihoz.