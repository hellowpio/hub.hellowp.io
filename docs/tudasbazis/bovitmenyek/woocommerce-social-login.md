---
title: "WooCommerce Social Login"
description: "WooCommerce-kiegészítő, amellyel a vásárlók Facebook, Google, X/Twitter, Amazon, PayPal, LinkedIn vagy Disqus fiókkal regisztrálhatnak és jelentkezhetnek be – gyorsabb fizetés és kevesebb súrlódás."
sidebar_label: "WooCommerce Social Login"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Social Login egy **SkyVerge** által fejlesztett kiegészítő, amely lehetővé teszi, hogy a vásárlóid a megszokott **közösségi fiókjaikkal** lépjenek be vagy regisztráljanak az áruházadba. Ezzel **megszűnik a jelszó-fáradtság**, csökken a **checkout súrlódás**, és kevesebb lesz a **kosárelhagyás**. A bejelentkezési gombok a **Cart & Checkout Blocks** felületen is megjeleníthetők, így a modern WooCommerce-élménybe natívan illeszkedik.

Támogatott szolgáltatók: **Facebook, X (Twitter), Google, Amazon, PayPal, LinkedIn, Disqus**. Nem támogatott: **VK** (megszüntetve), **Instagram**, **Yahoo**.

## Hogyan működik röviden?

A bővítmény a szolgáltatók **OAuth/OIDC** folyamatait használja. A vásárló rákattint egy közösségi gombra, jóváhagyja az engedélyt, a bővítmény pedig biztonságosan létrehozza vagy összekapcsolja a **WordPress felhasználói fiókot**. Ha később leválasztja a közösségi profilt, akkor is beléphet **e‑mail/jelszó** párossal. Az Amazon bejelentkezéshez **SSL** kötelező a My Account és a Checkout oldalakon.

## Fő funkciók és mit csinálnak

- **Gombok elhelyezése több nézetben**  
  - **Checkout**: a bejelentkezési sávban vagy külön értesítésben jelenítheted meg, így a regisztráció és az első belépés közvetlenül a fizetés előtt történik.  
  - **Saját fiók**: itt a meglévő felhasználók könnyen **összekapcsolhatják/leválaszthatják** profiljaikat.  
  - **Thank You oldal**: rendelés után ösztönözheted a fiók összekapcsolását a jövőbeni gyors belépéshez.  
  - **Rövidkód és widget**: bárhol elhelyezheted (pl. landing oldalakon, modálokban).

- **Fiók‑összekapcsolás és egységes ügyfélprofil**  
  Több szolgáltató is kapcsolható egyetlen vásárlói fiókhoz, így **elkerülhetők a duplikátumok**. X/Twitter nem ad e‑mailt; ilyenkor a bővítmény bekéri, hogy azonosítható legyen a felhasználó.

- **Admin riportok és átláthatóság**  
  A **Social Registration** jelentés megmutatja, mely szolgáltatók konvertálnak. A Felhasználók listában külön **Social Profiles** oszlop segít ellenőrizni a kapcsolt fiókokat.

- **Testreszabás szolgáltatónként**  
  Engedélyezheted/tilthatod a szolgáltatókat, megadhatod az **App/Client ID** és **Secret** értékeket, szerkesztheted a gombfeliratokat, állíthatod a sorrendet. **PayPalnál** választhatsz környezetet (éles/teszt), és bizonyos esetekben külön engedély is szükséges lehet az appodhoz.

- **Kompatibilitás és integrációk**  
  Működik a **Cart & Checkout Blocks** felületen, és integrálható a **Product Reviews Pro** és a **WooCommerce Memberships** bővítményekkel (pl. gombok megjelenítése modálokban vagy hozzáférési üzenetekben). Kompatibilis a **High‑Performance Order Storage** tárolással is.

- **Fejlesztői lehetőségek**  
  Hookok és template tagek állnak rendelkezésre egyedi elhelyezésekhez és haladó integrációkhoz.

### Rövidkód példa

```
[woocommerce_social_login_buttons return_url="/fiokom/"]
```

A `return_url` annak az oldalnak az útvonala, ahová sikeres bejelentkezés után visszairányítod a felhasználót.

## Gyakorlati példák

- **Új vásárló a checkout elején**: rákattint a „Folytatás Google-lel” gombra, jóváhagyja az engedélyt, és már a számlázási mezőknél folytatja. Nincs új jelszó, nincs regisztrációs űrlap – gyorsabb fizetés.
- **Visszatérő vásárló**: a checkout oldalon egyetlen kattintással belép a korábbi LinkedIn profiljával; adatai automatikusan betöltődnek.
- **Rendelés utáni összekapcsolás**: a köszönő oldalon felugró értesítés kéri, hogy kösse össze a fiókját Facebookkal – így legközelebb még gyorsabb lesz a belépés.
- **Értékelések és tagság**: a Product Reviews Pro modáljában közösségi gombok jelennek meg; a Memberships a hozzáférési értesítésekben kínál bejelentkezést.

## Előnyök és értékajánlat

- **Kevesebb súrlódás, jobb konverzió**: a közösségi login a checkout egyik legnagyobb bottleneckjét tünteti el.  
- **Kevesebb jelszó‑reset**: csökken a support terhelés és az elveszett kosarak száma.  
- **Egységes ügyféladatok**: több szolgáltató is kapcsolható ugyanahhoz a fiókhoz, kisebb a duplikáció esélye.  
- **Átlátható adatok**: riportok segítenek megérteni, mely gombok működnek a legjobban.  
- **Fejlesztő‑barát**: shortcode, widget, hookok – könnyű elhelyezni ott, ahol tényleg számít.

## Kinek ajánlott?

- **Webshopoknak**, ahol sok az első vásárló és fontos a gyors fizetés.  
- **Mobil‑fókuszú áruházaknak**, ahol a gépelés minimalizálása konverziót hoz.  
- **Kampány‑ és hirdetésvezérelt forgalomnak**, ahol minden plusz kattintás számít.  
- **Visszatérő ügyfélbázissal** rendelkező üzleteknek, ahol a villámgyors belépés növeli a kosárértéket.  
- **Tagsági és közösségi funkciókat** használó oldalaknak, ahol a bejelentkezés sok helyen felbukkan.

## Telepítés és első lépések

1. Telepítsd és aktiváld a bővítményt, majd nyisd meg: **WooCommerce > Settings > Social Login**.  
2. Hozd létre a szükséges **social appokat** (pl. Facebook, Google, PayPal) és add meg az **App/Client ID** és **Secret** adatokat.  
3. Válaszd ki, hol jelenjenek meg a gombok: **Checkout**, **My Account**, **Thank You**, illetve használd a **rövidkódot** vagy a **widgetet**.  
4. Teszteld éles környezetben is. PayPal esetén ügyelj a környezetre; egyes funkciókhoz külön engedély kellhet.

Tippek hibakereséshez:
- Ne cache-eld a **WooCommerce session cookie‑kat** és a **/wc-api/** végpontot.  
- Bizonyos biztonsági bővítmények „hosszú URL szűrése” zavarhatja a Facebook login-t – ezt kapcsold ki, ha gondot látsz.  
- **Amazon** loginhoz legyen **SSL** a My Account és Checkout oldalakon.

## Rendszerkövetelmények és kompatibilitás

- Naprakész **WordPress**, **WooCommerce** és **PHP**.  
- A szerveren legyen engedélyezve a **cURL**.  
- Kompatibilis a **Cart & Checkout Blocks** felülettel és a **HPOS** tárolással.

## Fontos megjegyzések és korlátok

- Ez **nem fizetési megoldás**: a PayPal vagy Amazon itt csak bejelentkezésre szolgál.  
- Nem támogatott szolgáltatók: **VK**, **Instagram**, **Yahoo**.  
- **X/Twitter** nem ad vissza e‑mail címet; a bővítmény bekéri, ennek hiánya később **manuális e‑mail** pótlást igényelhet.