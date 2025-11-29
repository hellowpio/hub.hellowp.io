---
title: "AffiliateWP - PayPal Payouts"
description: "Affiliate jutalékok 1-kattintásos kifizetése a WordPress adminból, a PayPal Payouts (REST) API-val."
sidebar_label: "AffiliateWP - PayPal Payouts"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – PayPal Payouts az AffiliateWP hivatalos kiegészítője, amellyel közvetlenül a WordPress adminból, egyetlen kattintással fizetheted ki az affiliáltak jutalékait a **PayPal Payouts** (REST) API-n keresztül. Nem önálló plugin, az **AffiliateWP alapbővítmény** szükséges hozzá. A célja, hogy megszüntesse a manuális, CSV-alapú tömeges kifizetéseket és az alkalmazásváltást: nem kell exportálnod a jutalékokat, feltöltened a PayPalba és manuálisan jóváhagynod – mindent a WordPressen belül intézhetsz.

A bővítményt az **AffiliateWP csapata** fejleszti az Awesome Motive háttérrel. Tipikusan olyan boltokban használják (pl. **WooCommerce**, **Easy Digital Downloads**), ahol az AffiliateWP már kezeli a jutalékokat, és a kifizetéseket gyorsan, hibamentesen kell intézni.

## Előfeltételek és követelmények

- **PayPal Business fiók**, amelyen a **Payouts** funkció engedélyezve van (új/alacsony forgalmú fiókoknál külön jóváhagyás kellhet).
- A kifizetések a **PayPal-egyenlegből** történnek, ezért legyen elég fedezeted.
- Az affiliáltaknak az e-mail címükhöz **érvényes PayPal fiókkal** kell rendelkezniük. Ha nincs, PayPal-meghívót kapnak; ha nem fogadják el, a pénz visszakerül hozzád.
- Az AffiliateWP alapbővítmény telepítve és licencelve legyen (a kiegészítő **minden licencszinthez elérhető**).

## Gyors áttekintés: hogyan működik?

1) Hozz létre egy **PayPal REST appot** (Client ID és Secret).  
2) Add meg a hitelesítő adatokat az AffiliateWP beállításaiban, és teszteld a kapcsolatot.  
3) Fizess egyenként (Pay Now) vagy tömegesen, előnézeti lépés után.

```
AffiliateWP → Settings → Payouts → PayPal
Mode: Sandbox / Live
Client ID: <másold be>
Secret: <másold be>
Test Connection: OK
```

## Fő funkciók részletesen

### 1. 1‑kattintásos kifizetés
A **Referrals** listában minden jóváhagyott jutaléktételnél megjelenik a **Pay Now** művelet. Rákattintasz, a rendszer azonnal elküldi a kifizetést a címzett PayPaljára, és a tétel státusza **“Paid”** lesz. Akkor hasznos, ha kisebb összegeket, egyedi tételeket szeretnél azonnal kifizetni.

### 2. Tömeges kifizetés szűrőkkel
A **Pay Affiliates** képernyőn megadhatsz **dátumtartományt** és **minimum kifizetési összeget**, majd **Preview**-val előnézetet látsz: kik, mennyit kapnak. A **Submit** után a rendszer egy tranzakcióban beküldi a Payouts kérést, és az érintett referralok automatikusan **“Paid”** státuszra váltanak. Ideális havi vagy kétheti zárásokhoz.

### 3. PayPal API integráció (Live/Sandbox)
A beállításoknál a **Client ID** és **Secret** megadásával, **Live** vagy **Sandbox** módban kapcsolódhatsz. A beépített **kapcsolatteszt** segít még az első kifizetés előtt kiszűrni a hibákat. Sandbox módban kockázat nélkül gyakorolhatod a folyamatot.

### 4. MassPay kompatibilitás (legacy)
Ha a PayPal fiókodban még elérhető a **MassPay**, használhatod, de az új fiókoknál a **Payouts (REST)** az ajánlott és támogatott irány.

### 5. Hibakeresés és naplózás
Bekapcsolható **debug log**, amely részletesen rögzíti a PayPal API válaszokat. Tipikus hibakódok:
- **403** – nincs Payouts engedély vagy hibás hitelesítő adatok.
- **422** – nincs elég fedezet, vagy a címzett pénzneme nem támogatott.
- **429** – terheltségi limit; várj, majd próbáld újra.

### 6. Jogosultság és licenc
A kiegészítő az AffiliateWP részeként működik, és **minden licencszint** használhatja. Admin jogosultsággal a teljes kifizetési folyamat hozzáférhető.

## Gyakorlati példák

- **Havi zárás WooCommerce boltban**: Beállítod a dátumtartományt az előző hónapra, minimum összeget 20 USD-re, rányomsz a Preview-ra, ellenőrzöd a listát, majd Submit. Pár másodperc és több tucat affiliate kifizetése megtörtént, CSV nélkül.
- **Azonnali egyedi kifizetés**: Egy kiemelt partner extra jutalékát szeretnéd azonnal elutalni. A Referrals listában a tétel mellett megnyomod a Pay Now gombot – a státusz Paid, a partner pedig perceken belül megkapja az összeget.
- **Sandbox próba**: Új program indulásakor Sandbox módra váltasz, teszt affliáltakkal és teszt egyenleggel lefuttatod a teljes folyamatot, így élesítéskor már minden gördülékeny.

## Hibakezelés – gyors megoldások

- **403**: ellenőrizd, hogy a Payouts funkció engedélyezett-e a PayPal Business fiókodban, és helyes-e a Client ID/Secret.
- **422**: töltsd fel az egyenleget, vagy ellenőrizd, hogy a kifizetés pénzneme elfogadott-e a címzett fiókjában.
- **429**: várj néhány percet és próbáld újra; nagy tömeges kifizetéseknél célszerű batch-ekben küldeni.
- Ha egy címzettnek nincs PayPal fiókja az e-mailjéhez, a meghívó átfutásáig függőben lesz a pénz, majd visszajut hozzád, ha nem fogadják el.

## Payouts Service vs. PayPal Payouts

- **PayPal Payouts**: azonnali kifizetés a te PayPal-egyenlegedről az affiliáltak PayPaljára; Payouts engedély szükséges, gyors és közvetlen.
- **AffiliateWP Payouts Service**: bankkártyát vagy bankszámlát terhel, banki átutalással fizet az affiliáltaknak, és egyes országokban adózási adminisztrációt is segíthet. Átfutása jellemzően hosszabb, költségei eltérőek.

## Előnyök és értékajánlat

- **Időmegtakarítás**: percek alatt lezárható egy teljes havi kifizetés.
- **Kevesebb hiba**: nincs CSV export–import, kevesebb manuális lépés.
- **Jobb partnerélmény**: gyors kifizetés = motiváltabb affiliáltak.
- **Központosítás**: minden a WordPress adminban történik, egy felületen.

## Kinek ajánlott?

- **Webshop-tulajdonosoknak** (WooCommerce, EDD), akik már használják az AffiliateWP-t.
- **Olyan programoknak**, ahol rendszeres, sokszereplős kifizetések futnak, és fontos a gyors, hibamentes folyamat.
- **Azoknak**, akik rendelkeznek PayPal Business fiókkal és Payouts engedéllyel, és szeretnék a kifizetéseket automatizálni, adminisztráció nélkül.

Összességében az AffiliateWP – PayPal Payouts a leggyorsabb, legkényelmesebb módja, hogy az affiliáltjaidat a WordPressen belül, biztonságosan és átláthatóan fizesd ki – egyenként vagy tömegesen, a PayPal REST integráció erejével.