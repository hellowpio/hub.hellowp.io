---
title: "CartFlows"
description: "WooCommerce-hez készült checkout- és értékesítési tölcsér építő. Lecseréli az alap pénztárat, és vizuális lépésekből (landing → checkout → upsell → thank you) álló, konverzió‑fókuszú folyamatokat ad."
sidebar_label: "CartFlows"
---

## Mi ez és milyen problémát old meg?

A CartFlows egy WooCommerce‑kiegészítő, amellyel konverzióra optimalizált pénztárat és komplett értékesítési tölcséreket építhetsz. Megoldja a WooCommerce alap checkout merevségét: rövidebb, gyorsabb, személyre szabott pénztárt kapsz, miközben order bumpokkal és one‑click upsellekkel növeled az átlagos kosárértéket. Beépített analitika és A/B tesztelés segít, hogy adat alapon javítsd a folyamatot.

## Hogyan működik röviden?

- Tölcsérként gondolkodsz: landing/opt‑in → checkout → upsell/downsell → köszönőoldal.
- A lépéseket vizuális felületen rendezed, és a bővítmény automatikusan irányítja a vásárlót a következő lépésre.
- A Store Checkout funkcióval globálisan lecseréled a WooCommerce pénztárat egy optimalizált, CartFlows‑szal készített verzióra.
- A Rule Engine feltételek alapján dinamikusan dönt a következő ajánlatról, így relevánsabb élményt adsz.

## Fő funkciók, érthetően

### Tölcsérépítés vizuálisan
- Létrehozol egy „Flow”-t, benne lépésekkel: Landing, Opt‑in, Checkout, Upsell, Downsell, Thank You.
- Drag‑and‑drop rendezés, több utóajánlati lépés is lehet.
- Gutenberg blokkok és népszerű page builderek támogatása, így a teljes dizájnt és tartalmat te irányítod.

### Store Checkout (globális pénztárcsere)
- Lecseréli a WooCommerce alapértelmezett pénztárát egy tiszta, gyors, konverzió‑barát felületre.
- Elérhető kétlépcsős checkout, Instantly betöltődő, zavaró elemektől mentes layout, összecsukható szekciók, Google cím‑autocomplete.

### Order bumpok a pénztáron
- Kis, releváns kiegészítő ajánlatok a checkouton (pl. garancia, kiegészítő termék).
- Több bump is lehet, egyedi stílusokkal és feltételekkel (pl. csak bizonyos kosártartalomnál jelenjen meg).

### One‑click upsell/downsell (Pro)
- Fizetés után egy kattintással elfogadható utóajánlatok, a kártyaadatok újbóli megadása nélkül.
- Csak kifejezetten támogatott fizetési kapukkal működik; nem támogatott kapunál az upsell lépés kihagyható.

### Dinamikus ajánlatok (Rule Engine)
- Feltételek alapján szabod személyre a következő lépést: kosár összérték, termékkategória, ország, egyedi mezők stb.
- Vászon (Canvas) nézetben látod a teljes útvonalat.

Példa szabálylogika:
```
Ha kosár_összeg >= 20000 és ország == "HU":
  Következő lépés: Upsell – „Gyorsított szállítás”
Máskülönben ha kosár tartalmazza „Alap csomag”-ot:
  Következő lépés: Upsell – „Prémium csomag frissítés”
Egyébként:
  Következő lépés: Thank You
```

### Analitika és A/B teszt (Pro)
- Beépített tölcsér‑analitika (megtekintések, konverziók, bevétel lépésenként).
- A/B teszt oldalszinten: forgalomelosztás, vezérlő/variáns, valós idejű eredmények.

### Pixel és mérés
- GA4 és hirdetési pixelek eseménykövetéssel (pl. view, add_to_cart, begin_checkout, purchase).
- Könnyített beállítás, hogy a tölcsér minden lépésén pontos mérésed legyen.

### Sablonok és kompatibilitás
- Importálható, konverzió‑ra optimalizált sablonok mindegyik lépéshez.
- Kompatibilis elterjedt témákkal, page builderekkel és WooCommerce kiegészítőkkel (pl. előfizetések).

### Kapcsolódó bővítmény: kosárelhagyás visszanyerés
- Ingyenes kiegészítő automatikus e‑mailekkel és kuponokkal a félbehagyott rendeléseid visszaszerzésére.

## Gyakorlati példák

- Egytermékes kampány: Hirdetés → Landing, előnyök + bizalom → Checkout order bump („kiterjesztett garancia”) → Upsell („prémium csomag”) → Thank You. Eredmény: több konverzió és magasabb kosárérték.
- Bolt‑szintű optimalizálás: Store Checkout bekapcsolva, feltételes bumpok (pl. csak hazai címnél jelenjen meg „Gyors szállítás”), dinamikus upsell, ha a kosárban „Alap csomag” van.
- Előfizetés: Alap csomagra fizető ügyfélnek fizetés után one‑click upsellként felajánlod a magasabb csomagot (támogatott kapu mellett).
- Kosárelhagyás mentése: Automatikus e‑mailek emlékeztető kuponnal és egykattintásos kosár‑visszaállítással.

## Előnyök és értékajánlat

- Magasabb konverzió: tiszta, rövidebb, kétlépcsős checkout, súrlódáscsökkentő felépítéssel.
- Nagyobb AOV: order bump + one‑click upsell/downsell.
- Gyors iteráció: A/B teszt és analitika, így nem tippelsz, hanem mérsz.
- Időmegtakarítás: sablonok, vizuális szerkesztés, kész blokkok.

## Kinek ajánlott?

- Webáruház‑tulajdonosoknak, akik a pénztárat optimalizálnák és emelnék a kosárértéket.
- Digitális termékeseknek és kurzus‑készítőknek, ahol a gyors, letisztult checkout kritikus.
- Ügynökségeknek és fejlesztőknek, akik ismétlődő feladatok helyett sablonokkal, szabályokkal gyorsítanának.

## Korlátok és megfontolások

- One‑click upsell csak támogatott fizetési kapukkal működik; egyébként az upsell lépés átugorható.
- A Store Checkout a WooCommerce logikáját követi; nem minden „landing” jellegű elem értelmezett bolt‑szinten.
- Cache és mérés: a pontos analitika érdekében a követéshez használt cookie‑kat érdemes kivenni a gyorsítótárazásból.

## Telepítés és első lépések

1. Előfeltétel: WordPress + WooCommerce.
2. Telepítsd az ingyenes CartFlows‑t, majd szükség esetén aktiváld a Pro licencet.
3. Store Checkout: hozz létre egy CartFlows pénztárat, állítsd be globális pénztárnak, válaszd az Instant layoutot.
4. Fizetési kapuk: ha one‑click upsell kell, válassz kifejezetten támogatott kaput.
5. Első tölcsér: Landing → Checkout (order bump) → Upsell → Thank You. Teszteld sandbox módban, majd indíts A/B tesztet a fő elemekre (cím, CTA, űrlapmezők).

## Ingyenes vs. Pro

- Ingyenes: több tölcsér, testreszabható checkout‑mezők, sablonok, Store Checkout.
- Pro: one‑click upsell/downsell, dinamikus ajánlatok, A/B teszt, fejlettebb analitika és haladó optimalizációs funkciók.

Ezzel a bővítménnyel a WooCommerce pénztárod nem csak szebb és gyorsabb lesz, hanem mérhetően többet is hoz: okos ajánlatokkal és adatvezérelt döntésekkel rendszeresen javíthatod a bevételed.