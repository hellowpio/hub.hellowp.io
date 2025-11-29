---
title: "MainWP Post Dripper Extension"
description: "Pro kiegészítő a MainWP-hez, amellyel bejegyzéseket és oldalakat ütemezetten, „csöpögtetve” publikálhatsz több összekapcsolt WordPress-oldalra a központi irányítópultról."
sidebar_label: "MainWP Post Dripper Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Post Dripper egy Pro kiegészítő, amellyel ugyanazt a bejegyzést vagy oldalt nem egyszerre, hanem előre beállított ütemezéssel, „csöpögtetve” küldheted ki több kapcsolt WordPress-oldalra a MainWP Dashboardból. Így elkerülheted a tömeges, egyszerre történő publikálásból eredő csúcsokat, egyenletesebb megjelenést és terhelést érsz el, és rengeteg manuális munkát takarítasz meg.

## Hogyan működik röviden?

1. Létrehozod a tartalmat a MainWP Dashboardban (Posts/Pages).
2. Bekapcsolod a **Use Post Dripper** opciót, és megadod az ütemezést: milyen gyakran, és egyszerre hány oldalra menjen ki.
3. Kiválasztod a cél **Child** oldalakat.
4. Elindítod a publikálást; a bővítmény ütemezetten, körönként a beállított számú oldalra küldi ki a tartalmat, amíg minden kijelölt oldal meg nem kapja.
5. A futást a háttérben a **WordPress Cron** biztosítja a Dashboard oldaladon.

## Fő funkciók részletesen

- **Drip-ütemezés több oldalra**  
  Beállíthatod, hogy a tartalom milyen ritmusban jusson el a kiválasztott oldalakra (pl. óránként 2 oldal, naponta 1 oldal). A rendszer nyilvántartja, hová küldte már ki a posztot, és nem duplikál egy oldalon belül. A folyamat addig fut, amíg minden kijelölt oldalra nem publikált.

- **Részletes ütemterv és kapacitás**  
  Két kulcstényezőt állítasz: a **gyakoriságot** (időköz) és a **batch méretet** (hány oldal kapja meg egyszerre). Így a hálózat méretéhez és a szerverkapacitáshoz igazíthatod a terítést.

- **Drip-session kezelés**  
  A futó „drip” kampányokat listázva követheted, és bármikor leállíthatod (**Cancel Drip**). Leállításkor a már kiküldött tartalmak érintetlenek maradnak, csak a további terítés áll meg.

- **Szerkesztői integráció**  
  A beállítások közvetlenül a MainWP Posts/Pages „Add New” képernyőjén érhetők el. Nem kell külön felületre lépned: tartalomírás közben döntöd el, hogy csöpögtetve menjen ki.

- **Integrációk**  
  - **Boilerplate**: ismétlődő, tokenizált posztok/oldalak központi kezelése. A Dripper ezeket is ütemezve teríti.  
  - **Article Uploader**: CSV-ből tömegesen feltöltött cikkeket betölt, a Dripper pedig folyamatos publikálásra időzíti.

- **Ütemezett feladatok (Cron) támogatása**  
  A drip futásához a Dashboard oldalon megbízható **WP Cron** szükséges. Javasolt külső ping/monitor beállítása (pl. Uptime Robot vagy szerver oldali cron), hogy az időzített események biztosan lefussanak akkor is, ha nincs forgalom a Dashboardon.

## Gyakorlati példák

- **Lokációs hálózat tartalomterítése**  
  Van 20 városi aloldalad. Beállítod: „naponta 1 oldalra”. A rendszer 20 nap alatt, naponta egy-egy site-on publikálja a cikket, így folyamatos aktivitást és természetes ütemet biztosít.

- **Termékbevezetés fokozatosan**  
  Kampánycikk óránként 2 oldalra csöpögtetve: a hír nem önti el egyszerre a teljes hálózatot, mégis néhány órán belül minden helyre eljut.

- **Boilerplate jogi oldalak frissítése**  
  Tokenizált ÁSZF vagy Adatkezelési tájékoztató: készre szerkeszted központilag, majd a Dripperrel naponta 5 site-on publikáltatod, amíg a teljes hálózat naprakész nem lesz.

- **Tömeges cikkfeltöltés folyamatos publikálásra**  
  CSV-vel feltöltöd egy hónap cikkeinek vázát, majd a Dripperrel beállítod a heti ritmust. A hálózat minden nap kap friss tartalmat.

Példa beállítás (illusztráció):

```
Tartalom: „Tavaszi akciók 2025”
Ütem: naponta
Batch: 1 oldal / futás
Kezdés: 09:00
Céloldalak: 20 kiválasztott Child site
Eredmény: 20 napos, egyenletes publikálás
```

## Előnyök és értékajánlat

- **Idő- és munka-megtakarítás**: egy tartalmat egyszer készítesz el, a terítést automatizálod.
- **Folyamatos jelenlét**: természetesebb publikálási ritmus, jobb láthatóság.
- **Kiegyenlített terhelés**: nincs egyszerre jelentkező adminisztratív és szerverterhelési csúcs.
- **Központi kontroll**: egy Dashboardból ütemezel, felügyelsz és állítasz le kampányokat.
- **Skálázhatóság**: több tucat vagy több száz oldal esetén is átlátható marad a terítés.
- **Rugalmasság integrációkkal**: Boilerplate és Article Uploader együtt még hatékonyabb folyamatot ad.

## Követelmények és fontos tudnivalók

- **Szükséges környezet**: MainWP Dashboard (Core) + Pro előfizetés, és a Child bővítmény a céloldalakon.
- **Cron megbízhatóság**: gondoskodj róla, hogy a Dashboardon a WP Cron események időben lefussanak (külső ping vagy szerver cron ajánlott).
- **Nem WordPress Multisite**: különálló, önálló WordPress-oldalak hálózatára készült.
- **Biztonság**: korábbi kiadásokban volt ismert sebezhetőség; mindig frissíts a legújabb elérhető verzióra, és kerüld a nem hivatalos forrásokat.

## Kinek ajánlott?

- **Webügynökségek és franchise hálózatok**: sok, márkánként vagy lokációnként különálló site kezelése.
- **Tartalomgyártó csapatok és kiadók**: rendszeres, elnyújtott publikálás nagy site-hálózatban.
- **SEO és helyi marketing csapatok**: lokációs landingek, szezonális posztok ütemezett terítése.
- **Jog és compliance felelősök**: Boilerplate jogi oldalak fokozatos, központi frissítése.

## Best practice tippek

- Készíts **hálózati tartalomnaptárt**, és a Dripperrel automatizáld a ritmust.
- Állíts be **reális batch méretet** és időközt a szerverkapacitáshoz igazítva.
- Használd a **Boilerplate + Dripper** kombinációt a sablonos, tokenizált oldalakhoz.
- Tömeges témáknál dolgozz **Article Uploader + Dripper** párossal a gépies feladatok levételéhez.
- Figyeld a **futó drip-sessionöket**, és szükség esetén állítsd le; a már kiment tartalmakat a szokásos MainWP tartalomkezeléssel kezeld.
- Biztosíts **külső Cron-pinget**, hogy az ütemezés időben teljesüljön akkor is, ha a Dashboard nem kap látogatást.

Ezzel a kiegészítővel pontosan beállíthatod, mikor és milyen ütemben jelenjen meg ugyanaz a tartalom több oldaladon – teljes kontrollal, felesleges manuális másolgatás nélkül.