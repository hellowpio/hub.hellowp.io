---
title: "MB User Avatar"
description: "Meta Box prémium kiegészítő, amellyel a felhasználók helyi, médiatárból választott profilképet használhatnak Gravatar helyett – kódolás nélkül."
sidebar_label: "MB User Avatar"
---

## Mi ez és milyen problémát old meg?

Az MB User Avatar egy prémium Meta Box kiegészítő, ami egyéni profilkép-mezőt ad a WordPress felhasználói profiljához, és a feltöltött képet avatarként használja a teljes webhelyen. A WordPress alapból a Gravatarra támaszkodik; ha helyi, médiatáras avatart szeretnél (arculati, adatvédelmi vagy felhasználói élmény okokból), ez a bővítmény megoldja – kód nélkül.

## Hogyan működik röviden?

A bővítmény beakaszkodik a WordPress avatarlogikájába (például a `get_avatar_url` hívásba), és ha a felhasználónál van beállított egyéni profilkép, azt szolgáltatja vissza a Gravatar helyett. A felhasználói profiloldalon megjelenik egy új, **Custom Profile Picture** mező, ahol a médiatárból kiválasztott vagy feltöltött kép lesz az avatarod – és ez mindenhol érvényesül, ahol a rendszer avatart kér.

A működés a Meta Box keretrendszerre épül: a mező és a tárolás user metában történik, az MB User Avatar pedig a szükséges szűrőket automatikusan kezeli.

## Fő funkciók, érthetően

- **Egyéni avatar mező a profilban**  
  A Felhasználók > Profil szerkesztőben egy új mező jelenik meg a natív profilkép alatt. Ide egyetlen kattintással kiválaszthatod a képet a médiatárból. Nem kell külső szolgáltatás, sem kód.

- **Gravatar kiváltása rendszer-szinten**  
  A beállított képed minden olyan helyen megjelenik, ahol a WordPress avatart használ: szerződobozban, hozzászólásoknál, widgetekben, sablonokban. Ugyanaz az egy kép szolgál mindenhova.

- **Meta Box integráció**  
  A bővítmény a Meta Box mezőtípusait és meta-kezelését használja. Dolgozik a Meta Box AIO-val is, de önálló plugin, külön aktiválással.

- **Frontend űrlapok támogatása párosítással**  
  Ha szeretnéd, hogy a felhasználók a frontendről töltsenek fel/módosítsanak avatart, kombináld az **MB User Profile** kiegészítővel. Így bejelentkezés-, regisztráció- és profil-szerkesztő űrlapokat tehetsz ki shortcode-okkal, az avatar-mezővel együtt.

- **Egységes megjelenítés mindenhol**  
  A bővítmény központilag oldja meg az avatar-kiszolgálást, így nincs töredezett élmény: minden nézet ugyanazt az egyéni képet kapja.

## Példák a gyakorlatból

- **Több szerzős magazin**  
  A szerzők feltöltik a saját headshotjukat a profiljukban. A cikkeik szerződobozában és a hozzászólásoknál automatikusan ez a kép jelenik meg – nincs többé Gravatar-függés.

- **Vállalati intranet**  
  Adatvédelmi okokból a képek házon belül maradnak. Az admin beállíthatja az avatarokat a munkatársaknak, és a rendszer minden modulja egységesen ezt a képet mutatja.

- **Közösségi/tagsági oldal**  
  A tagok a profiljukat a frontendről szerkesztik (MB User Profile), köztük az avatart is. A taglistában, fórumokban és kommentekben rögtön a helyi kép látszik.

### Hasznos kódrészletek sablonokhoz

Ha a témád vagy oldalépítőd nem a WordPress avatarfüggvényét hívja, illeszd be a sablonba a következőt, és erőltesd a WordPress-útvonalat (amit az MB User Avatar felülír):

```php
<?php
$user_id    = get_the_author_meta('ID');
$avatar_url = get_avatar_url($user_id, ['size' => 96]);
echo '<img src="' . esc_url($avatar_url) . '" alt="' . esc_attr(get_the_author_meta('display_name', $user_id)) . '">';
```

Hozzászólásoknál érdemes mindig a WordPress saját függvényét használni:

```php
<?php echo get_avatar($comment, 64); ?>
```

Ezekkel biztosítod, hogy a builder/sablon is a helyi avatart vegye át.

## Telepítés és alapbeállítás

1. **Meta Box telepítése és aktiválása** (kötelező előfeltétel).
2. **MB User Avatar telepítése és aktiválása** a Meta Box fiókodból. A plugin a Lifetime Bundle része, nem érhető el a nyilvános könyvtárban.
3. **Profilkép beállítása**: Felhasználók > Profil. A **Custom Profile Picture** mezőben válassz vagy tölts fel egy képet a médiatárból. Ettől kezdve a rendszer ezt használja avatarként bárhol a webhelyen.

Tipp: ha frontend szerkesztést is szeretnél, telepítsd mellé az **MB User Profile** kiegészítőt, és tedd ki a profil- és regisztrációs űrlapokat shortcode-okkal.

## Kompatibilitás és tippek

- **Oldalépítők (Oxygen, Bricks, stb.)**  
  Ha a builder nem a `get_avatar()`/`get_avatar_url()` függvényt hívja, lehet, hogy sablonszinten kell a fenti kóddal rásegíteni. Ezzel garantálod, hogy az MB User Avatar által szolgáltatott URL jelenjen meg.
- **Meta Box AIO**  
  Teljesen kompatibilis. Az MB User Avatar azonban önálló plugin, külön aktiválással.
- **Jogosultságok**  
  A felhasználónak rendelkeznie kell médiatárba feltöltési joggal, ha saját profilképet töltene fel a wp-adminból vagy a frontend űrlapról.

## Előnyök és értékajánlat

- **Helyi adatkezelés**: nem függsz külső szolgáltatótól.
- **Kódmentes bevezetés**: a szükséges szűrők és logika készen vannak.
- **Következetes UX**: ugyanaz az avatar minden nézetben.
- **Idő- és költségmegtakarítás**: nem kell saját megoldást fejleszteni és karbantartani.
- **Meta Box ökoszisztéma**: zökkenőmentes együttműködés más Meta Box kiegészítőkkel.

## Kinek ajánlott?

- **Közösségi/tagsági oldalaknak**: ahol a tagok saját profilképet kezelnek.
- **Több szerzős blogoknak és magazinoknak**: egységes, szerzőnkénti headshotokkal.
- **Vállalati/intranet rendszereknek**: adatvédelmi és arculati kontroll miatt.
- **Ügynökségeknek és fejlesztőknek**: gyors, megbízható avatar-megoldás Meta Box alapokon, felesleges kódolás nélkül.

Összefoglalva: az MB User Avatar azt adja, amit a WordPressben sokszor hiányolsz – egyszerű, helyi, médiatáras avatarokat, amelyek azonnal és mindenhol működnek.