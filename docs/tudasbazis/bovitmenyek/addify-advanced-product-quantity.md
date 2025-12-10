---
title: "Addify - Advanced Product Quantity"
description: "Prémium WooCommerce bővítmény a termék- és kosármennyiségek szabályalapú irányítására: min/max, lépésköz, fix és lista-alapú, valamint decimális mennyiségek kezelésével."
sidebar_label: "Addify - Advanced Product Quantity"
---

## Mi ez és mit old meg?

Az Addify – Advanced Product Quantity egy prémium WooCommerce-kiegészítő, amellyel szabályok alapján teljes kontrollt kapsz a rendelési mennyiségek felett. Segít elkerülni az alul- és túlrendelést, érvényesíti a csomagolási követelményeket (pl. csak 6-osával rendelhető), és támogatja a frakcionált (decimális) értékesítést. A szabályok alkalmazhatók termék-, kategória- és **szerepkör-alapon**, sőt **kosárszinten** is.

## Fő funkciók, érthetően

- **Minimum/maximum mennyiség**: Meghatározhatod, hogy egy termékből mi a legkisebb és legnagyobb rendelhető darabszám. Kategóriákra és felhasználói szerepkörökre is beállítható.
- **Lépésközös mennyiség (multiples)**: Kikényszerítheted, hogy csak meghatározott többszörösökben lehessen rendelni (pl. 2, 4, 6…). Ideális csomagolt termékekhez.
- **Fix mennyiség**: Minden rendelésnél azonos darabszámot kötelező választani (pl. mindig 5 db). Hasznos egységcsomagokhoz.
- **Előre megadott értéklista**: Engedélyezett mennyiségek pontos listája (pl. csak 1, 2, 5, 6).
- **Decimális mennyiségek**: Támogatja a tört/gramm alapú értékesítést (pl. 1.5 kg), teljes kontrollal a min./max. és **lépésköz** felett (pl. 0.25).
- **Kosárszintű korlátozások**: Beállíthatsz min./max. összmennyiséget és min./max. kosárértéket, kivételekkel termék/kategória/szerepkör szerint.
- **Szabályprioritás és hatókör**: Több, egymásra épülő szabályt hozhatsz létre. A rendszer priorizál, és a szabályokat globálisan, kategóriára, termékre vagy szerepkörre célozhatod.
- **Megjelenítés és UX**: A mennyiségmezőt legördülőre cserélheted (pl. előre definiált értékekkel), és a mennyiségmezőt kirakhatod a listázó (shop) nézetre is.
- **Testreszabható üzenetek**: Saját szövegeket adhatsz meg a hibákhoz/figyelmeztetésekhez (min., max., lépésköz, kosárérték).

## Gyakorlati példák

- **B2B minimum rendelés**: Minden termékből legalább 10 db, és a kosárnak minimum 100 000 Ft értékűnek kell lennie.
- **Csomagolt értékesítés**: Egy ital csak 6-os csomagban rendelhető, 6-os lépésközzel 60 db-ig.
- **Egységcsomag (fix)**: Egy pótalkatrész mindig 5-ös szettben vásárolható.
- **Decimális értékesítés**: Sajt kilogrammban, 0.25 kg-os lépésközzel; min. 0.5 kg, max. 5 kg.
- **Szerepkör-alapú szabályok**: Viszonteladóknak max. 200 db termékenként, lakossági vásárlónak max. 20 db.

## Beállítás és első lépések

1. **Telepítés és aktiválás** után új menü jelenik meg: Product Quantity. Itt hozol létre és priorizálsz szabályokat.
2. **Globális beállítások**: A bővítmény konfigurációinál kapcsolhatod a decimális mennyiségeket, a kosárszintű korlátokat és az alapértelmezett üzeneteket.
3. **Termék-/kategória-/szerepkör-szabályok**: Hozz felülírásokat egyes termékekre, egész kategóriákra, vagy konkrét felhasználói szerepkörökre.
4. **Kosárszintű korlátok**: Állítsd be a min./max. összmennyiséget és/vagy a min./max. rendelési értéket; adj meg kivételeket.
5. **Decimális mennyiségek**: Engedélyezd globálisan, majd termékenként add meg a lépésközt (pl. 0.25) és a min./max. értékeket.

## Gyakori szabály-szcenáriók (minták)

```yaml
# 1) 6-osával rendelhető, min. 6, max. 60
scope: category: "Italok"
type: step
min: 6
max: 60
step: 6
priority: 10

# 2) Fix 5 db minden rendelésnél
scope: product: "Pótalkatrész A"
type: fixed
value: 5
priority: 20

# 3) Decimális értékesítés 0.25-ös lépésben
scope: product: "Parmezán"
type: decimal
min: 0.5
max: 5
step: 0.25
priority: 30

# 4) Viszonteladóknak engedékenyebb max
scope: role: "wholesale_customer"
type: max
value: 200
priority: 40

# 5) Kosárszint: min. rendelési érték és max. összmennyiség
cart_rules:
  min_total: 100000
  max_quantity: 200
messages:
  min_total: "A rendelés végösszegének el kell érnie a 100 000 Ft-ot."
  step: "Ezt a terméket csak 6-osával rendelheted."
```

## Előnyök és értékajánlat

- **Pontosság és konzisztencia**: Minden rendelés megfelel a csomagolási és készleteladási szabályoknak.
- **Kevesebb hibás rendelés**: A vásárló nem tud érvénytelen mennyiséget a kosárba tenni; a hibaüzenetek egyértelműek.
- **Rugalmas célzás**: Szabályok termék-, kategória-, szerepkör- és kosárszinten, ütközés esetén prioritással.
- **Idő- és költségmegtakarítás**: Kevesebb ügyfélszolgálati teher, kevesebb manuális korrekció.
- **Jobb UX**: Legördülő mennyiségek és egyértelmű visszajelzések.

## Kinek ajánlott?

- **B2B/nagyker**: Minimum tételkövetelmények, többszörösök, szerepkör-alapú limitek.
- **Csomagolt/egységcsomagos termékek**: Fix vagy lépésközös mennyiségek, egyszerű konfigurációval.
- **Készletkritikus eladók**: Max. termékszintű és kosárszintű korlátok a túlzott vásárlás ellen.
- **Tömeg/terjedelem alapú értékesítés**: Decimális mennyiségek (pl. kg, m) pontos lépésközökkel.

## Megkötések és kompatibilitás

- **Kategória „összmennyiség plafon”**: Közvetlenül nem állítható be (a kategória szabály termékszinten érvényesül). Kosárszintű szabályokkal részben megkerülhető.
- **Kompatibilitás**: WooCommerce és WordPress aktuális verzióival tesztelt; támogatott a többnyelvűség (pl. WPML) és a multisite.
- **Verzióinformáció**: A legfrissebb kiadás 1.4.6 környéki; minimum WordPress 4.6 szükséges.

---

Röviden: ha szeretnéd, hogy a vásárlók mindig a megfelelő mennyiségeket rendeljék – legyen az fix, lépésközös, lista-alapú vagy decimális –, az Addify – Advanced Product Quantity mindezt szabályalapúan, áttekinthetően és skálázhatóan adja a kezedbe.