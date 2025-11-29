---
title: "FluentCRM - Marketing Automation For WordPress"
description: "Önhostolt e‑mail marketing és CRM WordPresshez: kapcsolatok, kampányok, automatizmusok és mély integrációk a saját szervereden."
sidebar_label: "FluentCRM - Marketing Automation For WordPress"
---

## Mi ez és milyen problémát old meg?

A FluentCRM egy WordPress‑be épülő, önhostolt e‑mail marketing és CRM bővítmény. Segítségével a teljes kapcsolatállományodat a saját szervereden kezeled, célzott hírleveleket és automatizmusokat indítasz, és a WordPress ökoszisztéma adatait (űrlapok, vásárlások, kurzusok, tagságok) valós időben használod fel.

Fő problémák, amiket megold:
- Költség és limit: nem kontaktszám alapján fizetsz, korlátlan kapcsolattal és kampánnyal dolgozhatsz.
- Adat‑szuverenitás: minden adat a saját adatbázisodban marad, könnyebb megfelelőség és kontroll.
- Széttöredezett adatok: Woo/LMS/membership/űrlap események egyetlen 360° kontaktprofilba kerülnek.
- Kézbesíthetőség: a küldést dedikált SMTP/API szolgáltatóval és naplózással stabilizálod.

## Hogyan működik röviden?

A bővítmény WordPressen fut, saját adatbázistáblákban tárol, és villámgyors, egyoldalas (SPA) adminfelületet ad. E‑mailekhez a WordPress levelező hívásait használja; a kézbesítést SMTP/API szolgáltatóra bízod (például Amazon SES, Mailgun, SendGrid, Postmark, Gmail/Google Workspace, Outlook). Javasolt a FluentSMTP beállítása naplózással és több küldőcsatornával.

## Fő funkciók részletesen

### Kapcsolatkezelés és szegmentálás
- **360° kontaktprofil**: elérhetőség, tevékenységek, vásárlások, kurzuselőrehaladás, tagek és listák egy helyen.
- **Listák, tagek, egyéni mezők**: rugalmas szegmentálás érdeklődés, érték, viselkedés szerint.
- **Import/szinkron**: kézi felvétel, CSV import, WordPress felhasználók szinkronizálása.

### Kampányok és A/B teszt
- **Korlátlan kampány** ütemezéssel és célzással.
- **Blokkszerkesztős e‑mail builder** reszponzív sablonokkal.
- **Személyre szabás SmartCode‑okkal** és feltételes logikával.
- **Tárgysor A/B teszt** automatikus kiértékeléssel és győztes kiválasztásával.
- **Részletes riportok**: megnyitás, kattintás, bounces, linktérkép.

Példa személyre szabásra:
```
Szia {{ contact.first_name | default:"Ottó" }}!
Köszönjük, hogy csatlakoztál. A te csomagod: {{ contact.custom.package }}.
```

### E‑mail sorozatok (Sequences)
- **Időzített lépések** (nap/óra), munkanap‑szűrés.
- **Statikus és dinamikus beléptetés** (pl. új címke, vásárlás).
- **Teljesítménymérés** lépésenként.

### Vizuális automatizmus‑építő (Funnel)
- **Triggerek**: űrlapbeküldés, vásárlás, kosárelhagyás, tagsági események, LMS előrehaladás stb.
- **Feltételek és IF/ELSE ágak**, késleltetés, címkézés, listaműveletek.
- **Split tesztek** az útvonalak optimalizálására.
- **Smart Links**: kattintásra címkézés, opcionális automatikus bejelentkeztetés.

### Abandoned Cart (WooCommerce, Pro)
- **Elhagyott kosarak azonosítása**, cut‑off és cool‑off időzítések.
- **Sablonok és több lépéses emlékeztetők** kuponnal.
- **Bevétel‑visszaszerzés riportok**.

### Jelentések és analitika
- Kampány, sorozat és automatizmus szintű mutatók.
- **E‑kereskedelmi riportok**: termék, kategória, ügyfélérték, bevételi hozzájárulás.

### Integrációk
- **E‑commerce**: WooCommerce, Easy Digital Downloads.
- **LMS**: LearnDash, LifterLMS, TutorLMS.
- **Membership**: MemberPress, Paid Memberships Pro, Restrict Content Pro, Wishlist Member.
- **Űrlapok és page builderek**: Fluent Forms, Elementor, Divi, Thrive, Beaver, Gutenberg.
- **Automatizálók és külső rendszerek**: Uncanny Automator, Zapier típusú eszközök, webhookok, REST API.

### Küldés és kézbesíthetőség
- Saját küldő infrastruktúra nincs; SMTP/API szükséges.
- **FluentSMTP** ajánlott több csatornához, naplózáshoz és visszapattanás‑kezeléshez.
- Domain hitelesítés (SPF, DKIM, DMARC) erősen javasolt.

### Ingyenes vs. Pro
- **Ingyenes**: alap CRM, listák/tagek, kampányok, sorozatok, alap automatizmusok és több integráció.
- **Pro**: mély e‑commerce/LMS/membership integrációk, elhagyott kosár, haladó lépések és extra riportok.

## Gyakorlati példák

- **Hírlevél A/B tárgysorral**: két tárgysorral indítasz, a jobb teljesítményű változat automatikusan nagyobb közönséget kap.
- **Onboarding sorozat LMS‑hez**: beiratkozáskor 0. nap üdvözlő e‑mail, 2. napon haladás‑tippek, 7. napon vizsgára emlékeztető; aki befejezte, másik ágba kerül.
- **Vásárlás utáni upsell**: rendelés lezáráskor VIP tag, 3 nap múlva kiegészítő ajánlat személyre szabott kuponnal.
- **Elhagyott kosár (Pro)**: 1 óra után emlékeztető, 24 óra után kupon, 72 óra után „segíthetünk?” üzenet; visszanyert bevételek riportban.

Egyszerű automatizmus‑vázlat:
```
Trigger: Woo – Order Completed
If order_total >= 50000:
  Add Tag: VIP
  Send Email: "Köszönjük a nagy rendelést"
Else:
  Send Email: "Köszönjük a rendelést"
Delay: 3 nap
Send Email: "Kérünk értékelést"
```

## Előnyök és értékajánlat

- **Költséghatékony**: korlátlan kontakt és kampány, éves licencelés Pro funkciókhoz.
- **Adatbiztonság és megfelelés**: minden adat a te környezetedben.
- **Jobb célzás**: teljes WordPress‑aktivitás alapján szegmentálsz.
- **Skálázható kézbesítés**: profi SMTP/API‑val és naplózással.
- **Időmegtakarítás**: vizuális automatizmusok, sablonok, split tesztek.

## Kinek ajánlott?

- **WooCommerce webáruházaknak**: kosár‑visszaszerzés, LTV‑alapú és termékcsoportos szegmensek, automatizált upsell.
- **Oktatási oldalaknak (LMS)**: beiratkozás/haladás alapú sorozatok, reaktiválás.
- **Tagsági oldalaknak**: belépés, lejárat, megújítás és visszanyerés folyamatai.
- **Kiadóknak/blogoknak**: hírlevelek feltételes blokkokkal, Smart Linkes címkézés.

## Gyorsindítás

1. Telepítsd és aktiváld a bővítményt a WordPressben.
2. Állíts be küldést egy SMTP/API szolgáltatóval; javasolt a FluentSMTP naplózással.
3. Hozz létre **listákat és tageket** (pl. Hírlevél, Vásárló, VIP).
4. Add hozzá egyéni mezőidet (pl. érdeklődési kör, csomag).
5. Importáld a kontaktokat vagy szinkronizáld a WP felhasználókat.
6. Készíts egy első **kampányt** és tesztelj A/B tárgysorral.
7. Indíts három alap automatizmust:
   - Üdvözlő sorozat új feliratkozóknak.
   - Vásárlás utáni upsell e‑mail 3 nap késleltetéssel.
   - Kosárelhagyás emlékeztető (Woo, Pro).

## Fejlesztői és bővíthetőségi lehetőségek

- **REST API** és **webhookok**: kapcsolatok, kampányok, automatizmusok külső rendszerekkel összekötve.
- **Hookok és modellek**: saját triggerek, lépések, UI‑kiterjesztések készítése.
- **Automatizálók**: no‑code integráció külső eszközökkel.

--- 

Lényeg: a FluentCRM a WordPress adataidra építve ad professzionális, önhostolt e‑mail marketinget és automatizmust. Ha költséget csökkentenél, a saját adatokat szeretnéd használni és skálázható, testreszabható folyamatokra van szükséged, ez a bővítmény neked való.