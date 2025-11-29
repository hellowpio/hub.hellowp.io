---
title: "WooCommerce Email Customizer"
description: "Vizuális arculati szerkesztő a WooCommerce tranzakciós e‑mailekhez a WordPress Customizer felületén. A hivatalos kiegészítő már nem kapható."
sidebar_label: "WooCommerce Email Customizer"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Email Customizer egy hivatalos kiegészítő volt, amellyel kódolás nélkül, a WordPress beépített Customizer felületén tudtad a WooCommerce tranzakciós e‑mailek **megjelenését** testre szabni. Nem a szövegtartalmat, hanem az **arculati elemeket** – színeket, tipográfiát, logót, elrendezés‑részleteket – állíthattad be. A bővítmény célja az volt, hogy a vásárlóidnak küldött rendszerüzenetek (rendelés visszaigazolás, státuszértesítések, számlázási/fiók e‑mailek) **márkakonzisztens**, professzionális megjelenést kapjanak, anélkül, hogy sablonfájlokat kellene felüldefiniálnod.

Fontos: ez a kiegészítő már **nem kapható**. Ha nincs meglévő licenced, válassz alternatívát (pl. MailPoet vagy más aktív e‑mail szerkesztő bővítmény).

## Hogyan működik?

A bővítmény a WordPress Customizerhez kapcsolódott, így valós idejű előnézetben láttad, hogyan néznek ki az e‑mailjeid a módosításokkal. A mentés után a beállítások a WooCommerce alap tranzakciós e‑mailjeire azonnal érvényesültek. Egyes kiegészítők (pl. értesítési és utánkövető bővítmények) e‑mailjeivel is együttműködött, így egységes lett a teljes kommunikáció.

Jellemző munkafolyamat:
```
WooCommerce > Settings > Emails > Customize
Változtatások az előnézetben > Save & Publish
```

Ismert sajátosság: az **e‑mail kliensek** bizonyos esetekben felülírhatják a betűtípus‑beállításokat, ezért nem minden font jelenik meg mindenhol. Érdemes több kliensben tesztelni.

## Fő funkciók részletesen

- **Customizer‑alapú szerkesztés élő előnézettel**: Fogd‑és‑vidd nélkül, de jól strukturált beállításokkal szabhatod testre a fejléceket, lábléceket, háttérszíneket, gombszíneket, elválasztókat és alap tipográfiai elemeket. A változásokat azonnal látod egy valós e‑mail előnézetben.
- **Márkaelemek beállítása**: Logó feltöltése, márkaszínek használata, egységes gomb- és linkstílus. Így a rendelés visszaigazolás, a szállítási értesítő és a számlázási e‑mail ugyanazt az arculatot tükrözi.
- **Kiterjesztett lefedettség**: A beállítások a core WooCommerce e‑mailekre vonatkoznak, és több, e‑mailt küldő kiegészítővel is kompatibilisek, ami csökkenti a fragmentációt.
- **Fordíthatóság**: A bővítmény teljesen **fordítható** (POT/MO), így többnyelvű webshopoknál is gond nélkül beilleszthető a meglévő lokalizációs folyamatba.
- **Kódmentes működés**: Nincs szükség a sablonfájlok (pl. email‑header.php, email‑footer.php) felüldefiniálására, verziókövetésére és karbantartására.
- **Tudatos korlát**: A bővítmény **nem tartalomszerkesztő**. A tárgymezőket, szövegeket, dinamikus blokkokat nem itt alakítod; ezekhez külön megoldás kell.

## Gyakorlati példák

- **Gyors márkahangolás induláskor**: Új webáruházat indítasz, és 30 perc alatt szeretnéd az összes tranzakciós e‑mailt a márkaszíneidre hangolni. Beállítod a logót, a gombok alapszínét, a háttér és a szöveg színeit, majd közzéteszed – kész is a következetes arculat.
- **Szezonális kampány**: Akciós időszakban ideiglenesen megváltoztatod a gombszínt és a fejléc hátterét. Az előnézetben megnézed a „Rendelés teljesítve” e‑mailt, és publikálod a változtatást, később visszaállítod az alap stílust.
- **Többnyelvű bolt**: A bővítmény fordíthatósága miatt a kezelőfelület és a statikus címkék illeszthetők a választott nyelvekhez, miközben a vizuális stílus egységes marad.
- **Kiegészítők egységesítése**: Ha használsz utánkövető vagy értesítési bővítőt, azok e‑mailjei is átveszik az alap stílusokat, így nem „törik meg” a márka élménye.

## Telepítés és alap használat

Meglévő licencek esetén így dolgozhatsz:

1. Töltsd le a bővítmény ZIP fájlját a fiókodból.
2. WordPress adminban: Plugins > Add New > Upload, majd aktiválás.
3. Nyisd meg:
   ```
   WooCommerce > Settings > Emails > Customize
   ```
4. Végezd el a módosításokat az **előnézet** alapján, majd kattints a **Save & Publish** gombra.
5. Tesztelj több e‑mail kliensben, mert a fontok és egyes CSS‑ek eltérően jelenhetnek meg.

## Előnyök és értékajánlat

- **Időmegtakarítás**: Nem kell PHP/HTML/CSS sablonokat szerkesztened, kevesebb karbantartás frissítések után.
- **Márkakonzisztencia**: Minden tranzakciós e‑mail ugyanazt a vizuális minőséget hozza, ami javítja a bizalmat és a konverziót.
- **Kevesebb hibalehetőség**: Az élő előnézet csökkenti a próbálgatást és a „vakrepülést”.
- **Költséghatékonyság**: Egyszerű arculati módosításokhoz nincs szükség fejlesztői erőforrásra.

## Kinek ajánlott?

- **Webshop tulajdonosoknak és menedzsereknek**, akik kódolás nélkül, gyorsan szeretnének professzionális megjelenést.
- **Ügynökségeknek és fejlesztőknek**, akik standardizált, karbantartható megoldást keresnek kisebb projektekhez.
- **Több pluginből e‑mailt küldő rendszerekhez**, ahol fontos az egységes arculat.

Ha teljesen rugalmas **tartalomszerkesztést**, drag‑and‑drop blokkokat, előre gyártott sablonokat, teszt e‑mail küldést vagy széleskörű integrációt szeretnél, érdemes aktívan fejlesztett alternatívát választani.

## Támogatás és életciklus

- A WooCommerce Email Customizer jelenleg **retired**: új vásárlás nem lehetséges.
- A meglévő, aktív előfizetések **támogatását a kiadó (vendor)** biztosítja.
- Hivatalos ajánlott alternatíva a **MailPoet** (drag‑and‑drop szerkesztő, WooCommerce integráció, automatizmusok). További opciók: **YayMail Pro** (széles blokk‑készlet és integrációk), **Email Customizer Pro** by StoreApps (design és szöveg együtt, UTM követés), **Acowebs** megoldása (valós idejű preview, sablonok), illetve a **Kadence WooCommerce Email Designer** (ingyenes, Customizer‑alapú).

## Összegzés: Neked való?

Igen, ha meglévő licenccel rendelkezel, és gyors, **kódmentes arculati testreszabást** szeretnél a WooCommerce tranzakciós e‑mailekhez. Ha viszont **tartalom‑ és elrendezés‑szintű** szabadságra vágysz, vagy most kezdenél bele, válassz a ma elérhető alternatívák közül, amelyek drag‑and‑drop szerkesztést és szélesebb funkcionalitást kínálnak.