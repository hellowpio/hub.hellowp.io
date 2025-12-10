---
title: "WooCommerce PDF Watermark"
description: "Letölthető PDF-ek automatikus vízjelezése és védelme WooCommerce-ben: szöveges/képes vízjel, jogosultságok és jelszavas védelem."
sidebar_label: "WooCommerce PDF Watermark"
---

## Mi ez és milyen problémát old meg?

A WooCommerce PDF Watermark egy olyan bővítmény, amellyel a boltodban értékesített letölthető PDF-eket (pl. e‑bookok, jegyzetek, útmutatók) automatikusan vízjelezheted és védheted. A célja, hogy visszaszorítsa a jogosulatlan megosztást, egyértelműen jelölje a tulajdonost, és vevőhöz köthető azonosítókkal követhetővé tegye a szivárgások forrását.

Röviden: amint a vevő letölti a PDF-et, a bővítmény előkészíti a fájlt, ráhelyezi a beállított vízjelet, beállítja a jogosultságokat, és a kész, védett példányt adja át neki.

## Fő funkciók, érthetően

- **Szöveges vízjel**: tetszőleges szöveget helyezhetsz el a PDF egyes oldalain. Beállíthatod a pozíciót, betűtípust és betűméretet. Tipikusan vevőadatokat (név, e‑mail, rendelésazonosító) írsz ide, hogy a fájl egyedileg azonosítható legyen.
- **Képes (logós) vízjel**: logót vagy bármilyen képet tehetsz a PDF-re. Szabályozhatod az átlátszóságot és az igazítást, így diszkrét, de látható márkajelölést kapsz.
- **Személyre szabható címkék**: a szövegvízjelben dinamikus mezőket használhatsz (pl. vevőadatok, rendelés adatai). A címkekészlet fejleszthető hookokkal és filterekkel, így speciális adatokat is beemelhetsz.
- **PDF-jogosultságok**: letilthatod a **másolást**, **nyomtatást** és **módosítást**, továbbá **jelszóval** védheted a letöltött fájlokat. Ezekkel megnehezíted a tartalom kinyerését és újracsomagolását.
- **Oldalszintű megjelenítés**: eldöntheted, hogy a vízjel minden oldalon, vagy csak meghatározott oldalakon (pl. csak az elsőn vagy az utolsón) jelenjen meg.
- **Globális és termékszintű szabályok**: állíts be bolt-szintű alapértelmezéseket, és ha kell, termékenként vagy variációnként felülírhatod. Így egy boltban többféle védelmi profil is futhat egyszerre.
- **Fejleszthetőség**: hookokkal és filterekkel bővítheted a működést, új címkéket és egyedi logikákat vezethetsz be.

### Példa vízjelszövegre

```
Ez a PDF személyre szabott példány.
Vevő: {billing_first_name} {billing_last_name} – {billing_email}
Rendelés: #{order_id} | Dátum: {order_date}
Terjesztése tilos.
```

Megjegyzés: a ténylegesen elérhető címkék listáját a bővítmény admin felülete mutatja; szükség esetén fejlesztőként bővíthető.

## Konkrét, gyakorlati használati esetek

- **E‑bookok és kurzusjegyzetek**: minden oldalra halvány, középre igazított szöveges vízjelet teszel a vevő nevével és e‑mailjével; a másolás és nyomtatás tiltva.
- **Márkajelölés katalógusokon**: logó vízjel alacsony átlátszósággal, minden oldalon, hogy egyértelmű legyen a forrás.
- **Belső dokumentumok limitált megosztása**: jelszóval védett letöltés, módosítás tiltása; a vízjel csak az első és utolsó oldalon jelenjen meg.
- **Eltérő termékszabályok**: prémium jelentésekre szigorúbb tiltások és személyes vízjel, ingyenes mintákra csak logó.

## Telepítés és beállítás, lépésről lépésre

1. **Telepítés**: a bővítmény ZIP fájlját töltsd fel a WordPress bővítmények közé, majd aktiváld.
2. **Globális beállítások**: a WooCommerce beállításai között megtalálod a PDF Watermark részt. Itt megadod:
   - vízjel típusát (szöveg vagy kép),
   - vízjelszöveget és a használt címkéket,
   - kép elérhetőségét és átlátszóságát,
   - jogosultságokat (másolás/nyomtatás/módosítás),
   - jelszavas védelmet (ha szükséges),
   - mely oldalakon jelenjen meg a vízjel.
3. **Termék/variáció felülírás**: a termék szerkesztőoldalán külön szabályokat adhatsz meg, vagy akár ki is kapcsolhatod a vízjelet egyes termékeknél.
4. **Tesztelés**: hozz létre egy tesztrendelést, töltsd le a fájlt, és ellenőrizd a vízjelet és a jogosultságokat.

## Technikai követelmények és korlátozások

- **PDF követelmények**: a forrás PDF legyen rétegek nélküli és alacsonyabb PDF-verzióban mentett. Ha hibát látsz, „laposítsd” a dokumentumot, és mentsd régebbi formátumba.
- **FPDF elérhetőség**: a szerveren szükség van a PDF-generálást segítő könyvtárra.
- **Linkek eltávolítása**: a vízjelezés jelenleg eltávolíthatja a beágyazott hivatkozásokat (pl. kattintható tartalomjegyzék). Ezzel számolj a tartalom tervezésénél.
- **Környezeti sajátosságok**: egyes hosting-beállítások ütközhetnek a feldolgozással. Ilyenkor segíthet a PDF-ek kézi (pl. FTP) feltöltése a megfelelő könyvtárba.

## Előnyök és értékajánlat

- **Kalózkodás visszaszorítása**: vevőspecifikus vízjellel visszakereshető a szivárgás forrása.
- **Márkavédelem**: a logó és tulajdonosi jelölések egyértelművé teszik az eredetet.
- **Időmegtakarítás**: automatizált vízjelezés, nincs szükség kézi szerkesztésre minden rendelésnél.
- **Rugalmas szabályozás**: globális alapok és termékszintű kivételek egy helyen.
- **Jogosultság-kezelés**: másolás/nyomtatás/módosítás tiltása és jelszavas védelem egy kattintással.

## Kinek ajánlott?

- **Digitális kiadóknak és szerzőknek**: e‑bookok, white paperek, tananyagok védelmére.
- **Képzésszervezőknek**: kurzusjegyzetek és vizsgaanyagok kontrollált terjesztésére.
- **Ügynökségeknek és tanácsadóknak**: kutatási jelentések, auditok, ajánlatok márkajelölt megosztására.
- **B2B szereplőknek**: árlisták, katalógusok és belső dokumentumok korlátozott körű terjesztésére.

## Gyakorlati tippek és buktatók

- Ha a vízjelezés hibázik, elsőként **laposítsd a PDF-et** és mentsd régebbi verzióba.
- Tervezd úgy a tartalmat, hogy a **kattintható linkek** esetleges eltűnése ne legyen kritikus.
- Többféle termékhez többféle profil kell? Használd a **termék/variáció szintű felülírásokat**.
- Fejlesztőként bővítenéd a címkéket? Használd a bővítmény **hookjait és filtereit**.

## Összegzés

A WooCommerce PDF Watermark célzott, professzionális megoldás a letölthető PDF-ek védelmére. Személyre szabható vízjeleivel, jogosultságkezelésével és rugalmas beállításaival egyszerre növeli a tartalom biztonságát és csökkenti az adminisztrációs terheket. Ha digitális PDF-termékeket árulsz, és fontos számodra a márkavédelem, a visszakövethetőség és az automatizáció, ez a bővítmény pontosan erre való.