---
title: "YITH Infinite Scrolling Premium"
description: "Végtelen görgetés, „Továbbiak” gomb vagy AJAX‑os lapozás WooCommerce és WordPress archívumokon – gyorsabb böngészés, kevesebb súrlódás, jobb mobil UX."
sidebar_label: "YITH Infinite Scrolling Premium"
---

## Mi ez a bővítmény és milyen problémát old meg?

A **YITH Infinite Scrolling Premium** egy WordPress/WooCommerce bővítmény, amellyel a klasszikus lapozást **végtelen görgetésre**, **„Továbbiak” gombra** vagy **AJAX‑os lapozóra** cserélheted. Célja, hogy a látogatónak ne kelljen új oldalra kattintania, hanem gördítés közben folyamatosan érkezzenek az új termékek/bejegyzések. Ez csökkenti a lemorzsolódást, gyorsítja a felfedezést, és különösen **mobilon** ad természetes, „feed‑szerű” élményt.

## Fő funkciók és működés

### Többszekciós beállítás
- Korlátlan számú **szekciót** hozhatsz létre külön oldalakon (pl. Bolt főoldal, kategória, Blog archívum, értékelések).
- Minden szekció saját szelektorokkal és viselkedéssel működik, így finoman hangolhatod az élményt oldalanként.

### Lapozási módok
- **Végtelen görgetés**: automatikusan betöltődik a következő oldal tartalma, amikor a lista aljára érsz.
- **„Továbbiak” gomb**: a felhasználó kézzel kérhet újabb elemeket (jobb kontroll, stabil mérhetőség).
- **AJAX‑os lapozó**: a hagyományos lapozást modernizálja, az oldalt újratöltés nélkül vált.

### Dinamikus URL‑frissítés
- Gördítés közben a bővítmény **módosíthatja a böngésző címsorát** (pushState).
- Előnyei: a **Vissza** gomb megfelelően működik, a látogató visszatérve ugyanarra a helyre jut; a megoszthatóság és a **mérés** is pontosabb (oldalmegtekintések küldése lapozás közben).

### Betöltési élmény testreszabása
- Választható **loader ikonok**, saját ikon feltöltése.
- **Animációk** (pl. fade, zoom) az új elemek beszúrásakor.
- Személyre szabható **gombfelirat** és extra **CSS‑osztály**, hogy illeszkedjen a témád arculatához.

### Mobil támogatás
- Külön opciók a **mobil nézetekhez**: be‑/kikapcsolás, módváltás, így gyors marad az oldal és nem lesz „végtelen” túltöltés.

### Integrációk és fejlesztői horgok
- Kész **integráció** AJAX‑os termékszűréssel, így szűrés után is gördülékeny a betöltés.
- **JavaScript események**:
  - yith_infs_adding_elem: elemek beszúrása előtt
  - yith_infs_added_elem: elemek beszúrása után
  - yith_infs_url_changed: URL frissítésekor
- Ezekkel egyedi logikát, mérést, animációt kapcsolhatsz az eseményekhez.

## Gyakorlati példák

- **WooCommerce kategóriaoldal**: a vásárló görget, és a következő termékoldal elemei automatikusan betöltődnek. A címsor frissül, így a „Vissza” gomb pontosan a korábbi pozícióra visz.
- **Blog archívum**: „Továbbiak” gombbal adagolod a bejegyzéseket, hogy a lábléc elérhető maradjon, és jobban kontrolláld a teljesítményt.
- **Szűrt terméklista**: ár- vagy színszűrés után is működik az AJAX‑os lapozás; a felhasználó nem veszti el a fókuszt, a lista folyamatos.

## Gyorsstart (szekció beállítása)

1. Telepítés és aktiválás után nyisd meg a bővítmény beállításait.
2. Hozz létre egy új **szekciót** (pl. „Shop archívum”).
3. Válaszd ki a **Működési módot**: Infinite Scrolling, Load more vagy Ajax Pagination.
4. Add meg a kötelező **CSS szelektorokat**:

```
Navigation selector: .woocommerce-pagination
Next selector: .woocommerce-pagination a.next, .page-numbers .next
Item selector: .products li.product
Content selector: .products
```

5. Kapcsold be az **URL‑frissítést**, ha fontos a visszalépés és a mérés.
6. Állítsd be a **loadert**, animációt és – ha kell – a „Továbbiak” gomb feliratát.
7. Mentsd a szekciót, teszteld asztali és mobil nézetben.

Fejlesztői események példák:

```js
// Új elemek beszúrása után animáció vagy mérés
document.addEventListener('yith_infs_added_elem', function (e) {
  // pl. lazyload frissítés, komponensek újrainicializálása
});

// URL-váltáskor oldalletöltés küldése (GA4 / dataLayer példa)
document.addEventListener('yith_infs_url_changed', function () {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_location: location.href
  });
});
```

## Előnyök és értékajánlat

- **Kevesebb súrlódás**: a felhasználó nem keresgél „Következő oldal” gombot.
- **Gyorsabb felfedezés**: több terméket látnak rövidebb idő alatt.
- **Jobb mobil UX**: természetes, folyamatos görgetés.
- **Mérhetőség**: URL‑frissítéssel pontosabb analitikát kapsz a listanézetben.
- **Rugalmas testreszabás**: módok, animációk, gombszöveg, fejlesztői horgok.

A bővítmény nem gyűjt személyes adatot, és együttműködik elterjedt témákkal és többnyelvű bővítményekkel.

## Free vs Premium

- **Free**: egyetlen szekció, alap loader, mobil támogatás, saját ikon feltöltése.
- **Premium**: korlátlan szekció, három lapozási mód, **dinamikus URL‑frissítés**, animációk, gombtestreszabás, AJAX‑szűréssel való integráció, fejlesztői események.

## Kinek ajánlott?

- **WooCommerce boltoknak**, ahol fontos a termékfelfedezés sebessége és a mobil konverzió.
- **Tartalomoldalaknak/blogoknak**, ahol a folyamatos olvasási élmény növeli az oldalon töltött időt.
- **Ügynökségeknek/fejlesztőknek**, akik skálázható, testreszabható megoldást szeretnének különböző archívumokra.
- **Adatvezérelt csapatoknak**, akik pontos mérésre és SEO‑barát megvalósításra törekednek.

## Bevezetési megfontolások

- **Teljesítmény**: végtelen görgetésnél sok elem gyűlhet össze. Használj kép‑lazyloadot, gyorsítótárat, ésszerű elemszámot és mértékletes animációt.
- **SEO**: kapcsold be az **URL‑frissítést**, és biztosíts külön is elérhető, lapozott URL‑eket. Így az „infinite scroll” használható keresőbarát módon.
- **Analitika**: kösd az oldalmegtekintés‑küldést az **yith_infs_url_changed** eseményhez, hogy a görgetés közben betöltött oldalak is mérve legyenek.
- **UX döntési mátrix**:
  - Nagy katalógus, mobil fókusz: **végtelen görgetés**.
  - Stabil lábléc/konverziós elemek megőrzése: **„Továbbiak” gomb**.
  - Precíz oldalankénti mérés és kontroll: **AJAX‑os lapozó**.

Ezzel a bővítménnyel gyors, modern és mérhető listanézetet hozhatsz létre WordPressen és WooCommerce‑en – pontosan ott és úgy, ahol neked a legnagyobb értéket adja.