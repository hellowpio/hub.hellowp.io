---
title: "MainWP Post Plus Extension"
description: "Hivatalos MainWP-kiegészítő a központi piszkozatkezeléshez és a tartalom-metaadatok véletlenítéséhez (szerző, kategória, dátum) több WordPress-gyereksite között."
sidebar_label: "MainWP Post Plus Extension"
---

## Áttekintés

A MainWP Post Plus Extension egy hivatalos MainWP-bővítmény, amivel központilag írhatsz, menthetsz és később publikálhatsz bejegyzéseket/oldalakat a Dashboardból, miközben a közzétételkor automatikusan véletleníted a metaadatokat (szerző, kategória, megjelenési dátum). Ha ugyanazt vagy hasonló tartalmat több gyereksite-on teszel közzé, ez a bővítmény segít elkerülni az “egyforma lenyomatot”, növeli a tartalom változatosságát, és csökkenti az adatvesztés kockázatát.

## Fő funkciók

### Biztonságos piszkozatkezelés a Dashboardon
- Új bejegyzés/oldal írásakor egyetlen kattintással mentheted piszkozatként.
- A piszkozatok a MainWP Dashboard “Drafts” nézetébe kerülnek, ahol bármikor folytathatod a szerkesztést, ütemezheted vagy publikálhatod őket a kiválasztott gyereksite-okra.
- Cél: stabil, lépésenként felépíthető tartalomkészítés, minimális adatvesztési kockázattal.

### MainWP Randomizer metabox (metaadat‑véletlenítés)
- Véletlen szerző: a közzétételkor a gyereksite létező felhasználói közül választ, szerepkör-szűrővel (pl. csak Szerzők).
- Véletlen kategória: a célsite létező kategóriái közül választ.
- Véletlen megjelenési dátum: opcionálisan általad megadott dátumtartományon belül ütemez.
- Cél: természetesebb, sokszereplős és időben változatos tartalomkép a hálózatodban.

### Használhatósági kiegészítések
- Bejegyzések klónozása a gyors terjesztéshez és finomhangoláshoz.
- Testreszabható táblanézet és képernyőopciók a piszkozatok hatékony áttekintéséhez.

## Gyakorlati példák

- Ügynökségi terítés több site-ra:
  1. Megírod a fő cikket a Dashboardon.
  2. A Randomizerben bejelölöd a véletlen szerzőt és kategóriát.
  3. Beállítasz egy reális dátumtartományt.
  4. Publikáláskor a bővítmény site-onként más szerzőt/kategóriát/dátumot választ, így mindenhol “életszerűbb” lesz a megjelenés.

- Központi előkészítés, későbbi közzététel:
  1. Több cikket vázlatba mentesz.
  2. A “Drafts” nézetben priorizálsz, szerkesztesz, ütemezel.
  3. A Randomizerrel az ütemezett posztok nem egyszerre, nem azonos metaadatokkal kerülnek ki.

- Gyors sorozatgyártás klónozással:
  1. Egy jól bevált cikket klónozol.
  2. A klónokban minimálisan módosítod a címet/képeket.
  3. A Randomizerre bízod a szerzőt, kategóriát és a közzétételi időt.

## Előnyök és értékajánlat

- Időmegtakarítás: központi helyről készítesz elő és publikálsz, nincs szükség egyenként belépni minden site-ra.
- Változatos megjelenés: a véletlenített metaadatok csökkentik a duplikált benyomást, természetesebb tartalomáramot adnak.
- Biztonságos szerkesztés: piszkozatmentés bármikor, így kisebb az esély adatvesztésre.
- Skálázható folyamat: klónozás, táblanézet-testreszabás és szűrés nagy tartalomkészletnél is kezelhetővé teszi a munkát.

## Függőségek és követelmények

- MainWP Dashboard szükséges a központi kezeléshez.
- A gyereksite-okon aktív MainWP Child plugin kell, hogy a publikálás és a véletlenítés működjön.
- A bővítmény a MainWP hivatalos kínálatának része, a Dashboardon belül aktiválható.

## Működés lépésről lépésre

### Piszkozat mentése és kezelése
1. Nyisd meg: MainWP > Posts/Pages > Add New.
2. Írd meg a tartalmat, majd kattints a Save Draft gombra.
3. Lépj a MainWP > Posts/Pages > Drafts nézetbe a további szerkesztéshez, ütemezéshez vagy publikáláshoz.

### Metaadat‑véletlenítés beállítása
1. Az Add New képernyőn keresd a Randomizer metaboxot.
2. Jelöld be, mit véletlenítsen: szerző, kategória, megjelenési dátum.
3. Opcionálisan add meg:
   - Szerző szerepkör-szűrőt (pl. csak olyan felhasználók közül válasszon, akik tényleg publikálhatnak).
   - Dátumtartományt a reális ütemezéshez.
4. Publikáláskor site-onként a ténylegesen létező felhasználók/kategóriák közül választ.

Példabeállítás:
```
[Randomizer]
✔ Véletlen szerző (szerepkör: Author)
✔ Véletlen kategória
✔ Véletlen megjelenési dátum
Dátumtartomány: 2025-02-01 – 2025-03-31
```

## Korlátok és tippek

- A véletlenítés csak létező entitásokból választ. Gondoskodj róla, hogy minden célsite-on legyen legalább egy megfelelő szerepkörű felhasználó és a szükséges kategóriák.
- Adj meg dátumtartományt, különben előfordulhat, hogy a megjelenési idők nem illeszkednek a projekt üteméhez.
- Tömeges előkészítésnél használd a klónozást, majd finomhangold a címet, képet és kulcsszavakat site-specifikusan.

## Biztonsági megjegyzések

- Korábbi kiadásokban előfordult jogosultságkezelési hiba. A legbiztonságosabb működés érdekében mindig frissíts a legújabb elérhető verzióra, és rendszeresen ellenőrizd a MainWP-bővítmények frissítési állapotát.
- Javasolt a szerepkörök és hozzáférések időszakos auditja, különösen, ha a véletlen szerző hozzárendelést használod.

## Kinek ajánlott?

- Ügynökségeknek és webmester csapatoknak, akik több ügyfélsite-on publikálnak, és fontos a változatos, “élő” tartalomkép.
- Tartalomgyártóknak, akik központilag akarnak piszkozatokat készíteni, majd ütemezetten publikálni.
- Olyan csapatoknak, akik gyors, skálázható workflow-t keresnek a bejegyzések klónozásához, finomhangolásához és terítéséhez.

A MainWP Post Plus Extension lényege, hogy te a tartalomra fókuszálhass, miközben a bővítmény a biztonságos előkészítést és a változatos közzétételt intézi helyetted, több site-on, egyszerre.