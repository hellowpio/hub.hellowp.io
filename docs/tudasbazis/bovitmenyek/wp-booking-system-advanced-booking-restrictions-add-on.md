---
title: "WP Booking System - Advanced Booking Restrictions Add-on"
description: "Foglalási korlátozások űrlap‑szinten: minimum/maximum éjszaka, changeover napok, előfoglalási ablak, turnaround idő és szezonális szabályok."
sidebar_label: "WP Booking System - Advanced Booking Restrictions Add-on"
---

## Mi ez és milyen problémát old meg?

A Booking Restrictions (más néven Advanced Booking Restrictions) a WP Booking System hivatalos kiegészítője. Segítségével részletes szabályokat állíthatsz be a foglalásokra: minimum/maximum tartózkodási idő, kötelező érkezési/távozási napok, előfoglalási ablak (lead time), valamint két foglalás közti kötelező üres napok (turnaround). Napi alapú foglalásoknál ideális, ha például heti váltónapokat, főszezonos minimumokat vagy operatív felkészülési időt szeretnél kikényszeríteni.

## Hogyan működik?

- A korlátozások **űrlaphoz kötöttek**: amit egy űrlapon beállítasz, minden olyan naptárra érvényes, amelyet az adott űrlappal ágyazol be.
- Két szintű szabályozás van:
  - **General Rule**: alapértelmezett szabály az összes dátumra.
  - **Custom Period Rules**: tetszőleges időszakokra vonatkozó szabályok, amelyek felülírják a general szabályt. Ütközéskor **Prioritás** alapján dől el, melyik érvényes.
- A szabályok a **validáció** során érvényesülnek (nem zárják fizikailag a dátumokat). Ha érvénytelen kombinációt választ a vendég, a naptár alatt hibaüzenetet kap. Automatikus záráshoz használd a beágyazáskor az „Automatically Block Dates” opciót.
- Az add‑on aktiválásával a rövidkód‑attribútumok (pl. `minimum_days`, `maximum_days`, `booking_start_day`, `booking_end_day`) **hatástalanok** – mindent az add‑on kezel.
- A WP Booking System napi alapú; **időréses/órás foglalást** nem kezel.

## Fő funkciók, érthetően

### Tartózkodási idő (Stay Length)
- **Minimum/maximum éjszaka**: megadhatod, hogy legalább/legfeljebb hány éjszakára lehet foglalni (pl. min. 3, max. 14).
- **Fixed number of days**: csak meghatározott tartamok engedélyezése (pl. pontosan 7 vagy 10 éjszaka). Így „fix turnusokat” hozhatsz létre.
- **Minimum stay by start day**: a kezdőnap szerint eltérő minimumot állíthatsz be (pl. hétfői érkezés min. 5 éj, pénteki érkezés min. 3 éj).

### Kötelező érkezési/távozási napok (Enforce specific days)
- Meghatározhatod, hogy a vendég mely napokon **érkezhet** és/vagy **távozhat** (pl. csak hétfő és péntek). Klasszikus changeover szabály főszezonra.

### Előfoglalási ablak (Advance reservation)
- **Minimum** nap, amennyivel a mai naphoz képest korábban le kell foglalni (pl. legalább 7 nappal előre).
- **Maximum** nap, ameddig előre engeded a foglalást (pl. legfeljebb 365 napra előre).

### Turnaround idő (Buffer napok)
- Két foglalás között **kötelező üres napok** száma (pl. 1–2 nap takarításra, karbantartásra). Megakadályozza a közvetlen back‑to‑back foglalásokat.

### Hibajelzések testreszabása
- A megjelenő hibaüzenetek szövegei a beállításoknál, a **Strings & Translations → Form Strings** alatt módosíthatók/fordíthatók.

### Fejlesztői bővíthetőség
- Ha a beépített szabályok nem elégségesek, egyedi validációt írhatsz hookokkal (pl. `wpbs_date_validation`, `wpbs_field_validation`).

## Gyakorlati példák

- **Főszezon, heti váltás**: június 1.–augusztus 31. között érkezés csak hétfőn vagy pénteken, minimum 5 éj. Holtszezonban rugalmasabb: min. 2 éj, szabad érkezés/távozás.
- **Előkészülési idő**: legalább 7 nappal előre engedsz foglalni, hogy legyen időd takarításra, kulcsátadás szervezésére.
- **Árképzési kontroll**: legfeljebb 365 napra engeded a foglalást, hogy az árakat biztonságosan kezeld.
- **Turnusos bérlés**: csak 7 vagy 14 éjszakás tartamok engedélyezettek (Fixed number of days).
- **Különböző minimumok érkezési nappal**: hétfői érkezésnél min. 5 éj, péntekinél min. 3 éj.

Példa „recept” egy űrlapra:
```
General Rule:
  Min nights: 3
  Advance reservation: 7..365 days
  Turnaround: 1 day

Custom Period (06-01..08-31) Priority: 10
  Enforce arrival: Mon, Fri
  Min nights: 5

Custom Period (12-15..01-10) Priority: 9
  Enforce arrival: Sun
  Min stay by start day:
    Sun: 2
    Fri: 3
```

## Telepítés és beállítás

1. A bővítmény a prémium licenc része; az add‑onok külön nem vásárolhatók.
2. Telepítés a WordPress adminban: WP Booking System → Add‑ons → Booking Restrictions aktiválása.
3. WP Booking System → Forms → válaszd ki az űrlapod → **Booking Restrictions** fül.
   - Állítsd be a **General Rule**‑t (pl. min. éj, előfoglalási maximum).
   - Adj hozzá **Custom Period Rules** szabályokat időszakokra/szezonokra, szükség esetén **Prioritást** rendelve.
4. Teszteld a beágyazott naptárat; ha érvénytelen választás történik, hibaüzenet jelenik meg.
5. A hibaüzenetek szövegét a **Strings & Translations → Form Strings** alatt alakíthatod.

## Előnyök és értékajánlat

- **Kevesebb hibás foglalás**: a rendszer automatikusan elutasítja a szabályoknak nem megfelelő választásokat.
- **Operatív védelem**: lead time és turnaround biztosítja a takarítási/karbantartási ablakot.
- **Szezonalitás kezelése**: külön szabályok főszezonra, holtszezonra, ünnepi időszakokra.
- **Idő- és költségmegtakarítás**: kevesebb manuális egyeztetés, kevesebb lemondás/átfoglalás.
- **Rugalmas, mégis kontrollált foglalási folyamat**: pontosan azt engeded, amit tényleg tudsz teljesíteni.

## Kinek ajánlott?

- **Nyaraló- és szálláskiadóknak**: heti váltónapok, minimum éjszaka, szezonális szabályok.
- **Eszköz- és járműbérléseknek**: fix tartamok, buffer napok karbantartásra.
- **Bármely napi alapú foglalási szolgáltatónak**: ahol fontos a minimum/maximum tartam és az előfoglalási kontroll.

Ha napra pontos foglalásokat kezelsz, és szeretnéd a vendégeket automatikusan a működésedhez igazított szabályok szerint terelni, ez az add‑on pont neked való.