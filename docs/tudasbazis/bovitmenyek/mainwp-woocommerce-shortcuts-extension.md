---
title: "MainWP WooCommerce Shortcuts Extension"
description: "Ingyenes MainWP-kiegészítő, amely WooCommerce admin oldalakhoz gyorshivatkozásokat ad a Dashboardból, így egy kattintással eléred a Child site-ok rendeléseit, termékeit és beállításait."
sidebar_label: "MainWP WooCommerce Shortcuts Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP WooCommerce Shortcuts egy ingyenes kiegészítő, amely a MainWP Dashboardban minden kezelt webhely (Child site) áttekintő oldalához egy **WooCommerce Shortcuts** widgetet ad. Ez a widget közvetlen, egykattintásos hivatkozásokat kínál a WooCommerce legfontosabb admin oldalaira, így nem kell minden egyes webshopba külön belépned és a menükben navigálnod. A megoldás **önhostolt** és **adatvédelmi szempontból takarékos**: nem húz be áruház-adatot a központi Dashboardba, csak gyors elérést biztosít a céloldalakra.

Röviden: ha több WooCommerce áruházat kezelsz, a bővítmény drasztikusan csökkenti az időrabló bejelentkezési ciklusokat és a kontextusváltást.

## Fő funkciók és hogyan működnek

A bővítmény a Child site-ok Overview nézetében elhelyez egy widgetet, amely a WooCommerce kulcsoldalaihoz vezető linkeket tartalmazza. A linkek csak akkor aktívak, ha a WooCommerce telepítve és engedélyezve van az adott Child site-on; ellenkező esetben figyelmeztetést látsz.

- **Orders (Rendelések)**: Azonnal a rendeléslista oldalra jutsz, ahol feldolgozhatod a megrendeléseket, állapotot módosíthatsz, számlákat tölthetsz le vagy visszatérítést indíthatsz.
- **Coupons (Kuponok)**: Új kuponokat hozhatsz létre, lejáratot, felhasználási feltételeket és kedvezményeket állíthatsz be – közvetlenül az adott bolt admin felületén.
- **Reports (Jelentések)**: Rögtön a bolt jelentésoldalára érkezel, ahol forgalmi és teljesítményadatokat elemezhetsz. Fontos: a Dashboard nem gyűjt össze adatokat, a riportokat a bolt saját adminjában nézed.
- **Settings (Beállítások)**: Egy kattintással eléred a WooCommerce beállításokat, például fizetés, szállítás, adózás konfigurációját.
- **System Status (Rendszerállapot)**: Gyors diagnosztika és hibakeresés – bővítmények, sablon-override-ok, szerverparaméterek áttekintése.
- **Extensions/Add-ons (Kiegészítők)**: A WooCommerce bővítményeinek és kiegészítőinek kezelése.
- **Products (Termékek)**: A terméklista oldalra ugrasz, ahol szerkeszthetsz, tömeges műveleteket végezhetsz.
- **Add Product (Új termék)**: Közvetlenül az új termék létrehozása képernyőre érkezel.
- **Categories, Tags (Kategóriák, Címkék)**: Katalógusstruktúra karbantartása, SEO és navigáció optimalizálása.
- **Shipping Classes (Szállítási osztályok)**: Szállítási díjszabás finomhangolása.
- **Attributes (Attribútumok)**: Variációs termékek alapját képező attribútumok kezelése.

A linkek a MainWP-ből átvisznek a kiválasztott Child site megfelelő WooCommerce admin-oldalára, megkerülve a többlépcsős belépést és menünavigációt.

## Gyakorlati példák

- **Reggeli rendelésellenőrzés több boltban**: A Dashboardban kiválasztod az első boltot, a WooCommerce Shortcuts widgetben rákattintasz az Orders hivatkozásra, feldolgozod a rendeléseket, majd ugyanezt végigviszed a következő boltokon – bejelentkezések nélkül.
- **Gyors akciós kampány**: Sorban megnyitod a Coupons oldalt a kezelt boltoknál, azonos paraméterekkel létrehozod a kuponokat; percek alatt lefuttatható.
- **Hibakeresés**: Ügyfél jelzi, hogy a szállítási díj nem megfelelő. A widgetből egyből a Shipping Classes és a System Status oldalra ugrasz, ellenőrzöd a beállításokat és a környezeti állapotot.
- **Új termék felvitele**: Több boltban is listázni szeretnél egy új terméket. Az Add Product linkkel minden boltban rögtön a szerkesztőben landolsz, és befejezed a feltöltést.

Egy tipikus napi rutin így néz ki:

```
MainWP Dashboard > Sites > [Kiválasztott Child site] > Overview > WooCommerce Shortcuts
  - Orders: rendelésfeldolgozás
  - Products: készlet és árak frissítése
  - Reports: gyors teljesítményellenőrzés
```

## Előnyök és értékajánlat

- **Jelentős időmegtakarítás**: Megspórolod a több lépéses bejelentkezéseket és a menükben való keresgélést. Napi szinten boltonként több perc, sok bolt esetén órák nyerhetők.
- **Kevesebb kontextusváltás, kevesebb hiba**: Ugyanarról a kiinduló pontról, azonos logikával éred el a kulcsfeladatokat.
- **Adatvédelmi szempontból kíméletes**: Nem gyűjt aggregált értékesítési adatokat a Dashboardban; a műveletek a Child site admin felületén történnek.
- **Skálázható ügynökségi munkához**: Akkor is átlátható marad a napi operáció, ha sok webshopot kezelsz.
- **Egyszerű bevezetés**: Telepítés után a widget automatikusan megjelenik; nincs bonyolult konfiguráció.

## Követelmények és beüzemelés röviden

- **Szükséges**:
  - Egy Dashboard site a MainWP Dashboard pluginnal.
  - A kezelt webhelyeken a MainWP Child plugin.
  - A Child site-okon aktív WooCommerce.

- **Beüzemelés**:
  1. Telepítsd és aktiváld a kiegészítőt a Dashboard site-on.
  2. Nyisd meg a kívánt Child site Overview oldalát.
  3. A WooCommerce Shortcuts widget automatikusan megjelenik és használható, ha a WooCommerce aktív.
  4. Ha a WooCommerce hiányzik vagy inaktív, a widget figyelmeztet és nem kínál linkeket.

## Korlátok és megjegyzések

- **Fix linkkészlet**: A widget előre definiált, a leggyakrabban használt WooCommerce admin-oldalakra mutató linkeket tartalmaz; nincs egyedi testreszabás.
- **Nem riportáló eszköz**: Nem jelenít meg összesített forgalmi vagy státuszadatokat a Dashboardban; erre külön kiegészítők szolgálnak.
- **WooCommerce-függő**: WooCommerce nélkül a widget információs üzemmódban marad, kattintható linkek nélkül.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: Sok WooCommerce bolt napi kezelése esetén nagyságrendileg gyorsítja az operációt.
- **Webshop-üzemeltetőknek**: Akik több márkát vagy országot szolgálnak ki külön boltokkal.
- **Support/üzemeltetési csapatoknak**: Hibajegyek gyors kivizsgálása, beállítások elérése pár kattintással.
- **Freelancereknek**: Több ügyfél webáruházának rendszergazdai feladataihoz hatékony belépési pont.

## Biztonság és karbantartás röviden

A kiegészítő rendszeresen frissül kompatibilitási és biztonsági fejlesztésekkel. A Dashboardból történő átjutás a Child site admin felületére megerősített ellenőrzésekkel történik, hogy a gyorshivatkozások használata biztonságos maradjon a mindennapi működés során.

Összefoglalva: a MainWP WooCommerce Shortcuts a legrövidebb út a legfontosabb WooCommerce feladatokhoz – egyetlen, központi kiindulópontról, fölösleges bejelentkezések és navigáció nélkül. Ha több boltot kezelsz, ez a kiegészítő valós, azonnali produktivitásnövekedést hoz.