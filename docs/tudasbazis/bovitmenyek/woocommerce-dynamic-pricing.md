---
title: "WooCommerce Dynamic Pricing"
description: "Prémium szabálymotor WooCommerce-hez mennyiségi, BOGO, kategória-, szerepkör- és rendelésérték-alapú kedvezményekhez – kódolás nélkül."
sidebar_label: "WooCommerce Dynamic Pricing"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Dynamic Pricing egy prémium, Marketplace-minősítésű bővítmény, amellyel előre definiált szabályok alapján automatikusan alkalmazhatsz kedvezményeket a katalógusban és a kosárban. Megoldja a bonyolult akciólogikák (mennyiségi sávok, BOGO, szerepkör szerinti árképzés, rendelésösszeghez kötött promók, keresztkategóriás ajánlatok) beállítását kódolás nélkül, egyetlen központi felületen. Fejlesztője az Element Stark.

## Hogyan működik? – A 7 mód, érthetően

1) **Single products – Bulk (haladó termékárképzés)**  
   Termékenként mennyiségi sávokat vehetsz fel, és megadhatod, hogy a kedvezmény típusa százalék, fix összeg vagy fix ár legyen. Így pl. 5 db felett automatikus -5%, 10+ db felett -10%.

2) **Single products – Special Offer (BOGO & társai)**  
   “Veszel X-et, kapsz Y kedvezményt/ingyen” típusú ajánlatok. A motor mindig a jogosult termékek közül a **legolcsóbbat** diszkontálja, és az ajánlat ismételhetőre is állítható (pl. minden 2. ingyen).

3) **Orders pricing – Order totals (haladó rendelésösszeg)**  
   A teljes kosárérték (vagy megjelölt kategóriák összege) alapján százalékos kedvezményt adhatsz sávosan. Ez a mód kizárólag százalékot támogat.

4) **Roles pricing – Simple role pricing**  
   Szerepkörökhöz kötött, boltra kiterjedő kedvezmény (fix vagy százalék). Klasszikus B2B/viszonteladói árszintet hozhatsz létre bejelentkezett felhasználóknak.

5) **Categories pricing – Simple category pricing**  
   Egyszerű kategória-kedvezmény (fix vagy százalék). Ha egy termék több akciós kategóriában is szerepel, a **nagyobb** kedvezmény érvényesül, és a frontenden szabványos “akciós ár” jelenik meg.

6–7) **Categories pricing – Advanced category: Bulk / Special Offer**  
   Haladó, mennyiségfüggő kategóriaszabályok. Beállíthatod:
   - **Quantities based on:** kosár-tétel, kategória összege, vagy kategória összege termékenként.
   - **Applies to:** minden vásárló vagy megadott szerepkörök.
   - **Rule Processing Mode:** Bulk vagy Special Offer.
   - **Categories to apply adjustment to:** a kedvezmény más kategóriára is alkalmazható, mint ami a mennyiséget “adja” (pl. férfiruha vásárlás → gyerekruha kedvezmény).
   - **Kedvezménytípus:** százalék, fix összeg, fix ár; dátumtartomány is adható.

## Beállítások és adminfolyamat

- **Telepítés/aktiválás:** a licencelt ZIP feltöltésével a Bővítmények menüben.  
- **Hol állítod a szabályokat?**  
  - Termékszinten: a termék adatlapján külön “Dynamic pricing” fül.  
  - Globálisan: a WooCommerce menü “Dynamic Pricing” oldalán (Order totals, Roles, Category).
- **Quantities based on termékszinten:** termék darabszám, variáció darabszám, kosár-tétel mennyiség, vagy kijelölt kategória mennyisége alapján.  
- **Kiértékelési sorrend:** több pricing group is lehet; felülről lefelé halad, és az első egyezés után megáll.  
- **Order totals szabályok:** több sáv vehető fel (min–max), csak százalékos kedvezmény.  
- **BOGO minták:** klasszikus 1+1 ingyen, ismétlődés támogatott.

Példaszerű szabály (csak illusztráció):
```
Order totals:
  - 100–199.99: -10%
  - 200+     : -15%

Product "Album":
  Special Offer:
    Buy 1, Get 1 at 100% off (repeatable)
```

## Gyakorlati példák

- **Mennyiségi sávok:** 1–4 db listaár, 5–9 db -5%, 10+ db -10% (termékenként vagy kategóriában).  
- **VIP/klub kedvezmény:** “Gold” szerepkör -10% mindenre.  
- **Rendelésérték ösztönzés:** 100 felett -10%, 200 felett -15%.  
- **BOGO zenealbumra:** veszel 1-et, a második ingyen (a legolcsóbb jogosult terméket diszkontálja).  
- **Keresztkategóriás promó:** vegyél 2-t a férfiruhából, kapj -10%-ot a gyerekruhákra.

## Előnyök és értékajánlat

- **Kódolás nélkül** valósítod meg az összetett akciókat.  
- **Időmegtakarítás:** központosított szabálykezelés, gyors módosítás szezonban.  
- **Rugalmasság:** több kedvezménytípus, dátumtartomány, szerepkör- és kategória-szűrés.  
- **Bevételnövelés:** célzott mennyiségi és rendelésérték-alapú ösztönzések.  
- **B2B-ready:** szerepkörös árképzés viszonteladóknak.  
- **Megbízhatóság:** Marketplace-minősítés, 10 000+ aktív telepítés körüli elterjedtség.

## Kinek ajánlott?

- **Nagyker/B2B boltoknak:** szerepkörös kedvezmények, mennyiségi sávok.  
- **B2C kiskereskedőknek:** szezonális kedvezmények, BOGO, kosárérték-alapú akciók.  
- **Tagsági/klub rendszereknek:** VIP-szintekhez kötött automatikus árengedmények.  
- **Marketingcsapatoknak:** gyors A/B tesztelhető promók, finomhangolt kategória-szabályok.

## Korlátozások és tippek

- **Kuponokkal együtt adódik össze** a kedvezmény (stackelődik); nincs automatikus “kedvezmény letiltás kuponnal”.  
- **Kézi rendelésmódosításnál** a szabályok nem futnak újra automatikusan.  
- **Megjelenítés:** a bővítmény nem tesz ki promó-szöveget vagy táblázatot; kommunikáld külön (leírás, banner, kiegészítő plugin).  
- **Special Offer:** mindig a **legolcsóbb** jogosult terméket diszkontálja.  
- **Haladó kategóriaszabályok nem kumulatívak** (kivéve átfedő termékek esetén); a komplex “stackelés” korlátozott.  
- **Kerekítés:** a WooCommerce decimális beállításait használja; speciális esetben érdemes több tizedesre állítani.  
- **Hibakeresés:** fejlesztés közben kapcsold be a WP_DEBUG-ot a részletes naplóért.

---

Összefoglalva: a WooCommerce Dynamic Pricing egy kiforrott szabálymotor, amellyel mennyiségi kedvezményeket, BOGO ajánlatokat, szerepkör- és kategóriaalapú diszkontokat, valamint rendelésértékhez kötött promókat állíthatsz be, rugalmas paraméterezéssel és átlátható adminfelületen. Ha komplex akciókat szeretnél kódolás nélkül, ez a bővítmény neked való.