---
title: "FluentCommunity"
description: "Minden az egyben WordPress közösségi és LMS bővítmény: saját, gyors közösségi portál és kurzuskezelés egy pluginben."
sidebar_label: "FluentCommunity"
---

## Mi ez és milyen problémát old meg?

A FluentCommunity egy komplett közösségi és e-learning (LMS) megoldás WordPresshez. Segítségével saját, márkázott közösségi felületet építhetsz (profilok, feed, csoportok, chat, értesítések) és ugyanitt kezelheted a kurzusaidat (leckék, előrehaladás, drip tartalom). Kiváltja a külső, zárt közösségi platformokat, így az adat, a design és a hozzáférés felett teljes kontrollt kapsz, miközben nem kell külön community és LMS plugineket összedrótoznod.

## Fő funkciók részletesen

### Közösségi modul

- **Felhasználói profilok és könyvtár**: minden tagnak saját profilja van; a könyvtárban kereshető, szűrhető a közösség.
- **Aktivitás feed és bejegyzések**: témák, posztok, hozzászólások és reakciók; a feed a releváns aktivitásokat emeli ki.
- **Valós idejű privát üzenetek**: közvetlen, gyors chat felhasználók között, mellékletekkel és médiával (bővítménytől függően).
- **Értesítések, említések, hashtagek**: azonnali visszajelzés, kontextusba helyezett beszélgetések, téma-követés.
- **Csoportok/Spaces**: nyilvános, privát vagy titkos terek, külön jogosultságokkal; ideális csapatoknak, kurzusoknak vagy témaközösségeknek.
- **Keresés és könyvjelzők**: gyorsan megtalálod a posztokat, felhasználókat, fájlokat; kedvenc posztjaidat elmented.
- **Testreszabás és márka**: sötét/világos mód, színek, ikonok, portál-URL (slug) módosítása, “Powered by” jelölés kezelése.
- **Moderáció és jogosultság**: Role Manager, felhasználó-jóváhagyás, tartalomjelentés, e-mail összefoglalók (digest).
- **Pro kiegészítések**: ranglisták, jelvények, ellenőrzött profil jelölés, bővített emoji/GIF és média modulok, welcome képernyő, automatizmusok.

Mit jelent ez a gyakorlatban? A közösségi portálod áttekinthető feedre épül, ahol a tagok posztolnak, reagálnak, privátban egyeztetnek, és a releváns értesítéseket kapják. A Spaces egységekkel pontosan behatárolhatod, ki mit láthat és miről értesül.

### Beépített LMS

- **Kurzusszerkesztő**: Gutenberg-alapokon, szekciók és leckék logikus felépítésével, beágyazható médiával.
- **Előrehaladás és drip**: a rendszer követi, hol tart a hallgató; ütemezetten nyithatod a leckéket.
- **Kurzushozzáférés**: nyilvános/privát/titkos kurzusok, záró képernyő a nem jogosultaknak.
- **Lecke-beszélgetések**: a hallgatók a lecke kontextusában kérdezhetnek, válaszolhatnak.
- **Médiatárolás**: helyi tárhely vagy külső (pl. S3/R2) offload a terhelés és költségek optimalizálásához.
- **Admin és értesítések**: beiratkozás/hozzáférés kezelése, szerepkörök, e-mail értesítések (pl. új lecke, státusz).

Egy felületen kezeled a tananyagot és a köré szerveződő beszélgetéseket, így a tanulás valóban közösségi élménnyé válik.

### Integrációk és ökoszisztéma

- **FluentCRM**: aktivitás-alapú kampányok és automatizmusok; taglista-használat, szegmentálás.
- **Fluent Forms + Paymattic**: jelentkezések, fizetések; automatikus beléptetés Spaces vagy kurzusok hozzáféréseibe.
- **Fluent Support**: a jegyekben látszik a felhasználó kurzus- és közösségi kontextusa; gyorsabb ügyintézés.
- **Giphy/Emoji és média**: gazdag kommunikáció a posztokban, kommentekben és chatekben.

### Teljesítmény és technika

- **Gyors, “no-bloat” felépítés**: a portál külön útvonalon fut (alapértelmezés szerint /portal), igény szerint kezdőlapra teheted.
- **Skálázhatóság**: média offload S3/R2-re, Redis cache ajánlott; a felépítés nagy felhasználói bázisra kész.
- **Ajánlott környezet**: WordPress 6.0+, minimum PHP 7.3+, ajánlott PHP 8.1+, MySQL 8+/MariaDB 10.5+, Nginx + Redis, legalább 2 vCPU/4 GB RAM.

## Gyakorlati példák

- **Alumni klub**: bezárt Facebook-csoport helyett privát portál, Spaces évfolyamok szerint, heti digest és jelvények az aktivitás ösztönzésére.
- **Online akadémia**: fizetős kurzusok drip tartalommal, leckeszintű beszélgetések, automatizált e-mailek a lecke-nyitásokhoz, számlázás és beléptetés űrlapról.
- **Termék-közösség és támogatás**: nyilvános tudásmegosztás Spaces-ben, Pro mediával; support jegyben látszik, milyen kurzuson van a felhasználó – gyorsabb hibaelhárítás.

## Előnyök és értékajánlat

- **Saját tulajdonú platform**: te döntesz az adatokról, a márkáról, a hozzáférésről.
- **Kevesebb integrációs kockázat**: közösség és LMS egyben, egységes UX és jogosultság.
- **Gyors bevezetés, könnyű migráció**: egykattintásos átállás népszerű közösségi pluginekről.
- **Skálázható és költséghatékony**: média offload, cache, optimalizált lekérdezések.
- **Automatizált folyamatok**: marketing, fizetés, tagság és support összekapcsolva.

## Kinek ajánlott?

- **Képzők, edtech szereplők, oktatók**: kurzusok és közösség egy felületen.
- **Vállalkozások és brandek**: saját termékközösség, ügyfélklub, insider program.
- **Nonprofitok és klubok**: zárt, moderált, biztonságos környezet.
- **Vállalati csapatok**: belső kommunikáció, tudásmegosztás Spaces-szel.

## Gyors kezdés

1. Telepítsd és aktiváld a bővítményt a WordPress adminban.
2. Állítsd be a portál URL-jét és láthatóságát (nyilvános, csak bejelentkezett, szerepkör alapú).
3. Hozd létre az első Space-t (pl. “Közösségi tér”) és a hozzáférési szabályokat.
4. Készíts egy kurzust szekciókkal és leckékkel, kapcsold be az előrehaladás- és drip opciókat.
5. Kapcsold be a szükséges integrációkat (CRM, űrlap, fizetés, support), és teszteld a beléptetést.

## Beállítási tippek

- Tedd a közösséget a kezdőlapra, ha a portál a fő élmény.
- Személyre szabhatod a fejléceket, ikonokat, színeket és a sötét/világos módot.
- Állíts be heti/havi e-mail összefoglalót az aktivitás növeléséhez.
- Nagy forgalom esetén használd az S3/R2 offloadot és a Redis cache-t.
- Migrációkor ellenőrizd a profil- és borítóképeket; a core adatok (tagok, posztok, reakciók) automatikusan átjönnek.

```php
// Opcionális: vendégek átirányítása a bejelentkezésre a közösségi portálról
// Cseréld a '/portal' részt a saját portál slugodra.
add_action('template_redirect', function () {
    if (!is_user_logged_in() && strpos($_SERVER['REQUEST_URI'], '/portal') === 0) {
        wp_redirect(wp_login_url());
        exit;
    }
});
```

## Összegzés

Ha egy gyors, modern és saját kézben tartható közösségi portált szeretnél, ahol a tanulás és a közösségi aktivitás ugyanazon a felületen történik, a FluentCommunity mindezt egyetlen WordPress bővítményben adja. Időt spórolsz a bevezetéssel, pénzt az integrációk és külső szolgáltatások kiváltásával, és energiát a mindennapi üzemeltetésben.