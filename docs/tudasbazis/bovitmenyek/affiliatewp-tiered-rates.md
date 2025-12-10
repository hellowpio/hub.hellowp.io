---
title: "AffiliateWP - Tiered Rates"
description: "Teljesítményalapú, sávos jutalékrendszer az AffiliateWP-hez, amely automatikusan magasabb rátát ad a küszöbök elérése után."
sidebar_label: "AffiliateWP - Tiered Rates"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Tiered Rates egy hivatalos kiegészítő, amely **teljesítményalapú, sávos (tiered) jutalékrendszert** ad az affiliate programodhoz. A lényege: amikor egy affiliate elér egy előre definiált **küszöböt** (ajánlások száma vagy kifizetett affiliate kereset alapján), onnantól **magasabb jutalék** vonatkozik a jövőbeni ajánlásaira. Így egyszerre kapsz átlátható, objektív ösztönzőt és automatikus skálázást, minimális adminisztrációval.

## Hogyan működik? – alapfogalmak és logika

A bővítmény a WordPress adminban, az AffiliateWP beállításai között ad egy külön felületet, ahol bármennyi **sávot** hozhatsz létre. Minden sáv négy mezőből áll:

- **Type**: a teljesítménymutató típusa. Két opció:
  - **Number of Referrals**: a kifizetett ajánlások darabszáma,
  - **Total Earnings**: az affiliate részére kifizetett összesített jutalék.
- **Threshold**: a küszöbérték, amelytől a sáv érvénybe lép.
- **Rate**: az új jutalékmérték. Ez lehet **százalék** vagy **fix összeg**, az AffiliateWP globális beállításától függően.
- **Disabled**: a sáv ideiglenes kikapcsolása.

Fontos működési szabályok:

- **Nem visszamenőleges**: a magasabb ráta csak a küszöb elérését követő ajánlásokra érvényes.
- **Csak “Paid” számít**: a küszöbök számításakor kizárólag a kifizetett ajánlások és a kifizetett affiliate kereset kerül figyelembevételre.
- **Havi nullázás (Tiered Rate Expiration)**: opcionálisan minden hónap 1-jén visszaállíthatod a sávokat, így kampányokat és versenyeket frissen tarthatsz, elkerülve a tartós “beragadást” magas rátán.
- **Automatikus sorbarendezés és 0%-os alap sáv**: mentéskor a sávok rendeződnek; létrehozhatsz **0%**-os belépő sávot is, és bármely sáv külön letiltható.

### Ráta-hierarchia (összeférési szabályok)

Ha egy affiliate elér egy sáv-küszöböt, az így érvényesülő **tiered ráta** felülírja a globális, kategória- és termékszintű rátákat, valamint a több szintű jutalékot kezelő kiegészítők rátáit is. Kivétel: a **per-affiliate egyedi ráta** felülírja a sávos rátát. Bizonyos speciális helyzetekben a **Lifetime Commissions** és a **Recurring Referrals** beállításai befolyásolhatják a végeredményt.

### Előfizetéses (recurring) jutalékok

A **Recurring Referrals** kiegészítővel a sávos ráták a megújuló kifizetésekre is érvényesíthetők. Ezt a Recurring opciói között külön engedélyezheted, így a teljes előfizetéses életciklusra érvényben marad a teljesítményalapú logika.

## Beállítás lépésről lépésre

1. **Követelmény**: aktív AffiliateWP és érvényesített licenc (a kiegészítő a Professional vagy magasabb csomagban érhető el).
2. **Telepítés**: az AffiliateWP felületéről telepíthető és aktiválható.
3. **Konfiguráció**: menj a Settings > Tiered Rates oldalra, és add meg a sávokat:
   - válaszd ki a **Type**-ot (Referrals vagy Earnings),
   - állítsd be a **Threshold**-ot,
   - add meg a **Rate**-ot (százalék vagy fix),
   - igény szerint kapcsold be a **Tiered Rate Expiration** havi nullázást.

Példa beállítás (ajánlásszám alapú, százalékos rátával):

```
Type: Number of Referrals
Threshold | Rate
0         | 20%
11        | 25%
21        | 30%
```

Példa beállítás (kifizetett affiliate kereset alapú):

```
Type: Total Earnings
Threshold | Rate
0         | 20%
101       | 25%
201       | 30%
```

Megjegyzés: a “Total Earnings” mindig a kifizetett affiliate jutalék összegét jelenti, nem a bruttó rendelési értéket.

## Gyakorlati példák

- **Kampány hónapról hónapra**: állíts be 0–10 = 20%, 11–20 = 25%, 21+ = 30% sávokat, és kapcsold be a havi nullázást. Minden hónap 1-jén újraindul a verseny, tiszta lappal.
- **Earnings-alapú prémium**: ha fontos a profitabilitás, mérd a kifizetett jutalék összegét (pl. 0–100 = 20%, 101–200 = 25%, 201+ = 30%). Így az affiliaték nemcsak a mennyiségért, hanem a minőségért is motiváltak.
- **Előfizetéses szolgáltatás**: aktiváld a Recurring Referrals-t, és engedélyezd, hogy a sávos ráták a megújításokra is vonatkozzanak. A kezdeti akvizíció és a hosszú távú megtartás is ugyanazon ösztönző logika alá kerül.

## Előnyök és értékajánlat

- **Automatikus skálázás**: a rendszer magától lépteti az affiliatékat a magasabb sávokba, kézi állítgatás nélkül.
- **Átlátható ösztönzés**: egyértelmű, előre kommunikálható célok; nincs vita a feltételekről.
- **Kontrollált jutalékszintek**: a havi lejárat megfékezi a hosszú távú “jutalékinflációt”.
- **Konfliktusmentes beállítás**: a ráta-hierarchia egyértelmű; előre láthatod, melyik ráta lesz érvényes.
- **Előfizetésbarát**: a megújításokra is kiterjeszthető, így egységes a jutaléklogika.

## Kinek ajánlott?

- **Webáruházaknak**, akik forgalomnövelést és minőségibb leadeket szeretnének objektív, teljesítményalapú jutalmazással.
- **SaaS és előfizetéses szolgáltatóknak**, ahol a hosszú távú megtartás számít, és fontos a megújítások jutalmazása.
- **Digitális termékeket értékesítőknek**, akik rugalmas, gyorsan állítható kampányokat futtatnának.
- **Ügynökségeknek és hálózatoknak**, ahol sok affiliate dolgozik, és kritikus az adminisztratív teher csökkentése.

## Bevált gyakorlatok és tippek

- **Kezdd egyszerűen**: 2–3 jól kommunikálható sávval indíts, majd finomhangolj a teljesítményadatok alapján.
- **Használd a havi nullázást** rövid promóciókhoz és versenyekhez.
- **Ellenőrizd a ráta-hierarchiát**, ha per-affiliate vagy termékszintű rátákat is alkalmazol, hogy elkerüld a váratlan felülírásokat.
- **Kommunikáld a küszöböket** az affiliaték felé; a transzparencia növeli a részvételt.
- **Előfizetés esetén** kapcsold be a Recurring integrációt, és engedélyezd a sávos ráták alkalmazását a megújításokra.

Összefoglalva: a Tiered Rates egy célzott, skálázható eszköz, amellyel a jutalékaid automatikusan követik az affiliate teljesítményét. Tisztább ösztönzők, kevesebb adminisztráció, jobb megtérülés – mindezt az AffiliateWP ökoszisztémáján belül.