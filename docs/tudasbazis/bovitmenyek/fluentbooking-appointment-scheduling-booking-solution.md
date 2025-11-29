---
title: "FluentBooking - Appointment Scheduling & Booking Solution"
description: "WordPress-alapú időpontfoglaló bővítmény egyéni, csoportos és csapat (round-robin) találkozókhoz, fizetésekkel, értesítésekkel és kétirányú naptárszinkronnal."
sidebar_label: "FluentBooking - Appointment Scheduling & Booking Solution"
---

## Mi ez és milyen problémát old meg?

A FluentBooking egy **WordPress-be épülő időpontfoglaló rendszer**, amellyel a weboldaladon megjelenítheted a szabad időpontjaidat, a látogatók önállóan foglalhatnak, és minden automatikusan szinkronizálódik a külső naptáraiddal. Segít kiváltani az oda‑vissza egyeztető e‑maileket, megszüntetni a **dupla foglalásokat**, kezelni az **időzónákat**, csökkenteni a **no‑show** arányt, és ha szeretnéd, **előrefizetést** is kérhetsz.

A bővítményt a WPManageNinja csapata fejleszti (ők készítették a Fluent Forms, FluentCRM, Ninja Tables, Fluent Support megoldásokat is).

## Hogyan működik röviden?

1. **Elérhetőség beállítása**: heti órarend, pufferidők, minimális előjegyzési idő, időzóna.
2. **Eseménytípus létrehozása**: 1:1, csoportos, csapat/round‑robin vagy egyszeri esemény.
3. **Integrációk bekapcsolása**: kétirányú naptárszinkron (pl. Google/Apple/Outlook/Nextcloud), automatikus online meeting linkek (Zoom/Meet/Teams).
4. **Megjelenítés** a weboldalon: saját márkás foglalási oldal, Gutenberg blokk, shortcode vagy Elementor widget.
5. **Fizetés és értesítések**: Stripe/PayPal vagy WooCommerce; e‑mail és SMS/WhatsApp emlékeztetők.
6. **Admin kezelés**: manuális rögzítés, jóváhagyás, átütemezés, lemondás, újrafoglalás.

## Fő funkciók részletesen

### Foglalási felület és testreszabás
- Egyedi, márkázott **foglalási oldalak** a weboldaladon.
- **Shortcode**, **Gutenberg blokkok** és **Elementor widgetek** a rugalmas beágyazáshoz.
- **Host‑landing** és saját **URL‑slug** az igényes, könnyen megjegyezhető linkekért.

### Elérhetőség és időzóna
- **Heti órarend** és **dátum‑felülírások** (ünnepnapok, kivételek).
- **Időtartam**: fix vagy több opció közül választható.
- Automatikus **időzóna‑kezelés**, a látogató saját zónájában látja az időpontokat.

### Ütközésmentesítés
- **Pufferidő** meetingek előtt/után.
- **Minimális előjegyzési idő** és **foglalási gyakoriság/összidő korlátok**.
- **Kétirányú naptárszinkron** a dupla foglalások ellen.

### Több találkozótípus
- **1:1** egyéni találkozók.
- **Csoportos** események résztvevő limitálással.
- **Round‑robin/csapat**: több host, közös vagy egyéni beosztás, csapatoldal.
- **Egyszeri (one‑off)** időablakok kampányokhoz, workshopokhoz.

### Helyszínek és videó
- **Online**: automatikus link generálás (Zoom, Google Meet, Microsoft Teams).
- **Személyes**, **telefonos** vagy **egyedi link/leírás**.

### Fizetések és WooCommerce
- **Stripe** és **PayPal**; Apple Pay/Google Pay Stripe‑on át.
- **WooCommerce** integráció kuponokkal, adókkal és több fizetési átjáróval.
- Előrefizetés vagy részfizetés a „ghost booking” kiszűrésére.

### Értesítések és no‑show csökkentés
- **E‑mail** és **SMS/WhatsApp** (Twilio) automatikus visszaigazolók és emlékeztetők.
- **Lemondási/átütemezési szabályok**: megadhatod, meddig engedélyezett.
- Opcionális **manuális jóváhagyás** (Requires Confirmation).

### Adminisztratív vezérlők
- **ICS melléklet** az eseményekhez.
- **Átirányítás** foglalás után (köszönő oldal, upsell).
- **Manuális foglalás** rögzítése admin felületről.

### Űrlapok, adatok, automatizáció
- **Testreszabható kérdések**, űrlapmezők.
- **Fluent Forms** és **FluentCRM** integráció az adatgyűjtéshez és utókövetéshez.
- **Webhooks** és automatizációs kapcsolatok (pl. Zapier/Make, WP Fusion, FlowMattic, Pabbly, Zoho Flow).

### Analitika és riportok
- Összesített, lezárt és lemondott foglalások számai.
- **Grafikonos trendek** a teljesítmény nyomon követéséhez.

Megjegyzés: egyes integrációk és funkciók a Pro csomag részei. Az aktuális elérhetőséget mindig ellenőrizd a bővítmény leírásában.

## Gyakorlati példák

- Coaching/konzultáció: beállítasz 60 perces 1:1 találkozókat 15 perc pufferrel. A vendég fizet Stripe‑on, automatikus Zoom‑linket kap, te pedig e‑mail + SMS emlékeztetőt küldesz a no‑show csökkentésére.
- Ügynökségi értékesítés: csapat‑round‑robin „Discovery Call” esemény. A rendszer a következő szabad kollégához osztja a foglalást, mindenkinek kétirányú naptárszinkronja van, és a csapatoldalon egyben megjelenik a foglalható idő.
- Oktatás/tréning: heti csoportos workshop 12 férőhellyel. A jelentkező a foglaláskor fizet, e‑mailben megkapja a Google Meet linket és a leírást.
- Toborzás: előszűrési kérdéseket kérsz be (űrlapmezők), időkorlátot állítasz az átütemezésre, és minden interjú ICS melléklettel és naptárszinkronnal kerül be.

## Előnyök és értékajánlat

- **Kevesebb admin**: nincs több e‑mailes pingpong, a foglalás önkiszolgáló.
- **Ütközésmentesség**: kétirányú naptárszinkron és pufferidők.
- **Kevesebb no‑show**: automatizált emlékeztetők és rugalmas szabályok.
- **Azonnali bevétel**: előrefizetés Stripe/PayPal‑lal vagy WooCommerce‑en keresztül.
- **Márkakontroll és adatbiztonság**: minden a saját WordPress oldaladon fut.
- **Skálázhatóság**: korlátlan host, csapat‑ és round‑robin ütemezés.

## Kinek ajánlott?

- **Személyes szolgáltatóknak**: tanácsadók, coachok, terapeuták, trénerek.
- **Értékesítésnek és ügyfélszolgálatnak**: demók, discovery callok, ügyfélegyeztetések.
- **Marketing és e‑learning**: workshopok, webinárok, kurzusindító beszélgetések.
- **HR és toborzás**: előszűrési interjúk ütemezése, csapatbeosztással.
- **Ügynökségek/csapatok**: terheléselosztás round‑robin módon, közös elérhetőség.

## Bevezetési tippek

- Állíts be **pufferidőt** és minimum **előjegyzési időt** a stabil napirendért.
- Kapcsold be az **e‑mail + SMS** emlékeztetőket a no‑show mérséklésére.
- Használj **előrefizetést** a komolytalan foglalások kiszűrésére.
- Hozz létre **külön eseménytípusokat** a különböző szolgáltatásoknak (1:1, csoportos, csapat).
- Teszteld végig a **vendég‑útvonalat** (foglalás → visszaigazolás → naptárbejegyzés → emlékeztető).

## Összegzés

A FluentBooking egy komplett, **saját webhelyen futó alternatíva** a külső időpontfoglaló szolgáltatásokkal szemben. Egyszerűen beállítható, okosan kezeli az elérhetőséget és az időzónákat, **megelőzi az ütközéseket**, csökkenti a **no‑show**‑t, és közvetlen **bevételi csatornát** ad a találkozóidhoz. Ha szeretnéd a foglalást a WordPress‑edbe integrálni professzionális csapat‑ és fizetési funkciókkal, ez a bővítmény neked való.