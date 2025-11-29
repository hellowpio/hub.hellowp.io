---
title: "LearnDash LMS - Integrity"
description: "Hivatalos, ingyenes LearnDash kiegészítő a kurzusoldalak integritásának védelmére: hotlink‑védelem, párhuzamos bejelentkezés tiltása, tartalom‑másolás gátlása és reCAPTCHA."
sidebar_label: "LearnDash LMS - Integrity"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – Integrity egy ingyenes, hivatalos kiegészítő, amely a kurzusoldalak “integritását” védi. Célja, hogy csökkentse a leggyakoribb visszaéléseket: a médiatartalmak hotlinkelését, a felhasználói fiókok megosztását (párhuzamos bejelentkezés), a felületi tartalom‑másolást, valamint a bot‑regisztrációkat és kéretlen bejelentkezési kísérleteket. Nem helyettesít átfogó biztonsági/DRM‑rendszert, de hatékonyan visszatart és erőforrást spórol.

## Fő funkciók és hogyan működnek

- **Hotlink‑védelem**  
  Megakadályozza, hogy más domainek közvetlenül hívják be a nálad tárolt képeket vagy videókat. Ezzel elkerülöd a “potyautas” sávszélesség‑használatot, és mérsékeled a szerverterhelést. A látogatók a saját oldaladon továbbra is rendben látják a médiát.

- **Párhuzamos bejelentkezés tiltása (Concurrent Login)**  
  Lezárja a lehetőséget, hogy ugyanazzal a fiókkal egyszerre több eszközről vagy helyről legyen aktív munkamenet. Így visszaszoríthatod az “account sharinget”. Kivételt adhatsz szerepkör szerint (pl. admin/oktató) és egyes felhasználóknál egyedileg is engedélyezheted a többszörös bejelentkezést a “Bypass Concurrent Login Lockout” opcióval.

- **Tartalom‑másolás tiltása (Prevent Content Copy)**  
  Kikapcsolja a jobb klikket, illetve a copy/paste funkciókat az oldalaidon. Ez nem feltörhetetlen védelem (képernyőfotókat, fejlett scrapinget nem akadályoz), de hatékonyan visszatartja a kevésbé technikai felhasználókat a kurzusanyag egyszerű kimásolásától.

- **reCAPTCHA integráció**  
  Beépített támogatás a Google reCAPTCHA v2 (checkbox) és v3 (láthatatlan) megoldásaihoz a LearnDash saját bejelentkezési és regisztrációs űrlapjain. Beállíthatod, hogy a reCAPTCHA a Login, a Registration vagy mindkettő űrlapon jelenjen meg. Ezzel számottevően csökkentheted a bot‑regisztrációkat és az automatizált próbálkozásokat.

## Telepítés és beállítás röviden

Előfeltétel: aktív LearnDash bővítmény.

1. Telepítés:
   - WordPress admin felületen keresztül a LearnDash Add‑Ons menüből, vagy
   - ZIP fájl feltöltésével.

2. Aktiválás után a beállítások itt találhatók:
   ```
   WordPress admin > LearnDash LMS > Settings > Integrity
   ```

3. Kapcsold be a kívánt védelmeket (Hotlinking, Concurrent Login, Prevent Content Copy, reCAPTCHA).  
   reCAPTCHA‑hoz add meg a site és secret key‑eket, válaszd ki a típust (v2/v3), és jelöld, mely űrlapokon jelenjen meg.

## Gyakorlati példák

- **Hotlink‑védelem a gyakorlatban:**  
  Egy külső oldal beágyazná a kurzusod borítóképét. A hotlink‑védelem blokkolja a kérést, így nem a te szervered fizeti a másik oldal forgalmát. Nálad a kép továbbra is rendben megjelenik.

- **Account sharing visszaszorítása:**  
  Előfizetőd megosztja a belépési adatait. A párhuzamos bejelentkezés tiltása nem enged több aktív munkamenetet. Az adminoknak vagy oktatóknak, akik több eszközről dolgoznak, adhatsz kivételt.

- **Tartalom‑másolás nehezítése:**  
  A tanulók nem tudnak jobb klikkel másolni, nem működik a Ctrl+C a leckeszövegen. Ezzel jelzed a felhasználási feltételeket és visszatartod a gyors másolást. (Képernyőmentést ez nem akadályoz.)

- **reCAPTCHA a regisztráción:**  
  Bekapcsolod a v2‑t a regisztrációs űrlapon. A hamis, automatizált fiók‑létrehozások látványosan visszaesnek, kevesebb kéretlen felhasználó kerül a rendszeredbe.

## Előnyök és értékajánlat

- **Kézzelfogható erőforrás‑védelem:** kevesebb sávszélesség‑lopás, stabilabb szerverterhelés.
- **Bevételvédelem:** a párhuzamos bejelentkezések tiltása csökkenti a jogosulatlan hozzáférésekből adódó bevételkiesést.
- **Kevesebb spam és admin‑teher:** a reCAPTCHA csökkenti a kézi moderációt és support igényeket.
- **Gyors bevezetés, egyszerű használat:** pár kattintással aktiválható, a legfontosabb védelmekkel.

## Célközönség

- **Online kurzus‑készítők és oktatók,** akik védenék a tananyagot és a bevételi modellt.  
- **Vállalati képzési oldalak,** ahol a hozzáférések kontrollja kritikus.  
- **Ügynökségek és webmesterek,** akik LearnDash‑alapú e‑learning site‑okat üzemeltetnek és standardizálható védelmet keresnek.

## Fontos megjegyzések és korlátok

- **Nem feltörhetetlen:** a “Prevent Content Copy” nem helyettesít DRM‑et, a képernyőfelvételt és haladó scrapinget nem állítja meg. Célja a visszatartás és a kockázatcsökkentés.
- **reCAPTCHA kompatibilitás:** harmadik féltől származó bejelentkezési/regisztrációs űrlapokkal előfordulhat ütközés. Ha hibaüzeneteket látsz, teszteld külön az egyedi űrlapokat, vagy használd a LearnDash beépített űrlapjait.
- **Rendszerkövetelmények:** naprakész WordPress és LearnDash használata javasolt a stabil működéshez.

## Bevezetési javaslatok

1. **Kezdd a Hotlink és Concurrent Login** bekapcsolásával, majd teszteld több szerepkörrel. Az adminoknak/oktatóknak adj szerepkör‑alapú kivételt vagy egyedi “Bypass” jogot.
2. **reCAPTCHA:** regisztráld a domaint, add meg a kulcsokat, először csak a regisztrációs űrlapon teszteld, majd kapcsold be a login űrlapon is. Egyedi űrlapoknál külön ellenőrizd az esetleges ütközéseket.
3. **Prevent Content Copy:** élesítés után vizsgáld az akadálymentességet (pl. billentyűzet‑navigáció, jegyzetelés). Tájékoztasd a tanulókat, hogy a tartalom másolása tiltott.

## Kell ez neked?

Ha LearnDash‑ot használsz, és fontos számodra a tartalom és a bevételek védelme, az Integrity gyorsan bevezethető, ingyenes alapréteget ad. Nem mindenható pajzs, de jelentősen csökkenti a legjellemzőbb visszaéléseket, miközben minimálisra fogja az üzemeltetési terhet.