---
title: "WooCommerce Memberships"
description: "Prémium WooCommerce-bővítmény tagsági rendszerekhez: tartalom- és termékhozzáférés, kedvezmények, drip tartalom, tagfelület és integrációk egy helyen."
sidebar_label: "WooCommerce Memberships"
---

## Mi ez, és milyen problémát old meg?

A WooCommerce Memberships egy bolt‑központú tagsági megoldás. Segítségével szabályozhatod, hogy ki láthat, olvashat vagy vásárolhat bizonyos tartalmakat és termékeket, adhatsz tagsági kedvezményeket, és időzítheted a „drip” jellegű feloldásokat. Ha ismétlődő díjazással szeretnél tagságot értékesíteni, a Memberships a hozzáférést kezeli, míg az előfizetéses számlázást egy külön bővítmény végzi. Így egy rendszerben tudod a paywallt, a termékhozzáférést, a kedvezményeket és az ügyfélkommunikációt.

## Hogyan működik röviden?

- **Tagsági tervek** (Membership Plans) határozzák meg, ki mihez fér hozzá.
- A hozzáférést **manuálisan**, **regisztrációkor** vagy **termékvásárlás után** adhatod.
- A rendszer automatikusan **korlátozza** a tartalmakat/termékeket, megjeleníti a megfelelő **üzeneteket**, és a tagoknak egy **tagfelületet** biztosít.
- „Drip” szabályokkal ütemezheted a feloldást; e‑mailek értesítik a tagokat a fontos státuszokról.

## Fő funkciók részletesen

### Tagsági tervek
- **Időtartam**: lehet korlátlan, fix időre szóló vagy konkrét dátumhoz kötött.
- **Belépés módja**: manuális engedélyezés, regisztráció, vagy egy/ több termék megvásárlása. Ugyanazon tervhez több külön termék is adhat belépést.
- **Életciklus**: aktív, szüneteltetett, lejárt állapotok; ezekhez igazodik a hozzáférés.

### Tartalom- és termékhozzáférés
- **Restrict Content**: bejegyzések, oldalak, egyedi bejegyzéstípusok és akár kategóriák/címkék korlátozása.
- **Gutenberg blokkok** és a `[wcm_restrict]` shortcode segítségével tagokra és nem tagokra szabott szakaszokat jeleníthetsz meg.
- **Termékkorlátozás**:
  - Megtekintés csak tagoknak (a katalogizált termékek rejtése/teaser).
  - Vásárlás korlátozása (látható, de csak tagok tehetik kosárba).
- **Megjelenítés nem tagoknak**: teljes elrejtés (404), teaser/kivonat, vagy átirányítás egy magyarázó oldalra dinamikus üzenetekkel.

### Tagsági kedvezmények
- **%-os vagy fix** diszkont adható a teljes boltra, kategóriákra vagy konkrét termékekre.
- Beállíthatod, hogy a nem tagok **lássák‑e** a tagkedvezményeket (konverziónövelő teaser).

### Tartalomcsorgatás (drip)
- Hozzáférés azonnal, **X nap/hét/hónap/év** után vagy **konkrét dátumon**. Ideális leckék, modulok, bónuszok ütemezett kiadására és onboardingra.

### Tagfelület (Members’ Area)
- Választható szekciók: **Content**, **Products**, **Discounts**, **Membership Notes**, **Manage**.
- A tag egy helyen látja az elérhető tartalmat, termékeket és kedvezményeket; innen tud kezelni, megújítani (előfizetéses modellben).

### E‑mailek és értesítések
- Előre beállítható és időzíthető üzenetek: **aktiválás**, **lejárat előtt**, **lejárt**, **megújítás emlékeztető**, **tagsági jegyzet**.
- Előfizetéshez kötött tagságnál a levelek összehangoltak a számlázási történésekkel.

### Szállítási kedvezmények
- **Ingyenes szállítás** csak tagoknak, a meglévő ingyenes szállítási móddal kombinálva és jogosultsághoz kötve.

### Import/Export
- Beépített **CSV import/export** tömeges létrehozáshoz, frissítéshez, migráláshoz. Fejlettebb folyamatokhoz REST/CLI eszközök érhetők el.

### Tagkönyvtár
- Nyilvános vagy zárt **taglista** blokkal/shortcode‑dal, terv és státusz szerint szűrhető. Az adminban külön kapcsolóval engedélyezhető.

### Integrációk és ökoszisztéma
- **Előfizetéses számlázás**: ismétlődő díjhoz külön előfizetés-kezelő szükséges; a Memberships a hozzáférést, a másik bővítmény a fizetést kezeli.
- **Csoportos tagság**: Teams kiegészítővel céges/családi „ülések”, szerepkörök, meghívások.
- **E‑mail marketing**: tagsági szegmensek szinkronizálása kampányokhoz.
- Egyéb kompatibilitások: közösségi fórumok, márkakezelés, csoportok.

### Kompatibilitás és adatvédelem
- **Cart & Checkout Blocks** és **HPOS** támogatás.
- Együttműködés a WordPress/WooCommerce **adat‑export és törlés** eszközeivel (GDPR folyamatok).

## Gyakorlati példák

- **Prémium cikkek/paywall**: csak tagok olvashatják a teljes cikket; nem tagok teaser‑t látnak és felhívást a csatlakozásra.
- **Wine Club**: tagok vásárolhatnak exkluzív borokat, a „Bor” kategóriára például **20%** kedvezményt kapnak, korai hozzáféréssel új tételekhez.
- **E‑learning**: modulonként „drip” feloldás (pl. hetente egy lecke), automatikus emlékeztető e‑mailekkel.
- **B2B csapatok**: a Teams kiegészítővel a beszerzési jogot egy adminisztrátor osztja szét az üléskeret alapján.

## Előnyök és értékajánlat

- **Egy rendszerben** kezeled a tartalom‑ és termékhozzáférést, kedvezményeket, dripet, e‑maileket.
- **Kevesebb bővítmény, kevesebb egyedi kód**, gyorsabb üzemeltetés és kisebb hibakockázat.
- **Konverzió‑barát** megjelenítési módok (teaser, átirányítás, dinamikus üzenetek).
- **Működtetési kényelem**: CSV import/export, tagfelület, automatizált kommunikáció.
- **Skálázható**: előfizetés, csapatok, marketing integrációk.

## Kinek ajánlott?

- Tartalomkiadóknak és blogoknak, akik **paywallt** szeretnének.
- Webáruházaknak **VIP/hűségprogramhoz**, korai hozzáféréshez és tagkedvezményekhez.
- Oktatóknak/coachoknak **drip** tananyaggal.
- Kluboknak/egyesületeknek **zárt közösségi** tartalomhoz és tagsági előnyökhöz.
- B2B értékesítőknek, akik **csapat‑ vagy céges hozzáférést** adnak.
- Ügynökségeknek, akik **WooCommerce‑natív** tagsági megoldást keresnek ügyfeleiknek.

## Fontos tudnivalók és tippek

- **Permalinks**: ne használj „Plain” struktúrát.  
- **Cache/optimalizálók**: a belépési/korlátozott oldalaknál zárd ki a teljes gyorsítótárat a téves láthatóság elkerüléséhez.
- **Üzenetek**: testreszabhatod a korlátozási szövegeket és a bejelentkezési emlékeztetőket.
- **Termékek**: több külön termék is adhat hozzáférést ugyanahhoz a tervhez; csoportos termék nem használható közvetlen beléptetésre.
- **Előfizetés**: ismétlődő díjhoz külön előfizetés‑kezelő kell; a Memberships önmagában nem számláz ismétlődően.
- **Tagfelület**: csak aktív tagságnál elérhető; a szekciók be‑/kikapcsolhatók.
- **Tagkönyvtár**: csak akkor jelenjen meg, ha az adminban engedélyezted; privát használathoz tedd korlátozó blokk mögé.

### Hasznos shortcode példák

```
[wcm_restrict plans="gold, silver"]
  Ez a tartalom csak Gold és Silver tagoknak elérhető.
[/wcm_restrict]

[wcm_directory plan="gold" status="active"]
```

Ezzel a bővítménnyel a tagsági élményt a boltod logikájába illesztheted: a hozzáférés, a kedvezmények és a kommunikáció egy kézben, WooCommerce‑natív módon kezelhető. Ha ismétlődő díjazásra, csapatokra vagy marketing szinkronra van szükséged, a kapcsolódó kiegészítőkkel teljes körű rendszert építhetsz.