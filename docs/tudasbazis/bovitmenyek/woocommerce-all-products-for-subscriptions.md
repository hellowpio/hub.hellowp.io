---
title: "WooCommerce All Products for Subscriptions"
description: "Hivatalos WooCommerce kiegészítő, amellyel bármely termékedhez előfizetési opciókat adhatsz, „subscribe & save” modellel, külön Subscription terméktípus nélkül."
sidebar_label: "WooCommerce All Products for Subscriptions"
---

## Mi ez és milyen problémát old meg?

Az **All Products for WooCommerce Subscriptions** (APfS) egy hivatalos WooCommerce kiegészítő, amellyel a már meglévő, nem előfizetés típusú termékeidhez adhatsz **opcionális előfizetési terveket**. Így ugyanazon a termékoldalon kínálhatod az **egyszeri vásárlást** és a **„subscribe & save”** előfizetést, anélkül hogy a terméket át kellene alakítanod külön „Subscription product”-tá. Ezzel elkerülöd a termékduplikációt, egyszerűsíted az árazást és javítod a vásárlói élményt.

## Hogyan működik? (áttekintés)

- **Előfizetési tervek termékenként**: Simple és Variable termékekhez **terveket** adhatsz (pl. heti, havi, negyedéves), kedvezménnyel. Beállíthatod, hogy a termék **csak előfizetésként** legyen megvehető.
- **Globális vagy egyedi tervek**: Létrehozhatsz **globális terveket** az egész katalógusra (akár kategóriákra szűkítve) és **termék-specifikus** terveket is, ha egyedi ütemezést vagy kedvezményt szeretnél.
- **„Subscribe & Save” kedvezmény**: Tervenkként **százalékos kedvezményt** vagy **árfelülírást** adhatsz, hogy ösztönözd az előfizetés választását.
- **Kosár szintű előfizetés**: A vevő a **teljes kosarát** is megveheti előfizetésként, nem csak egy-egy terméket.
- **„Add to Subscription”**: A vásárlók utólag **hozzáadhatnak termékeket vagy a teljes kosarat** egy meglévő előfizetésükhöz (ha az ütemezés kompatibilis). Ezt adminban engedélyezheted/korlátozhatod.
- **Subscription boxok**: Natívan együttműködik **Product Bundles** és **Composite Products** terméktípusokkal, így rugalmas, összetett előfizetéses csomagokat hozhatsz létre.
- **Blocks és HPOS támogatás**: Működik a **Cart/Checkout Blocks** és a **HPOS** környezetben, meghatározott korlátozásokkal (lásd alább).

Megjegyzés a névről: a közösségben sokszor „WooCommerce All Products for Subscriptions”-ként hivatkoznak rá; a hivatalos név „All Products for WooCommerce Subscriptions”.

## Gyakorlati példák

- **Kávé webshop „subscribe & save”**: A 250 g-os kávé terméklapon felajánlod a havi előfizetést 10% kedvezménnyel. A vásárló ugyanott választhat egyszeri vásárlást vagy előfizetést.
- **Kozmetikumok rendszeres utánpótlása**: Arckrém és szérum havi/2 havi tervekben, eltérő kedvezményekkel. A vevő később a futó előfizetéséhez hozzáteheti az új kedvencét.
- **Karbantartási szolgáltatás**: Egyszeri szolgáltatásaid mellé éves/negyéves csomagot kínálsz, kedvezményes díjjal és automatikus megújítással.
- **Subscription box**: Összeállíthatsz egy havi „válogatás” dobozt, ahol a vevő komponenseket választ, majd a kompozit/bundle terméket **előfizetésként** veszi meg.

## Előnyök és értékajánlat

- **Nincs termékduplikáció**: Nem kell áttérned külön „Subscription product” típusra; a meglévő katalógusod használható.
- **Egységes vásárlói élmény**: Egy helyen dönthet a vevő az egyszeri vásárlás és az előfizetés között; kosárszinten is kínálható az előfizetés.
- **Nagyobb kosárérték és CLV**: A **„Add to Subscription”** funkció és a tervi kedvezmények növelik a megtartást és a bevételt.
- **Adminisztrációs egyszerűség**: Globális tervek, kategóriaszintű szabályok, és termék-specifikus finomhangolás.
- **Woo-ökoszisztéma kompatibilitás**: Hivatalos integrációk összetett terméktípusokkal és modern WooCommerce technológiákkal.

## Kinek ajánlott?

- **FMCG/e-kereskedelmi** boltoknak (élelmiszer, kávé, kozmetikum, háztartási cikk, kisállateledel), ahol rendszeres utánpótlás jellemző.
- **Szolgáltatóknak**, akik periodikus számlázást vagy karbantartási csomagokat kínálnak.
- **Doboztípusú kínálatot** építőknek (bundle/composite), akik saját előfizetéses megoldást akarnak külső SaaS nélkül.
- **Growth/marketing csapatoknak**, akik upsell/retention eszközt keresnek a már meglévő előfizetők bővítéséhez.

## Rendszerkövetelmények és függőségek

- **Kötelező**: WooCommerce Subscriptions bővítmény.
- Ajánlott: naprakész WordPress, WooCommerce és PHP, valamint Blocks és HPOS kompatibilis környezet.

## Fontos korlátozások

- **Sign‑up fee és free trial**: Az APfS-tervek nem támogatják a beugró díjat és az ingyenes próbaidőt. Ezekhez klasszikus Subscription terméktípus szükséges.
- **Proráció/szinkronizálás**: Nem adhatsz olyan terméket/kosarat meglévő előfizetéshez, amely proratált vagy szinkronizált számlázású.
- **Variációszintű tervek**: Közvetlenül nem támogatottak; a variációk a szülő termék terveit öröklik.
- **Szállítási költség**: Meglévő előfizetés bővítésekor a szállítási díj nem számolódik újra.
- **Blocks korlátozások**: A kosár blokkon belül a termék-szintű előfizetési tervek nem módosíthatók; a „kosárból előfizetéshez adás” nem támogatott a Cart blockban.
- **Téma/kupon bővítmények**: Egyes kedvezménykezelők és témák befolyásolhatják a megjelenítést vagy gombok működését; tesztelj élesítés előtt.

## Beállítás lépésről lépésre

1. Telepítsd és aktiváld a WooCommerce Subscriptions bővítményt.
2. Telepítsd/aktiváld az APfS-t.
3. Menj a **WooCommerce > Settings > Subscriptions** menübe:
   - Hozz létre **Globális terveket** (opcionálisan kategóriakorlátozással).
   - Termékoldalon a **Product Data > Subscriptions** fülön állíts be **egyedi terveket**, és tiltsd az **egyszeri vásárlást**, ha „csak előfizetés” a cél.
   - Engedélyezd a **„Add to Subscription”** funkciót (termék/kosár) a későbbi bővítésekhez.
4. Adj meg **kedvezményeket** tervenként (százalék vagy árfelülírás).
5. Teszteld a kosár/checkout folyamatot, különös tekintettel a Blocks és kuponok viselkedésére.

## Gyors kezdés – ellenőrzőlista

```
[ ] WooCommerce Subscriptions aktív
[ ] APfS aktív
[ ] Globális tervek létrehozva (periodicitás + kedvezmény)
[ ] Termék-specifikus tervek (ha szükséges)
[ ] „Csak előfizetés” beállítva a megfelelő termékeknél
[ ] „Add to Subscription” engedélyezve
[ ] Blocks/HPOS kompatibilitás ellenőrizve
[ ] Próbarendelés: egyszeri vs előfizetés, kedvezmények, megújítás
```

Ezzel az APfS-sel gyorsan és tisztán bevezetheted a „subscribe & save” modellt a teljes katalógusodra, csökkentve a karbantartási terhet és növelve az ismétlődő bevételeidet.