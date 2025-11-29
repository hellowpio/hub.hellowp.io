---
title: "WP Booking System - Pricelabs"
description: "Hivatalos kiegészítő, amellyel a PriceLabs dinamikus árait és foglalási korlátozásait automatikusan szinkronizálhatod a WP Booking System naptáraiba."
sidebar_label: "WP Booking System - Pricelabs"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – PriceLabs egy hivatalos kiegészítő, amellyel a PriceLabs által számolt **dinamikus árakat** és **foglalási korlátozásokat** (minimum éjszaka, érkezési/távozási szabályok) közvetlenül be tudod tölteni a WordPress oldaladon futó WP Booking System naptáraiba. Ezzel megszűnik a kézi árfrissítés terhe, és a saját, közvetlen foglalási oldalad ugyanazt az árlogikát követi, mint a többi csatornád.

## Hogyan működik röviden?

- A bővítményt a PriceLabs **ügyfél API‑kulcsával** kapcsolod össze.
- Naptáranként kiválasztod, melyik PriceLabs **property**-hez tartozzon.
- A szinkron a PriceLabs-ból érkező napi árakat (és kérésre korlátozásokat) **automatikusan átírja** a kiválasztott naptárban.
- Alapesetben napi egyszer frissül; a PriceLabs-ból manuális “Sync Now” kéréssel azonnali frissítés is kérhető. Gyakoribb szinkron külön beállítható (és külön díjazású).
- Fontos: a szinkron **felülírhatja** a naptárban korábban megadott árakat.

## Fő funkciók részletesen

- **Dinamikus árak szinkronizálása**
  A PriceLabs a piaci kereslet, szezonok, események és versenytársak alapján napi szintű árakat számol. A kiegészítő ezeket az értékeket importálja a WP Booking System naptáradba, így a vendégek mindig aktuális díjakat látnak – anélkül, hogy kézzel szerkesztenéd az árakat.

- **Foglalási korlátozások importja**
  Opcionálisan átveheted a **minimum tartózkodás** és **check-in/check-out** szabályokat. Így a saját naptárad és foglalási űrlapod ugyanazokat a feltételeket érvényesíti, mint amiket a PriceLabs meghatároz.

- **Naptárankénti property hozzárendelés**
  Minden naptárnál kiválasztod, hogy melyik PriceLabs **listing** adatait használja. Több naptár esetén mindegyikhez külön property rendelhető – hasznos több apartman vagy szoba kezelésekor.

- **API‑alapú, biztonságos kapcsolat**
  Az API-kulcsot egyszer adod meg a WP Booking System beállításaiban. Ezt követően a bővítmény a háttérben intézi a szinkronokat, és naprakészen tartja a naptárakat.

- **Licencelés**
  A PriceLabs integráció a WP Booking System **Business (és magasabb)** csomagjaiban érhető el.

## Telepítés és beállítás

1. Szerezz PriceLabs **Customer API** kulcsot a fiókodban, és engedélyezd az API-hozzáférést.
2. Add meg a kulcsot a WordPress adminban:
   ```
   WP Booking System → Settings → Payment Options → PriceLabs
   ```
3. Nyisd meg a kívánt naptárat, és válaszd ki a PriceLabs listát:
   ```
   Edit Calendar → Calendar Options → PriceLabs
   ```
   - Állítsd be a megfelelő property-t.
   - Ha szeretnéd, kapcsold be az „Enable booking restrictions” opciót.
   - Mentsd a változtatásokat.

Figyelmeztetés: az import **felülírja** a korábbi naptár-árakat. Érdemes előtte tesztnaptáron kipróbálni vagy biztonsági mentést készíteni.

## Gyakorlati példák

- **Egy lakás Airbnben és saját oldalon**  
  PriceLabs kezeli a dinamikus árazást. A bővítménnyel a saját WordPress foglalási oldaladon ugyanaz a napi díj és minimum éjszaka jelenik meg, mint a csatornákon – kézi beavatkozás nélkül.

- **Apartmanhálózat rendezvénycsúcsokkal**  
  A városi fesztiválok idején a PriceLabs megemeli az árakat és hosszabb minimum tartózkodást állít be. A változások a következő szinkronnál automatikusan átkerülnek az összes kapcsolt naptáradba.

- **Panzió hétvégi szabályokkal**  
  Péntek–vasárnap minimum 2 éjszaka és csak pénteki érkezés engedélyezett. A korlátozások importjával a foglalási űrlapod pontosan ezekhez a szabályokhoz igazodik.

## Előnyök és értékajánlat

- **Időmegtakarítás:** nem kell naponta/hetente átírni az árakat.
- **Konzisztens árképzés:** a saját oldalad árai és szabályai illeszkednek a többi csatornához.
- **Gyors reagálás:** a piaci változások a következő szinkronnál megjelennek.
- **Kevesebb hiba:** kevesebb kézi szerkesztés = kisebb esély rossz árakra.
- **Több bevétel esélye:** a dinamikus árképzés a kereslethez igazít, a direkt foglalások sem maradnak le az optimalizációról.

## Kinek ajánlott?

- Rövid távú szállásadóknak, akik PriceLabs-ot használnak, és van **saját WordPress foglalási oldaluk**.
- Több ingatlant kezelő üzemeltetőknek, akik **naptáranként** szeretnék párosítani a listákat.
- Panzióknak, kisebb hoteleknek, akik egységesítenék a **minimum éjszaka** és **check-in/out** szabályokat minden csatornán, beleértve a saját oldalt is.

## Üzemeltetés és tippek

- Nagyobb módosítás után futtasd le a PriceLabs-ban a **manuális szinkront**, hogy azonnal átjöjjenek a változások.
- Több, napközbeni frissítéshez állíts be **gyakoribb szinkronokat** (külön díjazás mellett).
- Több naptár esetén készíts egy listát, melyik naptár melyik property-hez tartozik – ez segít elkerülni a téves párosítást.

## Megjegyzések, korlátok, kockázatok

- **Felülírás:** a szinkron átírhatja a naptár-árakat. Teszteld sandbox/teszt naptáron, és készíts biztonsági mentést.
- **API-költség:** a PriceLabs ügyfél API használata listánként havi többletköltséggel jár.
- **Szinkron gyakoriság:** alapértelmezetten napi egyszer frissül. Gyakoribb frissítés külön állítható be és külön díjas.
- **Licencelés:** a kiegészítő nem elérhető belépő szintű csomagban; **Business** vagy magasabb licenc szükséges.
- **Előfeltétel:** aktív PriceLabs-fiók és legalább egy konfigurált listing szükséges.

## Gyors hibaelhárítás

- Nem látszanak az árak? Ellenőrizd az **API-kulcsot**, a **property hozzárendelést**, és hogy a PriceLabs oldalon van-e aktuális, publikált ár.
- Nem érvényesülnek a szabályok? Kapcsold be az „Enable booking restrictions” opciót a naptárban.
- Nem frissül időben? Indíts **manuális szinkront** a PriceLabs-ból, vagy állíts be gyakoribb szinkronizálást.
- Több naptár keveredik? Nézd át a naptár–property párosításokat, és ments minden módosítást.