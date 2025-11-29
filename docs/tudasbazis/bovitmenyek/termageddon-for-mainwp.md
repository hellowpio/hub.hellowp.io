---
title: "Termageddon for MainWP"
description: "Ingyenes MainWP-kiegészítő, amellyel a Termageddon szabályzatgenerátort a MainWP irányítópultból integrálhatod és kezelheted, több WordPress-oldal jogi oldalainak központi létrehozásához és naprakészen tartásához."
sidebar_label: "Termageddon for MainWP"
---

## Mi ez és milyen problémát old meg?

A **Termageddon for MainWP** egy ingyenes kiegészítő, amely összeköti a Termageddon jogi-szabályzat generátorát a **MainWP Dashboarddal**. Ha sok WordPress-webhelyet kezelsz, ezzel egyetlen központból hozhatod létre és tarthatod karban az ügyfelek **Privacy Policy**, **Terms of Service**, **Disclaimer**, **Cookie Policy** oldalait, valamint a **Cookie Consent** megoldást. A bővítmény arra készült, hogy levegye rólad a folyamatos jogszabálykövetés terhét, és skálázhatóvá tegye a megfelelőség-kezelést.

## Hogyan működik röviden?

- A MainWP-ben összekötöd a Termageddon-fiókoddal egy **API-kulccsal**.
- A kiegészítő új oldalt hoz létre a kiválasztott Child Site-on, majd beilleszted a Termageddon által adott **embed kódot**.
- A szabályzatok tartalmát a Termageddon szolgáltatja és frissíti; a frissítések automatikusan megjelennek az oldalakon.
- A MainWP irányítópultban **státuszokkal** és egy **Updates Overview** widgettel látod, hol szükséges beavatkozás.

## Fő funkciók, részletesen

- **Központi áttekintés és státuszkezelés**  
  A MainWP > Extensions > Termageddon felületen egyszerre látod minden Child Site jogi oldalainak állapotát. Szűrhetsz például **Active**, **Update Required**, **Incomplete**, **Pending Invite** szerint, így azonnal priorizálhatod, hol van teendő.

- **Oldalgenerálás és beágyazás**  
  A kiegészítővel egy kattintással létrehozol egy új oldalt a kiválasztott webhelyen. Ide illeszted be a Termageddon-fiókodból kapott **embed kódot**, amely megjeleníti a szabályzatot és biztosítja a jövőbeni tartalmi frissítéseket.

- **Automatikus naprakészen tartás**  
  Amikor változnak az adatvédelmi jogszabályok (pl. GDPR, CPRA), a Termageddon frissíti a közzétett szabályzatok tartalmát. A MainWP-ben az **Updates Overview** widget jelzi, hány webhely vár figyelmet, így nem maradsz le semmiről.

- **Támogatott oldaltípusok**  
  Kezelheted a **Privacy Policy**, **Terms of Service/Use**, **Disclaimer**, **Cookie Policy** oldalakat, és a Termageddonhoz tartozó **Cookie Consent** megoldást is.

- **API-kapcsolat és jogosultságok**  
  Az összekötés **API-kulccsal** történik. A kiegészítő a Termageddon API-ját használja, a tartalom pedig beágyazással jelenik meg az ügyféloldalakon. A MainWP önhostolt megközelítése különösen fontos adatvédelmi környezetben.

## Telepítés és beállítás

1. A MainWP Dashboardban nyisd meg: Extensions > Install Extensions, majd telepítsd és aktiváld a **Termageddon for MainWP** kiegészítőt.  
2. Lépj az Extensions > Termageddon menübe, válaszd a **Link with API Key** opciót, és add meg a Termageddon-fiókodban generált **API-kulcsot**.  
3. Válassz egy Child Site-ot, kattints az **Add Page** gombra, adj meg egy oldalcímet (pl. Adatkezelési tájékoztató), és illeszd be a Termageddon **embed kódját**.  
4. Mentsd és publikáld az oldalt. A továbbiakban a tartalom automatikusan frissül.

Példa (illusztráció) az embed beillesztésére:
```html
<!-- Illusztráció: illeszd be a Termageddon fiókodban kapott embed kódot -->
<div data-termageddon-embed="POLICY_ID"></div>
```

## Gyakorlati példák

- **Ügynökségi skálázás**: 40 ügyféloldalad van. A kiegészítővel 1-2 óra alatt mindegyikre létrehozod a Privacy Policy és Cookie Policy oldalakat, beilleszted az embedet, és kész. A jövőben elég a MainWP-ben ránézni az **Updates Overview** widgetre, hogy lásd, kell-e lépned.
- **Jogszabályváltozás**: Változik egy állami adatvédelmi törvény. A Termageddon frissíti a tartalmat; te a MainWP-ben látod, mely oldalak jelzik a változást, és szükség esetén kommunikálod az ügyfeleknek.
- **Új ügyfél onboarding**: Új site indul. A Termageddon kérdőív alapján létrejönnek a szabályzatok; a MainWP-ből 2-3 kattintással létrehozod és publikálod az oldalakat, egységes név- és menüstruktúrával.

## Előnyök és értékajánlat

- **Idő- és költségmegtakarítás**: Nem kell minden site-ra külön belépni, copy-paste-elni és manuálisan frissíteni.  
- **Kockázatcsökkentés**: A szabályzatok naprakészek maradnak; kisebb az elavult vagy hiányzó jogi tartalmakból adódó kockázat.  
- **Egységes minőség**: Minden ügyféloldalon következetes, dokumentált, azonos forrású tartalom.  
- **Jobb láthatóság**: Státuszszűrés és központi áttekintés, így nem marad rejtve egyetlen problémás oldal sem.

## Célközönség

- **WordPress ügynökségek és webmesterek**, akik több site-ot kezelnek és egységes, skálázható megfelelőség-kezelést akarnak.  
- **Jogilag érzékeny iparágak** (e-kereskedelem, egészségügy, oktatás), ahol kritikus a naprakész adatkezelési dokumentáció.  
- **IT- és marketingcsapatok**, akik SLA-kat és belső folyamatokat szeretnének egyszerűsíteni.

## Követelmények és licencelés

- A kiegészítő **ingyenes**, de használatához aktív **Termageddon-előfizetés** és **API-kulcs** szükséges.  
- A Termageddon licenc tipikusan site-onként értendő, és tartalmazza a Privacy Policy, Terms & Conditions, Disclaimer, EULA, Cookie Policy, valamint a Cookie Consent megoldást, automatikus frissítésekkel és értesítésekkel.  
- Szükséged lesz egy működő **MainWP Dashboardra** és a hozzá kapcsolt Child Site-okra.

## Adatvédelem

A MainWP önhostolt és adatvédelmi fókuszú megoldás. A Termageddon integráció **API-n keresztül** működik; a szabályzattartalom **beágyazással** jelenik meg, így a frissítések központilag érkeznek anélkül, hogy kézzel módosítanod kellene a tartalmat.

## Kapcsolódó eszközök (fontos megkülönböztetés)

Ne keverd össze a MainWP-kiegészítőt a külön telepíthető **Termageddon: Cookie Consent & Privacy Compliance** WordPress-bővítménnyel.  
- A **Termageddon for MainWP** a központi menedzsmentet adja ügynökségi nézőpontból.  
- A külön **cookie consent** bővítmény az egyes site-okon segít a banner implementálásában és célzásában.

## Döntési segéd: Neked való?

- Több site-ot kezelsz, és szeretnéd a jogi oldalakat központból, egységesen, automatikus frissítésekkel működtetni?  
- Fontos számodra a kockázat- és időcsökkentés, valamint az átlátható státuszkezelés?  
- Elfogadható, hogy az automatikus frissítésekhez külső szolgáltatás licencét használod?

Ha igen, a Termageddon for MainWP jelentősen leegyszerűsíti és professzionális szintre emeli a megfelelőség-kezelésedet.