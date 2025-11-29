---
title: "Boilerplate Extension"
description: "MainWP Pro kiegészítő ismétlődő oldalak és bejegyzések központi kezeléséhez, tokenalapú személyre szabással több WordPress webhelyen."
sidebar_label: "Boilerplate Extension"
---

## Mi ez és milyen problémát old meg?

A **Boilerplate Extension** a MainWP ökoszisztéma Pro kiegészítője. Segítségével a **MainWP Dashboardból** központilag hozhatsz létre, testreszabhatsz és teríthetsz **ismétlődő oldalakat és bejegyzéseket** több, úgynevezett **Child** WordPress webhelyre. Ezzel megszünteted a fárasztó kézi ismétlést, egységesíted a tartalmakat (jogi oldalak, Rólunk, impresszum), miközben **tokenekkel** site-onként személyre szabod a változó adatokat (cégnév, cím, domain).

Előfeltétel: szükséged van egy működő **MainWP Dashboardra** és a Child site-okon a MainWP Child bővítményre. A Boilerplate Extension a MainWP Pro csomag része, önmagában nem használható.

## Hogyan működik? (rövid áttekintés)

1. **Tokenek definiálása**: beépített és saját tokenek létrehozása.
2. **Tokenértékek megadása**: minden Child site-hoz külön értékek.
3. **Boilerplate oldal/poszt megírása**: a tartalomba és címbe tokenek beszúrásával.
4. **Publikálás**: kiválasztott Child site-okra egyszerre.
5. **Szinkron frissítés**: ha a sablont módosítod, a változásokat terítheted az érintett site-okra.

## Fő funkciók részletesen

- **Központi tartalomkezelés**  
  A sablonként (boilerplate) definiált oldalak és posztok a **MainWP Dashboardban** készülnek és tárolódnak. Innen egy kattintással több site-ra publikálhatod, vagy később bármikor frissítheted.

- **Tokenek (helyőrzők) a címben és törzsben**  
  A **tokenek** a tartalomban automatikusan Child site-specifikus értékekre cserélődnek. Beírhatod kézzel (pl. `[company.name]`), vagy a **Tokens** metaboxból kattintással beszúrhatod. Így egy sablon sok site-on egyedivé válik.

- **Saját tokenek**  
  A beépítetteken túl **egyedi tokeneket** is készíthetsz (pl. `[company.address]`, `[support.email]`), és mindegyik Child site-hoz megadhatsz eltérő értéket. Megjegyzés: bizonyos, ügyfél- és riport-funkciókhoz fenntartott tokennevek foglaltak – ezeket ne használd újra.

- **Utólagos frissítés és szinkron**  
  Ha a boilerplate tartalmat módosítod, a változásokat egy művelettel **szinkronizálhatod** minden olyan Child site-ra, ahol a sablon korábban publikálva lett. Így jogi vagy márkaüzeneti változásnál minden site gyorsan naprakész.

- **Szelektív terítés és eltávolítás**  
  Újonnan csatlakoztatott site-okra utólag is hozzáadhatod a meglévő sablont. Eltávolításkor célzottan le tudod venni bizonyos site-okról anélkül, hogy máshol törlődne. Fontos: ha a sablont a Dashboardból törlöd, a Child site-okon a korábban publikált tartalom **nem** törlődik automatikusan.

- **Integrációk a MainWP-n belül**  
  - A **Bulk Settings Manager** űrlapkulcsokban támogatja a Boilerplate tokeneket, így tömeges beállításmódosításnál is adhatók site-onként eltérő értékek.  
  - Egyes **e-mail sablonok** is felhasználhatják a tokeneket, hogy üzeneteid személyre szabottak legyenek.

## Gyakorlati példák

- **Jogi oldalak**: Adatkezelési tájékoztató, ÁSZF, impresszum. A cégadatok, kapcsolati adatok és domain tokenekkel változnak site-onként.
- **Rólunk/Support Policy**: Ugyanaz a struktúra minden ügyfélnél, mégis személyre szabott címekkel, elérhetőséggel.
- **Kampányoldalak**: Rövid ideig futó tájékoztatók, akciók központi frissítése több site-on.

Példacím és -tartalom tokenekkel:
```
Cím: Adatkezelési tájékoztató – [company.name]

Tartalom (részlet):
A webhely üzemeltetője: [company.name], székhely: [company.address], webcím: [url.site].
Kapcsolat: [company.email]
Az adatkezelés célja a [company.name] szolgáltatásainak biztosítása a [url.site] domainen.
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: egyszer írod meg, sok helyen publikálod.
- **Következetesség**: azonos szöveg és márkahang mindenhol.
- **Kevesebb hiba**: nincs kézi másolás-beillesztés, tokenek oldják meg a változókat.
- **Gyors frissítés**: központi módosítás után azonnali szinkron.
- **Skálázhatóság**: új site-okat pillanatok alatt bevonsz a standard tartalmakba.

## Célközönség

- **Webügynökségek** és **karbantartó csapatok**, akik sok ügyfél-site-on tartanak karban standard oldalakat.
- **Franchise/hálózati márkák**, ahol sok azonos felépítésű, mégis személyre szabott webhely fut.
- **Vállalati site-hálózatok**, intranet/extranet oldalak egységesítése céljából.

## Fontos megjegyzések és korlátok

- **Előfeltétel**: MainWP Dashboard + Child plugin; a Boilerplate Extension a Pro csomag része.
- **Tokennevek**: bizonyos nevek foglaltak; ne hozd létre őket újra egyediként.
- **Törlés viselkedése**: a Dashboardból törölt sablon nem távolítja el automatikusan a már publikált Child tartalmat.
- **Jogosultság és biztonság**: korábbi verziókban előfordult jogosultságkezelési hiba; mindig frissíts a legújabb kiadásra.

## Biztonság és karbantartás

- Tartsd naprakészen a MainWP Dashboardot, a Child plugint és a Boilerplate kiegészítőt.
- Rendszeresen ellenőrizd, hogy ki fér hozzá a sablonokhoz és a szinkronizáláshoz.
- Változás előtt készíts biztonsági mentést; nagy terítések után ellenőrizd mintasite-okon az eredményt.

## Gyors kezdés (javasolt workflow)

1. Hozd létre a gyakran használt **tokeneket** (pl. `[company.name]`, `[url.site]`, `[company.address]`, `[company.email]`).
2. Add meg a **tokenértékeket** minden Child site-hoz.
3. Írj meg egy **boilerplate** oldalt (pl. Adatkezelési tájékoztató) a tokenekkel.
4. **Publikáld** a kiválasztott site-okra.
5. Későbbi módosításkor indíts **szinkront**, hogy minden érintett site frissüljön.

Ha szeretnéd, szívesen összeállítok egy induló mintatoken-készletet és “privacy/ÁSZF” boilerplate vázat a folyamataidhoz.

## Egy mondatban

Ügynökségi szintű, **tokenalapú**, központi tartalomterítést ad, amellyel ismétlődő oldalakat és posztokat gyorsan, konzisztensen és site-onként személyre szabva kezelhetsz több WordPress webhelyen.