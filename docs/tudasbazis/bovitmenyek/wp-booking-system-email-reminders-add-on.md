---
title: "WP Booking System - Email Reminders Add-on"
description: "Automatizált emlékeztető és követő e-mail értesítések a WP Booking System-ben; ma már a fő bővítmény részeként működik."
sidebar_label: "WP Booking System - Email Reminders Add-on"
---

## Mi ez és milyen problémát old meg?

A korábbi Email Reminders Add-on ma már a WP Booking System beépített **Email Notifications** funkciójának része. Segítségével teljesen automatizálhatod az ügyfélkommunikációt a foglalás teljes életciklusában: azonnali visszaigazolás, indulás előtti emlékeztetők, távozás utáni köszönő és értékeléskérő levelek, valamint **fizetési emlékeztetők**. Célja, hogy csökkentse a no-show-t, gyorsítsa a kifizetéseket és egységes, márkázott e-mail élményt adjon – minimális manuális munkával.

## Hogyan működik? – áttekintés

Az értesítések sablonokból épülnek fel, és **triggerek** indítják őket (például foglaláskor, a kezdés előtt/után X nappal, vagy végső fizetéskor). A küldési időzítést **Day Offset** értékkel állítod be, a feltételekhez kötött logika pedig megengedi, hogy csak a megfelelő ügyfelek kapják meg a levelet. A rendszer támogatja a **márkázást**, az **.ics naptármellékletet**, a **naplózást**, a kézbesítés **óra szerinti** ütemezését, és integrálható számlával vagy szerződéssel is, ha ezek az add-onok telepítve vannak. Bármikor küldhetsz **kézi e-mailt** is egy konkrét foglaláshoz.

### Hol találod és hogyan hozol létre egy értesítést?

```
WP Admin → WP Booking System → Email Notifications → Add New Email Notification
```

1. Válassz sablont és címzettet (pl. a foglalási űrlap e-mail mezőjét).
2. Állítsd be a triggert és a **Day Offset**-et (hány nappal előtte/utána).
3. Adj meg feltételeket (pl. fizetési mód, űrlapmező érték).
4. Kapcsold be az **.ics** mellékletet és – ha használod – csatold a számlát/szerződést.
5. Mentsd el, és a beállított időben a rendszer automatikusan küldi.

Általános e-mail beállítások:

```
WP Booking System → Settings → Email
```

Itt állíthatod a márkaelemeket (logo, színek), a feladói adatokat, CC/BCC-t, az **Email Logs** naplózást és a napi **Delivery Hour**-t.

## Fő funkciók részletesen

- **Korlátlan e-mail sablon**: Annyi értesítést hozol létre, amennyire szükséged van (pl. több nyelv, több szolgáltatás, különféle időzítések). Minden sablonban dinamikus címkékkel személyre szabhatod a tartalmat (pl. foglaló neve, érkezés és távozás dátuma, foglalási azonosító).
- **Rugalmas triggerek és időzítés**: 
  - Küldés azonnal foglaláskor (visszaigazolás).
  - Küldés a kezdés előtt/után X nappal (útmutató, házirend, köszönőlevél).
  - Küldés a végső fizetés megtételekor (nyugtázás, további instrukciók).
  A **Day Offset**-tel pontosan szabályozod, mikor menjen ki az üzenet.
- **Feltételes logika**: Meghatározhatod, hogy az e-mail csak bizonyos feltételek mellett menjen ki, például ha a fizetési mód banki átutalás, ha a vendégek száma meghalad egy értéket, vagy ha egy űrlapmező adott választ tartalmaz. Így mindenki a releváns üzenetet kapja.
- **Márkázott e-mailek**: Beállíthatod a logót, az akcentusszínt és az egységes láblécet, így a levelek profi, következetes megjelenést kapnak – ez növeli a bizalmat és a márkaismertséget.
- **iCalendar (.ics) melléklet**: Az ügyfél egy kattintással hozzáadhatja a foglalást a saját naptárához. Ez csökkenti az elfelejtett érkezéseket és javítja a szervezettséget.
- **Email Logs és Delivery Hour**: A naplózás segít visszakeresni, mi mikor ment ki és kinek, ami támogatja a támogatást és az auditot. A kézbesítés óráját beállítva elkerülheted az éjszakai üzenetküldést, és optimalizálhatod a megnyitási arányt.
- **Fizetési emlékeztetők**: Automatizált üzenetek a rész- vagy végösszeg esedékessége előtt, egyértelmű fizetési instrukciókkal – kevesebb manuális utánkövetés, gyorsabb beérkezések.
- **Integráció más add-onokkal**: Ha használsz számlázást vagy szerződéskezelést, a generált PDF-eket automatikusan csatolhatod az értesítésekhez.
- **Kézi e-mailek a foglalásból**: Egy konkrét foglalás adatlapján sablont tölthetsz be, szerkeszthetsz és azonnal küldhetsz – például különleges kérés vagy változás esetén.

## Gyakorlati példák

- **T−7 nap emlékeztető**: A kezdés előtt 7 nappal küldj útvonalat, parkolási és check-in információt, házirendet és **.ics** mellékletet.  
  Példa beállítás:
  ```
  Trigger: Before Booking Start
  Day Offset: 7
  ```
- **Fizetési emlékeztető**: Esedékesség előtt 3 nappal udvarias figyelmeztetés a fizetési linkkel és határidővel.  
  ```
  Trigger: Before Payment Due
  Day Offset: 3
  ```
- **T+2 nap follow-up**: Távozás után 2 nappal köszönő e-mail értékeléskérő linkkel és visszatérő kuponnal az ismételt foglalás ösztönzésére.  
  ```
  Trigger: After Booking End
  Day Offset: 2
  ```

## Előnyök és értékajánlat

- **Kevesebb no-show** és késői érkezés a proaktív emlékeztetőknek köszönhetően.
- **Gyorsabb kifizetések**, kisebb adminisztráció a fizetési emlékeztetőkkel.
- **Időmegtakarítás**: az automatizált follow-up-ok kiváltják a manuális utánkövetést.
- **Következetes márkaélmény** a sablonokkal és vizuális beállításokkal.
- **Átláthatóság és auditálhatóság** az e-mail naplózással és ütemezett kézbesítéssel.

## Kinek ajánlott?

- **Szállásadóknak** (apartmanok, vendégházak, kempingek), akik automatizálnák a check-in/house rules kommunikációt.
- **Szolgáltatóknak és bérbeadóknak** (eszközbérlés, teremfoglalás), ahol fontos az időben történő fizetés és az emlékeztetés.
- **Túraszervezőknek, oktatóknak, rendezvényszervezőknek**, akik több időponttal dolgoznak, és szeretnék minimalizálni a meg nem jelenést.
- **Kis csapatoknak és egyéni vállalkozóknak**, akiknek kritikus a hatékonyság és a professzionális megjelenés.

## Elérhetőség és licenc

Az Email Reminders ma már nem külön bővítmény, hanem a WP Booking System beépített **Notifications** funkciójának része. A licencelés éves csomagokban történik; az e-mail értesítések a fő bővítmény funkciói közé tartoznak. Az SMS értesítések továbbra is külön add-onként érhetők el, ha többcsatornás kommunikációt szeretnél.