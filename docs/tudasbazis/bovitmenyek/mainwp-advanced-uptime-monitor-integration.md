---
title: "MainWP Advanced Uptime Monitor Integration"
description: "Ingyenes MainWP-kiegészítő, amellyel több uptime szolgáltató monitorait egyetlen irányítópulton kezelheted, és pontosan láthatod az összes Child Site elérhetőségét."
sidebar_label: "MainWP Advanced Uptime Monitor Integration"
---

## Mi ez és milyen problémát old meg?

A MainWP Advanced Uptime Monitor Integration egy ingyenes MainWP extension, amellyel a saját MainWP Dashboardodból egy képernyőn figyelheted és kezelheted az összes csatlakoztatott WordPress Child Site elérhetőségét. A bővítmény a külső uptime szolgáltatók (Uptime Robot, Better Uptime, NodePing, Site24x7) API-jait használja, így nem te magad üzemeltetsz mérési és riasztási rendszert, hanem a már meglévő fiókjaidat egyesíted egy központi nézetben.

Röviden: megszünteti a széttagolt monitorozást, és időt spórol azzal, hogy minden monitorodat a MainWP-ből tudod létrehozni, kezelni és riportálni.

## Hogyan működik?

- A bővítmény a MainWP Dashboardban fut, és a kiválasztott szolgáltató(k) API-kulcsával kapcsolódik a fiókjaidhoz.  
- A mérést, ellenőrzési ciklust és riasztást a szolgáltató végzi (jellemzően 5 perces ciklusokkal és azonnali értesítésekkel).  
- A MainWP csak a kezelőfelület: monitorokat hozhatsz létre/szerkeszthetsz, állapotokat nézhetsz, eseménylistát látsz, és a mérési eredményeket riportokba emelheted.

Előfeltételek: egy működő MainWP Dashboard, csatlakoztatott Child Site-ok, és legalább egy támogatott uptime szolgáltatói fiók érvényes API-kulccsal.

## Fő funkciók részletesen

- **Több szolgáltató integrációja**  
  Uptime Robot, Better Uptime, NodePing és Site24x7 fiókokhoz csatlakozhatsz. Akkor praktikus, ha különböző ügyfeleid más-más szolgáltatót használnak, vagy váltanál köztük, de egységes felületet szeretnél.

- **Monitorok teljes életciklusa a MainWP-ből**  
  Új monitor létrehozása (URL/IP, név, ellenőrzési intervallum, értesítendő kontaktszemélyek), szerkesztés, indítás/szüneteltetés, törlés – mindezt közvetlenül a MainWP-ben.

- **Tömeges létrehozás**  
  A “Create Monitors for all Sites” gombbal egy kattintással létrehozhatsz monitorokat minden olyan Child Site-hoz, ahol még nincs beállítva. Ideális induláskor vagy nagy site-portfóliók esetén.

- **Monitor típusok**  
  A választott szolgáltató képességeitől függően használhatsz HTTP(S), ping, keyword (kulcsszó megléte/hiánya) és port (pl. SMTP, DNS, POP) monitorokat.

- **Részletes státusz és események**  
  Egyetlen áttekintő nézetben látod az elérhetőséget, a leállásokat és visszaállásokat, valamint a kapcsolódó metaadatokat. Így könnyen azonosíthatod a problémás site-okat.

- **Riportkészítés integráció (Pro Reports)**  
  Az uptime mutatókat beépítheted ügyféljelentésekbe (7/15/30/45 nap és all-time). Testreszabható tokenek segítik a saját jelentéssablonjaidat.

- **Ellenőrzési gyakoriság és riasztás**  
  A méréseket a szolgáltatók 5 percenként végzik. Hiba esetén extra ellenőrzésekkel megerősítik a leállást, majd azonnal értesítenek.

## Gyakorlati példák

- **Ügynökségi indulás 60 site-tal**  
  Csatlakoztatod a Child Site-okat, megadod az Uptime Robot API-kulcsot, majd a “Create Monitors for all Sites” gombbal egy menetben létrehozod a HTTP monitorokat. Néhány kattintás, és minden site figyelve van.

- **Vegyes szolgáltatói környezet**  
  Néhány ügyfél NodePinget, mások Better Uptime-ot használnak. A bővítményben mégis egységesen látod az összes monitor státuszát, és ugyanúgy tudsz szüneteltetni vagy törölni.

- **SLA-riport készítés**  
  A Pro Reports sablonodba beilleszted a megfelelő uptime tokeneket, és havonta PDF-et küldesz az ügyfélnek a rendelkezésre-állási arányokról.

Példa tokenek:
```
[aum.uptime7]
[aum.uptime30]
[aum.alltimeuptimeratio]
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: monitorok tömeges létrehozása és központi kezelése.  
- **Gyors reakció**: szolgáltatói riasztásokkal perceken belül értesülsz a leállásokról.  
- **Transzparencia**: SLA/uptime mutatók beépítése jelentésekbe.  
- **Rugalmasság**: több szolgáltató egy felületen, egyszerű váltás és egységes áttekintés.  
- **Költséghatékonyság**: maga a kiegészítő ingyenes; a szolgáltatói csomagokat saját szükséglet szerint választhatod.

## Célközönség

- **WordPress ügynökségek és fejlesztők**: sok site központi monitorozása.  
- **IT üzemeltetők**: több szolgáltató és projekt egységes kézben tartása.  
- **Account/Project managerek**: SLA-riportok készítése, ügyfélkommunikáció egyszerűsítése.

## Telepítés és első lépések

1. Engedélyezd az Advanced Uptime Monitor kiegészítőt a MainWP Dashboardban.  
2. A Settings fülön add meg a választott szolgáltató API-kulcsát.  
3. A Monitoring fülön hozz létre egy monitort, vagy használd a “Create Monitors for all Sites” gombot a gyors induláshoz.

## Korlátok és sajátosságok

- **Mérés/riasztás a szolgáltatónál történik**: a bővítmény nem mér, csak integrál.  
- **Uptime Robot ingyenes csomag limitje**: kb. 10 API-kérés/perc; nagy portfóliónál a tömeges létrehozást több menetben futtasd.  
- **“Monitor Specific API Keys” nem támogatott** Uptime Robotnál.  
- **Basic vs. Advanced**: a MainWP alap “Basic Uptime Monitoring” nem integrálható a Pro Reports-ba; riportoláshoz az Advanced Uptime Monitor szükséges.

## Verziók és újdonságok

- **5.3.3**: Site24x7 API-lekérdezések stabilizálása, jobb hibakezelés hiányzó API-kulcsnál, új naplózás.  
- **5.3.2**: NodePing kontaktkezelés javítása, riporthibák orvoslása szolgáltató nélküli állapotban, kisebb finomítások.  
- **5.3**: kompatibilitás a MainWP 5.0-val.

## Követelmények és licencelés

- **Szükséges**: MainWP Dashboard, csatlakoztatott Child Site-ok, és legalább egy támogatott szolgáltatói fiók API-kulccsal.  
- **Ajánlott**: Pro Reports, ha SLA/uptime riportokat küldenél ügyfeleknek.  
- **Licenc**: a kiegészítő ingyenes. A külső uptime szolgáltató(k) előfizetése és API-hozzáférése külön szükséges.