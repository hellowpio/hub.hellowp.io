---
title: "WP Booking System - Authorize.Net Add-on"
description: "Hivatalos kiegészítő, amellyel Authorize.Net-en keresztül közvetlen bankkártyás fizetést fogadhatsz a WP Booking System foglalási űrlapjain belül."
sidebar_label: "WP Booking System - Authorize.Net Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Authorize.Net Add-on a foglalási űrlapjaidat összeköti az Authorize.Net fizetési átjáróval, így a vendégeid közvetlenül bankkártyával fizethetnek a foglalás során. Nem kell külön webshopot vagy külső checkoutot használnod, a fizetés a foglalási folyamattal egy lépésben történik. Ez csökkenti a lemorzsolódást, egyszerűsíti az adminisztrációt, és kifejezetten hasznos, ha Authorize.Net kereskedői fiókkal rendelkezel (jellemzően USA-piaci igény).

Fontos: az add-on a **Business** és **Developer** licencek része; a **Personal** licenc csak offline fizetéseket kínál.

## Fő funkciók és működés

### Online bankkártyás fizetés a foglalás részeként
- A fizetési mód az űrlap **Payment Method** mezőjében jelenik meg, és a vendég a foglalás beküldésekor fizet.
- A fizetendő összeg a WP Booking System **árazási moduljából** érkezik (naptár szerinti árak, plusz díjak, űrlapmezők).

### Admin beállítás egy helyen
- Útvonal: **WP Booking System → Settings → Payment Gateways → Authorize.Net**.
- Itt állíthatod be a szükséges azonosítókat és a megjelenést:
  - **API Login ID**, **Transaction Key**, **Public Client Key**
  - **Active** kapcsoló (be/ki)
  - **Fizetési mód neve és leírása** az űrlapon
  - **Invoice Item Name**, ami a tranzakcióban látszik

### Hitelesítés és biztonság
- A Public Client Key használata arra utal, hogy a kártyaadatok a böngészőben **tokenizálva** kerülnek továbbításra. Ez csökkenti a PCI-DSS megfelelőségi terhet, mert az érzékeny kártyaadatok nem a saját szervereden mennek át.
- **Sandbox mód** támogatott: mielőtt élesítesz, futtasd le a teljes tesztkört sikeres és visszautasított tranzakciókkal.

### Szoros integráció a foglalási folyamattal
- Az Authorize.Net Add-on természetesen illeszkedik a WP Booking System árazásához és űrlapjaihoz, így a fizetés pontosan azt az összeget követi, amit a foglalás meghatároz.

### Kompatibilitás és korlátozások
- **Pénznem**: az Authorize.Net integráció a WP Booking Systemben **USD**-ben fogad fizetést.
- **Multiple Currencies add-on**: nem kompatibilis ezzel az add-onnal. Több pénznemhez használj más átjárót vagy WooCommerce alapú checkoutot.
- **Licenc**: online átjárók (így az Authorize.Net is) csak Business/Developer csomagban érhetők el.

## Gyakorlati példák

- **Apartmanbérlés az USA-ban**: az űrlapon kiválasztod a Payment Method mezőt és engedélyezed az Authorize.Net-et. A vendég kiválasztja a kártyás fizetést, megadja az adatokat, és a foglalás pillanatában kifizeti a rendszer által számolt összeget.
- **Eszközbérlés extrákkal**: a naptár ára és az űrlap extradíjai egy összegbe kerülnek. Az **Invoice Item Name** mezőben beállíthatod, hogy a tranzakciónál “Equipment Rental – Booking #ID” jelenjen meg.
- **Rendezvényhelyszín**: a teljes ár vagy előleg beszedése (a beállított űrlap- és árazási logika szerint) ugyanazon a foglalási űrlapon történik, külön átirányítás nélkül.

## Beállítás lépésről lépésre

1. **Telepítés**
   - WP adminban: WP Booking System → Add-ons → Authorize.Net → Install. Az add-on a licenced része, külön nem kell megvásárolni.
2. **Engedélyezés és konfiguráció**
   - WP Booking System → Settings → Payment Gateways → Authorize.Net.
   - Add meg az API Login ID, Transaction Key és Public Client Key értékeket, kapcsold **Active** állapotba.
   - Állítsd be a megjelenített nevet/leírást és az Invoice Item Name-et.
3. **Űrlap ellenőrzése**
   - Bizonyosodj meg róla, hogy az űrlap tartalmazza a **Payment Method** mezőt.
4. **Tesztelés sandboxban**
   - Futtass sikeres és visszautasított tranzakciókat, ellenőrizd a visszajelzéseket és a foglalás folyamát.
5. **Élesítés**
   - Válts éles (Live) módra, és indítsd a valódi fizetéseket.

Példa konfiguráció vázlata:

```
Gateway: Authorize.Net
Mode: Sandbox (teszt) | Live (éles)

API Login ID: ****************
Transaction Key: ****************
Public Client Key: ****************

Payment method label: Bankkártyás fizetés (Authorize.Net)
Payment method description: Fizess biztonságosan bankkártyával a foglalás során.
Invoice Item Name: Booking #{reservation_id} - {calendar_name}
```

## Előnyök és értékajánlat

- **Kevesebb lépés, kisebb kosárelhagyás**: a vendég a foglalási űrlapon belül fizet.
- **Egységes adminisztráció**: árképzés, foglalás és fizetés egy ökoszisztémában.
- **Biztonságos adattovábbítás**: kliensoldali tokenizálás és API kulcsos hitelesítés.
- **Gyors bevezetés**: sandbox teszteléssel kockázatmentesen finomhangolhatod a folyamatot.
- **WooCommerce nélkül**: ha nincs szükséged teljes e-kereskedelmi rendszerre, egyszerű és könnyű megoldás.

## Kinek ajánlott?

- **USA-piaci szolgáltatóknak**, akik Authorize.Net kereskedői fiókkal rendelkeznek.
- **Szállásadóknak, eszköz- és járműbérlőknek, rendezvényhelyszíneknek**, akik azonnali kártyás fizetést szeretnének a foglalással együtt.
- **Ügynökségeknek és fejlesztőknek** (Business/Developer licenc), akik megbízható, gyorsan bevezethető fizetési integrációt keresnek a WP Booking Systemhez.

Nem ideális, ha több pénznemet szeretnél egyetlen foglalási űrlapon belül, vagy ha csak Personal licenccel rendelkezel (ilyenkor maradnak az offline fizetések).

## Összefoglalás

Az Authorize.Net Add-on a WP Booking System hivatalos fizetési kiegészítője, amellyel USD-alapú bankkártyás fizetést fogadhatsz közvetlenül a foglalási űrlapokon. Adminfelületen állíthatod be az API-kulcsokat, a megjelenített elnevezéseket és a tranzakcióban látható azonosítókat. Sandboxban kényelmesen tesztelhetsz, majd élesben egyszerű, biztonságos és gördülékeny fizetési élményt adhatsz a vendégeidnek. A megoldás a Business és Developer licencek része.