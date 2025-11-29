---
title: "WooCommerce Min/Max Quantities"
description: "Hivatalos WooCommerce bővítmény a minimum/maximum mennyiségi és értékhatárok, valamint az „X-sével vásárolható” szabályok beállításához termék-, kategória- és rendelés-szinten."
sidebar_label: "WooCommerce Min/Max Quantities"
---

## Mi ez és milyen problémát old meg?

A Min/Max Quantities a WooCommerce hivatalos (prémium) kiegészítője. Segítségével pontos kereteket adhatsz a vásárlásnak: meghatározhatod a minimális és maximális mennyiséget, az „X-sével vásárolható” (többszörös) szabályt, illetve rendelés-szintű mennyiségi és értékhatárokat. Ezzel elkerülheted a gazdaságtalan, túl kicsi kosarakat, szabályozhatod a készletek kivezetését, illetve megfelelhetsz csomagolási és logisztikai követelményeknek. A szabályok a termékoldalon, a kosárban és a pénztárban is érvényesülnek, egyértelmű figyelmeztetésekkel.

## Fő funkciók és működés

### Termék-szintű szabályok
- Minden terméknél beállíthatod a **Minimum quantity**, **Maximum quantity** és **Group of** értékeket.
- A **Group of** a lépésköz: például 6-osával vásárolható üveg, vagy csak 5-ös csomagban leadható rendelés.
- Termékenként ki is zárhatod az öröklődő kategória- és rendelés-szintű szabályokat.

### Variációk és Combine Variations
- A **Combine Variations** opcióval választhatod, hogy a mennyiségi szabályok a kosárban a variációk együttes darabszámára vonatkozzanak (pl. 2 piros + 3 kék = 5), vagy variációnként külön-külön érvényesüljenek.
- Ha nem kombinálsz, variációnként egyedi min/max/group szabályokat is megadhatsz.

### Kategória-szintű szabályok
- Kategóriánként is meghatározhatsz **minimum**, **maximum** és **Group of** szabályokat.
- A termékek ezeket alapértelmezetten öröklik, kivéve, ha egy terméknél felülírod az adott szabályt, vagy kifejezetten kizárod az öröklődést.

### Rendelés-szintű korlátok
- Beállíthatod a teljes rendelésre vonatkozó **minimális** és **maximális tételszámot** (Order Quantity), valamint **minimális** és **maximális rendelésértéket** (Order Value).
- Egyes termékeket mentesíthetsz ezen rendelés-szintű korlátok alól.

### Prioritás és öröklődés
- A **termék-szintű** beállítás felülírja az azonos típusú **kategória-szintű** szabályt.
- Különböző típusú szabályok kombinálódhatnak (pl. termék-szintű minimum + kategória-szintű maximum).
- Finomhangoláshoz használhatod az „Exclude from” jelölőket, hogy egy termék ne örököljön adott kategória- vagy rendelési szabályt.

### Admin és vásárlói élmény
- A szabályok a termékoldalon, a kosárban és a pénztárban érvényesülnek, a WooCommerce szokásos értesítéseivel jelezve az eltéréseket.
- A bővítmény alkalmas készletoptimalizálásra: segít elkerülni az alul- és túlkészletezést, és csökkenti a komissiózási hibákat.

### Kompatibilitás és hozzáférhetőség
- Támogatja a Blocks alapú kosarat és pénztárt, valamint a HPOS rendeléstárolást.
- Hozzáférhetőségi megfelelőségi jelentés érhető el, ami hasznos vállalati/közintézményi környezetben.

## Gyakorlati példák

- B2B MOQ: csak akkor engedsz rendelést, ha a kosár értéke elér egy minimum összeget, vagy a darabszám egy meghatározott küszöböt.
- Csomagolás: borok csak **6-osával** vásárolhatók; a rendszer nem enged 7 vagy 11 darabot.
- Limitált termék: maximum 2 darab vevőnként a készlet igazságos elosztásáért.
- Kategória-követelmény: az „Italok” kategóriából legalább 6 palackot kell a kosárban tartani, függetlenül a márkáktól.
- Variációk összevonása: egy pólómodell különböző színeiből összesen legfeljebb 10 darab rendelhető.

## Beállítási útmutató (gyors)

- Termék: Product Data > General > Quantity Rules – állítsd a Minimum, Maximum és Group of értékeket; szükség esetén kapcsold be az „Exclude from” opciókat.
- Variáció: Product Data > Variations – adj meg variációnként egyedi szabályokat (ha a kombinálás ki van kapcsolva).
- Kategória: Products > Categories – szerkesztéskor add meg a kategória Minimum/Maximum/Group of mezőit.
- Rendelés-szint: WooCommerce > Settings > Products > General – állítsd be az Order Quantity és Order Value minimum/maximum értékeit.

## REST API röviden

A bővítmény kiterjeszti a termékek és variációk REST adatait és írását. Elérhetők többek között ezek a tulajdonságok:  
- **min_quantity**, **max_quantity**, **group_of_quantity**  
- **exclude_order_quantity_value_rules**, **exclude_category_quantity_rules**  
- **combine_variations**

Helytelen adatok esetén egyértelmű REST hibakódokkal tér vissza (pl. érvénytelen minimum vagy maximum).

Példa frissítési payload:

```
{
  "min_quantity": 6,
  "max_quantity": 24,
  "group_of_quantity": 6,
  "exclude_order_quantity_value_rules": false,
  "exclude_category_quantity_rules": false,
  "combine_variations": true
}
```

## Kinek ajánlott és miért?

- **B2B kereskedők és nagykereskedések**: MOQ és csomagkövetelmények kikényszerítése.
- **Ital-, élelmiszer- és FMCG-webshopok**: csomagméretek, kartonok kezelése.
- **Limitált vagy promóciós termékeket** árusítók: mennyiségi visszaélések megelőzése.
- **Saját logisztikával dolgozók**: csökkenő komissiózási hibák és stabilabb kiszállítás.

## Előnyök összefoglalva

- **Költségcsökkentés**: kevesebb gazdaságtalan, kisméretű rendelés.
- **Készletkontroll**: elkerülhető a túlvásárlás és a készlethiány.
- **Jobb UX**: egyértelmű visszajelzések a vásárlónak már a kosárban.
- **Rugalmasság**: szabályok termék-, variáció-, kategória- és rendelés-szinten, finom kizárásokkal.
- **Automatizálhatóság**: REST API-val tömeges beállítások és integrációk.