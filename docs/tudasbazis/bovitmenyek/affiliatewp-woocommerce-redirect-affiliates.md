---
title: "AffiliateWP - WooCommerce Redirect Affiliates"
description: "Ingyenes kiegészítő, amely a WooCommerce Saját fiók bejelentkezés után automatikusan az AffiliateWP Affiliate Area oldalára irányítja az affiliate felhasználókat."
sidebar_label: "AffiliateWP - WooCommerce Redirect Affiliates"
---

## Mi ez és milyen problémát old meg?

Az AffiliateWP – WooCommerce Redirect Affiliates egy ingyenes, nyílt forráskódú bővítmény, amely automatizálja az affiliate partnereid bejelentkezés utáni útját. Ha egy partnered a WooCommerce „/my-account” (Saját fiók) oldalon lép be, a bővítmény azonnal az AffiliateWP „Affiliate Area” (partnerfelület) oldalára irányítja. Ezzel megszűnik az a zavaró helyzet, amikor a partnerek a vásárlói fiókfelületen ragadnak, és manuálisan kell keresniük az affiliate eszközöket.

## Hogyan működik?

A bővítmény a WooCommerce Saját fiók bejelentkezési folyamatába illeszkedik. Belépéskor ellenőrzi, hogy a felhasználó affiliate-e.  
- Ha igen, a cél URL az Affiliate Area oldalra változik.  
- Ha nem, a WooCommerce alapértelmezett folyamat érvényesül.  

Nincs külön beállítás: aktiválás után rögtön működik. A működéshez szükséges, hogy a WooCommerce és az AffiliateWP aktív legyen az oldaladon.

## Fő funkciók

- **Automatikus átirányítás**: Az affiliate felhasználók a WooCommerce „/my-account” bejelentkezés után közvetlenül az Affiliate Area oldalra jutnak. Így azonnal látják saját hivatkozásaikat, statisztikáikat és jutalékaikat.
- **Beállítás nélküli indulás**: Telepítés és aktiválás után azonnal működik, nincs külön konfigurációs felület vagy bonyolult beállítási folyamat.
- **Testreszabható céloldal**: Az `affwp_wc_redirect` filterrel bármilyen egyedi URL-re irányíthatod az affiliate-eket (például onboarding, kampány-áttekintő vagy saját dashboard).
- **Zökkenőmentes vegyes szerepkör**: Sok felhasználó egyszerre vásárló és partner. A bővítmény gondoskodik arról, hogy affiliate-ként bejelentkezve azonnal a megfelelő felületet kapják.

## Telepítés és beüzemelés

1. Lépj a WordPress adminba: Bővítmények > Új hozzáadása.  
2. Keresd meg: „AffiliateWP – WooCommerce Redirect Affiliates”, majd Telepítés és Aktiválás.  
3. Alternatíva: a ZIP kicsomagolása a `wp-content/plugins` mappába, majd aktiválás az adminban.  
4. Nincs további teendő: ha a WooCommerce és az AffiliateWP aktív, az átirányítás azonnal életbe lép.

## Gyakorlati példák

- **Onboarding az első belépéskor**: Az új partnereket egy „Kezdés” oldalra tereled, ahol megkapják a legfontosabb tudnivalókat és promóciós anyagokat.
- **Kampányindítás**: Akciók idején a belépő partnereket egy kampány-áttekintő dashboardra irányítod, ahol minden kreatív és követőlink egy helyen elérhető.
- **Támogatás csökkentése**: Kevesebb „Hol találom az affiliate linkemet?” jellegű kérdés, mert a partner azonnal a megfelelő felületen landol.

## Testreszabás kóddal (affwp_wc_redirect)

Az átirányítás célját a `affwp_wc_redirect` filterrel módosíthatod. A kódot helyezd el egy egyedi bővítménybe vagy a sablonod `functions.php` fájljába.

- **Egyszerű átirányítás egyedi oldalra:**
```php
add_filter( 'affwp_wc_redirect', function( $url ) {
    return home_url( '/affiliate-onboarding/' );
} );
```

- **Csak első belépéskor irányíts onboarding oldalra:**
```php
add_filter( 'affwp_wc_redirect', function( $url ) {
    $user_id = get_current_user_id();
    if ( $user_id && ! get_user_meta( $user_id, '_aff_onboarded', true ) ) {
        update_user_meta( $user_id, '_aff_onboarded', 1 );
        return home_url( '/start-here/' );
    }
    return $url; // későbbi belépéseknél marad az Affiliate Area
} );
```

Tipp: teszteld fejlesztői környezetben, és ellenőrizd a gyorsítótárat/redirect szabályokat, hogy ne írják felül az átirányítást.

## Előnyök és értékajánlat

- **Kevesebb kattintás, kevesebb súrlódás**: A partner pontosan oda jut, ahol dolgozni szeretne.  
- **Gyorsabb munkakezdés**: Az affiliate eszközök és statisztikák azonnal láthatók.  
- **Kevesebb támogatási igény**: Csökkennek a navigációval kapcsolatos kérdések.  
- **Rugalmas folyamatok**: Egyedi céloldalakkal kampány- vagy onboarding-fókuszú élményt adhatsz.

## Kinek ajánlott?

- **WooCommerce webáruházaknak**, amelyek **AffiliateWP**-t használnak.  
- **Marketingcsapatoknak** és **ügynökségeknek**, akik egységesítenék az affiliate élményt, és kampányoknál központosított belépőt szeretnének.  
- **Olyan üzleteknek**, ahol a felhasználók gyakran egyszerre vásárlók és partnerek.

## Korlátok és megfontolások

- **Kizárólag a WooCommerce „/my-account” bejelentkezésre fókuszál**: Egyéb bejelentkezési űrlapokra nem feltétlenül vonatkozik.  
- **Függőségek**: Az átirányításhoz aktív és megfelelően beállított WooCommerce és AffiliateWP szükséges.  
- **Egyedi céloldalhoz kódolás kell**: A filter használatához minimális WordPress-fejlesztői ismeretekre van szükség.  
- **Környezeti hatások**: Gyorsítótár- és biztonsági bővítmények esetenként befolyásolhatják a redirectet; érdemes ezeket megfelelően konfigurálni.

## Fejlesztők és közreműködők

A bővítmény szerzője Syed Balkhi; közreműködők: Andrew Munro és Aubrey Portwood. A kiegészítő az AffiliateWP ökoszisztémájának hivatalos addonja.