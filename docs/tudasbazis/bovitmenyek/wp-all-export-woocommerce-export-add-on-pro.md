---
title: "WP All Export - WooCommerce Export Add-On Pro"
description: "Prémium kiegészítő a WP All Exporthoz, amellyel WooCommerce-termékeket, rendeléseket, vásárlókat, kuponokat és értékeléseket exportálhatsz testreszabott CSV/Excel/XML fájlokba és automatizált feedekbe."
sidebar_label: "WP All Export - WooCommerce Export Add-On Pro"
---

## Mi ez és milyen problémát old meg?

A WP All Export – WooCommerce Export Add‑On Pro egy olyan prémium kiegészítő, amely a WP All Export felületét kifejezetten WooCommerce-adatok exportálására optimalizálja. Akkor hasznos, ha a beépített WooCommerce export korlátos számodra: variációk, attribútumok, képgalériák, tételsorok, adók, kedvezmények, egyedi mezők vagy 3. feles bővítmények adatai kellenek jól strukturált, automatizálható formában.

Lényegében mindent kézbe ad, amivel rugalmas riportokat, feedeket és integrációkat készíthetsz – kézzel vagy ütemezve, kis és nagy adathalmazokra egyaránt.

## Előfeltételek és környezet

- Szükséges: **WP All Export** és **WooCommerce**. Az add‑on a Pro csomag része, önmagában nem működik.  
- **HPOS**: használd a legfrissebb WooCommerce‑et és a hozzá illeszkedő bővítményverziókat. Élesítés előtt tesztelj staging környezetben.

## Fő funkciók részletesen

### Célzott WooCommerce‑exportok
- **Termékek**: variációk, attribútumok, kategóriák, készlet, árak, képgalériák és bármely egyedi meta.  
- **Rendelések**: tételsorok, adók, szállítás, díjak/kedvezmények, visszatérítések.  
- **Vásárlók, kuponok, értékelések**: minden lényeges mezővel, egységes lépésekkel.

Mit jelent ez a gyakorlatban? Nemcsak „alap” listát kapsz, hanem pontosan azt az adatképet, amire a könyvelődnek, a hirdetési platformnak vagy az ERP‑nek szüksége van.

### Kimeneti formátumok
- **CSV, Excel (XLS/XLSX), XML** – beleértve a nagy fájlok darabolását és speciális kódolási/bom beállításokat.  
- **Google Merchant Center**: dedikált feed sablonnal, a kötelező mezők vezetett kitöltésével.

### Drag‑and‑drop mezőválasztó és számított mezők
- Szabadon **átrendezheted**, **átnevezheted** és **kombinálhatod** az oszlopokat.  
- **Számított (computed) mezők**: beépített PHP‑támogatás az értékek átalakításához, pl. bruttó ár számítása, szövegösszefűzés, feltételek.

Példa egy egyszerű számított logikára:
```
if ($stock > 0) { return 'in_stock'; }
return 'out_of_stock';
```

### Szűrés és lekorlátozás
- Összetett szűrés bármely mezőre, beleértve **relatív dátumokat** (pl. „utolsó 7 nap rendelései”) és kombinált feltételeket (állapot, kategória, készlet > 0 stb.).

### Ütemezés és kézbesítés
- **Automatikus futtatás** beépített ütemezővel vagy saját **cron** feladattal.  
- **Kézbesítés** e‑mailben vagy felhő‑tárhelyre, valamint valós idejű feldolgozás és **Zapier** triggerelés.

### Nagy adathalmazok stabil kezelése
- **Fájldarabolás**, rekordonkénti feldolgozás, „**csak új/módosult**” rekordok exportja.  
- **Client Mode** és megszakításkezelő beállítások a megbízható futáshoz.

## Gyakorlati példák

- **Google Merchant Center feed**: válaszd a GMC feed típust, párosítsd a termékmezőket (pl. cím, leírás, ár, availability), ütemezd napi frissítésre, és add meg a feed URL‑t a Merchant Centerben.  
- **Rendelések → könyvelés/ERP**: óránként exportáld az új vagy frissült rendeléseket tételsorokkal, adókkal és kuponokkal. Szűrj rendelésállapot szerint, és kézbesítsd a fájlt e‑mailben vagy felhőbe.  
- **Migrálás és tömeges szerkesztés**: exportáld a termékeket, módosítsd Excelben (ár, készlet, leírás), majd importáld vissza a WP All Importtal.  
- **BI/riporting**: részletes ügyfél‑ és rendelésadatok exportja Excel/Sheets felé elemzéshez, heti ütemezéssel.

## Hogyan működik – lépésről lépésre

1. Telepítsd és aktiváld a **WP All Export**, **WooCommerce** és a **WooCommerce Export Add‑On Pro** bővítményeket.  
2. Lépj a **All Export → New Export** menübe, válaszd ki a WooCommerce adattípust (pl. Products vagy Orders).  
3. A drag‑and‑drop felületen állítsd össze az oszlopokat; adj hozzá szükség esetén **számított mezőket**.  
4. Állíts be **szűrőket** (pl. dátum, státusz, kategória).  
5. Válassz **kimeneti formátumot** (CSV/Excel/XML vagy GMC feed) és fájlbeállításokat (darabolás, kódolás).  
6. Konfiguráld az **ütemezést** és a **kézbesítést** (e‑mail, felhő, valós idejű feldolgozás).  
7. Futtasd a tesztexportot, ellenőrizd a mezőket, majd indítsd az éles ütemezést.

## Előnyök és értékajánlat

- **Időmegtakarítás**: automatizált exportok, csak az új/módosult rekordok feldolgozása, kézbesítés és integrációk.  
- **Rugalmasság**: bármely WooCommerce mező, variációk, tételsorok és egyedi meta is megcélozható.  
- **Megbízhatóság nagy boltoknál**: darabolás, rekordonkénti feldolgozás és megszakításkezelés.  
- **Fejlesztőbarát**: PHP‑alapú átalakítások, valós idejű export, Zapier‑triggek – gyors iteráció integrációkhoz.  
- **Marketing‑kész**: beépített GMC sablon a gyors és szabálykövető feed‑építéshez.

## Kinek ajánlott?

- **Webáruház‑tulajdonosok/üzemeltetők**: riportok, feedek, könyvelési és logisztikai adatszolgáltatás automatizálása.  
- **Ügynökségek**: hirdetési és piactéri feedek, több ügyfélre skálázható ütemezett exportok.  
- **Fejlesztők/integrátorok**: ERP/CRM/számlázó rendszerekhez kötött exportfolyamatok, egyedi mező‑transzformációk, real‑time integrációk.

## Kompatibilitás és tippek

- **HPOS**: mindig friss verzióval dolgozz, és élesítés előtt tesztelj staging környezetben.  
- **Nagy exportoknál**: használj fájldarabolást, rekordonkénti feldolgozást, és kapcsold be a megszakítások kezelésére ajánlott opciókat.  
- **Biztonságos futtatás**: a Client Mode csökkenti a szerverkörnyezetből adódó hibák kockázatát.

Ha szeretnéd, adok egy személyre szabott ellenőrzőlistát a saját exportfolyamatod felépítéséhez (mezők, szűrések, ütemezés, kézbesítés, visszaimport‑stratégia).