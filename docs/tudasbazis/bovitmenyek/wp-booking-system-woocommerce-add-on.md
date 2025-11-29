---
title: "WP Booking System - WooCommerce Add-on"
description: "A WP Booking System foglalásaid kifizetését a WooCommerce pénztárán kezeli, így elérheted a WooCommerce fizetési kapuit és testreszabhatod a teljes folyamatot."
sidebar_label: "WP Booking System - WooCommerce Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System prémium kiegészítője, amellyel a WP Booking Systemben leadott foglalások fizetését a WooCommerce pénztárára irányíthatod. Így azonnal hozzáférsz a WooCommerce ökoszisztéma több száz fizetési megoldásához, miközben a foglalás továbbra is a WP Booking Systemben jön létre és ott kezelhető. A cél: több fizetési mód, egységes checkout élmény, kevesebb adminisztráció.

Fontos: ez a kiegészítő nem WooCommerce-termékek foglalására szolgál. A WooCommerce itt kizárólag a fizetést és a rendeléskezelést adja a foglalási folyamathoz.

## Hogyan működik röviden?

1. A látogató kiválasztja a dátumokat a WP Booking System naptárban és elküldi a foglalási űrlapot.
2. A rendszer átirányítja a WooCommerce pénztárára, ahol kiválaszthatja a fizetési módot és fizet.
3. Létrejön egy WooCommerce-rendelés egy rejtett, virtuális „foglalás” termékkel; az árát a kiegészítő automatikusan a foglalási összegre állítja.
4. A foglalás a beállított **Booking Creation Trigger** szerint jön létre/frissül a WP Booking Systemben.
5. A „Köszönjük” oldalról akár vissza is irányíthatod a látogatót a naptár oldalára a megerősítéshez.

## Fő funkciók, érthetően

- **WooCommerce-pénztár integráció**  
  A foglalás kifizetése a WooCommerce checkouton történik. Ezzel azonnal használhatod a kedvenc (helyi vagy nemzetközi) fizetési kapuidat, bankkártyát, átutalást, pénztárgépes megoldásokat – amit a WooCommerce támogat.

- **Széles fizetési kapu választék**  
  A WooCommerce ökoszisztémában elérhető több tucat fizetési átjáróhoz férsz hozzá. Nem kell külön integrációkat fejlesztened a WP Booking Systemhez, egyszerűen a WooCommerce-et használod fizetési hubként.

- **Booking Creation Trigger (foglalás-létrehozás időzítése)**  
  Te döntöd el, mikor jöjjön létre a foglalás a WP Booking Systemben: azonnal a rendelés létrejöttekor, vagy csak sikeres fizetés után. Ez segít elkerülni a dupla foglalásokat, különösen akkor, ha a fizetés késleltetett vagy manuálisan jóváhagyandó.

- **WooCommerce e-mailek letiltása**  
  Elkerülheted a kettős értesítést. Ha szeretnéd, a WooCommerce vásárlói e-mailjeit kikapcsolhatod, és csak a WP Booking System küld értesítéseket a vendégnek.

- **„Thank You” oldal átirányítása**  
  A WooCommerce „Köszönjük” oldal helyett visszairányíthatod a vendéget a foglalási naptár oldalára, és ott mutathatod meg a végleges megerősítést.

- **Checkout mező-térképezés**  
  A foglalási űrlap mezőit hozzárendelheted a WooCommerce pénztár mezőihez. Így a vevő adatai előre kitöltve jelennek meg a checkouton, csökkentve a súrlódást. Megjegyzés: ez a funkció a WooCommerce klasszikus, shortcode-os pénztárával működik.

```
[woocommerce_checkout]
```

- **Többvalutás működés megjegyzés**  
  A WP Booking System többvalutás kiegészítője nem használható együtt a WooCommerce Checkout add-onnal, mert a WooCommerce egyetlen, beállított pénznemben kezel fizetéseket.

## Gyakorlati példák

- **Apartmanház helyi banki átjáróval**  
  Magyarországi vagy romániai ingatlanosként a helyi banki fizetési megoldást szeretnéd. A foglalás a WP Booking Systemben történik, a vendég a WooCommerce checkouton fizet a bankod átjáróján keresztül. Te a foglalás-létrehozást „sikeres fizetéskor”-ra állítod, hogy elkerüld a téves foglalásokat.

- **Túraszervező egységes fizetési folyamattal**  
  Már fut egy WooCommerce webáruházad ajándékkártyákkal és kiegészítőkkel. A túrafoglalásokat is ugyanarra a pénztárra viszed, így a látogató ismeri a folyamatot, te pedig a WooCommerce riportjaiban egy helyen látod a kifizetéseket.

- **Eszközkölcsönző előre kitöltött adatokkal**  
  A foglalási űrlapból átküldöd a vevő nevét, címét a checkoutra, így gyorsabb a fizetés és kevesebb az elhagyott kosár.

## Előnyök és értékajánlat

- **Több fizetési opció, kevesebb fejlesztés**: a WooCommerce kapuin keresztül gyakorlatilag bármit elfogadhatsz.
- **Egységes élmény**: ha már van WooCommerce-ed, nem hozol be új pénztárfolyamatot.
- **Kevesebb hibalehetőség**: a foglalás-létrehozás időzítése a te folyamatodra szabható.
- **Kevesebb duplikált e-mail**: eldöntheted, melyik rendszer értesítsen.
- **Gyorsabb checkout**: a mező-térképezés csökkenti az adatújra-bevitelt.

## Kinek ajánlott?

- Szállásadóknak, panzióknak, apartmanoknak.
- Rendezvényhelyszíneknek, terem- vagy pályabérlőknek.
- Eszközkölcsönzőknek (pl. kerékpár, sífelszerelés).
- Szolgáltatóknak, akik időpontokra dolgoznak és előleget/teljes díjat szednek.
- Olyan oldalaknak, ahol már van WooCommerce, és egységesíteni szeretnék a fizetést.

## Követelmények és beállítási jegyzetek

- Aktív WordPress, WP Booking System prémium licenc (Business vagy magasabb).
- Aktív WooCommerce, beállított fizetési kapukkal.
- Egy rejtett, virtuális „foglalás/rezerváció” WooCommerce-termék, amelynek árát az add-on a foglalás összegére írja át.
- Az add-on a WP Booking System adminjában telepíthető és kapcsolható be.
- A mező-térképezéshez a WooCommerce klasszikus pénztárát használd (shortcode), ne a blokkalapú checkoutot.

### Gyors ellenőrzőlista

1. Hozz létre rejtett, virtuális „foglalás” terméket WooCommerce-ben.
2. Kapcsold be az add-ont a WP Booking Systemben.
3. Állítsd be a **Booking Creation Trigger** opciót és teszteld több fizetési forgatókönyvvel.
4. Döntsd el, ki küld e-maileket (WooCommerce vagy WP Booking System), és kapcsold ki a fölösleget.
5. Használj klasszikus checkoutot, ha mező-térképezést szeretnél.
6. Teszteld az átirányítást a „Köszönjük” oldalról a naptárra.
7. Ha több valutát használsz, ne kapcsold össze a többvalutás kiegészítőt ezzel az add-onnal.

### Kapcsolódó kiegészítő

- **Invoices Add-on**: automatikus PDF számlák kiállításához és küldéséhez, ha a számlázást a WP Booking Systemben akarod kezelni.

---

Röviden: ha a WP Booking System foglalásaidhoz rugalmas, profi és ismerős fizetési rendszert keresel, a WooCommerce Add-on a legegyszerűbb, legbiztosabb út a célhoz.