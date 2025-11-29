---
title: "Edit Order by Customer"
description: "WooCommerce-kiegészítő, amellyel a vevők előre meghatározott státuszokban utólag szerkeszthetik a rendeléseiket (címek, termékek, fizetési és szállítási mód), admin kontrollal."
sidebar_label: "Edit Order by Customer"
---

## Mi ez és milyen problémát old meg?

Az Edit Order by Customer egy WooCommerce‑kiegészítő az Addify-tól. Lehetővé teszi, hogy a vevőid meghatározott rendelésállapotokban a saját fiókjukból korrigálják a leadott rendelés adatait: címeket, termékeket, valamint a szállítási és fizetési módot. Minden változtatás után a rendelés automatikusan **On hold** állapotra vált, és értesítést küld az adminnak, így a folyamat kontrollált és biztonságos marad.  
Aktuális állapot: legfrissebb verzió 1.1.3 (2025-10-16), éves díj 49 USD, kb. 200 aktív telepítés.

## Fő funkciók, érthetően

### Jogosultság és státuszalapú engedélyezés
Te döntöd el, mely **rendelésstátuszokban** (például Pending payment, On hold) legyen elérhető a szerkesztés, és azt is, hogy **mely szerepköröknek vagy konkrét vevőknek** adsz jogot. Így a szerkesztés mindig a te működésedhez igazodik.

### Szerkeszthető elemek szabályozása
- **Címek (számlázási/szállítási):** mezőszintű kontrollal. Ha szeretnéd, zárolhatod az olyan költségérzékeny mezőket, mint az **ország**, **város**, **irányítószám**.  
- **Termékek:** a vevő terméket adhat hozzá, cserélhet vagy eltávolíthat. A termékszerkesztés natívan a **Pending payment** és **On hold** állapotokban támogatott. Termékszintű korlátozás is beállítható.  
- **Szállítási módok:** megadhatod, mely módszerek módosíthatók (például Flat rate, Free shipping, Local pickup).  
- **Fizetési módok:** kijelölheted, hogy mely fizetési opciókra engeded a váltást (például Direct bank transfer, Check payments, Cash on delivery).

### Admin értesítés és státuszkezelés
Bármilyen változtatás után a rendelés **On hold** állapotba kerül, és **e‑mail** megy az adminnak az új részletekkel. Ez biztosítja, hogy a pénzügyi és logisztikai folyamatok ne boruljanak, te pedig kézzel állíthatod vissza a megfelelő státuszt (például vissza Pending paymentre vagy Processingra).

### Vevői felület
A vevő a **My Account > Orders** táblázatban egy **Edit Order** gombot lát az engedélyezett rendeléseknél. Itt végezheti a módosításokat; termékeknél egy **Add Product** felugró segít a gyors hozzáadásban/cserében.

## Gyakorlati példák

- **Elgépelés a címben:** a vevő javítja az irányítószámot vagy a házszámot, nem kell supportot írnia. Te zárolhatod az országot/várost, hogy a szállítási díj ne torzuljon.  
- **Rossz termék/variáció:** a vevő On hold állapotban cserélhet M-es pólóról L-esre, így elkerülhető az újrarendelés és csökken a visszáru.  
- **Módváltás fizetés/szállítás:** banki átutalásról utánvétre, vagy házhozszállításról személyes átvételre vált még teljesítés előtt.  
- **B2B finomhangolás:** nagy kosaraknál a beszerző módosít tételeket és mennyiségeket fizetés előtt, te pedig ellenőrzés után engedélyezed a folytatást.

## Előnyök és értékajánlat

- **Vevői önkiszolgálás:** a kisebb korrekciókat a vevő intézi.  
- **Kevesebb support és admin teher:** kevesebb jegy, kevesebb manuális rendelésmódosítás.  
- **Kisebb kockázat:** minden változtatás On hold és admin review mögé kerül.  
- **Rugalmas szabályozás:** státusz-, szerepkör- és mezőszintű kontroll.  
- **B2B‑ready:** jól illeszkedik a fizetés előtti iteratív rendelési folyamatokba.

## Telepítés és beállítás

1. Töltsd le a bővítmény .zip fájlját, majd telepítsd és aktiváld a WordPress adminban.  
2. Nyisd meg: **WP Admin > WooCommerce > Edit Order by Customer**.  
3. Alapbeállítások:  
   - **Bővítmény engedélyezése**.  
   - **Engedélyezett státuszok** kiválasztása (pl. Pending payment, On hold).  
   - **Szerepkörök/vevők** kijelölése.  
   - **Szerkeszthető elemek** szabályozása (címmezők zárolása, termékszerkesztés, szállítási/fizetési módok).  
   - **Admin e‑mail** sablon testreszabása.

## Kompatibilitás és követelmények

- Tesztelve: **WordPress 6.*.*, WooCommerce 10.*.***  
- Minimum: **WordPress 6.5**, **WooCommerce 4.0**  
- PHP: eltérő jelölések előfordulhatnak; a gyakorlatban **PHP 7.4+** javasolt.  
- Fejlesztő: **Addify**. Aktuális verzió: **1.1.3**.

## Bevált gyakorlatok

- Csak **elő‑teljesítési státuszokban** engedélyezd a szerkesztést.  
- Zárolj **költségérzékeny mezőket** (ország, város, irányítószám).  
- Pontosan jelöld, mely **szállítási/fizetési módok** válthatók.  
- Kapcsold be az **admin értesítést**, és rögzíts belső folyamatot az On hold → végleges státusz visszaállítására.  
- Kommunikáld a vevőknek az **Edit Order** gomb elérhetőségét és az esetleges **időablakot**.

## Korlátok és megjegyzések

- A **termékszerkesztés** gyárilag csak a Pending payment és On hold státuszokban támogatott.  
- Minden módosítás után **admin beavatkozás** szükséges (On hold ellenőrzés, státusz visszaállítás).  
- Előfordulhat **verzióinformációs aszinkron** a termék- és fejlesztői oldalak között; a marketplace adatai az irányadók.

## Kinek ajánlott?

- Olyan boltoknak, ahol gyakori a **cím- vagy termékjavítás** rendelés után.  
- **B2B kereskedőknek**, nagy kosarakkal és fizetés előtti iterációkkal.  
- Olyan shopoknak, ahol elterjedtek az **offline fizetések** és a **szállítási mód váltások**.  
- Csapatoknak, amelyek **support‑terhet** és **operációs költséget** csökkentenének.

## Gyors implementációs checklist (példa)

```
Státuszok: [Pending payment, On hold]
Szerepkörök: [customer]
Szerkeszthető: { címek: igen, termékek: igen, szállítási mód: kiválasztott, fizetési mód: kiválasztott }
Zárolt címmezők: [ország, város, irányítószám]
Szállítási módok: [Flat rate, Free shipping, Local pickup]
Fizetési módok: [Direct bank transfer, Check payments, Cash on delivery]
Admin értesítés: bekapcsolva, tárgy/szöveg testreszabva
Folyamat: On hold ellenőrzés → végleges státusz beállítása
```

Ha szeretnéd, készítek neked egy személyre szabott checklistet az állapotokkal, szerepkörökkel, mezőzárolásokkal és értesítésekkel.