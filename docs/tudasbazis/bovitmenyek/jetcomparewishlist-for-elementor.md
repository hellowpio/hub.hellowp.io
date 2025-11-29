---
title: "JetCompareWishlist For Elementor"
description: "WooCommerce‑hez készült Elementor kiegészítő összehasonlító táblával és kívánságlistával, teljesen testre szabható widgetekkel."
sidebar_label: "JetCompareWishlist For Elementor"
---

## Mi ez és milyen problémát old meg?

A JetCompareWishlist egy Elementorhoz készült WooCommerce‑bővítmény, amellyel teljes értékű termék‑összehasonlítást és kívánságlistát valósíthatsz meg. Segít csökkenteni a döntési fáradtságot, egy helyre rendezi a fontos adatokat, és visszahozza a látogatókat a kosárhoz – így növeli a konverziót és rövidíti a vásárlási utat.

## Fő funkciók és működés

### 6 Elementor‑widget – mit csinálnak?

- **Compare**: interaktív összehasonlító táblázat, amelyben a kiválasztott termékek adatai sorokra rendezve jelennek meg.
- **Compare Button**: gomb/ikon a termékkártyán vagy termékoldalon, amellyel a látogató hozzáad/eltávolít a Compare listáról.
- **Compare Count Button**: számlálóval kombinált gomb; mutatja, hány tétel van a Compare listán, és rávisz az összehasonlító oldalra.
- **Wishlist**: rácsos nézetben listázza a kedvenceket; képek, árak, műveleti gombok és üzenetek testre szabhatók.
- **Wishlist Button**: hozzáadás/eltávolítás a kívánságlistára, állapotonként eltérő ikon/felirat beállítással.
- **Wishlist Count Button**: számláló gomb a kívánságlistához, jellemzően fejlécben/láblécben.

### Compare táblázat – hogyan épül fel?

- **Megjelenítendő adatok**: egyenként kiválaszthatod, hogy cím, bélyegkép, ár, SKU, raktárkészlet, termékattribútumok stb. szerepeljenek, és át is nevezheted a címkéket.
- **Vezérlők**:  
  - Táblázat törlése (lista nullázása)  
  - **Különbségek kiemelése** (vizuálisan jelöli az eltéréseket)  
  - **Csak különbségek megjelenítése** (elrejti az azonos sorokat)  
  Mindegyikhez ikon/felirat/stílus állítható.
- **Reszponzív görgetés**: külön szabályozhatod, hogy mobilon, tableten, asztali nézetben vízszintesen görgethető legyen‑e a táblázat.

### Wishlist oldal és gombok

A kívánságlista rácsszerkezetben jelenik meg, állítható oszlopszámmal. Testre szabhatod az üres lista üzenetét, a kártyák elemeit (cím, kép, ár, gombok) és a stílusokat. A gombok kétállapotúak: **Normál** és **Hozzáadva**, mindkettőhöz külön ikon és felirat tartozhat; ugyanazzal a gombbal eltávolítás is megoldható.

### Számláló gombok a fejlécben

A Count Button widgetek azonnali vizuális visszajelzést adnak az aktuális elemszámról, és egy kattintással elérhetővé teszik az összehasonlító/kívánságlista oldalt. Ideálisak a fejlécbe vagy off‑canvas menübe.

### Automatikus integráció WooCommerce sablonokba

Nem kell minden sablont kézzel szerkesztened: külön kapcsolóval a bővítmény **automatikusan beszúrja** az összehasonlítás/kívánságlista gombokat a natív WooCommerce sablonokba is, akkor is, ha nem JetWooBuilder sablont használsz.

### Tárolás és perzisztencia

- **Store Type**: választhatsz **Session** vagy **Cookies** tárolást. Vendégforgalomhoz jellemzően a Cookies ajánlott.  
- **Save for logged users**: bejelentkezett felhasználóknál a listák tartósan menthetők, így később is visszatölthetők.

### Oldalak kijelölése

A beállításokban megadhatod a **Compare Page** és **Wishlist Page** oldalakat. Ezekre Elementorral elhelyezed a megfelelő widgetet (Compare vagy Wishlist), és kész is a funkcionális oldal.

## Gyakorlati példák

- **Elektronika**: a látogató három notebookot hasonlít össze. A táblázatban csak a különbségeket kéri, így azonnal látja az eltéréseket CPU, RAM, tárhely és csatlakozók szerint.  
- **Divat**: kedvenc ruhákat gyűjt kívánságlistára, majd hírlevélből visszatérve egy kattintással nyitja meg és teszi kosárba a kiválasztott darabokat.  
- **Bútor**: kanapémodelleket hasonlít össze méret, kárpit és szín szerint; a különbségek kiemelése felgyorsítja a döntést.  
- **Fejléc számláló**: minden oldalról látszik, hány tétel van a listákon; egy kattintással megnyitható a lista.

## Előnyök és értékajánlat

- **Gyorsabb döntés**: a különbségek kiemelése csökkenti a kognitív terhelést.  
- **Nagyobb konverzió**: a kívánságlista ösztönzi a visszatérést és a kosárba helyezést.  
- **Kevesebb fejlesztési idő**: kész Elementor‑widgetekkel kódolás nélkül építesz komplett UX‑et.  
- **Rugalmas testreszabás**: adatmezők, ikonok, feliratok, stílusok finomhangolása.  
- **Vendég‑ és tagkezelés**: működik vendégeknek cookie‑alapon, a tagoknak pedig tartós mentéssel.

## Célközönség

- **WooCommerce áruház‑tulajdonosok**, akik javítanák a termékválasztási élményt.  
- **Marketingesek**, akik visszahozó és remarketing pontokat keresnek (kívánságlista).  
- **Fejlesztők/ügynökségek**, akik gyorsan, vizuálisan testreszabható megoldást akarnak Elementorban.  
- **Marketplace üzemeltetők**, ahol sok hasonló termék között kell választani.

## Beüzemelés röviden

1. Nyisd meg: Crocoblock › JetPlugins Settings › JetCompareWishlist.  
2. Kapcsold be a Compare és/vagy Wishlist funkciót.  
3. Állítsd be a Store Type‑ot (Cookies javasolt vendégekhez) és a Save for logged users opciót.  
4. Válaszd ki a Compare Page és Wishlist Page oldalakat.  
5. Tedd be a megfelelő Elementor‑widgeteket a termékkártyákra és a dedikált oldalakra.  
6. Ha akarod, kapcsold be az automatikus gomb‑injektálást WooCommerce sablonokhoz.

Példa konfiguráció:
```
JetCompareWishlist beállítások
- Enable Compare: On
- Enable Wishlist: On
- Store Type: Cookies
- Save for logged users: On
- Compare Page: Összehasonlítás
- Wishlist Page: Kívánságlista
- Add default Compare Button: On
- Add default Wishlist Button: On
```

## Rendszerkövetelmények és kompatibilitás

- **Elementor szükséges**; a funkciók **WooCommerce** termékadatokra és attribútumokra épülnek.  
- A gombok/listaelemek **alap WooCommerce sablonokba** is beszúrhatók a megfelelő kapcsolókkal.

## Jó gyakorlatok és hibakeresés

- Vendégforgalomhoz válaszd a **Cookies** tárolást; session gond esetén ellenőrizd a cache‑t és a session kezelést.  
- Előbb kapcsold be a funkciókat, csak utána hozd létre a Compare/Wishlist oldalakat és tedd rá a widgeteket.  
- Mobilon használd a **görgethető táblázatot** hosszú specifikációkhoz.  
- Biztonsági észrevételeket a fejlesztő hivatalos felelős bejelentési csatornáján jelezd.

## Árazás és licenc

A bővítmény éves előfizetésként érhető el, amely frissítést és támogatást tartalmaz az előfizetési időszakra. A csomagok és feltételek részletei a hivatalos csatornákon érhetők el.

Szeretnél egy kész “Rendszerterv + Telepítési checklist” mintát, vagy inkább az ajánlott WooCommerce attribútum‑mezők kiválasztásában kérsz útmutatót?