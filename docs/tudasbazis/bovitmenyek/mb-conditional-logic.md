---
title: "MB Conditional Logic"
description: "Prémium Meta Box kiegészítő, amellyel feltételalapon vezérelheted meta boxok, egyedi mezők és admin elemek megjelenését a WordPressben."
sidebar_label: "MB Conditional Logic"
---

## Mi ez és milyen problémát old meg?

Az MB Conditional Logic a Meta Box ökoszisztéma hivatalos kiegészítője. Segítségével feltételekhez kötheted, hogy mely meta boxok, mezők vagy akár admin felületi elemek látszódjanak. Így dinamikus, kontextusérzékeny űrlapokat hozhatsz létre: csak azt mutatod, ami az adott helyzetben releváns. Ezzel megszünteted a “túlzsúfolt admin” problémát, csökkented a hibás kitöltéseket és felgyorsítod a szerkesztői munkát.

## Fő funkciók, érthetően

- **Mit vezérelhetsz?**
  - Meta Box-szal regisztrált **meta boxokat és mezőket**.
  - **WordPress core** meta boxokat (pl. kategóriák, kiemelt kép panel).
  - **Bármely admin oldali DOM/HTML elemet** azonosító alapján (pl. bizonyos panelek/elrendezési elemek).

- **Mire építhetsz feltételt?**
  - **Más mezők aktuális értékeire**.
  - **Beépített WordPress adatokra**: például sablon (page_template), bejegyzésformátum (post_format), szülő azonosító (parent_id), bejegyzés ID (post_ID), valamint a **kiemelt kép megléte**.

- **Operátorok**
  - Alap: **`=`, `!=`, `>`, `>=`, `<`, `<=`**
  - Haladó: **contains, in, between, starts with, ends with, match** (negálva is használhatók, pl. not contains).

- **Többszörös feltételek**
  - **AND/OR** relációk és csoportosított szabályok. Így összetett “ha–akkor” logikákat építhetsz fel.

- **Konfiguráció UI-n vagy kódban**
  - **MB Builder**: kattintgatós felületen állíthatod a feltételeket.
  - **Kód**: a mezőn vagy metaboxon a **visible/hidden** kulccsal adsz meg szabályokat (mező ID, operátor, érték).

- **Csoportok és klónok**
  - Csoportmezőknél a gyermekmezők ID-je: **groupID_fieldID**.
  - Klónozható csoportnál a logika **klónon belül** értelmeződik.

- **Speciális értékkezelés**
  - Checkboxok: **true/false** összevetés.
  - Média mező: a feltétel az **elemszámot** vizsgálja.

- **Admin DOM vezérlés**
  - Nem csak mezők: az admin felület **tetszőleges eleme** mutatható/rejthető egységes logikával.

- **Megjelenítési módok**
  - **display** (alap), **visibility** (hely fenntartásával), **slide**, **fade** – az UX finomhangolásához.

- **Egyedi JavaScript callback**
  - Ha kell, **saját JS függvénnyel** is visszaadhatod a feltétel igaz/hamis értékét.

- **Kézi újrafuttatás**
  - Ha kódból változtatsz értéket: `rwmb.runConditionalLogic(scope)` – az értékelést újra lefuttatja.

### Ismert korlátok

- Az **autocomplete** mezőtípus nem támogatott.
- Ha egy **rejtett (hidden) mezőre** építesz további feltételeket, a függő mezők rejtve maradhatnak.
- **Klónozható csoportoknál** a hivatkozott és a függő mezők legyenek ugyanabban a klónban.

## Gyakorlati példák

### 1) Landing oldal-specifikus mezők

Csak akkor jelenjen meg a “Hero cím”, ha a sablon landing.php:

```php
[
  'id'   => 'hero_title',
  'name' => 'Hero cím',
  'type' => 'text',
  'visible' => ['page_template', '=', 'landing.php'],
  'toggle_type' => 'slide',
]
```

### 2) Termék típus szerinti vezérlés

Fizikai terméknél mutasd a szállítási mezőket, digitálisnál rejtsd:

```php
[
  'id'   => 'shipping_weight',
  'name' => 'Súly (kg)',
  'type' => 'number',
  'visible' => ['product_type', 'in', ['physical', 'bundle']],
]
```

### 3) Kiemelt képhez kötött beállítások

Csak akkor látszódjon a “Hero overlay” mező, ha van kiemelt kép:

```php
[
  'id'   => 'hero_overlay',
  'name' => 'Hero overlay',
  'type' => 'select',
  'options' => ['none' => 'Nincs', 'dark' => 'Sötét', 'light' => 'Világos'],
  'visible' => ['_thumbnail_id', '>', 0],
]
```

### 4) Többfeltételes (AND) szabály

Landing + van kiemelt kép:

```php
[
  'id'   => 'hero_cta_text',
  'name' => 'CTA szöveg',
  'type' => 'text',
  'visible' => [
    'relation' => 'AND',
    ['page_template', '=', 'landing.php'],
    ['_thumbnail_id', '>', 0],
  ],
]
```

### 5) Feltételek kézi újrafuttatása (JS)

```js
// Ha AJAX-szal változtattál értékeket:
rwmb.runConditionalLogic();
```

## Előnyök és értékajánlat

- **Kevesebb zaj, kevesebb hiba**: csak releváns mezők jelennek meg, csökken a kognitív terhelés.
- **Gyorsabb beállítás**: deklaratív szabályok UI-n vagy kódban, egyedi JS nélkül.
- **Rugalmas finomhangolás**: haladó operátorok, AND/OR relációk, csoportos feltételek.
- **Egységes vezérlés**: mezők, metaboxok és admin DOM elemek ugyanazzal a logikával kezelhetők.
- **Jobb szerkesztői élmény**: átlátható, lépésenként feltáruló űrlapok; kevesebb oktatási igény.

## Kinek ajánlott?

- **Ügynökségek és fejlesztők**: komplex beállítások/feltételek gyors, karbantartható megvalósítása.
- **Site builderek**: vizuális konfiguráció MB Builderrel, kódolás nélkül.
- **Tartalomgazdák és szerkesztők**: egyszerűbb űrlapok, kisebb hibaarány.
- **E-kereskedelmi projekteknél**: terméktípus-függő opciók, logikai lépcsők kezelésére.

## Bevezetési tippek

1. **Tervezd meg a feltételeket**: azonosítsd a döntő mezőket és a megjelenítendő elemeket.
2. **UI vagy kód**: ha vizuális megközelítést szeretnél, használd az MB Buildert; kódnál a `visible`/`hidden` kulcsokkal dolgozz.
3. **Használd a megfelelő operátort**: `in`, `between`, `contains` gyakran egyszerűsíti a logikát.
4. **Finom UX**: állíts `toggle_type`-ot (`visibility`, `slide`, `fade`) a kívánt élményhez.
5. **Teszteld klónokban és csoportokban**: tartsd egy csoporton belül a hivatkozott és függő mezőket.
6. **AJAX/JS után**: futtasd újra a logikát a `rwmb.runConditionalLogic()` hívással.

## Licenc és elérhetőség

Az MB Conditional Logic egy **prémium** Meta Box kiegészítő, külön és csomagban is elérhető. Nyílt forrású licencet használ (GPL), és a Meta Box csapata tartja karban.

## Összegzés

Az MB Conditional Logic a Meta Box “feltételes logika” svájci bicskája: professzionális, mégis könnyen használható módon teszi dinamikussá a WordPress admin űrlapokat. Ha szeretnél rendet vágni az űrlapjaidban, és csak a megfelelő időben a megfelelő mezőket mutatni, ez a kiegészítő pontosan erre való.