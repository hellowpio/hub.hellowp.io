---
title: "WP Booking System - Stripe Add-on"
description: "Prémium kiegészítő a WP Booking Systemhez, amely Stripe kártyás és walletes fizetést (Apple Pay, Google Pay) ad a foglalási űrlaphoz, előautorizációval, részfizetéssel és visszatérítésekkel."
sidebar_label: "WP Booking System - Stripe Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Stripe Add-on egy prémium kiegészítő, amellyel a foglalási űrlapodon közvetlenül elfogadhatod a bankkártyás és digitális pénztárcás (Apple Pay, Google Pay) fizetéseket. Nem kell WooCommerce-t telepítened: a Stripe közvetlenül a foglalási folyamatba épül. A dokumentációban gyakran „Stripe Elements” add-onként hivatkoznak rá. A bővítményt a Veribo IT Solutions SRL fejleszti.

Tipikus problémákra ad megoldást:
- hogyan fogadj online fizetést WooCommerce nélkül,
- hogyan csökkentsd a no-show kockázatot előautorizációval,
- hogyan kezeld az előlegeket és a végfizetést automatizáltan.

Fontos: a Stripe Add-on a Business és a Developer csomagok része (a Personal csomagban nincsenek online kapuk).

## Fő funkciók és működés

### Kártyás és walletes fizetés
A Stripe API-kulcsok megadásával a foglalási űrlapon megjelenik a kártyaadat-mező. Engedélyezheted az Apple Pay/Google Pay gombot is: ha a vevő eszköze és böngészője támogatja, a kártyaűrlap felett gyorsfizetési gomb jelenik meg.

### Előautorizáció és késleltetett terhelés
Beállíthatod, hogy foglaláskor csak **zárolás** (Authorize) történjen, és a tényleges **terhelés** (Capture) az adminisztratív elfogadáskor fusson le. A Stripe szabályai szerint a capture-nek 7 napon belül meg kell történnie, különben új fizetés szükséges.

### Teszt mód
Bevezetés előtt kapcsolj **teszt módba**, és próbáld ki a teljes folyamatot tesztkártyákkal. Így élesben már nem ér meglepetés.

### Részfizetés/előleg kompatibilitás
A Part Payments funkcióval előleget kérhetsz (százalékos vagy fix összeg). A maradékot a vendég:
- online kiegyenlítheti egy külön **másodlagos fizetési oldalon** (Secondary Payment Page),
- vagy érkezéskor fizetheti készpénzben/kártyával – a logika rugalmasan állítható.

### Visszatérítések adminból
A foglalás adatlapján, a Payment details panelen egylépéses **visszatérítést** kezdeményezhetsz. A tranzakció adatai (állapot, gateway, azonosító) átláthatóan megjelennek.

### Több pénznem (külön kiegészítő)
A Multiple Currencies add-onnal több devizát kínálhatsz. Stripe-pal kombinálva ez kényelmes nemzetközi értékesítéshez.

### Ökoszisztéma
A WP Booking System több fizetési kaput támogat (pl. PayPal, Square, Mollie, Authorize.Net, WooCommerce Checkout). A Stripe ezek egyike – igény szerint kombinálhatod más megoldásokkal.

## Gyakorlati példák

- Szállás/apartman: foglaláskor **30% előleg** Stripe-pal, a fennmaradó összeg a másodlagos fizetési oldalon linkkel rendezhető, vagy érkezéskor fizet a vendég.
- Eszközbérlés: a foglaláskor **előautorizáció** történik (pl. kaució/napidíj), és csak az admin elfogadásakor kerül sor a terhelésre. Elutasítás esetén a zárolás automatikusan felszabadul.
- Rendezvényhelyszín: „foglalj dátumot most, fizess később” — előleg Stripe-pal, a végfizetéshez automatikus emlékeztető és fizetési link.

## Gyors beállítási útmutató

1. Hozz létre/aktiválj Stripe-fiókot, szerezd meg a Publishable és Secret API-kulcsokat.
2. WordPress-ben nyisd meg: WP Booking System → Settings → Payment Gateways → Stripe.
3. Kapcsold be a gateway-t, töltsd ki a megjelenő mezőket (név, leírás, számlatétel neve).
4. Döntsd el a terhelési módot:
   - azonnali terhelés, vagy
   - előautorizáció + capture a foglalás elfogadásakor.
5. Engedélyezd az Apple Pay/Google Pay gombot (opcionális).
6. Teszt módban próbáld ki a foglalást és a visszatérítést, majd válts éles módra.
7. Ha előleget kérsz: állítsd be a Part Payments opciókat, és hozz létre Secondary Payment Page oldalt a végfizetéshez.

Példakonfiguráció:
```
WP Booking System → Settings → Payment Gateways → Stripe
- Active: On
- Publishable key: pk_...
- Secret key: sk_...
- Display name: Bankkártya (Stripe)
- Capture payment when accepting booking: On
- Enable Apple/Google Pay: On
- Mode: Test → Live
```

## Előnyök és értékajánlat

- **Gyorsabb foglalás**: kártya + Apple/Google Pay a saját űrlapodon.
- **Kevesebb admin**: automatikus státuszok, azonosítók, egykattintásos visszatérítés.
- **Kockázatkezelés**: előautorizációval elkerülheted a felesleges visszatérítéseket és a no-show okozta veszteségeket.
- **Rugalmasság**: előleg, végfizetés online vagy érkezéskor, külön fizetési oldal linkkel.
- **WooCommerce nélkül**: nincs szükség webáruházra, mégis profi online checkoutot kapsz.

## Kinek ajánlott?

- **Szállásadóknak, apartmanoknak, panzióknak**: előleggel és végfizetéssel működő foglalási folyamatokhoz.
- **Jármű- és eszközkölcsönzőknek**: kaució és díj előautorizációval, késleltetett terheléssel.
- **Rendezvényhelyszíneknek, szolgáltatóknak**: dátumfoglalás előleggel, automatikus végfizetési linkkel.
- **Bárkinek, aki nem akar WooCommerce-t**, de biztonságos online fizetést szeretne a WP Booking System űrlapján.

## Fontos megjegyzések és korlátok

- **7 napos capture ablak**: ha előautorizációt használsz, 7 napon belül fogadd el a foglalást; különben új fizetés kell.
- **Apple/Google Pay láthatóság**: csak támogatott eszközön és böngészőben jelenik meg (pl. Apple Pay → Safari, Walletban kártyával).
- **Licenc**: a Stripe Add-on csak **Business** és **Developer** csomagban érhető el; a **Personal** csomagban nincsenek online kapuk.

## Tippek üzemeltetéshez

- Mindig teszteld a teljes folyamatot (foglalás, elfogadás, visszatérítés) élesítés előtt.
- Ha gyakran csúszik az elfogadás 7 napon túlra, válts azonnali terhelésre, vagy kérj kisebb előleget és később végfizetést.
- Nemzetközi vendégkör esetén kombináld a **Multiple Currencies** kiegészítővel.
- Dokumentáld belsőleg a refund-szabályt és kommunikáld a vendégek felé (pl. lemondási feltételek).