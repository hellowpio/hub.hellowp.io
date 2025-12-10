---
title: "JetWooBuilder For Elementor"
description: "Elementorhoz készült WooCommerce oldalépítő, amellyel kód nélkül készíthetsz egyedi termék-, bolt-, kosár-, pénztár-, fiók- és köszönőoldalakat."
sidebar_label: "JetWooBuilder For Elementor"
---

## Mi ez és milyen problémát old meg?

A **JetWooBuilder** egy WooCommerce-hez tervezett oldalépítő bővítmény **Elementor** alá. Arra való, hogy a webshopod minden kulcsoldalához (termék, bolt/katalógus, kategória/archívum, kosár, pénztár, Saját fiók, Köszönjük) **egyedi, vizuálisan szerkeszthető sablonokat** készíts — **kódolás nélkül**. A WooCommerce alap sablonjai rugalmatlanok, a JetWooBuilder viszont **dedikált Elementor-widgetekkel** ad teljes kontrollt a tartalom és az elrendezés felett.

## Hogyan működik röviden?

- A bővítmény beépít egy **Woo Page Builder** felületet, ahol létrehozhatod a sablonokat (Single Product, Shop/Archive, Cart, Checkout, My Account, Thank You).
- A sablonokat **megjelenési feltételekkel** társíthatod (pl. minden termékre, csak bizonyos kategóriákra stb.).
- A sablonokat Elementorban építed fel, **JetWooBuilder widgetekkel**, melyek a WooCommerce dinamikus adatait jelenítik meg és formázhatóak.
- A JetWooBuilder a WooCommerce-oldalak **törzsrészét (body)** kezeli. A **fejléc/lábléc** és a globális sablonfeltételek vizuális kezelése a JetThemeCore-ral a legkényelmesebb.

## Fő funkciók részletesen

### Oldalsablon-építés WooCommerce-hez
- Készíts és rendelj hozzá sablonokat a következőkhöz: **Single Product**, **Shop/Archive**, **Cart**, **Checkout**, **My Account**, **Thank You**.
- Egy sablont akár több feltételhez is hozzárendelhetsz, így egységes vagy kategóriaspecifikus élményt is megvalósíthatsz.

### Elementor widgetkészlet (válogatás)
- **Shop/Archive**: terméklista rácsban vagy listában (**Products Grid/List/Loop**), **kategóriacsempék**, **rendező** és **lapozó** elemek. A JetSmartFilters integrációval profi **szűrés** és **lapozás** is társítható.
- **Single Product**: **ár**, **akciós ár**, **készlet**, **SKU**, többféle **képgaléria**, **értékelések**, **megosztás**, **jelvények**, **fülek**, **kapcsolódó/ajánlott/keresztértékesített** termékek, **Kosárba** gomb.
- **Cart/Checkout/Thank You**: **kosártábla**, **összesítők**, **kupon**, **számlázási/szállítási űrlapok**, **fizetési szakasz**, **rendelésösszegzés**, **visszaigazoló elemek**.
- **My Account**: **bejelentkezés/kijelentkezés**, **regisztráció**, **rendeléseim**, **letöltések**, **címek/adataim**, **irányítópult** blokkok.

### Elrendezés és dinamikus funkciók
- Többféle **termékképgaléria** elrendezés, **termékkártya/loop váltó** (kártya ↔ lista) a katalógusban.
- **AJAX “Kosárba”** gomb lista nézetekben, gördülékeny interakció a termékböngészés során.
- **Quick View** (JetPopup), **Összehasonlítás/Kívánságlista** (JetCompare&Wishlist) integráció a terméklistákba.

### Ökoszisztéma-integrációk
- **JetThemeCore**: fejléc/lábléc és feltételek vizuális kezelése, a JetWooBuilder “body” sablonjaival együtt.
- **JetSmartFilters**: haladó szűrés, lapozás és rendezés a JetWooBuilder rács/lista/loop widgetjeihez.
- **JetPopup**, **JetCompare&Wishlist**: gyorsnézet, összehasonlítás, kívánságlista gombok.

## Gyakorlati példák

- **Egyedi termékoldal**: képgaléria balra, jobb oldalon ár, készlet, Kosárba gomb és jelvények; alul fülekben leírás, jellemzők és értékelések; végül kapcsolódó termékek.
- **Katalógus elrendezés-váltó**: alapértelmezetten kártyás rács, de a látogató átválthat listanézetre; fent rendező és szűrők, lent lapozó.
- **Fókuszált pénztár**: minimalista Checkout sablon, csak a szükséges űrlapok, jól látható fizetési lépések és rendelésösszegzés.
- **Saját fiók irányítópult**: egyedi kártyák “Rendeléseim”, “Letöltések”, “Számlázási és szállítási címek” gyors elérésével.

## Előnyök és értékajánlat

- **No-code szerkesztés**: fejlesztés nélkül, vizuálisan állítod össze a WooCommerce-oldalak minden elemét.
- **Konzisztens dizájn**: ugyanazzal az eszközkészlettel építed a teljes vásárlói utat a termékoldaltól a köszönőoldalig.
- **Gyorsabb kivitelezés**: sablon-alapú munka, újrafelhasználható blokkok, kevesebb egyedi kód-karbantartás.
- **Jobb UX és konverzió**: AJAX interakciók, Quick View, szűrés/lapozás – gyorsabb böngészés, kevesebb súrlódás.

## Kinek ajánlott?

- **Kis- és középvállalkozóknak**: ha gyorsan, fejlesztő nélkül szeretnél igényes webshopot.
- **Webes ügynökségeknek és site buildereknek**: skálázható sablonozás, egységes komponenskészlet.
- **Marketingeseknek/üzemeltetőknek**: gyors módosítások kampányokhoz, szezonális sablonok feltételes kihelyezése.
- **Fejlesztőknek**: prototípus-készítés, majd finomhangolás; kevesebb “templating” teher.

## Követelmények és kompatibilitás

- Szükséges: **WordPress**, **WooCommerce**, **Elementor**. Az Elementor Pro nem kötelező.
- Ajánlott: naprakész WordPress, PHP és Elementor verziók a stabil működéshez.
- Opcionális: **JetThemeCore** (header/footer és feltételek), **JetSmartFilters** (szűrés/lapozás), **JetPopup**, **JetCompare&Wishlist**.

## Telepítés és első lépések

1. Telepítsd és aktiváld a WooCommerce-t, az Elementort, majd a JetWooBuildert.
2. Menj a Woo Page Builder felületre, válassz sablontípust (pl. Single Product) és hozd létre.
3. Nyisd meg Elementorban, és építsd fel **JetWooBuilder widgetekkel**.
4. Állítsd be a **megjelenési feltételeket** (pl. minden termék, kategória szerint).
5. Szükség esetén kezeld a fejléceket/lábléceket a JetThemeCore-ban, és társítsd a “body” sablonhoz.

```text
Első beállítás – rövid checklist
[ ] WooCommerce + Elementor aktív
[ ] JetWooBuilder telepítve, widgetcsoportok engedélyezve
[ ] Single Product sablon létrehozva és feltételekhez rendelve
[ ] Shop/Archive sablon + szűrés/lapozás beállítva (opcionális: JetSmartFilters)
[ ] Cart, Checkout, Thank You, My Account sablonok elkészítve
[ ] Header/Footer sablonok (opcionális: JetThemeCore) hozzárendelve
```

## Megjegyzések és tippek

- A JetWooBuilder a **törzstartalomért** felel. A **header/footer** és a **feltételkezelés** vizuális, központosított irányításához érdemes JetThemeCore-t használni.
- A **Quick View**, **Összehasonlítás** és **Kívánságlista** funkciók az ökoszisztéma más bővítményeivel aktiválhatók és integrálhatók a terméklistákba.
- Haladó **szűrés** és **lapozás** a JetSmartFilters-szel kapcsolható a Products Grid/List/Loop widgetekhez.

## Összegzés

A JetWooBuilder egy **Elementor-alapú WooCommerce oldalépítő**, amellyel teljes vizuális kontrollt kapsz a termék-, bolt-, kosár-, pénztár-, fiók- és köszönőoldalak felett. Ha kódolás nélkül, gyorsan és egységes dizájnnal szeretnél profi webshop-élményt, ez a bővítmény pontosan neked való.