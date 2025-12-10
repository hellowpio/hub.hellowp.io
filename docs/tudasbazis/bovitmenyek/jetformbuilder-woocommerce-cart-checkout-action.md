---
title: "JetFormBuilder WooCommerce Cart & Checkout Action"
description: "JetFormBuilder Pro kiegészítő, amely a JetFormBuilder űrlapokat közvetlenül a WooCommerce kosárhoz és fizetési folyamathoz kapcsolja, előtöltött checkouttal."
sidebar_label: "JetFormBuilder WooCommerce Cart & Checkout Action"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder WooCommerce Cart & Checkout Action egy JetFormBuilder Pro addon, amellyel a Gutenbergben (vagy más page builderekben) készült űrlapjaidat közvetlenül a WooCommerce kosár- és fizetési folyamathoz kapcsolhatod. Az űrlap beküldésekor egy általad meghatározott termék a kosárba kerül, a felhasználó a WooCommerce Checkout oldalára jut, és számos checkout mezőt előre kitölthetsz az űrlapból érkező adatokkal. Így egyedi, űrlapvezérelt vásárlási élményt építhetsz, miközben a WooCommerce stabil fizetési ökoszisztémáját használod.

## Fő funkciók, érthetően

### Add to Cart + Redirect to Checkout
- Az űrlap elküldésekor a rendszer 1 darab terméket a kosárba helyez, majd automatikusan a WooCommerce fizetési oldalára irányít. Nincs szükség klasszikus termékoldalra; az űrlap a “vásárlás most” folyamat kezdete.

### Checkout mezők összetérképezése
- A WooCommerce szabványos mezőit (számlázás/szállítás) űrlapmezőkhöz rendelheted. A checkout oldalon a vásárló adatai már előre kitöltve jelennek meg, így gyorsabb a fizetés és kevesebb a hibázás.

### Termékazonosító és dinamikus ár
- A kosárba kerülő termék **ID-je** jöhet kézzel megadva vagy egy űrlapmezőből dinamikusan.
- A **dinamikus ármező** segítségével az űrlap számított végösszegét adhatod át termékárként. Ha üresen hagyod, a termék saját ára érvényesül.

### Egyedi rendelés-részletek (Order Details)
- Kiválaszthatod, mely űrlapmezők jelenjenek meg a WooCommerce “Thank You” oldalon és az admin rendelés-előnézetben. Így a vevő egyedi specifikációi, megjegyzései nem vesznek el.

### AJAX vagy klasszikus beküldés
- **AJAX** beküldéskor az átirányítás csak az összes post-submit akció lefutása után történik.
- **Reload** beküldésnél az átirányítás azonnali. Így te döntöd el, melyik UX illik a folyamathoz.

## Gyakorlati példák

- Egyoldalas “vásárlás most” élmény: az űrlapban kiválasztja a felhasználó a paramétereket (méret, szín, extra szolgáltatás), beküldi, és már a checkouton van, előtöltött adatokkal.
- Ajánlatkérő/kalkulátoros űrlap fizetéssel: az űrlap kiszámolja a végösszeget, átadja a WooCommerce-nek, majd a vevő a megszokott fizetési módokkal rendezheti.
- Egyedi specifikációk rögzítése: például gravírozási szöveg, feltöltött terv, határidő – minden megjelenik a Thank You oldalon és az admin rendelésnézetben.
- WooCommerce eseményekhez műveletek: például automatikus e-mail küldése, amikor a rendelés státusza “Completed”.

## Telepítés és beállítás röviden

1. Aktiváld a JetFormBuilder Pro környezetben a WooCommerce Cart & Checkout Action addont:
   - WordPress > JetFormBuilder > Addons > WooCommerce Cart & Checkout Action > Install > Activate
2. Nyisd meg a kiválasztott űrlapot, és add hozzá a post-submit akciót:
   - New Action > Add to Cart & Redirect to Checkout
3. Konfiguráció a felugró beállításoknál:
   - Get product ID from: Form Field vagy Manual Input
   - WooCommerce Price field: opcionális, a teljes ár forrása
   - WooCommerce order details: jelöld ki, mely űrlapmezőket jelenítse meg a rendelésnél
   - WooCommerce checkout fields map: rendeld hozzá a checkout mezőket az űrlapmezőkhöz
4. Tesztelés: küldd be az űrlapot, ellenőrizd az átirányítást a Checkoutra, majd a Thank You oldalon a kijelölt mezők megjelenését.

Példa konfiguráció (illusztratív):

```
Action: Add to Cart & Redirect to Checkout
Product ID: {form:product_id}
Price field: {form:total_price}

Checkout fields map:
  billing_first_name -> {form:first_name}
  billing_last_name  -> {form:last_name}
  billing_email      -> {form:email}
  billing_phone      -> {form:phone}
  billing_address_1  -> {form:street}
  billing_city       -> {form:city}
  billing_postcode   -> {form:zip}
  shipping_address_1 -> {form:ship_street}

Order details (visible on Thank You & admin):
  - {form:custom_notes}
  - {form:file_upload}
```

WooCommerce eseményindítás (példa):
- Trigger: WC.CHECKOUT.COMPLETE → küldj e-mailt vagy frissíts bejegyzést a rendelés befejezésekor.

## Függőségek és kompatibilitás

- **Szükséges**: JetFormBuilder és aktív WooCommerce.
- **JetFormBuilder Pro** addonként érhető el, induló árral elérhető csomagokban.
- **Megjelenítés**: Gutenberg, Elementor (widget), Bricks, illetve shortcode bárhol.

## Korlátok és fontos megjegyzések

- **Egyetlen tétel**: egy űrlapbeküldés egy terméket tesz a kosárba ezzel az akcióval.
- **WooCommerce kötelező**: inaktív WooCommerce esetén az addon nem működik.
- **AJAX vs Reload**: az átirányítás időzítése az űrlapbeküldési módtól függ.

## Előnyök és értékajánlat

- **Űrlap-alapú értékesítés**: egyedi folyamatok, termékkonfigurátorok, szolgáltatáscsomagok könnyed megvalósítása.
- **Kevesebb súrlódás a checkoutnál**: előtöltött mezők = gyorsabb fizetés, kevesebb elhagyott kosár.
- **Meglévő fizetési kapuk kihasználása**: nem kell külön gateway integrációt építened.
- **Jobb adatátadás**: speciális igények, feltöltött fájlok, megjegyzések végigkísérik a rendelést.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: ha egyedi, űrlapvezérelt vásárlási élményt akarsz WooCommerce-re kötni minimális fejlesztéssel.
- **Termékkonfigurátort üzemeltetőknek**: összetett opciók, dinamikus árképzés, gyors fizetés.
- **Szolgáltatóknak és tanácsadóknak**: ajánlatkérésből azonnali fizetésre átterelés előtöltött checkouttal.
- **Marketing csapatoknak**: kampány- és landolóoldalak “vásárlás most” űrlappal, közvetlen checkout átirányítással.

Ezzel a bővítménnyel pontosan azt kapod, amire az űrlap-alapú értékesítéshez szükséged van: rugalmas űrlapok, zökkenőmentes kosár- és fizetési integráció, valamint teljes kontroll a rendeléshez kapcsolódó adatok felett.