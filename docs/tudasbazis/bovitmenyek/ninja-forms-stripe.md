---
title: "Ninja Forms - Stripe"
description: "Prémium Ninja Forms kiegészítő Stripe Checkout integrációval: egyösszegű és előfizetéses fizetések, több fizetési mód, SCA-megfelelés."
sidebar_label: "Ninja Forms - Stripe"
---

## Mi ez és milyen problémát old meg?

A **Ninja Forms – Stripe** egy prémium kiegészítő, amellyel közvetlenül egy Ninja Forms űrlapból fogadhatsz **egyösszegű** és **előfizetéses** fizetéseket. A beküldés után a vásárló a **Stripe Checkout** biztonságos felületére kerül, majd a sikeres fizetést követően visszatér a webhelyedre, ahol lefutnak az űrlap további műveletei (például e-mail értesítés, naplózás). Ezzel kiváltod egy teljes webshop felépítését, és egyszerű űrlapokból is professzionális, SCA-kompatibilis fizetést kínálsz.

## Hogyan működik röviden?

1. **Összekapcsolás**: beállítod a Stripe API kulcsokat a Ninja Forms Stripe beállításainál.  
2. **Űrlap-akció**: az űrlapodban hozzáadsz egy **Stripe** akciót (Emails & Actions).  
3. **Összeg meghatározása**: a Stripe akcióban kiválasztod a végösszeg forrását (fix, számítás, mező, előfizetés).  
4. **Fizetési módok**: megadhatod, hogy **Card Only** vagy **All Methods** elérhető legyen.  
5. **Tesztelés**: bekapcsolhatod a **Test Mode**-ot teszt kulcsokkal és kártyákkal.  
6. **Folyamat**: űrlapbeküldés → átirányítás Stripe Checkoutra → siker esetén visszairányítás → űrlap-akciók lefutnak.

Technikai feltételek: **HTTPS**, megfelelő **TLS**, és a Stripe által megkövetelt API-verzió használata szükséges az éles fizetésekhez.

## Fő funkciók, érthetően

- **Több fizetési mód Stripe-on keresztül**  
  Nem csak bankkártya: használhatsz **Apple Pay**, **Google Pay**, banki terheléseket (pl. ACH, SEPA) és banki átirányításokat (pl. iDEAL, Sofort). Az űrlapban választhatsz: **Card Only** (csak kártya) vagy **All Methods** (az összes, ami a Stripe fiókodban engedélyezve van).

- **Egyösszegű és ismétlődő fizetések**  
  Alapértelmezetten egyszeri terhelés történik. **Előfizetéshez** a Stripe-ban létrehozott termék/ár **Plan ID**-ját adod meg; innen a Stripe kezeli a ciklikus terheléseket, akár próbaidővel is.

- **Rugalmas végösszeg-képzés**  
  A „**Get Total From**” beállítással a végösszeg származhat **fix összegből**, **számításból** (calculation mező), **űrlapmezőből** (pl. “Összeg” mező) vagy **előfizetésből**. Így könnyen megvalósítható változó ár, kuponlogika vagy adomány tetszőleges összeggel.

- **Termék- és vevőadatok átadása**  
  Átküldheted a **termék nevét, leírását, képet**, valamint a **vevői és szállítási adatokat** a Stripe-ba. Ezzel a Stripe oldali nyilvántartásod teljes lesz, miközben az űrlapod saját **értesítő e-mailjeit** is használhatod.

- **Teszt mód**  
  A Stripe akció **Advanced** részében bekapcsolható. Teszt kulcsokkal és teszt kártyákkal biztonságosan próbálhatod ki a folyamatot élesítés előtt.

- **SCA/3D Secure megfelelés**  
  A Stripe Checkout automatikusan kezeli az **erős ügyfélhitelesítést** (SCA), beleértve a **3D Secure** folyamatokat is.

- **Pénznem és formátum**  
  A fizetés pénznemét a Ninja Forms globális beállításaiból vagy űrlapszinten a **Currency** opcióval szabályozhatod.

## Gyakorlati példák

- **Egyszeri szolgáltatási díj**: készítesz egy megrendelő űrlapot (Név, E-mail, Szolgáltatás), a végösszeg egy calculation mezőből jön ki. Stripe akció: Get Total From = Calculation, mód = Card Only. Beküldés → Stripe Checkout → visszairányítás → visszaigazoló e-mail.

- **Adománygyűjtés tetszőleges összeggel**: az űrlapon van egy „Összeg” számező. Stripe akció: Get Total From = Field. Opcionálisan jelölőnégyzet „Havi támogatás” megadásával előfizetéses Plan ID-t töltesz be feltételes logikával.

- **Tagsági előfizetés**: a Stripe-ban létrehozott „Monthly Membership” ár azonosítóját beírod a Stripe akcióba. Mód = All Methods, hogy kártya és pénztárcák is működjenek. A Stripe kezeli a havi terhelést és a lemondásokat.

- **Regionális fizetési módok**: holland ügyfeleknek bekapcsolod az iDEAL-t a Stripe-ban, az űrlapon All Methods módot használsz. A vásárló a számára ismerős banki átirányítást látja a Checkouton.

## Előnyök és értékajánlat

- **Webshop nélkül is fizetés**: űrlap + Stripe = kész megoldás.  
- **Kevesebb megfelelési teher**: a fizetés a Stripe hosztolt, biztonságos felületén zajlik.  
- **Rugalmas árképzés**: fix ár, számított ár, mezőből vett összeg vagy előfizetés.  
- **Sok fizetési mód egyben**: kártyák, pénztárcák, banki módszerek – a Stripe fiókodból vezérelve.  
- **Valódi automatizmus**: sikeres fizetés után futnak az űrlap-akciók (értesítés, CRM integrációk, stb.).

## Kinek ajánlott?

- **Szolgáltatóknak és szabadúszóknak**: egyszeri díjak gyors beszedésére.  
- **Civil szervezeteknek**: adományok és havi támogatások fogadására.  
- **Közösségeknek, kluboknak, oktatóknak**: tagsági vagy kurzus-előfizetésekre.  
- **Eseményszervezőknek**: jelentkezési űrlap + belépő fizetés.  
- **Ügynökségeknek**: ügyfélprojektekhez gyors, megbízható fizetési modul űrlapokban.

## Gyors implementációs checklist

```
1) Előfeltételek: SSL (HTTPS), megfelelő TLS, Stripe fiók.
2) Stripe: engedélyezd a kívánt fizetési módokat, hozd létre a termékeket/árakat (ha előfizetés kell).
3) Ninja Forms > Settings > Stripe: add meg az API kulcsokat (külön teszt/éles).
4) Hozz létre űrlapot (mezők: név, e-mail, cím, összeg/számítás stb.).
5) Emails & Actions > Add New > Stripe: konfiguráld a fizetést.
6) Get Total From: válaszd ki (fix/számítás/mező/előfizetés).
7) Payment Methods: Card Only vagy All Methods.
8) Advanced: Test Mode bekapcsolása teszteléshez.
9) Tesztelés: próbafizetés teszt kártyákkal, visszairányítás és akciók ellenőrzése.
10) Élesítés: Test Mode kikapcsolása, éles kulcsok, utólagos monitorozás a Stripe-ban.
```

## Sajátosságok és korlátok

- **Stripe Checkout** hosztolt felület: a fizetési UI testreszabása a Stripe lehetőségeihez kötött.  
- **Előfizetések**: a termék/ár létrehozása és a számlázási logika elsődlegesen a Stripe-ban él.  
- **Fizetési módok elérhetősége**: az űrlapon csak a Stripe fiókban engedélyezett módszerek jelennek meg.  
- **Biztonsági követelmények**: éles fizetéshez kötelező a HTTPS, a megfelelő TLS és a Stripe által megkövetelt API-verzió.

Összefoglalva: a Ninja Forms – Stripe egy egyszerűen beállítható, mégis rendkívül rugalmas Stripe-integráció, amellyel űrlapokból tudsz biztonságosan egyösszegű és előfizetéses fizetéseket fogadni, több fizetési móddal és teljes SCA-megfeleléssel.