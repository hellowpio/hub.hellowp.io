---
title: "WooCommerce Conditional Shipping and Payments"
description: "Hivatalos Woo-bővítmény, amellyel feltételes szabályokkal korlátozhatod a fizetési módokat, a szállítási opciókat és a szállítási célországokat/államokat."
sidebar_label: "WooCommerce Conditional Shipping and Payments"
---

## Mi ez és milyen problémát old meg?

A Conditional Shipping and Payments egy hivatalos Woo-kiegészítő, amellyel pontos szabályok alapján elrejtheted vagy letilthatod a nem kívánt fizetési és szállítási opciókat, illetve korlátozhatod, hová szállíthatsz. Így a vásárlóid csak a szabályaidnak megfelelő lehetőségeket látják, csökken a hibázás, az elakadás és a support-terhelés – miközben könnyebben megfelelsz jogszabályoknak és szolgáltatói előírásoknak.

## Hogyan működik?

Két szinten állíthatsz be restrikciókat:
- **Globális szabályok**: a teljes boltra érvényesek a WooCommerce > Settings > Restrictions menüben.
- **Termék-szintű szabályok**: egy konkrét termék szerkesztésénél a Product Data > Restrictions fülön.

Minden restrikció tartalmaz:
- egy rövid leírást (mit és miért tiltunk),
- egy vagy több feltételt. A restrikció akkor lép életbe, ha az összes feltétel teljesül. Több szabály kombinálásával OR logikát is építhetsz.

### Restrikciótípusok

- **Payment Gateways**: egyes fizetési átjárók elrejtése vagy megjelenítése „tiltó” üzenettel.
- **Shipping Methods**: szállítási módok/ráták elrejtése; külső futár-API-k élő díjai azonosító alapján is kizárhatók.
- **Shipping Destinations**: országok/államok tiltása feltételekhez kötve.

### Feltételrendszer (példák)

- **Címadatok**: számlázási/szállítási ország, állam/régió, irányítószám.
- **Kosár és csomag**: tételszám, összeg (subtotal/total), csomagsúly.
- **Tartalom**: konkrét termék, kategória, shipping class, előrendelés/backorder jelenléte.
- **Vásárló**: felhasználói szerepkör, e‑mail, tagság.
- **Tranzakció-környezet**: kupon, pénznem, kiválasztott szállítás, előfizetéses vásárlás/megújítás.

### Üzenetek és UX

- **Show Excluded**: a tiltott opció megjelenhet magyarázó üzenettel (validációs vagy statikus). Az üzenetszöveg testreszabható, helyettesítő címkékkel is, például `{excluded_gateway}`. Megjegyzés: statikus üzenetek a Checkout Blockban nem jelennek meg.

### Teljesítmény és kompatibilitás

Nagy forgalmú boltokhoz készült, HPOS-kompatibilis, és működik a Cart/Checkout blokkokkal. Számos Woo-bővítménnyel integrálható (például Subscriptions, Memberships, Gift Cards, WooPayments, többpénznem-kezelők).

## Gyakorlati példák

- **Ingyenes szállítás feltételekkel**: csak bizonyos kategóriákra és/vagy meghatározott kosárösszeg felett legyen elérhető.
- **COD tiltása**: adott országokra/államokra vagy irányítószám-tartományokra, illetve ha a választott szállítás nem kínál nyomon követést.
- **Külpiacok kizárása**: hűtést igénylő vagy veszélyes áruk esetén letiltod az exportot.
- **Élő díjak szűrése**: bizonyos futárszolgáltatások rátáit kizárod azonosító alapján.
- **Fizetés szerepkör/tagság szerint**: bizonyos átjárókat csak tagoknak vagy nagyker felhasználóknak engedélyezel; kupon használatakor elrejtesz egy átjárót.

Példa egy szabályra (pszeudó):

```
Restriction: Tiltom a COD-ot távoli és nehéz küldeményeknél
Type: Payment Gateways → Hide "Cash on Delivery"
Conditions:
  - Shipping Postcode in [9400-9499, 9900-9999]
  - Cart Weight > 2 kg
  - Contains Category = "Fresh"
```

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt, majd kapcsold össze a Woo-előfizetéseddel.
2. Menj a WooCommerce > Settings > Restrictions részhez.
3. Válaszd ki a típust (Payment Gateways / Shipping Methods / Shipping Destinations), majd kattints az Add Restriction gombra.
4. Adj rövid leírást, válaszd ki a tiltandó elemeket, állítsd be a feltételeket, és opcionálisan kapcsold be a Show Excluded üzeneteket.
5. Termék-specifikus szabályhoz nyisd meg a terméket, és a Product Data > Restrictions fülön add hozzá a szükséges korlátozásokat.

Élő futárdíjak kizárásához használd a díjak azonosítóit (Rate IDs). Ezeket a böngésző fejlesztői eszközeivel azonosíthatod a díjlistázásnál.

## Megkötések és tippek

- **Nem hoz létre új szállítási módokat**: csak meglévő módszereket/rátákat tilthatsz vagy rejthetsz el.
- **Fizetés→szállítás irányú korlátozás**: a WooCommerce folyamat miatt nem támogatott, mert a checkout előbb a szállítást frissíti, aztán a fizetést.
- **Checkout Block üzenetek**: statikus tiltó üzenetek ott nem jelennek meg; a validációs megközelítés használható.
- **Hibakeresés**: kapcsold be a Show Excluded és a Debug módot; a „tévesen látható” opciók gyakran zónabeállítási vagy más bővítménnyel való ütközésből erednek.
- **Ne keverd** hasonló nevű, ingyenes pluginekkel; ez a hivatalos Woo-kiegészítő, eltérő funkciókészlettel.

## Kinek ajánlott?

- Olyan boltoknak, ahol több szállítási és fizetési opció van, és ezeket üzleti, jogi vagy szolgáltatói szabályok szerint kell szűrni.
- Előfizetéses, tagság-alapú, B2B vagy nagyker webáruházaknak, ahol felhasználói szerepkör vagy tagság szerint differenciálsz.
- Nemzetközi kereskedőknek, akik terméktípus vagy régió alapján szeretnének célzott kizárásokat.

## Miért éri meg?

- **Kevesebb elakadás a checkouton**: a vásárló csak releváns opciókat lát.
- **Megfelelés és kockázatcsökkentés**: könnyebb betartani a jogszabályokat és a szolgáltatói feltételeket.
- **Átlátható szabálykezelés**: egy központi felületen, kódolás nélkül, globális és termék-szinten is.
- **Idő- és költségmegtakarítás**: kiváltja a házi kódrészleteket és több apró plugint.

## Mikor ezt, mikor mást?

- **Conditional Shipping and Payments**: meglévő szállítási/fizetési opciók feltételes engedélyezése/tiltása és szállítási célok korlátozása.
- **Table Rate Shipping**: saját, szabályalapú díjtáblák készítése szállítási zónákhoz. Gyakran egymás mellett használják: a Table Rate számol, a Conditional pedig szűr.