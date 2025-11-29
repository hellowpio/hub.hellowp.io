---
title: "WP Booking System - Customers"
description: "Prémium kiegészítő a WP Booking Systemhez: a foglalásokból automatikusan ügyféllistát és részletes ügyfélstatisztikát készít, mini‑CRM nézetet adva a WordPress Vezérlőpulton."
sidebar_label: "WP Booking System - Customers"
---

## Mi ez és milyen problémát old meg?

A Customers a WP Booking System hivatalos, prémium kiegészítője, amely egy ügyfélkezelő felületet ad a WordPress Vezérlőpultodhoz. A foglalásokból automatikusan összeállít egy egységes ügyféllistát, és ügyfelenként statisztikákat számol. Így nem kell több képernyőn, exportokban vagy táblázatokban keresgélned: egyetlen helyen látod, ki foglalt, hányszor, mennyit költött, és mekkora az átlagos tartózkodása.

Röviden: mini‑CRM nézet azoknak, akik napi alapú foglalásokat kezelnek (szállás, jármű, eszközbérlés), és szeretnék az ügyféladataikat rendezett, visszakereshető formában kezelni.

## Hogyan működik?

- A bővítmény a meglévő és jövőbeli foglalások adataiból épít ügyféllistát.
- Te állítod be, hogy a foglalási űrlap mely mezői (név, e‑mail, telefon, stb.) tartoznak az ügyféladatokhoz. Ezt a Mezőtérképzésnél végzed el.
- Az ügyféllistából egy kattintással megnyitod az adott ügyfél profilját, ahol látod a teljes foglalástörténetet és részletes statisztikákat.
- A Customers az egész WP Booking System ökoszisztémával együtt dolgozik (foglalások, űrlapok, fizetések, jelentések).

## Fő funkciók részletesen

### Ügyféllista egy helyen
Az add‑on a foglalásokból automatikusan összeállít egy ügyféllistát a WP Admin → WP Booking System → Customers menü alatt. Nem kell külön adatbázist építened: a meglévő foglalások a forrás.

### Ügyfélprofil és előzmények
Egy ügyfélre kattintva megkapod a teljes előzményét: korábbi és jövőbeli foglalások, dátumok, űrlapadatok. Így például egy telefonhívás során azonnal látod, mikor járt nálad utoljára és mit foglalt.

### Statisztikai irányítópult ügyfelenként
Minden ügyfélhez kis “dashboard” tartozik:
- hány foglalása volt/lesz,
- átlagos tartózkodási idő,
- teljes költés,
- átlagos költés foglalásonként.
Ezekből gyorsan kiderül, kik a törzsvendégek és mennyit érnek számodra.

### Mezőtérképzés (Customers Field Mapping)
Ahhoz, hogy a Customers pontos adatokat gyűjtsön, a foglalási űrlapmezőket hozzá kell rendelned az ügyfélmezőkhöz. Ezt a foglalási űrlap beállításainál találod (Form Options → Customers Field Mapping). Példák:
- Név mező → Ügyfél neve
- E‑mail mező → Ügyfél e‑mail címe
- Telefon mező → Ügyfél telefonszáma

Ha több űrlappal dolgozol, mindegyiknél végezd el a hozzárendelést. A konzisztens mezőtérképzés az alapja a rendezett ügyféltörzsnek.

### Bővíthető adatmezők fejlesztőknek
Ha további ügyféladatokra van szükséged (például adószám, cég, preferenciák), fejlesztőként új mezőket adhatsz hozzá egy filteren keresztül.

```php
// Extra ügyfélmező hozzáadása (példa)
add_filter('wpbs_customers_fields', function($fields){
    $fields['vat_number'] = [
        'label' => 'Adószám',
        'type'  => 'text',
        'sanitize_callback' => 'sanitize_text_field',
    ];
    return $fields;
});
```

### Rendszerszintű integráció
A Customers a WP Booking System részeként működik, a foglalásokból és az űrlapokból nyeri az adatokat. Ha használsz fizetési modulokat vagy jelentéseket, a statisztikák és ügyféladatok ezeket is figyelembe tudják venni.

## Telepítés és alapbeállítás

1. Előfeltétel: aktív WP Booking System (prémium) telepítés.
2. Telepítés: telepítsd és aktiváld a Customers kiegészítőt. A Vezérlőpulton új menüpont jelenik meg: WP Booking System → Customers.
3. Mezőtérképzés: nyisd meg az érintett foglalási űrlap beállításait, és a Form Options → Customers Field Mapping résznél rendeld hozzá a releváns űrlapmezőket az ügyfélmezőkhöz.
4. Ellenőrzés: készíts egy próba foglalást, majd nézd meg a Customers menüt. Meg kell jelennie az új ügyfélnek és a foglalási előzményeinek.

Megjegyzés: a Customers minden licencszinten elérhető, és nem önállóan működik – a foglalási adatokra támaszkodik.

## Gyakorlati példák

- Törzsvendégek azonosítása: szállásodnál látod, kik foglaltak többször, mekkora az átlagos költésük, így testreszabott hűségkedvezményeket adhatsz.
- Ügyfélszolgálat gyorsítása: ha valaki telefonál, megnyitod az ügyfélprofilját, és azonnal látod a múltját és a jövőbeli foglalásait – nincs több kutakodás e‑mailekben.
- Döntéstámogatás: az ügyfélstatisztikák alapján felismered a csúcsidőket és a vendégszokásokat, ennek megfelelően alakítod a promóciókat és az árazást.
- Adattisztaság: egységes mezőtérképzéssel rendezetten, következetesen tárolod a neveket, e‑maileket, telefonszámokat – kevesebb hibával és duplikátummal.

## Előnyök és értékajánlat

- Időmegtakarítás: egy nézetben minden ügyfél és foglalási előzmény.
- Jobb ügyfélélmény: célzott kommunikáció és gyors reakció az előzmények ismeretében.
- Több bevétel: törzsvendégek azonosítása, upsell és hűségajánlatok.
- Pontosabb adatok: szabályos mezőtérképzés → konzisztens ügyféltörzs.
- Fejleszthetőség: egyedi mezők és integrációs lehetőségek filtereken keresztül.

## Célközönség

- Szállásadók, panziók, apartmanok, kempingek.
- Jármű‑ és eszközbérléssel foglalkozók.
- Rendezvény‑ és helyszínbérlők.
- Üzemeltetők és ügyfélszolgálati csapatok, akik sok foglalást kezelnek és gyorsan akarnak ügyfélinfóhoz jutni.

## Korlátok és jó gyakorlatok

- Nem teljes körű CRM: a rendszer a foglalásokra épít; önmagában nem vezet külön ügyféldatabázist.
- A pontosság kulcsa a mezőtérképzés: ha kimarad egy fontos mező (pl. e‑mail), hiányos lehet az ügyféllista.
- Több űrlap esetén mindegyiknél végezd el a hozzárendelést.
- Régebbi foglalásoknál előfordulhat, hogy csak a térképzés beállítása utáni adatok kerülnek teljeskörűen feldolgozásra.

Összefoglalva: ha a WP Booking Systemet használod, a Customers add‑on az a hiányzó láncszem, ami a foglalásaidból áttekinthető, statisztikákkal támogatott ügyfélnézetet készít. Segít megérteni, kik a legértékesebb vendégeid, és lehetővé teszi, hogy gyorsabban és okosabban dolgozz.