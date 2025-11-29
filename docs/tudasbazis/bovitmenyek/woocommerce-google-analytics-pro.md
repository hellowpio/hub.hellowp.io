---
title: "WooCommerce Google Analytics Pro"
description: "Prémium WooCommerce bővítmény, amely mély GA4-integrációt és teljes körű e‑kereskedelmi eseménykövetést kínál külön kódolás vagy GTM nélkül."
sidebar_label: "WooCommerce Google Analytics Pro"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Google Analytics Pro egy prémium bővítmény, amely **kulcsrakész GA4-integrációt** ad a webáruházadhoz. Automatikusan küldi a **fejlett e‑kereskedelmi eseményeket** a Google Analytics felé, és kezeli az **alapoldal-követést** is, így nem kell külön Analytics plugint vagy GTM-et használnod. Különösen hasznos, ha gyakran fordul elő, hogy a fizetés után a vevő nem jut vissza a “köszönő” oldalra, mert ilyenkor is rögzíti a vásárlást.

## Hogyan működik röviden

A bővítmény a **GA4 Measurement Protocolt** használja: a boltodból közvetlenül küldi az eseményeket a Google felé. Hitelesítve kiválasztod a GA4 property-t, a bővítmény beállítja a **Data Streamet** és az API-kapcsolatot, majd automatikusan rögzíti az összes fontos eseményt: kosár, checkout, vásárlás, kuponok, visszatérítések, felhasználói aktivitás, Subscriptions események és még sok más.

## Fő funkciók részletesen

### GA4-integráció hitelesítéssel
- A WooCommerce adminban bejelentkezve kiválaszthatod a **GA4 property-t**.
- A bővítmény automatikusan létrehozza és összeköti a **Data Streamet** és az API-kapcsolatot, így nincs szükség külön “tag” telepítésre.

### Measurement Protocol a megbízható rögzítéshez
- Közvetlen szerveroldali továbbítás a GA4 felé.
- **A vásárlások akkor is bekerülnek**, ha a vevő nem tér vissza a köszönő oldalra (például offsite fizetéseknél).

### Fejlett e‑kereskedelmi események
- **Kosár-események**: hozzáadás, eltávolítás, mennyiség-módosítás.
- **Kuponok**: hozzáadás és eltávolítás, így mérhető a promóciók hatása.
- **Checkout**: indítás és lépések rögzítése, ami segít a szűk keresztmetszetek azonosításában.
- **Vásárlás**: automatikus rögzítés köszönő oldal nélkül is.
- **Admin rendelések**: a kézzel létrehozott, sikeres rendelések is konverzióként jelennek meg.
- **Lemondás és teljes visszatérítés**: a bevételi hatás pontos méréséhez.

### Vásárlói aktivitás
- **Bejelentkezés**, kijelentkezés, **regisztráció**, jelszócsere.
- Fiók- és rendelésmegtekintések, **termékértékelések/kommentek**. Ezek segítenek megérteni a felhasználói kötődést és az elköteleződést.

### Alap site tracking
- **Oldalmegtekintések** és munkamenetek küldése.
- A Pro telepítése automatikusan letiltja az ingyenes GA plugint, hogy ne legyen duplikált követés.

### Testreszabás és adatvédelem
- **Eseménynevek átnevezése** és egyenkénti kikapcsolása.
- **User‑ID követés** a vevői út összevarrásához.
- **IP‑anonimizálás** és **szerepkör‑kizárások** (például adminok, shop managerek), hogy tisztább adataid legyenek.

### WooCommerce Subscriptions támogatás
- **Lejárat**, felfüggesztés, újraaktiválás, lemondás, **megújítás** események és összegek – teljes előfizetés-analitika GA4-ben.

## Gyakorlati példák

- Offsite fizetés (pl. banki átirányítás) után a vevő nem tér vissza a köszönő oldalra: a vásárlás akkor is **rögzül a GA4-ben**.
- Ügyfélszolgálat telefonon vesz fel rendelést: az **admin-hozzáadott rendelés** konverzióként és bevételként megjelenik.
- Kuponkampány fut: látod, hogy a kupon **növelte-e a konverziót és a kosárértéket**.
- Checkout-on esik a forgalom: a **lépésenkénti események** alapján gyorsan azonosítod a kilépési pontot.
- Belső csapat tesztel: az **admin és shop manager kizárásával** nem szennyezed a riportokat.

## Előnyök és értékajánlat

- **Kódolás és GTM nélkül** kapsz teljes e‑kereskedelmi mérést GA4-ben.
- **Kevesebb mérési vakfolt**: vásárlásrögzítés köszönő oldal nélkül, admin rendelések és teljes visszatérítések kezelése.
- **Azonnali riportálhatóság**: AOV, konverziós ráta, termék- és kategóriateljesítmény, kuponhatás, checkout-szűk keresztmetszetek.
- **Skálázható és tiszta adat**: User‑ID, IP‑anonimizálás, szerepkör-kizárás.

## Kinek ajánlott?

- **Kereskedőknek**, akik gyorsan, megbízhatóan akarnak GA4-adatokat integrálni fejlesztés nélkül.
- **Adatelemzőknek és marketingeseknek**, akik pontos konverzió- és bevételi riportokat szeretnének.
- **Előfizetéses modellel dolgozó boltoknak**, ahol a Subscriptions események kritikusak.
- **Csapatoknak**, ahol sok belső teszt és admin aktivitás torzíthatná a mérést.

## Kompatibilitás és követelmények

- WordPress 5.2+, WooCommerce 3.6.0+, PHP 7.4+.
- **HPOS támogatás** és **Cart/Checkout Blocks kompatibilitás**.
- Működik a **WooCommerce Subscriptions** bővítménnyel.

## Beállítás lépései

1. Hozz létre egy **GA4 property-t**, egy **Data Streamet** és egy **Measurement Protocol API Secrett**. A Stream és a Secret neve legyen: “WooCommerce Google Analytics Pro”.
2. A WooCommerce adminban: Settings > Integrations > Google Analytics Pro – hitelesítsd a Google-fiókod, válaszd ki a GA4 property-t, mentsd.
3. Állítsd be az opciókat: **User‑ID**, **IP‑anonimizálás**, **szerepkör‑kizárás**, eseménynevek testreszabása.
4. Tesztelj: tegyél kosárba, indíts checkoutot, zárj le egy tesztvásárlást, ellenőrizd az eseményeket a GA4-ben.

```text
Gyors ellenőrzőlista
- GA4 property + Data Stream + API Secret (név: WooCommerce Google Analytics Pro)
- Plugin hitelesítve, property kiválasztva
- User‑ID, IP anonimizálás, role kizárások beállítva
- Események átnevezése/kikapcsolása (ha szükséges)
- Tesztrendelés és eseményellenőrzés
```

## Fontos megjegyzések és korlátozások

- **Universal Analytics** már nem támogatott; a bővítmény GA4-re fókuszál.
- A GA jelenlegi korlátozásai miatt **csak teljes visszatérítéseket** küld.
- Ha egy “függő/on hold” rendelést másnap fizetnek ki, a konverzió **nem** kapcsolható az eredeti munkamenethez a GA napi session-logikája miatt.
- A Pro telepítése **letiltja az ingyenes GA plugint**, hogy elkerülje a duplikált mérést.

---

Fejlesztő: **SkyVerge**. A bővítmény célja, hogy a teljes vásárlói útvonalat megbízhatóan, hiánytalanul rögzítse GA4-ben – külön fejlesztés, GTM és töredezett megoldások nélkül. Ha szeretnéd, használhatsz egy saját eseménymátrixot és ellenőrzőlistát a boltodra szabva a tiszta méréshez.