---
title: "WP Booking System - Redsys Add-on"
description: "A WP Booking System fizetési bővítménye, amellyel közvetlenül a foglalási űrlapon fogadhatsz bankkártyás fizetést a Redsysen és opcionálisan BIZUMon keresztül."
sidebar_label: "WP Booking System - Redsys Add-on"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Redsys Add-on egy **fizetési kiegészítő**, amellyel a WP Booking System foglalási űrlapján **azonnali bankkártyás** és opcionálisan **BIZUM** mobilfizetést fogadhatsz a **Redsys** átjárón keresztül. Ha a célpiacod Spanyolország, ez a páros a helyi ügyfelek számára megszokott, bizalomkeltő és gyors fizetési élményt ad – csökkenti a lemorzsolódást, és a foglalás azonnal **fizetéshez köthető**.

## Hogyan működik a gyakorlatban?

A Redsys a WP Booking System általános **Payment** folyamába illeszkedik. A foglalási űrlapon megjelenik a **Fizetési mód** mező, ahol a vendég a Redsys (bankkártya) és – ha engedélyezed – a **BIZUM** közül választhat. A sikeres tranzakció után a rendszer **visszaigazolja a foglalást**, az összegek és adók a megszokott módon rögzülnek, és minden adat egy helyen, a WP Booking System adminban marad.

### Fő funkciók, érthetően

- **Redsys integráció (kártyás fizetés)**: Visa, Mastercard és más kártyák elfogadása a Redsysen keresztül, közvetlenül a foglalási folyamat részeként. Célja, hogy a vendég ne essen ki a folyamatból, és a fizetés a foglalással együtt történjen.
- **BIZUM támogatás (opcionális)**: Kapcsolóval engedélyezhető a spanyol piacon népszerű BIZUM. A fizetési mezőben külön **megjelenítési név** és **leírás** adható, így pontosan elmagyarázhatod, mit kap a vendég.
- **Test mód és tesztelés**: Beállítás közben biztonságosan próbálhatod a folyamatot. Dokumentált tesztkártya áll rendelkezésre:
  ```
  Kártyaszám: 4548 8120 4940 0004
  Lejárat: jövőbeli dátum (pl. 12/30)
  CVC: tetszőleges (pl. 123)
  ```
- **Állítható megjelenítés**: A Redsys és a BIZUM fizetési opcióknál külön **Display Name** és **Description** mezőkkel igazíthatod az üzenetet a márkádhoz (pl. „Bankkártya – Redsys” és „Fizess biztonságosan bankkártyával”).
- **Egységes ökoszisztéma**: Az addon a WP Booking System fizetési logikáját használja (árképzés, adók, visszaigazolások), így nem kell több helyen adminisztrálnod.

### Kompatibilitás és alternatív útvonalak

- **Közvetlen Redsys**: Az addon önállóan működik a WP Booking Systemen belül, **nem igényel WooCommerce-t**.
- **WooCommerce pénztár alternatíva**: Ha szélesebb fizetési palettát szeretnél (pl. más, WooCommerce-bővítmények által támogatott átjárókat), használd a **WooCommerce Checkout** addont. Ilyenkor a WP Booking System foglalás összege a WooCommerce pénztárán keresztül fizethető. Fontos: ez nem WooCommerce-termékek foglalása, csak a pénztár használata.

## Telepítés és beállítás röviden

1. **Addon telepítése**: WP Admin → WP Booking System → Add-ons. A Redsys Add-on a **Business** és **Developer** licencek része (külön nem vásárolható).
2. **Kereskedői adatok**: Igényelj Redsys kereskedői hozzáférést és **API-kulcsokat** a bankodtól/Redsysetől.
3. **Redsys aktiválása**: WP Admin → WP Booking System → Payment Gateways → Redsys. Kapcsold **Active**-ra, add meg a **Display Name**-et és **Description**-t, majd rögzítsd az API-kulcsokat.
4. **BIZUM engedélyezése (opcionális)**: Ugyanitt kapcsold be, és add meg a saját megnevezést/leírást.
5. **Tesztelés**: Kapcsold test módba és használd a fenti tesztkártyát. Ellenőrizd a sikeres fizetést és a foglalás állapotát.
6. **Élesítés**: Válts éles Redsys kulcsokra, kapcsold ki a test módot.

## Gyakorlati példák

- **Tengerparti apartman Spanyolországban**: A vendég kiválasztja a dátumokat, kitölti az űrlapot, majd **Redsys (kártya)** fizetéssel azonnal kiegyenlíti az előleget. A foglalás automatikusan visszaigazolódik.
- **Kerékpárkölcsönző**: Az online foglalás végén a vendég **BIZUM**-mal fizet, mert számára ez a leggyorsabb. Te pedig látod a sikeres tranzakciót a foglalás részletei között.
- **Szolgáltató stúdió (pl. túravezetés)**: A helyek korlátozottak, ezért csak **előrefizetéssel** fogadsz foglalást. A Redsys biztosítja a gyors, helyi fizetést, minimális lemorzsolódással.

## Előnyök és értékajánlat

- **Helyi bizalom**: A Redsys és a BIZUM a spanyol piacon elterjedt, így a vendégek magabiztosan fizetnek.
- **Kevesebb kiesés**: A foglalás és a fizetés egy folyamatban zajlik, nincs felesleges átirányítás vagy regisztráció.
- **Egyszerű üzembe helyezés**: Pár mező kitöltése, kapcsolók és egy dokumentált tesztkártya – gyorsan ellenőrizheted, hogy minden működik.
- **Egységes admin**: Minden foglalás, ár, adó és visszaigazolás egy rendszerben marad.
- **Licencben benne van**: Business/Developer licenccel jár, nem kell külön vásárlásról és kompatibilitásról gondoskodnod.

## Kinek ajánlott?

- **Spanyolországi szállásadók**: apartmanok, nyaralók, vendégházak, ahol a vendégek Redsys/BIZUM használatot várnak el.
- **Bérlések és szolgáltatók**: eszközbérlés, túrák, óradíjas szolgáltatások, ahol az **azonnali online fizetés** kulcsfontosságú.
- **Azoknak, akik WooCommerce nélkül** szeretnének kártyás és BIZUM-fizetést fogadni a WP Booking Systemen belül.

## Jó gyakorlatok és megjegyzések

- **Piaci fókusz**: A Redsys/BIZUM elsődlegesen a spanyol piac. Használatához szükség van **kereskedői szerződésre** és **API-hozzáférésre**.
- **Tesztelj élesítés előtt**: Próbáld végig a teljes folyamatot a tesztkártyával, ellenőrizd a foglalás állapotváltását és – ha használsz ilyet – a visszatérítési folyamatot.
- **WooCommerce csak igény esetén**: Ha több fizetési módot vagy WooCommerce-specifikus átjárót szeretnél, a **WooCommerce Checkout** addon a megoldás; a Redsys Add-on önállóan nem igényli a WooCommerce-t.

Ha szeretnéd, készítek lépésről-lépésre telepítési útmutatót képernyőképekkel, és adok mintaszövegeket a fizetési opciók felirataihoz és üzeneteihez.