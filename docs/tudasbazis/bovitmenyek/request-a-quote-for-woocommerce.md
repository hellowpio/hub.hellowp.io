---
title: "Request a Quote for WooCommerce"
description: "Ajánlatkérő (RFQ) bővítmény WooCommerce-hez: tételek ajánlatkosárba helyezése, testreszabható űrlap, állapotkezelés és megrendeléssé alakítás – kifejezetten B2B és egyedi árazású esetekhez."
sidebar_label: "Request a Quote for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Request a Quote for WooCommerce egy professzionális ajánlatkérő (RFQ) bővítmény. Segítségével a vevőid nem azonnal vásárolnak, hanem termékeket egy **ajánlatkosárba** tesznek, majd egy **testreszabható űrlapon** elküldik az igényüket. Ez különösen hasznos, ha B2B modellel dolgozol, nagy tételű vagy **egyedi árazású** termékeket árulsz, vagy többféle vevőkört (kisker/nagyker) kezelsz eltérő feltételekkel. Digitalizálja az ártárgyalást, csökkenti az e-mailes egyeztetést, és átlátható munkafolyamatot ad a teljes RFQ-kezeléshez.

## Hogyan működik röviden?

- A kiválasztott termék(ek)nél a vásárló **Add to Quote** gombot lát (igény szerint a kosár gomb helyett).
- A tételek az **ajánlatkosárba** kerülnek (mini ajánlatkosár is elérhető), ahol a mennyiségek szerkeszthetők.
- A vevő egy **űrlapon** megadja az igényeit (mezők szabadon bővíthetők), akár **ajánlott árakat** is.
- Az admin az ajánlatot megkapja, státuszt állít, szükség szerint **egyedi árakat** rögzít, és küldi az értesítéseket.
- Az elfogadott ajánlat egy kattintással **megrendeléssé** alakítható (akár a vásárlói oldalon is).

## Fő funkciók, részletesen

- **Gombok és ármegjelenítés szabályozása**
  - Megjelenítheted az **Add to Quote** gombot bizonyos termékeken vagy kategóriákban.
  - Lecserélheted a **Kosárba** gombot, elrejtheted az **árakat**, vagy egyedi szöveget jeleníthetsz meg.
  - Szabályok köthetők **felhasználói szerepekhez** (vendégekhez is), így más élményt adsz kisker és nagyker vevőknek.

- **Szabályalapú vezérlés**
  - Részletes **Quote Rules**: termék, kategória, szerepkör, mennyiség vagy más feltételek alapján.
  - Vegyes modellekhez ideális: pl. vendégnek csak ajánlatkérés, regisztrált kiskernek kosár + ajánlat, nagykernek kizárólag RFQ.

- **Ajánlatkosár és felület**
  - Teljes értékű **ajánlatkosár** mennyiségmódosítással, több tétellel.
  - **Mini ajánlatkosár** a fejlécben, mint a mini cart.
  - Választható **egy- vagy kétoszlopos** ajánlatoldal-elrendezés.

- **Űrlapmezők, validáció, reCAPTCHA**
  - Korlátlan számú, különböző típusú **mező** (szöveg, e-mail, szám, legördülő, checkbox stb.).
  - Kötelező jelölések, rend, címkék, súgók – kevesebb visszakérdezés.
  - Beépített **reCAPTCHA v2** támogatás a spam csökkentésére.

- **Ajánlatállapotok és értesítések**
  - Állapotok: **új, folyamatban, elfogadva, elutasítva, lemondva** stb.
  - Automatikus **e-mail értesítések** a vevőnek és az adminnak minden fontos lépésnél.
  - E-mail sablonok **felülírhatók** a témában.

- **Admin-munkafolyamat és rendeléskonverzió**
  - Külön menüpontok: **All Quotes**, **Quote Rules**, **Quote Fields**, **Settings**.
  - Ajánlatok szerkesztése: tételek, mennyiségek, **egyedi árak**, státuszok.
  - Elfogadás után az ajánlat **megrendeléssé alakítható**, akár a frontenden is engedélyezve.

- **“Offered price” és PDF-ajánlat**
  - A vevők termékenként megadhatják a **saját ajánlott árukat**.
  - Professzionális **PDF-ajánlat** generálás több sablonnal, logóval, színekkel, céges adatokkal.

- **Integráció és testreszabás**
  - **REST API** végpontok ajánlatokhoz és szabályokhoz (GET/POST/PUT/DELETE).
  - **WooCommerce Product Add-Ons** kompatibilitás (megjegyzés: fájlfeltöltés mező nem továbbítható az ajánlatba).
  - **Oldalépítők** esetén alternatív hookok, ha a téma lecseréli az alap WooCommerce hookot.
  - **E-mail sablonok** és nézetek felülírása a témában.

### REST API példa

```
POST /wp-json/wc/v3/quotes
{
  "customer_id": 123,
  "line_items": [
    { "product_id": 99, "quantity": 25, "offered_price": 12.5 }
  ],
  "status": "pending",
  "meta_data": [
    { "key": "delivery_deadline", "value": "2025-11-30" }
  ]
}
```

### Sablonok felülírása a témában

```
yourtheme/woocommerce/addify/rfq/
yourtheme/woocommerce/addify/rfq/emails/
```

## Gyakorlati példák

- **Nagyker értékesítés**: a viszonteladók nem látnak árakat és kosár gombot, csak ajánlatot kérhetnek. Az admin mennyiség és kedvezmény alapján ad egyedi árat, amit a vevő elfogad és rendelésre vált.
- **Egyedi gyártás**: a vevő kiválasztja a terméket, az űrlapon megadja a specifikációt (méret, anyag, határidő), és ajánlatot kér. A PDF-ajánlat tartalmazza a részleteket és az egyedi árat.
- **Vegyes B2B/B2C**: a kisker vásárlók rendes kosárral vásárolhatnak, de kérhetnek ajánlatot is; a nagyker szerepkörnek az árak rejtve, csak RFQ látható.

## Előnyök és értékajánlat

- **Időmegtakarítás**: strukturált űrlap, automatizált értesítések, egykattintásos konverzió.
- **Pontosság és kontroll**: állapotok, auditálható folyamat, PDF-ek, szabályok.
- **Rugalmasság**: szerepkör-alapú viselkedés, egyedi árazás, testreszabható sablonok.
- **Skálázhatóság**: API-val külső rendszerekhez köthető (ERP, CRM).

## Kinek ajánlott?

- **B2B webáruházaknak**, akik tárgyalásos árakkal dolgoznak.
- **Egyedi/összetett termékeket** értékesítőknek, ahol az ár igényfüggő.
- **Vegyes B2B/B2C modelleknek**, ahol vevőkörönként eltérő élményt szeretnél adni.
- **Csapatoknak**, akik a manuális e-mailezés helyett nyomon követhető RFQ-folyamatot akarnak.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt; a menüben megjelenik a **Request a Quote**.
2. Hozz létre legalább egy **Quote Rule**-t: válaszd ki, hol jelenjen meg az RFQ, kinek rejtsd az árakat, milyen gombfeliratok legyenek.
3. Állítsd össze az **ajánlatűrlap mezőit** (kötelező jelölések, sorrend).
4. Konfiguráld az **e-mail értesítéseket** és a **PDF**-beállításokat.
5. Szükség esetén kapcsold be a **reCAPTCHA v2**-t.

## Tippek és hibaelhárítás

- Ha az **Add to Quote** gomb nem jelenik meg, ellenőrizd, hogy a termék **alapára nem üres**. Beállíthatsz 0-t, az árat külön elrejtheted.
- Oldalépítő használatakor válts **alternatív hookokra**, ha a téma nem a WooCommerce alap hookot használja.
- Product Add-Ons esetén a **fájlfeltöltés** mezők tartalma nem kerül át az ajánlatba – tervezz ennek megfelelően.
- Testreszabásnál használd a **sablonfelülírás** útvonalait, és tartsd kézben az üzeneteket, átirányításokat és AJAX visszajelzéseket a jobb UX érdekében.

Ezzel a bővítménnyel teljes, professzionális RFQ-folyamatot kapsz, amellyel átláthatóan, gyorsan és rugalmasan tudod kezelni az egyedi árazású értékesítéseket.