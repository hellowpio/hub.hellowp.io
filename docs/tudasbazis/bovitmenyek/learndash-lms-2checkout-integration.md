---
title: "LearnDash LMS - 2Checkout Integration"
description: "Hivatalos LearnDash-kiegészítő a kurzusok közvetlen értékesítéséhez a 2Checkout (Verifone) fizetési átjárón keresztül, automatikus beiratással."
sidebar_label: "LearnDash LMS - 2Checkout Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash LMS – 2Checkout Integration egy hivatalos kiegészítő, amely összeköti a LearnDash kurzusaidat a 2Checkout (Verifone) fizetési rendszerével. Így külön webshop- vagy tagsági rendszer nélkül, közvetlenül a kurzusoldalról indíthatod a fizetést, a sikeres tranzakció után pedig a felhasználó fiókja és kurzushozzáférése automatikusan létrejön. Megszűnik a kézi beiratás, és gyorsan indíthatod a kurzusértékesítést.

## Hogyan működik? (röviden)

- Admin oldal: telepíted az add-ont, megadod a 2Checkout-azonosítókat (Merchant Code, INS Secret Word), engedélyezed a 2Checkout INS értesítéseket, beállítod az Approved/Return URL-t (Header Redirect móddal), majd a kurzuson kiválasztod az **Access Mode**-ot és az árat.
- Felhasználói oldal: a kurzusoldalon rákattint a **Take this Course** gombra, a 2Checkout fizetési felületén fizet, majd a rendszer automatikusan fiókot hoz létre számára és beiratja a megfelelő kurzusra.

## Fő funkciók részletesen

- **2Checkout fizetés kurzusokhoz**: A kurzusoldali gomb átirányít a 2Checkout biztonságos fizetési felületére. Nincs szükség külön kosárfolyamatra; a kurzus ára és azonosítója a LearnDash-ből érkezik.
- **Egyszeri és ismétlődő díjazás**: Az **Access Mode** kurzusbeállításban két mód közül választhatsz:
  - **Buy Now**: egyszeri díj, a vásárló örökös vagy időalapú hozzáférést kap a beállításaid szerint.
  - **Recurring**: előfizetéses modell, a 2Checkout kezeli az ismétlődő terhelést, a LearnDash pedig INS értesítések alapján aktualizálja a hozzáférést.
- **Automatikus fióklétrehozás és beiratás**: Sikeres fizetés után a bővítmény létrehozza a WordPress-fiókot (ha még nincs), és azonnal beiratja a felhasználót a megvásárolt kurzusra.
- **INS (Instant Notification System) webhookok**: A 2Checkout által küldött szerveroldali értesítések kapcsolják össze a fizetést és a hozzáférést. A **Secret Word** segítségével a rendszer hitelesíti az üzeneteket, és gondoskodik a státuszok pontos frissítéséről.
- **Demo mode teszteléshez**: Pénzmozgás nélküli próbatranzakciókat futtathatsz, így valós kockázat nélkül ellenőrizheted a folyamatot élesítés előtt.
- **Egyszerű telepítés és beállítás**: Az add-on a LearnDash bővítménytárából telepíthető. A beállításhoz csak a 2Checkout **Merchant Code**, **INS Secret Word**, valamint az **Approved/Return URL** megadása szükséges (Header Redirect móddal).

## Gyakorlati példák

- **Egyszemélyes kurzusindítás**: Beállítod a “Buy Now” módot 29 900 Ft-tal, bekapcsolod a Demo mode-ot, teszteled a folyamatot, majd élesíted. A tanulók azonnal fizethetnek és automatikusan beiratódnak.
- **Havi előfizetéses klub**: A “Recurring” módot havi díjjal használod. A 2Checkout kezeli a havi terheléseket, te pedig a LearnDash-ben látod, ki aktív előfizető.
- **Már meglévő 2Checkout fiók**: Ha régóta 2Checkoutot használsz, a meglévő kereskedői fiókoddal gyorsan összekapcsolod a LearnDash-t, és külön webshop nélkül kezdesz kurzust értékesíteni.

## Beállítás lépésről lépésre

1. Telepítsd és aktiváld az add-ont a LearnDash bővítmények között.
2. A LearnDash beállításokban add meg a **Merchant Code** és **INS Secret Word** értékeket.
3. A 2Checkout felületén engedélyezd az **INS** értesítéseket, és állítsd be az **Approved/Return URL**-t **Header Redirect** módban (a LearnDash által megadott végponttal).
4. Opcionálisan kapcsold be a **Demo mode**-ot a teszteléshez.
5. Nyisd meg a kurzusbeállításokat, válaszd az **Access Mode**-ot és add meg az árat:
   ```
   Access Mode: Buy Now | Recurring
   Price: 49.00
   ```
6. Mentsd a beállításokat, végezz próba-folyamatot (Demo módban), majd élesíts.

## Előnyök és értékajánlat

- **Villámgyors indulás**: percek alatt beállítható értékesítési csatorna, külön kosár vagy tagsági rendszer nélkül.
- **Automatizált beiratás**: nincs több kézi hozzáférés-kezelés; fizetés után azonnali kurzuselérés.
- **Kevesebb bővítmény, kevesebb hibalehetőség**: minimalista, célzott integráció.
- **Biztonság és megbízhatóság**: a 2Checkout kezeli a fizetést; az INS webhookok szinkronban tartják a hozzáférést.
- **Kockázatmentes tesztelés**: Demo mode-dal teljes folyamatot tesztelhetsz.

## Kinek ajánlott?

- **Oktatóknak, tréningkészítőknek**, akik gyorsan szeretnének fizetős kurzust indítani, bonyolult webshop nélkül.
- **Vállalkozásoknak, akik már 2Checkoutot használnak**, és a meglévő fizetési infrastruktúrát kötnék össze a LearnDash-sel.
- **Kisebb csapatoknak/solopreneuröknek**, akik egyszerű, alacsony karbantartású megoldást keresnek.

Nem ideális, ha:
- komplex **membership** szinteket, csomagokat, kuponlogikát vagy összetett kosárélményt akarsz,
- kurzusokon kívül sokféle terméket is értékesítesz. Ezekre inkább komplett e-kereskedelmi vagy tagsági integrációk valók.

## Korlátok és fontos megjegyzések

- **Korlátozott checkout testreszabás**: nem modernizálja a fizetési élményt, célja a gyors és egyszerű értékesítés.
- **Visszatérítések és előfizetés-kezelés**: ezeket a 2Checkout kereskedői felületén intézed, nem a LearnDash-ben.
- **Tranzakciós napló**: előfordulhat, hogy egy vásárláshoz két naplóbejegyzés jelenik meg; ez normális, a vevő nem kerül duplán terhelésre.

## Gyors hibaelhárítás

- Nem történik beiratás? Ellenőrizd, hogy az **INS** engedélyezve van, a **Secret Word** egyezik, és az **Approved/Return URL** helyesen van beállítva **Header Redirect** móddal.
- Teszteléshez kapcsold be a **Demo mode**-ot, és futtass teljes próba-folyamatot a végpontok ellenőrzésére.
- Ha előfizetési státusz nem frissül, ellenőrizd a 2Checkout értesítési naplóit és a LearnDash tranzakciós bejegyzéseket.