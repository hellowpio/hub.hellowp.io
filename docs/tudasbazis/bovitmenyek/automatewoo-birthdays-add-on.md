---
title: "AutomateWoo - Birthdays Add-on"
description: "Születésnapok gyűjtése és automatizált, személyre szabott üzenetek/kedvezmények küldése WooCommerce-ben az AutomateWoo segítségével."
sidebar_label: "AutomateWoo - Birthdays Add-on"
---

## Mi ez és milyen problémát old meg?

Az AutomateWoo – Birthdays Add-on egy hivatalos kiegészítő, amellyel a vásárlóid születésnapjához köthető automatizmusokat építhetsz: időzített üdvözlő e‑mailek, egyszer használható kuponok, emlékeztetők, upsell/keresztértékesítési ajánlatok. A manuális “születésnapi naptár” helyett mindent automatizálsz: a rendszer pontosan a megfelelő napon (vagy előtte/utána) kommunikál, és így növeled a hűséget, az újravásárlást és a bevételt. A bővítmény az AutomateWoo alapra épül, ezért annak aktívnak kell lennie.

## Hogyan működik röviden?

- Születésnap mezőt jeleníthetsz meg a pénztárban és a “Saját fiók” oldalon, így kontextusban gyűjtöd az adatot.
- Az AutomateWoo új **triggert**, **szabályokat** és **változókat** kap, amivel könnyen felépítesz időzített, személyre szabott workflow‑kat.
- A rendszer minden évben a megadott időzítés szerint futtatja az üzeneteket és (igény szerint) egyedi kuponokat generál.

## Fő funkciók, részletesen

### Adatgyűjtés a megfelelő helyen
- **Pénztár mező**: opcionális születésnap mező a checkouton. Csak bejelentkezett vásárlóknak és csak addig jelenik meg, amíg nem adtak meg korábban születésnapot. Ez csökkenti a súrlódást, és rögtön a profiljukhoz kapcsolja az adatot.
- **Fiókadatok mező**: a “Saját fiók → Fiókadatok” oldalon is szerkeszthető, így később is megadhatják vagy javíthatják.
- **Testreszabás**: beállíthatod a kísérő leírást, a mező elhelyezését, és eldöntheted, kéred‑e a születési évet (kérhetsz csak hónap/napot is a minimalizált adatgyűjtéshez).

### Új AutomateWoo elemek
- **Trigger – Customer Birthday**: workflow indítása a születésnap előtt, napján vagy utána. Tipikus használat: előtte 3 nappal emlékeztető; a napon üdvözlő e‑mail kuponnal; utána “reminder” az igénybevételhez.
- **Szabályok – Customer Next/Last Birthday Date**: feltételek a következő vagy az utolsó születésnap dátuma alapján. Így például csak azoknak küldesz kampányt, akiknek ebben a hónapban van a születésnapjuk.
- **Változó – `{{ customer.birthday }}`**: használhatod e‑mailben vagy sablonokban a személyre szabáshoz. A személyre szabott kuponokhoz a megszokott AutomateWoo változók állnak rendelkezésre (pl. egyedi kuponkód generálása).

### Admin beállítások és adatkezelés
- **Beállítások útvonala**: WooCommerce admin → AutomateWoo → Settings → Birthdays.
- **Kulcsopciók**:
  - Show birthday field on checkout
  - Show birthday field in account area
  - Birthday field description
  - Collect year of birth
  - Checkout field placement
- **Adatjavítás**: adminisztrátorként a felhasználói szerkesztőoldalon módosíthatod vagy törölheted a születésnapot.
- **Import/migráció**: nincs egykattintásos import. Fejlesztőként programból is beállíthatod a dátumot.

Példa fejlesztői hívásra:
```php
// Példa: felhasználó születésnapjának beállítása import során
$user_id  = 123;
$birthday = '1990-07-15'; // vagy '07-15', ha nem gyűjtesz évet
AW_Birthdays_Addon::set_user_birthday( $user_id, $birthday );
```

### Adatvédelem
Minimalizálható a gyűjtött adat (év opcionális), a mezők szövege testreszabható, és átláthatóan kommunikálhatod a célját. Ez támogatja a megfelelőségi elvárásokat.

## Gyakorlati példák

1. **“Boldog születésnapot” e‑mail egyedi kuponnal**
   - Trigger: Customer Birthday (a napon).
   - Akció: Send Email, a levélben egyedi kuponkód beszúrása.
   - Eredmény: magas megnyitási és beváltási arány, mérhető pluszbevétel.

   Egyszerű e‑mail törzs:
   ```text
   Szia {{ customer.first_name|default:"Kedves Vásárló" }}!
   Boldog születésnapot! Meglepetésként itt a személyre szabott kuponod:
   {{ customer.generate_coupon }}
   Jó vásárlást és szép ünneplést!
   ```

2. **“Treat yourself” kampány a hónap folyamán**
   - Szabály: Next Birthday Date → az aktuális hónapban lévő ügyfelek.
   - Akció: emlékeztető egy finom ajánlattal vagy ingyenes szállítással.

3. **VIP szegmens kiemelt ajánlattal**
   - Kombináld a születésnapi szabályokat értékalapú szegmenssel (például összköltés).
   - Adhatsz hosszabb érvényességű, nagyobb kedvezményt a VIP‑knek.

## Előnyök és értékajánlat

- **Automatikus időzítés**: nem kell naptárat vezetned; a rendszer minden évben magától fut.
- **Személyre szabás → konverzió**: a személyes apropó és az egyedi kupon érezhetően emeli a megnyitást, kattintást és beváltást.
- **Kevesebb manuális munka**: egyszeri beállítás, utána skálázhatóan működik.
- **Win‑back és upsell**: visszahozhatod az inaktívakat, és finom ajánlatokkal növelheted a kosárértéket.
- **Adatvédelmi fókusz**: csak annyit kérsz, amennyire tényleg szükség van.

## Kinek ajánlott?

- **Kereskedőknek**, akik hűségprogramot építenek és növelnék az újravásárlást.
- **D2C márkáknak**, ahol erős a közvetlen kommunikáció és a személyre szabás.
- **Szegmentációt használó webáruházaknak**, akik eltérő ajánlatokat küldenének VIP, új vagy inaktív vevőknek.
- **Kis csapatoknak**, akiknek számít az automatizált, “beállít és felejt” működés.

## Követelmények és telepítés

- Aktív AutomateWoo szükséges.
- A bővítmény a WooCommerce ökoszisztémában érhető el és onnan telepíthető, licenckezeléssel együtt.
- Kompatibilis a modern WooCommerce technológiákkal, beleértve a fejlettebb rendeléskezelést és a blokkalapú pénztár/kosár környezetet.

## Gyors bevezetési ellenőrzőlista

1. Telepítsd és aktiváld a Birthdays add‑ont (AutomateWoo már aktív).
2. Lépj az AutomateWoo → Settings → Birthdays oldalra és állítsd be:
   - mezők megjelenése,
   - leírás,
   - év bekérése,
   - mező elhelyezése.
3. Döntsd el, készítesz‑e előre kupont vagy workflow‑ban generálsz egyedit.
4. Hozz létre egy workflow‑t:
   - Trigger: Customer Birthday (előtte/napján/utána).
   - Akció: Send Email, személyre szabott tartalommal és kuponnal.
5. Teszteld egy tesztfelhasználóval, majd élesítsd.

## Korlátok és tippek

- A pénztári születésnap mező csak bejelentkezett vásárlóknak jelenik meg, és eltűnik, ha már van rögzített születésnapjuk – ez szándékos működés.
- Nincs natív, egykattintásos import más rendszerekből; egyedi migrációhoz használj fejlesztői hívást.
- Praktikus tipp: adj lejárati dátumot a születésnapi kuponnak (pl. 7–14 nap), és küldj emlékeztetőt a lejárat előtt.