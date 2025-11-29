---
title: "QuadMenu"
description: "Reszponzív, drag‑and‑drop alapú mega menü bővítmény WordPresshez horizontális, vertikális, off‑canvas és összehajtható elrendezésekkel."
sidebar_label: "QuadMenu"
---

## Mi ez és milyen problémát old meg?

A QuadMenu egy WordPresshez készült, reszponzív **mega menü** bővítmény. Arra való, hogy a natív Menük felületet kibővítve, **kódolás nélkül** készíthess profi, többoszlopos, képeket és widgeteket is tartalmazó menüket. Megoldja:
- a bonyolult navigációk vizuális építését,
- a mobilbarát és érintőkijelzős működést,
- a dinamikus tartalom (kereső, ikonok, kosár, fiók) menübe integrálását,
- a témafüggetlen beágyazást és page builderekkel való használatot.

A készítő a **QuadLayers**, egy WordPress-termékekre specializálódott csapat.

## Hogyan működik röviden

1. Telepítsd és aktiváld a bővítményt.
2. Lépj a Megjelenés → Menük oldalra, és válaszd ki a QuadMenu szerkesztőt.
3. Drag‑and‑drop módon adj hozzá oszlopokat, sorokat, elemeket (oldalak, kategóriák, egyéni linkek, widgetek).
4. Válaszd ki az elrendezést: **horizontális**, **vertikális**, **off‑canvas** vagy **összehajtható**.
5. Kapcsold be az olyan extrákat, mint a **sticky** fejléc, töréspontok, ikonok, kereső vagy kosár.
6. Integráld a menüt a témába: automatikus felismeréssel, menüpozícióhoz rendeléssel, vagy page builder modul beillesztésével.

Ha teljesen page builderrel épített fejléced van, ahol nincs natív menüpozíció, a QuadMenu külön modulját kell beillesztened az adott builderben.

## Fő funkciók (ingyenes)

- **Drag‑and‑drop menüépítés**: Oszlopok és sorok használatával igazi „mega” rácsot állíthatsz össze. Fogd‑és‑vidd módszerrel rendezed az elemeket, így gyors a prototípuskészítés és a finomhangolás.
- **Reszponzív elrendezések**: Választhatsz horizontális vagy vertikális menüt, illetve **off‑canvas** (oldalra csúszó) és **collapse** (összehajtható) módot mobilra. Egyedi **töréspontot** állíthatsz be, így pontosan szabályozod, mikor váltson mobilnézetre.
- **Sticky és igazítás**: Rögzítheted a menüt görgetés közben, beállíthatod a szélességet, a pozíciót és az igazítást. Ez növeli a használhatóságot hosszú oldalaknál.
- **Ikonok és tipográfia**: Ikonokkal (pl. Font Awesome) és **Google Fonts** készlettel teheted vizuálisan erősebbé a navigációt. Animációk segítenek a lebomló panelek megjelenítésében.
- **Beépített elemek**: 
  - **Icons Menu**: gyorsikonok külön funkciókhoz,
  - **Search Menu**: élő vagy modális kereső a menüben,
  - **Cart Menu**: kosár lenyíló panel a népszerű e‑kereskedelmi bővítményekhez, tételekkel és végösszeggel.
- **Téma‑integráció**: Több menühely támogatása, automatikus és manuális beépítés. Népszerű témákhoz csatlakozó kiegészítők is elérhetők.
- **Oldalépítők támogatása**: Használható többek között Elementor, Beaver Builder és Visual Composer környezetben. Builder‑fejléc esetén a QuadMenu modulját illeszd be.

## Pro funkciók

- **Tabs Menu**: fül alapú mega menük kategóriák vagy termékcsoportok gyors váltásához.
- **Login/Register Menu**: bejelentkezés/regisztráció lenyíló űrlappal; belépve személyre szabott gyorslinkek.
- **Social Menu**: közösségi profilok ikonokkal.
- **Carousel Menu**: görgethető, vizuális tartalmi blokkok.
- **Élő testreszabás** a WordPress testreszabójában, valós idejű előnézettel.
- **Licencelés**: éves és lifetime csomagok; különböző webhelyszámokra, pénzvisszafizetési garanciával.

## Gyakorlati példák

- **Vállalati/portál jellegű oldalak**: Készíts háromoszlopos mega menüt: bal oldalon fő kategóriák, középen kiemelt aloldalak ikonokkal, jobbra egy „Hírek” widget legutóbbi cikkei képekkel.
- **Webáruház**: A menü sarkába helyezett **kosár** ikon lenyíló panelként mutatja a tételeket és a végösszeget, mellette **fiók** és **kereső**. Mobilon a fejlécre húzható, off‑canvas menüvel kombinálva.
- **Ügynökségek/témakészítők**: Újrahasznosítható menükonfigurációk, egységes UX több ügyfél‑téma között. Importálási lehetőség más mega menü bővítményből is rendelkezésre áll, csökkentve a váltás költségét.

## Miért érdemes használni? (Értékajánlat)

- **Időmegtakarítás**: Kódolás helyett vizuális építés, gyors iteráció.
- **Kevesebb plugin/komponens**: Kereső, ikonok, kosár és akár fiók a menüben — nincs szükség külön fejlécelemekre.
- **Mobil‑első élmény**: Testreszabható töréspontok és natív érintéskezelés.
- **Témafüggetlenség**: Konfigurációid több témával is működnek; builder‑es fejlécekbe modulárisan illeszted.
- **Fejleszthetőség**: Hookok, szűrők, saját stílus- és script‑kezelés, így beépíthető egyedi stackekbe.

## Kinek ajánlott?

- **Webshop tulajdonosoknak**: gyors kosár‑ és fiókelérés a menüből, jobb konverziós útvonalak.
- **Vállalati és oktatási oldalaknak**: átlátható, mély hierarchiát is kezelő mega menük.
- **Ügynökségeknek és témakészítőknek**: ismét felhasználható, márkázható navigációs rendszer.
- **Fejlesztőknek**: fejlett API, kontrollált asset‑betöltés, saját komponensek.

## Fejlesztőknek

A bővítmény kiterjedt **hook** és **filter** készlettel, valamint saját stílus‑/script‑betöltési lehetőségekkel érkezik. Egyedi animációk és tartalom‑szűrők segítségével módosíthatod a menü viselkedését és markupját.

Példa jellegű kódrészlet egy egyedi osztály hozzáadására:

```php
// Illusztratív példa: adott című menüpont megjelölése
add_filter('quadmenu_item_classes', function ($classes, $item) {
  if (!empty($item->title) && $item->title === 'Kiemelt') {
    $classes[] = 'badge-new';
  }
  return $classes;
}, 10, 2);
```

Egyszerű stílus a jelvényhez:

```css
.badge-new::after {
  content: "ÚJ";
  background: #ff4757;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  margin-left: 6px;
  border-radius: 10px;
}
```

## Jó gyakorlatok és tippek

- **Töréspont beállítása**: teszteld több képernyőszélességen; ne csak 320/768 px‑en.
- **Teljesítmény**: csak a szükséges elemeket és animációkat kapcsold be; képek méretezése a mega menüben fontos.
- **Page builderek**: builder‑fejléchez a QuadMenu modulját illeszd be, ha nincs menüpozíció.
- **Tesztelés**: próbáld ki a saját témáddal külön staging környezetben.
- **Migráció**: ha más mega menüről váltasz, használd az importálót a beállítások áthozására.

Összefoglalva: a QuadMenu egy gyors, rugalmas és fejleszthető megoldás, amellyel modern, mobilbarát mega menüket építhetsz kódolás nélkül — pontosan azt adja, ami egy mai WordPress navigációtól elvárható.