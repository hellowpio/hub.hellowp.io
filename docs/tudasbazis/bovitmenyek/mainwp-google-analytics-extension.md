---
title: "MainWP Google Analytics Extension"
description: "MainWP-kiegészítő, amellyel a Google Analytics (GA4) adatait több WordPress-webhelyről egy központi MainWP Dashboardon láthatod."
sidebar_label: "MainWP Google Analytics Extension"
---

## Mi ez és milyen problémát old meg?

A MainWP Google Analytics Extension egy **MainWP-bővítmény**, amellyel a **GA4-analitikát** több WordPress „Child” oldalról **egy helyen**, a MainWP Dashboardon nézheted át. Nem kell több GA-fiókba és propertybe külön-külön belépned: a kulcsmutatók, grafikonok és trendek **központosítva** jelennek meg. Ez időt takarít meg, csökkenti a kontextusváltást, és felgyorsítja a döntéshozatalt, legyen szó ügynökségi riportolásról vagy napi monitorozásról.

## Hogyan működik röviden?

1. **Követelmények**: MainWP Dashboard + Child plugin, Pro előfizetés, GA4-fiók.
2. **Kapcsolódás GA-hoz**: a Google Cloud Console-ban létrehozol egy **Service Accountot**, letöltöd a **JSON kulcsot**.
3. **Hozzáférés adása**: a Service Account e-mailjének **Viewer** jogosultságot adsz minden érintett **GA4 propertyhez**.
4. **JSON feltöltése**: a MainWP Google Analytics bővítményben feltöltöd a JSON-t.
5. **Property-hozzárendelés**: a GA4-propertyket **párosítod** a MainWP-ben kezelt Child site-okkal.
6. **Használat**: a GA4-adatok megjelennek a **MainWP Overview** oldalon és az egyes **site-áttekintőkben**, valamint beilleszthetők a **Pro Reports** riportjaidba.

## Fő funkciók részletesen

- **GA4 mutatók és grafikonok**  
  Láthatod többek között a **Views** és **Views by Page** értékeket (oldalmegtekintések összesen és oldalak szerint), a **Users** és **New Users** számát (teljes és új felhasználók), a **Users by Device** és **Users by Country** bontásokat (eszköz- és ország szerinti eloszlás), az **Average Engagement Time** mutatót (átlagos elköteleződési idő), valamint a **Sessions by Source** nézetet (munkamenetek forrás szerint). Ezek együtt gyors képet adnak a forgalomról, minőségről és csatornák teljesítményéről.

- **Központi áttekintő widgetek**  
  A GA4-adatok a MainWP **Overview** oldalán és az egyes **Child site**-ok áttekintő felületén jelennek meg. Több grafikon és kártya segít a trendek és anomáliák azonnali észlelésében, például hirtelen forgalomcsökkenés vagy csatornaváltás esetén.

- **Több GA-fiók és property kezelése**  
  Egyszerre több **Google Analytics-fiókot** is kapcsolhatsz, és rugalmasan párosíthatod a propertyket a webhelyekhez. Így ügynökségi vagy multi-brand környezetben is átlátható az analitika.

- **Riportolás Pro Reports-szal**  
  A bővítmény adatai **beépíthetők az ügyfélriportokba**. A megfelelő tokenekkel automatizált, márkázott PDF/HTML riportokat készíthetsz, amelyek tartalmazzák a kiválasztott időszak fő GA4-mutatóit.

- **MainWP-integráció natívan**  
  A felület és a jogosultságok a megszokott MainWP-élményt nyújtják: központi beállítások, site-szintű nézet, áttekintő widgetek, riport-összefűzés.

## Gyakorlati példák

1. **Ügynökségi gyors áttekintés**  
   Minden hétfőn megnyitod a MainWP Overviewt, ahol a 30 kezelt site trendjei egyszerre látszanak. Egy grafikon kiugró visszaesést mutat az egyik projektnél a „Sessions by Source” nézetben – azonnal látod, hogy a fizetett forgalom esett vissza, és célzottan lépsz.

2. **Új ügyfél onboar¬ding**  
   Új webhely érkezik: hozzáadod a Service Accountot „Viewer”-ként a propertyhez, feltöltöd a JSON-t, párosítod a Child site-tal. Perceken belül megjelennek a GA4-kártyák, és a következő havi **Pro Reports** automatikusan beemeli az adatokat.

3. **In-house e‑commerce monitorozás**  
   A márkaoldalaknál a **Users by Device** bontásban tabletforgalom-csökkenést észlelsz. Ellenőrzöd a friss UI‑változásokat és visszagörgetsz a **Views by Page** grafikonokon – kiderül, hogy a checkout lépés mobilon rendben, tableten hibás CSS-t kapott.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs többé sokszoros belépés és property-váltogatás.
- **Gyors döntéshozatal**: a legfontosabb GA4‑mutatók egy képernyőn, azonnali összehasonlítás több site között.
- **Egységes riportolás**: automatizált, márkázott ügyfélriportok, kevesebb manuális összeállítás.
- **Skálázhatóság**: több fiók, több property, növekvő projektportfólió mellett is átlátható marad.
- **Kevesebb hiba**: központi jogosultságkezelés és egységes konfiguráció.

## Kinek ajánlott?

- **Digitális ügynökségeknek**: sok site központi monitorozása és riportolása.
- **Szabadúszóknak**: gyors állapotkép és egyszerű ügyfélkommunikáció.
- **In-house marketing/IT csapatoknak**: több márkaoldal, gyors trendfigyelés és hibakeresés.

## Követelmények és beállítási áttekintés

- **Szükséges**: MainWP Dashboard és Child plugin, Pro előfizetés, GA4-fiók, Google Analytics API, Service Account **JSON** kulcs.
- **Lépések**:
  - Service Account létrehozása és JSON kulcs generálása.
  - Service Account e-mail felvétele **Viewer** jogosultsággal az összes érintett GA4 propertyhez.
  - JSON feltöltése a MainWP Google Analytics bővítménybe.
  - GA4-propertyk hozzárendelése a Child site-okhoz.
- **Megjegyzés**: nagyobb hitelesítési változás vagy frissítés után előfordulhat, hogy **újra kell csatlakoztatnod** a GA-fiókot.

## Gyakori buktatók és gyors megoldások

- **Nem látszik egy property**: ellenőrizd, hogy a Service Account megkapta-e a **Viewer** jogosultságot az adott propertyn.
- **JSON-hiba**: csak **Service Account** JSON használható, ne OAuth kliens JSON. Győződj meg róla, hogy a szükséges API-k engedélyezve vannak.
- **Adatfrissítés elmarad**: csatlakozást ellenőrizd, szükség esetén vedd fel újra a GA-fiókot a bővítményben.

## Tippek a mindennapi használathoz

- Állíts be **összehasonlító időszakot** (előző hét/hónap), hogy a trendek egyből látszódjanak.
- A **Sessions by Source** grafikonon gyorsan lásd, mely csatorna igényel beavatkozást.
- Használd a **Pro Reports**-ot sablonokkal: a GA4-kártyákat kombináld SEO, uptime és frissítési adatokkal egy egységes riportban.
- A **Users by Device** és **Average Engagement Time** együtt segít UX-problémákat célzottan azonosítani eszközök szerint.

Ezzel a bővítménnyel a GA4-adatok egy kézre álló, MainWP-alapú irányítópulton találkoznak, hogy kevesebb kattintással, gyorsabban hozz jó döntéseket több webhely kezelésénél.