---
title: "MainWP Database Updater Extension"
description: "Központi felületről indíthatod a WooCommerce és (Pro) Elementor adatbázis-frissítéseket az összes csatolt WordPress oldaladon, közvetlenül a MainWP Dashboardból."
sidebar_label: "MainWP Database Updater Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Database Updater egy hivatalos MainWP Pro kiegészítő, amellyel egy helyről láthatod és futtathatod a WooCommerce, az Elementor és az Elementor Pro által igényelt adatbázis-frissítéseket az összes csatolt (Child) WordPress oldaladon. Akkor hasznos, amikor egy plugin frissítése után az adott oldal admin felületén megjelenik az „Update Database” gomb – ezzel a kiegészítővel nem kell egyesével belépned minden site-ra, hanem mindezt a MainWP Dashboardból indíthatod.

## Hogyan működik?

A bővítmény átvizsgálja a csatolt oldalakat, és érzékeli, ha WooCommerce-hez vagy Elementor( Pro)-hoz adatbázis-frissítés érhető el. Az információkat egy új, **Database Updates** nézetben gyűjti össze, ahol:
- láthatod az érintett bővítményt és site-ot,
- összehasonlíthatod a jelenlegi és a szükséges adatbázis-verziót,
- egy kattintással elindíthatod a frissítést tömegesen vagy site-onként.

A folyamat a MainWP kapcsolaton keresztül fut, nincs szükség külön API-kulcsokra vagy extra pluginekre. A frissítések állapotát vizuális visszajelzés (progress) mutatja, és a DB-frissítések megjelennek a MainWP áttekintő widgeteiben és az egyes oldalak saját „Updates” nézetében is.

## Fő funkciók, részletesen

- **Automatikus észlelés**  
  A kiegészítő felderíti, mely csatolt oldalakon vár WooCommerce, Elementor vagy Elementor Pro adatbázis-frissítés. Minden érintett site mellé odateszi a jelenlegi és a szükséges DB-verzió összefoglalóját, hogy tudd, miért kell futtatni a műveletet.

- **Központi „Database Updates” lista**  
  Egy helyen látod a teljes portfóliódat: mely site-okon függőben a DB-migráció, mi a státusz, és mi várható. Ez segít a priorizálásban és a gyors döntéshozatalban.

- **Tömeges frissítés (Update All / kijelöléssel)**  
  Ha minden rendben van a mentésekkel, egy gombnyomással indíthatod a teljes portfólió DB-frissítéseit. Nagyszámú site esetén drasztikusan csökkenti a kattintgatást és a belépések számát.

- **Egyedi frissítés (Update Now)**  
  Ha előbb tesztelnél, site-onként is indíthatod. Ez különösen hasznos, ha egyes oldalakon egyedi bővítmények vagy testreszabások vannak.

- **Integráció a MainWP felületébe**  
  A DB-frissítések bekerülnek az általános frissítési áttekintőbe és az egyes site-ok „Updates” oldalára is, így bárhonnan elérheted az indítást és nyomon követheted a folyamatot.

- **Nincs extra függőség**  
  A meglévő MainWP infrastruktúrát használja; nem kér külön API-t vagy külső szolgáltatást.

## Használat lépésről lépésre

1. **Telepítés és aktiválás**  
   A MainWP Dashboardban az Extensions között telepítsd és aktiváld a Database Updater kiegészítőt.
2. **Elérés**  
   Az Updates menüben megjelenik a **Database Updates** fül, illetve az Extensions listából is megnyithatod.
3. **Műveletek**  
   - Válaszd a „Update All”-t a teljes portfólió frissítéséhez.  
   - Vagy kattints egy adott site mellett az „Update Now”-ra.  
   - Kövesd a folyamatjelzőt és az állapotüzeneteket.

Példa navigáció:
```
MainWP Dashboard
  -> Updates
    -> Database Updates
      -> Update All / Update Now
```

## Gyakorlati példák

- **Ügynökségi WooCommerce frissítés**  
  Tíz webáruházon frissítetted a WooCommerce-t. Mindegyiknél külön „Update Database” gomb várna. A Database Updaterrel kijelölöd mind a tízet, és egyszerre futtatod a szükséges DB-lépéseket.

- **Elementor nagyverziós váltás**  
  Huszonöt microsite-on Elementor frissítés történt, ami DB-migrációt igényel. Először 2-3 site-on egyedileg végigfuttatod az „Update Now”-t, ellenőrzöd az eredményt, majd az összes többi oldalon „Update All”-lal zárod a folyamatot.

- **Karbantartási ablak**  
  Heti karbantartás során előbb a pluginfrissítéseket telepíted, majd egy körben elindítod a DB-frissítéseket. Így az egész portfólió konzisztens marad.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs több tucat admin belépés és manuális kattintgatás.  
- **Kevesebb hiba**: csökkenti az elmaradt DB-migrációkból adódó inkonzisztenciákat.  
- **Átláthatóság**: minden érintett oldal és státusz egy nézetben.  
- **Skálázhatóság**: ugyanannyi művelettel kezelsz 2 vagy 200 oldalt.

## Követelmények és korlátok

- **Előfeltételek**: MainWP Dashboard telepítve és beállítva, a Child Site-ok élő kapcsolattal csatlakoztatva. A Database Updater a Pro csomag része.  
- **Fókusz**: kifejezetten a WooCommerce, az Elementor és az Elementor Pro adatbázis-frissítéseit kezeli. Más bővítmények DB-lépéseire nem terjed ki.  
- **Működésmód**: manuális indítás (kijelölés / Update All). Ütemezett, automatikus DB-frissítés nincs dokumentálva.  
- **Megkülönböztetés**: ne keverd a Maintenance kiegészítővel; az általános adatbázis-tisztítást végez, nem plugin-specifikus migrációt.

## Legjobb gyakorlatok

- Mindig készíts teljes **biztonsági mentést** a frissítések előtt.  
- Először frissítsd a vonatkozó **plugineket**, csak utána futtasd a **DB-migrációkat**.  
- Nagy portfólió esetén kezdj **néhány teszt oldallal**, majd használd az „Update All”-t.  
- Időzítsd karbantartási ablakra, és figyeld a **progress** visszajelzéseit.

## Kinek ajánlott?

- **Ügynökségeknek**: sok ügyfél- és webáruház-portfólió központi, gyors karbantartása.  
- **Fejlesztőknek és site menedzsereknek**: konzisztens, átlátható frissítési folyamat több környezetben.  
- **E-kereskedelmi csapatoknak**: WooCommerce DB-lépések biztonságos, kötegelt futtatása.  

Ha több WordPress oldalt kezelsz, és rendszeresen frissíted a WooCommerce-t vagy az Elementor( Pro)-t, a MainWP Database Updaterrel időt spórolsz, csökkented a hibakockázatot, és egységesíted a frissítési folyamatot.