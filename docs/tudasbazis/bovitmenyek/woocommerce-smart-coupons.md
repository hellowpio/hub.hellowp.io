---
title: "WooCommerce Smart Coupons"
description: "Minden az egyben kupon- és ajándékkártya-megoldás WooCommerce-hez: fejlett szabályok, BOGO, URL-kuponok, tömeges kódkezelés és kényelmes beváltás."
sidebar_label: "WooCommerce Smart Coupons"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Smart Coupons a StoreApps prémium bővítménye, amely a WooCommerce alap kuponkezelését professzionális szintre bővíti. Ha eddig hiányoztak az ajándékkártyák (store credit), a precíz célzású kedvezményszabályok, a BOGO ajánlatok, az automatikus kuponalkalmazás vagy a tömeges kódkezelés, ezzel a bővítménnyel mindezt egy helyen megkapod. Célja, hogy növeld a bevételt, csökkentsd a kuponhasználat körüli súrlódást és kézben tartsd a promóciós szabályokat.

Fontos név- és márkázási megjegyzés: a „Smart Coupons” név alatt több bővítmény is ismert. Ez az oldal a StoreApps által készített, WooCommerce piactéren elérhető megoldásról szól.

## Fő funkciók, érthetően

### Ajándékkártyák és store credit
- Értékesíthetsz tetszőleges vagy fix címletű ajándékkártyákat, amelyeket a vevő e-mailben kap meg.
- A kredit több rendelésben is felhasználható a lejáratig, és beállíthatod, hogy terjedjen-e ki adóra/szállításra.
- Időzített kézbesítés: megadhatod, mikor érkezzen meg az ajándékkártya a címzetthez (pl. ünnepnapon).

### Fejlett kupon- és kedvezményszabályok
- Pontosan meghatározhatod, ki és mikor használhat kupont: hely (ország/régió), fizetési vagy szállítási mód, felhasználói szerepkör, termékkategória/attribútum, kosárérték és mennyiség alapján.
- Kombinálhatod a feltételeket, így minimalizálhatod a visszaéléseket és a nem kívánt „stackelést”.

### BOGO és ajándéktermék
- Készíthetsz Buy X Get Y, „vegyél 2‑t, a 3. ingyen” vagy BOGOF akciókat.
- A bővítmény a kosárhoz automatikusan hozzáadja az ajándékterméket a szabályok teljesülése esetén.

### URL‑kuponok és automatikus alkalmazás
- Létrehozhatsz megosztható, egykattintásos kuponokat, amelyek kattintáskor azonnal alkalmazódnak.
- Szabályalapú automatikus alkalmazás a pénztárban/kosárban: a vevőnek nem kell kódot beírnia.

### Tömeges kuponkód‑generálás és import/export
- Több száz vagy ezer egyedi kuponkódot generálhatsz előtag/utótag és mintázati szabályok szerint.
- CSV export/importtal könnyen migrálhatsz vagy kioszthatsz kódokat, akár e-mailben is küldve őket.

### Kuponok megjelenítése és UX
- Ki tudod listázni az elérhető kuponokat a kosárban, a pénztárban és a Saját fiók oldalon.
- Rövidkódokkal tetszőleges oldalra vagy termékoldalra is kiteheted a kuponokat és a store credit egyenleget, testreszabható megjelenéssel.

Példa rövidkódra:
```
[wc_sc_available_coupons]
```

### Adminisztráció és fejlesztői lehetőségek
- Aktiválás után a Marketing > Kuponok alatt új fülek jelennek meg: Coupons, Bulk Generate, Import Coupons, Send Store Credit.
- Nagy forgalmú boltokra optimalizált; HPOS-kompatibilis kialakítás; REST API és hookok fejlesztőknek.

## Gyakorlati példák

- Bevételnövelés kosárértékhez kötve: „10% kedvezmény 30 000 Ft felett”. A kedvezmény csak a határ felett lép életbe, megakadályozva a túlzott kedvezményeket.
- BOGO promóció: „Vásárolj 3 terméket, a 4. ajándék”. A rendszer a kritériumok teljesülésekor automatikusan hozzáadja az ajándékot.
- Geo-targetált akció: „Csak magyarországi szállítás esetén” – ideális régiós kampányokhoz.
- VIP ajánlat: „Kupon csak VIP szerepkörű ügyfeleknek” – hűségprogramok és zárt klubok támogatása.
- Store credit visszatérítés: pénzvisszafizetés helyett kreditet küldesz, ami a következő vásárlásra ösztönöz.
- „Következő rendelés” kupon: a vásárló a vásárlás után automatikusan kap egy időzített, egyszer használható kódot.

## Előnyök és értékajánlat

- **Nagyobb konverzió kevesebb súrlódással**: automatikus és URL-kuponokkal nem kell a kódot keresgélni vagy elírni.
- **Finomhangolt kontroll**: összetett feltételek és korlátozások; hatékony visszaélés-megelőzés.
- **Operációs hatékonyság**: tömeges generálás/import/export és e-mailes kiosztás jelentős manuális munkát spórol.
- **Hűség és megtartás**: ajándékkártyák és kreditek révén visszahozod a vevőket.
- **Skálázhatóság**: nagy forgalmú boltokhoz optimalizált, fejlesztőbarát bővíthetőséggel.

## Kinek ajánlott?

- **E-kereskedelmi marketingeseknek**: A/B tesztelhető promók, szezonális kampányok, upsell/retention eszközök.
- **Nagy SKU-val vagy B2B árazással dolgozó boltoknak**: lépcsőzetes és mennyiségi kedvezmények, kategória- és attribútum-alapú szabályok.
- **Előfizetéses modellekhez**: ismétlődő kedvezmények és kredithasználat.
- **Ügynökségeknek és fejlesztőknek**: REST API, hookok, HPOS-kompatibilitás, dokumentált folyamatok.

## Telepítés és első lépések (röviden)

1. Telepítsd és aktiváld a bővítményt.
2. Menj a Marketing > Kuponok menübe. Új füleket látsz: 
   - **Coupons**: egyedi kuponok és szabályok létrehozása.
   - **Bulk Generate**: tömeges kódgenerálás.
   - **Import Coupons**: CSV alapú import/migráció.
   - **Send Store Credit**: kredit küldése egy vagy több ügyfélnek.
3. Helyezz el rövidkódot az oldalaidon a kuponok láthatóságához:
```
[wc_sc_available_coupons]
```
4. Teszteld a kosárban/pénztárban az automatikus alkalmazást és a BOGO szabályokat.

## Változatok és alternatívák

A „Smart Coupons” név alatt elérhető egy másik, hasonló nevű bővítmény is más gyártótól, eltérő funkciókkal és licenccel. Ha nem a StoreApps megoldását kerested, érdemes ellenőrizni, melyik termékre van szükséged. Ez az oldal a StoreApps által fejlesztett, WooCommerce piactéren elérhető változatot dokumentálja.

---

Összefoglalva: a WooCommerce Smart Coupons egy átfogó, skálázható kupon- és ajándékkártya-rendszer. Pontos szabályokkal, kényelmes beváltással és tömeges admin eszközökkel valós marketing- és operatív előnyt ad – hogy te a kampányokra, a vásárló pedig a vásárlásra koncentrálhasson.