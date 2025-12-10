---
title: "Divi Responsive Helper"
description: "Reszponzív finomhangoló eszköztár a Divihez: több mint 50 célzott beállítás töréspontokhoz, tipográfiához, rácselrendezéshez és menükhöz – kódolás nélkül."
sidebar_label: "Divi Responsive Helper"
---

## Mi ez, és milyen problémát old meg?

A **Divi Responsive Helper** egy Divihez készült bővítmény, amely egy átfogó, reszponzív eszköztárat ad a kezedbe. Több mint 50 beállítással egészíti ki a Divit, hogy pontosan irányítsd:
- a **töréspontokat** (breakpoints),
- a **globális tipográfiát**,
- a **rácselrendezést és oszlopsorrendet**,
- a **menük** viselkedését,
- és a **szerkesztési élményt**.

A cél: gyors, kódmentes finomhangolás mobilra, tabletre és asztali nézetre, konzisztensen az egész webhelyen. A plugin zökkenőmentesen illeszkedik a Divi Theme Options felületéhez és magukhoz a modulokhoz. A jelenlegi Divi-építési folyamataidba azonnal beépíthető, és a Divi újabb főverzióival is kompatibilis.

## Hogyan működik?

Telepítés után a WordPress Vezérlőpultban a **Divi > Theme Options** alatt megjelenik a „Divi Responsive Helper” fül. Itt kapcsolod be a fő funkciócsoportokat (például Preview/Editor, Custom Breakpoints, Typography, Column Stacking, Menu, Misc).  
Ha egy funkciót aktiválsz, a vonatkozó **Divi modulokban** új, eszközönkénti vezérlők jelennek meg. A globális beállítások alapértékként érvényesek, de bármelyik modulban **felülírhatod** őket.

## Fő funkciók részletesen

### Előnézeti méretek és szerkesztési élmény
- Adj meg **egyedi előnézeti méretet** (gombok és tetszőleges pixelérték) a Visual Builderben, és lásd a **viewport** aktuális szélességét/magasságát a szerkesztés közben.
- Kapcsold be, hogy a Design fül **reszponzív fülei automatikusan nyíljanak** meg, így sorban állíthatod a Desktop/Tablet/Phone értékeket.
- Szükség esetén a Divi alap „Responsive Views” nézeteit **ki is kapcsolhatod**, és használhatod a sajátokat.

### Breakpointok és media query-k
- A Divi alap töréspontjai **globálisan átállíthatók** (például tablet határ iPadhez igazítva), és **másodlagos töréspontokat** is hozzáadhatsz precízebb kontrollhoz.
- Kapsz **Custom CSS Media Queries** mezőket tipikus eszköztartományokra. Ide elég a CSS-t beillesztened, a bővítmény a megfelelő @media feltételekbe csomagolja.

```css
/* Tablet finomhangolás – a plugin a megfelelő media query-be teszi */
.et_pb_post { margin-bottom: 3rem; }

/* Kisebb telefonok – kisebb alap betűméret */
body { font-size: 15px; }
```

### Globális tipográfia
- Állíts be **globális betűméreteket** H1–H6 és bekezdés szinten, **eszközönként**. Ezek lesznek az alapértékek, amelyeket modulonként bármikor módosíthatsz.
- Kezeld központilag a **sorközt (line-height)** szintén H1–H6 és bekezdés szinten, eszközönként.
- Kapcsold be a **Widow Fixer** funkciót, amely automatikusan kezeli az „árva szavakat” címekben és bekezdésekben, választható küszöbértékekkel. Oldalakat vagy elemeket ki is zárhatsz belőle.

### Oszlopok és rácselrendezés
- Szabályozd a **sorok oszlopainak sorrendjét** mobilon (stacking order), illetve hogy **hány oszlop maradjon egymás mellett** adott eszközön (stacking number). Működik speciális szekciókban is, és kezeli az eltérő **gutter** értékeket.
- Adj meg a **Blog modulhoz** oszlopszámot eszközönként (ami alapból hiányzik a Diviből).
- A **Galéria/Portfólió/Woo termék** moduloknál állítsd be, **hány elem jelenjen meg** és hány oszlopban, külön Desktop/Tablet/Phone nézetre.

### Menü és navigáció
- A WordPress **Menük** felületén eszközönként **megjelenítheted vagy elrejtheted** az egyes menüpontokat. A Divi **Menu moduljában** akár **másik menüt** is választhatsz mobilra.
- Fejlettebb **mobilmenü**: összeomló almenük, ikon- és háttérszínek, külön mobil menü breakpoint, görgethető menümagasság, és „egyik nyílik–másik zár” viselkedés.
- A **“Vissza a tetejére”** gomb láthatóságát eszközönként állíthatod.

### Egyéb hasznos UX megoldások
- **Vízszintes görgetés** megakadályozása mobilon.
- **Pinch‑zoom engedélyezése** (alapból a Divi tiltja).
- **Eltérő logó** használata tablet/mobil nézetben az alapértelmezett fejlécben.
- **Android Chrome címsor** színezése.
- Modul-specifikus reszponzív viselkedések, pl. **Tabs** (függőleges/horizontális elrendezés eszközönként), **Blurb** (ikon/kép áthelyezése mobilon felülre).

## Gyakorlati példák és rövid workflow

- Üzleti oldalon a **Woo termékrács**: állíts 2 oszlopot tableten és 1-et telefonon, és korlátozd az **elemszámot**, hogy gyorsabban fusson és szellősebb legyen.
- **Blog**: adj 3 oszlopot desktopon, 2-t tableten, 1-et mobilon; közben a Global Typography-val biztosíts egységes címméretet.
- **Navigáció**: rejts el hosszú menüpontokat mobilon, és válassz egy **rövidebb, dedikált mobilmenüt**.
- **Back to top**: kapcsold be csak telefonon a hosszú oldalakhoz.

Példa beállítási menet:
1. Theme Options > Divi Responsive Helper > **Typography**: állítsd be a H1–H6 és bekezdés méretét/sorközét Desktop/Tablet/Phone nézetre.
2. **Custom Breakpoints**: igazítsd a Desktop/Tablet és Tablet/Phone váltást a cél-eszközeidhez (pl. tablet 1024 px körül).
3. Modulok (Blog/Galéria/Portfólió/Woo): a **funkció bekapcsolása után** megjelennek az eszközönkénti oszlopszám/elemszám opciók.
4. **Column Stacking**: állítsd be az oszlopok sorrendjét és számát mobilon, hogy a fontos tartalom kerüljön feljebb.

Megjegyzés: az **Automatikus reszponzív fülnyitás** funkciót csak célzott munkához kapcsold be, mert a nyitva maradó fülek óvatlan szerkesztésnél eltéréseket okozhatnak.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kevesebb egyedi CSS, gyorsabb beállítások, kevesebb körözés a Builderben.
- **Konzisztencia**: központi tipográfia és töréspontok, projektszintű egységesség.
- **Jobb UX mobilon**: finoman szabályozott rács, menü és interakciók.
- **Kevesebb hiba**: a vizuális előnézet és a pontos viewport-kijelzés csökkenti a vaktesztelést.
- **Rugalmas kontroll**: minden globális érték modulonként felülírható.

## Kinek ajánlott?

- **Divi építőknek és ügynökségeknek**, akik skálázható, konzisztens reszponzív megoldást keresnek.
- **Webshopoknak**, ahol a Woo termékrács és kategóriaoldalak mobiloptimalizálása kritikus.
- **Tartalom‑intenzív oldalaknak** (blogok, magazinok), ahol fontos az egységes tipográfia és az elemek számának eszközönkénti szabályozása.
- **Kezdőknek**, akik szeretnének CSS nélkül precíz reszponzív irányítást.
- **Haladó felhasználóknak**, akik gyorsítani akarják a munkát és tisztábban kezelni a Divi korlátait.

Összességében a Divi Responsive Helper egy olyan, Divibe belesimuló „reszponzív vezérlőpult”, amellyel gyorsabban, biztonságosabban és következetesebben alakíthatod a webhelyedet minden képernyőméreten – kódolás nélkül, mégis profi kontrollal.