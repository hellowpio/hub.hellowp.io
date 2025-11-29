---
title: "Analytify UTM Campaigns Tracking"
description: "UTM-alapú kampánykövetés és elemzés közvetlenül a WordPress adminból, GA4-adatokra építve, egységes UTM-építéssel és kampányriportokkal."
sidebar_label: "Analytify UTM Campaigns Tracking"
---

## Mi ez és milyen problémát old meg?

Az Analytify UTM Campaigns Tracking az Analytify Pro modulja, amellyel az UTM-paraméterekkel címkézett marketingkampányaid teljesítményét közvetlenül a WordPress adminban láthatod. Arra való, hogy egységesítsd a kampánylinkek címkézését, elkerüld az UTM-hibákat, és a Google Analytics 4 adatait „házon belül” elemezhesd – külön GA-felületre ugrálás nélkül.

A modul megoldja:
- az UTM-címkézési káoszt (beépített, példákkal segített UTM Builderrel),
- a szétszórt riportolást (kampányok egy helyen, összehasonlítható nézetben),
- a GA4-átállás körüli zavarokat (az UTM-adatok automatikus begyűjtésével és megjelenítésével a WordPress-ben).

## Hogyan működik röviden?

1. Telepíted az Analytify-t és összekapcsolod a GA4-profiloddal.  
2. Az Analytify Pro Add-ons nézetben bekapcsolod a Campaigns modult.  
3. Az UTM URL Builderrel egységes címkézésű kampánylinkeket hozol létre.  
4. A forgalom UTM-mel érkezik a webhelyre.  
5. Az Analytify a GA4-ből automatikusan becsatornázza az UTM-adatokat, és a WordPress-ben, a Campaigns Dashboardon jeleníti meg a kampányriportokat.

Fontos: az Analytify a GA4 adataiból dolgozik, nem saját mérési adatbázist épít.

## Fő funkciók részletesen

### UTM URL Builder – hibamentes, egységes címkézés
A beépített **URL-építő** azonnal előállítja a helyes UTM-paraméterezést. A standard mezők:
- **utm_source** (forrás, pl. google, facebook)
- **utm_medium** (csatorna, pl. cpc, email, social)
- **utm_campaign** (kampánynév)
- **utm_term** (keresőkifejezés vagy kulcsszó)
- **utm_content** (hirdetés- vagy variánsazonosító)

A felület példákkal segít, így csökken a gépelési és elnevezési hiba esélye, és felgyorsul a kampányindítás. Példa paraméterezés:

```
utm_source=facebook
utm_medium=cpc
utm_campaign=nyari_akcio
utm_term=feher_polo
utm_content=szoveges_hirdetes_a
```

### UTM Campaigns Dashboard – kampányok egy helyen
A **központi irányítópult** a WordPress-ben listázza a futó és korábbi, UTM-mel címkézett kampányokat. Kampányonként láthatod a teljesítményt, és forrás/medium/campaign bontásban is összevetheted azokat. A legfontosabb mutatókat (forgalom, elköteleződés, konverziók) átláthatóan, nem technikai felhasználóknak is érthető módon kapod meg.

### GA4-integráció és automatikus UTM-gyűjtés
Az Analytify **közvetlenül a GA4-hez kapcsolódik**. Nem kell külön mérőkódot vagy adatbázist építened a WordPress-ben: az UTM-eket a látogatói URL-ekből a GA4 rögzíti, az Analytify pedig ezeket a kampányadatokat hozza be a riportokba – automatikusan.

### Jelentések és megosztás
Az Analytify Pro környezetben a kampányjelentések ugyanabban a **riportfelületen** jelennek meg, mint a többi dashboard. A **PDF export** segítségével könnyen megoszthatod a kampányeredményeket ügyfelekkel és csapattagokkal.

### Ökoszisztéma-integráció és moduláris felépítés
A Campaigns modul együttműködik az Analytify többi kiegészítőjével. A modulokat az **Add-ons** nézetből tudod be- vagy kikapcsolni, így pontosan azt a funkcionalitást aktiválod, amire szükséged van.

## Gyakorlati példák

- Google Ads: sablonos UTM-címkézéssel egységesíted a hirdetéseket. A forgalom beérkezése után a kampányok teljesítményét a WordPress-ben, kampányonként látod, és gyorsan összevetheted a forrásokat és kreatívokat.
- Email-hírlevél: minden CTA-hoz UTM-et generálsz (medium=email, campaign=havi_hirlevel). Az Analytify-ben visszanézheted, mennyi forgalom és konverzió érkezett a hírlevélből.
- Influencer/affiliate: partnerenként külön utm_source vagy utm_campaign. Így tisztán látod, melyik partner hoz értékes forgalmat.
- Social organikus vs. fizetett: medium=social (organikus) és medium=cpc (fizetett) szétválasztás. Villámgyorsan összehasonlíthatod a két csatorna teljesítményét.

## Előfeltételek és bevezetés

1. Telepítsd az Analytify-t és kapcsold össze a GA4-profiloddal.  
2. Az Analytify Pro-ban kapcsold be a Campaigns modult az Add-ons nézetben.  
3. Alakíts ki elnevezési szabályokat az UTM-ekhez (pl. kisbetű, alulvonás, konzisztens medium).  
4. Használd az UTM URL Buildert a linkek legenerálásához.  
5. Tesztelj: nyisd meg a kampánylinket, majd ellenőrizd, hogy megjelenik-e a Campaigns Dashboardon a várt forgalommal.  
6. Exportálj és ossz meg riportot, ha szükséges.

Megjegyzés: a kampányok akkor lesznek azonosíthatók, ha a forgalom UTM-címkézett linkeken érkezik.

## Előnyök és értékajánlat

- **Időmegtakarítás**: kampányeredmények a WordPress-ben, GA-navigáció nélkül.  
- **Kevesebb hiba**: egységes UTM-címkézés, példákkal támogatva.  
- **Jobb összehasonlíthatóság**: forrás/medium/campaign szintű bontás, átlátható ROI-értékelés.  
- **Megoszthatóság**: PDF export, ügyfélbarát riportkörnyezet.  
- **GA4-ready**: automatikus UTM-adatbegyűjtés, plusz mérőkódok nélkül.

## Kinek ajánlott?

- **Kis- és középvállalkozásoknak**, akik a WP-adminban szeretnék látni a kampányeredményeket.  
- **Marketingeseknek és PPC-szakértőknek**, akiknek fontos a konzisztens UTM-használat és a gyors összehasonlítás.  
- **Ügynökségeknek**, akik rendszeresen osztanak meg riportokat ügyfelekkel.  
- **E-kereskedőknek és tartalomkészítőknek**, akik több csatornán futtatnak kampányokat és pontosan mérnék a hozzájárulásukat.

---

Röviden: az Analytify UTM Campaigns Tracking az UTM-alapú kampányelemzés WordPress-közeli megoldása. Egységes UTM-építést ad, kampányonkénti teljesítményriportot mutat a WP-ben, a GA4 adataira támaszkodva, és megkönnyíti az eredmények megosztását – mindezt egy moduláris, könnyen kezelhető felületen.