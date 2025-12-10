---
title: "AffiliateWP - Affiliate Area Shortcodes"
description: "Hivatalos AffiliateWP-kiegészítő, amellyel 20+ rövidkóddal bárhová beágyazhatod az Affiliate Area tartalmait és adatait, és teljesen egyedi partneri irányítópultot építhetsz."
sidebar_label: "AffiliateWP - Affiliate Area Shortcodes"
---

## Mi ez és milyen problémát old meg?

Az Affiliate Area Shortcodes egy hivatalos kiegészítő az AffiliateWP-hez. Több mint 20 **rövidkódot** ad a WordPress-hez, hogy a partneri felület (Affiliate Area) bármely részét tetszés szerint, **oldalakon, sablonokban vagy oldalépítőkben** jeleníthesd meg. Akkor hasznos, ha a gyári, fülalapú nézet helyett **egyedi irányítópultot** szeretnél, vagy bizonyos adatokat (pl. bevételek, látogatások, konverzió) külön oldalon mutatnál.

Röviden: nem kell sablont szerkesztened, kódolnod; **rövidkódokkal** rendezed át az AffiliateWP tartalmait.

## Követelmények és kompatibilitás

- **Előfeltétel:** az AffiliateWP alapbővítmény aktív legyen.
- **WordPress minimum:** 5.2
- **PHP minimum:** 7.4
- **Tesztelve eddig:** WordPress 6.8.3
- **Verzió / aktivitás:** 1.3.1; 2 000+ aktív telepítés; értékelés ~4/5; legutóbb frissítve 2025 szeptemberében.

Az adatok megjelenítéséhez a felhasználónak **bejelentkezett affiliatenek** kell lennie. A bővítmény a megjelenítésre fókuszál, **nem ad új követési logikát**.

## Hogyan működik?

A bővítmény rövidkódokat biztosít két fő csoportban:
- **Teljes szekciók** beágyazása (a gyári fülek megfelelő tartalma).
- **Önálló adatpontok** és összesítések beillesztése bárhová.

Minden rövidkód az AffiliateWP adataiból dolgozik, és automatikusan a bejelentkezett affiliate-re szűr.

## Fő funkciók részletesen

### 1) Teljes Affiliate Area szekciók
Olyan rövidkódok, amelyek a gyári fülek tartalmát hozzák:
- **Statisztikák és grafikonok:** [affiliate_area_stats], [affiliate_area_graphs]
- **Ajánlások és kifizetések:** [affiliate_area_referrals], [affiliate_area_payouts]
- **Ajánlói linkek és látogatások:** [affiliate_area_urls], [affiliate_area_visits]
- **Kreatívok és beállítások:** [affiliate_area_creatives], [affiliate_area_settings]
- **Értesítések és információk:** [affiliate_area_notices]

Ezekkel egyben kapod meg a funkcionalitást és a listanézeteket, de tetszőleges oldalelrendezésben.

### 2) Önálló adatpontok és mutatók
Ha csak számokat vagy azonosítókat szeretnél mutatni:
- **Bevétel és ajánlások:** [affiliate_earnings], [affiliate_referrals]
  - Paraméterezés: `status="paid"` vagy `status="unpaid"` csak a kifizetett/ki nem fizetett tételekre.
- **Forgalom és hatékonyság:** [affiliate_visits], [affiliate_conversion_rate], [affiliate_commission_rate], [affiliate_campaign_stats]
- **Profiladatok:** [affiliate_id], [affiliate_username], [affiliate_name] (opció: `first_name_only="yes"`), [affiliate_website]
- **Kijelentkezés:** [affiliate_logout]

Így például egy hős-sávban megjelenítheted a partner aktuális bevételét vagy konverziós arányát.

### 3) Rugalmas elrendezés és jogosultság
- A gyári fülektől függetlenül **egymás alá pakolhatod** a szekciókat, vagy **szétoszthatod** külön oldalakon.
- Oldalépítőkkel (pl. Elementor) egyszerűen **drag-and-drop** módon illesztheted a rövidkódokat a designba.
- Finoman szabályozhatod, mit lásson a partner – sablonhackelés nélkül.

## Telepítés és alapbeállítás

1. Telepítsd és aktiváld az AffiliateWP-t.
2. Telepítsd az Affiliate Area Shortcodes bővítményt a Bővítmények menüben, majd aktiváld.
3. Állítsd be, melyik oldal lesz az **Affiliate Area**: az Affiliates → Settings alatt válaszd ki azt az oldalt, ahová a rövidkódos felület kerül (így az e-mail linkek is ide mutatnak).
4. Helyezd el a kívánt rövidkódokat az oldalakon vagy sablonokban.

## Gyakorlati példák

### Egyoldalas, fülek nélküli irányítópult
Tegyük egymás alá a fő szekciókat:

```
[affiliate_area_stats]
[affiliate_area_urls]
[affiliate_area_payouts]
[affiliate_area_creatives]
[affiliate_area_visits]
```

### Többoldalas, célzott struktúra
- Statisztikák oldal: `[affiliate_area_stats]`
- Ajánlások oldal: `[affiliate_area_referrals]`
- Kifizetések oldal: `[affiliate_area_payouts]`
- Kreatívok oldal: `[affiliate_area_creatives]`

Így a partnerek mindig azt látják, ami az adott kontextusban fontos.

### Egyedi adatpont a tartalomban
Szabályzat vagy üdvözlő doboz:

```
Szia [affiliate_name first_name_only="yes"]!
A te affiliate azonosítód: [affiliate_id]
Aktuális konverziós arányod: [affiliate_conversion_rate]
```

### Fizetett bevétel kiemelése
```
Kifizetett bevételed: [affiliate_earnings status="paid"]
```

## Előnyök és értékajánlat

- **Időmegtakarítás:** nincs szükség sablonfájlok szerkesztésére, mindent rövidkódokkal állítasz össze.
- **Teljes kontroll a felületen:** a partneri irányítópultot a saját UX-edhez igazíthatod.
- **Oldalépítő-barát:** zökkenőmentes beillesztés bármely oldalra vagy komponensbe.
- **Granuláris megjelenítés:** akár egyetlen számot is kirakhatsz a megfelelő helyre.
- **Skálázható struktúra:** egyszerű a későbbi átrendezés, bővítés, A/B teszt.

## Kinek ajánlott?

- **Webshop- és tagsági oldal tulajdonosoknak**, akik AffiliateWP-t használnak, és egyedi partnerfelületet szeretnének.
- **Ügynökségeknek és fejlesztőknek**, akik gyorsan, kódolás nélkül akarnak testre szabható irányítópultot adni ügyfeleiknek.
- **Marketingeseknek**, akik a partnerek számára fókuszált, konverzióbarát felületet építenének.
- **Oldalépítőt használóknak**, akik a designba illesztve, komponensenként szeretnék beágyazni az affiliate funkciókat.

## Megfontolások és korlátozások

- A kiegészítő **nem változtat a követés logikáján**; csak a megjelenítésre szolgál.
- Az adatokhoz **bejelentkezett affiliate** szükséges; vendégeknek jellemzően bejelentkezési/engedélyezési üzenet jelenik meg.
- Ha egyszerű, teljes felület kell egy blokkban, az AffiliateWP alapból ad erre megoldást; ez a kiegészítő **sokkal granulárisabb** kontrollt biztosít.
- Fejlettebb tab-kezeléshez kombinálhatod tab-kezelő kiegészítővel, a rövidkódokat fülekbe rendezve.

## Összegzés

Az AffiliateWP – Affiliate Area Shortcodes akkor kell neked, ha az alap Affiliate Area helyett **testre szabott, oldalépítő-kompatibilis** partneri felületet szeretnél. A 20+ rövidkóddal teljes szekciókat és egyedi adatpontokat is pontosan ott jeleníthetsz meg, ahol a legnagyobb üzleti értéket adják. Gyors, rugalmas, és a gyakorlatban minimális technikai belépési küszöbbel alakítható a saját igényeidre.