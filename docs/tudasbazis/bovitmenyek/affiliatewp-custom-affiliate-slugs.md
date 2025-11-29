---
title: "AffiliateWP - Custom Affiliate Slugs"
description: "Pro szintű AffiliateWP-kiegészítő, amellyel az affiliált partnerek a felhasználónév/ID helyett egyedi, könnyen megjegyezhető slugot használhatnak a hivatkozásaikban."
sidebar_label: "AffiliateWP - Custom Affiliate Slugs"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Custom Affiliate Slugs egy hivatalos Pro kiegészítő, amellyel az affiliált partnerek egyedi, márkázott **slugot** adhatnak a referral linkjeikhez. Így nem kell többé felhasználónevet vagy ID‑t megosztaniuk, a linkjeik pedig rövidbbek, emlékezetesebbek és profibbak lesznek. Működik a csinos (permalinkes) és a query paraméteres URL‑formátumokkal is, és kompatibilis az AffiliateWP kampány funkciójával.

## Fő funkciók és működés

### Egyedi slug engedélyezése
- Globálisan minden affiliate számára engedélyezheted, vagy csak kiválasztott partnereknek.
- A beállításoknál megadhatod, hogy a rendszer alapértelmezés szerint **a slugot használja** (Default Referral Format: Custom Affiliate Slug), vagy maradjon az ID/felhasználónév.
- Ha nem szeretnél teljes átállást, kapcsold be a **Show Custom Slug** opciót: a partnerek látják és kezelhetik a slugjukat, miközben az URL‑generátor továbbra is az ID‑t/felhasználónevet használja.

### Automatikus slug‑generálás
- Új affiliate regisztrációjakor, automatikus átsoroláskor (user → affiliate), illetve kézi felvételkor a rendszer slugot generálhat.
- Szabályozhatod a karakterkészletet (**csak betűk** vagy **alfanumerikus**), a kis‑/nagybetű használatot és a **hosszt**.

### Partnerfelület
- Az affiliate a saját fiókjában, a **Settings** lapon létrehozhatja, módosíthatja vagy törölheti a slugját.
- Módosításkor megerősítés szükséges, így elkerülheted a véletlen átírást.

### Admin eszközök
- Az admin az **Edit Affiliate** nézetben megadhatja vagy felülírhatja a slugot, és új affiliate felvételekor is kioszthatja.
- Exportkor a CSV állomány tartalmazza a **Custom Slug** oszlopot, így riportokhoz is használhatod.

### Ütközéskezelés és érvényesség
- **Egyediség:** nincs duplikáció; két affiliate nem kaphat azonos slugot.
- **Foglaltság:** nem használhatsz olyan slugot, ami már egy meglévő WordPress felhasználónév.
- **Formátum:** a slug nem lehet teljesen numerikus, és legfeljebb **60 karakter** hosszú.

### Kompatibilitás és viselkedés
- Csinos és query paraméteres URL‑ekkel egyaránt működik.
- Ha a Default Referral Format a slug, az URL‑generátor is azt használja; slug hiányában visszaesik felhasználónévre.
- A slug együtt használható az AffiliateWP **kampány** paraméterével a pontos forráskövetéshez.
- A referral paraméter (pl. „ref”) az AffiliateWP‑ben átnevezhető.

## Telepítés és beállítás

1. Telepítsd és aktiváld az AffiliateWP alap bővítményt, majd aktiváld a licencet.
2. Telepítsd és aktiváld a Custom Affiliate Slugs kiegészítőt (Pro hozzáférés szükséges).
3. Menj a beállításokhoz: AffiliateWP » Settings » Custom Affiliate Slugs.
   - Engedélyezd a slug használatát globálisan vagy csak kiválasztott partnereknek.
   - Állítsd be az automatikus generálást (karakterkészlet, kis/nagybetű, hossz).
   - Kapcsold be a Show Custom Slug megjelenítést igény szerint.
4. Az Affiliates fülön az alapértelmezett hivatkozási formátumot állítsd **Custom Affiliate Slug**‑ra, ha a slugot szeretnéd elsődlegesen használni.
5. Per‑affiliate jogosítás és szerkesztés az Affiliates listában.

## Gyakorlati példák

Példák a slugokra és hivatkozási formákra (a domain nélküli minta a szemléltetéshez):

```
/?ref=MyBusinessName            (márkanév alapú)
/ref/JohnSmithMay2025           (időszakos kampány)
/ref/j0hnj4c0b5m1th             (véletlenszerű, alfanumerikus)
```

Kampány paraméterrel kombinálva:
```
/ref/MyBusinessName?campaign=spring-sale
```

Megjegyzés: a „ref” kulcs átnevezhető az AffiliateWP beállításaiban.

## Előnyök és értékajánlat

- **Márkázott megjelenés:** személyre szabott, könnyen megjegyezhető linkek, amelyek növelhetik az átkattintást.
- **Adatvédelem:** elrejtheted a felhasználónevet/ID‑t, profibb és biztonságosabb kommunikációt adva a partnereknek.
- **Automatizáció:** tömeges affiliate‑felvételnél automatikus slug‑kiosztás, kevesebb adminisztráció.
- **Kontroll és minőség:** per‑affiliate engedélyezés, érvényességi szabályok és ütközéskezelés a következetes névadásért.
- **Riportálhatóság:** slug mező exportja CSV‑be, jobb áttekinthetőség.

## Kinek ajánlott?

- **Márkák és webshopok**, amelyeknek fontos az egységes, profi affiliate kommunikáció.
- **Programgazdák és affiliate menedzserek**, akik szeretnék automatizálni és szabályozni a slug‑kiosztást.
- **Ügynökségek és hálózatok**, ahol sok partner dolgozik, és kritikus a névadási politika.
- **Adatvédelemre érzékeny partnerek**, akik nem akarják a felhasználónevüket nyilvánosan megjeleníteni.

## Korlátozások és követelmények

- **Előfeltétel:** szükséges az AffiliateWP alap bővítmény.
- **Licenc:** a kiegészítő a Pro csomag része.
- **Slug szabályok:** nem lehet csak szám, legfeljebb 60 karakter, nem lehet már létező WP felhasználónév, és minden slugnak egyedinek kell lennie.

## Tippek a sikeres bevezetéshez

- Alakíts ki **névadási irányelveket** (latin karakterek, tiltott kifejezések, márkakonzisztencia).
- Végezz **fokozatos átállást**: először kapcsold be a Show Custom Slug opciót, majd később állítsd az alapértelmezett formátumot slugra.
- Használd a **kampány paramétert** a sluggal együtt a forgalmi források finom szegmentálására.