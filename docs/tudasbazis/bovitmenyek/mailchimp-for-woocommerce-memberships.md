---
title: "MailChimp for WooCommerce Memberships"
description: "WooCommerce Memberships tagsági adatok automatikus szinkronja a Mailchimp közönségbe, célzott szegmentálással és életciklus‑kampányokhoz."
sidebar_label: "MailChimp for WooCommerce Memberships"
---

## Mi ez és milyen problémát old meg?

A MailChimp for WooCommerce Memberships egy WooCommerce‑kiegészítő, amely a Memberships tagsági adataidat automatikusan tükrözi a Mailchimp közönségedben. Megszünteti a kézi export/import szükségességét, és pontos, naprakész szegmenseket ad a tagsági státuszok és tervek alapján. Így egyszerűen küldhetsz célzott hírleveleket aktív tagoknak, lejárat előtt állóknak, szüneteltetetteknek vagy egy konkrét tagsági terv tagjainak.

Fontos: a működéshez szükséges a WooCommerce Memberships bővítmény.

## Hogyan működik röviden?

- Összekapcsolod a boltot a Mailchimppel, kiválasztod az audience‑et.
- A bővítmény automatikusan létrehoz speciális mezőket a közönségben: egy globális **ISACTIVE** mezőt (igen/nem), valamint minden tagsági tervedhez egy külön mezőt.
- Ezek a mezők azonnal frissülnek minden tagsági eseménykor: létrehozás, aktiválás, lejárat, szüneteltetés, lemondás, átruházás, törlés.
- Ha egy felhasználónak több tagsága van, az **ISACTIVE** csak akkor lesz „no”, ha egyik tagsága sem aktív.

## Fő funkciók részletesen

### Automatikus szinkron a Mailchimp felé
A plugin háttérfolyamatban figyeli a tagsági életciklust. Amikor egy tagság állapota változik (pl. “active” → “expired”), a megfelelő Mailchimp mező azonnal frissül. Nincs több CSV, nincs manuális mezőkarbantartás.

### Merge mezők létrehozása és kezelése
- **ISACTIVE**: gyors “van‑e aktív tagsága” jelző. Több terv esetén is egyetlen feltétellel célozhatsz aktív tagokat.
- **Tervenkénti mezők**: minden Memberships tervhez külön mező jön létre, amely a tag státuszát tárolja (pl. “active”, “pending”, “paused”, “expired”, “cancelled”). Így egyes tervekre külön is szűrhetsz.

### Szegmentálás támogatása a Mailchimpben
A fenti mezőkből percek alatt készíthetsz szegmenseket:
- “Minden aktív tag” → ISACTIVE = yes
- “X terv aktív tagjai” → X_TERV = active
Az **ISACTIVE** mező segít megkerülni a Mailchimp szegmentálási feltételkorlátait, amikor több tervet szeretnél egyszerre megcélozni.

### Kezdeti és kényszerített szinkron
Telepítés vagy nagyobb változtatás után indíthatsz teljes újraszinkront (“Sync now”), amely rendez minden korábbi adateltérést és létrehozza/összehangolja a mezőket.

### Törlési/archiválási viselkedés
Te döntöd el, mi történjen Mailchimpben, ha egy tagság megszűnik:
- teljes eltávolítás az audience‑ből,
- leiratkoztatás, de adatmegőrzéssel,
- bennmaradás, a tagsági mezők törlésével.
Több tagság esetén a kontakt csak akkor kerül ki, ha már egyetlen aktív tagsága sincs.

### Tag‑opt‑in vezérlés
Választhatsz automatikus felvételt a közönségbe, vagy bekapcsolhatod a kifejezett hozzájárulást. Az opt‑in megjelenhet a pénztárnál és a Members Area felületén. Ez segít a megfelelőségben és az átláthatóságban.

### Admin felület és hibakeresés
A WooCommerce beállítások között külön szekciót kapsz a Mailchimp‑szinkronhoz: itt adod meg az API‑kulcsot, kiválasztod az audience‑et, hozzárendeled a terveket a mezőkhöz, szabályozod a törlési viselkedést és bekapcsolhatod a Debug módot.

## Gyakorlati példák

- Aktív tagok hírlevele:
  - Cél: extra tartalom, kedvezmény csak aktív tagoknak.
  - Szegmens: ISACTIVE = yes.

- Életciklus-kampány lejárat előtt:
  - Cél: előfizetés megújítás ösztönzése 7 nappal lejárat előtt.
  - Szegmens: `X_TERV = active AND "megújítási dátum <= 7 nap"`. (A megújítási logikát a tagsági státuszokkal kombinálhatod, pontos időzítést automata kampánnyal éred el.)

- Szüneteltetett tagok visszanyerése:
  - Cél: visszahozó ajánlat.
  - Szegmens: X_TERV = paused.

- Több terv együttes célzása:
  - Cél: minden aktív tag, bármi legyen a terve.
  - Szegmens: ISACTIVE = yes (nem kell 3–4 tervfeltétel).

Példaként így nézhet ki egy feltételhalmaz:

```
Szegmens:
- ISACTIVE == "yes"
- GOLD_MEMBERSHIP == "active"  (opcionális, ha csak a GOLD terv kell)
```

Nagy tervszámnál érdemes mérlegelni, hogyan osztod fel a közönséget, hogy ne érj korlátba a Mailchimp mezők számával. Ilyenkor jól jöhet csoportosítás vagy címkézés.

## Előnyök és értékajánlat

- Időmegtakarítás: nincs több kézi export/import és állandó adatjavítgatás.
- Pontosság: a tagsági státuszok valós időben tükröződnek, a szegmensek mindig frissek.
- Jobb marketing: könnyű, megbízható célzás életciklus és terv szerint; kevesebb zaj, nagyobb relevancia.
- Kevesebb kockázat: több tagság esetén nem törölsz tévedésből aktív tagokat.
- Megfelelőség: opt‑in és adatkezelési opciók a saját szabályaid szerint.

## Kinek ajánlott?

- Tagság‑alapú webáruházaknak és közösségeknek, ahol a kommunikáció a tagsági életciklusra épül.
- Oktatási platformoknak, kluboknak, előfizetéses tartalomszolgáltatóknak, ahol több terv és különböző jogosultsági szint van.
- Olyan csapatoknak, akik Mailchimpet használnak és elvárják, hogy a tagsági adatok mindig naprakészek legyenek, manuális munka nélkül.

## Gyors beállítási útmutató

1. Kapcsold össze a boltot a Mailchimppel, válaszd ki az audience‑et.
2. Ellenőrizd, hogy az automatikus mezők (ISACTIVE + tervenkénti mezők) létrejöttek.
3. Rendeld hozzá a Memberships terveket a megfelelő mezőkhöz.
4. Futtasd le a teljes “Sync now” újraszinkront.
5. Állítsd be az opt‑in viselkedést és a törlési/archiválási szabályokat.
6. Hozz létre szegmenseket (pl. aktív tagok, lejárók, szüneteltetettek) és indíts automatizmusokat.

Megjegyzés: a bővítmény a WooCommerce Memberships kiegészítőre épül; a pontos rendszerkövetelményeket és kompatibilitási információkat a kiadó dokumentációjában találod.