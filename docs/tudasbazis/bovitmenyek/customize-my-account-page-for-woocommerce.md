---
title: "Customize My Account Page For Woocommerce"
description: "Prémium WooCommerce bővítmény, amellyel teljesen testre szabhatod a „Saját fiók” oldal menüjét, tartalmát és megjelenését – kódolás nélkül."
sidebar_label: "Customize My Account Page For Woocommerce"
---

## Mi ez és milyen problémát old meg?

A Customize My Account for WooCommerce egy prémium kiegészítő, amellyel a WooCommerce „Saját fiók” oldalát teljesen a saját üzleti céljaidhoz és márkádhoz igazíthatod. Megoldja az alap WooCommerce felület merevségét: új füleket (végpontokat) adhatsz hozzá, a meglévőket átrendezheted vagy elrejtheted, linkeket és csoportokat hozhatsz létre, és mindezt élő előnézettel finomhangolhatod. Így a fiókoldal nem csak információs pont lesz, hanem valódi ügyfélportál.

## Mit tud – fő funkciók, érthetően

### Végpontok, linkek, csoportok
- **Végpontok (fülek)**: tetszőleges számú saját menüpontot hozhatsz létre címmel, SEO‑barát sluggal, ikonnal és egyedi tartalommal. A tartalom WYSIWYG szerkesztőben készülhet, képekkel, HTML‑lel és shortcode‑okkal.
- **Linkek**: olyan menüelemek, amelyek egy belső oldalra vagy külső URL‑re visznek, akár új fülben megnyitva. Ideális külső eszközökhöz (jegykezelő, hűségprogram).
- **Csoportok**: kapcsolódó végpontok és linkek logikus gyűjtői, amivel több szintű, áttekinthető menüt alakíthatsz ki.

### Drag‑and‑drop és láthatóság
- **Húzd‑és‑ejtsd rendezés**: a teljes menüstruktúrát vizuálisan, az egérrel alakíthatod.
- **Szerepkör alapú láthatóság**: pontosan megadhatod, mely végpontok jelenjenek meg például nagyker vagy VIP ügyfeleknek.
- **Alapértelmezett fül**: beállíthatod, melyik tab nyíljon meg elsőként a fiókoldalon.

### Tartalomszerkesztés és „smart tagek”
- **WYSIWYG tartalom**: beépített szerkesztő médiatámogatással, shortcode‑okkal.
- **Smart tagek**: dinamikus adatok (pl. név, e‑mail, cím, aktuális dátum) beszúrása, hogy személyre szabott, kontextusérzékeny tartalmat jeleníts meg.

### Profilkép kezelés
- **Avatar feltöltés**: a vásárló a fiókoldalon saját profilképet tölthet fel (méretkorlát, placeholder beállításokkal), növelve a személyes élményt.

### Megjelenés és élő előnézet
- **Elrendezések és stílusok**: vertikális/horizontális menü; több előre definiált stílus (Default/Modern/Classic) és színpaletta.
- **Navigáció és tipográfia**: betűméretek, ikonok, csoportok nyitott/zárt állapota, külön kijelölt kijelentkezés gomb.
- **Térközök és konténerek**: oldal-, menü- és profilkép‑blokkok pontos spacing beállításai.
- **Eszköznézetek**: desktop/tablet/mobil előnézet; **egyedi CSS** mező haladó finomhangoláshoz.

### Gyorsabb működés és fejlesztői opciók
- **AJAX‑os fülváltás**: a tartalom frissítése teljes oldalbetöltés nélkül, gördülékeny UX‑szel.
- **Hibakeresés**: nem minifikált assetek és egyes front‑end könyvtárak kapcsolgatása, ami segít ütközések feltárásában és fejlesztés közbeni diagnosztikában.

### Kompatibilitás és fordítás
- **Kulcs Woo‑kiegészítőkkel kompatibilis** (Bookings, Subscriptions, Memberships, Subscription Downloads).
- **Fordításra kész**, többnyelvűség‑támogatással (pl. WPML, Polylang).

## Gyakorlati példák

- **„Visszaküldések” fül**: hozz létre egy egyedi végpontot űrlappal és eljárási leírással, smart tagekkel személyre szabva (pl. név, rendelési azonosító).
- **„Hűségprogram” menü**: készíts egy csoportot, benne egy külső linkkel a pontgyűjtő felületre és egy belső füllel a kedvezmény‑szabályoknak.
- **Nagyker ügyfelek**: állíts be role‑based láthatóságot egy „Nagyker árlisták” fülre, ahol csak a megfelelő szerepkör lát kategória‑lista és letölthető XLS linkeket.
- **Tudásbázis/FAQ**: egy „Segítség” csoportban gyűjts videókat, GYIK‑et és támogatási linkeket, hogy csökkenjen a bejövő ügyfélszolgálati terhelés.
- **Promóciók és cross‑sell**: a „Dashboard” tartalmába helyezz bannert és shortcode‑ot az aktuális ajánlatokhoz.

## Telepítés és első lépések

1. Telepítsd a bővítményt a Vezérlőpultban a Bővítmények menüben, majd aktiváld.
2. Nyisd meg az admin felületén a három fő területet:
   - **Endpoints**: végpontok, linkek, csoportok létrehozása és rendezése.
   - **Customizer**: elrendezés, színek, tipográfia, spacing, ikonok, eszköznézetek.
   - **Settings**: alapbeállítások, AJAX navigáció, fejlesztői opciók, visszaállítás.
3. Adj hozzá egy új fület: cím, slug, ikon, tartalom, láthatóság szerepkör szerint, majd rendezd a menüben.

Példa egyedi CSS‑re (Additional CSS mező):

```css
/* Kisebb betűméret és szorosabb menü spacing mobilon */
@media (max-width: 768px) {
  .woocommerce-account .woocommerce-MyAccount-navigation {
    font-size: 14px;
  }
  .woocommerce-account .woocommerce-MyAccount-navigation ul li {
    margin-bottom: 6px;
  }
}

/* Kijelentkezés gomb kiemelése */
.woocommerce-account .woocommerce-MyAccount-navigation li.woocommerce-MyAccount-navigation-link--customer-logout a {
  background: #222; color: #fff; border-radius: 6px; padding: 10px 12px;
}
```

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: kódmentes végpont‑kezelés és dizájn, fejlesztő bevonása nélkül.
- **Márkaazonos élmény**: koherens arculat, pontos tipográfia és színek, személyesített tartalom.
- **Jobb UX, nagyobb konverzió**: gyors, AJAX‑os navigáció, logikus csoportosítás, releváns linkek.
- **Kevesebb támogatási igény**: a felhasználó mindent a fiókoldalon talál – folyamatleírásokkal és GYIK‑kel.
- **Skálázhatóság**: szerepkör‑érzékeny menü, több kiegészítővel kompatibilis, fejlesztői hibakereső eszközökkel.

## Kinek ajánlott?

- **Webshop‑tulajdonosoknak**, akik a fiókoldalt üzleti eszközzé tennék (promók, hűség, tudásbázis).
- **Ügynökségeknek**, akik gyorsan, kód nélkül szeretnének testreszabott ügyfélportált átadni.
- **Előfizetéses/membership alapú oldalaknak**, ahol kulcs a szerepkör‑függő tartalom.
- **Nagykereskedőknek**, akik differenciált információt és dokumentumokat osztanak meg partnerekkel.

Ha szeretnél kész recepteket (pl. „Visszaküldések” vagy „Hűségprogram” fül lépésről lépésre), jelezd, és adok konkrét beállítási mintákat.