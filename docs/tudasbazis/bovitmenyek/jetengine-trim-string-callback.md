---
title: "JetEngine - Trim string callback"
description: "JetEngine külső modul, amellyel dinamikus szövegeket vághatsz le szavak vagy karakterek szerint a Dynamic Field kimenetében."
sidebar_label: "JetEngine - Trim string callback"
---

## Mi ez és milyen problémát old meg?

A Trim string callback a JetEngine egyik **External Module** komponense. Bekapcsolása után megjelenik egy speciális **callback** a JetEngine **Dynamic Field** kimenetszűrői között, amellyel bármely dinamikus szöveget rövidíthetsz **szavak** vagy **karakterek** szerint. Ezzel elkerülöd, hogy túl hosszú címek vagy leírások szétcsússzanak a kártyás/archív elrendezésben, és nem kell manuálisan kivonatot (excerptet) írnod minden bejegyzéshez vagy egyedi mezőhöz.

Röviden: ugyanazzal az egyszerű beállítással egységes hosszúságú szöveget tudsz megjeleníteni Elementorban, Gutenbergben és Timber/Twig nézetben is.

## Hogyan működik? (engedélyezés és használat)

### 1) Engedélyezés

- Menj: JetEngine > Dashboard > Modules > External Modules
- Kapcsold be: **Trim string callback**
- Az External Modules lényege, hogy külön komponensként települnek/kezelhetők, és így célzottan frissíthetők.

### 2) Használat Elementorban és Gutenbergben

- Nyisd meg a listád vagy sablonod, tegyél le egy **Dynamic Field** elemet/blokkot.
- Kapcsold be a **Filter field output** (vagy **Applied Callbacks**) opciót.
- A **Callback function** legördülőben válaszd: **Trim string by chars or words**.
- Állítsd be:
  - **Típus**: words vagy chars
  - **String length**: hány szót/karaktert jelenítsen meg

### 3) Használat Timber/Twig Listing View-ban

- A szerkesztőben a **Filter data** gombbal adj hozzá **JetEngine Callback**-et, és válaszd a **Trim string by chars or words** funkciót.
- A rendszer a megfelelő Twig-szűrőt illeszti be. Példa:

```twig
{{ post.content | jet_engine_callback(args={
  cb: 'jet_engine_trim_string_callback',
  jet_trim_cb_type: 'words',     // vagy 'chars'
  jet_trim_cb_length: '5'        // megjelenítendő szavak/karakterek száma
}) }}
```

## Fő funkciók, érthetően

- **Két vágási mód (words/chars)**: 
  - A **words** opció esztétikus, mert szavak mentén vág, nem töri meg a szöveget szóközépen.
  - A **chars** opció akkor ideális, ha szigorú karakterlimitet kell tartanod (például fix szélességű címeknél).
- **„String length” mező**:
  - Itt adod meg a küszöböt (N), vagyis hány szót/karaktert jelenítsen meg az elem.
  - Ugyanazt az N értéket több nézetben is használhatod, így **következetes** lesz a megjelenés.
- **Egységes elérés a felületen**:
  - A callback a Dynamic Field kimenetszűrői között érhető el, miután engedélyezted a modult.
  - Működik Elementorban, Gutenbergben és Timber/Twig listanézetben is.
- **Kódmentes beállítás**:
  - Nem kell egyedi PHP-függvényeket írnod. A vágás technikailag „beépített callbackként” szervezhető be a sablonjaidba.

## Gyakorlati példák

- **Kártyás bloglista**: Egy blogkártyán a bevezető szöveg maximum 18 szó. Állítsd a típust „words”-ra és a „String length”-et 18-ra, így minden kártya azonos magasságot kap.
- **Portfólió beküldések**: A látogatók hosszú leírást küldenek be frontend űrlapon. A listanézetben karakteralapon vágod 160-ra („chars”), a részletek oldalon pedig teljesen megjeleníted.
- **Termékcímek rövidítése**: Különböző beszállítók változó hosszúságú nevei és cikkszámai eltérő hosszú címeket eredményeznek. Vágd 60 karakterre, hogy a rácselrendezés ne törjön.
- **Kategória-archív kivonatok**: Ha nincs kézzel írt excerpt, a termékleírás első 20 szavát jelenítsd meg automatikusan, egységesen.

## Előnyök és értékajánlat

- **Konzisztens dizájn**: A kártyák és listák nem csúsznak szét, kevesebb improvizált CSS-re lesz szükség.
- **Kevesebb manuális munka**: Nem kell külön kivonatot szerkesztened minden tartalomhoz.
- **Gyors bevezetés**: Percek alatt beállítható, nincs egyedi kódolási igény.
- **Egységes élmény több nézetben**: Ugyanaz a logika alkalmazható Elementorban, Gutenbergben és Twigben.
- **Rugalmas karbantartás**: External Module-ként külön kezelhető és frissíthető.

## Kinek ajánlott?

- **Site builderek és no-code fejlesztők**: Gyorsan, stabilan szeretnének szép listákat és kártyákat.
- **Ügynökségek**: Több projektben újrahasznosítható, egységes megoldás a tartalom rövidítésére.
- **Tartalomgazda portálok, piacterek, katalógusok**: Sok, változó hosszúságú bejegyzés egységes megjelenítése.
- **Templatekészítők**: Elementor, Gutenberg és Twig környezetben is ugyanazzal a logikával dolgozhatnak.

## Tippek és jó gyakorlatok

- **Válassz célnak megfelelő módot**: „words” a szemre szebb eredményért; „chars” a feszes karakterlimithez.
- **Tarts konzisztenciát**: Ha több listában is rövidítesz, egyeztesd a „String length” értéket a dizájnrendszeredben.
- **Teszteld több törésponton**: Nézd meg mobilon és desktopon is, szükség esetén állíts finomhangolást.
- **Tervezd a modulfrissítést**: Mivel External Module, külön ütemezetten tesztelheted/frissítheted nagy projektekben.

## Rövid technikai összefoglaló

- **Modul típusa**: JetEngine External Module.
- **Elérési út**: JetEngine > Dashboard > Modules > External Modules > Trim string callback.
- **UI-k és nézetek**: Dynamic Field (Elementor/Gutenberg), Timber/Twig Listing View.
- **Twig paraméterek**:
  - `cb: 'jet_engine_trim_string_callback'`
  - `jet_trim_cb_type: 'words' | 'chars'`
  - `jet_trim_cb_length: 'N'`

Ezzel a modullal pontosan szabályozhatod a dinamikus szövegek hosszát, minimalizálva a dizájnproblémákat és a manuális munkaigényt, miközben egységes megoldást kapsz minden JetEngine-alapú nézethez.