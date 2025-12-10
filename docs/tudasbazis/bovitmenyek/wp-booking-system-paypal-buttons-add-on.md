---
title: "WP Booking System - PayPal Buttons Add-on"
description: "Prémium kiegészítő a WP Booking Systemhez, amellyel PayPal Smart Payment Buttons segítségével azonnali online (PayPal vagy bankkártyás) fizetést fogadhatsz a foglalási űrlapodon."
sidebar_label: "WP Booking System - PayPal Buttons Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – PayPal Buttons Add-on egy prémium fizetési kapu, amellyel a foglalási űrlapodon közvetlenül fogadhatsz online fizetést. A PayPal Smart Payment Buttons gombjai ugyanazon felületen kínálnak PayPal‑számlás és bankkártyás fizetést, így a vendéged a számára legkényelmesebb módon tud fizetni. Ezzel megszűnik a manuális átutalások és egyeztetések terhe: a tranzakció azonnal a foglaláshoz kapcsolódik, az összegek és státuszok automatikusan rögzülnek.

A kiegészítő a WP Booking System Business és Developer licencek része; a fejlesztő a Veribo IT Solutions SRL.

## Fő funkciók, érthetően

- **PayPal Smart Payment Buttons integráció**  
  Ugyanazon gombkészleten belül a vendég választhat: fizethet PayPal‑pénztárcával vagy bankkártyával. Nincs külön átirányítási logika, a folyamat gördülékeny, mobilbarát.

- **Beépített PayPal kapu a WP Booking Systemben**  
  A beállításoknál megadhatod a Client ID és Secret kulcsokat, be-/kikapcsolhatod a kaput, nevet és leírást adhatsz a fizetési módnak, valamint beállíthatod az „Invoice Item Name” értéket (ami a fizetés összefoglalóiban jelenik meg).

- **Sandbox/tesztüzem**  
  Élesítés előtt sandbox környezetben próbálhatod ki a teljes folyamatot teszt vásárlói és kereskedői fiókokkal. Így biztos lehetsz benne, hogy minden helyesen működik.

- **Szoros árképzési integráció**  
  A foglalási űrlapban kiszámolt végösszeg – beleértve a napi díjakat, űrlap‑extrákat, adókat/ÁFÁ‑t és kedvezményeket – automatikusan átadódik a PayPalnak. Nem kell kézzel összegeket egyeztetni.

- **Részfizetések és letétek**  
  Ha engedélyezed a részfizetést, előleget kérhetsz és a fennmaradó összeget később szedheted be. A **Security Deposit** (kaució) logika automatikusan kezeli a terhelést és a visszatérítést, a végső fizetéssel összehangolva.

- **Több pénznem támogatás kapcsolt bővítménnyel**  
  A Multiple Currencies add‑onnal devizanem‑választót adhatsz az űrlaphoz, kézi vagy automatikus árfolyamfrissítéssel.

- **Számlázás és értesítések**  
  Az Invoices add‑on számlát generál és kiküld, az SMS Notifications add‑on pedig fizetési emlékeztetőket küldhet.

- **GDPR‑kompatibilitás**  
  A foglalási adatok a saját WordPress adatbázisodban maradnak; a fizetési szolgáltató a saját cookie‑ és adatkezelési szabályait alkalmazza.

## Hogyan működik a fizetés a gyakorlatban?

1. A vendég kiválasztja a dátumokat a naptárban.  
2. Az űrlap összesíti az árakat (napi díj, extrák, adók, kedvezmények).  
3. A fizetési módoknál a vendég a **PayPal**‑t választja.  
4. Megjelennek a **Smart Payment Buttons** gombok.  
5. A vendég PayPal‑lal vagy kártyával fizet.  
6. A sikeres tranzakció automatikusan a foglaláshoz kerül, a fizetési státusz látható, értesítés/számla generálódik.

### Konkrét példák

- **Apartman előleggel:** Beállítasz 30% előleget. A vendég lefoglalja a 4 éjszakát, kifizeti az előleget PayPalon, a fennmaradót érkezés előtt vagy a helyszínen rendezi – a rendszer jelzi, mennyi maradt hátra.

- **Hajóbérlés kaucióval:** A vendég extrákat választ (pl. kapitány, üzemanyag díj), a rendszer hozzáadja az adót és a kauciót. Fizetés után a foglalásban minden tétel és a kaució státusza látható; visszaadáskor a kaució visszatéríthető a beállított logika szerint.

- **Eszközbérlés több pénznemben:** A látogató EUR‑t választ az űrlapon, a rendszer az aktuális árfolyammal számol, és az EUR végösszeget küldi a PayPalnak.

## Telepítés és elérhetőség

- A kiegészítő a WP Booking System **Add-ons** menüjéből telepíthető.  
- Online fizetési kapuk (így a PayPal is) a **Business** és **Developer** licencekben érhetők el.  
- Tájékoztató árak: Business 115 USD/év, Developer 229 USD/év (idővel változhat).

## Gyors konfigurációs útmutató

1. Hozz létre egy PayPal alkalmazást, majd másold ki a **Client ID** és **Secret** kulcsokat.  
2. WordPressben: WP Booking System → Settings → Payment Gateways → PayPal.  
3. Állítsd be: **Active**, **Display Name**, **Description**, **Invoice Item Name**, **Sandbox/Live** mód, és illeszd be az API kulcsokat.  
4. Tesztelj sandbox tesztfiókokkal, majd válts **Live** módra.

```text
Sandbox → Live ellenőrzőlista
- [ ] Sandbox kulcsokkal sikeres tesztfizetés
- [ ] Árképzés (adók, extrák, kedvezmények) egyeznek a fizetésben
- [ ] E-mail értesítések és számlák rendben
- [ ] Fizetési státusz megjelenik a foglalásban
- [ ] Live kulcsok beállítva, mód átkapcsolva
- [ ] Próbafoglalás kis összeggel éles környezetben
```

## Előnyök és értékajánlat

- **Magasabb konverzió:** a vendég azonnal, számára ismerős módszerrel fizet.  
- **Kevesebb adminisztráció:** nincs manuális utaláskövetés, egyeztetés.  
- **Pontos könyvelés:** a foglalási adók, kedvezmények, extrák egyben, hibamentesen kerülnek a tranzakcióba.  
- **Rugalmas fizetési modellek:** előleg, részfizetés, kaució – mind automatizálva.  
- **Gyors bevezetés:** sandboxban tesztelheted, majd egy kattintással élesítheted.

## Kinek ajánlott?

- **Szállásadóknak** (apartmanok, vendégházak, kempingek), akik napi alapú foglalásokat kezelnek.  
- **Jármű‑ és eszközbérlőknek** (autó, hajó, e‑bike, sífelszerelés), ahol extrák és kaució is előfordul.  
- **Kis szolgáltatóknak**, akik egyszerű, megbízható online fizetést keresnek a foglalási folyamathoz.  
- **Nemzetközi vendégkörrel dolgozóknak**, ahol több pénznem és kártyás fizetés alapelvárás.

## Kapcsolódó kiegészítők

- **Multiple Currencies:** devizaváltó és több pénznemű fizetés.  
- **Invoices:** számlagenerálás és kiküldés.  
- **Discounts & Coupons:** akciók, kuponkódok.  
- **SMS Notifications:** fizetési és foglalási emlékeztetők.

## Fontos megjegyzések és korlátok

- Az add‑on a „PayPal Payment Add‑on” néven szerepel; a „Smart Payment Buttons” technológiát használja.  
- Csak **Business/Developer** licencekben érhető el; a **Personal** licenc csak offline fizetést támogat.  
- Több pénznemhez külön add‑on szükséges.  
- A PayPal saját díjszabása és feltételei érvényesek; javasolt HTTPS használata a webhelyen.

Ezzel a kiegészítővel pontosan azt kapod, amire egy modern foglalási rendszerben szükséged van: gyors, biztonságos, vendégbarát online fizetést, ami szorosan összekapcsolódik a foglalásaiddal és leveszi a válladról az adminisztráció terheit.