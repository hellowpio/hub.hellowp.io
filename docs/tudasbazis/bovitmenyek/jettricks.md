---
title: "JetTricks"
description: "Prémium vizuális effekt- és mikrointerakció-bővítmény Elementorhoz: hotspotok, tooltipek, parallax, sticky oszlop, unfold/read more és részecskeháttér – kódolás nélkül."
sidebar_label: "JetTricks"
---

## Mi ez és milyen problémát old meg?

A JetTricks a Crocoblock által fejlesztett vizuális effektcsomag az Elementorhoz. Segítségével kódolás nélkül adhatsz a tartalmaidhoz jól irányított mikrointerakciókat és látványelemeket. Olyan tipikus gondokat old meg, mint a túl hosszú oldalak (tartalomadagolás), a képeken jelentkező információs túlterhelés (kontextuális magyarázatok), az elvesző CTA-k (ragadós oszlopok) vagy az élettelen hero szekciók (parallax és részecskeháttér).

## Fő funkciók és működésük

- **HotSpots (képi hotspotok)**  
  Kattintható jelölőket helyezhetsz képekre. Minden ponthoz leírás, link és animált megjelenés tartozhat. Ideális termékfotók és helyszín‑térképek részletezésére. A tooltipek interaktívak is lehetnek.

- **Tooltip (eszköztippek)**  
  Bármely Elementor‑elemhez adhatsz lebegő magyarázatot. Szabadon állítható a pozíció, az eltartás, a távolság és az animáció. A tartalom akár sablonból is érkezhet, így ismétlődő mintákhoz egységes tooltipeket használhatsz.

- **Sticky Column (ragadós oszlop)**  
  Görgetés közben a kijelölt oszlop a nézetben marad. Beállíthatod a felső/alsó távolságot, a z‑indexet, és hogy mely eszközökön legyen aktív. Opcionálisan “scroll until end” viselkedéssel a szakasz végéig kíséri a felhasználót.

- **Read More (szakaszok fokozatos megjelenítése)**  
  Elrejti az előre megjelölt szekciókat, és egy “Tovább” gombbal tárja fel őket. Választhatsz, hogy egyszerre vagy lépésenként nyíljon‑e ki a tartalom, és többféle animációból állíthatsz. Megnyitás után nem csukódik vissza (eltér az Unfoldtól).

- **Unfold (összecsukható tartalom)**  
  Hosszabb szövegeket vagy médiát húzhatsz össze egy fix zárt magasság alá. Testreszabható az elválasztó (pl. finom maszkolás), az időzítés és az easing görbe. Automatikus visszacsukás is kérhető – ez valódi toggle élményt ad.

- **Parallax (parallaxis‑görgetés)**  
  Oszlopon vagy widgeten finom mélységérzetet hoz létre. Állítható a sebesség, az irány (invert) és az eszközönkénti működés, így mobilon visszafogott, desktopon látványos lehet.

- **Section Particles (részecske‑háttér)**  
  Szekciókba animált részecskés hátteret illeszthetsz JSON beállítás alapján. A tipikus paraméterek a szerkesztőből finomhangolhatóak; a látvány könnyen márka‑színekre szabható.

- **Satellite (dekor “alréteg”)**  
  Extra, rétegzett szöveget vagy képet adhatsz bármely widget elé/mögé. Címsorok és dobozok karakteres kiemelésére jó, miközben külön szabályozhatod a pozíciót, a tipográfiát és a kontrasztot.

## Gyakorlati példák

- **Termékbemutató**: egy sneaker fotóján HotSpotok jelölik a talpanyag, szellőzés és ár részleteit; a tooltip rövid leírást és linket ad a kosárhoz.
- **Hosszú blogcikk**: a bevezető után Read More leplezi a fejezeteket; a cikk közepén Unfolddal rejted a mellékes táblázatot, amit szükség szerint nyit az olvasó.
- **Konverziós landing**: Sticky Column tartja szem előtt a CTA‑t és az árkártyát, miközben a tartalom gördül.
- **Hero szakasz**: Parallax mozgatja a háttér grafikát, míg a Section Particles finom mozgással tölti meg az üres teret.
- **Tipográfiai kiemelés**: egy H2 mögé Satellite réteg kerül nagy, halvány márkaszóval – erős vizuális hierarchia kódolás nélkül.

## Telepítés és használat

- **Előfeltétel**: Elementor telepítve és aktív.
- **Hol találod?** Az Elementorban az adott szekciót/oszlopot/widgetet kijelölve az Advanced > JetTricks panelen kapcsolhatod be az effekteket.
- **Lépések általánosan**:  
  1. Válaszd ki az elemet.  
  2. Nyisd meg az Advanced > JetTricks panelt.  
  3. Kapcsold be a kívánt hatást, állítsd a viselkedést és a stílust.  
  4. Előnézet több eszköznézetben, majd finomhangolás.
- **JetTricks Vezérlőpult**: a bővítmény saját dashboardján egyes funkciók külön engedélyezhetők/tilthatók a jobb teljesítmény és rend érdekében.

### Példa: egyszerű részecskeháttér

```json
{
  "particles": { "number": { "value": 60 }, "shape": { "type": "circle" }, "move": { "speed": 1.2 } },
  "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } }
}
```

Illeszd a JSON‑t a Section Particles mezőbe az érintett szekció Advanced > JetTricks paneljén.

## Előnyök és értékajánlat

- **Kódolás nélkül**: összetett mikrointerakciók egy‑két kattintással.  
- **Jobb UX és fókusz**: a tartalom adagolható, a fontos elemek a látótérben maradnak.  
- **Reszponzív kontroll**: eszközönként külön viselkedés és teljesítmény‑kiegyensúlyozás.  
- **Időmegtakarítás**: sablonozható tooltipek és visszafogottan konfigurálható effektek.  
- **Teljesítmény‑tudatos**: csak azt a funkciót kapcsolod, amire szükség van.

## Célközönség

- **Webdesignerek és fejlesztők**: gyors vizuális prototípusok, kevesebb egyedi kód.  
- **Marketingesek és ügynökségek**: konverziós fókusz (Sticky Column, Read More), gyors A/B tesztek.  
- **Webshopok**: részletes termékfotók HotSpots‑szal, tiszta információ‑átadás.  
- **Tartalomgazda oldalak**: hosszú cikkek olvashatóbbá tétele Unfold/Read More kombinációval.

## Licencelés és csomagok

A JetTricks önálló előfizetéssel és teljes portfóliót tartalmazó csomagban is elérhető. Az aktuális árakat és opciókat a hivatalos felületeken találod.

## Biztonság és karbantartás

- A bővítményben publikált sebezhetőségeket a fejlesztő javította; mindig frissíts a legújabb stabil kiadásra.  
- **Best practice**:  
  - Használj mértékkel animációkat – a túlzás rontja a teljesítményt és az olvashatóságot.  
  - Tesztelj mobilon, tablet‑ és desktop‑nézetben is; több opció eszköz‑specifikusan állítható.  
  - Sablonizáld a tooltipeket ismétlődő információkhoz.  
  - Kövesd a kiadási jegyzékeket, és verziófrissítés után ellenőrizd a kulcsoldalakat.

## Összegzés

A JetTricks célzott, szerkesztőbarát effektkészlet az Elementorhoz, amellyel a hosszú tartalmakat jól adagolhatod, a CTA‑kat fókuszban tarthatod, a statikus elrendezéseket pedig életre keltheted. Ha gyorsan, kódolás nélkül szeretnél profi mikrointerakciókat és látványt, ez a bővítmény neked való.