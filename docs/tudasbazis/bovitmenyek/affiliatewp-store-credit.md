---
title: "AffiliateWP - Store Credit"
description: "Affiliate jutalékokat készpénz helyett áruházi egyenlegként kezelhetsz, amit az affiliáltak közvetlenül a saját webáruházadban költhetnek el."
sidebar_label: "AffiliateWP - Store Credit"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – Store Credit olyan kifizetési mód, amely a jóváhagyott affiliált jutalékokat **áruházi egyenleggé** alakítja. Az affiliáltak ezt az egyenleget a saját webáruházadban használhatják fel vásárlásra. Így:
- csökken a készpénzes kifizetések adminisztrációja és tranzakciós költsége,
- a pénz „házon belül” marad, növelve az utánrendeléseket és a visszatérő vásárlásokat,
- a mikrojutalékokat is kényelmesen kezelheted.

Újabb AffiliateWP kiadásokban a Store Credit funkció a fő bővítmény része (a kifizetések beállításai között). Régebbi rendszereknél használható a külön Store Credit add-on.

## Hogyan működik? (áttekintés)

1. Engedélyezed a Store Creditet az AffiliateWP beállításainál a kifizetések között. Dönthetsz arról, hogy minden affiliált kapjon-e ilyen kifizetést, vagy csak kijelöltek; kérhetsz affiliált oldali opt-int is.
2. Amikor egy referral kifizetettre áll (Paid), az összege **automatikusan jóváíródik** az affiliált áruházi egyenlegén.
3. Pénztár:
   - **WooCommerce**: a rendszer a fizetés előtt egy **egyszer használható, automatikus kupont** hoz létre a kosár végösszege és az elérhető egyenleg kisebbik értékéig. Sikeres fizetés után ennek összege levonódik az affiliált egyenlegéből.
   - **Easy Digital Downloads**: a jóváírás az EDD Wallet „pénztárcába” kerül, és onnan használható a fizetésnél. A Wallet bővítmény szükséges.
4. Előfizetések: WooCommerce Subscriptions és EDD Recurring esetén a store credit a megújuló rendelésekhez is alkalmazható.
5. Megjelenítés és admin: az affiliált a saját Affiliate Area felületén látja az aktuális egyenlegét; az admin a partner szerkesztésénél áttekintheti és szükség esetén naplózottan módosíthatja az összeget.

## Fő funkciók, részletesen

- **Automatikus jóváírás kifizetéskor**  
  Amint egy referral kifizetettre vált, a jutalék összege az affiliált áruházi egyenlegére kerül. Nem kell manuálisan utalni, számlázni vagy kupont készíteni.

- **WooCommerce pénztár-integráció**  
  A bővítmény a pénztárnál létrehoz egy egyszer használható kupont pontosan annyira az összegre, amennyi felhasználható (a kosár végösszegéig). Ez a folyamat láthatatlan az affiliált számára: egyszerűen kevesebbet fizet, a különbséget a kredit fedezi.

- **EDD integráció Wallettel**  
  EDD esetén a kredit az affiliált Wallet egyenlegét növeli. A pénztár ennek megfelelően használja fel a kreditet, ahogy a Wallet működése diktálja.

- **Előfizetések és megújítások támogatása**  
  Ha engedélyezed, a store credit automatikusan érvényesül a megújuló díjaknál, csökkentve a lemorzsolódást és a sikertelen fizetések kockázatát.

- **Választható hatókör és opt-in**  
  Engedélyezheted minden affiliáltra, vagy csak kiválasztott partnereknek. Az affiliáltak – ha szeretnéd – maguk is bekapcsolhatják a store credit kifizetést az affiliate felületen.

- **Átlátható egyenlegkezelés**  
  Az affiliált valós időben látja az egyenlegét és annak változásait. Admin oldalon kézi korrekció, növelés/csökkentés is elvégezhető, naplózott módosításokkal.

- **Rövidkód és fejlesztői hook**  
  Használhatod a rövidkódot az egyenleg megjelenítéséhez, és fejlesztői filter áll rendelkezésre a WooCommerce-kupon adatainak finomhangolásához.

## Gyakorlati példák

1. **Egyszeri WooCommerce vásárlás**  
   Van 18 900 Ft egyenlege. 24 990 Ft értékben vásárol. A pénztárban automatikusan keletkezik egy 18 900 Ft-os, egyszer használható kupon, ő pedig csak a különbözetet fizeti bankkártyával. Az egyenlege nullára csökken.

2. **Digitális termékek EDD-vel**  
   Letölthető sablonokat árulsz EDD-ben. Az affiliált jutaléka a Walletbe kerül, és a következő vásárlásnál a Wallet levonja a rendelkezésre álló kreditet. Nincs külső kifizetés, a folyamat teljesen belső.

3. **Előfizetés megújítása**  
   Tagsági előfizetésed havonta újul. Az affiliált időközben kreditet gyűjtött, ami automatikusan csökkenti a következő megújítás összegét. Kevesebb a sikertelen terhelés, stabilabb a retention.

## Beállítás és tippek

- Engedélyezd a Store Creditet az AffiliateWP beállításainál, a kifizetések között.  
- Döntsd el: minden affiliált vagy csak kiválasztottak kapjanak kreditet; szükség esetén kapcsold be az affiliált oldali opt-int.  
- WooCommerce-nél nincs külön teendőd: a kuponok automatikusan jönnek létre és használódnak el. A kuponok adózását és kerekítését a WooCommerce kupon-szabályai határozzák meg.  
- EDD-hez telepítsd és konfiguráld a Wallet bővítményt; enélkül a kredit nem használható fel.  
- Előfizetéseknél engedélyezd a kreditek alkalmazását a megújításokra.  
- Frontenden jelenítsd meg az egyenleget rövidkóddal:
  ```
  [affiliate_store_credit]
  ```
- Fejlesztői finomhangolás WooCommerce-hez:
  ```php
  add_filter( 'affwp_store_credit_woocommerce_coupon_data', function( $data, $affiliate_id ) {
      // Példa: egyedi leírás a generált kuponhoz
      $data['description'] = 'Store Credit – Affiliate #' . (int) $affiliate_id;
      return $data;
  }, 10, 2 );
  ```
- Új telepítéseknél használd a beépített Store Credit modult; a külön add-on inkább régi beállításoknál indokolt.

## Előnyök és értékajánlat

- **Kevesebb admin és díj**: belső kifizetés, nincs külső utalás vagy payout-díj.  
- **Több visszatérő vásárlás**: a jutalékot nálad költik el.  
- **Mikrojutalékok kezelése**: apró összegeket is értelmesen hasznosíthatsz.  
- **Automatizált pénztár**: nincs kézi kuponkezelés, nincs emberi hiba.  
- **Átláthatóság**: affiliált és admin oldalon is egyértelmű egyenleg- és előzménykezelés.

## Kinek ajánlott?

- **Saját termékeket áruló WooCommerce/EDD boltoknak**, ahol fontos a belső pénzáramlás és a CLV növelése.  
- **Előfizetéses szolgáltatóknak**, akik csökkentenék a lemorzsolódást megújításkor.  
- **Sok kis jutalékot kezelő programoknak**, ahol a készpénzes kifizetés aránytalanul drága lenne.  
- **Olyan marketingcsapatoknak**, akik motiválnák partnereiket további vásárlásokra házon belül.

## Kompatibilitás és korlátozások

- Támogatott platformok: **WooCommerce** és **Easy Digital Downloads**; EDD-hez **Wallet** szükséges.  
- Más e‑commerce plugineket nem támogat.  
- A Store Credit újabb AffiliateWP kiadásokban a fő bővítmény része; régebbi rendszereknél a külön add-on használható.  
- A kredit a webáruház pénznemében kerül nyilvántartásra és felhasználásra.  
- Visszatérítések és manuális korrekciók az alap e‑commerce munkafolyamat és az admin felület szerint kezelhetők.  

Összefoglalva: a Store Credit egy egyszerűen bevezethető, mégis erős eszköz arra, hogy az affiliált jutalékokat készpénzkifizetés helyett bevételvisszaforgató módon, áruházi egyenlegként kezeld – kevesebb adminnal, alacsonyabb költséggel és nagyobb ügyfélértékkel.