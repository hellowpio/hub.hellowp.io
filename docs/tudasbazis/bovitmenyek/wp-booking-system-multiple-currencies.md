---
title: "WP Booking System - Multiple Currencies"
description: "Prémium kiegészítő a WP Booking Systemhez, amely több pénznemet kezel a foglalási űrlapon, és a fizetést a kiválasztott devizában indítja, automatikus vagy kézi árfolyammal."
sidebar_label: "WP Booking System - Multiple Currencies"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Multiple Currencies egy prémium kiegészítő, amellyel a foglalási űrlapodon több pénznemet kezelhetsz. A látogató a díjtáblázat fölötti pénznemválasztóval kiválaszthatja a saját valutáját, te pedig a foglalást és a fizetést is ebben a devizában kezeled. Ezzel megszűnik az árfolyam-átváltás miatti bizonytalanság: az árak és a végösszeg átláthatóan, a vendég által választott pénznemben jelennek meg és kerülnek terhelésre.

## Fő funkciók, röviden elmagyarázva

- **Pénznemválasztó a foglalási űrlapon**: A pricing táblázat feletti váltóval a felhasználó azonnal devizát válthat. Minden ár, díj és a végösszeg azonnal frissül.
- **Fizetés a kiválasztott pénznemben**: Nem csak megjelenítésről van szó; a fizetési tranzakció a választott devizában indul (a kapu támogatásától függően), így elkerülhetők a rejtett konverziós díjak.
- **Tetszőleges számú pénznem**: Vedd fel az általad támogatni kívánt valutákat; beállíthatod az alapértelmezett devizát és a váltható opciókat.
- **Árfolyam-kezelés két módban**:
  - **Automatikus frissítés**: Napi árfolyamok a Fixer API-ról (API-kulcs szükséges), minimális karbantartással.
  - **Kézi árfolyam**: Rögzített, általad meghatározott konverziók, ha garantált, „kerek” árakat szeretnél.
- **Admin felület integráció**: Önálló beállítási oldal a WP Booking Systemben: Settings → Payment Options → Multiple Currencies.
- **Licenc**: A kiegészítő a Business és magasabb csomagokban érhető el.

## Hogyan működik a gyakorlatban?

A kiegészítőt aktiválás után az adminban engedélyezed, felveszed a támogatott pénznemeket, majd kiválasztod az árfolyam-módot (automatikus vagy kézi). Ezt követően a foglalási űrlapodon megjelenik a pénznemválasztó. Amikor a látogató pénznemet vált, a rendszer az aktuális (vagy általad megadott) árfolyammal konvertálja az árakat, a fizetési kapu pedig a kiválasztott devizában indítja a terhelést.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld a WP Booking System alap plugint és a Multiple Currencies kiegészítőt.
2. Lépj a Settings → Payment Options → Multiple Currencies menübe.
3. Engedélyezd a többpénznemes funkciót.
4. Add hozzá a támogatandó pénznemeket.
5. Válaszd ki az árfolyam-módot: automatikus (Fixer API-kulccsal) vagy kézi.

Példa konfiguráció:

```
Settings → Payment Options → Multiple Currencies

Enabled: Yes
Currencies: EUR, USD, GBP
Rates: Automatic (Fixer API key megadva)
```

## Konkrét használati esetek

- **Szállás több célpiaccal (EUR, GBP, USD)**: A vendég a saját valutáját választja. A foglalási díjak és az adók azonnal konvertálódnak, a fizetés például Stripe-on vagy PayPalon a választott devizában történik.
- **Eszköz- vagy járműbérlés turisztikai régióban**: Napi automatikus árfolyam-frissítéssel mindig naprakész árakat mutatsz és terhelsz, csökken a manuális karbantartás.
- **Fix, marketingbarát árak**: Ha nem akarsz napi árfolyam-ingadozást, kézi rögzített árfolyamot állítasz be (például 1 EUR = 1.1 USD), így a megjelenített és terhelt összegek stabilak maradnak.

## Előnyök és értékajánlat

- **Kevesebb súrlódás**: A vendég saját pénznemben látja és fizeti az árakat – nagyobb bizalom, jobb konverzió.
- **Átlátható végösszeg**: Nincsenek meglepő banki konverziós díjak a checkout után.
- **Automatizált működés**: Az automatikus árfolyam-frissítés csökkenti a kézi frissítésekből adódó hibákat és időráfordítást.
- **Nemzetközi értékesítés**: Könnyebben nyitsz új piacok felé, növelheted a foglalások számát.
- **Rugalmasság**: Korlátlan pénznem, kézi vagy automatikus árfolyam, több fizetési kapu támogatása.

## Kinek ajánlott?

- **Szállásadók, vendégházak, apartmanok** több országból érkező vendégekkel.
- **Jármű-, kerékpár-, sporteszköz- és hajóbérlés** szolgáltatók nemzetközi közönséggel.
- **Túra- és élményszervezők**, ahol az ügyfelek különböző devizákban fizetnének.
- **Ügynökségek és több márkát kezelő rendszerek**, amelyek egy telepítésben több piacot szolgálnak ki.

Ha csak belföldi vendégeid vannak és egyetlen devizában számlázol, valószínűleg nincs szükséged erre a kiegészítőre.

## Kompatibilitás és korlátozások

- **Támogatott fizetési kapuk**: A kiegészítő együttműködik a WP Booking System fizetési integrációival (például Stripe, PayPal, Square, Mollie). A ténylegesen használható devizák a kapu saját pénznem-támogatásától függenek – ezt mindig ellenőrizd a szolgáltatódnál.
- **Nem kompatibilis**:
  - Authorize.Net kiegészítő: csak USD-ben fogad fizetést.
  - WooCommerce Checkout kiegészítő: a WooCommerce globálisan egyetlen pénznemet kezel.
  
Tipp: teszteld a teljes folyamatot sandbox módban minden beállított devizával, és ellenőrizd a kapud támogatási listáját.

## Háttér és licenc

- **Alap plugin**: WP Booking System (nap-alapú foglalási naptár, űrlapépítővel, fizetési kapukkal, adókkal, kedvezményekkel, iCal szinkronnal).
- **Licencelés**: A Multiple Currencies a Business és Developer csomagok része.
- **Fejlesztői háttér**: A WP Booking System-t eredetileg Roland Murg készítette; a terméket a Veribo IT Solutions SRL fejleszti és tartja karban.

Ezzel a kiegészítővel professzionális, többpénznemű foglalási élményt adhatsz a látogatóidnak, miközben egyszerűen kézben tartod az árfolyamokat és a fizetéseket – pontosan abban a devizában, amelyre az üzletednek és az ügyfeleidnek szüksége van.