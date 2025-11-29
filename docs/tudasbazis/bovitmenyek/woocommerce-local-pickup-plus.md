---
title: "WooCommerce Local Pickup Plus"
description: "Prémium WooCommerce bővítmény több átvételi hely, időpontfoglalás, termék‑ és kategóriaszintű szabályok, díjak és adózás kezelésére."
sidebar_label: "WooCommerce Local Pickup Plus"
---

## Mi ez és milyen problémát old meg?

A Local Pickup Plus egy prémium kiterjesztés, amellyel a WooCommerce alap „Helyi átvétel” módját professzionális, több telephelyes, időzített átvételi folyamattá alakíthatod. Úgy teszi lehetővé a „vásárolj online, vedd át az üzletben” (BOPIS) modellt, hogy közben pontosan szabályozhatod: hol érhető el az átvétel, mely termékeknél/kategóriáknál engedélyezett vagy kötelező, mikor vehető át (nyitvatartás, ünnepnapok, előkészítési idő), és milyen díj/engedmény kapcsolódik hozzá. Ezzel leváltod a WooCommerce alap, egypontos és rugalmatlan helyi átvételét.

## Fő funkciók és működés

- **Több átvételi hely**: Végtelen számú helyszínt hozhatsz létre (üzlet, raktár, átvételi pont). A vevő a pénztárnál választ, az átvételi cím megjelenik a visszaigazításban, a fiókban és az admin rendelésnézetben.

- **Termék‑ és kategóriaszintű szabályok**: Beállíthatod, hogy egy termék legyen „átvehető”, „nem átvételes (csak szállítás)”, vagy „kötelezően átvételes”. Ütközésnél a termékszint felülírja a kategóriaszintet, így finoman hangolhatod a kínálatot.

- **Per‑termék vagy per‑rendelés helyválasztás**: Dönthetsz, hogy a kosár átvételre jogosult tételei külön helyre kérhetők-e (pl. több boltban elérhető tételek), vagy az egész rendelésre egyetlen közös helyet engedélyezel.

- **Helyszínhez kötött elérhetőség**: Minden helyhez megadhatod, mely termékek/kategóriák érhetők el ott. A pénztár csak a releváns helyeket mutatja, így a vevő nem választhat „rossz” üzletet.

- **Időpontfoglalás (Pickup Appointments)**: Beállíthatod a nyitvatartást és az ünnepnapokat globálisan vagy helyszínenként, a **lead time** (előkészítési idő), **deadline** (foglalási határidő), idősáv-hossz (15/30/60 perc) és a **kapacitás** (egy idősávban hány átvétel) paramétereivel. A vevő a pénztárban idősávot foglal, te pedig tervezhető kapacitást kapsz.

- **Ár és adózás**: Az átvételhez rendelhetsz **díjat** vagy **kedvezményt**. Az adó számítása történhet az átvételi hely címe alapján, így helyfüggő adózási szabályoknak is megfelelhetsz.

- **Geokódolás és rendezés**: Ha megadsz Google Geocoding API kulcsot, a helyek a vevőhöz mért **távolság szerint rendezhetők** (csak rendezés, nem korlátozás).

- **CSV import/export**: Átvételi helyek gyors, tömeges kezelése. Hasznos több tucat/ száz telephelynél.

- **Értesítések helyszínenként**: Minden helyhez rendelhetsz e‑mail listát, akik automatikus admin értesítést kapnak, ha az a hely érintett a rendelésben.

- **Admin eszközök**: Rendelésekhez kézzel is rögzíthetsz átvételi információt, az admin rendeléslista pedig szűrhető átvételi idő szerint.

- **Integrációk**: Export és számlázó/csomagkövető kiegészítőkkel együttműködik; az exportok tartalmazzák az átvételi metaadatokat.

## Gyakorlati példák

- **Pékség, napi előrendelés**: 3 órás lead time, 15 perces idősávok, 6 rendelés/slot. A vevő csak a nyitvatartáson belül foglalhat, aznapra, megfelelő előkészítési idővel.

- **Elektronikai lánc**: A nagy TV „kötelező átvétel”, kis kiegészítők szállíthatók. A vevő egyetlen helyet választhat rendelésenként. A pénztár csak azoknál a boltoknál enged választást, ahol a TV elérhető.

- **Raktári átvétel**: Bizonyos web‑only termékek csak a disztribúciós központban vehetők át; az adó a raktár címe alapján számítódik.

- **Curbside pickup**: Kültéri átvétel időpontfoglalással, slotonként 5 hely. Az érintett hely csapata automatikus e‑mailt kap a részletekkel.

## Beállítás röviden

1. Aktiválás után menj a WooCommerce szállítási beállításaihoz, majd nyisd meg a Local Pickup Plus oldalt.
2. Az **Általános** fülön engedélyezd a bővítményt, add meg a megjelenített címkét, szükség esetén az API kulcsot és a loggolást.
3. A **Pénztár megjelenítésnél** válaszd a per‑termék vagy per‑rendelés helyválasztást, állíts be alapértelmezett viselkedést (szállítás vs. átvétel) és a telephelyek rendezését.
4. A **Helyszínek** alatt vedd fel az üzleteket: cím, megjegyzés, elérhető termékek/kategóriák, egyedi díj/kedvezmény, nyitvatartás/ünnepnapok, értesítési e‑mail címek.
5. Az **Időpontfoglalásnál** állítsd be a módot (opcionális/kötelező), idősáv-hosszt, kapacitást, lead time‑ot, deadline‑t és a számítás módját.
6. Az **Ár és adó** résznél add meg a díjat/kedvezményt, és kapcsold be az adó számítását az átvételi cím alapján.
7. Teszteld a pénztárat több termékkombinációval.

```
Útvonal:
WooCommerce > Beállítások > Szállítás > Local Pickup Plus

Fő kapcsolók:
- Helyválasztás: [Per termék] / [Per rendelés]
- Időpontfoglalás: [Opcionális] / [Kötelező]
- Adó az átvételi cím alapján: [Be]
```

## Előnyök és értékajánlat

- **Skálázható több telephelyre**: központi szabályokkal és helyszín-specifikus finomhangolással.
- **Pontos kapacitáskezelés**: elkerülöd a torlódást és a hibás ígéretet.
- **Jobb vásárlói élmény**: csak releváns helyek jelennek meg, átlátható idősávokkal.
- **Belső hatékonyság**: automatizált értesítések, exportok, admin szűrés.
- **Adózási megfelelés**: helyfüggő adó számítása.
- **Idő- és költségmegtakarítás**: CSV tömegműveletek, per‑termék szabályok, kevesebb manuális egyeztetés.

## Kinek ajánlott?

- **Több telephelyes kiskereskedőknek** (BOPIS/click‑and‑collect).
- **Étel‑ital szektornak** (pékség, étterem, delikát) idősávos átvétellel.
- **Nagy/érzékeny termékeket** értékesítőknek, ahol a szállítás drága vagy kockázatos.
- **Raktári/elosztó központtal** rendelkező márkáknak.
- **Hálózatos átvételi pontoknak**, ahol termékenként eltérő elérhetőség van.

## Fontos megjegyzések és tippek

- **Blokkalapú pénztár kompatibilitás**: a bővítmény blokkalapú Kosár/Pénztárral korlátozott lehet. Ha gondot tapasztalsz, válts a rövidkódos nézetre, és ellenőrizd az aktuális kompatibilitási állapotot.
- **Kapcsold ki a WooCommerce alap „Local Pickup” módot**, hogy elkerüld az ütközéseket.
- **Geokódolás**: a távolság szerinti rendezés csak sorrendezés; nem zár ki távoli helyeket.
- **Lead time tipp**: ha nyitvatartási órák szerint számolsz, a lead time‑ot gyakran jobb órában megadni, hogy reális dátumok jelenjenek meg.
- **Szabályütközés**: mindig a termékszintű beállítás érvényesül a kategóriaszinttel szemben.
- A funkciók és kompatibilitás idővel változhatnak; beállítás előtt érdemes a legfrissebb dokumentációt áttekinteni.