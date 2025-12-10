---
title: "MainWP Sucuri Extension"
description: "Ingyenes MainWP-kiegészítő, amellyel a Sucuri SiteCheck távoli vizsgálóját integrálva kézi kártevő- és blacklist‑ellenőrzést futtathatsz a kezelt WordPress‑oldalaidon."
sidebar_label: "MainWP Sucuri Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Sucuri Extension** egy könnyű, ingyenes kiegészítő a MainWP központi menedzsment rendszerhez. Segítségével egy helyről indíthatsz **kézi kártevő‑ és blacklist‑ellenőrzést** a kezelt WordPress‑oldalakon a **Sucuri SiteCheck** távoli szkennerével. Nem kell minden oldalra belépned, nem kell külön Sucuri‑fiók vagy ‑bővítmény: pár kattintással kapsz egy **gyors állapotképet** a leggyakoribb fertőzési jelekről és tiltólistás státuszról.

## Hogyan működik röviden?

- A MainWP ökoszisztéma részeként egy külön, tiszta WordPress‑en fut a **MainWP Dashboard**.  
- A kezelt oldalakon aktív a **MainWP Child** bővítmény a kapcsolat fenntartásához.  
- A Sucuri **SiteCheck távoli (front‑end) szkenner** fut: külső nézőpontból vizsgál, nem fér hozzá a szerver fájlrendszeréhez.  
- A használat egyszerű: `MainWP > Extensions > Sucuri`, majd a kiválasztott gyerekoldalnál `Scan Now`.

## Fő funkciók részletesen

### Kézi webhelyvizsgálat Sucuri SiteCheck-kel
Egyetlen kattintással lefuttathatsz egy távoli ellenőrzést, ami többek közt:
- **rosszindulatú kódokat és gyanús JavaScripteket** keres,
- **drive‑by letöltéseket és kétes átirányításokat** derít fel,
- **„blackhat SEO” spam** nyomait vizsgálja,
- jelzi az **elavult komponenseket**, amelyek kockázatot jelenthetnek.

A vizsgálat eredménye egy áttekinthető riportban jelenik meg a MainWP pultban.

### Blacklist-monitorozás
A bővítmény több ismert szolgáltató tiltólistáján is ellenőrzi a domaint. Ha egy oldal **feketelistára kerül**, azonnal láthatod, és megkezdheted a helyreállítást.

### Jelentéskezelés
A korábbi vizsgálati **riportok megőrzése** segít az állapotváltozások követésében, auditban és ügyfélkommunikációban. A régi jelentéseket egyenként vagy **tömegesen törölheted**, hogy tisztán tartsd a pultot.

### Emlékeztetők
Beállíthatsz **emlékeztetőket**, ha egy oldalt régóta nem szkenneltél. Időzítési opciók: például 1 nap, 1 hét vagy 1 hónap. Így nem felejted el a karbantartási rutin részeként lefuttatni az ellenőrzést.

### SSL tanúsítvány ellenőrzése
A vizsgálat indításakor kérheted az oldal **SSL tanúsítványának verifikálását** is, így gyorsan észreveszed a lejárt vagy hibás certifikátokat.

## Gyakorlati példák

- **Frissítés előtti/utáni ellenőrzés:** mielőtt pluginokat frissítesz, lefuttatsz egy szkent, majd frissítés után megismétled. Ha kockázat vagy kompromittálódás jele látszik, azonnal léphetsz.
- **Incidensgyanú vizsgálata:** gyanús átirányítás, SEO‑spam vagy hirtelen rangvesztés esetén egy kattintással ellenőrzöd a domaint és a fertőzésnyomokat.
- **Blacklist‑riasztás:** forgalomvisszaesésnél azonnal megnézed, szerepel‑e az oldal tiltólistán; ha igen, kezdheted a tisztítást és a feloldási kérelmet.
- **Ügynökségi rutin:** havonta/heti karbantartáskor végigmész az ügyféloldalakon, futtatod a szkent, a riportokat elmented és a régieket tömegesen törlöd.

## Előnyök és értékajánlat

- **Központi vezérlés:** több tucat oldal állapotát látod egy pulton, külön belépés nélkül.
- **Gyors döntéstámogatás:** percek alatt kapsz képet fertőzésről, blacklist‑státuszról és SSL‑épségről.
- **Költséghatékony:** ingyenes kiegészítő; a távoli szkenhez nem kell külön előfizetés.
- **Időmegtakarítás:** kézi, mégis villámgyors ellenőrzés – ideális frissítési ablakokban és incidenseknél.
- **Auditálhatóság:** megőrzött riportokkal bizonyítható a rendszeres ellenőrzés és a szolgáltatási szint.

## Célközönség

- **Ügynökségek és MSP‑k:** sok WordPress oldal gyors, egységes ellenőrzéséhez.  
- **Szabadúszó webmesterek:** egyszerű, karbantartási rutinba illeszthető szkenneléshez.  
- **Vállalati csapatok:** kockázati előszűréshez, mielőtt mélyebb szerveroldali vizsgálatot indítanál.

Ha teljes, ütemezett és fájlrendszer‑szintű vizsgálatot vársz, ehhez külön **szerveroldali** eszközre vagy szolgáltatásra lesz szükséged.

## Korlátok és tudnivalók

- **Csak kézi indítás:** nincs ütemezés és nincs tömeges, egyidejű futtatás.  
- **Távoli (front‑end) szkenner:** nem lát a szerver fájlrendszerébe, ezért nem garantált a 100%‑os lefedettség.  
- **Elérhetőségi akadályok:** ha a céloldal nem elérhető (timeout, 403, bot‑blokkolás, CDN‑szűrés), a vizsgálat hibát adhat – ez jellemzően a távoli hozzáférés korlátozására vezethető vissza.

Tipp: ha rendszeresen hibába futsz, ellenőrizd a tűzfal/botvédelmi szabályokat, és engedélyezd a vizsgálatot kérő kéréseket.

## Gyors kezdés

1. Készíts egy dedikált, tiszta WordPress‑et a **MainWP Dashboard** számára.  
2. A kezelt oldalakon aktiváld a **MainWP Child** bővítményt, és csatlakoztasd őket a pultodhoz.  
3. A Dashboard‑on engedélyezd a **Sucuri** kiegészítőt.  
4. Menj a `MainWP > Extensions > Sucuri` menübe, válaszd ki az oldalt, majd kattints a `Scan Now` gombra.  
5. Igény esetén kapcsold be az **SSL ellenőrzést**, állíts be **emlékeztetőket**, és kezeld a **riportok** megőrzését/törlését.

## Mikor jó választás?

Akkor éri meg használnod, ha több WordPress oldalt kezelsz a MainWP‑vel, és szeretnél **gyors, egykattintásos** kártevő‑ és blacklist‑ellenőrzést egy központi műszerfalról. Számolj vele, hogy ez **előszűrés**: ütemezés és mély, szerveroldali vizsgálat nincs, ilyen igényekre külön biztonsági megoldás kell.