---
title: "MainWP Custom Dashboard Extension"
description: "Ingyenes kiegészítő a MainWP Dashboard testreszabásához saját CSS/JS/PHP kódrészletekkel, biztonságosan, frissítésbiztosan."
sidebar_label: "MainWP Custom Dashboard Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Custom Dashboard Extension egy ingyenes kiegészítő, amellyel a saját MainWP központi vezérlőpultodat alakíthatod át célzottan és biztonságosan. Lehetővé teszi, hogy egy helyen kezeld és futtasd a saját **CSS**, **JavaScript** és **PHP** snippetjeidet, kizárólag a Dashboardon. Így frissítésbiztosan, fájlrendszer-módosítások nélkül finomhangolhatod a felület kinézetét és működését, és gyorsan ki-be kapcsolhatod a módosításokat hibaelhárításkor.

## Hogyan működik?

- **Kódtárolás az adatbázisban**: a snippletek a Dashboard adatbázisába kerülnek, nem a fájlrendszerbe. Frissítéskor nem íródnak felül.
- **Betöltés a Dashboardon**: a CSS/JS a vezérlőpult oldal fejléceibe injektálódik; a PHP kód WordPress környezetben fut.
- **PHP futtatás**: a bővítmény a PHP snippleteket futás közben értelmezi. Ha a tárhelyen tiltva van az ilyen futtatás, engedélyezni kell. Szintaktikai hiba esetén a Dashboard összeomlását védelmi mechanizmusok akadályozzák meg, és visszairányítanak a szerkesztőbe.
- **Heartbeat alapú visszajelzés**: a háttérben futó ellenőrzések időben jelzik a kódproblémákat.
- **Kizárólag a Dashboardra hat**: a gyerekoldalak működését nem módosítja. Ha a gyerekoldalakon szeretnél kódot futtatni, külön kiegészítőt használj erre.
- **Fókusz a snippleteken**: a korábbi téma-beállítások ma már a Core-ban érhetők el; ez a kiegészítő a snippet-alapú testreszabásra koncentrál.

## Fő funkciók, részletezve

- **Beépített kódszerkesztő**: közvetlenül a MainWP-ben írhatsz és szerkeszthetsz CSS/JS/PHP kódot. Nem kell FTP vagy fájlkezelő.
- **Snippletek kapcsolhatósága**: minden snippet önállóan engedélyezhető/tiltható, így gyors a hibakeresés és a finomhangolás.
- **Biztonságos hibaelhárítás**: PHP-szintaktikai hiba esetén a bővítmény megóvja a Dashboardot a leállástól, és segít visszatérni a szerkesztőbe.
- **Frissítésbiztosság**: az adatbázisban tárolt snippletek nem vesznek el frissítéseknél.
- **Központosítás**: minden testreszabás egy helyen, dokumentálhatóan és csapatmunka-barát módon kezelhető.

## Gyakorlati példák

### 1) UI-elemek finomhangolása CSS-sel
Rejts el zavaró gombokat mobilon, vagy növeld a táblázatok olvashatóságát.

```css
/* Mobilon az "ignore" típusú gombok elrejtése (példa, pontos szelektorokat ellenőrizd) */
@media (max-width: 782px) {
  .mainwp .button-ignore,
  .mainwp .actions .button[data-action="ignore"] {
    display: none !important;
  }
}

/* Táblázatsor kiemelése, ha például figyelmeztető állapotú */
.mainwp table.wp-list-table tr.is-warning td {
  background: #fff7e6 !important;
}
```

Tipp: ha egy beépített stílus felülírja a sajátod, növeld a szelektor specifitását, vagy használj célzottabb struktúraszelektorokat.

### 2) Gyorsbillentyűk és apró logikai kiegészítések JavaScript-tel

```js
// Gyorsbillentyű: U (Updates) megnyitása
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return; // ne zavarjuk az űrlapokat
  if (e.key.toLowerCase() === 'u') {
    const menuItem = document.querySelector('.mainwp a[href*="page=mainwp_updates"]');
    if (menuItem) menuItem.click();
  }
});

// Figyelmeztető üzenet, ha sok napja nem volt szinkron
(function () {
  const badge = document.querySelector('.mainwp .last-sync-badge[data-days]');
  if (!badge) return;
  const days = parseInt(badge.getAttribute('data-days'), 10);
  if (days > 7) {
    const note = document.createElement('div');
    note.className = 'notice notice-warning';
    note.innerHTML = '<p>Régen volt teljes szinkron. Érdemes lefuttatni.</p>';
    document.querySelector('#wpbody-content')?.prepend(note);
  }
})();
```

### 3) Egyedi admin üzenet vagy apró logika PHP-val
Csak megbízható kódot használj!

```php
<?php
add_action('admin_notices', function () {
  // Csak MainWP oldalakon jelenjen meg
  $page = isset($_GET['page']) ? sanitize_text_field($_GET['page']) : '';
  if (strpos($page, 'mainwp_') !== 0) {
    return;
  }
  echo '<div class="notice notice-info"><p>Egyedi információs üzenet a csapatnak.</p></div>';
});
```

## Előnyök és értékajánlat

- **Frissítésbiztos**: a módosításaid nem tűnnek el verzióváltáskor.
- **Gyors hibakeresés**: snippletek ki/be kapcsolása egy kattintás.
- **Időmegtakarítás**: nincs szükség FTP-re, sőt még staging nélkül is kipróbálhatsz kisebb módosításokat.
- **Rugalmasság**: a UI-t a saját folyamataidhoz igazíthatod, akár apró, de hatékony finomhangolásokkal.
- **Csapatmunka-barát**: a változtatások központosítottan, átláthatóan dokumentálhatók.

## Telepítés és első lépések

1. Telepítsd és aktiváld a kiegészítőt a MainWP-ben.
2. Nyisd meg a Custom Dashboard menüt.
3. Hozz létre új **CSS**, **JS** vagy **PHP** snippletet, adj címet és leírást.
4. Mentsd, majd kapcsold be a snippletet.
5. Teszteld a Dashboardon; szükség esetén finomíts, vagy ideiglenesen kapcsold ki hibakereséshez.

Tipp: haladj kis lépésekben, és készíts biztonsági mentést nagyobb változtatások előtt.

## Korlátozások és biztonság

- **Hatókör**: csak a Dashboardot érinti; a gyerekoldalakra nincs közvetlen hatása.
- **PHP futtatás**: a PHP snippletek futtatása engedélyt igényelhet a tárhelyeden. Mindig megbízható forrásból származó kódot használj.
- **CSS felülírás**: bizonyos beépített stílusok felülbírálhatják a sajátod. Ilyenkor növeld a specifitást, használj célzott szelektorokat vagy alternatív megoldást.
- **Változtatások tesztelése**: éles folyamatok előtt ellenőrizd a kódot, és tartsd kéznél a kikapcsolási lehetőséget.

## Kinek ajánlott?

- **Ügynökségeknek és üzemeltetőknek**, akik egységesített, saját munkafolyamathoz igazított MainWP felületet szeretnének.
- **Fejlesztőknek**, akik gyorsan, fájlrendszer-hozzáférés nélkül akarnak apró kiegészítéseket készíteni.
- **Haladó felhasználóknak**, akik finomhangolnák a Dashboard kinézetét és működését anélkül, hogy a gyerekoldalak kódjába nyúlnának.

## Összegzés

A MainWP Custom Dashboard Extension célzott, frissítésbiztos és biztonságos módot ad arra, hogy a MainWP vezérlőpultot a saját igényeidhez igazítsd. Snippletekkel testreszabhatod a megjelenést és a működést, mindezt központilag kezelve és gyorsan visszafordíthatóan. Ha a gyerekoldalakon szeretnél kódot futtatni, külön erre való kiegészítőt használj; ha pedig téma-szintű megjelenési beállításokat keresel, azt a Core biztosítja.