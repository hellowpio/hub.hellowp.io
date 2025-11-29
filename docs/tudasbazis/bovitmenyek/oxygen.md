---
title: "Oxygen"
description: "Fejlesztőközpontú vizuális site builder WordPresshez: téma nélkül építhetsz teljes webhelyet, dinamikus adatokkal, komponensekkel és modern workflow-val."
sidebar_label: "Oxygen"
---

## Mi ez, és milyen problémát old meg?

Az Oxygen egy professzionális, fejlesztőközpontú vizuális site builder WordPresshez. Teljes irányítást ad a webhely felett – fejléc, tartalom, lábléc, sablonok –, külön téma nélkül. Ezzel megszünteti a téma‑lock‑int, eltünteti a felesleges kódduzzadást, és helyette tiszta, szemantikus HTML/CSS kimenetet ad. Ha összetett, dinamikus adatokat használsz (egyedi mezők, lekérdezések), vagy pixelpontos kontrollt akarsz a layout fölött, az Oxygen közvetlen, kódhű eszközt ad a kezedbe.

## Hogyan működik? (architektúra)

- **Témafüggetlen:** Aktiváláskor az Oxygen letiltja a WordPress témarendszert, és a saját **Templates** logikájával veszi át a megjelenítést. Így minden nézet (single, archive, 404, termék, stb.) a builderben készül.
- **Két termékvonal:** a stabil **Classic** ág és az újraírt, modern fejlesztői workflow‑t hozó ág (közismerten “Oxygen 6”). A Classic továbbra is támogatott, az új ág fejlettebb komponens‑ és interakció‑rendszert ad.

## Fő funkciók, érthetően

- **Vizuális építés, CSS‑első szemlélettel:** A stíluspanel 1:1 leképezi a CSS tulajdonságokat. Használhatsz Flexboxot, CSS Gridet, abszolút pozicionálást és reszponzív töréspontokat. Amit beállítasz, abból letisztult, szemantikus kód lesz.
- **Dinamikus adatok és lekérdezések:** Közvetlenül köthetsz be egyedi mezőket (pl. ACF, Meta Box), saját post típusokat és taxonómiákat. Vizuálisan építhetsz loopokat (Repeater/Query), feltételekkel (pl. ha mező üres, rejtsd el az elemet).
- **Komponensek:** Bármely szekciót vagy elemet **újrahasznosítható komponenssé** emelhetsz. Ha frissíted a komponenst, a példányok követik – a szerkeszthetőséget finoman szabályozhatod (mi legyen lokálisan módosítható).
- **Interakciók és animációk:** Hover, kattintás, görgetés alapú triggerek, belépő animációk, “scroll into view”, sticky viselkedés, időzített szekvenciák – mindez kód nélkül, mégis fejlesztőbarát módon.
- **Globális változók:** Színek, tipográfia, térközök és más design tokenek központilag kezelhetők. Így stílusváltáskor elég a változókat cserélni.
- **WooCommerce integráció:** Kész elemek a termék‑, archív‑, kosár‑, pénztár‑ és fiókoldalakhoz. A bolt teljes élménye vizuálisan testre szabható.
- **Gutenberg / “Client mode”:** A végfelhasználó a tartalmat a blokk‑szerkesztőben módosíthatja, miközben a dizájn és logika az Oxygenben védett. Jogosultságokkal pontosan szabályozhatod, ki mit érhet el.
- **Teljesítmény és fejlesztői eszközök:** Karcsú kimenet, opcionális optimalizálások (pl. fölösleges stílusok eltávolítása), billentyűparancsok, cross‑site másolás/illesztés, egyedi PHP/JS/CSS hozzáadása.

Példa globális változókra:
```
:root {
  --brand-primary: #0057ff;
  --spacing-base: 1rem;
  --font-base: "Inter", system-ui, sans-serif;
}
```
Ezeket a változókat az Oxygenben állítod, majd minden komponens és oldal automatikusan átveszi.

## Gyakorlati példák

- **Ügynökségi webhely:** Készíts egy “Base Template”-et fejléccel/lábléccel, majd a belső oldalakat komponensekből rakd össze. A hero, feature‑rács és CTA mind komponens, így az egész site stílusa percek alatt egységesíthető.
- **Tudásbázis vagy címtár:** Hozz létre egyedi post típust és mezőket (pl. cím, kategória, címkék, kontakt). A listázó oldalon Query/Repeater elemmel szűrhető rácsot építesz, feltételekkel (pl. ha nincs weboldal mező, rejtsd el az ikont).
- **WooCommerce bolt:** A termékoldal sablonba elhelyezed a galériát, árat, készletet, kosárgombot és akciós jelölést. A kosár/pénztár lépéseit is újrarendezed. Interakcióval “sticky” kosár‑összegzést adsz mobilon.
- **Ügyfél‑átadás:** A dizájnt és logikát te kezeled az Oxygenben, a megrendelő pedig Gutenbergben frissíti a szövegeket és képeket. A “Client mode”-dal kizárod a kritikus beállításokat.

## Előnyök és értékajánlat

- **Nincs téma‑lock‑in:** Nem kell child theme‑et karbantartani, a sablonlogika egy kézben van.
- **Tiszta kód, jobb teljesítmény:** Kevesebb “div‑bloat”, gyorsabb betöltés és stabilabb SEO‑alapok.
- **Gyorsabb fejlesztés, kevesebb hibával:** Komponensek és globális változók miatt könnyű a skálázás és a redesign.
- **Valódi dinamikus adatkezelés:** Összetett lekérdezések és feltételek kódolás nélkül, mégis fejlesztői kontrollal.
- **Ügyfélbarát működés:** A tartalomszerkesztés biztonságos, a dizájn védett.

## Telepítés és licencelés

- **Telepítés:** A bővítményt a saját fiókodból letöltött ZIP fájl feltöltésével aktiválod a WordPressben. A telepítés után készíts alap sablon(oka)t, mert a téma megjelenítése letiltásra kerül.
- **Licencelés:** Kereskedelmi termék, élettartam licenckonstrukcióval kommunikálva. A Classic ág támogatott, az új ág hozzáférhető a meglévő ügyfeleknek is.

## Kinek ajánlott?

- **Fejlesztőknek és ügynökségeknek:** Ha teljes kontrollt akarsz a markup és a stílus fölött, dinamikus adatmodellel dolgozol, és komponensalapú skálázhatóságot keresel.
- **Haladó power usereknek:** Ha vizuálisan építenél, de nem akarsz felfújt kimenetet és rejtett korlátokat.
- **WooCommerce‑üzemeltetőknek:** Ha a teljes vásárlói élményt – listázástól a pénztárig – testre szabnád.
- **Olyan csapatoknak, akik ügyfélnek adnak át:** Gutenberg‑alapú tartalomszerkesztés, miközben a struktúra és stílus védett marad.

## Fontos megjegyzések és kompatibilitás

- **Éles telepítés előtt tervezés:** Mivel a téma megjelenítését az Oxygen veszi át, első aktiváláskor a frontend megváltozhat. Készíts elő sablonokat és staging környezetet.
- **Classic vs. új ág:** A Classic stabil választás éles projektekhez; az új, újraírt ág fejlettebb workflow‑t és komponensképességeket kínál. Válassz projektérettség és igény szerint.
- **Teljesítmény:** A beépített optimalizációk mellett érdemes cache‑t és CDN‑t használni, valamint tudatosan tervezni az interakciókat és animációkat mobilon.

Összességében az Oxygen fejlesztő‑első builder, amellyel témától függetlenül, tiszta kóddal és erős dinamikus eszköztárral építhetsz skálázható WordPress projekteket. Ha kontrollt, teljesítményt és karbantarthatóságot keresel, ez a megközelítés neked való.