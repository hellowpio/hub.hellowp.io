---
title: "Buy Again for WooCommerce"
description: "Prémium WooCommerce kiegészítő, amellyel a vásárlóid egy kattintással újravásárolhatják korábbi termékeiket a Saját fiókból és a rendelés részletei oldalról, testreszabható Buy Again listával és emlékeztető e-mailekkel."
sidebar_label: "Buy Again for WooCommerce"
---

## Mi ez és milyen problémát old meg?

A Buy Again for WooCommerce egy prémium, Marketplace-minőségű bővítmény a WooCommerce-hez. Célja, hogy a visszatérő vásárlást extrém egyszerűvé tegye: a vevőid a **Saját fiók** felületen és a **Rendelés részletei** oldalon egy kattintással újra kosárba tehetik vagy azonnal meg is vehetik (Buy Now) a korábban vásárolt tételeket. Nem kell régi rendeléseket bogarászni vagy a teljes rendelést megismételni – elég egy-egy terméket kiválasztani. Ezzel csökken a súrlódás a kosárig/checkoutig vezető úton, nő a repeat purchase arány, és kevesebb lesz a kosárelhagyás.

## Hogyan működik röviden?

- A bővítmény a **My Account** oldalon létrehoz egy **Buy Again** szekciót/táblázatot a korábban vásárolt termékekkel.
- Minden tételnél megjelenik az **Add to Cart** és az **Buy Now** gomb, valamint opcionális mennyiségmező.
- A **Rendelés részletei** oldalon terméksoronként (vagy akár a teljes rendelésre) elérhető a **Buy Again** művelet.
- A **termékoldalon** jelölést kapnak a „korábban megvásárolt” tételek, rendeléslinkkel.
- Az adminban részletes beállításokkal szabályozhatod a megjelenítést, szűréseket, jogosultságokat és az emlékeztető e-maileket.

## Fő funkciók

### Vásárlói élmény és UI

- **Buy Again szekció a My Account oldalon**: egy átlátható lista a korábban vásárolt termékekről, állapottal, készlettel és gyors műveletekkel. Opcionálisan külön **Buy Again oldal** is megjeleníthető a fiókban.
- **Gombok a rendelés részletein**: a vevő egyes tételeket vagy akár az egész rendelést újra megveheti. A **Buy Now** közvetlenül a pénztárhoz vezet.
- **„Korábban megvásárolt” jelzés a termékoldalon**: segít emlékezni, mit vett korábban, és visszavisz az adott rendeléshez.
- **Címke és ajánlósáv**: opcionális **Buy Again címke** a bolt-/terméklistában, valamint **ajánlósáv a kosár oldalon** a korábban vett termékekkel.

### Keresés, szűrés és megjelenítés

- **Gyors kereső és szűrők**: terméknév, kategória, dátum szerinti szűrés a Buy Again táblában, hogy a vevő pillanatok alatt megtalálja, amit újra venne.
- **Testreszabható oszlopok**: leírás, ár, raktárkészlet, „hányszor rendelték”, utolsó rendelés száma, mennyiség, akciók stb. állíthatók.
- **Készlethiány kezelése**: a **kifogyott** termékek elrejthetők a listából, így elkerülhetők a zsákutcák.
- **Rugalmas elrendezés**: sorrend, képméretek, a fiók menüpont saját **slug**-ja és a mennyiségi viselkedés a kosárban mind konfigurálható.

### Marketing és automatizálás

- **Buy Again emlékeztető e-mailek**: időzített vagy eseményalapú emlékeztetők korábbi vásárlóknak, hogy térjenek vissza és vegyenek újra.
- **Email-napló és teszt küldés**: admin felületen naplózás és **teszt email** opció a kampányok finomhangolásához.

### Admin, mérés és jogosultságok

- **Purchase History riport**: külön nézet az adminban, ahol láthatod, milyen vásárlások érkeztek a Buy Again funkcióból – így mérhető a hatás.
- **Hozzáférés-korlátozás**: a Buy Again lista tartalma szűkíthető **termék**/**kategória** és **felhasználó**/**szerepkör** alapján.
- **Rövidkód**: a Buy Again táblát bármely oldalra beillesztheted.
- **Fordítás és lokalizáció**: feliratok, üzenetek testreszabhatók; a bővítmény fordításra kész.

### Teljesítmény és kompatibilitás

- **HPOS-kompatibilis**: nagy forgalmú boltoknál is stabil, modern rendeléskezeléssel dolgozik.

## Gyakorlati példák

- **FMCG / drogéria**: a vevő 6 hetente újra veszi a korábbi sampon–fogkrém–vitamin kombinációt. Belép a fiókjába, a Buy Again táblában kijelöli a tételeket, Buy Now, és már a pénztáron van.
- **Irodaszer B2B**: a beszerző havonta újrarendeli a top 20 cikket. A Buy Again oldalon kategória szerint szűr, mennyiségeket módosít, majd egy kattintással kosárba teszi az egészet.
- **Pótalkatrészek**: a szerelőipari ügyfél a leggyakrabban használt csatlakozókat és tömítéseket a Buy Again ajánlósávból gyorsan beteszi a kosárba, elkerülve a hosszas keresgélést.
- **Szezonális cikkek**: a visszatérő vásárló látja a termékoldalon, hogy ezt már vette korábban, kattint a rendeléslinkre, ellenőrzi a cikkszámot, és azonnal újrarendeli.

## Telepítés és alapbeállítás

1. Telepítsd a bővítményt a .zip feltöltésével, majd aktiváld.
2. Nyisd meg: **WordPress Admin > Buy Again > Settings**.

Javasolt kezdő beállítások:
- **General**: állítsd be, mely rendelésállapotokból gyűjtse a korábbi vásárlásokat; igazítsd a feliratokat és üzeneteket a márkahangodhoz.
- **Display / Advanced**: kapcsold be a keresőket és szűrőket; állítsd a táblázat oszlopait, képméreteket, sorrendet; add meg a My Account menüpont **slug**-ját; döntsd el, hogyan viselkedjen a mennyiség mező a kosárban; kapcsold be a kifogyott termékek elrejtését.
- **Email**: konfiguráld az emlékeztető e-maileket, időzítést, tartalmat; használd a **logolást** és a **teszt küldést** a biztonságos bevezetéshez.
- **Localization**: finomhangold a szövegeket, fordításokat.
- **Shortcodes**: másold ki a rövidkódot, és illeszd be bármely oldalra (pl. „Újravásárlás” landing).

Példa rövidkód beillesztésre (a konkrét név/attribútumok a bővítmény Shortcodes lapján találhatók):
```
[buy_again_table columns="thumbnail,product,price,stock,quantity,actions" hide_oos="yes" orderby="last_purchased" limit="20"]
```

## Előnyök és értékajánlat

- **Gyorsabb repeat purchase**: 1–2 kattintás a korábbi kedvencekhez.
- **Nagyobb konverzió, kevesebb kosárelhagyás**: a Buy Now lerövidíti az utat a pénztárig.
- **Jobb készletélmény**: kifogyott tételek elrejtése, egyértelmű jelzések.
- **Mérhetőség és automatizálás**: Purchase History és emlékeztető e-mailek növelik a visszatérő forgalmat.
- **Rugalmas kontroll**: szerepkör-, termék- és kategóriaszintű szabályok, testreszabható UI.

## Kinek ajánlott?

- **Fogyóeszközöket** értékesítőknek (élelmiszer, higiénia, háztartás).
- **B2B** boltoknak (irodaszer, ipari kellékek), ahol a gyors újrarendelés kritikus.
- **Pótalkatrész**-kereskedőknek, ahol a vevők gyakran ugyanazt a SKU-t veszik.
- **Nagy forgalmú** áruházaknak, akik HPOS-kompatibilis, skálázható megoldást keresnek.

## Megkülönböztetés

Fontos: a Buy Again for WooCommerce ebben a leírásban a Flintop által készített, hivatalos Marketplace-bővítményre utal. Más, hasonló nevű kiegészítők eltérő funkciókkal működhetnek – telepítés előtt győződj meg róla, hogy ezt a megoldást választod.