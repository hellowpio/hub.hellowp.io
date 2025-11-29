---
title: "MB Favorite Posts"
description: "Kedvenc/mentés gomb és felhasználói kedvenclista WordPress‑hez; automatikus gomb, rövidkódok, vendég és bejelentkezett támogatás."
sidebar_label: "MB Favorite Posts"
---

## Mi ez és milyen problémát old meg?

Az MB Favorite Posts egy készre csomagolt megoldás, amivel kedvenc (bookmarks/kívánságlista) funkciót adhatsz bármely bejegyzéstípushoz. A látogatók egy kattintással elmenthetik a tartalmakat, majd egy “Kedvenceim” oldalon visszanézhetik őket. Ezzel kiváltod az egyedi fejlesztést: nem kell saját tárolást, gombkezelést és listázást írnod, mégis kapsz egy letisztult, skálázható rendszert, ami működik vendégeknek és bejelentkezett felhasználóknak is.

## Hogyan működik röviden?

- Aktiválás után automatikusan megjelenik egy **Add to Favorites** gomb az általad megjelölt bejegyzéstípusokon.
- Vendég módban a kedvencek **cookie‑ban** tárolódnak; bejelentkezett felhasználóknál **felhasználói metában** maradnak tartósan.
- Minden bejegyzéshez karbantart egy **számlálót**, és rövidkódokkal bárhol meg tudod jeleníteni a gombot, a listát vagy a darabszámot.
- Kapsz egy beállítási felületet (élő előnézettel), ahol a megjelenést és a működést szabályozhatod.

## Fő funkciók részletesen

### Gomb elhelyezése és testreszabás
- Automatikus elhelyezés: tartalom előtt/után, vagy manuális beszúrás rövidkóddal.
- Három előre beállított **stílus**: Default, Like, Rounded.
- Testreszabható **szöveg**, **méret**, **színek**, saját **CSS osztály**, ikon megjelenítése vagy **ikon‑only** mód.
- Többféle **ikon** (pl. szív, csillag, pin, like, award) választható.

### Rövidkódok (gomb, lista, számláló)
- Gomb megjelenítése:
  ```
  [mbfp-button id="123" add="Kedvencek közé" added="Kedvencekben" show_count="true" show_icon="true" icon="heart" icon_only="false" font_size="16" class="btn btn-primary"]
  ```
  - Gyakori paraméterek: id, add/added szöveg, show_count, show_icon, icon, icon_only, font_size, class.

- Felhasználó kedvenceinek listázása:
  ```
  [mbfp-posts per_page="12" post_type="post,product"]
  ```

- Egy bejegyzés kedvencek száma:
  ```
  [mbfp-count id="123"]
  ```

### Dashboard és regisztráció
- Kész **“Kedvenceim”** listaoldalt kapsz, ahol a felhasználó a saját mentéseit látja.
- Integrálható regisztrációs/hozzáférési felülettel, így ösztönözheted a bejelentkezést a tartós mentéshez.

### Elhelyezés és megjelenítés bárhol
- Korlátozhatod, mely **bejegyzéstípusokon** jelenjen meg a gomb.
- Beillesztheted **oldalsávba** vagy widget‑területre is rövidkóddal.
- Admin felületen élő előnézettel állíthatod a stílust.

### Fejlesztői horgok és adatkezelés
- Adattárolás:
  - Felhasználói meta: **mbfp_posts** (kedvenc bejegyzés ID‑k tömbje).
  - Bejegyzés meta: **mbfp_count** (felhasználói ID‑k tömbje a számláláshoz).
- Horgok:
  - `mbfp_cookie_expiration` – vendég kedvencek cookie lejárata (pl. “1 month”).
  - `mbfp_limit` – maximális kedvenc darabszám korlátozása.
- Egyszerű lekérdezés a felhasználó kedvenceire:
  ```php
  $ids = (array) get_user_meta( get_current_user_id(), 'mbfp_posts', true );
  $q = new WP_Query([
    'post_type' => ['post', 'product'],
    'post__in'  => $ids,
    'orderby'   => 'post__in',
  ]);
  ```

## Gyakorlati példák

- **Katalógus/listing** (ingatlan, autó, hotel): a kártyákon ikon‑only gombot jelenítesz meg, a felhasználó pedig a “Kedvenceim” oldalon egyben látja a kiválasztott tételeket.
- **Blog/tudásbázis**: a cikk végén “Mentés későbbre” gomb; a menüben egy “Kedvenceim” hivatkozás vezet a felhasználói listához.
- **E‑kereskedelem**: “Kívánságlista”‑szerű mentés még vásárlás előtt, számlálóval és szív ikonokkal.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: kész funkció, fejlesztés nélkül.
- **Jobb UX és elköteleződés**: a felhasználók könnyen visszatérnek a számukra fontos tartalmakhoz.
- **Rugalmas testreszabás**: megjelenés, elhelyezés, ikonok, rövidkódok – mind adminból állítható.
- **Skálázható adatkezelés**: szabványos user_meta és post_meta, fejlesztőbarát horgokkal.

## Telepítés és követelmények

1. Telepítsd és aktiváld a **Meta Box** alapbővítményt.
2. Töltsd fel és aktiváld az **MB Favorite Posts** bővítményt (önálló “solution”, nem része az AIO‑nak).
3. A beállítások a **Settings > Favorite Posts** menüpont alatt érhetők el (General, Button, Icon).
4. Engedélyezd a kívánt bejegyzéstípusokon, állítsd be a stílust, ikont, pozíciót.
5. Hozz létre egy “Kedvenceim” oldalt a `[mbfp-posts]` rövidkóddal, és (opcionálisan) egy regisztrációs oldalt.

## Célközönség

- **Katalógus és marketplace** üzemeltetők: menthető találatok, visszatérés ösztönzése.
- **Tartalomkiadók/blogok**: “olvasd később” élmény, több session, jobb retenció.
- **Webshopok**: kívánságlista‑szerű funkció konverziótámogatáshoz.
- **Fejlesztők/ügynökségek**: gyors, megbízható kedvenc‑megoldás projekt‑sztenderdként.

## Ismert korlátok és tippek

- Alapból **egy** kedvenclista érhető el (nincs több párhuzamos “lista” gomb); egyedi fejlesztéssel bővíthető.
- Egyes vizuális építők speciális listázásainál üres kedvenclistánál előfordulhat, hogy “mindent mutat” – kezeld egyedi lekérdezéssel.
- Vendég mód cookie‑alapú; ha fontos a tartós megőrzés több eszközön, **ösztönözd a regisztrációt** és bejelentkezést.