---
title: "LearnDash Multilingual Integration"
description: "Hivatalos LearnDash kompatibilitási kiegészítő, amely biztosítja a Builder‑funkciók és az (WPML esetén) URL‑fordítás zökkenőmentes működését többnyelvű WordPress‑környezetben."
sidebar_label: "LearnDash Multilingual Integration"
---

## Mi ez és mit old meg?

A LearnDash Multilingual Integration egy hivatalos, „ragasztó” jellegű kiegészítő a LearnDash LMS‑hez. A feladata, hogy a **Course Builder** és **Quiz Builder** hibamentesen működjön többnyelvű oldalon, ha **WPML**‑t vagy **Polylangot** használsz. Nem fordítómotor, nem kezeli a fordítási fájlokat; a tartalom tényleges fordítását a többnyelvű bővítmény végzi. Tehát: te fordítasz WPML/Polylanggal, a Multilingual Integration pedig gondoskodik arról, hogy a LearnDash admin eszközei és tartalomtípusai jól együttműködjenek a többnyelvűséggel.

## Fő funkciók és hogyan működnek

- **Builder‑kompatibilitás több nyelven**  
  Aktiválás után a kiegészítő úgy hangolja a LearnDash‑t, hogy a kurzus‑ és kvízépítő a kiválasztott nyelvhez tartozó tartalmakat lássa és stabilan kezelje. A tananyaghierarchia (kurzus → lecke → téma → kvíz → kérdés) nyelvenként külön példányokkal működik, így a Builderben nem keverednek a nyelvek.

- **URL‑fordítás WPML‑lel**  
  WPML használata esetén a LearnDash egyedi tartalomtípusainak **slugjai** és **URL‑jei** fordíthatók. Ez SEO‑szempontból hasznos: a felhasználó és a keresőmotorok is a célnyelvnek megfelelő URL‑eket kapják. (Polylanggal az URL‑fordítás nem támogatott.)

- **Nincs külön beállítási oldal**  
  A bővítmény „plug and play”: telepítés és aktiválás után azonnal elvégzi a szükséges kompatibilitási módosításokat. Nem kell új menükben konfigurálnod.

- **Támogatott többnyelvű motorok**  
  Hivatalosan **WPML** és **Polylang** mellett tesztelt. Más többnyelvű megoldásokkal a működés nem garantált.

## Telepítés és első lépések

Előfeltételek:
- Aktív **LearnDash LMS** licenc
- Telepített **WPML** vagy **Polylang**

Telepítés:
```
LearnDash LMS > Add-Ons > LearnDash Multilingual > Install > Activate
vagy
Bővítmények > Új hozzáadása > Bővítmény feltöltése > (a LearnDash-fiókból letöltött ZIP) > Telepítés > Aktiválás
```

Nincs további beállítás. Innentől a fordítási munkát a választott többnyelvű bővítményed felületén végzed.

## Mintafolyamat WPML‑lel

1. **Telepítés/aktiválás**: WPML, LearnDash, LearnDash Multilingual Integration.  
2. **Tartalom fordításra küldése**: a WPML fordításkezelőjében küldd fordításra a kurzusokat, leckéket, témákat, kvízeket és kérdéseket.  
3. **Összepárosítás a Builderben**: válts a célnyelvre az admin nyelvváltóval, nyisd meg a célnyelvi kurzust, és a **Builder** jobb oldali paneljén add hozzá a már lefordított leckéket, témákat és kvízeket a megfelelő sorrendben.  
4. **Különleges eset – kvízválaszok**: egyes kvízmezők/válaszok fordítását kézzel ellenőrizd és finomhangold a kérdés‑ és kvízszerkesztőben.

## Gyakorlati példák

- **Vállalati képzési portál**: ugyanaz a compliance kurzus magyarul, angolul és németül. A Builder mindhárom nyelven ugyanazt a struktúrát mutatja, de minden elem a saját nyelvi példány. WPML‑lel a kurzusok URL‑jei is nyelvspecifikusak, ami a belső kommunikációban és SEO‑ban is előny.  
- **Egyetemi/edtech platform**: több régióban futó tananyagok. A szerkesztők a saját nyelvükön szerkesztenek; a Multilingual Integration biztosítja, hogy a LearnDash‑es admin élmény ne törjön meg, és a hallgatók a nyelvüknek megfelelő felépítést kapják.

## Előnyök: mit nyersz vele?

- **Stabil Builder‑élmény** többnyelvű környezetben – nincs keveredő lista, eltűnő elemek vagy kapcsolási anomáliák.  
- **Jobb SEO és felhasználói élmény** a fordított URL‑ekkel (WPML).  
- **Idő‑ és költségmegtakarítás**: nem kell egyedi kompatibilitási kódot írnod, a beállítások minimálisak.  
- **Konzisztens tananyagstruktúra** minden nyelven, egyszerű karbantartással.  
- **Hivatalos támogatottság**: a LearnDash ökoszisztémához illeszkedő, karbantartott add‑on.

## Kinek ajánlott?

- **LearnDash‑t használó webhelytulajdonosok**, akik többnyelvű e‑learninget építenek.  
- **Ügynökségek és fejlesztők**, akiknek fontos a kiszámítható, támogatott integráció WPML/Polylanggal.  
- **Tartalom‑ és képzésmenedzserek**, akik nyelvenként szeretnék ugyanazt a tananyagstruktúrát fenntartani, admin oldalon fennakadások nélkül.  
- **SEO‑fókuszú csapatok**, akik értékelik a lokalizált slugokat és URL‑eket (WPML).

## Korlátok és megjegyzések

- **Nem fordítómotor**: a tényleges szövegfordítást a WPML/Polylang végzi; a bővítmény nem módosít .po/.mo fájlokat.  
- **Támogatási kör**: hivatalosan WPML és Polylang mellett tesztelt; más többnyelvű pluginnal a működés nem garantált.  
- **URL‑fordítás**: csak WPML esetén érhető el; Polylanggal nem.  
- **Tanulói előrehaladás**: nincs automatikus kereszt‑nyelvi progressz‑szinkron; nyelvváltáskor a haladás nem öröklődik.  
- **Értesítések**: e‑mailek jellemzően az alapértelmezett nyelven mennek.  
- **WPML beállítások**: egyes opciók (például beágyazott URL‑struktúrák vagy bizonyos fordítási módok) ütközhetnek a LearnDash működésével; ha rendellenességet látsz, ellenőrizd ezeket a beállításokat és kövesd a javasolt kerülőmegoldásokat.  
- **Kvízválaszok**: bizonyos válasz‑ vagy mezőtípusokat célszerű kézzel finomítani a fordítás után.

## Alternatívák és kiegészítők

- **Weglot integráció**: ha felhőalapú fordítási szolgáltatást szeretnél, a LearnDash kínál Weglot‑os együttműködést is. Ez alternatíva vagy kiegészítő lehet a WPML/Polylang mellett.

---

Röviden: a LearnDash Multilingual Integration gondoskodik róla, hogy a LearnDash és a vezető többnyelvű bővítmények zökkenőmentesen dolgozzanak együtt – a Builder stabil, az URL‑ek (WPML‑lel) fordíthatók, és a teljes többnyelvű tananyagkezelés gördülékenyebbé válik.