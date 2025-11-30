---
title: "AffiliateWP - Show Affiliate Coupons"
description: "Kuponok megjelenítése az affiliátoknak az Affiliate Area-ban és shortcode-dal. Egyszerű kuponalapú követés és kevesebb adminisztráció."
sidebar_label: "AffiliateWP - Show Affiliate Coupons"
---

## Mi ez és milyen problémát old meg?

A Show Affiliate Coupons az AffiliateWP-hez készült kiegészítőként indult, amely az affiliátok számára láthatóvá tette a saját kuponkódjaikat. Ma már a funkció a magbővítmény része: az affiliát az Affiliate Area-ban külön **Kuponok** fülön, illetve egy shortcode segítségével bárhol megtekintheti a hozzá rendelt kuponokat és azok kedvezményét. Ezzel megszűnik a „Hol a kuponkódom?” típusú support, és a kuponok kuponalapú követésre is használhatók, még akkor is, ha a vásárló nem affiliát-linkkel érkezik.

## Hogyan működik röviden?

- Az admin hozzárendel egy kuponkódot egy affiliáthoz (pl. WooCommerce-ben).
- Ha az affiliáthoz van kupon, az **Affiliate Area** automatikusan megjelenít egy **Kuponok** fület.
- A kuponok egy shortcode-dal is kiírhatók bármely oldalra.
- A kupon beváltása automatikusan a megfelelő affiliáthoz rendeli a jutalékot (kuponalapú követés).

## Fő funkciók részletesen

### Kuponok fül az Affiliate Area-ban
Ha egy affiliáthoz legalább egy kupon tartozik, megjelenik a **Kuponok** fül, amely listázza:
- a kuponkódokat,
- a kedvezmény típusát és mértékét (pl. százalék vagy fix összeg).

Így az affiliát azonnal látja és másolhatja a saját kódjait. A fül az alap Affiliate Area-ban és az újabb **Affiliate Portal** felületeken is támogatott.

### [affiliate_coupons] shortcode
A kuponokat oldalra vagy bejegyzésbe is kiteheted:

```
[affiliate_coupons]
```

- A bejelentkezett affiliát kizárólag a saját kuponjait látja.
- Ha nincs hozzárendelt kupon, a shortcode nem jelenít meg semmit.
- Ideális dedikált „Kuponjaim” oldal létrehozásához.

### Támogatott integrációk
- **WooCommerce**: megjelenítés, kuponalapú követés, és dinamikus kuponok.
- **Easy Digital Downloads (EDD)**: megjelenítés és kuponalapú követés.
- **MemberPress**: megjelenítés és kuponalapú követés.

A dinamikus kuponok automatizálása WooCommerce mellett érhető el.

### Dinamikus kuponok (WooCommerce)
A dinamikus kuponok automatizálják az affiliát-kuponok létrehozását és kezelését:
- Egy kijelölt **sablonkupon** beállításait öröklik (kedvezmény mértéke, érvényesség, korlátozások).
- Automatikus generálás új affiliátoknak; elérhető tömeges generálás és felülírás.
- Testreszabható kuponkód-formátum (pl. `{user_name}`, `{coupon_amount}`), így emlékezetes kódokat hozhatsz létre.
- E-mailbe illeszthető tag a regisztrációkor létrejött kupon kommunikálásához: `{registration_coupon}`.

### Testreszabhatóság fejlesztőknek
A megjelenés módosítható a sablon szintjén. A **dashboard-tab-coupons.php** sablon fájl átírásával testre szabhatod a Kuponok fül és a shortcode kimenetét (oszlopok, elrendezés, jelölések).

## Gyakorlati példák

- Influencer kampány: YouTuber affiliátod belép az Affiliate Area-ba, kimásolja a saját kódját (pl. „ANNA10”), és a videó leírásában megosztja. A vásárló kuponnal rendel – a jutalék akkor is jóváíródik, ha nem kattintott affiliát-linkre.
- Tömeges indulás kuponokkal: 300 új affiliátot vesztek fel. WooCommerce-ben beállítasz egy sablonkupont 10% kedvezménnyel, és dinamikusan legenerálod mindenkinek a kódot. Nem kell kézzel egyesével létrehozni vagy küldözgetni.
- Tagdíj kedvezmény: MemberPress-ben hozzárendelsz egy kuponkódot az affiliáthoz. Az affiliát a Kuponok fülön látja a kedvezményt és feltételeket, a vásárlások kuponalapúan követhetők.

## Beállítás és használat

1. Előfeltétel: az Affiliate Area csak akkor mutat **Kuponok** fület, ha az affiliáthoz van hozzárendelt kupon.
2. WooCommerce kupon hozzárendelése:
   - Admin: Marketing → Kuponok → új kupon vagy meglévő szerkesztése.
   - Az affiliát hozzárendelése az erre szolgáló mezőben (Affiliate mező).
   - Mentés után a kupon beváltása az adott affiliáthoz ír jutalékot.
3. Kuponok megjelenítése:
   - Affiliate Area: automatikusan, ha van kupon.
   - Shortcode: helyezd el a következő kódot egy oldalra:
     ```
     [affiliate_coupons]
     ```
4. Dinamikus kuponok (WooCommerce):
   - Állíts be egy sablonkupont (kedvezmény, korlátozások).
   - Engedélyezd az automatikus generálást új affiliátoknak; igény szerint futtass tömeges generálást.
   - Testreszabhatod a kódformátumot, és e-mailben elküldheted a létrejött kuponokat a `{registration_coupon}` taggel.
5. Megjelenés testreszabása:
   - Tedd egyéni sablonként elérhetővé és módosítsd a **dashboard-tab-coupons.php** fájlt (táblázat oszlopai, címkék, formázás).

## Előnyök és értékajánlat

- **Kevesebb support**: az affiliát maga látja a kuponjait – nincs több Excel és manuális e-mail.
- **Biztos jutalékkövetés**: kuponalapú követés linkkattintás nélkül is.
- **Időmegtakarítás**: dinamikus kuponokkal tömeges kezelés WooCommerce-ben.
- **Jobb affiliátélmény**: azonnal másolható, egyértelmű kuponlista; több promóció, több konverzió.
- **Rugalmas megjelenítés**: Affiliate Area fül és shortcode – oda teszed, ahol a legkényelmesebb.

## Célközönség

- **Webshop tulajdonosok** (WooCommerce): akik kuponokkal ösztönzik az értékesítést, és csökkentenék az admin terheket.
- **Digitális termékeket árusítók** (EDD): akik egyszerű kuponalapú követést és láthatóságot akarnak.
- **Tagsági oldalak** (MemberPress): ahol az affiliátoknak rendszeresen kell hivatkozniuk kuponokra.
- **Nagy affiliát-hálózatok**: ahol a dinamikus és tömeges kuponkezelés kulcsfontosságú.

## Fontos megjegyzések és korlátozások

- A Kuponok fül és a shortcode csak akkor jelenít meg tartalmat, ha az adott affiliáthoz ténylegesen tartozik kupon.
- A dinamikus kuponok automatizálása jelenleg WooCommerce mellett támogatott.
- EDD és MemberPress esetén a kuponok hozzárendelése és megjelenítése támogatott, a dinamikus generálás nem minden esetben elérhető.

## Összegzés

A Show Affiliate Coupons funkciók célja, hogy az affiliátok kuponjai mindig kéznél legyenek: az Affiliate Area-ban külön fülön és shortcode-dal bárhol megjeleníthetők. A kuponalapú követés megbízható, a support-terhelés csökken, WooCommerce-ben pedig a dinamikus kuponok jelentősen egyszerűsítik a tömeges kezelést. Ha kuponokkal dolgozol és szeretnéd, hogy az affiliátjaid valóban használják is őket, ez a megoldás pontosan neked szól.