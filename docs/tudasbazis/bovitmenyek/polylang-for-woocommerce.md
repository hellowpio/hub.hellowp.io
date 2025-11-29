---
title: "Polylang for WooCommerce"
description: "Prémium kiegészítő, amellyel a WooCommerce teljes tartalma, e-mailjei és a vásárlói élmény többnyelvűvé és konzisztenssé tehető a Polylanggal."
sidebar_label: "Polylang for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Polylang for WooCommerce egy prémium kiegészítő, amely teljessé teszi a WooCommerce és a Polylang együttműködését. Segítségével a teljes áruházad – a termékektől és kategóriáktól kezdve az alapoldalakon, attribútumokon és e-maileken át – több nyelven kezelhető. Megoldja a tipikus többnyelvű e‑kereskedelmi gondokat: az árak/készletek eltérését a fordítások között, a kosár elvesztését nyelvváltáskor, és azt, hogy a vásárló mindenhol a saját nyelvén kapjon tartalmat és tranzakciós levelet.

Kötelező hozzá: **WooCommerce** és **Polylang** (vagy Polylang Pro).

## Fő funkciók és működés

### WooCommerce-tartalmak fordítása
- Fordíthatod az összes terméktípust (**egyszerű, variálható, csoportos**), a **kategóriákat, címkéket, globális attribútumokat**, valamint az alapoldalakat (**Shop, Cart, Checkout, My Account**).  
- A telepítési varázsló létrehozza/fordítja a hiányzó alapoldalakat, és letölti a szükséges nyelvi fájlokat.

### Automatikus szinkronizálás a fordítások között
- A **készletszint** és az **ár** automatikusan azonos marad minden nyelvi változatnál, így nincsenek eltérések.
- Szinkronizálhatók még: **kategóriák, címkék, szállítási osztályok, attribútumok, termékképek/galériák**, és egyes metaadatok másolása új fordítás létrehozásakor.

### Nyelv szerinti kosár és vásárlói élmény
- A **kosár tartalma megőrizhető** nyelvváltáskor, így a vásárló zökkenőmentesen folytathatja a vásárlást.
- Több domain/subdomain közti kosármegosztáshoz **Polylang Pro** és technikai feltételek (megfelelő WooCommerce/PHP verzió, SSL minden domainen) szükségesek.

### Rendelések és e-mailek nyelve
- A rendszer rögzíti a **rendelés nyelvét**, és a WooCommerce **tranzakciós e-maileket a vásárló nyelvén** küldi.
- A WooCommerce e-mail tárgyai, fejléc‑szövegei és több beállítás a **Languages > Translations** felületen fordíthatók.

### CSV import/export többnyelvűen
- Teljesen kompatibilis a WooCommerce beépített **CSV importőr/exportőr** eszközével.
- Kezeli a **Language** és **Translation group** mezőket, így tömeges műveleteknél is rendben maradnak a fordítások.

Példa CSV-sorokra:
```
Language,Translation group,Name,SKU,Regular price,Stock
hu,123,Termék neve,S123,9990,25
en,123,Product name,S123,29.90,25
```

### Jelentések és duplikálás
- A WooCommerce **jelentések** a fordításokat egyetlen termékként kezelik, így az **értékesítési statisztikák egységesek**.
- Termék **duplikálásakor** a fordítások is másolhatók.

### URL-ek és végpontok (Pro-val)
- Polylang Pro-val fordíthatod a **permalinkeket, WooCommerce végpontokat és slugokat**, így a **SEO-barát URL-struktúrák** nyelvenként egységesek (hreflang és közösségi meta támogatással a Polylang ökoszisztémában).

### Fejlesztőknek: REST API és stringfordítás
- A **WooCommerce REST API** többnyelvű használata Polylang Pro-val elérhető.
- További admin opciók és e-mail beállítások fordításához használhatsz `wpml-config.xml` fájlt:

```xml
<wpml-config>
  <admin-texts>
    <key name="woocommerce_email_from_name" />
    <key name="woocommerce_email_from_address" />
  </admin-texts>
</wpml-config>
```

### Kompatibilitás és teljesítmény
- Kompatibilis ismert WooCommerce kiegészítőkkel (pl. Bookings, Subscriptions, Product Bundles, Shipment Tracking). A Bookings közös kapacitást és nyelvhelyes értesítéseket biztosít.
- Teljesítményközpontú kialakítás, **HPOS-kompatibilitás** a modern rendeléskezeléshez.

## Gyakorlati példák

- Többnyelvű katalógus: magyar–angol–német áruházban a variálható termék árát és készletét elég egy helyen módosítanod; minden fordítás automatikusan követi.
- Nyelvváltás vásárlás közben: a vásárló kosarában lévő termékek megmaradnak, ha nyelvet vált, így nem veszíted el a konverziót.
- E-mail lokalizáció: a német vásárló német nyelvű rendelés-visszaigazolást kap, míg az angol vásárló angolul – kézi válogatás nélkül.
- CSV tömeges kezelés: új piacot indítasz; a meglévő termékeket exportálod, kitöltöd a Language/Translation group mezőket, majd visszaimportálod – percek alatt kész a többnyelvű kínálat.
- Foglalások: egy szolgáltatás kapacitása közös a fordítások között, a visszaigazolás mindig a foglalás nyelvén megy ki.

## Telepítés röviden

1. Telepítsd a WooCommerce-t (a saját varázslóját ideiglenesen kihagyhatod).
2. Telepítsd a Polylangot (vagy Polylang Pro-t).
3. Töltsd fel és aktiváld a Polylang for WooCommerce-t.
4. Futtasd a Polylang varázslót: add meg a licencet, vedd fel a nyelveket, rendeld hozzá a médiát/tartalmat; a WooCommerce-lépés létrehozza a hiányzó oldalfordításokat.
5. Ezután futtasd a WooCommerce varázslót.

## Előnyök és értékajánlat

- **Konzisztens adatok**: ár és készlet minden nyelven azonos.
- **Jobb konverzió**: a kosár nem vész el nyelvváltáskor, az e-mailek mindig a megfelelő nyelven mennek.
- **Gyors tartalomkezelés**: CSV-vel és duplikálással nagy katalógusok is könnyen karbantarthatók.
- **SEO és UX**: nyelvenként fordított URL-ek, hreflang, tiszta navigáció.
- **Idő- és költségmegtakarítás**: kevesebb manuális szinkron, kevesebb hiba.

## Kinek ajánlott?

- **Nemzetközi webáruházaknak**, akik több nyelven értékesítenek.
- **Ügynökségeknek/fejlesztőknek**, akik megbízható, skálázható többnyelvű megoldást keresnek WooCommerce-hez.
- **Nagy katalógusok üzemeltetőinek**, ahol a CSV-alapú tömeges műveletek kritikusak.
- **Előfizetéses és foglalásos üzleti modelleknek**, ahol a közös készlet/kapacitás és a nyelvhelyes értesítések fontosak.

## Megjegyzések, ismert sajátosságok

- Több domain/subdomain közti kosárszinkronhoz **Polylang Pro**, megfelelő WooCommerce/PHP környezet és **SSL** szükséges minden domainen.
- A WooCommerce Blocks és más kiegészítők többnyelvű viselkedése folyamatosan javul; mindig tartsd naprakészen a bővítményeket.
- A teljes értékhez érdemes a Polylang Pro-t a Polylang for WooCommerce-szel együtt használni (URL‑fordítások, REST API, fejlesztői bővíthetőség).