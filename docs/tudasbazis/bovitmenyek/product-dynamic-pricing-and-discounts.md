---
title: "Product Dynamic Pricing and Discounts"
description: "Rugalmas, szabályalapú árképzés és kedvezmények WooCommerce-hez: termékárak, kosárkedvezmények és ajándék/BOGO promók egyetlen bővítményben."
sidebar_label: "Product Dynamic Pricing and Discounts"
---

## Mi ez és milyen problémát old meg?

A Product Dynamic Pricing and Discounts egy kereskedelmi WooCommerce bővítmény (fejlesztő: Addify), amellyel teljesen testreszabható, szabályalapú árképzést és kedvezményeket állíthatsz be. Arra való, hogy ugyanazon katalógus mellett külön árakat, mennyiségi sávokat, kosárszintű kedvezményeket és ajándék/BOGO promókat adj szerepkörök, konkrét vásárlók, kategóriák vagy vásárlástörténet alapján – automatizáltan és átlátható logikával. Célja, hogy kiváltsa a több, egymásnak ellentmondó mini-plugin helyett az egységes ár- és kedvezménymotort.

## Fő funkciók és működés

### Termékár-szabályok (Product Pricing Rules)
- Egy vagy több termékre, illetve egész kategóriákra hozhatsz létre **mennyiségi sávos (tiered) árakat**.
- Ötféle korrekciótípus közül választhatsz: **fix ár**, **fix csökkentés**, **fix növelés**, **százalékos csökkentés**, **százalékos növelés**.
- Célzás **felhasználói szerepkör** (pl. nagyker, VIP) és **konkrét vásárlók** szerint.
- A termékoldalon megjeleníthető egy **testreszabható ár-táblázat**, amely a mennyiségi küszöböket és végárakat mutatja (elhelyezés és elrendezés állítható).

Mit csinál a gyakorlatban? Például 5+ darabnál automatikusan olcsóbb árat számít, és ezt előre kommunikálja a termékoldalon.

### Kosárszintű kedvezmények (Cart Discount Rules)
- A teljes kosárra vagy kijelölt termékek/kategóriák kosáron belüli összes értékére/mennyiségére adhatsz **százalékos vagy fix kedvezményt**, akár **markupot** is.
- Feltételek: **összeghatár**, **darabszám**, **tartalom (termék/kategória)**, **felhasználói szerepkör**, **konkrét vásárló**, **élettartam-költés**.
- Így finoman ösztönözhetsz magasabb kosárértékre (küszöbök, lépcsők).

### Ajándékok és BOGO promók (Free Gifts/Buy X Get Y)
- Hozzárendelhetsz **ajándékterméket** szabályokhoz: „Veszel X-et, kapsz Y-t”, kategóriaalapú feltételek, több küszöb.
- Az ajándék **automatikusan** bekerül a kosárba, és a rendszer **magyarázó üzenetet** jelenít meg.

### Időzítés és napok
- Minden szabályhoz megadhatsz **dátumintervallumot** vagy **heti napokat**. Például: „minden pénteken -10%” vagy „kampány: nov. 20–30.”

### Ütközéskezelés és prioritások
- Több aktív szabály esetén beállíthatod, mi érvényesüljön: **prioritásszám**, **kisebb/nagyobb ár/engedmény előnyben**, vagy **szabályok halmozása**.
- Külön vezérelhető a termék- és kosárszintű logika, illetve az is, hogy a két szint **együtt** érvényesüljön-e. Ezzel elkerülöd a „túl-diszkontálást”.

### Üzenetek és megjelenítés
- Promóciós üzenetek a termék- és kosároldalon az **akció előtt és után**.
- Az **ár-táblázat** pozíciója, elrendezése (függőleges/vízszintes) és tartalma **testreszabható**.

### Kezelőfelület
- Telepítés után a WooCommerce menü alatt megjelenik a **Dynamic Pricing**.
- Külön nézet a **Product Pricing Rules** és **Cart Discount Rules** számára, plusz a **Free Gifts/BOGO** beállítások.

## Gyakorlati példák

- 5+ darab esetén -10% egy kategóriában; 10+ darabnál fix 2990 Ft/db.
- VIP szerepkörű vásárlóknak minden terméken **élethosszig -10%**.
- „Vásárolj 2 db X-et és kapsz 1 db Y-t ajándékba.”
- „Bármely 5 pólóhoz ajándék sapka” – az ajándék automatikusan bekerül a kosárba.
- 500 pénzegység felett **-20** a teljes rendelésből.
- Minden pénteken **automatikus -10%** a kosárra, szerepkörtől függetlenül.

Példa egy szabály logikájára (illusztráció):
```
Típus: Termékár-szabály
Cél: "Pólók" kategória
Sávok:
- 1–4 db: listaár
- 5–9 db: -10% (százalékos csökkentés)
- 10+ db: 2990 (fix ár)
Célzás: VIP szerepkör
Időzítés: péntek
Megjelenítés: ár-táblázat a leírás alatt
```

## Előnyök és értékajánlat

- **Egységes ár- és kedvezménymotor**: termékárak, kosárkedvezmények, ajándékok egy logikán belül.
- **Kevesebb admin és hiba**: automatizált szabályok, időzítés, célzás; nincs manuális árátállítás kampányonként.
- **Átlátható kommunikáció**: mennyiségi ár-táblázat és promó-üzenetek növelik a vásárlói bizalmat.
- **Magasabb kosárérték**: küszöbökhöz kötött kedvezmények és BOGO ajánlatok hatékonyan ösztönöznek.
- **Finom célzás**: szerepkör, konkrét vásárló, kategória, vásárlástörténet szerinti személyre szabás.

## Kinek ajánlott?

- **B2B/nagyker**: szerepkör-alapú nettó árak, mennyiségi sávok, egyedi feltételek.
- **Vegyes B2B+B2C áruházak**: ugyanazon katalógus több célcsoportra optimalizálható.
- **Marketing- és kampányintenzív boltok**: időzített akciók, kosárküszöbök, ajándékpromók.
- **VIP/lojalitás programok**: visszatérők és kiemelt ügyfelek célzott árazása, életút-költés alapú kedvezmények.

## Kompatibilitás, verzió és megkülönböztetés

- Minimális PHP-verzió: **7.4**.
- Tesztelve modern környezetben: **WordPress 6.x**, **WooCommerce 10.x**.
- Fejlesztő: **Addify**. Legutóbbi ismert verzió: **1.3.1**. Licenc: **éves**, listaár körülbelül **99 USD**.
- Fontos: ne keverd össze más, hasonló nevű „Dynamic Pricing” bővítményekkel. A fejlesztő, adminfelület és szabálylogika eltérhet.

## Rövid beüzemelési folyamat

1. Telepítés és aktiválás után nyisd meg: **WooCommerce > Dynamic Pricing**.
2. Hozz létre **Product Pricing Rules** szabályokat (céltermék/kategória, korrekciótípus, sávok, célzás, ár-táblázat).
3. Adj meg **Cart Discount Rules** feltételeket (összeg, darabszám, kategória, szerepkör, életút-költés, időzítés).
4. Konfiguráld a **Free Gifts/BOGO** promókat (küszöbök, ajándéktermékek).
5. Állítsd be a **prioritásokat és halmozást** – döntsd el, mely szabály győzzön ütközéskor.
6. Teszteld különböző felhasználói szerepkörökkel és kosár-szcenáriókkal.

Ezzel pontosan kontrollálhatod, ki, mikor és milyen feltételekkel milyen árat vagy kedvezményt kap – átláthatóan és automatizáltan.