---
title: "WPML String Translation"
description: "WPML kiegészítő, amellyel a bejegyzéseken és oldalakon kívüli felületi szövegeket (stringeket) fordíthatsz: témák, bővítmények, widgetek, űrlapok, hibaüzenetek."
sidebar_label: "WPML String Translation"
---

## Mi ez és milyen problémát old meg?

A **WPML String Translation** a WPML kiegészítője, amellyel minden olyan szöveget le tudsz fordítani, ami nem klasszikus bejegyzés, oldal vagy taxonómia. Ilyenek a webhely **szlogenje**, **widgetcímek**, **űrlapfeliratok és hibaüzenetek**, valamint a **témák és bővítmények** által megjelenített feliratok. Lényege, hogy ezeket a szétszórt “stringeket” egy központi felületen összegyűjti, és egységes fordítási folyamatba illeszti.

## Előfeltételek és csomagok

A bővítmény a WPML **Multilingual CMS** és **Multilingual Agency** csomagokban érhető el. Telepítés után a WordPress adminban megjelenik a **WPML → String Translation** menüpont. Ha jelenleg Blog csomagot használsz, frissítened kell a CMS csomagra.

## Fő funkciók részletesen

- **Automatikus felismerés és regisztrálás**  
  A bővítmény felismeri a frontenden megjelenő, még nem fordított szövegeket, és felveszi őket a fordítási listára. Beállíthatod, hogy ez csak bejelentkezett adminnak, vagy átmenetileg minden látogatónak fusson. Nagy forgalmú oldalon az utóbbit csak rövid ideig használd.

- **Kétféle munkafelület**  
  - **Translation Dashboard**: a különféle tartalomtípusok mellett az “Other texts (Strings)” részből tömegesen küldheted fordításra a stringeket – kézi, gépi vagy szolgáltatói fordítással.  
  - **String Translation képernyő**: részletes szűrés szöveg, domain, státusz és forrás szerint, egyenkénti szerkesztés, karbantartási műveletek.

- **Admin Texts (wp_options) fordítása**  
  A WordPress options táblájába mentett beállítások (akár szerializált tömbök) is fordíthatók. Az **objektum‑ID-k automatikus megfeleltetése** gondoskodik róla, hogy például kategória- vagy termékazonosítók a megfelelő nyelvi párjukra váltsanak.

- **Témák és bővítmények szkennelése**  
  A Theme and plugin localization felületen a rendszer beolvassa a textdomaineket, és elérhetővé teszi a megtalált stringeket fordításra.

- **.po/.pot import és export**  
  A fordítások ki- és beemelhetők .po fájlokkal. Hasznos, ha külső fordítóval dolgozol vagy költözöl.

- **Karbantartás és forráskövetés**  
  Törölheted a régi, árva domaineket, átállíthatod a stringek eredeti nyelvét, módosíthatod a prioritást, és a **Usage** oszlopban megnézheted, honnan származik egy szöveg (kódrészlet-előnézet).

- **Teljesítményre optimalizált kiszolgálás**  
  A fordítások **részleges .mo fájlokból** töltődnek be, így a frontend megjelenítésekor kevesebb adatbázis-lekérdezés történik. Ez jelentős gyorsulást ad, és multisite környezetben is működik.

- **Fordításmenedzsment és automatizálás**  
  A stringek ugyanúgy beküldhetők automatikus (AI) fordításra, mint az oldalak és bejegyzések. Fordítási krediteket is használhatsz.

## Gyakorlati munkamenet (ajánlott)

1. Nyisd meg a problémás oldalt, és kapcsold be a **stringek automatikus regisztrálását** (ideiglenesen akár minden látogatóra).
2. A **Translation Dashboard** felületen jelöld ki az “Other texts (Strings)” elemeket, és küldd fordításra (kézi vagy automatikus).
3. Ha valami nem látszik, a **String Translation → Utilities → Admin Texts** alatt add hozzá az options-ből érkező szövegeket.
4. Futtasd a **Theme and plugin localization** szkennelést, hogy a témák/bővítmények textdomainjeiből is bekerüljenek a stringek.
5. Tarts karban: töröld az elárvult domaineket, állítsd át a forrásnyelvet, ellenőrizd a **Usage** oszlopot.
6. Speciális eseteknél használd a fejlesztői hookokat.

## Konkrét példák

- **WooCommerce gombok**: “Add to cart” vagy checkout üzenetek fordítása a bővítmény domainjéből.  
- **Webhely szlogen és dátumformátum**: a WordPress beállításokból átvett szövegek többnyelvűvé tétele.  
- **Űrlaphibák**: “Kötelező mező” típusú üzenetek fordítása az űrlapbővítmény domainjében.  
- **Szerializált opciók**: egy header builder beállításainak fordítása Admin Texts-szel, ID‑átalakítással.  
- **Felhasználói bio**: szerzői bemutatkozás és becenév fordítása.

## Fejlesztői integráció

- **wpml-config.xml**: jelöld ki az Admin Texts elemeket, és kapcsold be az ID-k automatikus nyelvi megfeleltetését.  
- **String csomagok**: összetartozó szövegek csoportos kezelése jobb fordítói élményhez.  
- **Hookok és API-k**: stringek regisztrálása és lekérdezése kódból.

Példa kódrészlet:
```php
// Regisztrálás
do_action('wpml_register_string', 'my-domain', 'cta_label', 'Buy now');

// Fordítás lekérése
$label = apply_filters('wpml_translate_single_string', 'Buy now', 'my-domain', 'cta_label');
echo esc_html($label);
```

## Előnyök és értékajánlat

- **Időmegtakarítás**: minden felületi szöveg egyetlen rendszerben kezelhető.  
- **Kevesebb hibakeresés**: forráskövetés és szkennelés segít megtalálni a “rejtőzködő” feliratokat.  
- **Gyors oldalbetöltés**: .mo-alapú kiszolgálás csökkenti a DB-terhelést.  
- **Rugalmas folyamat**: manuális, automatikus és szolgáltatói fordítás kombinálható.

## Kinek ajánlott?

- **Ügynökségeknek** és fejlesztőknek: sok téma/bővítmény mellett is átlátható fordítási folyamat.  
- **Webshopoknak**: checkout, kosár és értesítések pontos lokalizálása.  
- **Vállalati oldalaknak / SaaS-nak**: UI-feliratok, widgetek és rendszerüzenetek egységes fordítása.  
- **Többnyelvű blogoknak**: beállításokból származó szövegek és widgetek fordítása.

## Hibaelhárítás és tippek

- **Nem találod a szöveget?** Kapcsold be az automatikus regisztrálást és futtasd a téma/bővítmény szkennelést.  
- **Options-ben lévő szöveg nem fordul?** Add hozzá az Admin Texts alatt; szerializált mezőknél is működik.  
- **Lassulás?** Az automatikus regisztrálást csak ideiglenesen futtasd minden látogatón, utána állítsd adminra.  
- **Review folyamat korlátozott**: a stringeknél nem minden esetben érhető el külön jóváhagyás.  
- **Nem teljesen kompatibilis téma/bővítmény?** Használj wpml-config.xml-t vagy a fejlesztői hookokat.  
- **Tarts rendet**: időnként töröld az árva/duplikált stringdomaineket a karbantartó eszközökkel.

Ezzel a bővítménnyel pontosan azt fordítod, amit a látogatók látnak – gyorsan, átláthatóan és teljes kontrollal.