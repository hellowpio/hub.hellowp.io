---
title: "MainWP Article Uploader Extension"
description: "Tömeges cikkfeltöltés és publikálás több, MainWP-hez kapcsolt WordPress oldalon TXT/CSV importtal, előnézettel és ütemezési integrációval."
sidebar_label: "MainWP Article Uploader Extension"
---

## Mi ez és mit old meg?

A MainWP Article Uploader a MainWP ökoszisztéma hivatalos bővítménye, amellyel egyetlen, önhostolt MainWP Dashboardból tudsz **tömegesen cikkeket és oldalakat feltölteni és publikálni** több kapcsolt WordPress „Child Site”-on. TXT vagy egyedi CSV fájlokból dolgozik, így megszünteti a **kézi, oldalankénti feltöltés időpazarlását**, egységesíti a **metaadatokat** (kategóriák, tagek, szerzők, slugok), és lehetővé teszi a **közzététel előtti minőségellenőrzést**. Nem SaaS: minden a saját környezetedben fut.

## Fő funkciók, részletesen

- **Tömeges feltöltés TXT-ből**  
  Fájlonként egy cikket tölthetsz fel (cím + törzs). Az importálás után kiválasztod, hogy **bejegyzésként vagy oldalként** menjen ki, megadhatsz **kategóriákat**, engedélyezheted/tilthatod a **hozzászólásokat**, és kijelölheted a **cél Child Site-okat**. Egyetlen művelettel több oldalra publikálsz.

- **CSV alapú import, finomhangolható metaadatokkal**  
  Az egyedi CSV formátum mezői között beállíthatod a **címet (TITLE)**, **tartalmat (BODY)**, **slugot (SLUG)**, **kategóriákat (CATEGORIES)**, **tageket (TAGS)**, **kivonatot (EXCERPT)**, **szerzőt (AUTHOR)**, a **hozzászólások/pingbackek** engedélyezését, sőt a **céloldalakat (SITES)** is (egyenként vagy „all”). A rekordokat a CSV-ben a **[NEW]** jel választja el, többértékű mezőket vesszővel adhatsz meg.

- **HTML-támogatás a törzsben**  
  A CSV „BODY” mezője fogadhat **HTML-t** (képek, linkek, beágyazások), így előre elkészítheted a gazdagon formázott tartalmat.

- **Szerkesztés közzététel előtt**  
  Az importált cikkek a Dashboardban **listázhatók, szerkeszthetők**, majd **egyenként vagy tömegesen** hozhatók nyilvánosságra. Itt finomhangolhatod a kapcsolódó SEO beállításokat is (pl. népszerű SEO bővítmények mezőit).

- **Ütemezés integráción keresztül**  
  Ha csepegtetve publikálnál (pl. naponta 1-1 poszt több oldalon), a bővítmény együttműködik a **Post Dripper** kiegészítővel.

- **Önhosztolt, biztonságos működés**  
  Minden a saját MainWP Dashboardodban történik, külső felhőszolgáltatás nélkül.

## Gyorsindító

1. A MainWP Dashboardban menj: **Extensions > Article Uploader**.
2. TXT feltöltéshez válaszd az **Upload Articles** menüt; CSV esetén az **Import Articles**-t.
3. Tallózd és importáld a fájlokat.
4. A listában nyisd meg a cikkeket: ellenőrizd a **cél site-okat**, a **post type-ot**, a **kategóriákat/tageket**, és a **komment beállításokat**.
5. Szükség esetén szerkeszd a tartalmat és a SEO mezőket.
6. Publikálj **tömegesen** vagy **egyenként**, vagy ütemezz a Post Dripperrel.

Ellenőrzőlista publikálás előtt:
- Megfelelő post type (post/page)?
- Kategóriák és tagek egységesek?
- Slug rendben van?
- Hozzászólások/pingbackek beállítva?
- Cél Child Site-ok jól kiválasztva?
- SEO mezők és kivonat kitöltve?

## CSV specifikáció röviden

Mezők (példák): **TITLE**, **POST TYPE** (post/page), **AUTHOR**, **CATEGORIES**, **TAGS**, **SLUG**, **BODY**, **EXCERPT**, **ALLOW COMMENTS** (yes/no), **ALLOW PINGBACKS** (yes/no), **SITES** (oldalnevek vagy „all”).  
A rekordokat a **[NEW]** választja el; többértékű mezők esetén értékeket vesszővel add meg.

Példa sablon:
```
TITLE,Őszi kampány nyitóposzt
POST TYPE,post
AUTHOR,editor
CATEGORIES,Marketing,Kampányok
TAGS,őszi,akció
SLUG,oszi-kampany-nyito
BODY,<p>Üdv az őszi kampányban! <strong>Kiemelt ajánlatok</strong> várnak.</p>
EXCERPT,Rövid bevezető az őszi kampányhoz.
ALLOW COMMENTS,yes
ALLOW PINGBACKS,no
SITES,all
[NEW]
TITLE,Tudásbázis: GyIK frissítés
POST TYPE,page
AUTHOR,admin
CATEGORIES,Knowledge Base
TAGS,gyik,frissítés
SLUG,tudasbazis-gyik-frissites
BODY,<h2>Gyakori kérdések</h2><p>Frissített válaszok...</p>
EXCERPT,Frissített GyIK oldal.
ALLOW COMMENTS,no
ALLOW PINGBACKS,no
SITES,site1,site2
```

Megjegyzés: Egy rekord egy cikk; a BODY mező tartalmazhat HTML-t.

## Gyakorlati példák

- **Ügynökségi kampány**: 25 előre elkészített posztot CSV-ben importálsz, egységes kategóriákkal és tagekkel. A SITES „all”, így minden ügyféloldal megkapja, a Post Dripperrel naponta 1-1 poszt megy ki.
- **Tudásbázis frissítés**: Új GYIK oldalakat töltesz fel több webre oldalként, kommentek tiltva, SEO kivonatokkal. Előbb ellenőrzöd és finomhangolod a mezőket, majd tömeges publikálás.
- **Lokális variációk**: Azonos törzs, eltérő slug és kategóriák site-onként. A CSV-ben több rekordot hozol létre, SITES mezővel célzottan küldöd ki.

## Előnyök és értékajánlat

- **Drasztikus időmegtakarítás**: Több tucat cikk feltöltése és publikálása percek alatt.
- **Egységes struktúra**: A CSV-ben előre szabványosított kategóriák, tagek, slugok és szerzők.
- **Jobb minőségbiztosítás**: Közzététel előtt szerkeszthető tartalom és metaadatok.
- **Rugalmas tartalomkezelés**: HTML a törzsben, poszt/oldal típus választás, komment beállítások.
- **Adatvédelem és kontroll**: Minden folyamat a saját Dashboardodban történik.

## Kinek ajánlott?

- **Digitális ügynökségek és kiadók**: Több ügyféloldal tartalmát kell gyorsan és egységesen menedzselned.
- **Franchise és multisite hálózatok**: Ugyanazt a tartalomcsomagot több weben kell publikálnod.
- **SEO és tartalomcsapatok**: Előre gyártott kampányok, tudásbázisok, blog-sorozatok ütemezett kihelyezése.
- **Bárkinek, aki skálázni akar**: Ha a kézi, site-onkénti feltöltés túl sok időt visz el, itt az automatizált megoldás.

--- 

Tipp: kezdj egy kis pilot CSV-vel (2–3 rekord), teszteld egy teszt site-on, ellenőrizd a kategóriákat/slugokat, majd jöhet a teljes import és a tömeges publikálás.