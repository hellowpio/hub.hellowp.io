---
title: "Custom Stock Status"
description: "WooCommerce készletüzenetek testreszabása: érthető, márkához illeszkedő státuszok a teljes vásárlói úton."
sidebar_label: "Custom Stock Status"
---

## Mi ez és milyen problémát old meg?

A „Custom Stock Status” kifejezés két, egymástól független, de hasonló célú WooCommerce-bővítményt takar: egy ingyenes megoldást (Woo Custom Stock Status, Softound) és egy prémium kiegészítőt (Custom Stock Status for WooCommerce, Addify). Mindkettő célja, hogy a WooCommerce alap „Készleten/Nincs készleten/Utánrendelhető” jelzéseit pontos, bizalomépítő és konverziót segítő üzenetekre cseréld – a terméklistától a termékoldalon át egészen a kosár/pénztár és rendelési e‑mailek felületéig.

Az alapértelmezett üzenetek túl általánosak. Ezzel a bővítménycsaláddal egyértelművé teszed a készlethelyzetet (pl. „Csak 3 db maradt”, „Előrendelhető, érkezés pénteken”), csökkented a bizonytalanságot, és illeszted az üzenetek hangját a márkádhoz.

## Fő funkciók, érthetően

### Softound (ingyenes)
- **Státuszok átírása és színezése**: Globálisan és termékszinten meghatározhatod, mit lásson a vevő. Variációnként is külön üzenetet adhatsz, így pl. egy adott méret vagy szín kaphat eltérő szöveget és színt.
- **Megjelenítés több ponton**: A testreszabott státusz megjelenhet a termékoldalon, a kategória/loop nézetben, a kosárban, a pénztárnál és a rendelési e‑mailekben. Ezeket kapcsolókkal és pozícióbeállításokkal vezérelheted.
- **Hasznos shortcöde-ok**:
  - „További infó” link hozzáadása:
    ```
    [wcss_learn_more url="https://példa.hu/szallitas" text="További információ"]
    ```
  - Várható kézbesítés/érkezés kiszámítása munkanapokkal:
    ```
    [wcss_delivery_date days="4" excluded_days="sat,sun"]
    ```
  Ezeket a státuszszöveg részeként is használhatod.
- **Kompatibilitás**: Működik számos népszerű bővítménnyel (pl. termékcsomagok, kompozit termékek, automatizálás, import/export, SEO, többnyelvűség, PDF számlák, kívánságlista), valamint a blokkalapú kosár/pénztár oldalakkal.
- **Pro extrák**: Tömeges szerkesztés, kategóriaszintű státuszok, mennyiségfüggő logika, saját státuszcímkék, többnyelvű integráció.

Beállítás: WooCommerce → Settings → Custom Stock fül; termékszintű mezők a termékszerkesztőben (egyszerű és variálható termékeknél).

### Addify (prémium)
- **Több egyedi státusz és szabály**: Hozz létre tetszőleges státuszokat, és rendeld őket termékekhez/kategóriákhoz. Több szabály működhet párhuzamosan, prioritással.
- **Mennyiségtartomány-alapú váltás**: Automatikusan változik az üzenet a készlet alapján (pl. 1–20: „Utolsó darabok”, 21–100: „Korlátozott készlet”).
- **Szerepkör-alapú megjelenítés**: Más üzenet vendégnek, B2B ügyfélnek vagy viszonteladónak.
- **Megjelenítési típusok és pozíciók**: Csak szöveg, szöveg dátummal, szöveg ikonnal, csak kép; elhelyezés a cím előtt/után, ár után, gomb után stb.
- **Stílus és shortcode**: Saját színek, betűméret; opcionális shortcode a rugalmas kihelyezéshez:
  ```
  [addify_custom_stock_status]
  ```

Beállítás: WooCommerce → Custom Stock menüben új szabályokat hozhatsz létre; megjelenítési pozíció és stílus külön felületen állítható.

## Gyakorlati példák

- **FOMO és transzparencia** (Addify, mennyiségalapú):
  ```
  Alacsony készlet! Csak {stock_qty} db maradt.
  ```
- **Előrendelés várható dátummal** (Softound, státuszszövegben):
  ```
  Előrendelhető – várható kézbesítés: [wcss_delivery_date days="4" excluded_days="sat,sun"]
  ```
- **Részletes tájékoztatás linkkel** (Softound):
  ```
  Korlátozott készlet – [wcss_learn_more url="/szallitas" text="szállítási infók"]
  ```
- **B2B‑specifikus üzenet** (Addify, szerepkör-szűrés):
  - Vendég: „Raktáron – azonnali szállítás”
  - Viszonteladó: „Raktáron – kedvezményes nagyker áron”

## Telepítés és alapbeállítás

- **Softound (ingyenes)**
  1. Aktiválás után menj a WooCommerce → Settings → Custom Stock fülre.
  2. Írd át a gyári státuszok szövegét és színét.
  3. Kapcsold be, hol jelenjen meg (termékoldal, lista, kosár, pénztár, e‑mail).
  4. Termékszinten (és variációnként) felülírhatod a szöveget; használhatsz shortcöde-okat.

- **Addify (prémium)**
  1. WooCommerce → Custom Stock → Add New: add meg a szabály nevét.
  2. Válaszd ki az érintett szerepköröket, termékeket/kategóriákat, mennyiségtartományokat.
  3. Állítsd be a megjelenítési típust és pozíciót.
  4. Finomhangold a stílusokat; szükség esetén használd a shortcöde-ot sablon‑hook nélkül is.

## Előnyök és érték

- **Egyértelmű kommunikáció**: kevesebb ügyfélszolgálati kérdés, kevesebb visszaküldés.
- **Magasabb konverzió**: sürgető, releváns üzenetek a kritikus pontokon.
- **Márka-konzisztencia**: a hangnem és vizuál illeszkedik a shopodhoz.
- **Időmegtakarítás**: szabályokkal és tömeges szerkesztéssel automatizálod a készletüzeneteket.
- **Skálázhatóság**: nagy katalógusnál vagy több célcsoportnál is átlátható marad.

## Kinek ajánlott?

- **Kis és közepes webáruházaknak**: ha gyors, ingyenes módon szeretnéd átírni és színezni a készletüzeneteket (Softound).
- **Variációkkal dolgozóknak**: termékváltozatonként eltérő státuszokkal egyértelműbb lesz a készlethelyzet.
- **Nagy katalógusoknak és B2B‑shopoknak**: szabályalapú, mennyiségtől és szerepkörtől függő üzenetekkel (Addify) kevesebb kézi munka, precízebb irányítás.
- **Ügynökségeknek/fejlesztőknek**: széles kompatibilitás, shortcode‑alapú kihelyezés, jól dokumentált beállítások.

## Tippek és hibaelhárítás

- Ha egyes témák listanézetében nem látszik a státusz, próbáld a megjelenítési pozíciót módosítani, vagy használd a shortcode‑ot.
- Blokkalapú kosár/pénztár esetén kapcsold be a megfelelő megjelenítési opciókat.
- Többnyelvű shopnál fordítsd le a státuszszövegeket; a Pro/Prémium kiadások mélyebb többnyelvű integrációt kínálnak.

Ezekkel az eszközökkel pontosan azt az üzenetet adhatod a vevőidnek, amire a döntéshez szükségük van – ott és úgy, ahol a legtöbbet számít.