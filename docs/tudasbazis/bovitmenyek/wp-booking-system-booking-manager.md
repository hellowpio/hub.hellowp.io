---
title: "WP Booking System - Booking Manager"
description: "A WP Booking System hivatalos kiegészítője, amely egy központi felületen kezeli az összes naptár összes foglalását – listanézetben és naptárnézetben, szűréssel és exporttal."
sidebar_label: "WP Booking System - Booking Manager"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Booking Manager a WP Booking System foglalási bővítmény kiegészítője. Arra való, hogy az oldaladon lévő **összes naptár minden foglalását egyetlen központi felületen** lásd, kezeld és exportáld. Ha több apartmanod, járműved vagy eszközöd van, nem kell naptáranként keresgélned: **egy helyen** szűrhetsz, kereshetsz, jóváhagyhatsz, elutasíthatsz és exportálhatsz. Ezzel csökken a hibázás esélye, gyorsul az adminisztráció, és minimalizálódik a dupla foglalások kockázata.

A WP Booking System maga napi (nem időréses) foglalásokra készült, és teljes folyamatot ad a naptáraktól az űrlapokon át az árazásig, fizetésig és értesítésekig.

## Hogyan működik a Booking Manager?

- A WordPress adminban új menüpont jelenik meg, ahol a **teljes foglalásállomány** elérhető.
- **Listanézet** és **naptárnézet** között válthatsz.
- Foglalásokat **kereshetsz**, **szűrhetsz** (dátum, naptár, státusz, űrlapmezők stb.), a **múltbeli tételeket elrejtheted**.
- Saját igényeid szerint **kiválaszthatod, mely űrlapmezők** jelenjenek meg oszlopként (mezőtérképzés).
- Egy kattintással **jóváhagyhatsz/elutasíthatsz**, jegyzetelhetsz, nyomtathatsz.
- Az adatokat **CSV-be exportálhatod** könyveléshez, riporthoz.
- A kiegészítő „Personal” vagy magasabb licencszinten érhető el.

## Fő funkciók – röviden és érthetően

### Központi foglaláslista
Minden naptár foglalása egy listában. Rendezés név, dátum, státusz vagy egyedi űrlapmező szerint. Tipikus használat: gyors áttekintés a heti érkezésekről és kintlévőségekről.

### Naptárnézet
Vizuális áttekintés színezéssel és legendákkal. Könnyebb észrevenni az üres foltokat és az átfedéseket. A changeover napok jól elkülöníthetők.

### Szűrés és keresés
Precíz szűrők naptárra, időszakra, státuszra, csatornára vagy ügyféladatokra. Nagy foglalásszám esetén is pillanatok alatt megtalálod, amit keresel.

### Testreszabható oszlopok
A foglalási űrlap egyedi mezőit (pl. vendégszám, opciók, kupon) oszlopokként jelenítheted meg. Így a csapatod azt látja elöl, ami számukra fontos.

### Export és riport
CSV exporttal egy kattintás a havi bevételi riport vagy a könyvelési összesítő. Szűrt nézetet is exportálhatsz (pl. csak adott apartman és hónap).

### Gyors műveletek
Foglalás jóváhagyása, elutasítása, manuális hozzáadása, jegyzetek rögzítése. A státuszváltás automatikusan blokkolja a napokat a naptárban.

## Mit ad a WP Booking System ökoszisztémája?

- **Naptárak:** több naptár, egyedi legendák, tömeges dátumszerkesztés, jogosultságkezelés.
- **Űrlapok:** rugalmas mezők, feltételes logika, oszlopos elrendezés, reCAPTCHA, többnyelvűség.
- **Árazás és fizetés:** nap/idényárak, adó, kedvezmények, kuponok, előleg, biztosíték, több pénznem, számlák és szerződések.
- **Fizetési integrációk:** Stripe, PayPal, Square, Authorize.Net, Mollie, GoPay; WooCommerce checkout támogatás.
- **Értesítések:** automatizált e-mail és (add-on-nal) SMS, emlékeztetők, iCal-csatolmány.
- **Szinkron (iCal):** import/export Airbnb, Google Calendar, Outlook, Vrbo stb. felé. A szinkron a rendelkezésre állást kezeli.
- **Beágyazás:** shortcode, Gutenberg blokk, Elementor/Divi modulok, reszponzív megjelenés.
- **Kiegészítők:** Kereső widget, készlet/inventory, foglalási korlátozások, riportok, ügyfélkezelés.

## Gyakorlati példák

- **Apartmanház 5 lakással:** Minden lakás külön naptár. A Booking Managerben a heti érkezők listája egyben látszik, státuszokkal és előlegekkel. Egy kattintással visszaigazolod a beérkező foglalásokat és exportálod a hét pénzügyi összesítőjét.
- **Csónakkölcsönző:** Napi bérlések, készletlimit naponként. A központi naptárnézetben gyorsan ellenőrzöd, hol van még kapacitás, és a telefonon beérkező érdeklődést azonnal manuális foglalássá alakítod.
- **Fotós szolgáltatás:** iCal szinkron a személyes naptárral, hogy kizárja az ütközéseket. A Booking Managerben a hónap leadásai és emlékeztető e-mailek áttekintése egy helyen.

## Telepítés és első lépések

1. Telepítsd és aktiváld az alap WP Booking System bővítményt.
2. Hozz létre egy naptárat és egy foglalási űrlapot.
3. Ágyazd be az oldalra blokkal vagy shortcode-dal:
```
[wpbs id="1" form_id="1"]
```
4. Szerezz be és aktiválj egy olyan licencet, amely tartalmazza a Booking Manager add-ont („Personal” vagy magasabb).
5. Nyisd meg a Booking Manager menüt: állítsd be az oszlopokat, szűrőket, exportot.
6. Kapcsold be az iCal import/exportot a naptáraknál; állíts be online fizetést (pl. Stripe/PayPal) és e-mail/SMS értesítéseket.

## Előnyök és értékajánlat

- **Időmegtakarítás:** Minden foglalás egy képernyőn, kevesebb kattintás, gyors döntések.
- **Kevesebb hiba:** Átlátható státuszok, automatikus blokkolás, iCal szinkron.
- **Jobb pénzügyi kontroll:** Előlegek, kedvezmények, adók és számlák egységes kezelése.
- **Skálázható működés:** Több naptár, több termék, több felhasználó – központi irányítás.
- **Professzionális ügyfélélmény:** Online foglalás, azonnali visszaigazolások, automatizált emlékeztetők.

## Kinek ajánlott?

- **Szállásadóknak:** apartman, nyaraló, panzió, kisebb szállodák.
- **Kölcsönzőknek:** autó, motor, jet-ski, csónak, sporteszköz.
- **Helyszíneknek és szolgáltatóknak:** eseményterem, fotós, előadó – napi foglalási modellel.
- Bárkinek, aki több naptárt kezel, és szeretné a foglalásait egy központi, szűrhető felületen látni.

## Fontos megfontolások és korlátok

- **Napi modell:** nincs időréses (órás) foglalás. Ha időablakokra van szükséged, más megoldás kell.
- **iCal sajátosságok:** a szinkron csak a rendelkezésre állást kezeli; árak és korlátozások nem mennek át. A frissülés gyakorisága külső platformfüggő.
- **SMS értesítés:** külön add-on és külső szolgáltatói fiók szükséges.
- **Elnevezési tisztázás:** a „Booking Manager” név más bővítményre is utalhat; itt a WP Booking System hivatalos kiegészítőjéről van szó.
- **Licenc:** a Booking Manager a Personal (vagy magasabb) csomag része; az árképzés éves előfizetésen alapul.

## Háttér

A bővítményt egy romániai fejlesztőcég (Veribo IT Solutions) gondozza 2014 óta, erős felhasználói visszajelzésekre építve. Az alapverzió széles körben használt, magas értékeléssel, a kiegészítők pedig professzionális igényeket fednek le.

Ezzel a kiegészítővel a WP Booking System nemcsak jól foglalhatóvá, hanem hatékonyan és hibamentesen adminisztrálhatóvá teszi a napi bérlésre épülő vállalkozásodat.