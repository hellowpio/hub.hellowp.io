---
title: "AffiliateWP - Multi-Tier Commissions"
description: "Prémium kiegészítő az AffiliateWP-hez többszintű (2–5) jutalékhálózatokhoz, rugalmas számítási módokkal és haladó admin eszközökkel."
sidebar_label: "AffiliateWP - Multi-Tier Commissions"
---

## Mi ez és milyen problémát old meg?

A Multi-Tier Commissions az AffiliateWP hivatalos, prémium kiegészítője. Segítségével nemcsak az affiliate saját eladásai után fizethetsz jutalékot, hanem az általa toborzott al-affiliáltak, sőt azok alaffiliáltjai eladásai után is – akár **5 szint** mélységig. Ezzel a plugin megoldja az “egy szint – egy jutalék” korlátot, és bevezet egy jól szabályozható, hálózati jutalékszerkezetet, amely kifejezetten e‑kereskedelmi eladásokra fókuszál.

## Hogyan működik röviden?

1. Az affiliált megosztja a saját **toborzási linkjét**.  
2. A linkkel regisztrálók automatikusan az ő **downline** hálózatába kerülnek.  
3. Minden vásárlásnál a rendszer az adott láncolat alapján azonosítja a **Tier 1–5** szereplőket.  
4. A jutalékokat a beállított **jutaléktípus** és **számítási mód** szerint kiosztja.

## Fő funkciók és beállítások

### Többszintű jutalék 2–5 szintig
- Szabadon állíthatod, hány szintet használsz (min. 2, max. 5).
- Minden szinten **önálló jutalékszabály** adható meg, így pontosan illesztheted a költségkerethez.

### Kompenzációs modellek
- **Unilevel:** korlátlan szélesség; minden affiliált tetszőleges számú közvetlen al-affiliáltat toborozhat.  
- **Forced Matrix:** meghatározott **szélesség** és **mélység**; a rendszer kezeli a **spillover** helyzeteket, amikor egy szint megtelik, és az új belépők a következő elérhető helyre kerülnek.

### Jutaléktípusok és számítási módok
- **Százalékos (%):** arányos a rendelésértékkel vagy az első szint bevételével.
- **Fix összeg termékenként (Flat Per Product):** darabszámhoz kötött jutalék.
- **Fix összeg rendelésenként (Flat Per Order):** kosárértéktől független fix díj.

Számítási logika:
- **Tier 1 earnings alapú:** a 2–5. szint jutaléka az 1. szint bevételéből számolódik.  
- **Total sale amount alapú:** minden szint a teljes rendelésértékből kapja a saját százalékát.

### Toborzás és hálózatnézet
- Egyedi **network link** biztosítja az automatikus szülő‑kapcsolatot.  
- Az affiliáltak a fiókjukban **vizuális fa nézeten** látják a downline hálózatukat, statisztikákkal (látogatások, konverzió, kifizetett/nem kifizetett jutalékok).

### Admin eszközök
- Új referral típus: **Sale (Tiered)** – külön szűrhető és kezelhető.  
- **Parent Affiliate** kézi módosítása: szükség esetén átállíthatod a szülő‑kapcsolatot.  
- **Inaktív vagy törölt tagok** kezelése: kihagyás a jutalékosztásból; átszervezés a feletteshez.  
- A “szülő” referral státuszváltoztatása **láncoltan** érvényes a kapcsolódó tierelt tételekre.

## Gyakorlati példák

### 1) Webáruház (Unilevel, százalékos, Total sale amount)
- Beállítás: Tier1 20%, Tier2 10%, Tier3 5%.  
- 100 000 Ft-os rendelésnél a jutalékok:  
  - Tier1: 20 000 Ft  
  - Tier2: 10 000 Ft  
  - Tier3: 5 000 Ft  
- Előny: egyszerű, áttekinthető kompenzáció; minden szint a teljes forgalomra épül.

### 2) Digitális kurzusok (Unilevel, fix/termék)
- Beállítás: 3 000 Ft/termék Tier1, 1 000 Ft/termék Tier2.  
- 2 kurzus vásárlása esetén:  
  - Tier1: 6 000 Ft  
  - Tier2: 2 000 Ft  
- Előny: jól kontrollálható marzs termékenként.

### 3) Tagsági oldal (Forced Matrix, Tier 1 earnings alapú)
- Mátrix: szélesség 3, mélység 3; Tier1 25%, Tier2 30% a Tier1-ből, Tier3 20% a Tier1-ből.  
- 40 000 Ft rendelésnél Tier1 = 10 000 Ft; ebből számolva:  
  - Tier2: 3 000 Ft  
  - Tier3: 2 000 Ft  
- Előny: a felsőbb szintek költsége a tényleges Tier1‑hez igazodik.

## Előnyök és értékajánlat

- **Skálázható toborzás:** több szintnyi ösztönző, erősebb hálózati terjedés.  
- **Pénzügyi kontroll:** pontos szabályozás százalékkal vagy fix összegekkel, kétféle számítási elvvel.  
- **Átláthatóság:** hálózatfa és részletes teljesítménymutatók.  
- **Kevesebb adminisztráció:** célzott szűrők, láncolt státuszkezelés, kézi korrekciós eszközök.  
- **Rugalmasság:** Unilevel vagy Forced Matrix, 2–5 szint, termék- vagy rendelésalapú díjazás.

## Kinek ajánlott?

- **WooCommerce/EDD alapú webáruházaknak**, ahol a reach és a rendszeres forgalom növelése cél.  
- **Online kurzus‑ és tagsági oldalaknak**, amelyek közösségi terjesztésre építenek.  
- **B2B ajánlói programoknak**, ahol több szereplő közreműködését szeretnéd díjazni.  
- **Olyan csapatoknak**, akiknek fontos a tiszta audit és a rugalmas jutalékpolitika.

## Telepítés és első lépések

1. Előfeltétel: aktív AffiliateWP és érvényes Pro licenc.  
2. Telepítés után: Beállítások → Commissions → kapcsold be a **Multi-Tier Commissions** opciót.  
3. Válaszd ki a modellt (**Unilevel** vagy **Forced Matrix**), és állítsd a szélesség/mélység értékeket, ha mátrixot használsz.  
4. Add meg a **tiers** számát és a **jutaléktípusokat** szintenként.  
5. Dönts a **számítási módszerről** (Tier 1 earnings vs. Total sale amount).  
6. Teszteld egy próbarendeléssel; ellenőrizd a **Sale (Tiered)** bejegyzéseket és a hálózatnézetet.

Példa konfiguráció:
```
Model: Unilevel
Tiers: 3
Tier1: 20% (Total sale amount)
Tier2: 10%
Tier3: 5%
```

## Korlátok és jó gyakorlatok

- Az admin felületen maximum **5 szint** támogatott.  
- Tartsd be a vonatkozó **jogi és fogyasztóvédelmi irányelveket**; a struktúrát valódi, külső fogyasztói eladásokra építsd.  
- Nagy hálózatnál célszerű fokozatosan bevezetni a szinteket és monitorozni a marzsot.

## Összegzés

A Multi-Tier Commissions egy professzionális kiegészítő az AffiliateWP-hez, amellyel testre szabható, akár 5 szint mély, **Unilevel** vagy **Forced Matrix** alapú jutalékhálózatot építhetsz. Rugalmas jutaléktípusokkal, kétféle számítási módszerrel és erős admin eszközökkel segít, hogy skálázhatóan növeld az affiliate programod elérését és bevételét.