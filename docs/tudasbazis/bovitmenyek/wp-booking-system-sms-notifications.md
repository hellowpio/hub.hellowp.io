---
title: "WP Booking System - SMS Notifications"
description: "Automatikus, időzített SMS-értesítések a WP Booking System foglalásaihoz Twilio-integrációval."
sidebar_label: "WP Booking System - SMS Notifications"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – SMS Notifications egy prémium kiegészítő, amely automatikus SMS-eket küld a foglalási folyamat kulcspontjain. Arra való, hogy a fontos információk biztosan és időben eljussanak a vendégekhez és az adminisztrációhoz – az SMS-ek megnyitási aránya jellemzően magasabb az e-maileknél, így csökken a no-show, gyorsul a kommunikáció, és kevesebb manuális utánkövetésre lesz szükséged.

## Hogyan működik röviden?

- A kiegészítő a **Twilio** üzenetküldő szolgáltatást használja az SMS-ek kézbesítéséhez.
- A **Form → SMS Notifications** felületen beállíthatod, hogy mely esemény(ek)kor, kinek és milyen szöveggel menjen SMS.
- Minden értesítéshez megadhatod, hogy **mikor** menjen (X nappal a kezdés előtt/után vagy a vég után), és a címzettet a foglalási űrlap **Phone** mezőjéhez kötheted.
- Az üzenetszöveg **dinamikus tageket** támogat (pl. név, dátumok, foglalás adatai), így személyre szabott, automatikus SMS-eket küldhetsz.

## Fő funkciók részletesen

- **Admin Notification**: Az oldal adminisztrátora SMS-t kap, amikor új foglalás érkezik. Gyors reakciót tesz lehetővé a személyzetnek (pl. visszaigazolás, előkészítés).
- **User Notification**: A vendég az űrlap beküldése után azonnal visszaigazoló SMS-t kap – függetlenül a fizetési módtól és az automatikus elfogadástól. Ezzel azonnali biztonságérzetet adsz, és csökkented az ügyfélszolgálati terhelést.
- **Reminder Notification**: Emlékeztető SMS X nappal a foglalás kezdete előtt (pl. 3–7 nappal). Segít pontosítani az érkezési részleteket és mérsékli a meg nem jelenést.
- **Follow Up Notification**: Utánkövető SMS X nappal a foglalás vége után. Kiváló köszönetnyilvánításra, értékeléskérésre vagy upsell ajánlatokra.
- **Final Payment Reminder**: Ha a **Részletfizetés (Part Payments)** engedélyezett, automatizált végső fizetési emlékeztetőt küld X nappal a kezdés előtt. Csökkenti a kintlévőségeket és gyorsítja a behajtást.

Kiegészítő lehetőségek:
- **„Send To” mező**: válaszd ki a foglalási űrlap **Phone** mezőjét címzettként.
- **„When to send”**: állíts be nap-eltolást a kezdet/vég előtt-után.
- **„Message” sablon**: írj rövid, lényegre törő üzenetet, dinamikus tagekkel.
- **„Phone Number Stylised UI”**: ajánlott bekapcsolni a telefonszámok hibamentes, nemzetközi formátumú megadásához.

## Gyakorlati példák

- **Azonnali visszaigazolás**: „Köszönjük a foglalásod! Érkezés: [dátum], távozás: [dátum].”
- **Érkezési emlékeztető 5 nappal előtte**: útvonal, check-in instrukciók, parkolási infók.
- **Végső fizetési emlékeztető**: X nappal a kezdés előtt automatikus figyelmeztetés a még nyitott egyenlegről.
- **Távozás utáni köszönet**: értékeléskérés vagy kupon a következő foglalásra.
- **Admin riasztás**: új foglaláskor azonnali SMS a személyzetnek, hogy rögtön léphessen.

## Előnyök és értékajánlat

- **Magas kézbesítési arány**: az SMS-t az ügyfelek szinte biztosan észreveszik.
- **Kevesebb no-show és késés**: a jól időzített emlékeztetők csökkentik a kockázatot.
- **Automatizált utánkövetés**: kevesebb manuális munka, gyorsabb folyamatok.
- **Gyors pénzbehajtás**: a Final Payment Reminder csökkenti a kintlévőségeket.
- **Egységes rendszerben**: a WP Booking System űrlapjaival és értesítéseivel natívan működik, nincs szükség több külön bővítmény kombinálására.

## Kinek ajánlott?

- **Szálláshelyek, nyaralók, apartmanok**: napi alapú foglalásokhoz elengedhetetlen a pontos kommunikáció.
- **Jármű- és eszközkölcsönzők**: autók, csónakok, sporteszközök, ahol a késés és no-show különösen költséges.
- **Rendezvényhelyszínek**: előzetes tájékoztatás és utókövetés kezelése gyorsan és megbízhatóan.
- Minden olyan vállalkozásnak, aki szeretné az ügyfeleit **időben**, **mobilon** elérni, és közben **automatizálni** az adminisztrációt.

## Beüzemelés és konfiguráció

1. **Előfeltételek**: aktív WP Booking System prémium (Business vagy magasabb) licenc és **Twilio** fiók.
2. **Twilio beállítás**: a **Settings → SMS** menüben add meg az Account SID-et, az Auth Token-t és a Twilio-számot; itt küldhetsz teszt-SMS-t is.
3. **Űrlap előkészítése**: legyen **Phone** meződ; kapcsold be a **Phone Number Stylised UI** opciót a jobb felhasználói élményért.
4. **Értesítések felvétele**: a **Form → SMS Notifications** képernyőn hozd létre az Admin/User/Reminder/Follow Up/Final Payment Reminder szabályokat.
   - Válaszd ki a **Send To** mezőt (pl. az űrlap Phone mezőjét).
   - Állítsd be a **When to send** időzítést (X nap).
   - Írd meg a **Message** sablont dinamikus tagekkel.
5. **Részletfizetés**: ha használod, engedélyezd az adott űrlapon; így aktív lesz a **Final Payment Reminder**.
6. **Tesztelés és élesítés**: tesztfoglalással ellenőrizd az időzítéseket és a kézbesítést.

## Korlátok és tudnivalók

- **Külső szolgáltató**: az SMS-ek a Twilio-n keresztül mennek; a díjazás és elérhetőség a Twilio feltételeihez igazodik.
- **Licencelés**: a bővítmény a WP Booking System Business (vagy magasabb) csomagjában érhető el.
- **Adatkezelés**: győződj meg róla, hogy van a felhasználótól megfelelő hozzájárulás SMS-ek küldéséhez.

## Implementációs checklista

```
[ ] WP Booking System Business+ licenc aktív
[ ] Twilio fiók + Account SID, Auth Token, Twilio-szám
[ ] Settings → SMS: hitelesítő adatok megadása, teszt-SMS sikeres
[ ] Foglalási űrlap: Phone mező beállítva, Stylised UI bekapcsolva
[ ] Form → SMS Notifications: értesítések létrehozva (Send To, When to send, Message)
[ ] (Opcionális) Part Payments engedélyezve a végső emlékeztetőhöz
[ ] Tesztfoglalás + ellenőrzött kézbesítés
```

## Példa SMS-sablonok

```
User Confirmation:
Szia {customer_name}! Köszönjük a foglalásod. Érkezés: {start_date}, távozás: {end_date}. Foglalási azonosító: {booking_id}.

Reminder (3 nappal előtte):
Emlékeztető: {property_name} foglalásod {start_date}-kor kezdődik. Check-in: {checkin_time}. Kérdés esetén válaszolj erre az üzenetre.

Final Payment:
Figyelem: a fennmaradó {balance_due} összeg esedékes {days_before_start} nappal a kezdés előtt. Kérjük, rendezd a fizetést a késedelem elkerüléséhez.

Follow Up:
Köszönjük, hogy nálunk jártál! Örülnénk a visszajelzésednek a {property_name} foglalásról. Viszontlátásra!
```

Ezzel a kiegészítővel pontosan tudod, mikor és kinek milyen SMS menjen ki, teljesen automatizáltan, így a legfontosabb információk időben és megbízhatóan jutnak el az érintettekhez.