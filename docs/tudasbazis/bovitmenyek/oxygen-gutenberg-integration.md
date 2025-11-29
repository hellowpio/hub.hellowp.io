---
title: "Oxygen Gutenberg Integration"
description: "Hivatalos Oxygen Builder kiegészítő, amellyel az Oxygenben tervezett elemeket teljes értékű Gutenberg blokkokként szerkesztheted, központi dizájnkontroll mellett."
sidebar_label: "Oxygen Gutenberg Integration"
---

## Mi ez és milyen problémát old meg?

Az Oxygen Gutenberg Integration az Oxygen Builder hivatalos kiegészítője. Híd a dizájn és a tartalomszerkesztés között: az Oxygenben felépített komponenseket Gutenberg blokkokká alakítja, így a tartalomszerkesztők a natív WordPress blokkszerkesztőben dolgozhatnak, miközben a layout és a stílus központilag, az Oxygenben marad kontroll alatt. Ez megelőzi a „szétcsúszó” oldalakat, egységesíti a szerkesztői élményt, és gyorsítja a karbantartást.

## Hogyan működik röviden

- Az Oxygenben megtervezett szekciókat/komponenseket blokkként regisztrálod.
- A WordPress szerkesztőben ezek az „Oxygen Blocks” kategóriában jelennek meg.
- A blokkoknak kijelölhetsz szerkeszthető mezőket (pl. szöveg, kép, link), amelyeket a tartalomszerkesztők Gutenbergben módosítanak.
- Teljes oldalakat is szerkeszthetővé tehetsz „Full Page Blockként”.
- A „Client mode” elrejti az Oxygen felületet a kijelölt felhasználóknál/bejegyzéstípusoknál.
- A renderelés továbbra is az Oxygenen keresztül történik; a WordPress téma‑rendszer nem vesz részt.

A bővítményt külön kell telepíteni és licencelni (külön licencmező az Oxygen beállításain belül).

## Fő funkciók részletesen

- **Oxygen elemekből Gutenberg blokkok**: Bármely Oxygen szekciót vagy komponenst gyorsan blokká alakíthatsz. A Gutenbergben a saját, kategorizált „Oxygen Blocks” között találod meg őket. Egész oldalakat is publikálhatsz „Full Page Block” módban, hogy az oldal teljes tartalma a blokkszerkesztőből legyen módosítható.

- **Tartalmi mezők kijelölése és szerkesztése**: A blokkokon belül meghatározod, hogy mely mezők legyenek szerkeszthetők (például **szöveg**, **rich text**, **képek**, **ikonok**, **link URL‑ek**, **szekcióháttér-képek**). A szerkesztő felület kiemeléssel jelzi, pontosan melyik elemhez tartozik az adott mező, így nem tévedsz el a komponensben.

- **Központi dizájnfrissítés**: Ha az Oxygenben módosítod egy blokk dizájnját, a változtatás minden előforduláson érvényesül. A Gutenbergben megadott tartalmi értékek megmaradnak, így a dizájn és a tartalom elválik egymástól.

- **„Client mode” és jogosultságok**: Elrejtheted az Oxygen szerkesztőt adott szerepkörök vagy bejegyzéstípusok esetén. Az ügyfelek/tartalomszerkesztők csak a Gutenberget látják, így nem tudják véletlenül felülírni a layoutot.

- **Újrafelhasználás több webhelyen**: A blokkokat megoszthatod és telepítheted más site‑okra az Oxygen beépített könyvtárával vagy a WordPress import/export eszközeivel.

- **Teljesítmény finomhangolás**: Kikapcsolhatod a „Gutenberg Blocks CSS” betöltését, ha nem használsz natív Gutenberg blokkokat. Ezzel gyorsíthatod a betöltést; ha mégis használsz natív blokkokat, szükség lehet saját CSS‑re.

- **Licenc és frissítés**: A kiegészítő saját licencmezőt kap az Oxygen beállításai között; a frissítések és a hibakeresés ehhez a licenchez kötődnek.

## Gyakorlati példák

- **Márkakomponens-könyvtár**: Készíts hős szekciót, ártáblát, CTA‑sávot Oxygenben. Jelöld szerkeszthetőként a címet, leírást, gombszöveget és képet. A szerzők Gutenbergben variálhatják a tartalmat, a tipográfia és a spacing központilag egységes marad.

- **Landing oldalak „Gutenberg‑esítése”**: Az oldalt Full Page Blockként teszed szerkeszthetővé. A marketing csapat a megszokott blokkszerkesztőben frissít, miközben a rács, a komponensek és a reszponzív viselkedés érintetlen marad.

- **Ügyfélátadás**: Bekapcsolod a client mode‑ot, és elrejted az Oxygent a szerkesztő szerepkörnél. Az ügyfél csak azokat a mezőket látja és módosítja, amelyeket erre kijelöltél.

- **Többsite‑os projektek**: Ugyanazokat a Oxygen‑blokkokat használod több webhelyen. Ha frissíted a dizájnt, mindenhol egységesen megjelenik, a helyi tartalom közben megmarad.

## Telepítés és első blokk lépésről lépésre

1. **Telepítés**: Aktiváld az Oxygent, majd telepítsd és aktiváld az Oxygen Gutenberg Integration kiegészítőt.
2. **Licenc**: Az Oxygen beállításain belül add meg a kiegészítő licenckulcsát.
3. **Blokk létrehozása**:
   - Oxygen → Block Library → új blokk; vagy
   - Structure panel: Section/Div → „Copy to Block”; vagy
   - Oldalszinten: Oxygen meta box → „Make This Full Page Editable In Gutenberg”.
4. **Szerkesztés Gutenbergben**: Keresd az „Oxygen Blocks” (vagy „Oxygen Full Page Blocks”) kategóriát, illeszd be a blokkot, majd szerkeszd a kijelölt mezőket.

```
Oxygen → Block Library → Add New
Structure panel → jobb klikk Section/Div → Copy to Block
Oldal szerkesztése → Oxygen meta box → Make This Full Page Editable In Gutenberg
```

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Egyetlen helyen végzett dizájnmódosítás mindenhol érvényesül.
- **Kevesebb hibalehetőség**: A tartalom külön szerkeszthető, a layout védett.
- **Gyors szerkesztői munka**: A szerzők a natív Gutenberg felületen dolgoznak.
- **Skálázhatóság**: Ugyanaz a komponenskönyvtár több site‑on használható.
- **Teljesítmény‑kontroll**: Felesleges CSS kikapcsolása, célzott optimalizálás.

## Célközönség

- **Ügynökségek és fejlesztők**, akik Oxygennel építenek, de a tartalmat a csapat vagy az ügyfél Gutenbergben szeretné szerkeszteni.
- **Marketing és tartalomcsapatok**, akiknek a gyors, biztonságos tartalomfrissítés fontos, dizájnkockázat nélkül.
- **Többsite‑os működés** vagy franchise hálózatok, ahol egységes márkakomponensek szükségesek.

## Korlátok és megjegyzések

- **Előnézeti korlátok**: Bizonyos dinamikus elemek (pl. repeater, dinamikus adatok) a Gutenbergben csak placeholdert mutathatnak; a frontenden rendben megjelennek.
- **Téma‑függetlenség**: Az Oxygen letiltja a WordPress téma‑rendszert; a renderelést az Oxygen sablonjai végzik. A blokktémás/FSE funkciók itt nem célzottak.
- **CSS beállítás**: Ha letiltod a Gutenberg Blocks CSS‑t, és natív blokkokat használsz, külön stílusra lehet szükség.
- **Függőség**: A blokkok működéséhez az Oxygen és a kiegészítő aktív jelenléte szükséges.

## Best practice tippek

- Csak a valóban **tartalmi** mezőket tedd szerkeszthetővé; a struktúrát és spacinget hagyd Oxygen kontroll alatt.
- Adj egyértelmű **mezőcímkéket** és leírásokat, hogy a szerkesztők tudják, mit módosítanak.
- Tervezz **újrafelhasználható** komponensekben (atomok → molekulák → szekciók), hogy skálázni tudd a könyvtárat.
- Használd a **client mode‑ot** és a szerepkör‑szabályokat a biztonságos átadásért.