---
title: "LearnDash LMS - Samcart Integration"
description: "Hivatalos LearnDash kiegészítő, amely a SamCart vásárlásait automatikus LearnDash kurzus-hozzáféréssé alakítja, fiók‑létrehozással és beiratással."
sidebar_label: "LearnDash LMS - Samcart Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Samcart Integration egy hivatalos kiegészítő, amely összeköti a SamCart fizetési és checkout rendszerét a LearnDash kurzus-hozzáférésekkel. Ha valaki megvesz egy terméket a SamCartban, a bővítmény automatikusan létrehozza a WordPress-fiókját (ha még nincs), és beiratja a kijelölt LearnDash kurzus(ok)ba. Ezzel megszűnik a manuális felhasználó‑létrehozás és beiratás, a visszatérítések és előfizetés-lemondások pedig automatikusan kurzusmegvonást eredményeznek.

## Hogyan működik röviden?

- A WordPress-ben létrehozol egy SamCart “product” rekordot, amelyhez hozzárendeled a LearnDash kurzusokat.
- A bővítmény generál egy Notification URL-t (webhook), amit beillesztesz a SamCart termék beállításaiba.
- Sikeres fizetéskor a SamCart értesíti a WordPress oldaladat; a bővítmény fiókot hoz létre és beirat.
- Visszatérítés vagy előfizetés-lemondás esetén a rendszer automatikusan kiveszi a tanulót a kapcsolt kurzusokból.

## Fő funkciók részletesen

- **Automatikus fiók- és kurzus-hozzárendelés:** A sikeres SamCart-vásárlás után a bővítmény ellenőrzi, létezik‑e a vásárló email-címe a WordPress-ben. Ha nem, létrehoz egy felhasználót, majd beiratja a megadott LearnDash kurzus(ok)ba. Így a “vásárlás → hozzáférés” áramlat teljesen automatikus.
- **Több kurzus egy termékhez (kurzuscsomagok):** Egy SamCart termékhez több LearnDash kurzust is csatolhatsz. A vásárló azonnal megkapja az összes csomagolt kurzushoz a hozzáférést.
- **Fizetési kapuk támogatása a SamCarton keresztül:** Bármely SamCartban bekötött fizetési szolgáltatóval működik. A beiratás a sikeres tranzakció jelzésére történik, függetlenül a konkrét gateway-től.
- **Előfizetések és ismétlődő díjak kezelése:** Ha a termék előfizetéses, a hozzáférés aktív marad, amíg a fizetések rendben zajlanak. Lemondás vagy sikertelen fizetés esetén a bővítmény automatikusan megvonja a kurzus-hozzáférést.
- **Automatikus leiratás visszatérítésnél:** Refund esetén a rendszer eltávolítja a felhasználót a kapcsolt kurzusokból, így a hozzáférési állapot mindig naprakész.
- **SamCart-specifikus mezők és webhook:** A WordPress-ben rögzíted a SamCart Product ID-t, és a generált Notification URL-t bemásolod a SamCart termék Advanced beállításaiba. Ez biztosítja az események szinkronját.
- **Zárt kurzus-hozzáférés és egyértelmű checkout útvonal:** A LearnDash kurzusokat “Closed” módra állítod, a kurzus gombját pedig a SamCart checkout URL-re irányítod, így a tanuló mindig a megfelelő fizetési folyamatba kerül.

## Gyakorlati példák

- **Egyetlen kurzus értékesítése:** Készítesz egy “Photoshop Alapok” SamCart terméket. A vásárló fizet, a bővítmény létrehozza a fiókját és azonnal beiratja a kurzusba.
- **Kurzuscsomag:** “Webdesigner csomag” néven 3 kurzust csomagolsz egy SamCart termékbe. Vásárlás után a tanuló mindhárom kurzushoz hozzáfér.
- **Előfizetéses akadémia:** Havi díjas tagságot adsz el SamCarton. Amíg az előfizetés aktív, a tanuló hozzáfér a kurzusokhoz; lemondáskor automatikusan kikerül belőlük.
- **Visszatérítés kezelése:** Ha refundot adsz SamCartban, a tanuló hozzáférése megszűnik, nincs szükség manuális beavatkozásra.

## Telepítés és alapbeállítás

```text
1) WordPress > LearnDash LMS > Add-Ons: telepítsd és aktiváld a “SamCart for LearnDash” bővítményt.
2) SamCartban hozd létre a terméket, jegyezd fel a Product ID-t.
3) WordPress > LearnDash LMS > SamCart > Add New Samcart Product:
   - Cím, slug, SamCart Product ID megadása
   - Associated Courses: válaszd ki a kurzus(oka)t
   - Mentsd el, másold ki a Notification URL-t
4) SamCart termék Advanced beállításainál illeszd be a Notification URL-t.
5) LearnDash kurzusnál állítsd az Access Mode-ot “Closed”-ra,
   és a Button URL-hez add meg a SamCart checkout URL-t.
```

Előfeltételek: aktív LearnDash telepítés és érvényes SamCart előfizetés.

## Előnyök és értékajánlat

- **Időmegtakarítás:** Nincs több kézi beiratás, fiókgenerálás vagy hozzáférés-megvonás.
- **Kevesebb hibalehetőség:** A webhook-alapú szinkron mindig konzisztens hozzáférést biztosít.
- **Jobb konverzió:** Kihasználhatod a SamCart kész checkout sablonjait, A/B tesztelését és analitikáját.
- **Egyszerű stack:** Nincs szükség teljes webáruházra, mégis profi fizetési élményt adsz.

## Kinek ajánlott?

- **Egy vagy kevés kurzust** áruló oktatóknak/ügynökségeknek, akik gyors, letisztult checkoutot szeretnének.
- **Előfizetéses modelleket** használóknak, ahol kulcsfontosságú az automatikus hozzáféréskezelés.
- **Konverziófókuszú** értékesítőknek, akik élni akarnak fejlett analitikával és teszteléssel.

## Mikor ne ezt válaszd?

- Ha **nagyon sok terméket/kurzust** kezelsz, és teljes e‑kereskedelmi kontrollt akarsz (pl. bonyolult csomagok, kuponlogika minden szinten).
- Ha **szűk a költségkereted**, és nem fér bele egy külön checkout szolgáltatás előfizetése.
- Ha inkább **WordPressen belül** szeretnél mindent kezelni egy komplex webshop ökoszisztémával.

## Árazás és licenc

A kiegészítő a LearnDash ökoszisztémán belül díjmentesen elérhető, de használatához aktív LearnDash licenc és külön SamCart előfizetés szükséges. A SamCart egy prémium szolgáltatás; az elszámolás és a fizetési kapuk a SamCart oldalon történnek.

## Haladó integrációk

Ha a SamCart eseményeket további rendszerekhez is kapcsolnád (pl. csoport-hozzáadás, e-mail automatizálás, CRM), használhatsz automatizáló eszközöket, amelyek SamCart–LearnDash triggerekre és akciókra épülnek.

--- 

Röviden: ezzel a bővítménnyel a SamCarton történt vásárlásból automatikus LearnDash hozzáférés lesz – gyorsan, megbízhatóan, kézi adminisztráció nélkül.