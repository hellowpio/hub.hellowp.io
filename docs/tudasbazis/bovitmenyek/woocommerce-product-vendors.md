---
title: "WooCommerce Product Vendors"
description: "A WooCommerce áruházadat több‑eladós piactérré alakítja: vendorok, jutalékok, automatizált vagy manuális kifizetések, riportok és piactér‑megjelenítés."
sidebar_label: "WooCommerce Product Vendors"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Product Vendors egy hivatalos kiegészítő, amellyel a meglévő Woo‑áruházadat teljes értékű, több‑eladós (**multi‑vendor**) piactérré alakíthatod. Ahelyett, hogy külön piactér‑rendszert építenél, a már ismert WooCommerce adminban kezelheted a **vendorokat**, a termékeiket, a **jutalékokat** és a **kifizetéseket**. Így egy boltban több eladó árulhat fizikai, digitális vagy akár foglalható termékeket – a bevétel a te pénztáradon folyik át, a vendorok pedig megkapják a részüket.

## Hogyan működik?

- Pénzáramlás: a vevő mindig a te fizetési kapuidon keresztül fizet. A rendszer rendelésenként számolja a vendorok **jutalékát**, amit ütemezetten vagy azonnal kifizethetsz (automatizáltan PayPal Payouts‑szal vagy manuálisan).
- Jogosultságok: beépített szerepkörök határozzák meg, ki mit lát és mit szerkeszthet. A vendor csak a saját termékeit és rendeléseit éri el.
- Adatszerkezet: a vendor külön entitás (taxonómia) saját profillal, logóval és beállításokkal; fejleszthető hookokkal és egyedi mezőkkel. HPOS‑kompatibilis és működik a modern Woo blokkokkal.

## Fő funkciók részletesen

### Vendorok és jogosultságok
- Két vendor szerepkör: **Vendor Admin** (teljes hozzáférés a vendor beállításaihoz) és **Vendor Manager** (korlátozott).
- A bolttulajdonos jóváhagyhat, korlátozhat, és globális szabályokat állíthat.

### Vendor regisztráció
- Nyilvános jelentkezési űrlap shortcode‑dal, jóváhagyási folyamattal és e‑mail értesítésekkel.
```
[wcpv_registration]
```

### Termékkezelés
- A vendorok a WordPress adminban hozhatják létre/szerkeszthetik a saját termékeiket.
- Opcionális „jóváhagyást igényel” mód: minden új/ módosított terméket előbb te ellenőrzöl.
- Nincs külön front‑end termékbeküldő felület – ez tudatos egyszerűsítés a Woo admin élményre építve.

### Jutalékok és kifizetések
- **Jutalék** számítása százalékban vagy fix összegben, három szinten: alapértelmezett bolt, vendor, termék.
- **Automatizált kifizetés** PayPal Payouts‑szal (ütemezés: heti/kétheti/havi; akár azonnali).
- Bármikor választhatsz **manuális** kifizetést, CSV exporttal a nyitott jutalékokhoz.

### Szállítás és adók
- Beépített, vendoronként engedélyezhető **Per Product Shipping**; így a vendor saját szállítási díjat adhat meg termékenként.
- Adókezelés a jutalékhoz: adó megtartása, átadása vagy megosztása – illeszd a számlázási folyamataidhoz.

### Megjelenítés és értékelések
- „**Sold by**” címke a termék‑ és kosár/checkout nézetben; vendor logó és profil.
- Vendor értékelés a termékértékelések aggregálásával.
- Vendor lista és profilok shortcode‑dal, valamint widgettel.
```
[wcpv_vendor_list]
```

### Jelentések
- Külön riportok a bolttulajdonosnak és a vendoroknak: eladások, jutalékok, teljesítmény.
- **CSV export** a kifizetetlen jutalékokról tömeges kifizetéshez.

### Integrációk
- **WooCommerce Bookings**: vendoronként engedélyezve a partnereid foglalható termékeket is létrehozhatnak (pl. órák, bérlések).
- **WooCommerce Subscriptions**: jutalék az első és a megújuló fizetéseknél is.

### E‑mailek
- Jelentkezés visszaigazolás, jóváhagyás, új rendelés, lemondás, termékhozzáadás értesítés és vevői rendelésjegyzetek.

## Gyakorlati példák

- Kézműves piactér: több alkotó árul egy boltban. Te 15% jutalékot állítasz be, a vendorok saját termékeket és szállítási díjakat adnak meg. A kifizetés havonta automatikus, így van puffer a visszatérítésekhez.
- Digitális letöltések: fotók és hanganyagok. Nincs szállítás, a jutalék fix 1000 Ft fájlonként. Hetente exportálod a kifizetetlen jutalékokat, és manuálisan utalsz.
- Szolgáltatás‑piactér: edzők időpontokra foglalható órákat hoznak létre a Bookings‑szal. A vendorok csak a saját foglalásaikat látják; a jutalékot kéthetente utalod.

## Előnyök és értékajánlat

- Egyetlen Woo adminban menedzseled a teljes piacteret – nincs külön motor, nincs tanulási görbe.
- Átlátható **jutalék‑nyilvántartás** és rugalmas kifizetési folyamat (automatikus vagy manuális).
- Kész **piactér‑megjelenítés**: vendor oldalak, „Sold by” jelölés, értékelések – azonnal használható.
- Skálázhatóság és bővíthetőség: illeszkedik a Woo ökoszisztémába, HPOS‑kompatibilis, fejlesztői hookokkal.

## Korlátok és megfontolások

- Automatizált kifizetés csak **PayPal Payouts**‑szal működik; ha ez nem elérhető, marad a manuális kifizetés.
- Nincs front‑end termékbeküldés: a vendorok a WP adminban dolgoznak.
- Szállítás: vendor‑szinten a beépített Per Product Shipping támogatott; külső futár bővítmények nem delegálnak szabályt vendoronként.
- Egy termékhez csak egy vendor rendelhető.
- Adatvédelem: a vendor csak a saját rendeléseihez szükséges vevőadatokat látja – erről legyen egyértelmű tájékoztatás.
- Visszatérítések: a vendoronkénti összevezetés adminisztratív feladat lehet, tervezd meg a folyamataidat (pl. puffer, letéti egyenleg).

## Kinek ajánlott?

- Már működő Woo‑boltoknak, akik több partnerrel bővítenék a kínálatot jutalékos modellben.
- Közösségi és regionális piactereknek (pl. kézműves, termelői), ahol sok kisebb eladó jelenik meg.
- Digitális tartalom‑ és sablonpiactereknek.
- Szolgáltatói/foglalás alapú platformoknak, amelyek vendoronként szeretnék kezelni a kapacitást és bevételt.
- Ügynökségeknek, akik ügyfeleiknek Woo‑alapú piacteret szállítanak gyorsan és fenntarthatóan.

## Bevezetési tippek (best practice)

- Onboarding: tedd ki a jelentkezési űrlapot, állíts be jóváhagyást és e‑mail sablonokat.
- Payout politika: döntsd el az ütemezést (az ütemezett kifizetés pufferel a refundokra).
- Megjelenítés: kapcsold be a „Sold by” címkét, töltsd ki a vendor profilokat, használd a vendor listát.
- Integrációk: ahol kell, engedélyezd vendoronként a Bookings‑ot vagy a Subscriptions‑t.
- Adatkezelés: definiáld, milyen vevőadatokhoz fér hozzá a vendor, és dokumentáld a szabályzatban.