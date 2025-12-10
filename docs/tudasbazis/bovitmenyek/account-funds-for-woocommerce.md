---
title: "Account Funds for WooCommerce"
description: "Prémium WooCommerce kiegészítő, amellyel bolti pénztárcát (store credit) adhatsz a vásárlóidnak, részfizetéssel, visszatérítéssel és automatizált jutalmakkal."
sidebar_label: "Account Funds for WooCommerce"
---

## Mi ez és milyen problémát old meg?

Az Account Funds for WooCommerce egy hivatalos, prémium bővítmény, amellyel a vásárlóid előre feltölthető egyenleget (bolti kreditet) tarthatnak a fiókjukban. Ezzel a pénztárnál részben vagy teljesen fizethetnek, ami:
- csökkenti a fizetés súrlódását,
- növeli a visszatérő vásárlások számát,
- egyszerűsíti a visszatérítést (bolt‑jóváírásként).

A bővítményt a Kestrel fejleszti, WooCommerce‑re optimalizálva.

## Hogyan működik?

- A vevő a Saját fiók felületen kreditet tölt fel, vagy “store credit” típusú terméket vásárol.
- A pénztárnál a bővítmény saját fizetési módja jelenik meg, amely az elérhető egyenleget felhasználja.
- Ha engedélyezed a részfizetést, a kredit után a fennmaradó összeg más kapuval rendezhető.
- Visszatérítéskor a rendelés összegét bolt‑kredittel is jóváírhatod.
- Automatizált szabályokkal jutalmat adhatsz vásárlásért, aktivitásért (cashback, mérföldkő).

## Fő funkciók

### Előre feltölthető egyenleg (store credit)
A vásárlók:
- a Saját fiókból közvetlenül tölthetnek fel összeget,
- vagy előre meghatározott összegű “store credit” terméket vehetnek.
Beállíthatod a minimum/maximum összeget, sőt saját képet is adhatsz a top‑up “terméknek”. Dönthetsz arról is, hogy a feltöltések részt vegyenek‑e jutalmazási szabályokban. A “store credit” elnevezést átírhatod (pl. “Pénztárca”).

### Részfizetés
Engedélyezve a rendszer a kosárban lévő kreditet levonja, a maradékot a vevő kártyával vagy más kapuval fizeti. Ha kikapcsolod, a kredites fizetés csak akkor jelenik meg, ha az egyenleg fedezi a teljes rendelést.

### Visszatérítés bolti kreditben
Rendeléseket részben vagy egészben jóváírhatsz a vevő egyenlegére. Gyors, könyvelésbarát és a költés a boltodban marad.

### Jutalmazás automatizálása
- **Cashback szabályok**: fix vagy százalékos jóváírás rendelésre vagy termékekre, felső korláttal. Példa: “Minden rendelés után 5% kredit, max. 5 000 Ft”.
- **Mérföldkő jutalmak**: eseményekhez kötött jóváírás (pl. fiókregisztráció, első termékértékelés). Szabályozhatod a jogosultságot és korlátozásokat.

### Fizetési kapu és Checkout Block támogatás
A bővítmény saját **Store credit** fizetési módot ad leírási mezővel, egyenleg‑kijelzéssel és részfizetés opcióval. Működik a blokkalapú pénztárral is, így modern checkout élményt kapsz.

### Admin eszközök és riportok
- Felhasználónként látod az aktuális egyenleget és kézzel korrigálhatod.
- Manuális rendeléseknél is használhatod a kredites fizetést.
- Betét‑ és egyenlegjelentések érhetők el a riportoknál (Deposits), így átlátható a teljes pénztárca‑forgalom.

### Megjelenítés: widget és shortcode
A vásárlói egyenleget megjelenítheted widgettel vagy shortcode‑dal. Példa shortcode:

```
[get-account-funds]
```

## Gyakorlati példák

- **Hűségprogram cashbackkel**: adj 5% jóváírást minden teljesített rendelésre, havi 5 000 Ft plafonnal. A vevők visszatérnek elkölteni a kreditet.
- **Rugalmas visszatérítés**: hibás méret esetén pénzvisszafizetés helyett kredit‑jóváírást adsz. A vevő gyorsan újrarendel, te pedig megőrzöd a bevételt.
- **Előfizetés előfinanszírozása**: a vevő feltölti a pénztárcáját, és abból fizeti a következő előfizetési ciklust.
- **B2B belső bolt**: csak bejelentkezett nagyker partnerek látnak kredites fizetést; részfizetés engedéllyel gyors a zárás.

## Előnyök és értékajánlat

- **Kevesebb súrlódás, gyorsabb fizetés**: 1–2 kattintás, kevesebb kártyahiba.
- **Magasabb retenció**: a kredit és a jutalmak visszahozzák a vevőket.
- **Pénzügyi rugalmasság**: előre finanszírozott költés, egyszerű bolt‑jóváírás.
- **Admin‑idő megtakarítás**: központi kreditkezelés, automatizált jóváírások, beépített riportok.
- **Modern checkout**: saját fizetési kapu, blokkalapú pénztár támogatás.

## Kinek ajánlott?

- **Divat, kozmetika, FMCG**: gyakori ismételt vásárlások, erős hűségprogram.
- **Előfizetéses és tagsági modellek**: előre feltöltött egyenleggel gördülékeny a megújítás.
- **B2B/wholesale**: szerepkör‑alapú hozzáférés, gyors pénztár nagyobb kosaraknál.
- **Zárt közösségi boltok**: belső kreditalapú elszámolás.

## Beállítás röviden

1. Telepítsd és aktiváld a bővítményt, majd állítsd be az alapokat az Account funds menüben (megnevezések, top‑up limitek, jutalmazási részvétel).
2. Engedélyezd a Store credit fizetési kaput a WooCommerce fizetések között, kapcsold be a részfizetést, és írd be a leírást az egyenleg megjelenítésével.
3. Hozz létre **cashback** és/vagy **mérföldkő** szabályokat (összeg/%, plafon, jogosultság).
4. Tedd elérhetővé az egyenleget widgettel vagy a shortcode‑dal a fiókoldalon.

## Követelmények és korlátozások

- Csak **bejelentkezett** felhasználók tölthetnek fel és fizethetnek kredittel.
- Részfizetés kikapcsolása esetén a kredites kapu csak akkor látszik, ha az egyenleg fedezi a teljes rendelést.
- HPOS‑kompatibilis, modern WooCommerce környezetben működik.

## Integrációk és megjegyzés

- Együttműködik előfizetéses és tagsági kiegészítőkkel, valamint szerepkör‑alapú hozzáférés‑kezeléssel.
- Ne keverd össze a hasonló nevű, más fejlesztő által készített bővítménnyel; ez a kiegészítő a Kestrel terméke és a hivatalos piactérről érhető el.

Ha szeretnél, készítek külön példatárral cashback sablonokról, B2B forgatókönyvekről vagy előfizetéses egyenlegkezelésről.