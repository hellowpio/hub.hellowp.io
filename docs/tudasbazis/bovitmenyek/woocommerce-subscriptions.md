---
title: "WooCommerce Subscriptions"
description: "Prémium WooCommerce-bővítmény előfizetéses termékekhez és szolgáltatásokhoz, ismétlődő számlázással, megújítási automatizmusokkal és teljes előfizetés‑életciklus‑kezeléssel."
sidebar_label: "WooCommerce Subscriptions"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Subscriptions egy hivatalos, prémium kiterjesztés, amellyel nem egyszeri termékeket, hanem **előfizetéses termékeket és szolgáltatásokat** árulhatsz. Lehetővé teszi a **heti/havi/éves** vagy egyéni **ismétlődő számlázást**, a próbaverziót, a regisztrációs díjat, az **automatikus és kézi megújítást**, valamint a fejlett ügyfél‑self‑service műveleteket.

Ha eddig saját kóddal, manuális számlázással vagy nem támogatott megoldásokkal kezelted a visszatérő fizetéseket, ez a bővítmény egy **stabil, kipróbált** és jól dokumentált hátteret ad. Csökkenti az „involuntary churn”-t (lejárt/hibás kártya miatti lemorzsolódást) automatikus **újrapróbálással** és – bizonyos kapuknál – **kártyaadat‑frissítéssel**, miközben egyszerűsíti a logisztikát és az adminisztrációt.

## Hogyan működik röviden?

- Az áruházban **előfizetéses termékeket** hozol létre (simple/variable). A vásárlás után a rendszer egy **előfizetés** objektumot hoz, amelyhez többféle rendelés kapcsolódhat (első rendelés, megújítás, váltás).
- A megújításokat egy ütemező kezeli: automatikusan terheli a kártyát a támogatott kapukon, vagy **kézi megújítási** számlát küld.
- A megújítások **szinkronizálhatók** (például minden hónap 1‑jén), az első időszak **arányosítható**.
- Az ügyfelek a saját fiókjukban **lemondhatnak, szüneteltethetnek, újraaktiválhatnak**, címet és fizetési módot cserélhetnek.
- Fejlesztőként teljes **REST API** és hook‑készlet áll rendelkezésedre; a bővítmény **HPOS‑kompatibilis**.

## Fő funkciók részletesen

- **Előfizetéses terméktípusok**  
  Készíthetsz egyszerű és változó előfizetéses termékeket. Fontos: a „termék” csak az ajánlat leírása; a tényleges szerződés az **előfizetés** objektum, amely a teljes életciklust (állapotok, dátumok, kapcsolt rendelések) tárolja.

- **Rugalmas számlázás, próbaverzió és regisztrációs díj**  
  Beállíthatod a számlázási **periódust** (nap/hét/hónap/év) és **intervallumot** (például 2 havonta). Adhatsz **próbaverziót** (free trial) és **sign‑up fee‑t**, így kontrollálhatod az ügyfélszerzés költségét és a cash‑flow‑t.

- **Szinkronizált megújítás és proráció**  
  Igazítsd a megújításokat fix naphoz (például minden hónap 1‑je). Az első időszak díja **arányosítható**, hogy az ügyfél igazságos összeget fizessen a csatlakozás napjától a szinkronizált dátumig.

- **Automatikus és kézi megújítások, kapuintegrációk**  
  Számos hivatalos fizetési kapu támogatja az **automatikus terhelést**. Ha egy kapu nem tud ismétlődőt, akkor is használhatod **kézi megújítással**: a vevő e‑mailt kap, és a szokásos checkouton fizet.

- **Sikertelen fizetések újrapróbálása**  
  Beépített **retry** logika kezeli a kártyahibákat; a rendszer ütemezetten újrapróbál, és értesíti az ügyfelet. Ez jelentősen csökkenti a nem szándékos lemorzsolódást.

- **Előfizetés‑váltás (switching)**  
  Az ügyfelek **upgrade/downgrade/cross‑grade** műveleteket végezhetnek. A bővítmény **prorációt** számol, kezeli az **időarányos különbözetet** (gap payment), és a következő megújítás dátumát is megfelelően módosítja.

- **Több előfizetés egy tranzakcióban**  
  Az azonos ütemezésű tételeket a rendszer **csoportosítja**, így egyszerűbb a szállítás és kevesebb a tranzakciós költség.

- **Kuponok és akciók**  
  Támogatott a **visszatérő kedvezmény** és a **sign‑up fee**‑re adható kupon, így precízen tervezheted a promóciókat.

- **Ajándékozás (Gifting)**  
  Az előfizetést **másnak** is megvehetik. A megajándékozott külön fiókot és előfizetés‑nézetet kap, miközben az érzékeny fizetési adatok nem látszanak számára.

- **Értesítések és ütemezés**  
  Beépített e‑mailek jelzik a **közelgő megújítást**, a **próba végét** és a **lejáratot**. Az üzenetek ütemezése és újragenerálása adminból kezelhető.

- **REST API és fejlesztői eszközök**  
  Teljes **CRUD** az előfizetésekhez, több száz **action/filter**, naprakész adattáblák és HPOS támogatás – ideális integrációkhoz és egyedi folyamatokhoz.

Példa ütemezési beállítás szemléltetésére:
```
billing:
  period: month
  interval: 1
trial: 14_days
sign_up_fee: 1990
renewal_synchronisation: monthly_day_1
```

## Gyakorlati példák

- **Subscription box (kávé, állateledel, kozmetikum)**: havi megújítás szinkronizálva minden hónap 1‑jére; az első hónap arányosított díja automatikusan számolódik.  
- **Tagsági hozzáférés és e‑learning**: előfizetés + tagság integrációval tananyagok, közösségi területek, kedvezmények nyithatók meg automatikus megújítással.  
- **SaaS/támogatási csomagok**: hónapról hónapra számlázás, csomag‑váltás közben időarányos elszámolás.  
- **Adományok és klubtagság**: ismétlődő adománykezelés, opcionális egyedi összeggel és visszatérő kuponokkal.  
- **B2B/céges vásárlás**: ajándékozással munkatársakhoz rendelhető előfizetés, központi számlázással.

## Előnyök és értékajánlat

- **Bevétel‑tervezhetőség**: kiszámítható MRR/ARR, hatékonyabb pénzügyi tervezés.  
- **Kevesebb lemorzsolódás**: automatikus retry és – kompatibilis kapuknál – kártyaadat‑frissítés.  
- **Kevesebb admin**: ügyfél‑self‑service, csoportos megújítások, értesítési automatizmusok.  
- **Rugalmas promóció**: trial + sign‑up fee + visszatérő kuponok kombinálhatók.  
- **Logisztikai egyszerűsítés**: azonos ütemezésű előfizetések csoportos kezelése.  
- **Fejlesztőbarát**: REST API, hookok, HPOS‑kompatibilitás.

## Kinek ajánlott?

- **Webáruházaknak**, akik rendszeres szállítású termékeket értékesítenek.  
- **Tartalom‑ és kurzuskészítőknek**, akik tagságot vagy hozzáférést monetizálnának.  
- **SaaS‑szolgáltatóknak** és **ügynökségeknek**, ahol havi retainer vagy support csomagok futnak.  
- **Nonprofit szervezeteknek**, ismétlődő adományokhoz.  
- **B2B szereplőknek**, akik előfizetéseket osztanak ki munkatársaknak vagy partnereknek.

## Összegzés

A WooCommerce Subscriptions egy kiforrott, hivatalosan támogatott megoldás minden olyan WooCommerce‑alapú üzleti modellhez, ahol **ismétlődő bevétel** a cél. Rugalmas számlázása, széles **fizetési kapu** támogatása, a fejlett **megújítási és váltási** logika, a beépített **ajándékozás** és a transzparens **admin/ügyfél‑oldali** folyamatok miatt gyorsan bevezethető és hosszú távon is skálázható. Ha előfizetéses termékeket vagy szolgáltatásokat árulsz, ez a bővítmény a legbiztonságosabb és legteljesebb alap, amire építhetsz.