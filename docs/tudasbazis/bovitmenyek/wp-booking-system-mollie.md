---
title: "WP Booking System - Mollie"
description: "Hivatalos kiegészítő a WP Booking Systemhez, amely a Mollie fizetési kaput integrálja a foglalási folyamatba, így az ügyfelek azonnal online tudnak fizetni."
sidebar_label: "WP Booking System - Mollie"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Mollie egy hivatalos fizetési add-on, amellyel a foglalásaidat azonnali online fizetéssel tudod véglegesíteni. Nem kell webáruházat építened: a vendég kiválasztja a dátumokat, kitölti az űrlapot, majd a Mollie-n keresztül kényelmesen fizet. Így egyszerű, “foglalás → fizetés → visszaigazolás” folyamattal dolgozhatsz, felesleges komplexitás nélkül.

Az add-on a WP Booking System Business és Developer licencek része. Ha csak offline fizetést (átutalás, helyszíni fizetés) szeretnél, a Personal licenc is elég; online fizetéshez a Business/Developer csomag szükséges.

## Hogyan működik a folyamat?

1. A látogatód kiválasztja a dátumokat a naptárban és elküldi a foglalási űrlapot.
2. A pénztári lépésnél a Mollie-t választja (és azon belül a Mollie-fiókodban engedélyezett fizetési módok egyikét).
3. A rendszer átirányítja a Mollie biztonságos fizetési felületére, ahol megtörténik a tranzakció.
4. A fizetés eredménye visszakerül a WP Booking Systembe, a foglalás státusza frissül, te pedig a felületen látod a Payment Details résznél.

Csak azokat a fizetési módokat látja a vendég, amelyeket a Mollie-fiókodban engedélyeztél és az országodban elérhetők.

## Fő funkciók, részletesen

- **Mollie integráció a pénztárban**: A pénztári lépésbe beépül a Mollie, így bankkártyák, európai helyi módszerek (pl. iDEAL, Bancontact, Giropay, EPS, Przelewy24, SOFORT), valamint nemzetközi megoldások (pl. PayPal, paysafecard) is használhatók. A tényleges lista a Mollie-fiókod beállításaitól és országától függ.
- **Egyszerű beállítás**: A WordPress adminban (WP Booking System → Settings → Payment Gateways → Mollie) csak a Mollie Test API key és Profile ID megadása szükséges a teszteléshez, majd élesítéskor a live adatok.
- **Test/Live mód**: Először biztonságosan tesztelhetsz, majd egy kapcsolóval élesítheted a fizetést.
- **Testreszabható megjelenés**: Beállíthatod, hogy a pénztárban mi legyen a megjelenített név és leírás, valamint megadhatod a számlatétel nevét (Invoice Item Name), ami a könyvelésnél és számlázásnál hasznos.
- **Átlátható fizetéskezelés**: A WP Booking System fizetési nézeteiben látod a tranzakciók és státuszaik áttekintését, így nem kell rendszerek között ugrálnod.
- **Kompatibilitás a prémium funkciókkal**: Működik az árképzés dátumonként, több pénznem, adók, kuponok és előlegek/depozitok funkciókkal, így összetett árazási szabályokat is gond nélkül kiszolgál.

## Telepítés és beállítás

1. **Előfeltételek**: WP Booking System Business vagy Developer licenc; aktív Mollie-fiók a kívánt fizetési csatornákkal.
2. **Add-on telepítése**: A WordPressben telepítsd és aktiváld a Mollie kiegészítőt.
3. **API-kulcsok megadása**: Admin → WP Booking System → Settings → Payment Gateways → Mollie.
4. **Megjelenítés és számlázás**: Töltsd ki a Display Name, Description, Invoice Item Name mezőket.
5. **Tesztelés és élesítés**: Próbáld ki Test módban a foglalás → fizetés folyamatot, majd válts Live módra.

Példa beállítás:

```
WP Booking System → Settings → Payment Gateways → Mollie
Active: Yes
Display Name: Fizetés Mollie-val
Description: Biztonságos online fizetés a kedvenc módszereddel.
Invoice Item Name: Foglalás #{{booking_id}}
Test API key: test_xxxxxxxxxxxxxxxxxxxxx
Profile ID: pfl_xxxxxxxxx
```

## Gyakorlati példák

- **Apartman Hollandiában**: A vendég iDEAL-lal fizet. A foglalás azonnal végleges, a Payment Details mutatja a “Paid” státuszt. Nincs szükség telefonos egyeztetésre, kevesebb a lemondás.
- **Kerékpárkölcsönző Belgiumban**: Bancontact és kártya fizetést kínálsz. A kauciót előlegként kéred, a fennmaradó összeg helyszínen fizethető. A rendszer kezeli a külön adókat és kuponokat.
- **Csónakbérlés szezonális árakkal**: Dátumonként eltérő árak, hétvégi felár, kupon kedvezménnyel. A vendég kártyával vagy SOFORT-tal fizet, a backendben pedig egy helyen követed a fizetéseket.

## Előnyök és értékajánlat

- **WooCommerce nélkül is teljes**: Nincs kosár és termékkatalógus, csak a lényeg: foglalás és fizetés. Kevesebb bővítmény, kevesebb hibaforrás.
- **Jobb konverzió helyi módszerekkel**: iDEAL, Bancontact, Giropay és társaik a piacaidon bevett megoldások – a vendég azt használja, amit ismer.
- **Kevesebb adminisztráció**: Ár, adó, kedvezmény és előleg logika egy helyen; a fizetési státuszok automatikusan frissülnek.
- **Biztonságos lebonyolítás**: A kártyaadat-kezelést a Mollie végzi a saját felületén, így egyszerűbb megfelelni a biztonsági elvárásoknak.
- **Rugalmasság és bővíthetőség**: Ha más kapu kell, ott vannak a Stripe, PayPal, Square, Authorize.Net, GoPay add-onok; ha teljes webáruházas élmény kell, használhatod a WooCommerce Checkout kiegészítőt.

## Kinek ajánlott?

- **Szállásadóknak** (apartmanok, panziók, vendégházak), akik gyorsan, online szeretnék véglegesíteni a foglalásokat.
- **Eszköz- és járműkölcsönzőknek**, akik napidíjas bérléseket kezelnek és előleget/depozitot szednek.
- **Ügynökségeknek és fejlesztőknek**, akik ügyfeleiknek stabil, egyszerű és bővíthető foglalás + online fizetés megoldást építenek.
- **Akiknek elég az offline fizetés**: számukra a Personal licenc megfelelő; ha viszont online fizetés kell, válts Business/Developer csomagra.

## Megjegyzések és jó gyakorlatok

- A fizetési módok elérhetősége ország- és vállalkozásfüggő; a Mollie fiókodban engedélyezd a kívánt csatornákat, a pénztárban csak ezek jelennek meg.
- Mindig teszteld végig a folyamatot Test módban (különböző fizetési módszerekkel), majd válts Live-ra.
- Árazásnál és számlázásnál használj beszédes Invoice Item Name mezőt (pl. foglalás azonosítóval), hogy egyértelmű legyen a könyvelésben.