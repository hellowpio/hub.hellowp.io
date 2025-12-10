---
title: "WP Booking System"
description: "Könnyű, napi alapú foglalási naptár és űrlapkezelő WordPresshez, online fizetéssel, értesítésekkel és iCalendar szinkronnal."
sidebar_label: "WP Booking System"
---

## Bevezetés

A WP Booking System egy **napi alapú foglalási naptár és űrlapkezelő** bővítmény WordPresshez. Olyan helyzeteket old meg, amikor napokra szeretnél foglalásokat fogadni (nem órákra), miközben egy helyen kezeled az elérhetőséget, az árazást, a fizetéseket, az értesítéseket és a több platformmal történő szinkront. Fejlesztő: Roland Murg / Veribo IT Solutions.

## Mire való és hogyan működik?

- Létrehozol egy vagy több **foglalási naptárat** (pl. szoba, apartman, eszköz).
- A látogatók kiválasztják a **szabad napokat**, kitöltik a **foglalási űrlapot**, a rendszer pedig **kiszámítja az árat**.
- Beállíthatsz **online vagy offline fizetést**, automatikus **e-mail/SMS értesítést**, és a foglalás **megérkezik az admin felületre**.
- iCalendar (ICS) **kétirányú szinkron** gondoskodik róla, hogy az Airbnb, Booking.com és más csatornák elérhetőségei összehangban legyenek.

Fontos: a plugin **napokra foglal**, nem időréses (óra-perc) időpontfoglalásra készült.

## Fő funkciók

### Foglalási naptárak
- **Több naptár** és áttekintő nézet: külön egységek (szobák, járművek) kezelése, össznézetben kereshető elérhetőséggel.
- **Változásnapok** (check-in/out) jelölése, **egyedi színek/jelmagyarázat**, **több hónap** egyszerre.
- **Tömeges dátumszerkesztés**, **múltbeli napok elrejtése**, **CSV-export** a riportokhoz.
- **Felhasználó-hozzárendelés** és jogosultságok csapatmunkához.

### Űrlapok és űrlapépítő
- Teljesen **testreszabható mezők** (szöveg, legördülő, jelölőnégyzet, rádió).
- **Árazási mezők**, **feltételes logika**, rugalmas **elrendezés oszlopokkal**.
- **reCAPTCHA**, dinamikus alapértelmezések, **köszönőüzenet/átirányítás**, követőkódok (pl. Analytics/Tag Manager).

### Árazás és fizetés
- **Szezonális és nap/éjszaka alapú árképzés**, **extra szolgáltatások**, **adók** külön kezelése.
- **Kuponok és kedvezmények**, **előleg (részfizetés)**, **kaució**, **visszatérítések**.
- **Online fizetés** (pl. Stripe, PayPal, Square, WooCommerce gatewayek, Mollie, GoPay, Authorize.Net, Redsys) és **offline** (átutalás, érkezéskor).

### Szinkron és integrációk
- **iCalendar import/export**: kétirányú szinkron olyan csatornákkal, mint Airbnb, Booking.com, Google Calendar, Outlook, Vrbo, Expedia és más ICS-kompatibilis rendszerek.
- **Oldalkészítők**: Gutenberg-blokk, rövidkód, kompatibilitás az elterjedt page builderekkel (Elementor, Divi, Beaver Builder, WPBakery).

### Közzététel és beágyazás
- Gutenberg-blokk vagy widget használata, illetve rövidkód beillesztése. Példa:
```
[wpbs id="1" form_id="1" language="hu"]
```

### Értesítések és admin
- **Testreszabható e-mail- és SMS-értesítések** (triggerek, emlékeztetők).
- **Foglaláskezelő nézet**, manuális foglalásfelvétel/szerkesztés, **ügyféladatok** kezelése.
- Bővítményekkel: **riportok**, **számlák**, **szerződések**, **több pénznem**, **korlátozások** stb.

## Gyakorlati példák

- Apartmanház: minden lakáshoz külön naptár. A vendég kiválasztja az érkezés–távozás napokat, a rendszer szezon szerint áraz, előleget kér, és e-mailt küld a visszaigazolásról. A naptár iCalon keresztül szinkronizál az Airbnb-vel.
- Csónakkölcsönző: napidíjak hétvégére megemelve, kaucióval és extra felszerelésekkel (pl. mentőmellény csomag). Kuponkódok elő- és utószezonban.
- Rendezvényeszköz-bérlés: több tétel készlete, kereső widget az elérhető készletre, adminban manuális foglalásfelvétel telefonos érdeklődőknek.

## Előnyök és értékajánlat

- **Dupla foglalások ellen**: iCal szinkron több csatornával.
- **Kevesebb admin**: online űrlapok, automatikus értesítések, tömeges naptárkezelés.
- **Rugalmas árazás**: szezonok, kedvezmények, előleg, kaució, extrák.
- **Professzionális fizetés**: bankkártya, pénztárcabarát offline opciók, visszatérítés kezelése.
- **Skálázhatóság**: több naptár, több felhasználó, áttekintő nézet és riportok.

## Kinek ajánlott?

- **Szállásadóknak**: apartmanok, panziók, vendégházak, szobák.
- **Jármű- és hajóbérlésnek**: autó, motor, csónak, lakóautó.
- **Sport- és rendezvényeszköz-bérlésnek**: kerékpár, sífelszerelés, dekoráció, hangtechnika.
- **Napi ütemezésű szolgáltatóknak**: akik napokra adnak ki bármit, és nem órákra.

## Ingyenes vs. Prémium

- **Ingyenes**: alap naptár és űrlap, foglalásfogadás és -kezelés, többnyelvűség, Gutenberg-blokk és rövidkód.
- **Prémium**: korlátlan naptár/űrlap, több hónapos nézet, split-day kiválasztás, foglalási korlátozások, iCal szinkron, értesítések, felhasználókezelés, online fizetések és bővítmények (pl. kedvezmények, számlák, szerződések, több pénznem, riportok).

Csomagok röviden:
- **Personal**: 1 webhely, minden prémium funkció, offline fizetések, alap add-onok.
- **Business**: 5 webhely, online fizetési gatewayek, kiterjesztett add-on csomag.
- **Developer**: korlátlan webhely, összes prémium funkció és add-on, pénzvisszafizetési garancia.

## Telepítés és első lépések

1. Telepítés és aktiválás a WordPress adminban.
2. Hozz létre egy **naptárat** (egység/erőforrás).
3. Állítsd be az **árakat**, szezonokat és korlátozásokat.
4. Készíts egy **űrlapot**, és kapcsold a naptárhoz.
5. Engedélyezd a kívánt **fizetési módokat**.
6. Kapcsold be az **iCal szinkront** a csatornákkal.
7. Illeszd be az oldalon **Gutenberg-blokkal** vagy a fenti **rövidkóddal**.
8. Tesztelj egy próba foglalással és értesítéssel.

## Korlátozások és megjegyzések

- **Napi alapú**: nem időréses foglalásokra készült.
- **iCal szinkron**: az automatikus frissítés gyakoriságát a külső csatornák és az ICS működése befolyásolja.

## Oldalkészítők és kompatibilitás

A bővítmény **Gutenberg-blokkal**, **widgettel** és **rövidkóddal** működik, továbbá kompatibilis a népszerű **page builderekkel** (pl. Elementor, Divi, Beaver Builder, WPBakery). Többnyelvű környezetben is bevethető.

---

Összefoglalva: ha napokra szeretnél foglalást fogadni WordPressen, a WP Booking System könnyű, átlátható és skálázható megoldás, amely lefedi az elérhetőség-kezeléstől a fizetésen át az értesítésekig és a csatornaszinkronig az egész folyamatot.