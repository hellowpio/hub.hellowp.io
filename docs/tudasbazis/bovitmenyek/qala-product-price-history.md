---
title: "Qala Product Price History"
description: "WooCommerce-kiegészítő az árak automatikus naplózásához és a 30 napos legalacsonyabb ár megjelenítéséhez az Omnibus-megfelelésért."
sidebar_label: "Qala Product Price History"
---

## Mi ez és milyen problémát old meg?

A Qala Product Price History egy WooCommerce-bővítmény, amely automatikusan naplózza a termék- és variációs árak változásait, majd a termékoldalon megjeleníti a **legutóbbi 30 nap legalacsonyabb árát** és egy **30 napos ártörténet-grafikont**. Célja, hogy segítsen megfelelni az **EU Omnibus irányelv** ártranszparenciára vonatkozó előírásainak, és egyúttal tiszta, érthető árkommunikációt biztosítson a vásárlóidnak.

Röviden: leveszi a válladról az árkövetés kézi adminisztrációját, miközben a kötelező információkat automatikusan, konzisztensen és átláthatóan jeleníti meg.

## Fő funkciók, érthetően

### Automatikus árváltozás-naplózás
- A bővítmény figyeli az árakat, és minden változást időbélyeggel eltárol.
- Kezeli a **variációkat** is, tehát minden változatnak külön ártörténete lehet.
- A napló alapján valós időben számítja ki a **30 napos minimumárat**, amit az Omnibus előír akciók kommunikálásakor.

### Frontend kijelzés: 30 napos minimum és grafikon
- A termékoldalon, alapértelmezés szerint a **Kosárba** gomb alatt megjelenik egy szöveges blokk a **legutóbbi 30 nap legalacsonyabb árával**.
- Egy külön **“Price History”** szekcióban elérhető a **30 napos árgrafikon**, amely vizuálisan mutatja az árváltozásokat. Variációs terméknél a kijelzés a kiválasztott variációhoz igazodik.

### Admin eszközök: kézi regisztrálás és hibakezelés
- Találsz egy **„árváltozások regisztrálása”** gombot: ezzel bármikor manuálisan elindíthatod az adatfelvételt (például első beállításkor, hogy legyen kiindulási állapot).
- Ha egy téves adminisztráció miatt hibás ár került a naplóba, azt az admin felületen **elrejtheted**, így a frontenden nem zavarja vagy félrevezeti a vásárlót.

### Egyszerű beállítások
- Kapcsolóval **be-/kikapcsolhatod** a 30 napos minimumár szöveg és az árgrafikon megjelenítését.
- Mindez termékoldal szinten működik, a WooCommerce vizuális hierarchiájába illesztve.

## Gyakorlati példák

- Akció kommunikációja: beállítasz egy akciós árat. A termékoldalon automatikusan megjelenik: **„Az elmúlt 30 nap legalacsonyabb ára: …”**. Ezzel teljesíted a jogszabályi elvárást, és elkerülöd a félreértéseket.
- Variációs termék: cipő több méretben/árban. A vásárló kiválasztja a méretet, és a grafikon + 30 napos minimum **az adott variációra** vonatkozó adatokat mutatja.
- Admin hiba javítása: véletlenül rossz árat állítottál be pár percre. Az esemény bekerült a naplóba, de az adminban **elrejted**. A grafikon és a minimumár kijelzés tiszta marad.
- Első bekapcsolás: telepítés után lefuttatod a **manuális regisztrálást**, hogy minden aktuális ár rögzülhessen kiinduló értékként.

## Telepítés és első beállítás

1. Töltsd le a bővítmény ZIP fájlját, majd a WordPress Vezérlőpultban: Bővítmények > Új hozzáadása > Bővítmény feltöltése.
2. Telepítés után **Aktiváld**.
3. Menj a WooCommerce beállításaihoz, keresd meg a bővítmény saját paneljét:
   - Kapcsold be a **30 napos minimumár szöveg** megjelenítését.
   - Kapcsold be az **ártörténet-grafikont** (ha szeretnéd a vizuális nézetet).
   - Futtasd a **manuális árregisztrálást** az induló állapot rögzítéséhez.

Tipp: az első akció előtt ellenőrizd egy minta terméken, hogy a kijelzés a várakozásaid szerint működik.

## Frontend megjelenés és működés

- A **30 napos minimumár** szöveg alapból a Kosárba gomb alatt jelenik meg. Felhasználói szempontból egyértelmű, hogy milyen árszinthez hasonlít az akció.
- A **Price History** szekcióban található grafikon áttekintést ad az elmúlt 30 nap folyamatairól. A vásárló láthatja, mikor és mennyit változott az ár.
- Variációs termék esetén a kijelzés a kiválasztott variációhoz igazodik, így pontos információt kap minden opcióról.

## Előnyök és értékajánlat

- **Jogszabályi megfelelés**: segít teljesíteni az Omnibus szerinti 30 napos minimumár feltüntetését.
- **Időmegtakarítás**: az **automatikus naplózás** kiváltja a kézi árkövetést, csökkenti az admin terhet.
- **Hibaminimalizálás**: hibás bejegyzések **elrejthetők**, a frontend pedig tiszta, konzisztens marad.
- **Vevői bizalom**: az átlátható grafikon és a minimumár kommunikáció **növeli a hitelességet** és javíthatja a konverziót.

## Kinek ajánlott?

- **EU-s piacokra értékesítő WooCommerce webáruházaknak**, ahol az Omnibus-megfelelés elvárás.
- **Marketing csapatoknak**, akik akciókat kezelnek és szeretnék a kommunikációt jogilag rendezett, mégis vásárlóbarát módon megjeleníteni.
- **Ügynökségeknek és fejlesztőknek**, akik megbízóiknak gyors, megbízható Omnibus-megoldást keresnek.

## Kompatibilitás, licenc és megfontolások

- A bővítmény WooCommerce-hez készült, és a szokásos webáruházi folyamatokkal kompatibilis. Mindig ellenőrizd a rendszerkövetelményeket és támogatott verziókat a beszerzési oldalon.
- Prémium licenc formában érhető el, az előfizetés tartalmaz frissítéseket és ügyféltámogatást. Árképzés és feltételek a beszerzési oldalon érhetők el.
- A megoldás kifejezetten a **„legutóbbi 30 nap”** logikára épít. Ha ettől eltérő időtávra lenne szükséged, vizsgáld meg az elérhető beállításokat, illetve jelezd igényedet a fejlesztői csatornákon.

## Bevált gyakorlatok

- Telepítés után azonnal futtasd a **manuális regisztrálást**, hogy legyen hiteles kiinduló állapot.
- Akciók indítása előtt ellenőrizd, hogy a **30 napos minimumár** és az **ártörténet-grafikon** látszik-e.
- Ha hibás ár került a naplóba, az adminban **rejtsd el** a bejegyzést, hogy a vásárlói nézet következetes maradjon.
- Variációk esetén teszteld több opcióval is a kijelzést, hogy minden variációra valós adat jelenjen meg.

Ezzel a bővítménnyel a WooCommerce áraid átláthatók, ellenőrizhetők és jogszabályilag rendezettek lesznek – minimális plusz munkával, automatizáltan.