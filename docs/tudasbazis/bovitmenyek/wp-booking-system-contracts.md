---
title: "WP Booking System - Contracts"
description: "Prémium kiegészítő a WP Booking Systemhez: automatikus, márkázható PDF-szerződések generálása és e-mail csatolása minden foglaláshoz."
sidebar_label: "WP Booking System - Contracts"
---

## Mi ez és milyen problémát old meg?

A WP Booking System – Contracts egy prémium kiegészítő, amely minden beérkező foglaláshoz automatikusan professzionális, PDF formátumú szerződést készít. Így nem kell többé kézzel Word/PDF dokumentumokat szerkesztened, a szerződés egységes, hibamentes és azonnal küldhető a vendégnek. A tartalom az űrlapmezőkből dinamikusan épül fel, és illeszthető a márkádhoz (logó, fejléc, számozás).

## Hogyan működik röviden?

1. Engedélyezed az add-ont, beállítod a logót, fejlécet, számozást.
2. A kiválasztott űrlapnál megírod a szerződés sablonját dinamikus tagekkel.
3. A vendég beküldi a foglalást, a rendszer azonnal legenerálja a PDF szerződést.
4. A szerződést a foglalásnál megtekintheted/letöltheted, vagy automatikusan csatolhatod értesítő e-mailekhez (akár ütemezetten is), illetve manuális e-mailhez mellékelheted.
5. Szükség esetén a konkrét foglalás szerződésszövege szerkeszthető és újragenerálható.

## Fő funkciók részletesen

- **Automatikus PDF-generálás foglalásonként**: Minden új foglaláskor létrejön egy PDF, így minden ügyfélhez kapcsolódik egy archiválható megállapodás.
- **E-mail csatolás (automatikus és manuális)**: Az értesítő e-mailekhez egy kapcsolóval csatolhatod a „Contract” dokumentumot. Ütemezett e-maileknél is működik. A foglalás adatlapjáról manuális leveledhez is mellékelheted.
- **Márkázható megjelenés**: Beállíthatsz **logót** vagy **szöveges fejlécet**, alcímeket. A szerződésszám alapja a **Booking ID**, amihez **offset** adható (például 100, így 101-től indul).
- **Szerződés sablonozása dinamikus tagekkel**: A szerződéstörzsben használhatsz sablonváltozókat (pl. dátumok, vendégadatok, foglalási azonosító). Elérhető a speciális `{Signature}` tag az aláírás képének beillesztéséhez.
- **Elektronikus aláírás mező**: Az add-on űrlapmezőt ad a foglalási űrlaphoz. Az ügyfél a beküldéskor aláírhat, az aláírás képe a PDF-be automatikusan bekerül.
- **Megtekintés, módosítás, újragenerálás**: A foglalás kezelőfelületén megnyithatod, szerkesztheted a szöveget, letöltheted a PDF-et, és szükség esetén visszaállíthatod az eredeti sablon alapján („Regenerate Contract”).
- **Többszintű konfiguráció**:
  - Globális: logó, számozás, feliratok.
  - Űrlap-szint: a konkrét űrlaphoz tartozó szerződéstörzs és tagek.
  - Foglalás-szint: egyedi szerkesztés és letöltés.

## Gyakorlati példák

- **Apartmanbérlés**: A vendég kitölti a foglalási űrlapot (név, érkezés/távozás, vendégek száma). A rendszer azonnal elkészíti a bérleti szerződést PDF-ben, a dátumokkal és az összeggel kitöltve, és csatolja a visszaigazoló e-mailhez.
- **Eszközkölcsönzés**: A bérlő aláír a foglaláskor. A PDF-be bekerül a használati feltételek blokkjába az aláírás kép formájában. A kollégád a helyszínen mobilról is le tudja tölteni.
- **Rendezvényhelyszín**: A foglalás elfogadásakor automatikus „Szerződés és házirend” e-mail megy ki, a szerződés PDF melléklettel. Ha módosul a program, a szerződést a foglalásnál átírod és újragenerálod.

## Mintasablon dinamikus tagekkel

```text
Szerződésszám: {Booking ID}
Bérlő: {2:Name} ({2:Email}), Telefon: {2:Phone}

Tárgy: Szállásbérleti szerződés
Időtartam: {Start Date} – {End Date}
Szállás: {Calendar Name}
Létszám: {Guests}

Díjak és feltételek:
- Teljes díj: {Total Price}
- Fizetési határidő: {Due Date}
- Lemondási feltételek: …

Nyilatkozatok:
A bérlő elfogadja a házirendet és a feltételeket.

Aláírás:
{Signature}
Dátum: {Today}
```

(A `{2:Name}` jellegű címkék az űrlapmezők azonosítóihoz kötődnek; a pontos tag-ek az űrlapod mezőitől függenek.)

## Előnyök és értékajánlat

- **Időmegtakarítás**: Automatikus dokumentumkészítés, nincs kézi szerkesztés.
- **Kevesebb hiba**: Az adatok az űrlapból kerülnek a szerződésbe, minimális elírás és inkonzisztencia.
- **Egységes arculat**: Márkához illesztett logó, fejléc és következetes számozás.
- **Gyors kommunikáció**: Azonnali csatolás az értesítőkbe, ütemezhető küldés.
- **Nyomon követhetőség**: Minden foglaláshoz tartozó, letölthető és archiválható PDF.

## Kinek ajánlott?

- **Szálláshelyeknek**: apartmanok, panziók, nyaralók.
- **Jármű- és eszközkölcsönzőknek**: autó, kerékpár, vízi sporteszköz.
- **Rendezvényhelyszíneknek**: termek, szabadtéri helyszínek.
- **Bármely bérleti vagy időalapú szolgáltatásnak**, ahol szükség van szerződésre minden foglalásnál.

## Beállítási tippek és megfontolások

- **Sablonozás**: Használd a standard dinamikus tageket (pl. `{Start Date}`, `{End Date}`, `{Booking ID}`) és a form-mező tageket (pl. `{2:Name}`), hogy a dokumentum mindig személyre szabott legyen.
- **Aláírás**: Építsd be a `{Signature}` tag-et a szerződés aljára; az aláírás az űrlap „Signature" mezőjéből kerül a PDF-be.
- **E-mail csatolás**: Kapcsold be a „Contract” mellékletet az értesítőknél; manuális küldéshez a foglalás adatlapján mellékeld.
- **Változatok kezelése**: Egyedi eseteknél módosítsd a foglalás-szintű szöveget, majd szükség esetén regeneráld az eredeti sablonból.
- **Jogi megjegyzés**: Az aláírás képalapú. A joghatás területenként eltérhet; igazítsd a folyamatot a helyi előírásokhoz.

## Követelmények és licenc

A Contracts a WP Booking System prémium ökoszisztémájának része, a Business és magasabb licenccsomagok tartalmazzák. A fejlesztő a Veribo IT Solutions SRL. A használathoz szükség van a WP Booking System bővítményre és egy kompatibilis prémium licencre.