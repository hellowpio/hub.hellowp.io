---
title: "WooCommerce Points and Rewards"
description: "Pont alapú hűségprogram WooCommerce-hez: jutalmazd a vásárlásokat és műveleteket pontokkal, majd engedd a vevőknek kedvezményre váltani."
sidebar_label: "WooCommerce Points and Rewards"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Points and Rewards egy hivatalos, fizetős bővítmény, amellyel teljes értékű, pont alapú hűségprogramot indíthatsz a webáruházadban. A vevők vásárlásért és meghatározott műveletekért **pontokat gyűjtenek**, majd ezeket **kedvezményre válthatják**. Segít növelni a visszatérő vásárlások számát, az átlagos kosárértéket és a vevőmegtartást, miközben **kontroll alatt tartod a kedvezmények hatását** az árrésre.

## Hogyan működik – fő funkciók

### Pontszerzés és beváltás
- **Konverziós arányok:** beállíthatod, mennyi pont jár egy költött összeg után (pl. 1 pont minden X pénzegység után), és mennyi pont ér egy meghatározott **kosárkedvezményt** (pl. 100 pont = Y kedvezmény).
- **Azonnali beváltás:** a vevő a pénztárnál a pontjait kedvezményre válthatja; a rendszer ezt **kuponként** alkalmazza a kosárban.

### Szabályok globális/kategória/termék szinten
- **Rugalmasság:** állíts be eltérő pontszorzókat kategóriákra vagy termékekre (pl. egy kategóriában dupla pont).
- **Kedvezménykorlátok:** limitáld a pontból adható kedvezményt százalékban vagy összegben, akár termék szintjén is, így véded a **marginodat**.
- **Kizárások:** jelöld, mely termékekre/kategóriákra nem alkalmazható pontkedvezmény.

### Pontok más műveletekért
- Ne csak vásárlásért jutalmazz: adhatsz pontot **fiók létrehozásáért**, első **értékelésért**, és egyéb akciókért. A pontozható események bővíthetők más kiegészítőkkel.

### Vevői felület és üzenetek
- Jól látható **pontinformációk** a termék-, kosár- és pénztár oldalon: mennyi pontot szerez a vásárló, és mennyi kedvezményre válthatja be.
- A **Saját fiók** felületen a vevő látja egyenlegét és a részletes **ponttörténetet**. A szövegek testreszabhatók.

### Admin és napló
- **Központi pontkezelő:** nézd meg és módosítsd kézzel az ügyfelek pontjait.
- **Pontnapló:** részletes idővonal, miért, mikor és mennyi pont változott; szűrhető és auditálható.

### Visszatérítések, kupon-integráció, Subscriptions
- **Automatikus korrekció:** beváltott pontok azonnal levonódnak; rendelés törlése vagy refund esetén a rendszer visszaállítja. Ha pontot szerző rendelést térítesz vissza, a pontok levonódnak (akár negatív egyenleg is lehet).
- **Kupon együttműködés:** a pontbeváltás kuponként működik; külön **Points Modifier** is elérhető kuponokhoz (pl. akció idején extra pont).
- **Előfizetések:** megújítás után járhat pont; automatikus megújításnál beváltás nem történik, manuálisnál a vevő dönt.

### Indítás és migráció
- **Apply Points to Previous Orders:** korábbi rendeléseidre is jóváírhatsz pontot, hogy a visszatérő vevők azonnal beválthassák.

### Technikai tudnivalók
- Pontadatok külön **adatbázis-táblában** tárolódnak.
- Támogatja a modern WooCommerce technológiákat (pl. **HPOS**, **Cart & Checkout Blocks**).
- Beállíthatod, hogy a bővítmény törlése az összes pontadatot is eltávolítsa. Elérhető teljes pont- és naplóürítés (visszavonhatatlan).

## Gyakorlati példák

- **Alap hűségprogram:** minden elköltött 1000 egység után 10 pont jár; 100 pont = 1000 egység kedvezmény. A vevő a pénztárban dönt a beváltásról.
- **Dupla pont kategóriában:** a “Sport” kategóriában 2× pontok egy kampány idejére, de a kedvezmény maximuma termékenként 15%.
- **Regisztrációs ösztönző:** új fiók létrehozásáért 50 pont; az első értékelésért 20 pont, ezzel bátorítod a tartalomgenerálást.
- **Migráció induláskor:** futtasd az előző rendeléseken a pontjóváírást, így a hűséges vevők azonnal kipróbálhatják a beváltást.

## Előnyök és értékajánlat

- **Vevőmegtartás növelése:** pontgyűjtés = visszatérésre ösztönzés.
- **Kosárérték emelése:** célzott pontszorzókkal és korlátokkal motiválsz upsellre.
- **Árrés-kontroll:** finomhangolható maximumok, kizárások, termék szintű szabályok.
- **Gyors bevezetés:** kész admin felületek, kupon-integráció, minimális fejlesztési igény.
- **Átláthatóság:** részletes pontnapló és testreszabható vevői üzenetek.

## Kinek ajánlott?

- **Kereskedőknek**, akik tartós hűségprogramot szeretnének WooCommerce-ben kódolás nélkül.
- **Márkáknak**, ahol fontos a kontrollált kedvezménypolitika és az árrés védelme.
- **Előfizetéses modelleknek**, ahol a megújítások jutalmazása is számít.
- **Tartalomra építő boltoknak**, akik értékeléseket és regisztrációt ösztönöznének.

## Korlátok és tudnivalók

- **Csak regisztrált felhasználók** kapnak pontot; vendégek nem.
- A **kuponoknak engedélyezettnek** kell lenniük a beváltáshoz.
- Alapértelmezetten **nincs beépített export**; ehhez külön kiegészítő javasolt.
- Ha a kosárban kizárt termék is van, a kedvezmény csak a **jogosult tételekre** alkalmazódik.
- Refundoknál előfordulhat **negatív pont egyenleg**, ha a vevő időközben beváltott.

## Bevezetési és üzemeltetési tippek

- Tervezd meg a **konverziós arányt** úgy, hogy növelje az átlagos rendelési értéket, de ne rombolja az árrést.
- Használd a **kategória- és termékszintű limitációkat** a marginvédelemhez.
- Kommunikálj aktívan: jelenítsd meg a **pontüzeneteket** a termék-, kosár- és pénztárlépéseknél; mérd a beváltási rátát.
- Indítás előtt készíts **biztonsági mentést**, és a régi rendelésekre pontjóváírás futtatásakor számolj a futási idővel.
- Időszakos kampányoknál dolgozz **kupon + Points Modifier** megoldásokkal (pl. hétvégi dupla pont).