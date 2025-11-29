---
title: "WooCommerce Pre-Orders"
description: "Hivatalos WooCommerce kiegészítő előrendelésekhez: időzített fizetés, megjelenési dátum, automatikus terhelés és átlátható ügyfélkommunikáció."
sidebar_label: "WooCommerce Pre-Orders"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Pre-Orders egy hivatalos bővítmény, amellyel a még nem elérhető termékeidet előrendelhetővé teheted. Segít időzíteni a fizetést (azonnal vagy megjelenéskor), kezeli az előrendelések teljes életciklusát, és transzparens kommunikációt ad a vásárlóknak. Nem kell kézzel vezetned, ki mikor fizetett és mit kell kiküldeni: a rendszer automatizálja a folyamatot.

## Hogyan működik röviden?

1. Termékszinten bekapcsolod az előrendelést, megadsz egy megjelenési dátumot/időt és — ha kell — egy külön előrendelési díjat.
2. Választasz fizetési időzítést:
   - **Upfront**: a vevő azonnal fizet a pénztárnál.
   - **Upon release**: a fizetés a megjelenéskor történik.
3. A vásárló leadja az előrendelést (a kosár/pénztár ezt a folyamatot ehhez igazítja).
4. A megjelenéskor a rendszer automatikusan terhel (támogatott átjáróval), vagy „Fizetés szükséges” e-mailt küld.
5. Az admin felületen tömegesen is teljesíthetsz, törölhetsz és üzenhetsz az érintett vásárlóknak.

## Fő funkciók

- **Előrendelés egyszerű és változatos termékeknél**  
  A termékadatoknál egy „Pre-Orders” fül jelenik meg. Itt kapcsolhatod be az előrendelést, állíthatsz megjelenési dátumot/időt, és dönthetsz a fizetés időzítéséről. Változatos terméknél a beállítás termékszintű (minden variációra érvényes).

- **Időzített fizetés két módban**  
  - **Upfront**: azonnali fizetés a pénztárnál — mint egy normál rendelésnél.  
  - **Upon release**: a fizetés csak a megjelenéskor történik. Támogatott fizetési átjáróval a terhelés automatikus; egyébként a bővítmény „Pay Later” móddal és „Payment Required” e-maillel kéri be a kézi fizetést.

- **Előrendelési díj (Pre-order Fee)**  
  Opcionálisan külön díjat számíthatsz fel a termékár felett (pl. limitált széria foglalójaként).

- **Testreszabható üzenetek és gombok**  
  Átírhatod a kosár/pénztár gombszövegeit (pl. „Pre-Order Now”), és megadhatsz dinamikus üzeneteket, amelyek kiírják a várható megjelenési időpontot.

- **Visszaszámláló rövidkód**  
  Jelenítsd meg, mennyi idő van hátra a megjelenésig:
  ```
  [woocommerce_pre_order_countdown]
  ```

- **Rendelés- és státuszkezelés**  
  Új rendelésállapot (pl. „pre-ordered”), külön előrendelés-státuszok (Active, Completed, Cancelled), valamint dedikált admin lista nézet szűrőkkel és gyűjtőműveletekkel (Cancel, Complete, Customer Message).

- **Készletlogika**  
  A normál WooCommerce készletszabályok érvényesek előrendelésnél is, így tudatosan limitálhatod a mennyiséget.

- **Fizetési átjáró kompatibilitás**  
  Az automatikus megjelenéskori terhelést több nagy átjáró támogatja (pl. Stripe, Authorize.net, Braintree, Square, CyberSource, Moneris, Opayo). Ha az átjáró nem támogatott, a „Pay Later” folyamat gondoskodik a kézi befizetésről.

- **WooCommerce Subscriptions integráció**  
  Előfizetés típusú termékeket is előrendelhetővé tehetsz. Nem támogatott a szinkronizált megújítás és a próbaidő azon a terméken, ahol előrendelés aktív.

- **WooPayments megjegyzés**  
  WooPayments esetén jelenleg csak az azonnali (Upfront) fizetés támogatott; a megjelenéskori automatikus terheléshez más, támogatott átjárót használj.

- **Modern Woo-kompatibilitás**  
  HPOS és a Cart & Checkout Blocks támogatott, így skálázható és jövőálló a rendeléskezelés.

## Gyakorlati példák

- **Új termék premier**: Limitált sneaker megjelenik jövő pénteken. Beállítod a dátumot, Upfront fizetést és egy 2 000 Ft előrendelési díjat. A rendszer előre beáramoltatja a bevételt és limitálja a készletet.
- **Digitális kiadvány**: E-könyv előrendelhető Upon release módban. Megjelenéskor a rendszer vagy automatikusan terhel, vagy „Fizess most” e-mailt küld; a letöltési linkek a teljesítéskor mennek ki.
- **Workshop/kurzus**: A dátum csúszik? Az admin nézetből tömeges üzenetet küldhetsz minden érintett előrendeléshez, és módosíthatod a megjelenési időpontot.

## Előnyök és értékajánlat

- **Átlátható folyamat**: Egységes státuszok, automatizált értesítések, kevesebb manuális hiba.  
- **Rugalmas cash-flow**: Választhatsz az azonnali bevétel (Upfront) és a késleltetett terhelés között.  
- **Jobb ügyfélélmény**: Egyértelmű üzenetek, visszaszámláló, „Saját fiók” előrendelés-fülek.  
- **Operatív hatékonyság**: Dedikált admin felület, szűrők és tömeges műveletek nagy kampányokhoz.

## Kinek ajánlott?

- **Márkák és webshopok**, amelyek rendszeresen indítanak új termékeket vagy limitált szériákat.  
- **Digitális tartalomgyártók**, akik elővásárlást kínálnak megjelenés előtt.  
- **Szolgáltatók és szervezők**, akik eseményeket, workshopokat előre értékesítenek, és fontos a pontos kommunikáció.  
- **Előfizetéses üzleti modellek**, amelyeknél az induló előfizetés előrendelhető (a megkötésekkel együtt).

## Fontos korlátozások és tippek

- **Kosár-korlát**: Egy rendelésben csak egy előrendelhető termék lehet (nincs vegyes kosár).  
- **Változatos termék**: Előrendelés termékszintű; egyedi variációra nem állítható külön.  
- **WooPayments**: Megjelenéskori automatikus terhelés nem támogatott; ehhez válassz más átjárót.  
- **Subscriptions**: Nincs szinkronizált megújítás és próbaidő előrendelés mellett.

## Gyors beállítási minták

- **Termék**: Pre-Orders fül → előrendelés bekapcsolása → megjelenési dátum/idő → előrendelési díj (opcionális) → fizetés időzítése (Upfront / Upon release).  
- **Üzenetek és gombok**: Saját szövegek a termékoldalra, katalógusra és pénztárra, dátum/idő dinamikus kiírásával.  
- **Visszaszámláló**:
  ```
  [woocommerce_pre_order_countdown]
  ```
- **Admin műveletek**: WooCommerce → Pre-Orders lista → szűrés státusz szerint → gyűjtőműveletek (Cancel, Complete, Customer Message).  

Ezzel a bővítménnyel végponttól végpontig uralhatod az előrendeléseket: beállítás, kommunikáció, készlet, fizetés és teljesítés — mindezt egy egységes, professzionális folyamatban.