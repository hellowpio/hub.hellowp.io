---
title: "WooCommerce URL Coupons"
description: "Kuponok automatikus alkalmazása egyedi URL-ről, termékek kosárba helyezése és átirányítás WooCommerce-ben."
sidebar_label: "WooCommerce URL Coupons"
---

## Mi ez és milyen problémát old meg?

A WooCommerce URL Coupons egy hivatalos kiegészítő, amellyel bármely kuponhoz egyedi URL-t rendelhetsz. Amikor a vásárló megnyitja a linket, a kupon automatikusan érvényesül, opcionálisan megadott termékek is a kosárba kerülnek, majd átirányíthatod a látogatót a kosárra, pénztárra vagy bármely oldalra. Ezzel megszünteted a kuponbeváltási súrlódást: nem kell kódot gépelni, nincs hibázás, és csökken a „kuponvadászat” miatti lemorzsolódás.

## Fő funkciók és működés

- **Egyedi kedvezménylinkek**: Minden kuponhoz beállíthatsz egyedi slugot vagy meglévő oldalt „aktiválóként”. A link megnyitásakor a kupon automatikusan alkalmazódik.
- **Termékek automatikus kosárba helyezése**: Megadhatod, hogy a kupon URL megnyitásakor 1-1 db meghatározott termék automatikusan bekerüljön a kosárba. Csak megvásárolható termék és érvényes variáns adható hozzá.
- **Átirányítás (Redirect)**: A kupon alkalmazása után tetszőleges oldalra irányíthatsz, például a kosárra vagy pénztárra, így rövidítheted a vásárlói útvonalat és azonnali visszajelzést adhatsz.
- **Kuponmezők elrejtése**: Elrejtheted a kuponkód mezőt a Kosár és/vagy Pénztár oldalon. Így a kuponok kizárólag linkről érvényesíthetők, ami csökkenti a vásárlók elvándorlását.
- **Személyre szabható URL-viselkedés**:
  - A slug nem **kis-/nagybetű érzékeny**.
  - **Trailing slash szabály**: perjel nélkül a slug prefixként működik; perjellel pontos egyezést vár.
  - **Alap (plain) permalinkeknél** kérdőjellel induló kifejezést kell használni.
- **„Defer apply”**: Ha a kupon feltételei (pl. minimális kosárérték) még nem teljesülnek, a bővítmény „megjegyzi” a kupont, és később automatikusan alkalmazza, amikor a feltételek teljesülnek.
- **Admin kényelmi nézet**: A kuponlistában külön **URL Slug** oszlop segít az áttekintésben és karbantartásban.
- **Import/export**: Összedolgozik a kupon/CSV importáló eszközökkel és export során is megőrzi az URL-releváns beállításokat.
- **Kompatibilitás**: Támogatja a **Cart & Checkout Blocks** élményt és kompatibilis a **HPOS** rendelések tárolásával.

### URL-viselkedés példák

- Trailing slash nélkül (prefix):
```
/coupon/koszonom
```
ill. bármely, ezzel kezdődő slug elfogadható.

- Pontos egyezéssel (trailing slash-sel):
```
/coupon/koszonom/
```

- Alap permalink esetén:
```
?freeshipping
```

## Gyakorlati példák

1. **Hírlevél-kedvezmény egy kattintással**  
   A levélben a „Vásárolok most” gomb egy olyan URL-re mutat, amely aktiválja a 10% kedvezményt, beteszi a promóterméket a kosárba és a pénztárra visz. Nincs kódgépelés, nincs felesleges lépés.

2. **QR-kód nyomtatott katalógusban**  
   A QR megnyitásakor a látogató azonnal megkapja az ingyenes szállítást, és a legnépszerűbb csomag a kosarába kerül. A folyamat mérhető és gyors.

3. **„Easter egg” jutalom**  
   Blogposzt olvasásakor automatikusan aktiválódik egy hűségkedvezmény. Nincs kuponkód, csak jó élmény a visszatérő vásárlóknak.

4. **Csak URL-kupon stratégia**  
   Elrejted a kuponmezőket, így a kedvezmények csak ellenőrzött linkről érhetők el. Minimalizálod a kuponkeresés okozta lemorzsolódást.

5. **Villámgyors checkout útvonal**  
   Link megnyitása → termék(ek) a kosárban → kupon alkalmazva → azonnali átirányítás a pénztárra. Ideális időérzékeny kampányokhoz.

## Beállítás és konfiguráció

1. **Kupon létrehozása**: Marketing > Coupons alatt hozd létre vagy szerkeszd a kupont.
2. **Discount links fül**:
   - Kapcsold be az **Apply via URL** opciót.
   - Válaszd ki, hogy egyedi slugot használsz, vagy meglévő oldal megnyitására aktiválódjon a kupon.
   - Add meg az esetleges **Products to add** listát.
   - Állítsd be az **átirányítást** (pl. Kosár, Pénztár).
   - Engedélyezd a **Defer apply** funkciót, ha szükséges.
3. **Általános beállítások** (WooCommerce > Settings > General):
   - **Coupon URL Prefix**: állíts be egy egységes előtagot (pl. „/coupon/”), majd zárd ki ezt az útvonalat a cache-ből.
   - **Hide coupon code field**: döntsd el, hol rejted el a kuponmezőt (Kosár/Pénztár).

Megjegyzések:
- Változatos termékhez konkrét variánst válassz, különben nem kerül a kosárba.
- Olyan céloldalra irányíts, ahol a WooCommerce üzenetek megjelennek (pl. Shop, Kosár, Pénztár), hogy a „Kupon alkalmazva” visszajelzést lásd.

## Legjobb gyakorlatok és hibakeresés

- **Cache-probléma gyanú**: Ha a kupon néha működik, néha nem, jelölj ki egységes **URL prefixet**, és zárd ki a gyorsítótárból ezeket az útvonalakat.
- **Permalink mód**: Alap permalink esetén a slug elé tegyél kérdőjelet.
- **Üzenetek láthatósága**: Olyan oldalra irányíts, ahol a rendszer üzenetei látszanak, különben a vásárló nem kap visszajelzést a kupon alkalmazásáról.

## Előnyök és értékajánlat

- **Kevesebb súrlódás, jobb konverzió**: Nincs kódgépelés, minden egy kattintás.
- **Gyors vásárlói út**: Termékhozzáadás + kupon + átirányítás automatán.
- **Mérhetőség és szegmentálás**: Egyedi URL-ekkel csatornánként, kampányonként különíthetsz el kedvezményeket.
- **Kevesebb kuponvadászat**: A mezők elrejtésével fókuszált marad a checkout.
- **Skálázható működés**: Admin oszlopok, import/export és Blocks/HPOS kompatibilitás megkönnyíti az üzemeltetést.

## Célközönség

- **Webáruház-tulajdonosok és marketingesek**, akik kampányalapú kedvezményeket futtatnak és mérhető, akadálymentes beváltást szeretnének.
- **Ügynökségek**, akik ügyfeleiknek gyorsan implementálható, mégis robusztus promóciós megoldást keresnek.
- **Promóció-intenzív boltok**, ahol gyakoriak a hírlevelek, PPC kampányok, közösségi megosztások vagy nyomtatott hirdetések.
- **Technikailag összetett stackkel dolgozók** (cache/proxy/CDN), akiknek kritikus a megbízható kupon-beváltás.

## Rendszerkövetelmények és kompatibilitás

- WordPress, WooCommerce és PHP naprakész környezet szükséges.
- Kompatibilis a **Cart & Checkout Blocks** élménnyel és a **HPOS** rendeléstárolással.

Ha szeretnéd, készíthetek egy részletes, képernyőképes „playbookot” konkrét kampánypéldákkal és URL-stratégiával – csak írd meg, melyik use case a fókusz.