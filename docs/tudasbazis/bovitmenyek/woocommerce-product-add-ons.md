---
title: "WooCommerce Product Add-Ons"
description: "Hivatalos WooCommerce kiegészítő, amellyel termékeidhez egyedi, ingyenes vagy fizetős opciókat adhatsz rugalmas árazással, globális vagy termékszintű kezeléssel."
sidebar_label: "WooCommerce Product Add-Ons"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Product Add-Ons egy prémium bővítmény, amellyel a termékoldalon további, testreszabható opciókat kínálhatsz: szövegmezők, választólisták, jelölőnégyzetek, fájlfeltöltés, egyedi ár megadása, dátumválasztó stb. Így elkerülöd a „variációrobbanást”: nem kell több tucat variációt felvenned, ha például gravírozást, ajándékcsomagolást vagy extra szolgáltatásokat szeretnél árusítani. Az add-onok nem önálló termékek (nincs külön SKU), és az árkalkuláció automatikusan történik.

## Fő funkciók és működés

### Mezőtípusok (mit látnak és töltenek ki a vásárlóid)

- **Multiple Choice**: egy választás több opcióból, megjelenhet legördülőként, rádiógombként vagy képes csempékkel. Példa: anyag, minta, szín.
- **Checkboxes**: több opció egyszerre választható. Példa: ajándékcsomagolás + üdvözlőkártya.
- **Short Text**: rövid szövegmező validációval (csak betű, csak szám, alfanumerikus, email). Példa: monogram, név.
- **Long Text**: több soros megjegyzés. Példa: üdvözlőkártya szövege.
- **File Upload**: fájl beküldése (logó, kép). A tárhely korlátait érdemes ellenőrizni.
- **Customer Defined Price**: a vásárló által megadott összeg. Példa: adomány, borravaló.
- **Quantity**: külön mennyiség az adott opcióhoz. Példa: kiegészítő kellék darabszám.
- **Heading**: vizuális csoportcím, az űrlap tagolására.
- **Date Picker**: dátumválasztó. Példa: kívánt kézbesítési dátum.

Mindegyik mezőhöz rendelhetsz leírást, helyőrzőt, kötelezőséget, alapértelmezett értéket, valamint min/max korlátot.

### Árazási módok (hogyan számít a felár)

- **Fix díj**: egy összeg hozzáadása a termékhez. Tipikus egyszeri szolgáltatásoknál.
- **Mennyiség alapú**: a termék kosárbeli mennyiségével szoroz. Ha a vásárló 3 darabot rendel, a felár is 3-szoros.
- **Százalékos**: a termékár százaléka, akár kedvezményként is (negatív értékkel).

Alapbeállítás szerint a kosár/pénztár nézetben a fix díjak jelennek meg; szűrőkkel a többi típus is feltüntethető.

### Kezelés és megjelenés

- **Globális csoportok**: a Vezérlőpultban a Products > Add-Ons alatt hozhatsz létre csoportokat, amelyeket kategóriákhoz vagy több termékhez rendelsz. Skálázásra ideális.
- **Termékszint**: az adott termék szerkesztésekor a Product data > Add-ons fülön vehetsz fel saját mezőket. A globális csoportok itt letilthatók, ha nem kellenek.
- **Sorrend és UX**: állítható megjelenési sorrend, kötelezőség, alapértékek, leírások/HTML.
- **Elhelyezés a termékoldalon**: alapértelmezetten a rövid leírás és a Kosárba gomb között (témafüggő), sablon-override-dal módosítható.
- **Variációk**: a variálható termék variációi öröklik a termékszintű add-onokat; variációnként eltérő add-on nem definiálható.

### Import/Export és API

- **Beépített másolás**: add-onok átvétele termékek és globális csoportok között saját Import/Export gombokkal. CSV-alapú import/export nem támogatott.
- **REST API**: elérhetők végpontok globális csoportokhoz és termékszintű add-onokhoz (példa névterek: wc-product-add-ons/v2/global-add-ons). Automatizálásra és integrációkra kiváló.

### Kompatibilitás

- Összedolgozik **Subscriptions** és **Bookings** bővítményekkel.
- **HPOS** és **Cart/Checkout Blocks** kompatibilis működés.

## Gyakorlati példák

1. **Gravírozás**  
   - Short Text mező, max 12 karakter, kötelező.  
   - Árazás: fix díj vagy százalékos felár prémium anyag esetén.

2. **Ajándékcsomagolás**  
   - Checkbox „Ajándékcsomagolást kérek”, fix díj.  
   - Opcionális Long Text üdvözlőkártyához.

3. **Képes anyagválasztó**  
   - Multiple Choice képes opciókkal (fa, márvány, fém), egyes opciókhoz külön felár.

4. **Egyedi összeg (adomány/borravaló)**  
   - Customer Defined Price, min/max korláttal.

5. **Dátumválasztó**  
   - Date Picker a kívánt szállítási vagy átvételi nap megadásához.

## Hasznos snippetek

A kosárban/pénztárban nem csak a fix díjakat szeretnéd látni? Engedélyezd a megjelenítést minden ár-típusnál:

```php
add_filter('woocommerce_addons_add_cart_price_to_value', '__return_true');
add_filter('woocommerce_addons_add_order_price_to_value', '__return_true');
```

Helyezd a kódot a child theme functions.php fájljába vagy egy kódsnippet-kezelőbe.

## Előnyök és értékajánlat

- **Variációk helyett egyszerű opciók**: gyorsabb termékfelvétel, kevesebb karbantartás.
- **Rugalmas árazás**: fix, mennyiség- vagy százalékalapú felár, akár kedvezmény is.
- **Skálázhatóság**: globális csoportokkal percek alatt egységes opciók sok terméken.
- **Jobb vásárlói élmény**: képes választás, tiszta leírások, kötelező mezők.
- **Automatizálhatóság**: REST API-val tömeges létrehozás és integráció más rendszerekkel.

## Kinek ajánlott?

- **Egyedi ajándéktárgyak, nyomdák, ékszerészek**: gravírozás, monogram, személyre szabott üzenetek.
- **Gasztro és kézműves boltok**: díszcsomagolás, üdvözlőkártya, válogatás összeállítás.
- **Szolgáltatók**: gyorsított teljesítés, extra kezelés, feláras kiegészítők.
- **Nonprofitok és közösségi projektek**: adomány vagy borravaló mező.

## Korlátok és tippek

- **Nincs beépített feltételes logika**: összetett, egymásra épülő mezőkhöz használj űrlapkezelőt (pl. Gravity Forms + hozzá tartozó add-on).
- **Nincs CSV-import/export**: a beépített Import/Export gombokkal tudsz másolni.
- **Teljesítmény**: sok mező mentésekor figyelj a szerver beállításokra (pl. max_input_vars). Fájlfeltöltésnél egyes host korlátok (pl. max fájlnév hossza) bezavarhatnak.
- **„Sold individually”**: a termék több, eltérő add-on konfigurációval is kosárba tehető; ha ezt korlátoznád, egyedi kód/snippet szükséges.

## Összegzés

A WooCommerce Product Add-Ons a legegyszerűbb módja, hogy termékeidet személyre szabható opciókkal és átlátható felárakkal bővítsd. Gyors, skálázható (globális csoportok), fejlesztőbarát (REST API), és kiváló vásárlói élményt ad. Ha testreszabást, kiegészítő szolgáltatásokat vagy dinamikus felárakat szeretnél kínálni, ezzel a bővítménnyel pontosan azt kapod, amire szükséged van.