---
title: "AffiliateWP"
description: "Prémium, self‑hosted affiliate program-kezelő WordPresshez, megbízható első fél cookie‑alapú követéssel és automatizált kifizetésekkel."
sidebar_label: "AffiliateWP"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP egy prémium WordPress bővítmény, amellyel saját, házon belüli affiliate (partner) programot indíthatsz és működtethetsz. Nem kell külső hálózatokra támaszkodnod és jutalékot fizetned közvetítőknek: a követés és az adatok teljes mértékben nálad maradnak. A rendszer első fél cookie‑kat használ, így megbízhatóbb a mérés (kevésbé érzékeny hirdetésblokkolókra), és könnyebb megfelelni a magánszféra‑követelményeknek.

Röviden: ha e‑kereskedelmi eladásokat, előfizetéseket vagy leadeket szeretnél partnercsatornán keresztül növelni, az AffiliateWP mindent ad a pontos követéshez, a rugalmas jutalékszabályokhoz, a modern affiliate felülethez és az automatizált kifizetésekhez.

## Fő funkciók, érthetően

### Integrációk egy kattintással
- **WooCommerce**, **Easy Digital Downloads**, tagsági és LMS rendszerek (pl. MemberPress, Paid Memberships Pro, LearnDash, LifterLMS), illetve űrlapmegoldások (Gravity Forms, WPForms) natív kapcsolattal működnek.
- Mit jelent ez a gyakorlatban? Bekapcsolod az integrációt, és azonnal rögzíthető minden releváns esemény (vásárlás, előfizetés‑megújítás, lead beküldése) affiliate jutalékként.

### Követés és attribúció, valós forgalomra tervezve
- **Ajánlói linkek** és egyedi kampányparaméterek a klasszikus használathoz.
- **Affiliate kuponkövetés**: elég a kuponkód, link nélkül is jóváíródik a jutalék.
- **Direct Link Tracking**: jóváhagyott domainről paraméter nélküli linkek is azonosítják az affiliate‑et.
- **Affiliate landing page‑ek**: dedikált céloldal paraméterek nélkül.
- **QR‑kódos megosztás** és **External Referral Links** cross‑domain promócióhoz.
- Megjegyzés: a Direct Link Tracking bizonyos böngészőkben (pl. iOS Safari) precíz beállítást igényelhet; figyelj a referrer beállításokra és a rel="noreferrer" attribútumokra.

### Rugalmas jutalékmodellek
- **Globális**, **termékszintű** és **affiliate‑specifikus** ráták.
- **Ismétlődő (recurring) jutalékok** előfizetések megújításaira.
- **Lifetime commissions**: az ügyfél és az affiliate tartós összerendelése cookie nélkül is.
- **Multi‑tier** struktúrák és **sávos** jutalékok bonyolult programokhoz.

### Affiliate felület és kreatívok
- Alap **Affiliate Area** vagy a modern, témafüggetlen **Affiliate Portal** gyors, reszponzív UI‑val.
- **Kreatívkezelés** (bannerek, szöveges linkek, QR‑kód kreatívok), egyedi slugok és kuponok kiosztása.
- Az affiliált a saját felületén látogatásokat, konverziókat, jutalékokat és akár rendelések részleteit is áttekinti.

### Kifizetések, automatizálva
- **Stripe Payouts**: affiliate‑onboarding Stripe Expressen, adminból 1‑kattintásos egyedi vagy tömeges kifizetés.
- **PayPal Payouts**: azonnali, adminból indítható kifizetések.
- **Payouts Service** (több mint 50 ország), **Store Credit**, vagy **manuális** CSV export banki/PayPal feltöltéshez.
- Átlátható **Payouts** képernyő státuszokkal mind admin, mind affiliált oldalon.

### Csalásmegelőzés és megfelelőség
- **Fraud Prevention**: önreferrálás‑szabályok, domain‑feketelista, elvárt konverziós sávok és kilógó minták riasztása.
- Self‑hosted, **első fél cookie**‑alapú nyomkövetés a privacy és pontosság érdekében.

### Riportok, import/export, migráció
- Részletes **riportok** és **CSV export** (affiliates, referrals, visits, payouts).
- **Importálás** CSV‑ből és **migrációs** eszközök más pluginokról történő átálláshoz.

### Fejlesztői és automatizációs opciók
- **REST API v1** (read‑only) és **REST API Extended** (CRUD a fő erőforrásokon).
- **Zapier** integráció triggerekhez/akciókhoz, plusz kiterjedt hookok és sablonok.

### AI‑alapú jelentkezés‑elbírálás
- Opcionális **AI review** modul, amely egységes szempontok szerint előszűri az új affiliate jelentkezéseket, indoklással.

## Gyakorlati példák

- WooCommerce áruház: influenszerek kuponkódot kapnak. A vevő a kuponnal vásárol, a jutalék automatikusan jár, még akkor is, ha a vásárló nem kattintott át affiliate linkről.
- Előfizetéses kurzus: első vásárlás és minden megújítás után ismétlődő jutalék. Lifetime commissions bekapcsolva, így az ügyfél a jövőben is ugyanahhoz az affiliate‑hez kötődik.
- Lead‑generálás űrlappal: Gravity Forms beküldésre referral jön létre, ami jóváíródik, ha a lead kvalifikált státuszba lép.

## Gyors indulás

1. Telepítés és licenc aktiválása.
2. Beállítások → Integrations: kapcsold be a használt bővítményeket (pl. WooCommerce, űrlapok).
3. Állítsd be a jutalékokat (globális, termék, affiliate; szükség esetén Recurring/Lifetime/Multi‑tier).
4. Válaszd ki az affiliate felületet (Affiliate Area vagy Portal), add hozzá kreatívokat és kuponokat.
5. Válaszd ki és teszteld a kifizetési módot (Stripe/PayPal/Payouts Service/manuális).
6. Futtass teszt vásárlásokat; ellenőrizd az attribúciót (különösen direct link/cross‑domain esetén).
7. Élesítés után ütemezd a riportokat, és finomhangold a csalásmegelőzést.

Példaszerű admin‑útvonalak:
```
AffiliateWP → Settings → Integrations
AffiliateWP → Referrals → Payouts
AffiliateWP → Tools → Export / Import
```

## Rendszerkövetelmények és kompatibilitás

- Minimum: **WordPress 5.2+**, **PHP 7.4+**.
- **WooCommerce HPOS** támogatott a referral‑követéshez.
- Fontos: az AffiliateWP‑t azon a **domainen** futtasd, ahol a konverzió történik. Külön domain(ek)hez használj cross‑domain megoldást (pl. External Referral Links).
- Bizonyos régi integrációk kivezetve; alternatívák elérhetők.

## Előnyök és értékajánlat

- **Költségcsökkentés**: nincs hálózati közvetítői díj, saját szabályok szerint fizetsz.
- **Pontosság és privacy**: első fél cookie‑k, kupon‑ és paraméter nélküli követési opciók.
- **Időmegtakarítás**: 1‑kattintásos integrációk, adminból indítható tömeges kifizetések.
- **Rugalmasság**: fejlett jutaléklogika, több kifizetési mód, API‑k és automatizáció.
- **Partnerélmény**: modern Portal, átlátható státuszok és kreatívok – motiváltabb affiliáltak.

## Kinek ajánlott?

- **Webshopoknak** (fizikai vagy digitális termékek): skálázható partnerértékesítés kuponnal, linkkel vagy direct linkkel.
- **Előfizetéses/tagsági oldalaknak**: ismétlődő jutalékok és lifetime hozzárendelés.
- **Online kurzus‑szolgáltatóknak**: kurzus‑ és csomagszintű ráták, LMS integrációk.
- **Lead‑alapú szolgáltatóknak**: űrlapbeküldés‑alapú jutalék, minősítési folyamatokkal.
- **Fejlesztői‑fókuszú csapatoknak**: REST API, Zapier és hookok révén könnyen illeszthető a meglévő stackhez.

## Licencelés, megfontolások

- Fizetős bővítmény, több csomagszinttel és pénzvisszafizetési garanciával.
- Csak **WordPressen** működik (WordPress.com esetén magasabb csomag szükséges).
- A **Direct Link Tracking** beállításérzékeny lehet; élesítés előtt mindig végezz böngésző‑specifikus teszteket.

Ezekkel a képességekkel az AffiliateWP egy komplett, self‑hosted affiliate motor: mindent megkapsz a program gyors elindításához, pontos méréséhez és hatékony üzemeltetéséhez.