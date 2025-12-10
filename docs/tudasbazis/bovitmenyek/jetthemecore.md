---
title: "JetThemeCore"
description: "Vizuális theme builder Elementorhoz és Gutenberghez: sablonok (fejléc, lábléc, Single, Archive, Woo) létrehozása, feltételekhez kötése és központi kezelése."
sidebar_label: "JetThemeCore"
---

## Mi ez és milyen problémát old meg?

A JetThemeCore egy prémium WordPress theme builder bővítmény, amellyel a teljes webhely szerkezetét – fejléc, lábléc, oldaltörzs, Single/Archive sablonok, 404 és keresési oldalak, valamint WooCommerce oldalak – egyetlen központi felületen hozhatod létre, szabhatod testre és rendelheted feltételekhez. Célja, hogy megszüntesse a „sablonkáoszt”: pontosan lásd, mi hol jelenik meg, mi hiányzik, mi ütközik, és mindezt vizuálisan, kódolás nélkül kezeld. Működik az Elementor (Free) és a Gutenberg szerkesztővel is – nincs szükség Elementor Pro‑ra.

## Gyors kezdés (3 perc)

1. Lépj be: Vezérlőpult > Crocoblock > Theme Builder.
2. Kattints: Create new page template. Válaszd ki, milyen típusú sablont készítesz (fejléc, lábléc, Single, Archive, 404, Search, WooCommerce oldal).
3. Állítsd be a feltételeket: Include/Exclude, Entire/Singular/Archive, szükség esetén további szűkítésekkel (eszköz, szerepkör, URL paraméter, stb.).
4. Rendeld hozzá a részeket: fejléc, test, lábléc. Válassz szerkesztőt (Elementor vagy Gutenberg), készítsd el a tartalmat, ments.
5. Ellenőrzés: a Tree vagy Grid nézet jelzi a sablon állapotát, ütközéseket, hiányokat. Szükség esetén futtasd a „Sync site conditions” eszközt.

## Fő funkciók, érthetően

- **Vizuális Theme Builder két nézettel**
  - **Tree view**: a WordPress sablonhierarchiát fában mutatja. Láthatod, mely helyekhez van sablon, mi hiányzik, hol van ütközés. Gyors navigációt és „issue detection” jelzéseket kapsz.
  - **Grid view**: kártyás áttekintés a sablonokról és feltételeikről.
- **Teljes sablonkör**: készíthetsz fejlécet, láblécet, oldaltestet, Single és Archive elrendezéseket, 404 és Search oldalakat. WooCommerce‑hez egyedileg kezelheted a Checkout, Cart és My Account oldalakat.
- **Feltételes megjelenítés (Conditions)**:
  - Egyszerű szabályok: **Include/Exclude** a kívánt forrásokra (Entire/Singular/Archive).
  - **Haladó feltételek**: eszköz (desktop/tablet/mobil), felhasználói szerepkör, URL paraméter, mobil OS, mobil böngésző, WordPress opció. Több feltételt kombinálhatsz (ÉS/VAGY logikával).
- **Témarészek felülírása**: elrejtheted az eredeti téma fejléceit/láblécét, és a saját sablonjaidat használhatod mindenhol.
- **Site conditions sync**: egy kattintással újraszkenneli és javítja a hozzárendeléseket, ha költözés, bővítménycsere vagy tömeges módosítás után inkonzisztencia lépett fel.
- **Szerkesztői rugalmasság**: Elementor Free vagy Gutenberg – ugyanazon logika szerint hozol létre és rendelsz sablont, függetlenül attól, melyik szerkesztőt használod.
- **Kompatibilitás és ökoszisztéma**: népszerű témákkal (Astra, GeneratePress, Kadence, stb.) és dinamikus mezőmegoldásokkal (JetEngine, ACF, Meta Box, Pods, Toolset) együttműködik. A JetWooBuilder, JetBlocks, JetMenu és JetElements kiegészítők tovább bővítik a lehetőségeket.

## Konkrét, gyakorlati példák

- **Más fejléc vendégeknek és bejelentkezetteknek**: Készíts két fejlécet. Az első feltétele: Include > Entire Site + Role = Subscriber/Admin (vagy „Logged in”). A második: Include > Entire Site + Role = Guest. Eredmény: testreszabott navigáció és CTA-k státusz szerint.
- **Kampányfejléc UTM alapján**: Hozz létre kampány‑fejlécet. Feltétel: Include > Entire Site + URL paraméter = utm_campaign=spring. Így a kampányból érkezők dedikált üzenetet kapnak.
- **CPT archívumok JetEngine‑nel**: Hozz létre egy „Események” egyedi tartalomtípust és taxonómiákat. Készíts Archive és Single sablonokat, majd feltételként válaszd ki a CPT‑t/taxonómiát. Dinamikus listákat és mezőket a JetEngine biztosít.
- **WooCommerce Checkout személyre szabása**: Alkoss egyszerűbb, konverzióbarát Checkout elrendezést, rendeld hozzá a Checkout oldalhoz, és állíts be egységes fejlécet/láblécet a bolt összes oldalára.

## Előnyök és értékajánlat

- **Rendszerezett sablonkezelés**: nincs több szétszórt beállítás és rejtett felülírás – minden egy helyen, vizuális hierarchiában.
- **Gyorsabb fejlesztés**: automatikus célhely‑előbeállítások, másolható sablonok és kombinálható feltételek felgyorsítják a munkát.
- **Kevesebb kód, kisebb kockázat**: vizuálisan oldod meg azt, ami korábban sablonfájlokkal és hookokkal ment.
- **Rugalmasság WooCommerce‑ben is**: kosár, pénztár és fiókoldalak kódolás nélküli alakítása.
- **Témafüggetlenség**: modern témákkal jól együttműködik, így bármikor válthatsz téma nélkülözhetetlen részek újraírása nélkül.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: skálázható sablonstratégia több projektben, átlátható állapotjelzőkkel.
- **E‑kereskedőknek**: gyors UX‑kísérletek a pénztárnál és kulcsoldalakon, feltételes tartalommal.
- **Tartalomépítőknek és marketingeseknek**: célzott üzenetek eszköz, szerepkör vagy kampány szerint, A/B jellegű variációkhoz előkészítve.
- **Haladó WP felhasználóknak**: dinamikus CPT‑projektek gyors felépítése JetEngine‑nel.

## Kompatibilitás, rendszerkövetelmények és tippek

- **Követelmények**: WordPress + Elementor Free és/vagy Gutenberg. WooCommerce oldalakhoz szükséges a WooCommerce.
- **Elemátor Pro együttélés**: ne rendelj azonos helyekre sablont a Pro Theme Builder és a JetThemeCore oldaláról egyszerre. Ha ütközést tapasztalsz, kapcsold ki a Pro helyeit, vagy használd a JetThemeCore felülírás/„Prevent Pro locations registration” beállításait.
- **Karbantartás**: tömeges módosítás után futtasd a „Sync site conditions” eszközt. A Tree view hibajelzései segítenek a gyors hibaelhárításban.
- **GTM beillesztés példa**: ha a sablonokat a JetThemeCore kezeli, a szokásos WordPress hookok lefutnak minden érintett oldalon:

```php
// functions.php
add_action('wp_head', function () {
  // Itt a GTM Head rész
}, 0);

add_action('wp_body_open', function () {
  // Itt a GTM Body rész (noscript)
});
```

## Összefoglalás

A JetThemeCore egy erőteljes, mégis barátságos theme builder, amellyel a webhelyed minden sablonját központilag, feltételes szabályokkal vezérelheted. Megszünteti a sablonkáoszt, felgyorsítja a WooCommerce és dinamikus projektek kivitelezését, és csökkenti a téma‑ és kód‑függőséged – miközben végig te irányítod, mi hol és kinek jelenjen meg.