---
title: "WooCommerce EU VAT Number"
description: "Hivatalos WooCommerce kiegészítő EU-s adószám-kezeléshez: VIES-ellenőrzés, automatikus ÁFA-mentesség B2B-hez és digitális ÁFA-bizonyítékok gyűjtése."
sidebar_label: "WooCommerce EU VAT Number"
---

## Mi ez és milyen problémát old meg?

A WooCommerce EU VAT Number egy hivatalos, fizetős kiegészítő, amely **EU-s adószám (VAT) mezőt** ad a pénztárhoz és a Fiókom oldalhoz, a megadott számot **valós időben ellenőrzi a VIES** adatbázis alapján, és jogosultság esetén **automatikusan eltávolítja az ÁFÁ-t**. Emellett a **digitális termékek EU-s ÁFA-szabályaihoz** gyűjti és elmenti a szükséges helymeghatározási bizonyítékokat. Célja, hogy megszűnjenek a téves ÁFA-felszámítások B2B vásárlóknál, és könnyű legyen a megfelelés a digitális értékesítésekre vonatkozó szabályoknak.

## Hogyan működik?

- **B2B vásárlás**: a pénztáron megjelenik az EU-s adószám mező. A megadott számot a bővítmény a VIES-en keresztül ellenőrzi. Ha érvényes és a vevő jogosult, a rendszer **automatikusan eltávolítja az ÁFÁ-t**. Sikertelen ellenőrzésnél azt teszi, amit beállítottál (elutasít, elfogad ÁFÁ-val, vagy elfogad ÁFA nélkül).
- **Digitális termékek**: a bővítmény összeveti a vevő **IP-címét** és **számlázási országát**. Egyezésnél az adat **bizonyítékként** mentésre kerül a rendeléshez. Eltérésnél a vevőnek **önnyilatkozatot** kell adnia a tartózkodási helyéről; ezt is eltárolja a rendszer.
- **Fiókom oldal**: a vevő elmentheti a VAT-számát; az **országkódnak egyeznie kell** a számlázási országgal.

## Fő funkciók

- **EU-s VAT mező és VIES-ellenőrzés**: Mezőcímke és leírás testreszabása, valós idejű validáció. Siker esetén **ÁFA-mentesség** automatikusan.
- **Digitális ÁFA-kezelés**: Kijelölhető egy **külön adóosztály** digitális termékekhez; IP–ország ellenőrzés, eltérésnél kötelező **önnyilatkoztatás**, és a bizonyítékok mentése a rendeléshez.
- **Hibakezelés**: beállíthatod, hogy érvénytelen vagy ellenőrizhetetlen adószámnál a rendszer **elutasítsa a rendelést**, vagy engedje **ÁFÁ-val**, esetleg **ÁFA nélkül**.
- **B2B-only mód**: a VAT mező **kötelezővé tehető**, így csak érvényes adószámos vevők tudnak rendelni.
- **Alapországbeli mentesség (opció)**: dönthetsz úgy, hogy **a bolt bázisországában** lévő érvényes VAT-os vállalkozásoknak is eltávolítod az ÁFÁ-t.
- **Admin átláthatóság**: a VAT-információk láthatók a rendeléslistában és a rendelésnézetben egy külön dobozban; a **számlázási cím végén** is megjelenik a formázott VAT.
- **Modern kompatibilitás**: támogatja a **blokkalapú kosár/pénztár** felületeket és a **HPOS** (High-Performance Order Storage) rendszert.

## Gyakorlati példák

1. **EU B2B beszerzés**: Német cég vásárol nálad. Beírja a VAT-számát, a rendszer validálja, és **ÁFA nélkül** fizet. A rendelésben látod a VAT-státuszt és a használt bizonyítékokat.
2. **Digitális kurzus B2C**: Francia fogyasztó letölthető kurzust vesz. Az IP és a számlázási ország egyezik, a rendszer **megfelelő francia ÁFA-t** alkalmaz, és a bizonyítékot elmenti.
3. **IP–ország eltérés**: A vevő olasz címet ad meg, de az IP más országból jön. A pénztár **önnyilatkozatot kér**, amit bizonyítékként elment.
4. **VIES hiba esetén**: Ha a VIES épp nem elérhető, a beállításodnak megfelelően a rendelést **blokkolod**, vagy **ÁFÁ-val elfogadod** (későbbi manuális ellenőrzéssel).

## Beállítás és első lépések

1. Telepítés után a beállításokat a **WooCommerce adó** menüjében találod.
2. Állítsd be a VAT mező **címkéjét és leírását**, döntsd el a **hibakezelést** és (ha kell) kapcsold be a **B2B-only módot** vagy az **alapországbeli mentességet**.
3. Digitális termékekhez jelöld ki a **digitális adóosztályt**, kapcsold be a **bizonyítékgyűjtést**, és vidd fel az EU-s adókulcsokat a WooCommerce adóbeállításaiban.

## Előnyök és értékajánlat

- **Kevesebb manuális ellenőrzés**: a VIES-validáció leveszi a válladról a terhet.
- **Kisebb kockázat**: csökken a hibás ÁFA-felszámítás és a megfelelési kockázat.
- **Audit-kész rendelésadatok**: a bizonyítékok és státuszok egy helyen, visszakereshetően.
- **Rugalmas működés**: hiba esetén te döntöd el, mi történjen.
- **Jövőbiztos**: működik a legújabb WooCommerce-technikákkal (blokkok, HPOS).

## Kinek ajánlott?

- **EU-n belüli B2B kereskedőknek**, akiknek fontos az automatikus **ÁFA-mentesség** kezelése.
- **Digitális termékek** (szoftver, kurzus, letöltés) értékesítőinek, akiknek kell az **IP–ország** bizonyíték és az **önnyilatkoztatás**.
- **Ügynökségeknek és fejlesztőknek**, akik szabályosan működő, karbantartható EU-s adókezelést akarnak átadni.
- **Könyvelésért/megfelelésért felelősöknek**, akiknek kell a tiszta, ellenőrizhető rendelésadat.

## Korlátozások és megjegyzések

- **UK VAT**: jelenleg nincs támogatott UK VAT-validáció.
- **VIES rendelkezésre állás**: időszakos kimaradások előfordulhatnak; a hibakezelési opciók erre is megoldást adnak.
- **Nem adókulcs-számoló**: az EU-s kulcsokat neked kell felvinni; a bővítmény a szabályok alkalmazását segíti.
- **Integrációk**: egyes adómegoldásokkal (pl. automatikus adószám-átadás) korlátozás lehet; élesítés előtt tesztelj.

## Fejlesztőknek

- **Mentett meta**: `_billing_vat_number` (legacy: `_vat_number`).
- **Helper függvény**:
```php
$order = wc_get_order(123);
$vat   = wc_eu_vat_get_vat_from_order($order);
```
- **Országszűrés**:
```php
add_filter('woocommerce_eu_vat_number_country_codes', function ($codes) {
    return array_intersect($codes, ['DE', 'AT', 'HU']);
});
```

## Kompatibilitás és követelmények

A bővítmény a jelenlegi WordPress és WooCommerce környezetekkel működik, kompatibilis a **blokkalapú kosár és pénztár** felületekkel és a **HPOS** adattárolással. Előfizetéssel frissítést és támogatást kapsz. Megjegyzés: a megfelelőségi és ár-információk idővel változhatnak.