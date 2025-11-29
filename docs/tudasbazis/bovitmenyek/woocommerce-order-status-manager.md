---
title: "WooCommerce Order Status Manager"
description: "Egyedi rendelési státuszok létrehozása és kezelése WooCommerce-ben, műveletgombokkal, e-mailekkel és riporttámogatással."
sidebar_label: "WooCommerce Order Status Manager"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Order Status Manager egy hivatalos kiegészítő, amellyel teljesen **egyedi rendelési státuszokat** hozhatsz létre és illeszthetsz a boltod valós munkafolyamatához. Ha a gyári státuszok (pending/processing/completed) nem fedik le a folyamataidat (pl. Gyártás alatt, Minőség-ellenőrzés, Csomagolás), ezzel a bővítménnyel pontosan azt a lépéssort építheted fel, amit a csapat ténylegesen követ, és erről a vevőket is egyértelműen tájékoztathatod.

## Fő funkciók és működés

### Egyedi státuszok

- Hozz létre, szerkessz, törölj státuszokat: **név, slug, leírás, szín, ikon (Dashicons)** és műveletgomb ikon megadásával.
- Az admin felületen drag & drop módszerrel **átrendezheted** a státuszokat, hogy logikusan kövessék egymást.

Mit jelent ez a gyakorlatban? A státuszaid vizuálisan és elnevezésben is illeszkednek a saját folyamataidhoz, így a csapat egy pillantással érti, hol tart egy rendelés.

### Következő státuszok és tömeges műveletek

- Állíts be **„Next Statuses”** listát minden státuszhoz. A rendeléslistában ezekből egykattintásos műveletgombok jelennek meg, így gyorsan léptetheted a rendeléseket.
- Engedélyezd a **Bulk Actions** használatát, hogy egyszerre sok rendelést tudd áttenni az új állapotba.

Ezzel jelentősen csökken az adminisztrációs idő és a hibalehetőség: a csapatod mindig a megfelelő következő lépésre tud ugrani.

### Fizetési viselkedés

Minden egyedi státuszhoz kiválaszthatod a viselkedést:
- **Fizetve**: úgy működik, mint a processing/completed; a vevő hozzáférhet letöltésekhez, és bizonyos megjegyzések láthatóvá válhatnak.
- **Fizetést igényel**: a vevő fiókjában **Pay/Cancel** linkek jelennek meg.
- **Egyik sem**: hasonló az on-hold/refunded jelleghez.

Ez azért hasznos, mert finoman szabályozhatod, mikor kérsz még fizetést, mikor engedsz hozzáférést, és mikor csak belső lépés történik.

### Ügyfélkommunikáció: leírások és e-mailek

- A státuszok **leírása** megjelenhet a vevő felületén (View Order, Recent Orders) tooltipként, így a vásárló is érti, mit jelent az adott egyedi állapot.
- Állíts be **egyedi e-maileket**: lehetnek admin vagy vevő típusúak, és rugalmasan **triggerezhetők** (bármely → adott státusz, adott → bármely, vagy konkrét → konkrét).

A célzott értesítések átláthatóvá teszik a folyamatot, csökkentik a support-terhelést.

### Riportok és import

- Kapcsold be az **Include in Reports** opciót, hogy az adott státuszú rendelések bekerüljenek az értékesítési kimutatásokba.
- Már meglévő (kóddal vagy más bővítménnyel létrehozott) egyedi státuszokat **importálhatsz**, és egységesen kezelheted őket itt.

### Core státuszok és törlés biztonságosan

- A gyári WooCommerce státuszok elnevezése szerkeszthető, és rendelhetsz hozzájuk **Next Statuses**-t, de törölni és a slugjukat módosítani nem lehet (kompatibilitási okok).
- Ha egy egyedi státuszt törölsz, a bővítmény felajánlja a **rendelések biztonságos áthelyezését** másik státuszba vagy „On hold”-ra, és **jegyzetet** fűz minden érintett rendeléshez.

### Fordítás

- Fordítható többnyelvű bővítményekkel, vagy dedikált **szűrőkkel** a státusznév és -leírás módosítására.

## Gyakorlati példák

- Gyártás: Pending → Fizetve (előleg) → **Gyártás alatt** → **Minőség-ellenőrzés** → **Csomagolás** → Completed. A „Next Status” gombokkal a raktár/pick-pack csapat egy kattintással léptet.
- Előfizetés/előrendelés: **Requires payment** státuszban a vevő látja a Pay/Cancel linkeket, amíg nem teljesíti a fizetést.
- Visszaküldés: **Visszaküldés ellenőrzés alatt** státuszhoz ügyféltájékoztató e-mail és tooltip tartozik; a riportokba nem kerül be (csak belső folyamat).

## Telepítés és beállítás lépései

1. Telepítsd a bővítményt ZIP-ből, majd aktiváld.
2. Lépj a WooCommerce beállításoknál az **Order Statuses** menübe.
3. Hozz létre új státuszt: név, slug, leírás, szín, ikon, **Next Statuses**, jelölés a **Bulk Actions** és **Include in Reports** opciókhoz, valamint állítsd be a **Paid/Requires payment/Egyik sem** viselkedést.
4. A gyári státuszoknál add meg a **Next Statuses** listát, hogy a rendeléslistában megjelenjenek a műveletgombok.
5. Készíts **egyedi e-maileket**, és rendeld őket a kívánt státuszváltásokhoz; a sablonokat a témában felülírhatod.

## Előnyök és értékajánlat

- Idő- és hibacsökkentés: a **Next Status** gombok és a **bulk** frissítés felgyorsítja a munkát.
- Kevesebb ügyfélszolgálat: a vevők mindig tudják, mi történik, köszönhetően a leírásoknak és célzott e-maileknek.
- Pénzügyi pontosság: a riportokba vonhatod a számodra fontos, de még nem „complete” státuszokat.
- Rugalmas fizetéskezelés: elő- és utófizetési lépések külön státuszokkal kezelhetők.

## Kinek ajánlott?

- Gyártó, kézműves, nyomdai, egyedi konfigurációs rendelésekkel dolgozó boltoknak.
- Olyan csapatoknak, ahol több kézi átadási pont van (raktár, minőségellenőrzés, csomagolás, logisztika).
- Support-igényes termékeknél, ahol a vevői kommunikáció kulcsfontosságú.

## Fontos korlátok és kompatibilitás

- Az egyedi státuszok **nem automatizáltak**: kézi alkalmazásra készültek. Ha automatizmus kell, külső szabályrendszerrel oldd meg.
- A „Fizetett” jellegű státuszoknál a rendelés szerkeszthetősége WooCommerce-szinten korlátozott (szűrővel felülbírálható).
- Egyes e-mail vagy státuszkezelő bővítményekkel ütközhet; hiba esetén végezz izolált tesztet.
- HPOS: ellenőrizd a saját telepítésedben a kompatibilitást (WooCommerce > Settings > Advanced > Features), mielőtt élesben bekapcsolod.

## Fejlesztői tippek

- E-mail sablon felülírási útvonalak:
```
yourtheme/woocommerce/emails/{type}-order-status-email-{$slug}.php
```
- Egyedi placeholder hozzáadása e-mailhez:
```php
add_filter( 'wc_order_status_manager_order_status_email_placeholders', function( $placeholders, $email, $order ) {
    $placeholders['{production_eta}'] = '3–5 nap';
    return $placeholders;
}, 10, 3 );
```
- Státusznév programozott fordítása/módosítása:
```php
add_filter( 'wc_order_status_manager_order_status_name', function( $name, $status ) {
    if ( 'wc-in-quality-check' === $status ) {
        $name = 'Minőség-ellenőrzés';
    }
    return $name;
}, 10, 2 );
```

Ezzel a bővítménnyel a WooCommerce rendeléskezelésed végre a saját, valós folyamataidat fogja tükrözni – átláthatóan, gyorsan és profi vevői kommunikációval.