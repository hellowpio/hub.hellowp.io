---
title: "Free Gifts for WooCommerce"
description: "Ingyenes ajándéktermékek kiosztása szabályok alapján WooCommerce-ben – két elterjedt megoldással (GIFTiT és Flintop)."
sidebar_label: "Free Gifts for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A „Free Gifts for WooCommerce” név alatt két, széles körben használt bővítményt találsz: a GIFTiT (ithemelandco) ingyenes + Pro megoldást és a Flintop fizetős, Marketplace-es bővítményét. Mindkettő célja, hogy szabályok alapján ingyenes ajándékot adj a vásárlóknak – például kosárküszöb elérésekor, kupon beváltásakor vagy **BOGO** (Buy One Get One) típusú akcióknál. Így kódolás nélkül kezelhetsz összetett promóciókat, növelheted a kosárértéket és csökkentheted a kosárelhagyást.

## Hogyan működik?

- Beállítasz **ajándékszabályokat** (pl. „10 000 Ft felett 1 ajándék”), a bővítmény pedig figyeli a kosarat és a vevő státuszát.
- Ha a feltételek teljesülnek, az ajándékot **automatikusan** a kosárhoz adja, vagy a vevőnek egy **választó felületen** kínálja fel (grid, carousel, táblázat, dropdown), a kosárban vagy a pénztárnál.
- **Értesítések** jelzik, mi hiányzik a jogosultsághoz, vagy hogy milyen ajándék érhető el.
- **Korlátozásokkal** védekezhetsz a visszaélés ellen (pl. felhasználónkénti limit, max. ajándék rendelésenként, csak bejelentkezett vevők).
- Riportok és naplózás segítik a kampányok mérését; fejlesztőknek REST API is elérhető (Flintop).

### Két megközelítés, ugyanaz a cél

- **GIFTiT (ithemelandco):** ingyenes alapképességek (pl. részösszeg-küszöb, egyszerű szabályok), a Pro kiadásban haladó feltételek, ismétlődő logika („repeat”), több elrendezés és részletes riportok. Gutenberg blokkokkal könnyű beilleszteni a választó felületet.
- **Flintop (Marketplace):** teljes körű, fizetős megoldás manuális és automatikus ajándékokkal, **BOGO**, kuponhoz kötött ajándék, kifinomult korlátozások, értesítések, naplózás, e-mail értesítések és **REST API**.

## Fő funkciók, érthetően

- **Ajándéktípusok**
  - Egyszerű küszöbös akciók: adott kosár- vagy rendelésösszeg felett jár az ajándék.
  - **Buy X–Get Y / BOGO:** meghatározott termék(ek) vásárlása esetén jár egy másik (vagy ugyanaz) termék ajándékba; „repeat” módban minden X egység után.
  - **Kuponhoz kötött ajándék:** kupon beváltásakor válik elérhetővé vagy kerül automatikusan a kosárba.
  - **Manuális ajándékozás** (Flintop): ügyfélszolgálat/marketing egyedi esetekben ajándékot adhat a vevőnek.

- **Feltételek és korlátozások**
  - Dátum/időintervallum, napok, napszakok.
  - Kosárparaméterek: részösszeg/összeg, mennyiségek, súly.
  - Kosár tételei: konkrét termék, variáció, kategória, címke, szállítási osztály.
  - Vevő: bejelentkezés, korábbi vásárlások, felhasználónkénti és időszakos limit.
  - Max. ajándék per szabály/rendelés, ismétlődés kikapcsolása vagy korlátozása.

- **Megjelenítés és UX**
  - **Grid**, **Carousel**, **Data-table**, **Dropdown** elrendezések.
  - Inline vagy **popup** választó a kosárban/pénztárnál.
  - Jogosultsági és „még ennyi hiányzik” **értesítések**.
  - Több ajándék kezelése és darabszám-korlátok.

- **Mérés és fejlesztői eszközök**
  - **Riportok** a szabályok teljesítményéről, rendelések és vevői ajándékpreferenciák elemzésével (GIFTiT Pro).
  - **REST API**, naplózás, e-mail értesítések és testreszabható feliratok (Flintop).

## Gyakorlati példák

1. **Kosárküszöb akció**
   - Cél: 20 000 Ft felett 1 választható ajándék.
   - Megvalósítás: Subtotal szabály, 1 ajándék limit, választó a kosárban, értesítősáv a hiányzó összeggel.

2. **BOGO – ismétlődő**
   - Cél: Minden 2 db „X” termék mellé 1 db „Y” ingyen.
   - Megvalósítás: Buy X–Get Y, repeat bekapcsolva (2:1 arány), max. 3 ajándék/rendelés.

3. **Kuponhoz kötött ajándék**
   - Cél: Kupon beváltásakor jelenjen meg egy ajándékválasztó.
   - Megvalósítás: Kupon feltétel, manuális választás a pénztárnál, csak bejelentkezett vevőknek.

4. **Manuális ajándékozás**
   - Cél: Kompenzáció vagy hűségjutalom utólag.
   - Megvalósítás: Admin kézzel rendel ajándékot a vevőnek (Flintop).

Példa beállítás (pszeudó):

```
Típus: Subtotal threshold
Küszöb: 20000
Ajándékok: [Termék A, Termék B, Termék C]
Hozzáadás: választás a kosárban (inline)
Limit: 1 ajándék / rendelés, csak bejelentkezett
Időzítés: hónap vége
Értesítés: "Még 3 500 Ft, és jár az ajándék!"
```

## Előnyök és érték

- **Nagyobb kosárérték** és konverzió: a vevők motiváltabbak a küszöb elérésére.
- **Készletoptimalizálás:** lassan forgó termékek kifuttatása ajándékként.
- **Jobb élmény:** átlátható választó és értesítések csökkentik a súrlódást.
- **Idő- és költségmegtakarítás:** mindent adminból, kódolás nélkül állíthatsz.
- **Mérhetőség:** riportok és naplók alapján finomhangolhatod a kampányokat.

## Kinek ajánlott?

- **Kis- és középvállalkozásoknak**, akik gyorsan szeretnének promóciókat futtatni.
- **Marketingcsapatoknak**, akik A/B tesztelnének küszöböket és ajándékokat.
- **Ügyfélszolgálatnak**, akik egyedi esetekben ajándékot adnának (Flintop).
- **Fejlesztőknek**, akik integrációt vagy egyedi frontendet építenének (**REST API**-val).

## Melyiket válaszd?

- **GIFTiT (ithemelandco):** ha ingyen kezdenél, alap küszöb- és BOGO-szabályokkal, Gutenberg blokkokkal, és később Pro-ra bővítenél fejlett feltételek és riportok miatt.
- **Flintop (Marketplace):** ha hivatalos támogatást, manuális ajándékozást, széles korlátozási palettát, kiforrott admin-élményt és **REST API**-t szeretnél.

## Névazonosság

A „Free Gifts for WooCommerce” kifejezésre több, hasonló nevű bővítmény is létezik. Kiválasztáskor mindig pontosítsd a fejlesztőt (ithemelandco vagy Flintop), hogy a megfelelő megoldást telepítsd.