---
title: "Oxygen Elements for WooCommerce"
description: "Az Oxygen vizuális oldalépítő hivatalos WooCommerce-kiegészítője, amellyel a teljes webáruházad sablonokkal és Woo-elemekkel, kódolás nélkül építheted fel."
sidebar_label: "Oxygen Elements for WooCommerce"
---

## Mi ez és milyen problémát old meg?

Az Oxygen Elements for WooCommerce az Oxygen oldalépítő WooCommerce-integrációja. Arra való, hogy a WooCommerce boltod minden oldalát – termékoldal, shop archív, kosár, pénztár, fiók – vizuálisan, sablonokkal és kifejezetten WooCommerce-hez készült elemekkel építsd meg. Nem kell PHP-sablonokat felülírnod: ugyanabban a vizuális szerkesztőben dolgozol, ahol a többi oldalt is kialakítod.

A legnagyobb gondot – a témához kötött, nehezen módosítható WooCommerce-sablonokat és a Shop oldal direkt szerkeszthetőségének hiányát – sablonalapú, kódmentes megoldással kerüli meg.

## Fő funkciók, érthetően

### Sablonok az egész boltra
- **Shop archív sablon**: A terméklistázó oldalakat (shop, kategóriák, címkék) sablonnal kezeled. Te határozod meg a rácsot, a kártyák felépítését, a lapozást és a szűrőblokkot.
- **Termékoldal sablon**: A **Product Builder** egy keretelem, amelyhez „Product …” részegységeket adhatsz: **Title**, **Images**, **Price**, **Description**, **Meta/Info**, **Cart Button**, **Upsells** stb. Mindet külön stíluslapokkal formázod.
- **Rendszeroldalak**: Dedikált elemek a **Kosár**, **Pénztár** és **Saját fiók** oldalakhoz. Az űrlapmezők, gombok, értesítések és lépések megjelenését részletesen testre szabhatod.

### Globális WooCommerce-stílusok
Egy helyen állíthatod be a bolt teljes arculatát: **gombok**, **linkek**, **űrlapok**, **szövegek**, **badge-ek** (pl. „Sale”), **értesítések** és **widgetek** stílusai. Így a teljes webshop konzisztens, márkahű megjelenést kap.

### Terméklisták és dinamikus lekérdezések
- **Products List elem**: Vizuálisan állíthatod be a listázás feltételeit: mennyi termék, milyen rendezés, mely kategóriák, csak akciós, legjobban fogyó, legjobbra értékelt, akár konkrét SKU/ID alapján. Van oldalszámozás és részletes UI-stílus.
- **Haladó loop/Query builder**: Ha komplex feltételekre van szükséged, dinamikus lekérdezéseket és egyedi listázó komponenseket készíthetsz, lapozással, „load more”-ral vagy végtelen görgetéssel.

### WooCommerce-specifikus elemek
A termékoldalhoz és listákhoz tucatnyi specializált elem jár:
- **Product Title**, **Product Images** (galéria, zoom ikon, „Sale” badge kezelése), **Product Price**, **Product Description**, **Product Meta/Info** (kategóriák, címkék, SKU), **Product Cart Button** (változatok, raktárkészlet, mennyiség), **Product Upsells/Related**.
Minden elem külön stílusfülekkel rendelkezik, így pixelpontos kontrollt kapsz.

### Sablon-override Oxygen alatt
Téma nélkül is felülírhatsz WooCommerce-sablonokat az Oxygen által biztosított útvonalon:
```
wp-content/oxywoocotemplates/woocommerce/
```
Haladó esetre tartogasd; a legtöbb dizájn felépíthető kizárólag az Oxygen elemeivel.

## Gyakorlati példák

1. Egyedi Shop rács „Sale” badge-del  
   - Készíts archív sablont a termékekhez, helyezz el Products List elemet, állíts be 3 oszlopos rácsot, kártyánként képet, címet, árat, kosár gombot. A „Sale” badge-et a Product Images elemben formázd, és adj hozzá kategóriaszűrő blokkot.

2. Termékoldal variánsokkal és upsellel  
   - Product Builder + Title, Images, Price, Cart Button, Description, Upsells elemek. A Cart Button automatikusan kezeli a variációkat és a készletet; az Upsells blokkban a kapcsolt termékeket saját kártyadizájnnal jeleníted meg.

3. „Csak akciós” és „legjobban fogyó” szekciók a kezdőlapon  
   - Két Products List elem eltérő lekérdezéssel: egyik „csak akciós”, másik „best sellers”. Mindkettő saját rács- és kártyastílussal, összhangban a márkaarculattal.

4. Pénztár folyamat letisztítása  
   - Checkout elem elhelyezése, űrlapmezők és gombok egységes stílusának beállítása, értesítések testreszabása, hogy a vásárló könnyebben végigmenjen a folyamaton.

## Telepítés és előfeltételek (röviden)

1. Telepítsd és aktiváld az Oxygent.  
2. Aktiváld a WooCommerce-t.  
3. Engedélyezd az Oxygen Elements for WooCommerce kiegészítőt.  
4. Hozz létre sablont a Shop/archív oldalra: Archive → Product típusra célozva, majd adj hozzá Products List elemet.  
5. Hozz létre termékoldal sablont: Singular → Products, majd Product Builder + szükséges „Product …” elemek.  
6. A kosár/pénztár/fiók oldalakra helyezd el a dedikált elemeket, és stílusozd őket.

Megjegyzés: a Shop oldal nem szerkeszthető közvetlenül; sablont kell hozzárendelned a termékarchívumhoz.

## Teljesítmény és rendszerkövetelmények

A vizuális WooCommerce-építés memóriaigényesebb lehet. Javasolt a magasabb szerver- és WordPress-memória limit, hogy a szerkesztő és a lekérdezések zökkenőmentesen fussanak.

## Előnyök és értékajánlat

- **Kódmentes sablonozás**: Nem kell PHP-sablonokkal bajlódnod.  
- **Gyors építés**: Vizuális szerkesztés, előre elkészített Woo-elemekkel.  
- **Konzisztens dizájn**: Globális stílusokkal az egész bolt egységes.  
- **Rugalmas listázás**: Akciós, top seller, attribútumalapú vagy egyedi lekérdezések pár kattintással.  
- **Kevesebb karbantartás**: Kevesebb egyedi kód, könnyebb továbbfejlesztés.

## Kinek ajánlott?

- **Webfejlesztőknek és ügynökségeknek**: Gyors prototípus és skálázható sablonrendszer, ügyfélbarát szerkesztés.  
- **Webshop-tulajdonosoknak**: Márkahű, konverzióbarát felépítés programozás nélkül.  
- **Designereknek**: Pixelpontos kontroll a WooCommerce minden elemén.

## Kapcsolódó megjegyzés az Oxygen verziókról

Az Oxygen Classic e kiegészítőt használja a WooCommerce-integrációhoz. Az újabb Oxygen főverziók külön, dedikált WooCommerce-bővítményt kínálnak. Ha váltasz, ellenőrizd, melyik integráció illik a telepítésedhez.

## Összegzés

Az Oxygen Elements for WooCommerce abban segít, hogy a WooCommerce boltodat teljes egészében vizuálisan, sablonokkal és Woo-elemekkel építsd fel. Pontosan meghatározhatod, hogyan nézzen ki a shop, a termékoldal, a kosár és a pénztár, miközben globális stílusokkal egységes arculatot adsz a teljes webáruháznak. Ha gyorsan, kódolás nélkül szeretnél professzionális WooCommerce-megoldást, ez a kiegészítő célzott és megbízható eszközt ad a kezedbe.