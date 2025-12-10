---
title: "WooCommerce Sequential Order Numbers Pro"
description: "WooCommerce-rendelésekhez folyamatos, testreszabható sorszámokat ad előtaggal/utótaggal, dátummintákkal és fix hosszúsággal; megfeleléshez és integrációkhoz ideális."
sidebar_label: "WooCommerce Sequential Order Numbers Pro"
---

## Mi ez és milyen problémát old meg?

A WooCommerce alapból a belső WordPress poszt-ID-t használja rendelési számnak, ami nem folyamatos és sokszor “ugrál”. A Sequential Order Numbers Pro ezt oldja meg: minden rendeléshez egy **folyamatosan növekvő, tetszőlegesen formázható rendelési sorszámot** ad, így a rendeléseid könnyen követhetők, beszámolhatók és kommunikálhatók. A megjelenített sorszám elkülönül a belső rendelés-ID-től, tehát az admin URL-ek és a háttérfolyamatok nem változnak.

## Hogyan működik röviden?

Aktiválás után azonnal sorszámoz: üres boltban 1-től indul, meglévő boltban a legnagyobb eddigi szám után folytatja. A testreszabást a WooCommerce beállításokban éred el (General > Order Numbers): **kezdő szám**, **előtag/utótag**, **fix hossz**, dátum/idő elemek és **ingyenes rendelések külön számozása**.

## Fő funkciók, részletesen

- **Folyamatos sorszámozás:** Minden új rendelés egy egyértelműen növekvő sorszámot kap. Ez megszünteti a poszt-ID miatt tapasztalt kihagyásokat.
- **Kezdő sorszám:** Beállíthatod, honnan induljon a számozás. Fontos: mindig a legnagyobb meglévő szám fölé állítsd, visszamenőleg nem módosít.
- **Előtag/utótag + dátumminták:** Adj könnyen érthető kontextust (pl. év, csatorna, régió). Használható minták: például `{YYYY}{MM}{DD}`, `{HH}{N}{S}`. A sorszám a prefix és suffix között helyezkedik el.
- **Fix hossz és nullázás:** Meghatározhatod a sorszám számjegyhosszát; a rendszer balról nullákkal tölti fel (pl. 000123).
- **Ingyenes rendelések külön számozása:** A 0 összegű rendelések kivehetők a “fizetett” sorozatból, és kaphatnak külön előtagot (pl. FREE-) és saját számozást.
- **Kompatibilitás a modern WooCommerce-funkciókkal:** Használható a Cart & Checkout Blocks és a High-Performance Order Storage mellett.
- **Performance mode:** Nagy forgalmú vagy erőforrásszegény környezetben csökkenti a terhelést; nem “tölti vissza” a törölt utolsó sorszámokat.

## Gyakorlati példák

- **Könyvelési megfelelés:** Az év elején beállítod a prefixet “2025-”-re, a hossz 6 számjegy, így ilyen kimenetet kapsz: 2025-000001, 2025-000002, … Az ingyenes próbák FREE- előtaggal külön sorozatban futnak.
- **Ügyfélszolgálat és raktár:** Régiók szerinti előtag: EU-, US-, HU-. A központi raktár így egyértelmű, rövid azonosítókkal dolgozik.
- **Integrációk:** Számlázó/ERP rendszerek felé egységes, szabályos sorszám megy, elkerülve a poszt-ID okozta inkonzisztenciát.

## Beállítás minták

- Prefix példák:
  - Éves bontás: `ORD-{YYYY}-` (a `{YYYY}` helyére az év kerül)
  - Csatorna jelölés: `WEB-` vagy `POS-`
  - Régió: `EU-` vagy `HU-`

- Suffix példák:
  - B2B jelölés: `-B2B`
  - Kampánykód: `-BF`

- Fix hossz:
  - Hossz: 5 → 00001, 00002, …

Egy gyakori beállítás:
- Prefix: `WT-{YYYY}{MM}{DD}-`
- Hossz: `5`
- Suffix: üres
Kimenet: WT-20250115-00001

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt a WordPress adminban.
2. Lépj a WooCommerce beállításokhoz, és keresd az Order Numbers szekciót.
3. Állítsd be a kezdő számot, a prefix/suffix sablont, a hosszot, és döntsd el, kihagyod-e az ingyenes rendeléseket a fő sorozatból.
4. Mentsd a beállításokat – azonnal élnek.

## Fejlesztőknek

- A megjelenített rendelési számhoz mindig a következőt használd, ne a belső post ID-t:
```php
$order_number = $order->get_order_number();
```

- Keresés megjelenített sorszám alapján:
```php
$order = wc_seq_order_number_pro()->find_order_by_order_number( 'WT-20250115-00001' );
```

- Performance mode bekapcsolása (példa):
```php
add_filter( 'wc_seq_order_number_pro_performance_mode', '__return_true' );
```

Megjegyzés: az admin URL-ek továbbra is a belső rendelés-ID-t használják; ez nem változik. HPOS alatt a rendeléskeresés viselkedése az admin felület képességeitől függ.

## Előnyök és értékajánlat

- **Megfelelőség:** Folyamatos, auditálható számozás, a 0 értékű rendelések külön kezelése.
- **Átláthatóság:** Rövid, jól kommunikálható azonosítók ügyfélszolgálatnak és raktárnak.
- **Integrálhatóság:** Stabil sorszámok külső rendszerek felé.
- **Idő- és hibamegtakarítás:** Kevesebb félreértés, egyszerűbb riportolás, gyorsabb ügyintézés.
- **Skálázhatóság:** Nagy forgalom mellett is hatékony, performance móddal optimalizálható.

## Kinek ajánlott?

- **Könyvelési/jogi megfelelést** megkövetelő vállalkozásoknak.
- **B2B és több csatornás** kereskedőknek, ahol a formátum vállalati szabvány.
- **Integrációt** használó boltoknak (számlázó, ERP, logisztika).
- **Nagy forgalmú** áruházaknak, ahol a stabil teljesítmény elsődleges.

## Ismert megjegyzések és korlátok

- A **kezdő sorszámot** mindig a legnagyobb meglévő sorszám fölé állítsd; visszamenőleg nem változtat.
- A sorszám **formátumát** megváltoztatva a meglévő rendelések korábbi formátuma nem alakul át.
- **Ingyenes rendelések** külön sorozatba szervezése befolyásolja a fő számozás folytonosságát (szándékosan).
- Bizonyos **fizetési megoldásoknál** (pl. mobilfizetési gyorsgombok) előfordulhat, hogy a formázott sorszám nem minden ponton jelenik meg azonnal.
- Performance módban a **törölt sorszámok** nem kerülnek visszaosztásra, ami egyes jogszabályi környezetekben előny (nincs “lyukkitöltés”).