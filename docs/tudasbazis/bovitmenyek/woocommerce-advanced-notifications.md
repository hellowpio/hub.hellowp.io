---
title: "WooCommerce Advanced Notifications"
description: "Szerepkör- és termékalapú e‑mail értesítések WooCommerce‑ben: a megfelelő partnereknek küldött, célzott rendelési és készletinformációk, finoman szabályozható tartalommal."
sidebar_label: "WooCommerce Advanced Notifications"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Advanced Notifications egy hivatalos, fizetős kiegészítő, amellyel nem csak te (admin), hanem további, belső vagy külső címzettek is automatikusan megkapják a rájuk vonatkozó rendelési és készletértesítéseket. Ezzel megszűnik a manuális továbbítás, csökken a hibázás esélye, és minden érintett pontosan azt az információt kapja, amire szüksége van (raktár, beszállító, dropshipper, pénzügy).

## Fő funkciók, és hogyan működnek

### Több címzett, finom jogosítással
- Korlátlan számú **Recipient** (címzett) hozható létre névvel és e‑mail címmel. Több e‑mail is megadható, vesszővel elválasztva:
```
raktar@ceg.hu, beszallito@partner.hu, fulfillment@3pl.hu
```
- Opcionálisan rögzíthetsz telefonszámot és címet is (adminisztratív célra; a küldést a bővítmény nem ezekre használja).

### Választható értesítéstípusok
- **Purchase (új vásárlások/rendelések)** – a rendelés feldolgozása során.
- **Low stock (alacsony készlet)** – jelzés utánpótláshoz.
- **Out of stock (készlethiány)** – kifogyáskor azonnali figyelmeztetés.
- **Backorders (visszarendelés)** – ha a termék visszarendelhető.
- **Refunds (visszatérítések)** – jóváírásokról szóló értesítés.
- **On hold** rendelés – opcionálisan, fejlesztői szűrővel engedélyezhető.

Minden címzettnél külön kapcsolhatod, hogy mely típusokról kapjon e‑mailt.

### Célzott triggerek: ki mit lásson?
- **Globális**: a címzett minden új vásárlásról kap értesítést.
- **Kategória alapú**: csak meghatározott termékkategóriák érintsék.
- **Szállítási osztály**: logisztikai logika szerint (pl. törékeny, túlméretes).
- **Per‑product**: termékszinten hozzárendelheted, ki kapjon értesítést az adott cikknél.

Így ugyanabból a rendelésből a raktár csak a raktárra tartozó tételeket kapja, a beszállító pedig csak a saját cikkeit.

### E‑mail tartalom és formátum
- **HTML vagy plain text** e‑mail.
- **Összes tétel** vagy csak a **triggerelt termékek** listázása.
- **Árak és végösszegek** megjelenítése kapcsolható – akár teljesen el is rejtheted (pl. beszállítónak nem mutatsz árakat).

Ez támogatja az adatminimalizálást és az üzleti titok védelmét: a címzett nem látja a számára irreleváns rendelésrészeket.

## Gyakorlati példák

- **Több raktár / több beszállító**: A “Bútor” kategóriát a bútorraktár, a “Lámpa” kategóriát a világítástechnikai beszállító kapja. Mindkettő ugyanabból a rendelésből csak a saját tételeit látja.
- **Dropshipping**: A dropshipper automatikus e‑mailt kap a hozzá tartozó termékekről, árak és végösszeg nélkül, kizárólag a teljesítéshez szükséges adatokkal.
- **Készletutánpótlás**: Alacsony készlet és kifogyás értesítések közvetlenül mennek a beszállítónak, így gyorsul a beszerzés.
- **Pénzügy**: Refunds értesítés a könyvelésnek, hogy a jóváírások rögtön könyvelhetők legyenek.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Nem kell manuálisan továbbküldeni rendeléseket; a rendszer célzottan értesít.
- **Kevesebb hiba**: A megfelelő információ a megfelelő személyhez érkezik, automatikusan.
- **Adatminimalizálás**: Csak a releváns termékek és adatok jelennek meg egy címzettnek.
- **Skálázhatóság**: Új partnert, raktárt, dropshippert egyszerűen hozzáadhatsz, saját szabályokkal.
- **Rugalmas testreszabás**: E‑mail formátum, tartalom, sablonok és triggerek pontosan finomhangolhatók.

## Kinek ajánlott?

- **Több beszállítós** vagy **több raktáras** webáruházaknak.
- **Dropshipping** modellel működőknek.
- **3PL/fulfillment** partnert használóknak.
- **Közepes és nagy** forgalmú shopoknak, ahol a manuális továbbítás már szűk keresztmetszet.
- **Pénzügyi/operatív csapatoknak**, ahol fontos a gyors, célzott értesítés.

## Beállítási áttekintés

1. Menj a WooCommerce → **Notifications** menübe, és hozz létre új **Notification** bejegyzést.
2. Add meg a címzett(ek) nevét és e‑mail címét (több cím vesszővel elválasztva).
3. Kapcsold be a kívánt **értesítéstípusokat** (Purchase, Low stock, Out of stock, Backorders, Refunds; “On hold” fejlesztői szűrővel).
4. Válaszd ki a **célozást**: globális, kategória, szállítási osztály, vagy termékszinten per‑product hozzárendelés.
5. Állítsd be az **e‑mail formátumot** (HTML/plain) és a **tartalmat** (összes tétel vs. csak triggerelt; árak és végösszeg mutatása vagy elrejtése).
6. Mentsd a beállítást; az értesítések onnantól automatikusan mennek.

Megjegyzés: az “On hold” rendelés értesítés alapból nem aktív; fejlesztői szűrővel engedélyezhető, ha erre az állapotra is szeretnél purchase értesítést.

## Sablonok testreszabása

A bővítmény külön e‑mail sablonokat használ, melyeket a témádban felüldefiniálhatsz. Helyezd el az alábbi fájlokat a megadott útvonalra:

```
yourtheme/woocommerce-advanced-notifications/new-order.php
yourtheme/woocommerce-advanced-notifications/new-order-plain.php
yourtheme/woocommerce-advanced-notifications/refunds.php
yourtheme/woocommerce-advanced-notifications/refunds-plain.php
```

Így teljes kontrollod van a megjelenés és a tartalom felett.

## Kompatibilitás, licenc, támogatás

- Hivatalos kiegészítő, aktív fejlesztéssel és ügyféltámogatással.
- Támogatja a **HPOS** (High‑Performance Order Storage) rendszert, valamint kompatibilis a **Cart & Checkout Blocks** megoldásokkal.
- A pontos rendszerkövetelmények és előfizetési feltételek a piactéren érhetők el.

## Korlátok és megfontolások

- Az értesítések **e‑mail alapúak**; SMS/push nincs natívan. ERP/automatizálásokhoz külső integráció szükséges.
- Az “On hold” értesítés **nem aktív alapból**; fejlesztői szűrővel kapcsolható.
- A címzettnél megadott telefon és cím **adminisztratív mezők**; a küldéshez nem használja a bővítmény.

---

Röviden: a WooCommerce Advanced Notifications egy skálázható, szerepkör‑ és termékalapú értesítési rendszer, amivel a partnereid mindig időben és célzottan kapják meg a számukra releváns rendelési és készletinformációkat.