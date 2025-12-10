---
title: "JetPopup"
description: "Prémium WordPress felugró‑ablak készítő Elementorhoz és Gutenberghez; célzott, időzített, animált popupok kódolás nélkül."
sidebar_label: "JetPopup"
---

## Mi ez és milyen problémát old meg?

A JetPopup egy prémium WordPress bővítmény, amivel kódolás nélkül, vizuálisan építhetsz felugró ablakokat. Elementorral és a Gutenberg (Block) szerkesztővel is működik, így gyorsan hozhatsz létre feliratkoztató űrlapokat, promóciós üzeneteket, WooCommerce gyorsnézetet vagy bármilyen tájékoztató popupot. A célzott triggereknek és feltételeknek köszönhetően nem lesz tolakodó: csak ott és akkor jelenik meg, ahol és amikor akarod.

## Fő funkciók, érthetően

### Vizuális építő és sablonok
- **Drag‑and‑drop szerkesztés**: Az egész popupot elemekből rakod össze, mint egy szokásos oldalt. Nem kell kód.
- **Előre gyártott minták (175+)**: Kategóriák szerint kereshető sablonokkal azonnal indulhatsz, majd a saját arculatodra szabhatod.

### Megjelenési formák és animációk
- **Elrendezéstípusok**: Klasszikus középre nyíló, oldalsó slide‑in, felső/alsó sáv (bar), keretező (bordering), teljes nézet (full view), vagy teljesen egyedi.
- **Animációk**: Fade, zoom, slide (fel/le/balra/jobbra), bounce, flip, rotate stb. – a megjelenés és eltűnés stílusát külön is állíthatod.

### Triggerek (mikor nyíljon meg)
- **Oldalbetöltés és késleltetés**: Megadhatod, hogy az oldal betöltése után hány másodperccel nyíljon meg.
- **Inaktivitás**: Ha a felhasználó bizonyos ideig nem csinál semmit, megjelenik a popup.
- **Görgetési százalék**: Amikor az oldal egy adott százalékáig legörgetnek.
- **Kilépési szándék**: Ha az egér a böngésző felső sávja felé mozdul, a popup megelőzi a távozást.
- **Időzítés**: Konkrét dátum/időszak alapján.
- **Kattintás**: Gombra, widgetre vagy egy tetszőleges CSS‑szelektorra kattintva.

Példák kattintás‑trigger szelektorokra:
```
.open-quickview
#kupon-gomb
```

### Megjelenítési feltételek (hol és kinek)
- **Oldaltartomány**: Teljes site, konkrét oldalak/bejegyzések, archívumok.
- **Eszköz**: Csak mobilon, csak asztali gépen stb.
- **Szerepkör**: Vendégeknek, bejelentkezett felhasználóknak, szerkesztőknek stb.
- **URL‑paraméterek**: Kampány‑UTM vagy keresési kifejezés alapján.
```
utm_campaign=nyari-akcio
q=ingyenes+szallitas
```
- **WooCommerce oldalak**: Terméklista, termékoldal, kosár, pénztár.
- **Dinamikus feltételek**: Egyedi lekérdezésekre épülő megjelenítés, ha van releváns tartalom.

### Integrációk és bővíthetőség
- **MailChimp**: Dedikált widget listák és API kulcs kezeléséhez – beépített feliratkozó popupokkal.
- **Popup Action Button**: Speciális gombfunkciók (bezárás, „ne mutasd többet”, összes popup bezárása).
- **Dinamikus tartalom**: Egyedi listákból, opciós oldalról vagy lekérdezésekből töltött tartalom.
- **WooCommerce**: Gyorsnézet, kosárba helyezés értesítések, upsell/ajánlók.

### Teljesítmény és UX beállítások
- **AJAX‑os betöltés**: A popup tartalma aszinkron tölt, így könnyebb a teljesítmény.
- **Háttér görgetés tiltása**: Megakadályozza az oldal mögötti mozgást, fókuszban tartja a popupot.
- **Overlay és bezárás**: Átlátszó réteg, kattintásra bezárás, egyedi bezárási események.
- **Show once / gyakoriság**: Te döntöd el, milyen sűrűn jelenjen meg a felhasználónak.

## Hogyan működik a gyakorlatban?

### Lépések röviden
1. **Új popup létrehozása**: Válassz mintát a könyvtárból vagy kezdd üresen.
2. **Szerkesztés**: Húzd be az elemeket (kép, szöveg, űrlap, gomb), állítsd az elrendezést és animációkat.
3. **Triggerek és feltételek**: Beállítod, mikor és hol jelenjen meg, kinek szóljon.
4. **Publikálás**: Teszteld asztali és mobil nézetben, majd élesíts.

### Használati példák
- **Kilépési kedvezmény termékoldalon**: Vendégeknek, termékoldalakon, kilépési szándékra nyíló 10% kupon, „Show once” korlátozással.
- **Hírlevél‑feliratkozás blogon**: 10 másodperces késleltetés után, csak mobilon; MailChimp űrlappal, overlay‑bezárással és görgetés tiltással.
- **Termék gyorsnézet rácsban**: Termékkártyák „Gyors nézet” gombjára kattintáskor nyíló popup; kattintás‑trigger CSS szelektorral:
```
.products .product .open-quickview
```

## Előnyök és értékajánlat

- **Fejlesztő nélkül megoldod**: Marketing és tartalom oldalról is gyorsan bevethető.
- **Releváns, nem tolakodó**: Precíz célzás és gyakoriság‑szabályozás javítja a felhasználói élményt.
- **Gyors bevezetés**: A sok minta és kész widget jelentősen csökkenti az indulási időt.
- **Konverzió‑fókusz**: Exit‑intent, időzítés és kattintás triggerek kombinációival hatékony kampányokat futtathatsz.
- **Skálázható**: Dinamikus tartalommal és e‑kereskedelmi integrációkkal a teljes funnel lefedhető.

## Kinek ajánlott?

- **E‑kereskedőknek**: Kuponok, kosár‑értesítések, gyorsnézet, upsell.
- **Marketingeseknek**: Kampány‑alapú üzenetek, A/B ötletek gyors tesztelése.
- **Tartalomszerkesztőknek**: Feliratkoztató és információs popupok kód nélkül.
- **Ügynökségeknek**: Sablonokkal gyors kivitelezés, standardizálható folyamatok.
- **SaaS/termékoldalaknak**: Bejelentések, státusz, időszakos promók.

## Bevezetési tippek

- **Kezdj mintával**: Válassz presetet, majd igazítsd arculathoz.
- **Célzás finomítása**: Szerepkör, eszköz és URL‑paraméter alapján szűkíts, hogy releváns maradj.
- **Trigger kombinációk**: Kilépési szándék + késleltetés + „Show once” nagyon jó konverziót hozhat.
- **Teljesítmény**: Nagy tartalomnál kapcsold be az AJAX betöltést; szükség esetén tiltsd a háttér görgetést.

## Licenc és kompatibilitás

A JetPopup prémium bővítmény. Elementorral (az ingyenes kiadás is elég) és a Gutenberg szerkesztővel működik, többnyelvű környezetekkel kompatibilis. Frissítésekhez és támogatáshoz érvényes licenc szükséges; elérhető önállóan vagy átfogó bővítménycsomag részeként.

## Biztonsági megjegyzés

Az elmúlt években több funkcionális és biztonsági javítás érkezett. Mindig tartsd naprakészen, és csak megbízható forrásból frissíts. Élesítés előtt tesztelj alaposan, különösen egyedi triggerek és feltételek kombinálásakor.