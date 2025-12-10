---
title: "Email Customizer for WooCommerce Subscriptions"
description: "Vizuális szerkesztővel testreszabhatod a WooCommerce Subscriptions összes előfizetéses e-mailjét a YayMail felületén, kódolás nélkül."
sidebar_label: "Email Customizer for WooCommerce Subscriptions"
---

## Mi ez és milyen problémát old meg?

Az Email Customizer for WooCommerce Subscriptions egy kiegészítő, amellyel a WooCommerce Subscriptions által küldött összes előfizetéses e-mail sablont a **YayMail – WooCommerce Email Customizer** vizuális szerkesztőjében tudod személyre szabni. A cél: egységes, márkahű és érthető kommunikáció az előfizetés teljes életciklusa során – fejlesztés, kódolás és sablonfájlok szerkesztése nélkül.

Alapból a WooCommerce e-mailjei csak korlátozottan alakíthatók. Ezzel a bővítménnyel egy drag‑and‑drop buildert kapsz, ahol minden elemet a márkádhoz igazíthatsz, és az összes előfizetéses sablont egy helyen kezelheted.

## Fő funkciók és hogyan működnek

- Vizuális e-mail szerkesztő
  - A YayMail builderben blokkos, drag‑and‑drop felületen állítod a **logót, színeket, háttérképeket, fejléceket/lábléceket, gombokat, képeket, betűméretet**.
  - **Többhasábos elrendezések**, előre definiált tartalmi blokkok és **dinamikus helyőrzők** (shortcode-ok) segítenek, hogy minden információ a megfelelő helyen jelenjen meg.
  - **Előnézet** és **teszt e-mail** küldésével azonnal látod, mit kap az ügyfél.

- Előfizetéses sablonok központi kezelése
  - A YayMail sablonválasztójában megjelenik az összes **Subscriptions** értesítés. Sablononként ki‑/bekapcsolhatod a testreszabást, és **valós rendelési/előfizetési adatokkal** nézheted meg az eredményt.
  - Így gyorsan és következetesen dolgozhatsz – minden sablon ugyanabban a stílusban.

- Import/Export
  - A kész sablonjaidat **exportálhatod**, majd **importálhatod** másik webhelyre. Ideális ügynökségeknek, multisite-nak és gyors újrahasznosításhoz.

- Kompatibilitás és bővíthetőség
  - Témákkal és számos kiegészítővel együttműködik.
  - Opcionálisan az **Enhancer for WooCommerce Subscriptions** további értesítéseit is szerkesztheted ugyanitt.

## Támogatott e-mail sablonok

Alap Subscriptions sablonok:
- New Renewal Order
- Processing Renewal Order
- Customer Renewal Invoice
- Subscription Switched
- Subscription Status
- Subscription Cancelled
- Payment Retry Templates
- Subscription Suspended
- Subscription Expired

Enhancerrel bővíthető példák:
- Processing Shipping Fulfillment Order
- Subscription Shipping Frequency Notification
- Subscription Price Updated
- Trial Ending Reminder
- Auto‑Renewal Reminder
- Manual Renewal Reminder
- Expiration Date Reminder

## Telepítés és első lépések

1. Telepítsd és aktiváld: WooCommerce, WooCommerce Subscriptions, valamint a YayMail – WooCommerce Email Customizer (ingyenes vagy Pro).
2. Telepítsd és aktiváld az Email Customizer for WooCommerce Subscriptions kiegészítőt.
3. Nyisd meg: WooCommerce > Email Customizer. Válaszd ki a szerkeszteni kívánt Subscriptions sablont.
4. Kapcsold be a sablont (“Enable this template”), alakítsd a dizájnt és tartalmat.
5. Válassz valós rendelést/előfizetést az előnézethez, majd küldj teszt e-mailt.
6. Ha kész, ismételd minden releváns sablonra; igény szerint exportáld a beállításokat másik oldalra.

## Gyakorlati példák

- Payment Retry e-mail egységesítése:
  - Adj hozzá feltűnő, márkázott **CTA gombot** az ügyfélfiók/előfizetés oldalra, és fogalmazz meg rövid, egyértelmű instrukciót a fizetési adatok frissítéséhez. Ezzel csökkented a lemorzsolódást.

- Megújítási kommunikáció finomítása:
  - A Renewal Invoice sablonba helyezz be **GYIK blokkot** és **ügyfélszolgálati elérhetőséget**, hogy gyorsan elhárítsd a kételyeket (pl. számlázási cím, kuponok, áfás számla).

- Lemondási “win‑back”:
  - A Subscription Cancelled sablonban ajánlj fel **kedvezményt** vagy emeld ki az új csomag előnyeit, és vezess rá egy visszanyerő űrlapra.

- Ügynökségi használat:
  - Készíts egy **mester sablont** a márkád arculatával, majd exportáld és importáld több ügyfélhez. Így órákat spórolsz minden projekten.

Példa rövid, érthető retry üzenetre (helyőrzőkkel, amelyeket a builderben dinamikus elemekre cserélsz):

```
Szia [Vevő neve]!

A legutóbbi előfizetéses terhelés nem sikerült. Kérjük, frissítsd a fizetési adataidat az alábbi gombon:
[CTA – Fizetési adatok frissítése]

Ha kérdésed van, írj nekünk: [Support e-mail] vagy nézd meg a GYIK-ot: [GYIK link].
Köszönjük, hogy velünk vagy!
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs sablonfájl-szerkesztés, mindent vizuálisan állítasz.
- **Konzisztens márkaélmény**: az összes előfizetéses e-mail egységes arculattal megy ki.
- **Jobb konverzió és kevesebb lemorzsolódás**: világos CTA-k, érthető tartalom a kritikus pontokon (retry, megújítás, lejárat).
- **Skálázhatóság**: import/export révén egyszerű a többoldalas vagy ügynökségi használat.

## Kinek ajánlott?

- **Előfizetéses webáruházaknak**, akik kód nélkül akarnak profi e-mail élményt.
- **Marketingeseknek és ügyfélszolgálatnak**, akik gyorsan szeretnék finomhangolni az üzeneteket.
- **Ügynökségeknek és fejlesztőknek**, akik szabványosítható, újrahasznosítható e-mail dizájnt keresnek.
- **SaaS/oktatási/klub tagsági oldalaknak**, ahol sok, állapotfüggő értesítés fut.

## Korlátozások és megfontolások

- Nem önálló termék: szükséges a WooCommerce, a WooCommerce Subscriptions és a YayMail – WooCommerce Email Customizer.
- Nem azonos a YayMail Pro-val: ez a kiegészítő a Subscriptions (és az Enhancer) e-mailjeinek szerkesztését teszi lehetővé, más prémium integrációkat nem ad.
- Ha a testreszabott e-mailek nem érkeznek meg, célszerű **SMTP-t** beállítani a megbízható kézbesítéshez.

## Tippek a profi kivitelezéshez

- Állítsd be globálisan a **márkaszíneket, tipográfiát, logót és láblécet**, majd szinkronizáld a sablonokban.
- Tedd bele a legfontosabb **önkiszolgáló linkeket**: előfizetés kezelése, számlák, szállítási cím, fizetési módok.
- Kommunikálj a lifecycle szerint: megújítás előtt emlékeztető, retry esetén egyértelmű következő lépés, lemondásnál finom visszanyerés.
- Tesztelj több kliensen és eszközön; küldj **teszt e-maileket**, és ellenőrizd a spam pontszámot.