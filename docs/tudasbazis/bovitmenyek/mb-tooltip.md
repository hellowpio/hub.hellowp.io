---
title: "MB Tooltip"
description: "Meta Box kiegészítő, amellyel súgó buborékokat (tooltipeket) adhatsz az admin űrlapok egyedi mezőihez."
sidebar_label: "MB Tooltip"
---

## Mi ez és mit old meg?

Az **MB Tooltip** a **Meta Box** hivatalos kiegészítője, amellyel rövid, helyben megjelenő súgókat adhatsz a mezőidhez. Ha egy mező neve vagy használata félreérthető, egy apró ikonra húzva az egeret azonnal megjelenik a magyarázat. Ezzel csökkented a hibás adatbevitelt, gyorsítod a szerkesztők munkáját, és kevesebb támogatási kérdéssel kell számolnod.

## Hogyan működik?

A meződefinícióhoz hozzáadsz egy **tooltip** (címkén) vagy **tooltip_input** (közvetlenül a beviteli mező mellett) beállítást. A bővítmény automatikusan megjeleníti a választott ikont és a súgó tartalmát a beállított pozícióban. Nem kell saját JS/CSS megoldást készítened; a kiegészítő a Meta Box admin UI-hoz illeszkedő stílust használ.

- Megjelenítés helye: alapértelmezés szerint a mező címkéjén (**tooltip**), bizonyos mezőtípusoknál közvetlenül a beviteli mezőnél is (**tooltip_input**).
- Támogatott mezők a tooltip_input esetén: text, email, url, number, password, date, datetime, time, select, select_advanced.
- Pozíciók: **top**, **bottom**, **left**, **right**.
- Ikonok: alapértelmezett „info”/„help”, bármely **Dashicons** osztály, vagy saját ikonképed.
- Tartalom: sima szöveg, opcionálisan **allow_html** engedéllyel formázott HTML.

## Fő funkciók részletesen

- **Tooltip a címkén (tooltip):**
  - Egysoros üzenethez elég egy string.
  - Összetettebb beállításokhoz tömb: ikon, tartalom, pozíció, HTML engedélyezése.
  - Ideális rövid útmutatáshoz, formátumokhoz, példákhoz.

- **Tooltip a beviteli mezőn (tooltip_input):**
  - A mező mellé kerül, így a szem a beviteli területen marad.
  - Használd olyan mezőknél, ahol a kontextus közvetlenül a gépelésnél számít (pl. e-mail, szám, dátum).

- **Ikon testreszabás:**
  - Választhatsz „info” vagy „help” ikont, bármely **Dashicons** osztályt (pl. dashicons-email), vagy megadhatsz saját ikonfájlt.
  - Konzisztens, következetes megjelenést ad az egész admin felületen.

- **Pozícionálás:**
  - A tooltipet a tartalomhoz és elrendezéshez igazíthatod (top/bottom/left/right), így nem takar ki más elemeket.

- **HTML a tartalomban:**
  - Az **allow_html** engedélyezésével használhatsz félkövér kiemeléseket, link helyett formázott megjegyzéseket, listákat.
  - Ügyelj a biztonságra: csak megbízható, escape-elt tartalmat engedj.

## Gyakorlati példák

Az alábbi meződefiníciók ugyanabba a Meta Box-ba illeszthetők:

```php
[
  'title'      => 'Bejegyzés beállítások',
  'post_types' => ['post'],
  'fields'     => [
    [
      'type'    => 'text',
      'id'      => 'subtitle',
      'name'    => 'Alcím',
      'tooltip' => 'Add meg a cikk rövid alcímét (max. 80 karakter).',
    ],
    [
      'type'          => 'email',
      'id'            => 'contact_email',
      'name'          => 'Kapcsolat e-mail',
      'tooltip_input' => [
        'icon'     => 'dashicons-email',
        'content'  => 'Erre az e-mailre érkeznek az értesítések.',
        'position' => 'right',
      ],
    ],
    [
      'type'    => 'select',
      'id'      => 'difficulty',
      'name'    => 'Nehézség',
      'options' => [
        'easy'   => 'Könnyű',
        'medium' => 'Közepes',
        'hard'   => 'Nehéz',
      ],
      'tooltip' => [
        'icon'       => 'help',
        'content'    => '<strong>Tipp:</strong> Válaszd ki a célközönség szintjét.',
        'allow_html' => true,
        'position'   => 'top',
      ],
    ],
    [
      'type'    => 'text',
      'id'      => 'promo_code',
      'name'    => 'Kuponkód',
      'tooltip' => [
        'icon'     => '/assets/icons/help.svg', // saját ikon
        'content'  => 'Csak A-Z és 0-9 karakterek engedélyezettek.',
        'position' => 'left',
      ],
    ],
  ],
]
```

## Előnyök és értékajánlat

- **Kevesebb hiba, gyorsabb munka:** a szerkesztők rögtön látják, mit és hogyan kell kitölteni.
- **Idő- és költségmegtakarítás:** nem kell egyedi tooltip megoldást fejlesztened; pár sor konfiguráció elég.
- **Egységes UX:** egységes ikonok, következetes pozicionálás, Meta Box-szal harmonizáló stílus.
- **Rugalmas tartalom:** egyszerű tippektől a formázott, részletes súgókig.

## Célközönség

- **WordPress fejlesztők**, akik Meta Box-szal építenek admin űrlapokat.
- **Ügynökségek**, ahol több ügyfél és szerkesztő dolgozik eltérő folyamatokkal.
- **Tartalomcsapatok**, ahol fontos a következetes adatbevitel és a hibák csökkentése.

## Telepítés és gyors kezdés

1. Telepítsd és aktiváld a Meta Box-ot és az **MB Tooltip** kiegészítőt (önálló bővítményként vagy a Meta Box AIO részeként).
2. AIO használatakor kapcsold be az MB Tooltip modult a Meta Box > Extensions alatt.
3. A mezőid definíciójához add hozzá a **tooltip** vagy **tooltip_input** beállítást.
4. Állítsd be az ikont, a pozíciót és – ha szükséges – az **allow_html** opciót.
5. Teszteld a megjelenést különböző képernyőszélességeken, és finomhangolj.

## Integráció és követelmények

- A kiegészítő a **Meta Box** ökoszisztéma része; AIO csomagban eleve elérhető és külön kapcsolható.
- Előfordulhat, hogy egyes Meta Box kiegészítők igénylik az MB Tooltip bekapcsolását.
- Rendszerkövetelmények: WordPress 6+ és PHP 7+.

## Gyakorlati megfontolások és korlátok

- A **tooltip_input** csak meghatározott mezőtípusoknál érhető el (szöveg-, dátum-, select-típusok).
- Az MB Tooltip az admin mezőkre készült; nem helyettesít általános, frontend oldali tartalmi tooltipeket.
- **allow_html** használatakor csak megbízható, megfelelően escape-elt tartalmat engedj a biztonság érdekében.

## Licenc és ár

- Licenc: **GPL v2+**, kereskedelmi projektekben is használható.
- Ár: **29 USD** – korlátlan számú webhelyre, frissítésekkel és támogatással egy évig.
- Elérhető önállóan és Meta Box csomagok részeként is.

Ha szeretnéd, készíthetsz belső konvenciót a tooltipjeidhez (ikonhasználat, szöveghossz, pozíciók), így a csapatod egységes, könnyen érthető súgókat írhat minden mezőhöz.