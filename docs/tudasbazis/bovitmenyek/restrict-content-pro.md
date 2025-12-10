---
title: "Restrict Content Pro"
description: "WordPress tagsági és tartalom-hozzáférés kezelő bővítmény, amellyel előfizetéseket értékesíthetsz és tartalmat korlátozhatsz."
sidebar_label: "Restrict Content Pro"
---

## Mi ez és milyen problémát old meg?

A Restrict Content Pro egy komplett **tagsági és tartalom-hozzáférés** kezelő rendszer WordPresshez. Segítségével pontosan szabályozhatod, ki mit láthat az oldaladon (oldalak, bejegyzések, egyedi típusok, kategóriák, címkék), és **előfizetéses hozzáférést** árulhatsz bankkártyás fizetéssel. Megszünteti a széttöredezett megoldásokat: nem kell külön pluginekkel trükköznöd a korlátozáshoz, fizetéshez, számlázáshoz – minden egy helyen történik.

## Hogyan működik röviden?

1. Létrehozol **tagsági szinteket** (ár, időtartam, automatikus megújítás, próbák, belépési díj).
2. Bekapcsolod a **fizetési átjárókat** (alapból Stripe; Pro-val továbbiak is).
3. Kijelölöd, mely **tartalmak** elérhetők mely szinteknek/szerepköröknek.
4. A látogatók **regisztrálnak és fizetnek**, majd belépve automatikusan megkapják a hozzáférést.
5. A tagok saját **fiókfelületen** kezelik előfizetésüket, számláikat, megújításaikat.

## Fő funkciók, érthetően

- **Tartalomkorlátozás**: Beállíthatod, hogy egy teljes oldal, bejegyzés, egyedi bejegyzéstípus vagy akár teljes kategória/címke csak bizonyos tagoknak legyen látható. A kivonat publikus maradhat, a teljes tartalomhoz belépés szükséges. A korlátozás az **RSS**-ben és a **REST API**-ban is érvényes.
- **Tagsági szintek és csomagok**: Tetszőleges csomagot készíthetsz külön árral és időtartammal (nap/hónap/év). Támogatott a **prorata** frissítés és visszaváltás (a rendszer arányosan számol), így nem kell kézzel visszatérítened.
- **Fizetések és számlázás**: Az ingyenes kiadás Stripe-on fogad kártyás fizetést. A Pro eltávolítja a plusz Stripe díjat, és több fizetési átjárót ad. A tagok letölthető **PDF-számlákat** kapnak.
- **E-mail értesítések**: Automatikus e-mailek megrendeléskor, megújításkor, lejárat előtt/után. Pro-ban sablonozható és tagsági szintenként testreszabható.
- **Kedvezménykuponok (Pro)**: Fix vagy százalékos kuponok, lejárattal és felhasználási limittel – ideális kampányokhoz és akciókhoz.
- **Jelentések (Pro)**: Bevételi grafikonok, időszakos és szintenkénti bontás – átlátható működési kép és döntéstámogatás.
- **WooCommerce integráció (Pro kiegészítők)**: Termékek megtekintésének/vásárlásának korlátozása, automatikus **tagkedvezmények**.
- **Dripelt és időzített tartalom (Pro kiegészítők)**: Tartalom fokozatos kiadása napok alapján, időzárak (lock/timeout), vagy fix lejárati dátumok.
- **Csoportos tagság (Pro kiegészítő)**: Egy előfizetés alá több alfelhasználó – céges vagy csapatos felhasználásra.
- **Fejlesztői eszköztár**: Teljes **REST API**, **WP-CLI** parancsok, sok hook/filter és sablon-override – könnyű integráció külső rendszerekkel.
- **Biztonság és UX**: reCAPTCHA támogatás, jelszómegosztás elleni védelem, valamint gördülékeny tagfiók-élmény.
- **Gutenberg és shortcode-ok**: Blokkszerkesztőben és shortcode-dal is korlátozhatsz.

## Gyakorlati példák

- **Paywall magazin**: A cikkek kivonata publikus, a teljes tartalom “Bronz/Ezüst/Arany” szinthez kötött. A lejáró előfizetők automatikus figyelmeztető e-mailt kapnak.
- **Online tananyag**: A leckéket dripelve adod ki – pl. minden tag a csatlakozását követő 3., 7., 14. napon kap új anyagot.
- **Webshop tagkedvezmény**: Bejelentkezett tagok 10–20% automatikus kedvezményt kapnak bizonyos kategóriákban; egyes termékek csak tagoknak láthatók.
- **Vállalati hozzáférés**: Egy cég előfizet, és a csapat tagjait alfelhasználóként osztja hozzá ugyanahhoz a csomaghoz.
- **Multisite site-értékesítés**: Új aloldalakat hozol létre előfizetéshez kötve; a tagság aktiválása automatikusan létrehozza az új site-ot.

## Előnyök és értékajánlat

- **Minden egyben**: korlátozás, fizetés, számlázás, e-mailek – kevesebb bővítmény, kevesebb hibaforrás.
- **Kevesebb ügyfélszolgálat**: önkiszolgáló tagfiók és prorata csomagváltás.
- **Bevételnövelés**: kuponok, próbák, drip, célzott e-mailek és WooCommerce kedvezmények.
- **Biztonságosabb tartalom**: korlátozások RSS/REST felületen is; kiegészítő védelem jelszómegosztás ellen.
- **Fejlesztőbarát**: API-k és hookok miatt könnyen illeszthető egyedi igényekhez.

## Kinek ajánlott?

- **Online magazinok, blogok, podcastok** – fizetős előfizetések és paywall.
- **Oktatási oldalak** – tananyagok, modulok, dripelt leckék.
- **Webshopok** – tagi árak és termék-hozzáférés.
- **Közösségi oldalak, fórumok** – csak tagoknak látható szekciók.
- **Ügynökségek, vállalatok** – csoportos előfizetés, multisite scenarios.
- **Fejlesztők** – testreszabás, integráció, automatizálás.

## Korlátok és megfontolások

- **Médiavédelem**: a beágyazott média URL-je önmagában nem titkos; fájlletöltés-védelemhez külön megoldást használj.
- **Blokkszintű korlátozás**: oldalszintű védelem alapból adott; finom, blokkonkénti szabályozáshoz külön kiegészítő szükséges.
- **Oldalépítők**: a [restrict] shortcode nyitó és záró tagja ugyanabban az elemben legyen.

## Ingyenes vs. Pro és árak

- **Ingyenes**: alap tartalomkorlátozás, tagsági szintek, tagfiók, alap e-mailek, Stripe fizetés – plusz Stripe-díjjal.
- **Pro**: eltávolított Stripe-díj, további fizetési átjárók, kuponok, jelentések, próbaidő, reCAPTCHA, csoporttagság, drip és további kiegészítők, valamint prémium támogatás.

Irányadó éves licencárak: 1 oldal: 99 USD/év; 5 oldal: 149 USD/év; korlátlan: 249 USD/év. Az árak változhatnak.

## Gyors kezdés – shortcode példa

```
[restrict subscription="arany" message="Csak Arany tagok férhetnek hozzá."]
Ez a bekezdés csak Arany tagsággal látható.
[/restrict]
```

Lépések:
1. Telepítsd és aktiváld a bővítményt.
2. Hozz létre legalább egy tagsági szintet (ár, időtartam, megújítás).
3. Állítsd be a fizetési átjárót.
4. Jelöld korlátozottnak a kívánt tartalmakat (meta mező vagy shortcode).
5. Teszteld vendégként és tagként is a hozzáférést.

## Üzemeltetés és fejlesztés

A bővítmény aktívan karbantartott, részletes dokumentációval, REST API-val, WP-CLI támogatással és számos hookkal/templattal. Ezekkel komplex folyamatokat, számlázási logikákat és külső rendszereket is könnyedén integrálhatsz.