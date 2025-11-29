---
title: "FluentCRM Pro"
description: "Önhostolt e-mail marketing és CRM WordPresshez, fejlett automatizációkkal, szegmentálással, jelentésekkel és mély integrációkkal."
sidebar_label: "FluentCRM Pro"
---

## Mi ez és milyen problémát old meg?

A FluentCRM Pro egy WordPressen belül futó, önhostolt e-mail marketing és CRM kiegészítő. Akkor hasznos, ha szeretnéd a hírlevelezést, ügyféladatokat és automatizációkat a saját webhelyeden tartani, miközben kiváltod a drága, kontakt- vagy e-mail-limitált SaaS rendszereket. Megoldja a szétszórt adatforrások problémáját (pl. webáruház, LMS, tagság), és fejlett, bevételközpontú automatizmusokat ad a kezedbe (pl. elhagyott kosár visszanyerés, viselkedésalapú szegmentálás).

## Hogyan működik röviden?

- Minden adat a WordPress-ben marad (kontaktok, aktivitás, kampányok).
- A küldéshez **SMTP/API** kapcsolatot használsz (pl. dedikált e-mail szolgáltató). A kézbesítést DNS/SPF/DKIM/DMARC beállítások javítják.
- A **vizuális automatizációs szerkesztő** trigger–akció–feltétel–cél alapon dolgozik.
- 45+ beépített **integráció** kapcsolja a CRM-et a WooCommerce-hez, LMS-ekhez, tagsági rendszerekhez, űrlapokhoz és automatizációs eszközökhöz.
- Fejlesztőknek **REST API**, bejövő/kimenő **webhookok** és WP-CLI parancsok érhetők el.

## Fő funkciók részletesen

### 360° kapcsolatkezelés és Company Module
- Egy nézetben látod a vásárlásokat, űrlapbeküldéseket, tanfolyam- és időpontadatokat, támogatási jegyeket, jegyzeteket és aktivitást.
- **Cég-objektumok**: kapcsolattartók céghez rendelése, cégszintű mezők, jegyzetek – ideális B2B-ben.

### E-mail marketing és szerkesztő
- **Drag-and-drop szerkesztő**, sablonok, dinamikus mezők (**SmartCode**).
- **Kampányok** ütemezéssel, UTM-követéssel, tárgysor **A/B teszttel** és ismétlődő (recurring) küldésekkel.
- **E-mail sorozatok (drip)**: időzített levelek, automatizmusokba illeszthetők.

### Automatizációk (vizuális builder)
- **Triggerek**: CRM/WordPress események, e‑commerce (WooCommerce, EDD, SureCart), előfizetések, LMS, tagság.
- **Akciók**: címkék/listák kezelése, e-mail küldés, WooCommerce műveletek, webhookok.
- **Feltételek és célok**: if/else elágazás, benchmark/cél lépések, **workflow split** (útvonal A/B) tesztelés.

### Elhagyott kosár (WooCommerce – Pro)
- 1 kattintásos aktiválás, vágóidő és „lost” logika, „cool-off” időszak.
- Beépített sablonok, **egyedi kuponok**, vendégkosarak kezelése, külön riportok.

### Szegmentálás és Smart Links
- Statikus **listák és címkék** mellett **dinamikus szegmensek**: vásárlás, viselkedés, státusz és egyedi mezők alapján automatikusan frissülő célcsoportok.
- **Smart Links**: kattintásra címkét/listát ad vagy vesz el; akár automatikus beléptetés e-mailből.

### Jelentések és analitika
- Kampány- és automatizmus riportok (megnyitás, kattintás, konverzió).
- Webáruház/LMS specifikus nézetek a bevételi hatás mérésére.

### Integrációk és kézbesítés
- 45+ integráció: e‑kereskedelem, LMS, tagság/közösség, oldalkészítők, affiliate és automatizációs eszközök.
- **SMTP/API küldés**, hivatalos **bounce-kezelés**: listahigiénia és reputációvédelem.

### API, webhookok, extra kényelmi funkciók
- **REST API**, bejövő/kimenő webhookok kétirányú adatcseréhez.
- **Frontend kampányarchívum** shortcode-dal, WP-felhasználó–CRM kontakt szinkron, feliratkozás regisztrációnál, szerepkör-alapú címkézés.

## Gyakorlati példák

- E‑kereskedelem: „Elhagyott kosár” 1 óra után kuponkóddal, majd 24 órára emlékeztető; ha vásárolt, köszönő és upsell sorozat indul.
- LMS: Tanfolyam indulásakor sorozat; modulzárásnál emlékeztető; befejezés után véleménykérés és haladó kurzus upsell.
- Tagsági oldal: Lejárat előtt 7–3–1 napos figyelmeztetés, lejáratkor reaktiváló ajánlat; közösségi aktivitás alapján címkézés.
- Tartalomkiadó: Heti visszatérő hírlevél a legújabb cikkekkel, dinamikus szegmensnek (pl. „utóbbi 30 napban aktív”).
- Ügynökség/B2B: Company Module – döntéshozók és befolyásolók külön címkézése, kampányok export/import több ügyféloldalon.

Példa egy egyszerű automatizmusra:

```
Trigger: WooCommerce kosár elhagyva (30 perc)
Actions:
  - Wait: 60 perc
  - Send Email: "Valami kimaradt a kosaradból" (dinamikus kupon)
  - If: "Vásárolt azóta?"
      Yes -> Goal: "Visszanyert kosár" + Tag: "Vevő"
      No  -> Wait: 24 óra -> Send Email: "Utolsó emlékeztető + bónusz"
```

## Előnyök és értékajánlat

- **Önhostolt kontroll**: az adatok a saját rendszeredben maradnak, nincs kontakt- vagy e-mail limit a bővítmény oldaláról.
- **Bevételközpontúság**: elhagyott kosár, upsell/cross-sell, viselkedésalapú sorozatok – közvetlenül hatnak a konverzióra.
- **Időmegtakarítás**: vizuális automatizmusokkal kiváltod a manuális folyamatokat.
- **Pontosság**: dinamikus szegmensek és A/B tesztek segítik a célzott kommunikációt.
- **Skálázhatóság**: olcsó, megbízható SMTP szolgáltatóval nagy mennyiségű küldés is fenntartható.

## Kinek ajánlott?

- **Webáruház-tulajdonosoknak**: WooCommerce/SureCart kampányok, elhagyott kosár, vásárlói életciklus automatizációk.
- **Oktatóknak/LMS üzemeltetőknek**: tanulói szegmentálás, modulzárás és tanfolyam-utókövetés.
- **Tagsági/közösségi oldalaknak**: lejáratkezelés, aktivitás-alapú szegmentálás.
- **Tartalomkiadóknak/blogoknak**: időzített és visszatérő hírlevelek, olvasói aktivitás szerinti célzás.
- **Ügynökségeknek és B2B csapatoknak**: Company Module, export/import, cégszintű pipeline szemlélet.
- **Fejlesztőknek**: REST API, webhookok, WP-CLI integrációk.

## Üzemeltetés, megfelelőség, licenc

- **Követelmény**: SMTP/API kapcsolat az e-mail küldéshez; javasolt rendben tartani SPF/DKIM/DMARC rekordokat és bekapcsolni a bounce-kezelést.
- **Adatvédelem/GDPR**: dupla opt‑in, átlátható feliratkozás (checkout, űrlap, regisztráció), megfelelő adatkezelési folyamatok szükségesek.
- **Licenc**: a Pro licenc éves frissítést és támogatást tartalmaz.

Ezzel a bővítménnyel átlátható, adatvezérelt e-mail marketing rendszert építhetsz közvetlenül WordPressen belül – kontrollal, skálázhatósággal és olyan automatizációkkal, amelyek valóban bevételt termelnek.