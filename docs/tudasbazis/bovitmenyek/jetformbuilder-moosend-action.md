---
title: "JetFormBuilder Moosend Action"
description: "Hivatalos JetFormBuilder Pro kiegészítő a WordPress űrlapok közvetlen összekapcsolására a Moosend e‑mail marketing rendszerrel."
sidebar_label: "JetFormBuilder Moosend Action"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder Moosend Action egy hivatalos Pro kiegészítő, amellyel a JetFormBuilder/JetEngine űrlapjaidat közvetlenül a Moosend e‑mail marketing rendszerhez kapcsolhatod. Az űrlapbeküldésekből azonnal feliratkozókat hoz létre a kiválasztott listákban, a megfelelő egyéni mezőkkel és szegmensekkel. Nem kell külön automatizáló szolgáltatás, kevesebb a hibalehetőség, és tisztább, duplikációmentes listákat kapsz.

## Hogyan működik röviden?

- **API‑kulcsos kapcsolat:** beilleszted a Moosend API‑kulcsot, majd érvényesíted.
- **Űrlapműveletként fut:** a Moosend Action a Post Submit Actions része; az űrlap beküldésekor lefut, akár feltételekhez kötve.
- **Mezőtérkép (Fields Map):** az űrlapmezőket a Moosend mezőkhöz rendeled (Email kötelező).
- **Feliratkozó létrehozása:** a rendszer elküldi az adatokat a kiválasztott Moosend listára, duplikációk nélkül, igény szerint double opt‑innel.

## Fő funkciók részletesen

- **Biztonságos API‑kapcsolat**
  - Külön mező az API‑kulcsnak, **Validate API Key** gombbal azonnali ellenőrzéshez.
  - **Retry request** gomb a mezők és listák friss lekéréséhez (pl. új Custom Field után).

- **Double opt‑in kapcsoló**
  - Egy kattintással bekapcsolhatod a megerősítő e‑maileket.
  - Segít megfelelni a feliratkozási elvárásoknak és javítja a kézbesíthetőséget.

- **Mailing listák kiválasztása**
  - A Moosendben létrehozott listáid közül kiválaszthatod a célt (pl. hírlevél, webinar).

- **Fields Map és egyéni mezők**
  - Az **Email** mező kötelező, a **Keresztnév** opcionális.
  - Támogatott egyéni mezőtípusok: **Text**, **DateTime**, **Number**, **Dropdown**, **Checkbox**.
  - A Moosend listában létrehozott egyéni mezők megjelennek és hozzárendelhetők az űrlapmezőkhöz.
  - Kötelező mezők egységes kezelése: amit Moosendben kötelezővé teszel, tedd kötelezővé az űrlapban is.

- **Duplikációk megelőzése**
  - Meglévő e‑mail címre nem hoz létre új előfizetőt, így nem lesznek többszörös rekordjaid.

- **Rejtett és kötelező mezők**
  - Rejtett űrlapmezőkkel UTM‑ és egyéb metaadatokat is továbbíthatsz a pontos szegmentáláshoz.

- **Feltételes futtatás**
  - A Moosend Action csak akkor fut, ha a feltételek teljesülnek (pl. jelölőnégyzet be van pipálva).

## Gyakorlati példák

1. **Hírlevél‑feliratkozás jelölőnégyzettel**
   - Az űrlapban van egy “Feliratkozom a hírlevélre” checkbox.
   - A Moosend Action csak akkor fut, ha a checkbox igaz.
   - A felhasználó e‑mailje és neve a “General newsletter” listába kerül.

2. **Webinar regisztráció szegmentálással**
   - Dropdown mező: “Téma érdeklődés” (pl. SEO, PPC, Email).
   - A mezőt Moosend egyéni mezőhöz rendeled; a regisztrálók az érdeklődés alapján szűrhetők lesznek.

3. **Letöltés lead‑gyűjtéssel és UTM‑követéssel**
   - Rejtett mezőkben UTM‑paramétereket gyűjtesz, és a Moosend Custom Fieldjeibe írod.
   - Kampányriportban pontosan látod, melyik forrás hozta a feliratkozót.

Példa űrlapmező‑kiosztás:

```
Text: full_name
Email: email
Dropdown: interest_topic (SEO | PPC | Email)
Hidden: utm_source
Hidden: utm_medium
Hidden: utm_campaign
Checkbox: subscribe_newsletter
Post Submit Condition: run Moosend if subscribe_newsletter == true
```

## Telepítés és első beállítás

1. **Előfeltételek:** aktív JetFormBuilder és Pro előfizetés, Moosend fiók API‑kulccsal.
2. **Addon telepítése:** Vezérlőpult → JetFormBuilder → Addons → Moosend Integration → Install → Activate.
3. **API‑kulcs megadása:** JetFormBuilder → Settings → Moosend → kulcs beillesztése → Save. Igény szerint űrlaponként is megadhatod, a globális beállítások átvételével.
4. **Action hozzáadása:** Nyisd meg az űrlapot → Post Submit Actions → New Action → Moosend → Edit.
5. **Beállítások:** Validate/Retry, Double opt‑in kapcsoló, lista kiválasztása, Fields Map konfigurálása.
6. **Egyéni mezők Moosendben:** a listában hozd létre a szükséges Custom Fieldeket (Text/DateTime/Number/Dropdown/Checkbox), jelöld Required‑nek, ha kell; az űrlapban is állítsd kötelezőre, majd nyomj Retry‑t a frissítéshez.

## Bevált gyakorlatok

- **Kötelező mezők szinkronban:** amit Moosendben Required, az legyen kötelező az űrlapon is.
- **UTM‑ek rejtett mezőkkel:** gyűjts forrás/kampány attribútumokat és mappold Custom Fieldekre.
- **Double opt‑in nagy listáknál:** csökkenti a hibás címeket és javítja a kézbesítést.
- **Feltételes futás:** csak akkor futtasd a Moosend Actiont, ha a felhasználó ténylegesen kérte a feliratkozást.

## Kompatibilitás és környezet

- Gutenberg‑alapú űrlapépítés; űrlapok megjeleníthetők Elementorban és shortcode‑dal is.
- Témától függetlenül használható.

## Előnyök és értékajánlat

- **No‑code integráció:** nincs szükség külső automatizmusokra.
- **Tiszta adatok:** duplikációk megelőzése, pontos szegmentálás.
- **Egységes működés:** a Post Submit Actions ökoszisztémában az összes művelet együtt kezelhető.
- **Idő‑ és költségmegtakarítás:** kevesebb manuális export/import és karbantartás.

## Kinek ajánlott?

- **Marketing csapatoknak és ügynökségeknek:** skálázható, szabályos feliratkozás‑kezelés.
- **E‑kereskedőknek és SaaS‑oknak:** UTM‑alapú attribúció és célzott lifecycle kampányok.
- **Rendezvényszervezőknek, oktatóknak:** listaépítés regisztrációs űrlapokból, szegmensekkel.
- **WordPress fejlesztőknek:** precíz mező‑leképezés, feltételes logika, stabil API‑kapcsolat.

## Elérhetőség és ár

A Moosend integráció a JetFormBuilder Pro csomag része. Jellemzően elérhető éves előfizetéssel (például 1 webhelyre 49 USD/év körüli áron), ügynökségi és lifetime opciókkal. Az árak változhatnak; mindig az aktuális csomagajánlat érvényes.