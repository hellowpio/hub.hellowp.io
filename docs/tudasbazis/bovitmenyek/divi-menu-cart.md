---
title: "Divi Menu Cart"
description: "Ingyenes Divi-modul WooCommerce kosár ikonhoz, tételszám és végösszeg megjelenítéséhez a fejlécben vagy bármely Divi elrendezésben."
sidebar_label: "Divi Menu Cart"
---

## Mi ez és milyen problémát old meg?

A Divi Menu Cart egy **ingyenes Divi-modul** WooCommerce webáruházakhoz. Lehetővé teszi, hogy a **fejlécben** vagy bármely Divi elrendezésben megjelenítsd a **kosár ikont**, a **tételszámot** és a **kosár végösszegét**. A tipikus gond – “hogyan mutassak kosárállapotot a fejlécben kódolás nélkül?” – ezzel a bővítménnyel egyetlen modul hozzáadásával megoldható.

## Fő funkciók és hogyan működnek

- **WooCommerce-integráció**
  - A modul csak akkor renderel, ha a WooCommerce aktív, és közvetlenül a kosár adatait (tételszám, összegek) olvassa ki. Így az **aktuális kosárállapot** látszik, nem statikus szöveg.
  - Beépített ellenőrzés fut a renderelés elején, így WooCommerce hiányában nem dob hibát, egyszerűen nem jelenik meg.

- **Tartalomkapcsolók (show/hide)**
  - Külön-külön kapcsolhatod: **Ikon**, **Tételszám**, **Ár**. Ha minimalista fejlécet szeretnél, elrejtheted az árat, és csak az ikont + darabszámot hagyhatod meg.
  - Testreszabható feliratok: **Single Item Text** és **Multiple Item Text**, hogy a “1 termék” vs. “3 termék” típusú szövegezés márkádhoz és nyelvi igényeidhez igazodjon.

- **Stílus és tipográfia**
  - Állítható **ikonméret** és **szín**, külön tipográfiai beállítások a feliratokhoz és az árhoz. Minden elem külön formázható a Divi Design fülein.
  - A modul tartalmaz **egyéni CSS mezőket**, ha pixelpontos finomhangolásra van szükség.

- **Vizuális Builder támogatás**
  - Az **Icon**, **Item Count** és **Price** elemek élő előnézetben formázhatók. Amit a Visual Builderben látsz, azt kapja a felhasználó.

- **Admin felület és stabilitás**
  - A Vezérlőpulton külön menüpontot kapsz az alapbeállításokhoz, míg a részletes megjelenést magán a modulon belül szabhatod testre.
  - Opcionális “**refresh cart on page load**” funkció segít, ha korábbi beállításmódosítások után a megjelenés nem frissül megfelelően.

## Telepítés és első lépések

Előfeltételek: **Divi Theme/Builder**, **WooCommerce**, naprakész WordPress és PHP környezet.

1. Telepítsd és aktiváld a bővítményt a szokásos módon.
2. A Vezérlőpulton megjelenik a **Divi Menu Cart** alapbeállítási oldal.
3. Nyisd meg a Divi Buildert, és add hozzá a **Menu Cart** modult a kívánt szekcióba (pl. egyedi fejlécben).

Hasznos útvonalak:
```
Vezérlőpult > Divi Menu Cart
Divi Builder > Add Module > Menu Cart
```

Alap beállítások a modulban:
- Content: **Icon / Item Count / Price** megjelenítése, **Single/Multiple Item Text**.
- Design: ikonméret/szín, betűtípusok, távolságok, **Custom CSS**.

Példa feliratokra:
```
Single Item Text: termék
Multiple Item Text: termékek
```

## Gyakorlati példák

- **Egyedi fejléc kosárjelzővel**
  - A Theme Builder fejlécében a logó és a menü mellé elhelyezed a Menu Cart modult. Asztali nézetben ikon + darabszám + ár látszik, mobilon elrejted az árat a letisztultságért.

- **Brandelt szövegek többnyelvű boltban**
  - Magyarul “termék/termékek”, angol nyelvű nézetben “item/items” – a két felirat miatt nem kell külön kódolnod, egyszerűen átkapcsolod a szövegeket.

- **Minimalista badge a menü mellett**
  - Csak a kosár ikon és a tételszám aktív, nagy kontrasztos badge-stílussal. Tökéletes egyszerű, gyors boltokhoz.

## Használati tippek

- Helyezd a modult a **menü mellé** a fejlécben, hogy azonnal észrevehető legyen.
- A Divi **reszponzív beállításaival** készíts eltérő megjelenést mobilra (pl. ár elrejtése).
- Ha módosítás után nem frissül a nézet, kapcsold be a **“refresh cart on page load”** opciót.
- Kerüld a duplikált kosárikonokat: ha a témád saját kosárjelzőt ad, kapcsold ki az egyiket.

## Hibakeresés

- **Nem jelenik meg a modul?**
  - Ellenőrizd, hogy a WooCommerce aktív-e.
  - Győződj meg róla, hogy van a kosárban tétel (előfordul, hogy üres kosárnál csak ikon látszik).
  - Kapcsold be a frissítés opciót, ürítsd a gyorsítótárat, és frissítsd az oldalt.

- **Eltérő stílus / tördelés?**
  - Nézd át a Divi Design beállításokat és az esetleges egyéni CSS-t. Kapcsold ki ideiglenesen a custom CSS mezőket a hiba izolálásához.

## Előnyök és értékajánlat

- **Időmegtakarítás:** nincs szükség shortcode-okra vagy egyedi kódra a kosárjelzőhöz.
- **Professzionális UX:** a felhasználó mindig látja, mennyi és milyen értékű termék van a kosarában.
- **Rugalmasság:** különálló megjelenítés-vezérlők (ikon, darabszám, ár), testreszabható feliratok, teljes Divi-stílus integráció.
- **Biztonságos működés:** WooCommerce-ellenőrzés és oldalbetöltéskori frissítés a stabil megjelenítésért.

## Kinek ajánlott?

- **Divi-alapú webshop tulajdonosoknak:** ha gyorsan, kódolás nélkül szeretnél kosárindikátort.
- **Ügynökségeknek és fejlesztőknek:** skálázható, újrahasznosítható modul megoldás ügyfélprojektekben.
- **Marketingeseknek/UX-eseknek:** egyértelmű kosárállapot = kevesebb bizonytalanság, jobb konverzió.

## Megjegyzés a hasonló nevű bővítményekről

Létezik egy másik, fizetős, hasonló nevű bővítmény is a piacon. Ez a dokumentáció az **ingyenes**, Divi-modult hozzáadó megoldásról szól, amely a Divi Builderben bárhová elhelyezhető kosár ikont, tételszámot és árat biztosít.

## Rövid összegzés

A Divi Menu Cart egy célzott, könnyű kiegészítő: **kosár ikon + tételszám + végösszeg** a Divi-ben, teljes **Visual Builder** támogatással. Segítségével percek alatt, **kódolás nélkül** készíthetsz professzionális kosárjelzőt az egyedi fejlécekben és elrendezésekben, teljesen a márkádra szabva.