---
title: "JetReviews For Elementor"
description: "Rugalmas értékelés- és véleményrendszer Elementorhoz és Gutenberghez: statikus és felhasználói értékelések, moderáció, WooCommerce-integráció és SEO‑barát strukturált adatok."
sidebar_label: "JetReviews For Elementor"
---

## Mi ez és milyen problémát old meg?

A JetReviews egy WordPress-bővítmény, amivel teljes értékelési és véleményezési rendszert építhetsz az oldaladba kódolás nélkül. Működik az Elementorral és a Gutenberg szerkesztővel is. Segít begyűjteni és megjeleníteni a felhasználói értékeléseket, moderálni a véleményeket, SEO‑barát strukturált adatokat szolgáltatni, és egységesen kezelni a WooCommerce‑ből érkező visszajelzéseket.

## Hogyan működik röviden?

- Létrehozol egy vagy több **értékeléstípust** (kritériumok, skála, jogosultság).
- A Single sablonba vagy a bejegyzésbe beilleszted a **Reviews Listing** vagy **Static Review** widgetet/blokkot.
- A felhasználók beküldik az értékeléseiket (opcionális képfeltöltéssel, kommenttel, like/dislike‑kal).
- Te a **JetReviews Dashboardon** moderálod és elemzed az értékeléseket.
- A bővítmény eltárolja az átlagot posztmetában, és **JSON‑LD** strukturált adatot generál a rich snippetekhez.

## Fő funkciók részletesen

### Szerkesztő támogatás: Elementor és Gutenberg
- **Reviews Listing**: dinamikus felhasználói értékelések listázása és űrlap a beküldéshez. Ide kerül a közösségi interakció.
- **Static Review**: statikus értékelődoboz szerkesztői összefoglalóval. Ha akarod, az űrlapot letilthatod, és csak a pontszámot/kritériumokat mutatod.

### Egyedi értékeléstípusok és mezők
- **Skálák és kritériumok**: csillag, pont vagy százalék; tetszőleges számú kritérium.
- **Forrás**: értékelés bejegyzéshez vagy felhasználóhoz kötve.
- **Jogosultságok**: ki írhat “hitelesített” értékelést (pl. csak vásárlók, adott szerepkörök); vendégbeküldés név/e‑mail megadásával.

### Felhasználói interakció és moderáció
- **Hozzászólások** az értékelésekhez, **like/dislike** reakciók.
- **Előmoderáció**, tiltott kulcsszavak automatikus visszatartása.
- **reCAPTCHA v3**, admin és posztszerző **e‑mail értesítések**.
- **Médiafeltöltés** az értékeléshez (formátum- és méretkorlátozással).

### WooCommerce integráció
- A natív termékértékelések **importálhatók**, így egységes megjelenést és további szűrési/rendezési lehetőségeket kapsz.
- Értékelések megjelenítése termékoldalakon, “csak vásárlók értékelhetnek” szabállyal.

### SEO és adatkezelés
- **JSON‑LD** strukturált adatok több sémával (pl. Product, Service, Organization).
- Az átlagos értékelés posztmetában tárolódik (alapértelmezett kulcs: **_jet_reviews_average_rating**), dinamikus tagekkel kiírható az átlag és a véleményszám.
- Saját sablonban is felhasználhatod az átlagot:

```php
<?php
$avg = get_post_meta( get_the_ID(), '_jet_reviews_average_rating', true );
echo esc_html( $avg );
```

### Admin és riportok
- Központi **Dashboard**: minden értékelés és komment kezelése, statisztikák, import/export.
- Értékeléstípusok és globális beállítások áttekintése egy helyen.

## Gyakorlati példák

- Webáruház: importálod a korábbi termékértékeléseket, engedélyezed, hogy csak vásárlók pontozzanak, és csillag szerint szűrhetővé teszed a terméklistát. A vevők képeket is tölthetnek fel a véleményükhöz.
- Szolgáltatásportfólió/ügynökség: a projektek Single sablonján Static Review dobozban kiemelt szerkesztői értékelést adsz, alatta pedig Reviews Listingben futnak a kliensvélemények. A szerző profilján összesítve megjelenik a hozzá köthető átlag.
- Katalógus vagy eseményoldal: helyszínekhez/eseményekhez egyedi kritériumokat állítasz be (pl. tisztaság, elérhetőség), kártyákon mutatod az átlagot, és csillag szerint rendezhető a lista.

## Előnyök és értékajánlat

- **Kódolás nélkül** teljes értékelési rendszer.
- **Hitelesség és konverzió**: valódi felhasználói visszajelzések képpel, kommenttel.
- **Idő- és energiamegtakarítás**: központi moderáció, automatizált értesítések.
- **SEO‑előny**: rich snippet esély JSON‑LD‑vel, dinamikus átlagérték kiírás.
- **WooCommerce‑örökség egységesítése**: meglévő értékelések átemelése és szűrhetősége.
- **Kedvező belépési költség**: egywebhelyes licenc éves támogatással és frissítésekkel; elérhető All‑Inclusive csomagban is.

## Kinek ajánlott?

- **Webáruház‑tulajdonosoknak**, akik skálázható, moderálható értékelést akarnak.
- **Ügynökségeknek és site buildereknek**, gyors, testreszabható implementációhoz.
- **Tartalomplatformoknak és könyvtáraknak**, ahol CPT‑khez kell értékelés és listázás.
- **Freelancereknek**, akik Elementorral/Gutenberggel dolgoznak és SEO‑t is akarnak.

## Fontos megfontolások és korlátok

- Ha a **New review approval** ki van kapcsolva, a bővítmény nem minden antispam megoldással kompatibilis; gyakorlatban célszerű az előmoderációt bekapcsolva hagyni.
- A haladó listázás/szűrés élményét a **JetEngine**, **JetSmartFilters** és **JetThemeCore** emeli a legmagasabb szintre.
- Bizonyos **statikus értékelésekhez** előzetes JetEngine metamező‑konfiguráció szükséges.

## Gyors kezdés – bevált munkafolyamat

1. Telepítsd és aktiváld a bővítményt; használhatsz Elementort vagy Gutenberg blokkokat.
2. Hozz létre egy **Review Type‑ot**: skála, kritériumok, jogosultságok, vendégbeküldés.
3. Tedd a **Reviews Listing** widgetet/blokkot a Single sablonba (vagy a bejegyzésbe); opcionálisan adj **Static Review** dobozt szerkesztői összefoglalóval.
4. Kapcsold be a **moderációt**, állíts be tiltott szavakat és **reCAPTCHA v3**‑at; engedélyezd a médiafeltöltést, ha releváns.
5. Válaszd ki a **JSON‑LD sémát**, és helyezd el az **átlagértékelés** és **véleményszám** dinamikus megjelenítését a listákban és sablonokban.

## Fejlesztő és licencelés

A bővítményt a Crocoblock fejleszti (JetPlugins termékcsalád). Külön licenccel vagy All‑Inclusive előfizetés részeként érhető el; a licenc tartalmazza az éves frissítéseket és támogatást.