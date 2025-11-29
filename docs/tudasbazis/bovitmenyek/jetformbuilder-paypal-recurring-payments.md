---
title: "JetFormBuilder PayPal Recurring payments"
description: "PRO kiegészítő JetFormBuilderhez, amellyel előfizetéses (ismétlődő) PayPal-fizetéseket építhetsz WordPress űrlapokba, és az előfizetéseket a WordPress adminban kezelheted."
sidebar_label: "JetFormBuilder PayPal Recurring payments"
---

## Mi ez és milyen problémát old meg?

A **JetFormBuilder PayPal Recurring payments** egy PRO add-on, amellyel **előfizetéses** (recurring) díjazást tudsz beállítani a JetFormBuilder űrlapjaidhoz. Nincs szükség külön webshopra vagy bonyolult egyedi fejlesztésre: a látogatód az űrlapon indítja az előfizetést, a fizetés a **PayPal**-on történik, az előfizetés **állapota és tranzakciói** pedig egy külön **Subscriptions** nézetben követhetők a WordPress adminban. Ez ideális, ha tagdíjat, online kurzust, zárt tartalom-hozzáférést vagy bármilyen előfizetéses szolgáltatást szeretnél értékesíteni.

## Fő funkciók, érthetően

- **Ismétlődő díjazás több árazási modellel**  
  Kezeli a **fix**, **mennyiség-alapú**, **volumenalapú** és **sávos (tiered)** díjazást, akár **próbaperiódussal**. A mennyiséget űrlapmezőből is átveheted, így a felhasználó döntheti el, hány licencet vagy egységet fizet.

- **PayPal gateway integráció**  
  A JetFormBuilder fizetési kapuin belül kapcsolod be a PayPalt, megadod a **REST API** adatokat (Client ID, Secret), és kiválasztod, hogy **Sandbox** vagy **Live** módban futsz. A bővítmény kezeli az **Access Token**-szinkront, és testreszabható **siker/hiba üzeneteket** és **átirányításokat** kínál.

- **Előfizetés-kezelés a WordPress adminban**  
  A **Subscriptions** nézetben látod az előfizetőt, a ciklust, a státuszt, a kapcsolódó kifizetéseket. Innen **felfüggesztheted** vagy **lemondhatod** az előfizetést, és **visszatérítést** is indíthatsz. A változások a PayPal eseményei alapján szinkronizálódnak.

- **Action Events (eseményalapú automatizálás)**  
  Kód írása nélkül köthetsz műveleteket az előfizetés életciklusához: például sikeres első fizetés után **szerepkört adsz**, e-mailt küldesz, **webhookot** hívsz, vagy átirányítasz.

- **PayPal Subscription Plan hozzárendelése**  
  A PayPal felületén létrehozott **Subscription Plan** azonosítóját manuálisan megadhatod, vagy űrlapmezőből betöltheted (pl. csomagválasztó mező).

## Hogyan működik? (Áttekintés)

1. **Előfizetési terv a PayPalban**: létrehozod a terméket és a hozzá tartozó Subscription Plant (Sandboxban vagy Live-ban).
2. **Gateway beállítás**: a JetFormBuilderen belül bekapcsolod a PayPalt, és megadod a REST API kulcsokat, külön a Sandbox és a Live környezethez.
3. **Űrlap konfigurálás**: hozzáadod a mezőket, a PayPal Checkoutnál a **Gateway Action = Create a subscription**, és csatolod a Plan azonosítót. Beállítod az üzeneteket, átirányításokat, Post Submit Actions-t és az Action Events logikát.
4. **Tesztelés**: Sandboxban végigpróbálod a folyamatot. A beküldés PayPalra visz, fizetés után visszairányít az oldalra.
5. **Kezelés**: a Subscriptions nézetben követed a státuszokat, tranzakciókat; adminból felfüggeszthetsz/lemondhatsz, visszatéríthetsz.

Példa beállítási kivonat:
```
Gateway: PayPal
Mode: Sandbox | Live
Gateway Action: Create a subscription
Subscription Plan: {PLAN_ID vagy űrlapmező}
Quantity: {mennyiségi_mező}
On success: Redirect → /koszonjuk
On fail: Egyedi hibaüzenet
```

## Gyakorlati példák

- **Tagsági klub havi díjjal**  
  Az űrlapon a felhasználó regisztrál, kiválasztja a csomagot, fizet PayPalon. Sikeres első díj után az Action Events automatikusan **tagsági szerepkört** ad, és megnyitja a zárt tartalmat. Lemondáskor a rendszer **visszavonja a hozzáférést**.

- **Online kurzus előfizetéssel és próbával**  
  A PayPalban beállított **7 napos próba** után indul a havi díj. Az űrlap sikeres előfizetéskor e-mailt küld a tananyag linkjeivel; sikertelen megújítás esetén értesítést és figyelmeztetést küld.

- **SaaS-szerű licencelés mennyiséggel**  
  A felhasználó megadja a szükséges licenc-számot; a mennyiségi mező alapján a bővítmény a megfelelő **mennyiség-alapú** vagy **sávos** díjat alkalmazza. A Subscriptions nézet a ciklusonkénti kifizetéseket átláthatóan mutatja.

## Előnyök és értékajánlat

- **WooCommerce nélkül** is teljes értékű előfizetéses számlázás.
- **Időmegtakarítás**: vizuális űrlapépítés, kód nélküli automatizálás.
- **Rugalmas árazás**: többféle modell és próbaperiódus egyetlen eszközben.
- **Központosított admin**: előfizetések, státuszok, visszatérítések egy helyen.
- **Megbízható szinkron**: a PayPal eseményei alapján frissülnek az állapotok. Előfordulhat 1–2 perc késés, de a státuszok rövid időn belül helyesek lesznek.

## Kinek ajánlott?

- **Tartalomkészítőknek és közösségeknek**: tagdíj, zárt cikkek, fórumhozzáférés.
- **Oktatóknak és tréningplatformoknak**: kurzus-előfizetések, csomagok, próbaidőszak.
- **SaaS/online szolgáltatásoknak**: licencelés mennyiség vagy sávos díj alapján.
- **Ügynökségeknek**: gyors bevezetés ügyfeleknél, skálázható folyamatok, minimális fejlesztés.

## Rendszerkövetelmények és előfeltételek

- **PayPal Business** fiók és **REST API** hitelesítő adatok.
- A JetFormBuilderben a **Payment Gateways** modul és a PayPal adatainak kitöltése.
- A webhelyed legyen **publikusan elérhető** (nem lokális), hogy a PayPal értesítései megérkezzenek.
- A bővítmény a **JetFormBuilder PRO** csomag része.

## Korlátozások és fontos megjegyzések

- **Csak JetFormBuilderrel** használható (nem JetEngine-hez).
- **Lokális** környezetben több funkció nem működik a PayPal visszahívásai miatt; használj publikus tesztkörnyezetet.
- **Felfüggesztés** után az aktiválás csak a **PayPal fiókból** lehetséges; **lemondott** előfizetés nem állítható vissza.
- A tranzakciók megjelenése **késhet** rövid ideig.

## Gyors beállítási recept

1. Telepítsd és aktiváld a JetFormBuilder PRO-t és a PayPal Recurring Payments add-ont.  
2. Állítsd be a PayPal REST appot, másold be a Client ID/Secret adatokat a Payment Gateways beállításokba.  
3. Hozd létre a Subscription Plant a PayPalban.  
4. Készíts űrlapot: mezők, PayPal Checkout → **Create a subscription**, add meg a Plan ID-t és a mennyiségi mezőt.  
5. Állítsd be a **Post Submit Actions**-t és az **Action Events**-et (pl. szerepkörváltás, webhook).  
6. Teszteld Sandboxban, majd válts Live módra.

## Alternatívák és kiegészítések

- **Stripe alapú előfizetésekhez** használhatod a JetFormBuilder Stripe add-ont.  
- Ha **WooCommerce**-szel szeretnél fizetéseket kezelni, a JetFormBuilder átadhatja az adatokat a WooCommerce folyamatnak.

Ha szeretnéd, készíthetek neked egy testreszabott ellenőrzőlistát vagy minta-űrlapot a saját előfizetéses esetedre (tagság, kurzus, SaaS).