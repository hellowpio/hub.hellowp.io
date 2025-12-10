---
title: "AffiliateWP - Signup Referrals"
description: "Hivatalos AffiliateWP kiegészítő, amellyel fix összegű jutalékot adhatsz már a felhasználói regisztráció befejezésekor, nem csak vásárláskor."
sidebar_label: "AffiliateWP - Signup Referrals"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Signup Referrals egy hivatalos kiegészítő, amellyel **regisztrációs eseményre** (felhasználói fiók létrehozása) is automatikus, **fix összegű** jutalékot fizethetsz a hivatkozó partnerednek. Akkor hasznos, ha a célod nem csak az azonnali eladás, hanem a **lead- és feliratkozás-növelés** is – például freemium, próbaidős, tagsági vagy közösségi modellekben.

## Hogyan működik röviden?

- Az AffiliateWP követi a látogatót és azonosítja a hivatkozó partnert.
- Amikor a felhasználó **sikeresen regisztrál**, a kiegészítő létrehoz egy **signup referral** bejegyzést a meghatározott **fix összeggel**.
- A jutalék **alapértelmezett státusza** beállítható (pl. Pending vagy Unpaid).
- E-kereskedelmi regisztrációnál elkerülhető a **dupla jutalék** (külön jelölővel letiltható a checkout referral, ha a regisztráció és vásárlás egyszerre történik).

## Fő funkciók részletesen

- **Fix összegű jutalék regisztrációkor**  
  Nem százalékot számolsz a kosárértékből, hanem **előre definiált összeget** adsz minden sikeres felhasználói regisztráció után. Így a konverzió értéke stabil és tervezhető, függetlenül a későbbi vásárlástól.

- **Több regisztrációs forrás támogatása, külön összegekkel**  
  Beállíthatsz külön jutalékot az alábbi forrásokra:  
  - **Affiliate regisztráció** (partnerjelentkezés)  
  - **WooCommerce** regisztráció (Saját fiók vagy fizetéskor)  
  - **Easy Digital Downloads** regisztráció  
  - **Gravity Forms** + User Registration kiegészítő  
  - **Ultimate Member** és **UserPro** regisztráció  
  Mindegyik forrásnál külön **összegmezőt** kapsz, így a legfontosabb csatornáidat differenciáltan jutalmazhatod.

- **Dupla jutalék megelőzése checkoutnál**  
  WooCommerce és EDD esetén egy opcióval **kikapcsolhatod** a fizetési folyamatból érkező referral-t, ha a regisztráció és a vásárlás együtt történik – így nem keletkezik kétszeres jutalék ugyanazon konverzióra.

- **Kezdeti státusz szabályozása**  
  A regisztrációs jutalékok **egységesen** hozhatók létre **Pending** vagy **Unpaid** státusszal. Így előbb ellenőrizheted a lead minőségét, és csak jóváhagyás után fizetsz.

- **Hivatkozó partner azonosítása affiliate jelentkezésnél**  
  Amikor egy új partner jelentkezik, az admin felületen láthatod, **melyik affiliate** hozta az új jelentkezőt, ami megkönnyíti a minőségellenőrzést és a partnerértékelést.

## Telepítés és beállítás

- **Előfeltétel:** Telepített és aktivált AffiliateWP, érvényes licenccel. A kiegészítő használatához **Plus vagy Pro** licenc szükséges.
- **Telepítés:** AffiliateWP → Add-onok → Signup Referrals aktiválása.
- **Integrációk engedélyezése:** AffiliateWP → Settings → Integrations. Kapcsold be a kívánt regisztrációs forrásokat (pl. WooCommerce Registration, EDD Registration, Gravity Forms User Registration, Ultimate Member, UserPro).
- **Összegek megadása:** Forrásonként állítsd be a **fix jutalékösszeget**.
- **Dupla jutalék elkerülése:** WooCommerce/EDD esetén jelöld be a **Disable Checkout Referral** opciót, ha nem szeretnél külön signup jutalékot a fizetéssel egybekötött regisztrációra.
- **Affiliate jelentkezések kezelése:** Ha manuális jóváhagyást használsz, a referral létrejötte **késleltetett** lehet jóváhagyásig.

```text
Gyors checklist
1) Add-on aktiválása
2) Integrációk bekapcsolása
3) Fix összegek beállítása forrásonként
4) Kezdeti státusz (Pending/Unpaid) kiválasztása
5) Checkout referral tiltása (ha kell)
6) Teszt: saját regisztráció külön forrásokon, referral napló ellenőrzése
```

## Gyakorlati példák

- **Freemium szolgáltatás:** Minden új, ingyenes fiók után 500 Ft jutalékot adsz. A partnerek motiváltak leadeket hozni akkor is, ha a vásárlás később történik.
- **Tagsági/közösségi oldal:** Ultimate Memberrel regisztráló tagok után fix díjat fizetsz. A cél a közösség növelése, nem a kosárérték.
- **E-kereskedelem (regisztráció mint KPI):** WooCommerce-ben a regisztrációt külön jutalmazod, de kikapcsolod a checkout referral-t, hogy ne legyen dupla jutalék, ha a regisztráció vásárláskor történik.

## Előnyök és értékajánlat

- **Lead-alapú növekedés**: vásárlás nélkül is jutalmazhatsz, így több csatornán tudsz skálázni.  
- **Egységes kezelés**: több regisztrációs forrás egy helyen, külön összegekkel.  
- **Költségkontroll**: fix díjjal egyszerű a tervezés és a ROI-számítás.  
- **Admin kontroll**: státuszkezelés, dupla jutalék elkerülése, átlátható partner-hozzárendelés.  
- **Rugalmas kombináció**: együtt használhatod más AffiliateWP kiegészítőkkel (pl. ismétlődő jutalékokra fókuszáló megoldásokkal).

## Célközönség

- **Freemium és próbaidős termékek** tulajdonosai, ahol a regisztráció önmagában érték.  
- **Tagsági és közösségi oldalak** üzemeltetői, akik taglétszámot növelnének.  
- **E-kereskedők**, akik KPI-ként kezelik a fióklétrehozást.  
- **B2B leadgeneráló oldalak**, ahol a felhasználói fiók vagy űrlapos regisztráció a fő konverzió.

## Korlátozások és megjegyzések

- **Csak fix összeg** támogatott, nincs százalékos jutalék regisztrációra.  
- Az opció, amely automatikusan affiliaté teszi a felhasználókat, **nem** generál signup referral-t.  
- Ha űrlap-alapú affiliate jelentkezést használsz (pl. Gravity Forms, Ninja Forms), kerüld a **dupla referral** létrejöttét: vagy a formautomatizmust kapcsold ki jutalékra, vagy a Signup Referrals fix díját használd önállóan.  
- Az affiliate jelentkezésekre vonatkozó signup referral létrejötte **függhet a jóváhagyástól**.  
- Előfizetés-megújításokra járó ismétlődő jutalékhoz **külön** kiegészítő szükséges; ez más cél, de jól kombinálható a regisztrációs jutalmazással.

## Összegzés

A Signup Referrals akkor kell neked, ha a **regisztráció** önállóan is értéket képvisel az oldaladon, és ezt szeretnéd **partneri jutalékkal ösztönözni**. Egyszerűen használható, több regisztrációs csatornát kezel, forrásonként külön **fix díjjal**, és megadja a szükséges adminisztratív kontrollt a tiszta, duplikációmentes elszámoláshoz.