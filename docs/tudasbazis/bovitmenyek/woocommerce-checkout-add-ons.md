---
title: "WooCommerce Checkout Add-Ons"
description: "Rendelés-szintű opciók, felárak és információgyűjtő mezők a WooCommerce pénztárban, kódolás nélkül."
sidebar_label: "WooCommerce Checkout Add-Ons"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Checkout Add-Ons egy prémium kiegészítő, amellyel a pénztárfolyamatban rendelés-szintű mezőket és választható opciókat adhatsz hozzá. Ezek lehetnek díjmentes információk (pl. ajándéküzenet) vagy bevételnövelő elemek (pl. ajándékcsomagolás, sürgősségi kezelés, borravaló). A WooCommerce alapból nem kínál kényelmes megoldást rendelés-szintű, nem termékhez kötött opciókra – ezt a hiányt tölti be a bővítmény, kódlapátolás nélkül.

Fontos: a bővítmény a klasszikus (shortcode-alapú) kosár/pénztár sablonokkal működik. A blokkalapú pénztár jelenleg nem támogatott.

## Hogyan működik a gyakorlatban?

- A WooCommerce adminban létrehozol add-on mezőket (címke, leírás, típus).
- Beállítod az árkorrekciót: fix összeg vagy százalék, felárként vagy kedvezményként; megjelölheted adóztathatóként.
- Feltételeket adhatsz meg (cart összeg, kosárban lévő termék/kategória, más add-on értéke).
- A mezők elhelyezését a Testreszabóban szabályozhatod; a vevő választásai azonnal frissítik az összegzőt.
- A választott értékek megjelennek a visszaigazoláson, e-mailekben és a Saját fiókban; a bővítmény el is menti őket, ha a vevő elnavigál, majd visszatér.
- Az admin rendelés-szerkesztőben és a Megrendelések listában láthatod, szűrheted/rendezheted a mezőket (típustól függően).

## Fő funkciók

### Testreszabható mezőtípusok
- **Szöveg, szövegterület**: üzenetek, megjegyzések.
- **Választók**: legördülő, multiselect, rádiógomb, jelölőnégyzet, több-jelölős lista – jól definiált opciókhoz.
- **Fájlfeltöltés**: a vevő egy fájlt csatolhat a rendeléshez (mezőnként egy fájl; több fájlhoz több mező vagy ZIP javasolt).

### Rugalmas árképzés
- **Fix vagy százalékos** korrekció a rendelés részösszegéhez képest.
- **Pozitív érték** = felár, **negatív érték** = kedvezmény.
- **Adózható** tételként kezelhető.
- Az add-on díjak **rendelési díjként (fee)** viselkednek, nem termékként: nincs SKU/készletkezelés – ideális szolgáltatásokhoz, biztosításhoz, borravalóhoz.

### Feltételes megjelenítés
- Mutasd az add-ont csak akkor, ha:
  - a kosár értéke elér egy küszöböt,
  - bizonyos termék/kategória a kosárban van,
  - egy másik add-on meghatározott értéket vett fel.
- Így a pénztár letisztult marad, és csak releváns ajánlatokat láttatsz.

### Elhelyezés és UX
- A mezők pozícióját a Testreszabóban választhatod (pl. számlázási adatok elé/után, vagy az összegző elé).
- A választások **dinamikusan frissítik** az összesítőt – azonnali visszajelzés a vevőnek.

### Admin és riportálás
- Az értékek megjelennek a rendelésen és a rendeléslistában; bizonyos mezőknél rendezés/szűrés is elérhető.
- Export bővítményekkel a mezők és költségeik külön oszlopokként exportálhatók.

### Integrációk és kompatibilitás
- **Előfizetések**: add-onok a kezdeti vásárlásnál, igény szerint a megújításoknál is alkalmazhatók.
- **Egyoldalas pénztár**: kompatibilis.
- **Blokkalapú pénztár**: jelenleg nem támogatott; a klasszikus pénztárra van szükség.

## Gyakorlati példák

- **Borravaló**: százalékos mező (pl. 5/10/15%), ami a részösszegre számítódik.
- **Ajándékcsomagolás + üzenet**: jelölőnégyzet felárral; ha bejelölik, jelenjen meg egy szövegmező az üzenetnek.
- **Sürgősségi feldolgozás**: fix felár jelölőnégyzettel; csak akkor jelenjen meg, ha a kosár értéke meghalad egy küszöböt.
- **Szállítási biztosítás**: rádiógomb opciók több szintű felárral.
- **Fájlfeltöltés**: egyedi kártyaborító vagy logó beküldése a rendeléshez.

## Miért érdemes használni?

- **Bevételnövelés**: egyszerű upsell a pénztárban, készletkezelés nélkül.
- **Jobb UX**: feltételek alapján csak releváns opciók látszanak; a pénztár gyors és tiszta marad.
- **Admin hatékonyság**: a kért információk strukturáltan, exportálhatóan jelennek meg.
- **Idő- és költségmegtakarítás**: fejlesztés nélküli, karbantartható megoldás a tipikus rendelési extrákra.

## Kinek ajánlott?

- **Ajándékboltok, D2C márkák**: csomagolás, üzenet, prémium kezelés.
- **Nyomda/merch és POD**: fájlfeltöltés, speciális instrukciók.
- **Étel/ital és szolgáltatások**: borravaló, kezelési díj.
- **Előfizetéses üzletek**: kiegészítők a kezdeti és megújító rendelésekhez.
- **Ügynökségek/megvalósítók**: gyors, stabil megoldás ügyfél-igényekre, hosszú távú karbantarthatósággal.

## Korlátozások és mikor ne

- **Rendelés-szintű**, nem termék-szintű megoldás. Ha termékenként eltérő opció kell, válaszd a Product Add-Ons bővítményt.
- **Nincs készlet/SKU**: az add-on díjak nem termékek.
- **Fájlfeltöltés**: mezőnként egy fájl.
- **Blokkalapú pénztár**: nem támogatott; használj klasszikus kosár/pénztár nézetet.

## Gyors beállítás

1. Lépj a WooCommerce > Checkout Add-ons menübe.
2. Hozz létre egy mezőt (címke, leírás, típus).
3. Állítsd be az árkorrekciót (fix/százalék, adózás).
4. Adj meg feltételes megjelenítési szabályokat.
5. A Testreszabóban válaszd ki a megjelenítés helyét, majd teszteld a pénztárat.

## Fejlesztőknek

Hookokkal/filtrekkel bővítheted a működést (egyedi validáció, attribútumok, elhelyezés). Példa a pozíció kód szintű módosítására:

```php
// A Checkout Add-Ons blokk áthelyezése az ügyféladatok után
add_filter( 'wc_checkout_add_ons_position', function() {
    return 'woocommerce_checkout_after_customer_details';
} );
```

Ezzel a WooCommerce Checkout Add-Ons átláthatóan és rugalmasan teszi lehetővé, hogy a pénztárban bevételnövelő és információgyűjtő elemeket adj a rendeléshez – pontosan ott és úgy, ahogy a vásárlóidnak a legérthetőbb.