---
title: "FluentCart Pro"
description: "WordPress‑natív e‑kereskedelmi bővítmény Pro kiegészítője, amely előfizetést, licencelést, gyors pénztárat és fejlett fizetéseket ad egyetlen rendszerben."
sidebar_label: "FluentCart Pro"
---

## Mi ez és milyen problémát old meg?

A FluentCart Pro egy teljes értékű, WordPress‑natív e‑kereskedelmi megoldás, amely digitális és fizikai termékek, előfizetések és szoftverlicencek értékesítésére készült. Célja, hogy egyetlen, könnyű bővítménnyel válts ki több külön kiegészítőt: kapsz gyors és testreszabható pénztárat, előfizetés‑ és licencmenedzsmentet, rugalmas adózást és szállítást, fejlett jelentéseket és szoros integrációkat – platformdíjak és „plugin‑torlódás” nélkül.

Lényegében: mindent megkapsz egy egységes rendszerben, ami egy WordPress‑alapú webáruházhoz kell, akár szoftvert árulsz licenccel, akár előfizetéses szolgáltatást, digitális letöltést, fizikai terméket vagy ezek hibrid kombinációját.

## Fő funkciók részletesen

### Terméktípusok és előfizetések
- Egyszeri díjas digitális és fizikai termékeket hozhatsz létre variációkkal (ár, készlet, képek).
- Hibrid listázás: egy csomagban adhatod a digitális tartalmat és a fizikai küldeményt.
- Előfizetések: ismétlődő díjak, ütemezés, próbaidő, kezdő díj (setup fee) és részletfizetés. Az ügyfelek a saját fiókjukban kezelhetik a megújításokat, kártyát, lemondást, előzményeket.
- Upgrade path: ügyfelek fel‑ vagy átválthatnak magasabb csomagra, árkülönbözet és időarányosítás kezeléssel.

### Licenckezelés
- Automatikus licenckulcs‑generálás termékhez vagy csomaghoz.
- Aktiválási limitek, lejárati idő, megújítás és jogosultság‑megvonás nem fizetéskor – ideális bővítmények, sablonok, SaaS‑kulcsok vagy szoftverek árusításához.

### Pénztár és fizetések
- Gyors, mobil‑első checkout: egyedi mezők, elrendezés, order bump, kuponok és akciók.
- Beépített Stripe és PayPal, kézi/COD; támogatott Paddle; egyedi vagy lokális fizetési szolgáltatókat webhookokkal illeszthetsz.
- Nyugták/számlák sablonozása és email értesítések.

### Szállítás és adók
- Szállítási zónák és osztályok, súly/terület alapú díjazás.
- Összetett, egymásra épülő adók (compound tax) és régió‑specifikus szabályok.

### Digitális kézbesítés és tárhely
- Helyi tárhely vagy Amazon S3 integráció nagy fájlok biztonságos, gyors kiszolgálásához.
- Hozzáférés‑vezérlés a vásárlói státusz alapján, letöltési limitek.

### Testreszabás és fejlesztői eszközök
- Gutenberg/Elementor/Bricks kompatibilis blokkok.
- Checkout Fields képernyő egyedi mezőkhöz; Pages Setup a kulcsoldalakhoz.
- Hookok és REST API fejlesztőknek; sablonozható nyugták.

Példa saját mező hozzáadására a pénztárhoz:
```php
add_filter('fluentcart_checkout_fields', function($fields){
    $fields['billing']['fields'][] = [
        'key' => 'company_vat',
        'label' => 'Adószám',
        'type' => 'text',
        'required' => false,
    ];
    return $fields;
});
```

### Riportok és jogosultságok
- Bevétel, rendelések, visszatérítések, előfizetés‑ és licencstatisztikák.
- Admin szerepkörök és finomhangolható engedélyek üzletszinten.

### Integrációk a Fluent ökoszisztémában
- Közvetlen kapcsolódás email automatizáláshoz, ügyfélszolgálathoz, affiliate programhoz és közösségi modulokhoz – egységes adatfolyamokkal.

## Gyakorlati példák

- Szoftverfejlesztő cég: éves előfizetéses plugin három licencszinttel (1/5/Unlimited). Vásárláskor automatikus kulcsgenerálás, a fiókban kulcs újragenerálás és számlaletöltés, lejáratkor automatizált megújítási értesítés és jogosultság‑kezelés.
- Oktató: online kurzus videófájlokkal (S3‑ról), e‑könyvvel és nyomtatott munkafüzettel egy csomagban. Magyar és EU‑s adózási szabályok, zónás szállítás, promókód kampányok.
- D2C brand: gyors egyoldalas checkout, order bump „ajándék csomagolás” opcióval, regionális adózás és többféle fizetési mód.
- Ügynökség: tagsági előfizetés részletfizetéssel, automatikus CRM szegmentálás és támogatási jegy nyitása új vásárlóknak.

## Előnyök és értékajánlat

- Kevesebb plugin, kevesebb konfliktus: előfizetés, licencelés, kuponok, gyors pénztár, jelentések – mind beépítve.
- Teljes kontroll és nulla platformdíj: minden adat a saját szervereden, rugalmas testreszabhatóság.
- Jobb teljesítmény: könnyű, WordPress‑natív architektúra, nagy termék‑ és rendelésállomány mellett is gyors működés.
- Beépített növekedési eszközök: order bump, kampányok, kuponok, affiliate és email automatizálás natívan.
- Biztonságos digitális kiszolgálás: S3‑offload nagy fájlokhoz, hozzáférés‑vezérléssel.

## Kinek ajánlott?

- Szoftver‑ és bővítményfejlesztőknek, akik licenckulcsot és előfizetést kezelnének egyben.
- Tartalomkészítőknek és oktatóknak digitális letöltésekhez, kurzuscsomagokhoz, hibrid termékekhez.
- Előfizetéses szolgáltatóknak (tagság, karbantartás, coaching) rugalmas díjazással és ügyfélportállal.
- D2C kereskedőknek, akik gyors pénztárat, megbízható fizetést és összetett adó‑/szállítási szabályokat szeretnének.
- Ügynökségeknek és fejlesztőknek, akik skálázható, nyílt és fejleszthető WordPress‑megoldást keresnek.

## Telepítés és első lépések (röviden)

1. Telepítsd az ingyenes FluentCart alapbővítményt a WordPress adminban.
2. Töltsd fel és aktiváld a FluentCart Pro kiegészítőt (ZIP).
3. A licencmenüben aktiváld a Pro kulcsot a prémium funkciókhoz.
4. Állítsd be a kulcsoldalakat (Pages Setup) és a pénztármezőket (Checkout Fields).
5. Konfiguráld a fizetési módokat (Stripe/PayPal/kézi), az adó‑ és szállítási szabályokat.
6. Digitális termékekhez állíts be helyi tárhelyet vagy S3‑kapcsolatot.
7. Hozd létre a termékeket, csomagokat, előfizetéseket és – ha kell – licenctiereket és upgrade útvonalakat.

## Kell ez neked?

Igen, ha egyetlen, gyors és bővíthető WordPress‑megoldással szeretnél árulni digitális/fizikai termékeket, előfizetéseket vagy szoftverlicenceket, minimális bővítményfüggéssel, platformdíjak nélkül, teljes kontrollal a pénztár, a fizetések, a jogok és a kézbesítés felett. Ha pedig már Fluent eszközöket használsz, a natív integrációk miatt különösen sok erőforrást takarítasz meg.