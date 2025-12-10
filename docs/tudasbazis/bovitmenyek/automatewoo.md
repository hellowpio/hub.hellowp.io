---
title: "AutomateWoo"
description: "WooCommerce‑hez készült automatizálási bővítmény, amellyel eseményekre reagáló munkafolyamatokkal e‑maileket, SMS‑eket és boltfolyamatokat automatizálsz."
sidebar_label: "AutomateWoo"
---

## Mi ez és milyen problémát old meg?

Az AutomateWoo egy WooCommerce‑natív marketing‑ és üzletifolyamat‑automatizálási bővítmény. Segítségével automatizált munkafolyamatokat (Workflows) állítasz össze, amelyek a vásárlói életciklus kulcspillanataiban lépnek működésbe. Megoldja a manuális utánkövetés terhét, csökkenti a kosárelhagyásból és lejáró kártyákból adódó bevételkiesést, és skálázható, mérhető kampányokat ad a kezedbe.

## Hogyan működik? – Workflows, Triggerek, Szabályok, Akciók

- **Triggerekkel** határozod meg, mi indítja a folyamatot (pl. rendelés fizetve, kosár elhagyva, előfizetés állapotváltás).
- **Szabályokkal** pontosítod a feltételeket (pl. ország, összköltés, fizetési mód).
- **Akciókkal** döntöd el, mi történjen (pl. e‑mail/SMS küldés, kupon generálás, rendelésállapot módosítás).

A folyamatok futtathatók azonnal, késleltetve vagy adott időpontban. A triggereket aszinkron feldolgozás támogatja, hogy nagyobb forgalom mellett is megbízhatóan működjön.

### Ütemezés és teljesítmény
A queue‑alapú feldolgozás biztosítja, hogy a kampányok sorban, stabilan fussanak. Késleltetést (pl. “3 óra múlva”) vagy fix időpontot is megadhatsz, így több‑lépéses sorozatokat építhetsz.

### Naplózás és mérés
Minden workflow részletes **naplózással** fut: látod, kit ért el, miért maradt ki valaki, és szükség esetén **újrafuttathatod**. Bekapcsolható **megnyitás‑/kattintás‑/konverziókövetés**, így pontosan mérhető, mely automatizmus hoz rendelést.

### Üzenetküldés (e‑mail, SMS)
- **E‑mailek**: a WooCommerce natív sablonját használja. Ha vizuális, drag‑and‑drop szerkesztés kell, érdemes dedikált e‑mail‑készítővel kombinálni (pl. MailPoet).
- **SMS**: Twilio integrációval küldhetsz értesítéseket bármely triggerre, opt‑out (STOP) támogatással.

### Kézi futtatás és szegmentálás
A **kézi (ad hoc) workflow** gyors szűrőkkel nagy tömegeket céloz: pl. “ország = HU és összköltés > X”. Így egyszeri kampányokat is futtathatsz fejlett lekérdezésekkel.

### Integrációk és bővíthetőség
- WooCommerce kiegészítők: **Subscriptions, Memberships, Bookings, Points and Rewards, Wishlists** – dedikált triggerek/szabályok/akciók.
- Külső eszközök: **Mailchimp, ActiveCampaign, Campaign Monitor, AgileCRM, Twilio**, valamint többnyelvűség támogatás.
- Fejlesztőknek: saját **triggerek/szabályok/akciók** írhatók; API‑k és kódminták elérhetők.

## Gyakorlati példák

### 1) Kosárelhagyás visszanyerés (3 lépés)
- Trigger: Kosár elhagyva (vendég és bejelentkezett).
- Lépések: 1 óra múlva emlékeztető, 24 óra múlva termék‑kiemelés, 72 óra múlva dinamikus kupon.
- Mérőszámok: megnyitás, kattintás, konverzió.

Példa definíció:
```
Workflow: "Kosárelhagyás #1"
Trigger: Cart Abandoned (guest+logged-in)
Delay: 1 óra
Rules:
  - Cart total > 10000
Actions:
  - Send Email to {{ customer.email }} (tárgy: Elfelejtettél valamit?)
  - Enable Conversion Tracking
  - If no order in 72h -> Generate Dynamic Coupon (10%, 7 nap)
```

### 2) Win‑back inaktív vevők
- Trigger: Utolsó rendelés óta eltelt idő.
- Akciók: személyre szabott ajánlat + kupon, majd emlékeztető 7 nap múlva, végül kedvezmény növelése.

### 3) Review kérés és jutalom
- Trigger: Rendelés teljesítve.
- Akciók: értékeléskérő e‑mail, pozitív értékelés után **kupon** generálása és kiküldése.

### 4) Subscriptions értesítések
- Triggerek: megújítás közeledik, sikertelen fizetés, előfizetés szünetel.
- Akciók: emlékeztetők, fizetési útmutató, **elmentett kártya lejárat** előrejelzése SMS‑sel és e‑maillel a churn csökkentésére.

### 5) Wishlist marketing
- Trigger: termék felkerül a kívánságlistára vagy akciós lesz.
- Akciók: értesítés, készlet‑/árváltozás kommunikáció, célzott kupon.

## Előnyök és értékajánlat

- **Bevételnövelés**: visszaszerzett kosarak, újraaktivált vevők, jobb keresztértékesítés.
- **Idő‑ és költségmegtakarítás**: a manuális utánkövetés helyett beállított automatizmusok dolgoznak.
- **Pontosság és skálázhatóság**: aszinkron futás, részletes szegmentálás, nagy forgalom mellett is stabil.
- **Átláthatóság**: naplók, újrafuttatás, konverziókövetés – tudod, mi működik.
- **Ökoszisztéma‑előny**: WooCommerce‑natív működés, hivatalos integrációk, fejlesztői bővíthetőség.

## Célközönség

- **Kereskedők WooCommerce‑en**: akik rendszeres utánkövetést, kosárelhagyás‑kezelést és kuponos ösztönzést akarnak.
- **Előfizetéses modellek üzemeltetői**: megújítási, sikertelen fizetési és kártyalejárati folyamatok automatizálására.
- **Marketingesek és ügynökségek**: szegmentált e‑mail/SMS kampányok, mérhető eredményekkel.
- **Fejlesztők**: egyedi triggerek/akciók, integrációk és belső folyamatok automatizálása.

## Bevezetési tippek és jó gyakorlatok

- **E‑mail dizájn**: a beépített sablon üzembiztos; vizuális, blokkalapú szerkesztéshez használj dedikált e‑mail eszközt.
- **Kézbesíthetőség**: állíts be megbízható SMTP szolgáltatót a magasabb inbox arányért.
- **SMS megfelelés**: tartsd be az opt‑in/opt‑out szabályokat, és biztosíts egyszerű leiratkozást.
- **Teljesítmény**: építs késleltetett, több lépéses sorozatokat; használd a naplókat és a konverziókövetést optimalizáláshoz.
- **Kompatibilitás**: modern WooCommerce környezetben (pl. új rendeléskezelés, blokkos pénztár) is zavartalanul használható.

---

Szeretnél kész, importálható mintákat (3‑lépcsős kosárelhagyás, 90 napos win‑back, review reward, kártyalejárat‑értesítés)? Szívesen adok részletes trigger/szabály/akció beállításokat.