---
title: "AffiliateWP - Lifetime Commissions"
description: "Add-on az AffiliateWP-hez: ügyfelek tartós összekapcsolása affiliáttal, hogy a jövőbeli vásárlások után is járjon jutalék."
sidebar_label: "AffiliateWP - Lifetime Commissions"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Lifetime Commissions egy hivatalos, profi kiegészítő, amellyel egy **vevőt tartósan** (életre vagy meghatározott időre) **összekapcsolhatsz** egy **affiliáttal**. Így az affiliate a vevő későbbi vásárlásai után is jutalékot kap – akkor is, ha a vásárló már nem affiliate linken érkezik, törölte a sütijeit, vagy másik eszközt használ. Ezzel a cookie‑alapú követés megbízhatatlanságát oldod meg, és stabilabb, kiszámíthatóbb jutalékozást adsz a partnereidnek.

Követelmény: az add-on használatához **AffiliateWP Professional** licenc szükséges. A bővítményt az AffiliateWP csapat fejleszti.

## Hogyan működik? (fő funkciók és logika)

### Tartós vevő–affiliate összekapcsolás
- Az első, affiliate linkről érkező sikeres konverziónál a rendszer **összeköti** a vevőt az affiliáttal.
- Bejelentkezett vevőnél a **WordPress felhasználó‑ID**, vendég vásárlónál a **vevő e‑mail címe** az azonosító.
- Az e‑mail változását a rendszer követi, hogy későbbi vendégvásárlásnál is felismerje a vevőt.
- Egy vevő egyszerre **csak egy affiliáthoz** kapcsolható.

### Lifetime időtartam (Lifetime Length)
- Beállíthatod, hogy az összekapcsolás **határozatlan** legyen (0 nap), vagy **időben korlátozott** (pl. 180 vagy 365 nap).
- Így szabályozhatod a kockázat–jutalom arányt a programodban.

### Engedélyezés és ráták
- **Globális vagy per‑affiliate** engedélyezés: bekapcsolhatod mindenkire, vagy csak kiválasztott partnerekre.
- Külön **Lifetime Referral Rate** adható meg **globálisan** és **egyedileg** (százalék vagy fix összeg).
- A lifetime jutalék eltérhet az általános affiliate rátáktól.

### Kupon alapú összekapcsolás
- Ha a vevő **affiliáthoz rendelt kupont** használ, a rendszer ezzel is összekapcsolja a vevőt az adott affiliáttal – még kattintás nélkül is.
- Ha egy már összekapcsolt vevő **másik affiliate** kuponját használja, akkor az a másik affiliate **kapja a jutalékot** azon a rendelésen.

### Affiliate felület és adatvédelem
- Az affiliate számára megjeleníthető egy **Lifetime Customers** nézet (listázás).
- Az e‑mail címek **elrejthetők** adatvédelmi okokból.
- Rövidkód a megjelenítéshez:
```
[affiliate_lifetime_customers]
```

### Admin eszközök
- Vevők **kézi hozzárendelése/eltávolítása**, áthelyezése egyik affiliattól a másikhoz.
- A **Referrals** listában vizuális jelölés mutatja, ha a jutalék **lifetime** ügyféltől érkezett.
- Opcionális: a bővítmény törlésekor az adatok **teljes eltávolítása**.

### Integrációk
- Hivatalosan támogatott: **WooCommerce**, **Easy Digital Downloads**, **Gravity Forms**, **Ninja Forms**, **Paid Memberships Pro**, **Restrict Content Pro**, **MemberPress**, **PayPal Buttons**.

### Korlátozások
- Egyszerre csak **egy affiliate** kapcsolható egy vevőhöz.
- A lifetime logika nem működik az **affiliate_conversion_script** rövidkód által generált jutalékokkal.
- Kuponhasználat egy rendelés erejéig felülírhatja, ki kapja a jutalékot.

## Gyakorlati példák

- WooCommerce digitális termék: Anna egy blogposztból kattintva vásárol. Összekapcsolódik az ajánlóval. Fél év múlva közvetlenül tér vissza és újra vásárol – az affiliate **jutalékot kap**, noha nincs kattintás és a sütik törölve lettek.
- Tagság/előfizetés: Péter egy tagságot vesz fel Restrict Content Pro-ban. Később másik böngészőből hosszabbít – a rendszer a **felhasználó‑ID / e‑mail** alapján felismeri, és jutalékot könyvel.
- Kupon esete: Márta korábban A affiliáthoz kapcsolódott. Most B kuponját használja egy akcióban. Ezen a rendelésen **B kap jutalékot** a kupon miatt.

## Beállítás és használat

1. Telepítés: aktiváld az AffiliateWP-t, érvényesítsd a **Professional** licencet, majd telepítsd és aktiváld a **Lifetime Commissions** add‑ont.
2. Konfigurálás: AffiliateWP → Settings → Lifetime Commissions
   - **Enable for all affiliates**
   - **Lifetime Customers Access** + **Hide Emails**
   - **Lifetime Referral Rates** (százalék/fix, globális és per‑affiliate)
   - **Lifetime Length** (0 = határozatlan)
   - **Link customers on user registration**
   - **Remove data when deleted**
3. Napi használat:
   - Egyedi engedélyezés és ráták az adott affiliate szerkesztő oldalán.
   - **Kézi hozzárendelés**: vevő e‑mail cím hozzáadása az affiliate-hez.
   - Affiliate felületen a lifetime ügyfelek listázása a fenti rövidkóddal.

## Előnyök és értékajánlat

- **Megbízhatóság a sütiken túl**: e‑mail/ID alapú hozzárendelés eszközváltás és cookie törlés mellett is működik.
- **Motiváltabb partnerek**: a tartós jutalék növeli az affiliate-ek elkötelezettségét és a promóció intenzitását.
- **Kisebb viták**: kevesebb “első kattintás vs. utolsó kattintás” konfliktus.
- **Rugalmasság**: globális és **per‑affiliate** ráták, időkorlátos “lifetime”, kupon‑logika.
- **Adatvédelem**: e‑mailek elrejthetők az affiliate nézetben.
- **Admin-hatékonyság**: kézi kezelés, áthelyezés, egyértelmű jelölések a riportokban.

## Kinek ajánlott?

- **WooCommerce** és **EDD** webáruházak, ahol sok a visszatérő vásárlás.
- **Tagság**/**SaaS** modellek (PMPro, MemberPress, RCP), ahol az előfizetés hosszú távú.
- **Szolgáltatók/ügynökségek**, akik szolgáltatáscsomagokat, krediteket vagy retainer jellegű csomagokat értékesítenek.
- Olyan programok, ahol fontos a partnerek **hosszú távú motiválása** és a stabil, tervezhető jutalék.

## Tippek a beállításhoz

- Kezdd **180–365 nap** Lifetime Length-tel, és mérd a hatását; nagy értékű, ritka vásárlásoknál érdemes akár határozatlanra állítani.
- Adj külön **lifetime rátát** a top partnereknek (per‑affiliate), és kommunikáld a feltételeket.
- Dokumentáld a **kupon**-szabályokat (ki, mikor kap jutalékot), hogy elkerüld a félreértéseket.
- Kapcsold be a **Hide Emails** opciót, ha szigorúbb adatvédelmet szeretnél.
- Mutasd meg az affiliátoknak a **Lifetime Customers** listát – növeli a bizalmat és az aktivitást.

Ha szeretnéd, készítek egy személyre szabott bevezetési ellenőrzőlistát, és javaslatot a **Lifetime Length** és **Lifetime Referral Rate** optimális beállítására a te stack-ed és üzleti céljaid alapján.