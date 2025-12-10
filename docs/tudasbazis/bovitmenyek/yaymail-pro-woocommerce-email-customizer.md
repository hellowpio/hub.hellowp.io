---
title: "YayMail Pro - WooCommerce Email Customizer"
description: "Vizuális, drag-and-drop email-szerkesztő WooCommerce-hez, amellyel kódolás nélkül készíthetsz márkaazonos tranzakciós email sablonokat és integrálhatsz külső bővítményekből származó adatokat."
sidebar_label: "YayMail Pro - WooCommerce Email Customizer"
---

## Mi ez és milyen problémát old meg?

A YayMail Pro egy **vizuális email builder** WooCommerce webáruházakhoz. Segítségével kódolás nélkül alakíthatod át a rendelés-visszaigazolás, feldolgozás, szállítási értesítő, jelszó-visszaállítás és más tranzakciós emailek kinézetét és tartalmát. Megoldja, hogy:
- ne kelljen sablonokat felülírnod a témában,
- egységes, **márkaazonos** email arculatod legyen,
- dinamikus, **rendelési és ügyféladatokat** jeleníts meg bárhol,
- és könnyen beépítsd más bővítmények adatait (pl. szállításkövetés, egyedi mezők).

## Fő funkciók, érthetően

- **Drag-and-drop szerkesztő, valós idejű előnézettel**  
  Húzd a blokkokat a vászonra, állítsd a tipográfiát, színeket, margókat. Azonnali előnézet asztali és mobil nézetben. **Undo/Redo** és **szerkesztési előzmények** gyorsítják a munkát.

- **Teljes testreszabás + Globális elemek**  
  Saját **globális fejléceket/lábléceket** és stílusokat adhatsz a teljes email-ökoszisztémára. Így minden sablonod konzisztens marad, és elég egyszer beállítanod a logót, márkaszíneket.

- **Minták és újrahasznosítható blokkok**  
  Előre elkészített **mintablokkok** gyorsítják a kezdést. Saját blokkokat is elmenthetsz egy **könyvtárba**, majd több sablonban újra felhasználhatod (akár szinkronizáltan).

- **Dinamikus adatok és shortcode-ok**  
  Hozzáférsz a rendelési tételekhez, ügyféladatokhoz, számlázási/szállítási információkhoz, kuponokhoz. **Saját shortcode-okat** is létrehozhatsz fejlesztői kiterjesztéssel.

- **Feltételes megjelenítés** (külön kiegészítő)  
  Tartalmi blokkok megjelenítése/elrejtése feltételekhez kötve: rendelésérték, ügyféltípus, lokáció, fizetési mód stb. Ezzel célzott üzeneteket adhatsz minden szegmensnek.

- **Melléklet csatolása**  
  PDF számla, használati útmutató, ajánlat vagy szerződés csatolása a megfelelő emailhez.

- **Többnyelvűség**  
  Kompatibilis vezető fordító és többnyelvű bővítményekkel. A szövegeket sablonszinten fordíthatod, nyelvenként eltérő tartalommal.

- **Kompatibilitás és mobiloptimalizálás**  
  Email-kliensekre optimalizált kimenet, külön mobil beállításokkal és bevált gyakorlatokkal.

- **Tesztelés és export/import**  
  Előnézet valós rendelési adatokkal, **teszt email** küldése több kliensbe. Sablonok **exportálása/importálása** és megoldások átvitele környezetek között.

- **Integrációk**  
  Beépített támogatás sok népszerű WooCommerce bővítményhez: például szállításkövetés (különböző fejlesztőktől), Checkout Field Editorok, egyedi mezők (ACF), egyedi rendelésstátuszok/mezők, többnyelvű bővítmények és sok más.

## Gyors indulás

1. Telepítsd és aktiváld a bővítményt, majd nyisd meg a WooCommerce → Email Customizer menüt.  
2. Válaszd ki a szerkesztendő sablont (például Rendelés megerősítése).  
3. Húzd be a szükséges blokkokat (szöveg, gomb, rendelés tételei, kupon, közösségi ikonok stb.).  
4. Állítsd a stílusokat, globális fejléceket/lábléceket és a dinamikus mezőket.  
5. Nézd meg mobil/asztali előnézetben, válassz valós rendelést, küldj teszt emailt.  
6. Mentsd és engedélyezd a sablont. A bővítmény a WooCommerce emailjeit **kódolás nélkül felülírja**.

## Gyakorlati példák

- **Upsell vagy csomagajánlat**: ha a rendelés értéke meghalad egy küszöböt, ajánlj kiegészítő terméket vagy kupont a következő vásárlásra.
- **Szállításkövetés beágyazása**: a teljesített rendelés emailjébe tedd be a fuvarszámot és a nyomkövetési linket a használt tracking bővítményből.
- **B2B üzenetek**: nagykereskedelmi ügyfeleknek külön blokk, például fizetési feltételek vagy dedikált kapcsolattartó.
- **Dokumentum csatolás**: termékhez tartozó PDF kézikönyv automatikus csatolása a „Rendelés feldolgozás alatt” emailhez.

Példa tárgy- és törzsszöveg-dinamikára:
```
Tárgy: {site_title} – Rendelésed #{order_number}
Szia {billing_first_name}, köszönjük a rendelésed! A csomagod állapota: {order_status}.
```

## Előnyök és érték

- **Idő- és költségmegtakarítás**: nincs sablon-felülírás, nincs kódolás – a marketing gyorsan tud módosítani.
- **Konzisztens márkaélmény**: globális stílusok és elemek minden emailben.
- **Nagyobb bevétel és kevesebb support**: célzott ajánlatok, pontos információk, jobb nyomon követhetőség.
- **Skálázhatóság**: minták, újrahasznosítható blokkok, export/import – ügynökségi és többboltos környezetben is hatékony.

## Pro, Addonok és integrációk

- A **Pro** adja a vizuális builder fejlett képességeit, a mellékleteket, globális változókat, mintákat és a széles körű integrációkat.  
- A **YayMail Addons** külön kiegészítők, amelyek plusz bővítmények extra emailjeinek vizuális szerkesztését teszik lehetővé (például előfizetések, foglalások, automatizációk, nagykereskedelem, ajándékkártyák, kuponcsomagok, nyomon követés).  
- Fontos: a Pro **nem** tartalmazza automatikusan az Addonok által hozott extra email sablonokat.

## Fejlesztőknek

- Elérhető **API** saját elemek, dinamikus mezők és shortcode-ok regisztrálására, valamint hook-ok az email-kimenet finomhangolásához.  
- Támogatott többnyelvű és egyedi mező alapú folyamatok, így komplex üzleti logika is beépíthető.

## Kinek ajánlott?

- **Webshop tulajdonosok és marketingesek**: gyors, kódmentes testreszabás és A/B jellegű iterációk.  
- **Ügynökségek**: szabványosítható workflow, újrahasznosítható minták, gyors átadások.  
- **Fejlesztők**: bővíthető architektúra, integrációk és API-k a bonyolult igényekhez.

## Élesítés előtti ellenőrző lista

- Minden sablon előnézetben ellenőrizve asztali/mobil nézetben  
- Valós rendelés adataival tesztelve (különböző fizetési/szállítási módokkal)  
- Linkek, gombok és nyomkövetési információk kipróbálva  
- Többnyelvű tartalom helyes megjelenítése  
- Mellékletek csatolása és mérete rendben  
- Spam pontszám és fő kliens-megjelenés (Gmail/Outlook) ellenőrizve  
- Export biztonsági mentés készítve

## Támogatás és követelmények

A bővítmény modern WordPress–WooCommerce környezetben működik, naprakész PHP-val. Rendelkezésre áll részletes dokumentáció, jegyrendszer és chat alapú ügyféltámogatás, valamint pénzvisszafizetési garancia.