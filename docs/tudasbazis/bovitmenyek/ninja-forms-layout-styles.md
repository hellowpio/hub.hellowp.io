---
title: "Ninja Forms - Layout & Styles"
description: "Vizuális elrendezés- és stíluskezelő kiegészítő a Ninja Forms-hoz. Kódolás nélkül készíthetsz többoszlopos, márkához illő űrlapokat."
sidebar_label: "Ninja Forms - Layout & Styles"
---

## Mi ez és milyen problémát old meg?

A Layout & Styles a Ninja Forms prémium kiegészítője, amellyel a WordPress adminban, az űrlap‑szerkesztőn belül állíthatod az űrlapok elrendezését és megjelenését. Ha eddig CSS‑t kellett írnod oszlopokhoz, margókhoz, színekhez, vagy a téma stílusai felülírták az elképzelésedet, ezzel a bővítménnyel mindezt vizuálisan, kódolás nélkül rendezheted. Célja, hogy gyorsan, kiszámíthatóan és egységesen nézzenek ki az űrlapjaid – a márkaarculatodnak megfelelően.

## Fő funkciók, érthetően

### Elrendezés (Layout)
- **Drag‑and‑drop oszlopok és sorok**: Mezőket húzva azonnal létrehozhatsz két‑ vagy többoszlopos sorokat. Ideális például név–e‑mail egysoros elhelyezéséhez.
- **Oszlopméretezés “fogd‑és‑vidd” módon**: Az oszlopok szélességét vizuálisan állíthatod, így könnyű az arányokat finomítani.
- **Sorok és oszlopok rendezése**: Fogd meg a sort, és vidd át feljebb vagy lejjebb. Üres oszlopszakaszokat is felvehetsz vagy törölhetsz, hogy tiszta legyen a rácsszerkezet.
- **Reszponzív alapok**: A többoszlopos elrendezés mobilon oszlopösszeomlással működik. Ha a téma is jól kezeli, a sorok logikusan egymás alá rendeződnek kisebb kijelzőn.

### Stílusok a szerkesztőben (Styles)
- **Globális űrlapstílusok**: Határozd meg egyszer a háttérszínt, kereteket, betűszíneket, távolságokat, gombstílusokat és az üzenetek (siker/hiba) megjelenését. Ezek minden űrlapra érvényesek.
- **Űrlapszintű testreszabás**: Ha egy adott űrlapot külön akarsz formázni, űrlapszinten felülírhatod a globális beállításokat.
- **Mezőszintű finomhangolás**: Egyes mezőknél külön állíthatsz szélességet, magasságot, szöveg‑ és keretszínt, margókat/paddinget. Így a kritikus mezők kiemelhetők.
- **Átlátható stílus‑hierarchia**: A kezelőfelületen külön lapfüleken találsz beállításokat, mint a **Form Styles**, **Default Field Styles**, **Field Types Styles** és **Error Styles**. A hierarchia világos: a globális stílusok az alap, amit űrlapszinten és mezőszinten felülírhatsz.
- **Kódmentes használat + egyedi CSS lehetőség**: A legtöbb esetben nincs szükség CSS‑re, de haladó esetekhez adhatsz meg saját szabályokat.

### Kompatibilitás és együttműködés
- **Téma‑öröklés kezelése**: Ha a téma erős stílusai felülírnak, kikapcsolhatod a Ninja Forms “Opinionated Styles” opcióját (állítsd “None”-ra), így a Layout & Styles beállításai érvényesülnek.
- **Kiegészítő támogatás**: A Layout & Styles figyel a népszerű mezőtípusokra és más Ninja Forms kiegészítőkre (pl. többlépcsős űrlapok), folyamatos hibajavításokkal.

## Gyakorlati példák

- **Két oszlopos kapcsolatfelvételi űrlap**: Az első sorban balra “Név”, jobbra “E‑mail”. A második sor teljes szélességen “Üzenet”. A gomb a második sor jobb oldalára húzva, egysoros elhelyezéssel.
- **Egysoros feliratkozó sáv**: Balra “Keresztnév”, középen “E‑mail”, jobbra “Feliratkozom” gomb. A három oszlop szélességét arányra állítod (pl. 1/3–1/3–1/3), kisebb képernyőn automatikus egymás alá rendeződéssel.
- **Regisztráció márkázott stílussal**: Globális stílusokban beállítod a márkaszíneket és betűtípus‑méreteket, űrlapszinten kicsit nagyobb gombot és kontrasztosabb hibaszíneket adsz, a “Jelszó” mezőt pedig külön margóval emeled ki.

## Telepítés és hol találod

1. Telepítsd és aktiváld a Ninja Forms alapbővítményt.
2. Vásárlás után töltsd fel a Layout & Styles kiegészítőt (Bővítmények > Új hozzáadása > ZIP feltöltése), majd aktiváld.
3. Globális stílusok: Ninja Forms menüben a **Styling** almenü.
4. Űrlapon belül: az űrlap‑szerkesztőben éred el a **Layout** (sorok/oszlopok) és **Styles** (űrlap/mező) beállításokat.

## Tippek és korlátok

- Ha a beállított stílusok nem látszanak, kapcsold az “Opinionated Styles” opciót “None”-ra a Ninja Forms beállításoknál.
- A mobil‑reszponzivitás a témától is függ. Olyan témát használj, amelyik jól kezeli a többoszlopos rács mobilos összeomlását.
- Haladó finomhangolásnál használj egyedi CSS‑t:

```
/* Példa: űrlap gombjának finomhangolása */
.nf-form-content .nf-field .ninja-forms-field[type="submit"] {
  border-radius: 6px;
  letter-spacing: 0.4px;
}
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: percek alatt kialakítható elrendezés és dizájn, kódolás nélkül.
- **Költséghatékonyság**: kevesebb fejlesztői munka, gyorsabb iteráció.
- **Egységes arculat**: globális stílusokkal minden űrlap azonos vizuális nyelvet használ.
- **Kezelhetőség**: átlátható stílus‑hierarchia, amit bárki megért és vissza tud állítani.

## Célközönség

- **Webhelytulajdonosok és marketingesek**: gyors, kódmentes űrlap‑csinosításra.
- **Ügynökségek és webfejlesztők**: standardizált, skálázható űrlap‑stíluskezelés, kevesebb egyedi CSS‑sel.
- **Tartalomkezelők**: biztonságos, vizuális szerkesztés, minimális hibalehetőséggel.

## Rendszerkövetelmények, licenc, fejlesztő

- **Függőség**: a kiegészítő a Ninja Forms alapszoftverrel működik; aktiválás után jelennek meg a funkciók az űrlap‑szerkesztőben.
- **Licencelés**: külön megvásárolható, vagy tagsági csomag része. Az előfizetés automatikusan megújul; lemondás után a bővítményt tovább használhatod, de frissítés és támogatás nélkül. Elérhető pénzvisszatérítési garancia.
- **Fejlesztő**: Saturday Drive.

## Összegzés

A Layout & Styles a Ninja Forms vizuális elrendezés‑ és stíluseszköze: villámgyorsan hozhatsz létre professzionális, többoszlopos, reszponzív és márkához illő űrlapokat. Kódmentes, mégis rugalmas – amikor kell, egyedi CSS‑sel tovább finomíthatod. Ha pontos kontrollt szeretnél az űrlapjaid kinézete felett, ez a kiegészítő neked készült.