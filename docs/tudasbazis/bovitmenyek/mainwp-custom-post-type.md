---
title: "MainWP Custom Post Type"
description: "MainWP Pro kiegészítő, amellyel a Dashboardból központilag kezelheted a gyermekoldalak meglévő egyedi bejegyzéstípusainak (CPT) tartalmait – publikálás, szerkesztés, törlés, WooCommerce-termékekkel együtt."
sidebar_label: "MainWP Custom Post Type"
---

## Mi ez és milyen problémát old meg?

A MainWP Custom Post Type egy hivatalos MainWP kiegészítő, amellyel a saját MainWP Dashboardodból tudod kezelni a gyermek WordPress-oldalaidon már létező **egyedi bejegyzéstípusok** (Custom Post Types, CPT) tartalmait. Akkor hasznos, ha több különálló (nem multisite) oldalon kell ugyanazokat a tartalomtípusokat (pl. referenciák, portfólió, események, termékek) létrehoznod és karbantartanod, és nem akarsz minden oldalra külön belépni.

## Hogyan működik röviden?

- A kiegészítő a Dashboard “szerkesztőfelületét” kiterjeszti a CPT-kre.
- Új CPT-bejegyzést hozhatsz létre a Dashboardon, majd kiválasztod, **mely Child site-okra** publikálódjon.
- Meglévő bejegyzéseket központilag listázhatsz, szűrhetsz, szerkeszthetsz vagy törölhetsz.
- WooCommerce telepítése esetén a **Products** is támogatottként jelenik meg.

Fontos: a bővítmény nem hoz létre új CPT-t. A CPT-nek a Dashboardon és a cél Child site-okon is léteznie kell, azonos **sluggal és címkékkel**.

## Fő funkciók részletesen

- **Központi létrehozás és publikálás több oldalra**
  - Az “Új elem” képernyőn kiválasztod a kezelni kívánt CPT-t, megírod a tartalmat és a meta mezőket, majd a “Select Sites” dobozban kipipálod a céloldalakat. Egy kattintással több site-ra publikálsz.

- **Távoli szerkesztés és tömegműveletek**
  - A MainWP “Manage” nézetében CPT szerint szűrhetsz, státuszt válthatsz (pl. piszkozat → közzétéve), módosíthatsz vagy törölhetsz. Kulcsszóra és dátumra is kereshetsz, így gyorsan megtalálod a releváns bejegyzéseket több oldalon.

- **Egyedi mezők (custom fields) kezelése**
  - A CPT-hez tartozó meta mezők a Dashboardból is kitölthetők és szinkronban tarthatók a céloldalakkal. Támogatottak a boilerplate tokenek is, így sablonos mezőértékeket automatizálhatsz.

- **WooCommerce-termékek támogatása**
  - Ha a Dashboardon aktív a WooCommerce, a termékek (Products) CPT automatikusan kezelhetővé válik. Létrehozhatsz és szerkeszthetsz termékeket, majd több boltba is kiküldheted.

- **Egységes kezelőfelület**
  - Nem kell site-onként külön szerkesztőkhöz igazodnod: a Dashboardon egyszerre ugyanazzal a folyamattal dolgozol minden Child site esetén.

## Telepítés és beüzemelés

1. Készíts egy működő **MainWP Dashboard** oldalt, és csatlakoztasd a **MainWP Child** pluginnal a gyermekoldalakat.
2. Aktiváld a **MainWP Custom Post Type** kiegészítőt a Dashboardon.
3. Biztosítsd, hogy a kezelni kívánt CPT:
   - létezik minden érintett Child site-on,
   - a Dashboardon is létre van hozva “matching” beállításokkal (azonos slug, többes és egyes címke).
4. Telepítsd és hagyd aktívan a **Classic Editor** bővítményt a Dashboardon és az érintett Child site-okon.
5. Új bejegyzéshez: MainWP > Extensions > Custom Post Types > válaszd ki a CPT-t > Add New > tartalom + meta > Select Sites > Publish.
6. Kezeléshez: MainWP > Posts > Manage > szűrés CPT-re/státuszra > szerkesztés vagy törlés.

## Gyakorlati példák

- **Ügynökségi referenciák/tesztek**: egyszer megírod a testimonialt, majd 12 ügyféloldal “Vélemények” CPT-jébe publikálod. Később egy helyről frissítheted a változásokat.
- **Portfólió és projektek**: új projekt bejegyzést több márkaoldal portfóliójába küldesz, egységes meta adatokkal (pl. technológiák, költségkeret).
- **WooCommerce többbolt-kezelés**: akciós terméket létrehozol a Dashboardon, majd több regionális webáruházra publikálod, azonos SKU-val és árkategóriákkal.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs többé sokszoros belépés és kézi másolgatás.
- **Konzisztencia**: ugyanaz a tartalom és meta adat kerül minden kiválasztott oldalra.
- **Skálázhatóság**: korlátlan számú CPT-t és site-ot kezelhetsz.
- **Adatvédelem**: minden saját szerveren marad, külső SaaS nélkül.
- **WooCommerce-hatékonyság**: többbolt-kezelés alapfeladatai központból megoldhatók.

## Kinek ajánlott?

- **WordPress ügynökségeknek**: sok ügyféloldal egységes tartalomkezelése.
- **Franchise/brand hálózatoknak**: központi portfólió, események, hírek, termékek.
- **Vállalati csapatoknak**: több régiós vagy termékoldal azonos struktúrával.
- **Fejlesztőknek**: CPT UI/Pods alapú “matching” konfigurációval gyors rollout.

## Korlátok, követelmények és best practice

- Nem hoz létre új CPT-t; csak a már létező CPT-k tartalmait kezeli.
- A Dashboardon és a Child site-okon a CPT **slugjának és címkéinek egyeznie kell**.
- A **Classic Editor** legyen telepítve és aktív a Dashboardon és az érintett Child site-okon.
- A MainWP alaprendszer csak a natív bejegyzéstípusokat kezeli; CPT-hez ez a kiegészítő szükséges.
- Tarts sablonos meta értékeket boilerplate tokenekkel, hogy csökkenjen a hibázás.

## Példa: “matching” CPT kód

Az alábbi kódblokkot tedd a Dashboard és a Child site-ok témájába vagy egy must-use pluginbe. Ügyelj az azonos slugra és címkékre.

```php
add_action('init', function () {
  register_post_type('portfolio', [
    'label'  => 'Portfólió',
    'labels' => [
      'name'          => 'Portfóliók',
      'singular_name' => 'Portfólió',
    ],
    'public'   => true,
    'show_ui'  => true,
    'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
    'has_archive' => true,
    'rewrite' => ['slug' => 'portfolio'],
  ]);
});
```

Ezzel biztosítod, hogy a Dashboardból létrehozott “Portfólió” bejegyzések gond nélkül publikálhatók legyenek a kiválasztott gyermekoldalakra.