---
title: "WooCommerce Cost of Goods"
description: "Prémium bővítmény WooCommerce-hez termékköltség-kezeléssel, pontos profit-riportokkal és készletértékeléssel."
sidebar_label: "WooCommerce Cost of Goods"
---

## Áttekintés és cél

A WooCommerce Cost of Goods egy prémium kiterjesztés (fejlesztő: SkyVerge), amellyel **termékszinten rögzítheted az önköltséget**, a pénztárnál **automatikusan menti a rendelés költségeit**, és részletes **profit-** és **készletérték**-riportokat kapsz. A WooCommerce alapból nem számol teljes körű COGS/profitot; ez a bővítmény pótolja a hiányt, hogy ne csak bevételt, hanem valódi, történetileg pontos profitot láss.

Megjegyzés a 2025-ös core COGS-hoz: a WooCommerce-ben megjelent beépített költségmező, de kezdetben nem illeszkedik teljes körűen az Analytics-riportokhoz. Ha mind a core COGS, mind ez a bővítmény aktív, **duplikált költségmezők** jelenhetnek meg. Válassz egy megoldást; ha azonnal részletes profitjelentések kellenek, maradj a bővítmény riportjainál.

## Működési elvek, mit old meg?

- **Termékköltség mező** minden egyszerű és variálható terméknél. Variációnként is beállítható.
- **Történeti pontosság**: a pénztárnál a tételszintű költség a rendeléshez mentődik. Későbbi költségmódosítások nem torzítják a múltbeli profitot.
- **Visszamenőleges alkalmazás**: meglévő termékköltségeket korábbi rendelésekre is rá tudod számolni, így egy kattintással múltbeli profitképhez jutsz.
- **Valódi profit**: beállíthatod, hogy a **szállítás**, **díjak** és **adók** ne növeljék a profitot.

## Telepítés és licenc

- Fizetős Marketplace-bővítményként érhető el.
- Telepítés után aktiváld a licencet az adminban, majd engedélyezd a bővítményt.
- Ajánlott naprakész WordPress, WooCommerce és PHP környezetet használni.

## Beállítások: profitképzés és kizárások

A bővítmény beállításaiban szabályozhatod, hogy a profit számításból mi számítson bele:

- **Kizárások**: szállítási díj, pénztári díjak, adók. Általában érdemes mindhármat kizárni, hogy ne torzítsák a profitot.
- **Dátumtartományok** a riportokhoz: év, előző hónap, aktuális hónap, utolsó 7 nap, vagy egyedi intervallum.

## Termékköltségek felvitele

1. **Kézzel**: termékszerkesztésnél a Cost of Good mezőbe írd a költséget. Variálható terméknél variációnként add meg.
2. **CSV-importtal**:
   - Beépített Product CSV Importerrel meta oszlopok használhatók. Gyakori mezők:
     ```
     _wc_cog_cost
     _wc_cog_cost_variable
     _wc_cog_min_variation_cost
     _wc_cog_max_variation_cost
     ```
   - A Product CSV Import Suite külön „cost_of_good” oszlopot támogat.
3. **Tömeges frissítés**: CSV-vel gyorsan frissítheted a teljes termékkatalógus költségeit.

Tipp: csak akkor kapsz készletérték-riportokat, ha a termékeknél be van kapcsolva a **Manage stock**.

## Jelentések és készletértékelés

- **Profit by Date**: nettó árbevétel (a kizárt tételek levonása után), összköltség, profit, átlagprofit rendelésenként. Kiváló a napi/havi teljesítmény követésére.
- **Profit by Product**: termékenkénti nettó árbevétel, költség, profit és eladott darabszám. Tartalmaz „leginkább” és „legkevésbé” profitábilis termékeket kiemelő widgetet.
- **Profit by Category**: kategóriánkénti összprofit; a szülő kategória magában foglalja az alkategóriákat is.
- **Product Valuation / Total Valuation**: készletérték két nézetben:
  - **Retail**: készlet mennyiség × eladási ár
  - **Cost**: készlet mennyiség × termékköltség
  Csak olyan termékeknél jelenik meg, ahol a készletkezelés aktív.

Minden riport **CSV-be exportálható**, így könnyen megoszthatod a csapattal vagy továbbíthatod pénzügyi rendszerek felé.

## Export és integrációk

- A riportoknál elérhető az **Export to CSV**.
- Kompatibilis a rendelés-, ügyfél- és kuponexport bővítményekkel, valamint XML exporttal: az **order** és **line item** szintű cost mezők is exportálhatók.
- Együttműködik a beépített Product CSV Importerrel és a Product CSV Import Suite-tal.

## Gyakorlati példák

- **Egyszerű termék**: eladási ár 7 000 Ft, költség 3 000 Ft. Szállítás 1 500 Ft (kizárva). A rendelés profitja 4 000 Ft. A bővítmény a 3 000 Ft költséget a tételhez menti, így későbbi költségmódosítás nem változtatja meg ezt az értéket.
- **Variációs termék**: póló S méret költsége 2 200 Ft, L méret 2 600 Ft. A riportok pontosan mutatják, melyik méret hozza a nagyobb profitot.
- **Visszamenőleges számítás**: beállítod a termékköltségeket, majd futtatod a backfillt. Azonnal látsz több évre visszamenő profitot, kézi táblázgatas nélkül.
- **Készletértékelés**: 100 db készlet × 3 000 Ft költség = 300 000 Ft cost szerinti készletérték; ha az eladási ár 7 000 Ft, a retail érték 700 000 Ft. Leltárnál és beszámolóknál aranyat ér.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nem kell kézzel táblázatokat vezetned, minden riport egy kattintás.
- **Pontos pénzügyi kép**: történetileg helyes profit, torzítások (adók, szállítás, díjak) kizárásával.
- **Jobb döntések**: árazás, akciók, marketing fókusz a legprofitábilisabb termékekre.
- **Készletkontroll**: valós, cost és retail alapú készletérték a leltárhoz és pénzügyi egyeztetéshez.

## Kinek ajánlott?

- **Kis- és középvállalkozásoknak**, akiknek fontos a profitabilitás követése, nem csak a bevétel.
- **D2C márkáknak és kereskedőknek**, sok variációval és eltérő beszerzési költséggel.
- **Pénzügyi/operatív csapatoknak**, akiknek gyors, exportálható riportok kellenek.
- **Ügynökségeknek**, akik ügyfeleiknek szeretnének átlátható profitriportot adni.

## Hibakeresés és tippek

- Ha duplikált költségmezőt látsz, valószínűleg a **core COGS** és a bővítmény is aktív. Döntsd el, melyiket használod.
- A készletérték-riporthoz kapcsold be a **Manage stock** opciót.
- CSV-importnál ellenőrizd a mezőneveket és a formátumot. Hibás oszlopnév esetén nem töltődik a költség.
- A történeti rendelések költségei rögzítve vannak; ha átáraztál vagy költséget módosítottál, használd a **visszamenőleges alkalmazást**, ha friss képet akarsz a múltról.