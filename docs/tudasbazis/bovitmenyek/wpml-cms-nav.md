# WPML CMS Nav

## Breadcrumbs trail

A Breadcrumbs trail, vagyis "kenyérmorzsa" navigáció lehetővé teszi a felhasználók számára, hogy könnyedén visszataláljanak a főoldalra bármelyik oldalról az oldalon belül. Ehhez csak annyit kell tenned, hogy hozzáadod ezt a kódot a témádhoz:

```php
<?php if(function_exists('icl_breadcrumbs')) icl_breadcrumbs(); ?>
```

Ez minden oldalról, bejegyzésből, kategóriából, címkéből és még keresési eredményekből is működni fog.

## Sidebar navigation

A Sidebar navigation, vagyis oldalsáv navigáció megmutatja a látogatóknak, hogy milyen más oldalak érhetők el az általuk megtekintett oldal közelében. Felsorolja az összes gyermekoldalt ugyanazon szülő számára. Ez nem az oldal összes oldalának teljes listája, hanem inkább egy közeli oldalak listája. Testre is szabhatod az oldalsáv navigáció kezdő és befejező címét. Ezeket az opciókat a **WPML** → **Navigation** menüben találod.

Egy példa a testreszabásra:

```php
<?php if(function_exists('wpml_sidebar_navigation')) wpml_sidebar_navigation('Testreszabott cím'); ?>
```

Az oldalsáv navigációt a sidebar.php fájlba is beillesztheted:

```php
<?php if(function_exists('wpml_sidebar_navigation')) wpml_sidebar_navigation(); ?>
```

Ez a funkció egy WordPress Widgetként is elérhető, így hozzáadhatod az oldalsávhoz a Megjelenés → Widgetek oldalon keresztül.

## Fejlett testreszabási lehetőségek

A WPML alapértelmezett (nem túl szép) dizájnnal rendelkezik a navigációs elemekhez. Az oldalsáv és a breadcrumbs trail kevés alapértelmezett formázással rendelkezik, míg a felső legördülő menük erősen formázottak. Ennek az az oka, hogy a felső menük legördítéséhez sok CSS szükséges. Részletes információkat találhatsz arról, hogyan lehet formázni a navigációt az oldaladon vagy egyéni HTML-t hozzáadni a menühöz az alábbi dokumentációs oldalak segítségével:

* [Customizing WPML navigation](https://wpml.org/documentation/)
* [Custom HTML for Menu Items](https://wpml.org/documentation/)

## Integrációk és kompatibilitás

A WPML CMS Nav zökkenőmentesen együttműködik számos más WordPress eszközzel és bővítménnyel, például:

* **WooCommerce**: Tökéletesen integrálható, lehetővé téve a többnyelvű webáruházak egyszerű navigációját.
* **Elementor**: Együttműködik az Elementor Page Builder-rel, így a navigációs elemeket könnyen beillesztheted az egyéni oldaltervekbe.
* **Yoast SEO**: Kompatibilis a Yoast SEO bővítménnyel, így biztosíthatod, hogy a navigáció elemei optimalizáltak legyenek SEO szempontból.

## Gyakorlati példák

1. **Többnyelvű e-kereskedelmi oldalak**: Ha egy többnyelvű webáruházat üzemeltetsz, a WPML CMS Nav segít abban, hogy a látogatók könnyedén navigálhassanak az oldalon belül, függetlenül attól, melyik nyelvet használják.
2. **Blogger weboldalak**: Egy blogban, ahol többnyelvű tartalmak vannak, a breadcrumbs trail segít az olvasóknak abban, hogy könnyedén visszataláljanak a főoldalra vagy más kapcsolódó bejegyzésekre.
3. **Céges weboldalak**: Egy többnyelvű céges weboldalon az oldalsáv navigáció segíti a felhasználókat abban, hogy gyorsan megtalálják a szükséges információkat anélkül, hogy eltévednének az oldalon.

## Szószedet

- **Breadcrumbs trail**: Kenyérmorzsa navigáció
- **Sidebar navigation**: Oldalsáv navigáció
- **Widget**: Bővítmény modul
- **Customizing**: Testreszabás
- **SEO**: Keresőoptimalizálás (Search Engine Optimization)

A WPML CMS Nav egy sokoldalú eszköz, amely segít abban, hogy a felhasználók könnyedén navigálhassanak a többnyelvű weboldalakon, így javítva a felhasználói élményt és növelve az oldal hatékonyságát.