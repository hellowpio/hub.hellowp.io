---
title: "Fluent Forms Signature Addon"
description: "Hivatalos Fluent Forms kiegészítő, amellyel rajzolt, kézi aláírást gyűjthetsz űrlapokon – mobilon és asztali eszközökön egyaránt."
sidebar_label: "Fluent Forms Signature Addon"
---

## Mi ez és milyen problémát old meg?

A Fluent Forms Signature Addon egy hivatalos kiegészítő, amely **aláírás mezőt** ad a Fluent Forms űrlapszerkesztőjéhez. A látogatók **egérrel, érintőtollal vagy ujjal** írnak alá közvetlenül az oldalon, a mező pedig **HTML5 Canvas** alapú, így nem igényel böngészőbővítményt. A cél: megszüntetni a nyomtatás–aláírás–szkennelés kört, és az aláírást az űrlapbeküldés részeként, azonnal rögzíteni.

## Fő funkciók, érthetően

- **Signature mező (drag and drop)**: Az űrlapszerkesztőben az Advanced Fields között találod. Húzd az űrlapra, állítsd be, és kész – nincs külön szolgáltatás vagy bonyolult integráció.
- **Eszközfüggetlen aláírás**: Érintőkijelzőkön természetes, ujjjal írható; asztali gépen egérrel vagy trackpaddel rajzolható. A HTML5 Canvas gondoskodik az azonnali, sima vonalakról és a böngészőfüggetlen működésről.
- **Testreszabás**: Beállíthatod a **toll színét és vastagságát**, a „pad” **háttérszínét**, **magasságát**, a **keretszínt**, valamint **súgóüzenetet** és **egyedi CSS osztályokat** is, hogy a mező illeszkedjen az arculatodhoz.
- **Feltételes logika**: A Signature mezőt megjelenítheted vagy elrejtheted **más mezők értékei alapján**. Például csak akkor jelenjen meg, ha az ügyfél elfogadta a feltételeket, vagy ha „Szerződést kérek” opciót választott.
- **Tárolás és értesítések**: Az aláírás **képként mentődik** az űrlap-bejegyzéshez. Az admin értesítő e-mailekben is szerepeltetheted, szükség esetén pedig PDF-be is beilleszthető (külön PDF-bővítménnyel).
- **Könnyű beüzemelés**: Telepítés után a Signature azonnal elérhető az Advanced Fields között; nincs extra konfigurációs kör, csak add hozzá és használd.

## Telepítés és beállítás (lépésről lépésre)

1. Telepítsd és aktiváld a Fluent Forms bővítményt.
2. Szerezd be és aktiváld a Signature Addont (külön licenc).
3. Nyisd meg az űrlapszerkesztőt, és az Advanced Fields közül húzd be a **Signature** mezőt.
4. Állítsd be a címkét, a kötelezőséget és a súgóüzenetet.
5. A Megjelenés fülön finomhangold a **pad magasságát**, a **toll/keret/ háttér** színeket.
6. Ha szükséges, kapcsold be a **feltételes logikát**.
7. Teszteld mobilon és asztali böngészőben is, majd publikáld az űrlapot.

Példa finomhangolás CSS-sel:

```css
/* Fluent Forms Signature pad magasságának növelése */
.ff-el-signature .signature-pad {
  height: 220px !important;
}
```

## Gyakorlati példák

- **Hozzájárulások és nyilatkozatok**: Adatkezelési nyilatkozat elfogadása aláírással megerősítve.
- **Részvételi/felelősségvállalási nyilatkozatok**: Esemény- vagy tréningregisztrációkor a résztvevő aláírja a feltételeket.
- **Megrendelések jóváhagyása**: Ajánlatok, munkalapok vagy belső jóváhagyási űrlapok hitelesítése.
- **Szülői beleegyezés**: Táborok, sportegyesületek, klubtagságok igénylése aláírással.
- **Petíciók**: Online aláírásgyűjtés vizuális, rajzolt aláírással.

Így működik a gyakorlatban: a látogató kitölti az űrlapot, a Signature mezőben aláír, majd elküldi. Az aláírás képként elmentődik a beküldéshez; te az admin felületen és (beállítás szerint) e-mailben is látod.

## Előnyök és értékajánlat

- **Papírmentes folyamat**: Nincs nyomtatás, postázás, szkennelés – minden digitális.
- **Idő- és költségmegtakarítás**: Gyorsabb jóváhagyások, kevesebb adminisztráció.
- **Mobilbarát élmény**: Érintőkijelzőn természetes az aláírás, nincs felhasználói akadály.
- **Egységes adatkezelés**: Az aláírás a beküldés része; könnyen archiválható és visszakereshető.
- **Rugalmas illeszkedés**: Feltételes logika, testreszabás, PDF-generálás – ugyanazon űrlapfolyamatban.

## Célközönség

- **Ügynökségek és webhelytulajdonosok**, akik űrlapokba szeretnének aláírást beépíteni.
- **Eseményszervezők, oktatási intézmények**, ahol gyakoriak a nyilatkozatok.
- **Szolgáltatók és belső csapatok**, akik megrendeléseket, munkalapokat vagy jóváhagyásokat kezelnek.
- **Civil szervezetek**, petíciók vagy tagsági kérelmek aláírásához.

## Fontos: rajzolt aláírás vs. joghatású e‑aláírás

A Signature Addon **rajzolt képet** tárol, nem tanúsítványalapú, kriptográfiai e‑aláírást. Ha **jogilag kötelező erejű, tanúsított e‑aláírásra** van szükséged (pl. szerződéskötésnél), használj kifejezetten erre tervezett megoldást, például Fluent Forms integrációt biztosító e‑aláírási bővítményt. A „rajzolt” aláírás sok üzleti folyamatban elég lehet, de jogi megfelelésnél mindig ellenőrizd a követelményeket.

## Jó gyakorlatok és tippek

- **Adatvédelem**: Az aláírás képfájl. Ha e-mailben is küldöd, kezeld biztonságosan (hozzáférés, jogosultságok, megőrzési idő).
- **PDF visszaigazolás**: Használj PDF-generátort, hogy a beküldésből automatikus dokumentum készüljön, benne az aláírással.
- **Használhatóság**: Növeld a pad magasságát mobilon; adj egyértelmű súgót („Írd alá az ujjaddal”).
- **Feltételes megjelenítés**: Csak akkor kérj aláírást, amikor valóban szükséges – egyszerűbb űrlap, jobb konverzió.

## Követelmények és licencelés

- **Fluent Forms szükséges** a használathoz; a Signature Addon **külön licenccel** érhető el.
- WordPress kompatibilitás: modern WordPress-verziókkal működik; régebbi rendszeren is használható a megadott minimum felett.
- Elérhető **éves** és **lifetime** csomagok. A konkrét csomagok és árak idővel változhatnak – a hivatalos termékinformációk az irányadók.

Összességében a Fluent Forms Signature Addon egy gyorsan bevezethető, testreszabható megoldás, amellyel az űrlapjaidba integrált, rajzolt aláírást gyűjthetsz – biztonságosan, mobilbarát módon és a megszokott Fluent Forms munkafolyamataid részeként. Ha joghatású e‑aláírás kell, válassz dedikált e‑aláírási integrációt.