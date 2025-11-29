---
title: "WPML Multilingual & Multicurrency for WooCommerce"
description: "Hivatalos WPML-kiegészítő WooCommerce-hez: ingyenes többvalutás működés, WPML-lel együtt teljes többnyelvű webáruház."
sidebar_label: "WPML Multilingual & Multicurrency for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A WPML Multilingual & Multicurrency for WooCommerce egy hivatalos kiegészítő, amellyel egyetlen WooCommerce boltban több pénznemet és – WPML-lel együtt – több nyelvet kezelsz. Ha csak több valutát szeretnél, a bővítmény önmagában is működik. Ha teljes többnyelvű áruház kell (termékfordítás, SEO, e-mailek, pénztár), add hozzá a WPML-t és a String Translationt.

Lényege: “egy bolt – több piac” felállás. Nem kell több webhelyet futtatnod; ugyanabban a katalógusban tudsz lokalizált árakat, fizetési módokat és tartalmat adni, miközben a készlet minden nyelven és valutában szinkronban marad.

## Hogyan működik röviden?

- **Standalone (WPML nélkül)**: teljes körű többvalutás kezelés – árfolyamok, kerekítés, manuális árak és szállítási díjak pénznemenként, geolokációs/előlapos valutaváltás, fizetési kapuk szabályozása és valutánkénti jelentés.
- **WPML-lel együtt**: termékek, variációk, taxonómiák, pénztár és e-mailek fordítása; többnyelvű SEO (hreflang, URL slugok); egységes készletkezelés.

## Fő funkciók, érthetően

### Többvalutás (ingyenes, WPML nélkül is)

- **Valuták felvétele és formázása**: több száz valuta közül választhatsz. Pénznemenként saját **formátumot** és **kerekítési** szabályokat állíthatsz (például „szépárak” .99 végződéssel).
- **Valutaváltó az előlapra**: widgetként, shortcode-dal vagy kóddal beilleszthető, több megjelenítési stílussal. A felhasználó egy kattintással valutát vált.
- **Helyalapú valuta**: a látogató IP/cím alapján automatikusan alapértelmezett valutát állíthatsz, országonként finoman szabályozva (engedélyezés/kizárás).
- **Nyelvalapú valuta (WPML-lel)**: minden nyelvhez rendelhetsz alapértelmezett valutát; egy nyelvhez több valuta is engedélyezhető.
- **Árfolyamkezelés**: automatikus frissítés ütemezve vagy kézi árfolyamok. A kerekítést és a felár/korrekció logikát saját szabályokkal finomhangolhatod.
- **Egyedi árak és szállítási díjak**: termékszinten adhatsz meg **kézi árakat** másodlagos valutákra; a szállítási költségek is beállíthatók pénznemenként.
- **Fizetési kapuk és valuták**: meghatározhatod, mely kapuk jelenjenek meg mely országokban és valutákban, és milyen valutában kapd a kifizetést – függetlenül attól, mit lát a vásárló.
- **Rendelések és analitika**: a rendeléseket valutára szűrheted; a teljesítményt valutánként is áttekintheted.

### Teljes többnyelvű működés (WPML + String Translation)

- **Termékek és variációk fordítása**: minden terméktípus, képfeliratok és kapcsolódó taxonómiák kezelése. Automatizálható gépi fordítással, minőségi ellenőrzéssel.
- **Attribútumok és osztályok fordítása**: attribútumok, szállítási osztályok; variációk szinkronizálása gombnyomásra.
- **URL-ek és végpontok**: lefordítható permalinks, termék/kategória slugok és WooCommerce végpontok – így elkerülhetők a 404-ek.
- **Pénztár és e-mailek**: a checkout és a rendszerüzenetek nyelvileg testreszabhatók.
- **Többnyelvű SEO**: hreflang, nyelvspecifikus URL-slugok, breadcrumbok és meta adatok.
- **Egységes készlet**: egy készlet, több nyelv – nincs duplikációs káosz.

## Gyakorlati példák

- **EU–US webáruház**: beállítod az EUR, USD és GBP valutákat. Geolokációval az USA látogatók USD-t, a brit látogatók GBP-t látnak. A fő bestseller terméknek kézi GBP árat adsz, hogy szép kerek ár jelenjen meg. PayPal csak USD/EUR-ban jelenik meg, Stripe mindháromban; a kifizetéseket mégis egyetlen vállalkozói valutában kéred.
- **Nyelvhez kötött valuta**: német nyelven EUR az alap, svájci németen CHF; mindkettőn engedélyezed az EUR-t választhatóként.
- **Szállítás pénznemenként**: a belföldi futár díját HUF-ban rögzíted, az EU-s díjakat EUR-ban. A vásárló a saját valutájában látja a végösszeget, rejtett váltási meglepetések nélkül.

## Telepítés és indulás

1. Aktiváld a bővítményt, majd a WooCommerce menüben kapcsold be a **Multicurrency** módot és vedd fel a kívánt valutákat.
2. Helyezd el a **valutaváltót** widgetként, shortcode-dal vagy kóddal.
3. Ha többnyelvű áruházat akarsz, telepítsd a WPML-t és a String Translationt, futtasd a varázslót, állítsd be a nyelveket és a fordítási szabályokat.
4. Javaslat: állíts be geolokációt saját licenckulccsal a pontos országfelismeréshez.

Shortcode példa:
```
[currency_switcher format="symbol"]
```

PHP példa:
```php
<?php
// Valutaváltó kiírása sablonban
do_action( 'wcml_currency_switcher', array( 'style' => 'dropdown' ) );
```

Fejlesztői horgok:
```php
// Aktuális valuta lekérése
$currency = apply_filters( 'wcml_price_currency', null );

// Termékár egy megadott valutában (egyedi ár elsőbbséggel)
$price_usd = apply_filters( 'wcml_product_price_by_currency', null, $product_id, 'USD' );

// Felhasználói valuta felülbírálása
add_filter( 'wcml_client_currency', function( $cur ) {
    return 'EUR';
});
```

## Előnyök és értékajánlat

- **Kevesebb üzemeltetés**: egyetlen bolt, egységes készlet, kevesebb hiba és kevesebb karbantartás.
- **Jobb konverzió**: helyi pénznem, helyi fizetési kapuk, letisztult pénztár – kevesebb kosárelhagyás.
- **Pontos árképzés**: automatikus árfolyam, kerekítés, kézi felülírás – mindig piackész árak.
- **SEO és skálázhatóság**: nyelvspecifikus URL-ek és meta elemek, tiszta struktúra a nemzetközi forgalomhoz.
- **Rugalmas riportálás**: valutánkénti nézetek, célzott üzleti döntésekhez.

## Kinek ajánlott?

- **Exportáló webshopoknak** és **D2C márkáknak**, akik több országban értékesítenek.
- **Ügynökségeknek**, akik megbízható, skálázható többnyelvű/többvalutás megoldást adnak ügyfeleknek.
- **Kis- és középvállalkozásoknak**, akik egy boltból akarnak több piacot kiszolgálni, alacsony fenntartási költséggel.
- **WooCommerce-kiegészítőket használóknak** (előfizetések, foglalások, csomagok), mert a bővítmény széles körben kompatibilis.

Nem neked való, ha nem WooCommerce-t használsz, vagy teljesen különálló webhelyeket akarsz országonként.

## Korlátok és tippek

- Kifejezetten **WooCommerce**-hez készült.
- A helyalapú valuta geolokációra támaszkodik; a pontosság érdekében érdemes saját kulcsot beállítani.
- Gondold át a kerekítési és felár-szabályokat, hogy a váltás után is üzletileg kerek árak jelenjenek meg.

## Lényeg

Ezzel a bővítménnyel egyetlen WooCommerce boltban kapsz profi többvalutás működést, WPML-lel kiegészítve pedig teljes értékű többnyelvű áruházat. Gyorsan beállítható, rugalmasan testreszabható, és a nemzetközi értékesítéshez mindent megad, amit a gyakorlatban valóban használni fogsz.