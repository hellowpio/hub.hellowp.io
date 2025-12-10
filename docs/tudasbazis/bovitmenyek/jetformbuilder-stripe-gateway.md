---
title: "JetFormBuilder Stripe Gateway"
description: "JetFormBuilder PRO kiegészítő Stripe Checkout-integrációval egyösszegű és előfizetéses fizetésekhez, webhookos szinkronnal és adminisztrációval."
sidebar_label: "JetFormBuilder Stripe Gateway"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder Stripe Gateway egy PRO kiegészítő, amellyel a JetFormBuilder (és JetEngine) űrlapjaidról közvetlenül fogadhatsz bankkártyás fizetéseket a Stripe-hostolt Checkouton keresztül. Nem kell webáruházat építened: űrlapból is eladhatsz termékeket, szolgáltatásokat vagy kezelhetsz **előfizetéseket**. A kártyaadatok a Stripe szerverein kerülnek feldolgozásra, így könnyebb a megfelelés és gyorsabb az indulás.

## Hogyan működik?

1. A látogató kitölti és beküldi az űrlapot.
2. A bővítmény létrehoz egy **Stripe Checkout Sessiont**, majd átirányít a Stripe fizetési oldalára (AJAX-alapú vagy oldalfrissítéses mód).
3. Fizetés után a Stripe visszairányít, és egy **webhook** eseménnyel véglegesíti a státuszt.
4. A JetFormBuilder **Action Events** alapján futtatja az utófeldolgozást: külön ágon a sikeres (GATEWAY.SUCCESS) és a sikertelen (GATEWAY.FAILED) kimenetet.

A megoldás támogatja az egyszeri és az **ismétlődő** díjazást (havi/éves vagy egyedi időközök), miközben a fizetési felületet a Stripe biztosítja.

## Fő funkciók, érthetően

- **Stripe Checkout integráció és webhook-szinkron**  
  Automatikusan létrehozza a fizetési Sessiont, átirányít a Stripe oldalára, majd webhookkal visszaigazolja az eredményt. Így akkor is pontos lesz a státusz, ha a felhasználó nem tér vissza a “Siker” oldalra.

- **Egyösszegű és előfizetéses fizetések**  
  Fix díjakat és **Subscriptions** alapon ismétlődő terheléseket is kezel. Időközök: havi, éves vagy egyedileg beállított.

- **AJAX-os átirányítás**  
  Gyors, reszponzív élmény: beküldés után felhasználóbarát módon ugrik a Checkoutra. Szükség esetén választhatsz oldal-újratöltéses módot is.

- **Action Events a fizetés előtt/után**  
  Külön folyamatokat köthetsz a sikeres és sikertelen kimenetre: e-mail küldés, bejegyzés létrehozása, átirányítás, CRM-be írás stb.

- **Előfizetés-kezelés a WordPress adminban**  
  Átláthatod a státuszokat, megújításokat, és egy kattintással **szüneteltetheted** vagy **leállíthatod** az előfizetést.

- **Visszatérítés indítása WordPress-ből**  
  Refundot adhatsz közvetlenül az adminfelületről; a Stripe-ben automatikusan lefut, a státusz kétirányúan szinkronban marad.

- **Tesztmód és többkörnyezetes kulcskezelés**  
  Használhatsz **tesztkulcsokat és tesztkártyákat**; API-kulcsokat adhatsz meg globálisan vagy **űrlapszinten** (hasznos több brand vagy staging esetén).

- **Pénznem és dinamikus árazás**  
  Választhatsz Stripe által támogatott pénznemet, és az árat űrlapmezőkből (pl. csomagválasztó) **dinamikusan** képezheted.

- **Testreszabható üzenetek és makrók**  
  A siker/hiba üzenetekben makrókat használhatsz, például: `%gateway_amount%`, `%gateway_status%`, `%field_name%`.

Példa üzenetsablon:
```
Köszönjük a rendelést!
Fizetés státusza: %gateway_status%
Összeg: %gateway_amount%
Csomag: %field_package%
```

## Gyakorlati példák

- **Online kurzus előfizetés**  
  Havi díjas űrlap: a “Csomag” legördülőből kiválasztott opció alapján állítod az árat és az időközt. Sikeres fizetéskor GATEWAY.SUCCESS → tanulói hozzáférés aktiválása és visszaigazoló e-mail.

- **Egyszeri szolgáltatás díja**  
  Ajánlatkérő űrlap végén “Fizetés most” gomb: a kalkulált összeg alapján egyszeri Stripe Checkout. Siker esetén számlaadatok rögzítése és köszönő oldal.

- **Ismétlődő adományok**  
  Rádiógombokkal havi/éves opciók; a visszatérő támogatás a Stripe-ben fut, a megújítások állapota a WP adminban látható.

- **Foglalás/jegyértékesítés**  
  Időpont és darabszám mezők alapján számolt végösszeg; sikeres fizetés után automatikus visszaigazolás és helyfoglalás.

## Telepítés és alapbeállítás

1. JetFormBuilder > Addons: telepítsd és aktiváld a Stripe Payments kiegészítőt.  
2. JetFormBuilder > Settings > Payment Gateways: add meg a **Publishable** és **Secret** kulcsokat, engedélyezd a Stripe Gateway-t, szükség esetén kapcsold be a **Test Mode**-ot.  
3. Űrlapszerkesztő > Gateways Settings: válaszd a **Stripe Checkout**-ot, állítsd be a pénznemet, az árazást (mezőkből is), a siker/hiba üzeneteket, és rendeld hozzá az **Action Events**-eket (GATEWAY.SUCCESS / GATEWAY.FAILED).  
4. Állíts be **webhookot** a megbízható státusz-szinkronhoz.  
5. Ajánlott az **AJAX beküldés** az űrlaphoz.

## Rendszerkövetelmények és bevált gyakorlatok

- Aktív JetFormBuilder és a Stripe Payments & Subscriptions PRO addon.  
- Stripe fiók és érvényes API-kulcsok.  
- HTTPS használata a Checkout és webhookok megbízható működéséhez.  
- Webhook beállítása a végleges fizetési állapothoz.  
- Teszteld teljes folyamatban (tesztkártyákkal), mielőtt élesíted.

## WooCommerce-kapcsolat (alternatíva)

Ha már a WooCommerce checkoutot és annak kapuit használod, a JetFormBuilder külön cselekvénnyel az űrlap adatait a WooCommerce-nek adhatja át, és ott történik a fizetés. Ez jó választás, ha mindent a WooCommerce-ben akarsz központosítani.

## Előnyök és értékajánlat

- **Gyors indulás, bolt nélkül**: űrlapról értékesítesz, nincs szükség teljes webshopra.  
- **PCI-komfort**: a kártyaadatok a Stripe-nél maradnak.  
- **Teljes előfizetés-ciklus kezelése** WordPress-ből.  
- **Kevesebb manuális munka**: webhookos szinkron, egykattintásos refund.  
- **Rugalmas árazás és több pénznem**: skálázható több márkára és környezetre.

## Kinek ajánlott?

- **Képzésszervezők és tagsági oldalak**: ismétlődő díjak, hozzáférés-automatizálás.  
- **Szolgáltatók és ügynökségek**: ajánlat → fizetés → teljesítés egy űrlapfolyamatban.  
- **Nonprofitok**: rendszeres adományok egyszerű kezelése.  
- **Rendezvényszervezők**: jegy/foglalás űrlapról, azonnali fizetéssel.  
- **Fejlesztők/üzemeltetők**: stabil webhook-szinkron, testmód, többkörnyezetes kulcsok.

Ezzel a kiegészítővel pontosan azt kapod, amire egy modern, űrlap-alapú fizetési folyamathoz szükséged van: megbízható Stripe Checkout, előfizetés-kezelés, rugalmas automatizmusok és tiszta adminisztráció – WooCommerce nélkül is.