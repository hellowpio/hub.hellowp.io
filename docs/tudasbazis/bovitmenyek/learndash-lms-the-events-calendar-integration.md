---
title: "LearnDash LMS - The Events Calendar Integration"
description: "Hivatalos LearnDash integráció, amellyel az esemény-regisztráció vagy jegyvásárlás automatikus beiratkozást ad a kapcsolt LearnDash kurzusokba vagy csoportokba."
sidebar_label: "LearnDash LMS - The Events Calendar Integration"
---

## Bevezetés

A LearnDash LMS – The Events Calendar Integration egy ingyenes, hivatalos LearnDash kiegészítő, amellyel összekapcsolhatod a naptár-eseményeidet és jegyeladásodat a LearnDash kurzus- és csoport-hozzáférésekkel. A lényege egyszerű: ha valaki egy eseményre regisztrál vagy jegyet vásárol, automatikusan beiratkozik a hozzá társított kurzusba vagy csoportba. Ezzel megszűnik a kézi hozzáférésadás, és tisztán szabályozhatod, ki láthatja az online események belépési adatait.

## Hogyan működik röviden?

- A Event Tickets Plus jegyek WooCommerce termékekké válnak.
- A WooCommerce for LearnDash kiegészítővel a termékhez kurzusokat/csoportokat rendelsz.
- Amikor a vásárlás megtörténik (és a rendelés “teljesített”), a rendszer automatikusan beiratkoztatja a vevőt az adott kurzus(ok)ba/csoport(ok)ba.
- Az eseményhez megadhatod, mely kurzusok/csoportok tartoznak; virtuális eseménynél a csatlakozási linkek csak a beiratkozottaknak jelennek meg.

## Fő funkciók, részletesen

- **Automatikus beiratkozás**: A jegyvásárlás/regisztráció után a felhasználó azonnal hozzáférést kap a megadott LearnDash kurzushoz vagy csoporthoz. Nincs CSV-import, nincs kézi jogosultság-kezelés.
- **Kurzus- és csoport-hozzárendelés eseményekhez**: Minden eseményhez beállíthatod, pontosan melyik kurzus(ok) és/vagy csoport(ok) legyenek kiosztva a résztvevőknek.
- **Virtuális események védelem**: Online események (pl. Zoom link, meeting jelszó) csak a beiratkozottaknak láthatók. Így a belépési információk nem kerülnek illetéktelenekhez.
- **WooCommerce-alapú jegyértékesítés**: A jegy WooCommerce termék, amihez több kurzust/csoportot is rendelhetsz. Egy vásárlás = szabályozott hozzáférés-kiosztás.
- **Kiegészítő értékesítési csatorna**: Az eseményoldalak és a naptárnézet a kurzusok promóciójának új felületet adnak anélkül, hogy a meglévő kurzus-értékesítési folyamataidat lecserélnéd.
- **Ingyenes, hivatalos integráció**: LearnDash által készített és karbantartott kiegészítő, közvetlenül a LearnDash Add-Ons felületről telepíthető.

## Előfeltételek és kompatibilitás

- Kötelező bővítmények:
  - The Events Calendar, Event Tickets, Event Tickets Plus, WooCommerce
  - LearnDash LMS + WooCommerce for LearnDash + The Events Calendar for LearnDash (LearnDash Add-Ons)
- Telepítés: a LearnDash Add-Ons menüből, aktív licenccel; vagy kézi feltöltéssel a LearnDash-fiókból letöltött ZIP segítségével.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld: The Events Calendar, Event Tickets, Event Tickets Plus, WooCommerce, LearnDash.
2. A LearnDashban kapcsold be: WooCommerce for LearnDash és The Events Calendar for LearnDash.
3. WooCommerce beállítás: kapcsold ki a vendégvásárlást (minden vásárlónak legyen fiókja).
4. Event Tickets beállítás: tedd kötelezővé a bejelentkezést RSVP-hez és vásárláshoz.
5. Hozz létre egy LearnDash kurzust. Javasolt: Access Mode = Closed, Only visible to enrollees; opcionálisan a gomb URL-jét irányítsd a jegytermék oldalára.
6. Hozz létre eseményt és jegyet; a létrejött WooCommerce jegytermékhez rendeld hozzá a megfelelő kurzus(oka)t/csoport(oka)t.
7. Ha virtuális esemény: állítsd be, hogy a hozzáférési adatok csak beiratkozottaknak/csoporttagoknak láthatók.

## Gyakorlati példák

- **Webinár + online kurzus**: A webinár jegye megvásárlásakor a résztvevő automatikusan hozzáfér az előkészítő modulhoz. A csatlakozási link csak a beiratkozott felhasználóknak jelenik meg.
- **Hibrid workshop**: Személyes egynapos tréninghez online tananyag, elő- és utófelkészüléssel. A jegyvásárlás kiosztja a teljes tanulási útvonalat.
- **Céges csoportok**: Eseményregisztrációval automatikus csoporttagságot adsz, így a belső képzések és riportok egy helyen kezelhetők.
- **Kampány az eseménynaptárban**: Eseményeid a naptárban a kurzus-hozzáféréssel együtt értékesíthetők, extra konverziós felületet adva.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Azonnali, automatikus beiratkozás – nincs manuális adminisztráció.
- **Kevesebb hiba**: Nincs elfelejtett hozzáférés vagy téves jogosultság.
- **Biztonság**: Csak jogosultak látják a virtuális belépési adatokat.
- **Rugalmas értékesítés**: Eseményekkel bővítheted a kurzuseladásodat.
- **Skálázhatóság**: Tömeges regisztrációk kezelése egyszerű, automatizált folyamattal.

## Kinek ajánlott?

- **Képzőcégek és akadémiák**, amelyek élő alkalmakat és e-learninget kombinálnak.
- **Vállalati L&D csapatok**, csoportalapú hozzáférés és riportok igényével.
- **Szabadúszó trénerek, coachok**, akik webinárokat és kurzusokat értékesítenek.
- **Nonprofit és közösségi szervezetek**, amelyek eseményregisztrációt és tudásanyag-hozzáférést szeretnének összekötni.

## Fontos megkötések

- **RSVP**: Alapértelmezésben az RSVP nem ad automatikus kurzushozzáférést.
- **Több jegy egy rendelésben**: Ha egy vásárló több jegyet vesz külön résztvevőknek, az nem osztja ki automatikusan mindegyik résztvevőnek a kurzus-hozzáférést. Minden résztvevőnek saját felhasználói fiókra/jegyre van szüksége.
- **Bejelentkezés megkövetelése**: A vendégvásárlás legyen tiltva, a jegyvásárláshoz/regisztrációhoz pedig kötelező a bejelentkezés, hogy a beiratkozás a megfelelő felhasználóhoz kapcsolódjon.

## Gyors ellenőrzőlista

```
- LearnDash, The Events Calendar, Event Tickets, Event Tickets Plus, WooCommerce aktív
- LearnDash Add-Ons: WooCommerce for LearnDash + The Events Calendar Integration aktív
- WooCommerce: vendégvásárlás kikapcsolva
- Event Tickets: bejelentkezés kötelező
- Kurzus: Access Mode = Closed, Only visible to enrollees (opcionális gomb-URL a jegyoldalra)
- Esemény + jegy létrehozva; jegytermékhez hozzárendelve a kurzus/csoport
- Virtuális esemény: belépési adatok csak beiratkozottaknak láthatók
```

Ezzel a kiegészítővel az eseményalapú regisztrációid és a LearnDash-kurzus-hozzáférések végre egy automatizált, biztonságos és skálázható folyamatban találkoznak. Ha élő eseményekből tanulási utakat építesz, ez az integráció pont neked való.