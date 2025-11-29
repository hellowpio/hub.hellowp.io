---
title: "LearnDash LMS - ThriveCart Integration"
description: "Hivatalos LearnDash kiegészítő, amellyel a kurzusaidat a ThriveCart pénztárával értékesítheted – automatikus beiratással, csomagokkal és promóciókkal."
sidebar_label: "LearnDash LMS - ThriveCart Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – ThriveCart Integration egy ingyenes, hivatalos bővítmény, amellyel a LearnDash kurzusaid értékesítését a ThriveCart konverzióközpontú pénztárára bízhatod. Ahelyett, hogy a beépített fizetést használnád, a kurzusoldal gombja a ThriveCart pénztárára visz, sikeres fizetés után pedig a felhasználó automatikusan fiókot kap és beiratkozik a megfelelő kurzusokra. Így gyors, profi vásárlói élményt kapsz WooCommerce nélkül, fejlett promóciós és analitikai lehetőségekkel.

## Hogyan működik röviden

- **Térképezés:** a WordPress‑ben létrehozol egy ThriveCart Product bejegyzést, beírod a ThriveCart Product ID-t és hozzárendeled a kurzus(oka)t.
- **Átirányítás:** a kurzus hozzáférési módját “Closed”-ra állítod, a gomb URL‑jéhez a ThriveCart pénztár linkjét adod. A “Take this Course” gomb a pénztárra visz.
- **Eseménykezelés:** a ThriveCart a megadott Webhook URL‑re küld értesítéseket (vétel, visszatérítés, lemondás). A bővítmény a Secret Word alapján hitelesít, majd automatikusan beirat vagy eltávolít a kurzus(ok)ból.

```
Product ID példák:
- Alaptermék: 12345
- Order bump: bump-1
- Upsell: upsell-1
```

## Fő funkciók részletesen

- **Automatikus fiók- és beiratkozáskezelés:** ha a vásárló még nem létezik a WordPress‑eden, a bővítmény létrehozza a fiókját, és azonnal beiratja a megadott kurzusokra. Nincs kézi adminisztráció.
- **Kurzushozzárendelés termékhez (bundles):** egy ThriveCart termékhez több LearnDash kurzust is társíthatsz. Így kompletten értékesíthetsz “csomagokat”.
- **Rugalmas fizetési modellek:** egyszeri díj, előfizetés, próbaidő – mindaz, amit a ThriveCart kínál, a LearnDash hozzáférésekkel együtt működik.
- **Promóciók: kuponok, order bumpok, upsellek:** nagyobb kosárértékhez és jobb konverzióhoz. Fontos: minden bump/upsell variációhoz külön ThriveCart Product bejegyzést hozz létre a LearnDash‑ben, speciális Product ID jelöléssel (pl. “bump-1”, “upsell-1”).
- **Hozzáférés visszavonása:** visszatérítés vagy előfizetés lemondása esetén a rendszer automatikusan kiveszi a felhasználót a kurzusról.
- **Biztonságos kommunikáció:** a Webhook és a Secret Word együtt garantálja, hogy csak valós, hiteles tranzakciók alapján történjen be- és kiiratás.

## Gyakorlati példák

- **Egyetlen kurzus értékesítése:** a “Photoshop Alapok” kurzus gombja a ThriveCart pénztárra visz. Fizetés után a vásárló fiókot kap és azonnal hozzáfér a kurzushoz.
- **Kurzuscsomag:** egy termék alá társítod a “HTML Kezdő” és “CSS Kezdő” kurzusokat. Vételkor mindkettőhöz hozzáférést kap.
- **Előfizetés próbaidővel:** 7 napos próba, majd havi díj. Lemondáskor a rendszer automatikusan kiveszi a tanulót a kurzusokból.
- **Order bump upsell-lel:** a fő kurzus mellé bumpként felajánlasz egy mini‑kurzust, a fizetés után pedig egy teljes mesterkurzus upsellt. Mindegyikhez külön LearnDash ThriveCart Product bejegyzést készítesz, megfelelő Product ID‑vel.

## Telepítés és alapbeállítás – röviden

1. **Bővítmény telepítése:** LearnDash LMS > Add‑Ons > ThriveCart for LearnDash > Install, majd Activate; vagy kézi feltöltés a ZIP‑ből.
2. **ThriveCart termék létrehozása:** hozd létre a terméket és jegyezd fel a pénztár URL‑t és a Product ID‑t.
3. **LearnDash ThriveCart Product felvétele:** LearnDash LMS > ThriveCart > Add New; add meg a címet, a Product ID‑t és válaszd ki a kapcsolt kurzusokat.
4. **Webhook beállítás:** a LearnDash ThriveCart beállításoknál másold a Webhook URL‑t és add hozzá a ThriveCart felületén.
5. **Secret Word beállítás:** a ThriveCart felületén keresd meg a Secret Word értéket, és illeszd be a LearnDash ThriveCart beállításoknál.
6. **Kurzus gomb beállítása:** a kurzusnál állítsd az Access Mode‑ot “Closed”-ra, a Button URL‑hez pedig add meg a ThriveCart pénztár URL‑jét.

## Előnyök és értékajánlat

- **Magasabb konverzió:** modern pénztár, A/B tesztek és kosárelhagyás visszaszerzés beépítve.
- **Kevesebb kézi munka:** fiók- és jogosultságkezelés automatikusan, hibamentesen.
- **Rugalmas ajánlatok:** csomagok, kuponok, bumpok, upsellek – nagyobb bevétel ugyanannyi forgalomból.
- **WooCommerce nélkül:** gyorsabb bevezetés, kevesebb összetevő, egyszerűbb karbantartás.

## Kinek ajánlott?

- **Ajánlott neked, ha:**
  - 1–néhány kurzust árulsz és letisztult pénztárt szeretnél.
  - Fontos a konverzió, az analitika és az A/B tesztelés.
  - Csomagokkal, bumpokkal, upsellekkel növelnéd a kosárértéket.
- **Nem ideális, ha:**
  - Nagyon sok külön terméket/kurzust kezelsz egy helyen.
  - Extrém részletekig testreszabnád a beléptetési folyamatot.
  - Szűk a költségkeret (a ThriveCart külön, fizetős szolgáltatás).

## Hibakeresési tippek

- **Bump/upsell nem irat be?** Hozz létre külön ThriveCart Product bejegyzést a LearnDash‑ben, és használd a “bump-…” / “upsell-…” Product ID‑t.
- **Dupla naplóbejegyzés tranzakciónként?** Előfordulhat, ez várható működés és nem jelent dupla terhelést.
- **Nincs beiratás fizetés után?** Ellenőrizd a Webhook URL‑t és a Secret Word‑öt mindkét oldalon, valamint hogy a kurzus “Closed” és a Button URL a helyes pénztár link.
- **Előfizetés lemondásakor marad a hozzáférés?** Nézd meg, hogy a lemondási esemény ténylegesen megérkezik‑e a Webhookra és a Product ID helyesen van‑e társítva.

## Licencelés és ár

A kiegészítő a LearnDash részéről ingyenes. A ThriveCart használata külön, fizetős; általában nincs próbaverzió.