---
title: "WooCommerce MailChimp Integration"
description: "Korábban hivatalos WooCommerce-kiegészítő a Mailchimp-feliratkozások és rendelési adatok összekapcsolására; ma már visszavont, utódja a Mailchimp for WooCommerce."
sidebar_label: "WooCommerce MailChimp Integration"
---

## Mi ez és milyen problémát old meg?

A **WooCommerce MailChimp Integration** egy korábbi, hivatalos kiegészítő volt, amely a WooCommerce pénztárfolyamatába építette a **Mailchimp-feliratkozást**, és a **rendelési/kosáradatokat** elküldte a Mailchimpbe. Így nem kellett kézzel exportálnod a vásárlói adatokat: a rendszer automatikusan szinkronizált, hogy hírleveleket, szegmentált kampányokat és értékesítési automatizációkat indíthass.

Fontos: a bővítményt visszavonták. Új projektekhez a **Mailchimp for WooCommerce** az ajánlott, amely mélyebb és folyamatos szinkront biztosít.

## Hogyan működik röviden?

- A boltodat **Mailchimp API-kulccsal** csatlakoztatod, kiválasztasz egy **listát/közönséget**.
- A pénztárnál megjelenik egy **feliratkozási jelölőnégyzet**; ha a vevő bejelöli (és ha engedélyezed a **Double Opt-In**-t), bekerül a Mailchimp közönségedbe.
- A rendeléshez kapcsolódó **vevő- és kosáradatok** (név, cím, e‑mail, tételek) automatikusan továbbításra kerülnek a Mailchimp felé.
- A bővítmény egy sütivel jelzi, ha a rendelés **Mailchimp-kampányból érkező kattintás** eredménye volt; ezzel pontosabb a kampányok mérése.

Példa folyamati vázlat:
```
Checkout -> ügyfél bepipálja: "Feliratkozom"
  -> (opcionális) Double Opt-In e-mail
Order created/paid
  -> eCommerce360 payload: customer + items + totals + kampány-cookie
  -> Mailchimp: kontakt frissítés + vásárlási adatok szinkron
```

## Fő funkciók részletesen

- **Mailchimp összekapcsolás API-kulccsal és lista választás**
  - Egy API-kulcs megadásával hitelesíted a kapcsolatot, majd kiválasztod, melyik **közönség/lista** fogadja a feliratkozókat és vásárlói adatokat. Ez az alapja a biztonságos, automatizált adathídnak.

- **Checkout feliratkozási élmény testreszabása**
  - A pénztár oldalon megjelenő jelölőnégyzet szövegét **szabadon megfogalmazhatod** (pl. jogszabályi megfeleléshez), és eldöntheted, alapból be legyen-e jelölve. Engedélyezheted a **Double Opt-In** folyamatot, ami megerősítő e-mailt küld, és így megfelelhetsz szigorúbb adatvédelmi elvárásoknak.

- **Rendelési és kosáradatok továbbítása**
  - A bővítmény elküldi a **vásárló adatait és a megvett termékeket**, hogy Mailchimpben célzott szegmenseket és automatizációkat építhess (például visszatérő ajánlatokat egy adott termék vásárlóinak).

- **eCommerce360 támogatás**
  - A Mailchimp eCommerce360 adatsémáját használva a megvásárolt termékekhez köthető **szegmentálás** és **kampányok** válnak elérhetővé (pl. „mindenki, aki X kategóriából vásárolt”).

- **Kampányattribúció sütivel**
  - A bővítmény sütiben tárolja, ha a látogató **Mailchimp hírlevélből érkezett**, és a rendeléshez kapcsolja ezt az információt. Így látod, mely kampányok hoznak tényleges bevételt.

- **Hibakeresési napló (debug log)**
  - Engedélyezhető naplózás, hogy az esetleges integrációs problémákat **gyorsan beazonosíthasd**.

## Gyakorlati példák

- **Feliratkozás a pénztárnál + utókövetés**
  - A vevő kipipálja a jelölőnégyzetet. A rendelés után automatikus sorozat indul: köszönő e-mail, használati tippek, majd kiegészítő termékajánlatok.

- **Termékalapú szegmentálás**
  - Mindenki, aki „Futócipő” terméket vásárolt, egy „Futás” érdeklődési csoportba kerül. Ezt célzod edzéstervekkel, majd szezonnyitó akcióval.

- **Kampány-ROI mérése**
  - Hírlevelet küldesz kuponnal. A bővítmény jelzi, ha a rendelés a hírlevélből érkezett kattintás eredménye volt. A bevétel pontosan a kampányhoz kötődik.

## Előnyök és értékajánlat

- **Időmegtakarítás**: nincs manuális export–import; minden automatikusan megy.
- **Kevesebb hiba**: konzisztens adatátadás, egységes forrás Mailchimp felé.
- **Jobb célzás**: valós vásárlási adatokkal épülő szegmensek és automatizmusok.
- **Megfelelés támogatása**: látható feliratkozási jelölőnégyzet és Double Opt-In opció.
- **Mérhető bevétel**: kampányattribúció sütivel, így látszik a hírlevelek hatása.

## Korlátok és megkötések

- **Nincs visszamenőleges szinkron**: korábbi rendelések utólagos betöltését nem tudta.
- **Automatizációk Mailchimp-oldalon**: a legtöbb marketingautomatizálást nem a WordPressben, hanem a Mailchimp felületén kellett beállítanod.

## Kinek ajánlott?

- **Kis- és közepes webáruházaknak**, akik hírlevélből szeretnének eladást generálni.
- **Marketingeseknek**, akik vásárlási adatokra épített szegmentálást és automatizációkat használnának.
- **Olyan csapatoknak**, akiknek fontos a jogszerű feliratkoztatás és az átlátható attribúció.

Ha már működő boltban ez a bővítmény fut, a fenti működési elveket követi. Új bevezetéshez azonban érdemes az utódot választanod.

## Ajánlott utód: Mailchimp for WooCommerce

Az utód bővítmény ingyenes, és a Mailchimp fejleszti. Fő előnyei:
- **Mélyebb és folyamatos szinkron**: rendelések, termékek, vevők, tagek és érdeklődési körök.
- **Korszerű automatizációk**: elhagyott kosár, vásárlás utáni sorozatok, dinamikus termékajánlók.
- **Viselkedésalapú célzás** és szélesebb adatmezők a pontosabb szegmentáláshoz.

Általános folyamat: a WordPressből telepíted, összekapcsolod a Mailchimp-fiókoddal, kiválasztod a közönséget, majd a szinkron automatikusan fut és alapot ad a modern kampányokhoz.

## Megjegyzés a hasonló nevű bővítményekről

Létezik olyan alternatíva, amely hasonló célt szolgál (pénztári feliratkoztatás, Double Opt‑In, érdeklődési csoportok/tagek), de **nem azonos** a korábbi WooCommerce MailChimp Integration kiegészítővel. Ha egyszerűbb feliratkozási folyamatra van szükséged, ezt is mérlegelheted; komplex e‑kereskedelmi szinkronhoz viszont az ajánlott utód ad teljesebb megoldást.

## Összegzés

A WooCommerce MailChimp Integration célja az volt, hogy a pénztárnál történő **feliratkoztatást** és a **rendelési adatok** Mailchimpbe juttatását egyszerűvé tegye, ezzel a **termékvásárlás-alapú szegmentálást** és a **mérhető kampányokat** támogassa. Ma már visszavont bővítmény; új projektekhez a **Mailchimp for WooCommerce** biztosít mélyebb szinkront, modernebb automatizációkat és hosszú távú támogatást. Ha pontos, mérhető, vásárlási adatokra épített e‑mail marketinget szeretnél, az utód a legjobb kiindulópont.