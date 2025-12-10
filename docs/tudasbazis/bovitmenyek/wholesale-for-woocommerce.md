---
title: "Wholesale For WooCommerce"
description: "B2B nagykereskedelmi funkciók WooCommerce-hez: role‑alapú árképzés, regisztráció, láthatóság, fizetés/szállítás és adózás kezelése."
sidebar_label: "Wholesale For WooCommerce"
---

## Mi ez és milyen problémát old meg?

A **Wholesale For WooCommerce** egy WooCommerce kiegészítő, amivel ugyanazon a webáruházon belül professzionálisan kezelheted a **B2B (nagykereskedelmi)** értékesítést. Lehetővé teszi, hogy különböző **felhasználói szerepköröknek** (pl. nagyker partnerek) eltérő árakat, kedvezményeket, termékláthatóságot, fizetési/szállítási módokat és adózási szabályokat adj. Így nem kell külön nagyker webshopot fenntartanod: a B2C és B2B folyamatok együtt élhetnek egy hibrid áruházban, vagy akár teljesen zárt nagyker boltban is.

A bővítményt a **WPExperts** fejleszti. Elérhető egy ingyenes alapverzió (alap nagyker funkciókkal) és egy Pro kiadás (fejlett role‑alapú és csoportos szabályokkal, dashboarddal és űrlap‑építővel).

## Hogyan működik – fő funkciók

### Ár- és kedvezményszabályok
- **Role‑alapú árak**: ugyanarra a termékre több nagyker szerepkörnek adhatsz eltérő árat (egyszerű és variálható termékekhez). A nagyker felhasználók belépve a nekik szánt nettó/bruttó árakat látják.
- **Globális/kategória/termék szint**: rugalmas kedvezménykezelés fix összeggel vagy százalékosan, akár kategóriánként.
- **Lépcsőzetes (tiered) árképzés**: mennyiségi sávokhoz rendelhetsz árakat/kedvezményeket, és megjeleníthetsz egy ár‑táblázatot a vásárlónak. Ideális nagy tételű rendeléseknél.

### Felhasználói szerepkörök és csoportok
- **Több nagyker szerepkör**: különböző B2B szegmenseknek (pl. disztribútor, viszonteladó) más‑más szabályokat állíthatsz be.
- **Csoportok és célzott kommunikáció**: a Pro kiadásban csoportokba rendezheted a partnereket, és csoport‑szinten kezelheted a kedvezményeket vagy tájékoztatást.

### Regisztráció és jóváhagyás
- **Egyéni nagyker regisztrációs űrlap**: kérd be azokat a mezőket, amikre az üzletednek szüksége van (pl. adószám).
- **Manuális/automatikus jóváhagyás**: te döntöd el, ki válhat nagyker vásárlóvá; értesítések mennek az adminnak és a felhasználónak.
- **Szerepkör frissítés**: meglévő B2C vásárló kérheti a nagyker státuszt a saját fiókjából.

### Láthatóság és hozzáférés
- **Privát nagyker bolt**: zárd a teljes katalógust vagy csak az árakat, és mutasd meg őket kizárólag jóváhagyott nagyker partnereknek.
- **Termék/ár elrejtése**: vendégek vagy bizonyos szerepkörök elől elrejthetsz kategóriákat, árakat, “kosárba” gombot.
- **Kuponkezelés**: tilthatod a kuponokat a nagyker vásárlóknál.

### Kosár/pénztár és rendelési szabályok
- **Minimum rendelési érték és mennyiség**: állíts minimumot vagy lépcsőt (pl. 12‑esével rendelhető).
- **Role‑alapú fizetés és szállítás**: csak a megfelelő fizetési/szállítási módokat engedélyezd az adott szerepköröknek (pl. átutalás csak nagykernek).
- **Admin rendelés nagyker áron**: backendből felvett rendelésekre is érvényesíthetők a nagyker árak.

### Adózás és megfelelőség
- **Adómentesség szerepkör szerint**: bizonyos nagyker szerepkörök adómentesek lehetnek.
- **Adóazonosító mező**: plusz mezők a számlázási adatokhoz.
- A Pro csomagban elérhető a **role‑alapú adóosztály** kezelése (ha szükséges).

### Integrációk és kompatibilitás
- Kompatibilis több népszerű WooCommerce kiegészítővel (pl. előfizetések, ajánlatkérés, ügynökök, piactér), többnyelvű és többvalutás környezetekkel, valamint reCAPTCHA‑val.
- **HPOS** és **blokk‑alapú kosár/pénztár** támogatás a modern WooCommerce‑hez.

### Fejlesztői és teljesítményfunkciók
- **REST API** végpontok nagyker termék‑ és szerepkör adatokhoz, hogy külső rendszerekkel (ERP/CRM) integrálhasd.
- Skálázható szabálykezelés nagy katalógusnál és sok partnernél.

## Gyakorlati példák

- **Hibrid áruház**: B2C vásárlók a normál kisker árat látják, a nagyker felhasználók bejelentkezve 15–40% kedvezménnyel vásárolnak, és csak banki átutalást kapnak fizetési opciónak.
- **Zárt nagyker shop**: a katalógus vendégeknek rejtett, bejelentkezés után az árak és az “Kosárba” gomb megjelenik, a rendelés min. nettó 100 000 Ft.
- **Mennyiségi ösztönzés**: 1–49 db: listaár −10%, 50–199 db: −20%, 200+ db: −30%, a termékoldalon jól látható ár‑táblázattal.
- **B2B onboarding**: regisztrációs űrlapon cégadatok és adószám bekérése, admin jóváhagyás után automatikus szerepkör hozzárendelés és üdvözlő e‑mail.

Példa lépcsőzetes árképzés (illusztráció):
```
Termék: Pro Widget
Szerepkör: Wholesaler
1–49 db  : -15%
50–199 db: -25%
200+ db  : -35%
```

## Telepítés és alapbeállítás

- **Ingyenes verzió**:
  1. Vezérlőpult → Bővítmények → Új hozzáadása → keresd a “Wholesale For WooCommerce” bővítményt.
  2. Telepítés és aktiválás.
  3. Állítsd be a nagyker regisztrációt, hozz létre legalább egy nagyker szerepkört, és add meg a nagyker árakat/kedvezményeket.
- **Pro verzió**:
  1. Letöltés és telepítés a megvásárlás után.
  2. Konfiguráld: több szerepkör és csoport, részletes lépcsőzetes árképzés, role‑alapú fizetés/szállítás, láthatósági szabályok, dashboard.

Megjegyzés: az ingyenes és Pro funkciók köre eltér; a részletek idővel változhatnak.

## Előnyök és értékajánlat

- **Egy áruház, két világ**: B2C és B2B egy helyen – nincs duplikált katalógus, nincs külön rendszergondozás.
- **Pontosan célzott árképzés**: szerepkörönként és mennyiségenként optimalizált árrés.
- **Gyors onboarding**: skálázható regisztráció és jóváhagyás, kevesebb manuális adminisztráció.
- **Kevesebb hibázási pont**: role‑alapú fizetés/szállítás/adózás csökkenti a pénztári frikciót és a téves rendeléseket.
- **Nagy teljesítmény**: HPOS és REST API támogatás nagy katalógushoz és integrációkhoz.

## Kinek ajánlott?

- **Gyártóknak és importőröknek**, akik viszonteladóknak értékesítenek.
- **Márkáknak, akik hibrid modellt** futtatnak (B2C + B2B).
- **Nagyker disztribútoroknak**, akik partnercsoportonként eltérő árakat és feltételeket adnak.
- **Webáruházaknak, amelyek zárt katalógust** és jóváhagyott hozzáférést szeretnének.

## Rendszerkövetelmények

- WordPress 5.6 vagy újabb
- WooCommerce 4.0 vagy újabb
- PHP 7.4 vagy újabb
- HPOS‑kompatibilis, támogatja a blokk‑alapú kosarat és pénztárt

Ha szeretnéd, kérhetsz bevezetési checklistát (szerepkör‑tervezés, árstratégia, űrlapmezők, adózási beállítások, teszt forgatókönyvek) vagy minta konfigurációt konkrét B2B folyamataidra.